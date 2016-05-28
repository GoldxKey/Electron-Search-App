// ES6 syntax is available

const electron = require('electron')

// electron debug tool
require('electron-debug')({showDevTools: true});

// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// Module to create menu
const Menu = electron.Menu;
// Tray to add appIconMenu
const Tray = electron.Tray;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

let iconMenu = [
  {
    label: 'search in',
    submenu: [
      {
        label: 'github',
        click: (item) => {
          mainWindow.webContents.send('changeSite', 'github');
        }
      },
      {
        label: 'stackoverflow',
        click: (item) => {
          mainWindow.webContents.send('changeSite', 'stackoverflow');
        }
      },
      {
        label: 'segmentfault',
        click: (item) => {
          mainWindow.webContents.send('changeSite', 'segmentfault');
        }
      },
      {
        label: 'cnodejs',
        click: (item) => {
          mainWindow.webContents.send('changeSite', 'cnodejs');
        }
      }
    ]
  }
]

let menus = [
  {
    label: 'main',
    submenu: [
      {
        label: 'Version 1.0'
      },
      {
        label: 'Preferences',
        click: (item, focusedWindow) => {

        }
      },
      {
        label: 'About',
        click: (item, focusedWindow) => {

        }
      },
      {
        label: 'Quit',
        click: () => {
          app.quit();
        }
      }
    ]
  },
  ...iconMenu
];

const path = require('path');
const ipc = electron.ipcMain;
let appIcon = null;

// here to get more info of BrowserWindow:
// https://github.com/electron/electron/blob/master/docs-translations/zh-CN/api/browser-window.md
function createWindow () {
  // Create the browser window.
  // learn the config of BrowserWindow
  mainWindow = new BrowserWindow({
    width: 450,
    height: 700,
    // frame: false,
    titleBarStyle: 'hidden-inset', // top titleBar in your App, can be default, hidden, hidden-inset
    autoHideMenuBar: true,
    title: 'Electron Demo',
    alwaysOnTop: true,
    center: true,
    resizable: false,
    skipTaskbar: true,
    // icon: __dirname + './app/Page/image/gundamcat.png'
    // backgroundColor: '#000000'
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/app/View/index.html');
  // you can alse use a url, for example:
  // mainWindow.loadURL('https://github.com/');

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  // menu
  const menu = Menu.buildFromTemplate(menus);
  Menu.setApplicationMenu(menu);
  // appIconMenu
  const iconPath = path.join(__dirname, './app/Page/image/gundamcat_icon.png');
  appIcon = new Tray(iconPath);
  const contextMenu = electron.Menu.buildFromTemplate(iconMenu);
  appIcon.setToolTip('change search area');
  appIcon.setContextMenu(contextMenu);
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
