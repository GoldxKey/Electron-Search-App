// ES6 syntax is available

const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// Module to create menu
const Menu = electron.Menu;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

let menus = [
  {
    label: 'search',
    submenu: [
      {
        label: 'in github',
        click: (item, focusedWindow) => {

        }
      },
      {
        label: 'in stackoverflow',
        click: (item, focusedWindow) => {

        }
      },
      {
        label: 'in segmentfault',
        click: (item, focusedWindow) => {

        }
      }
    ]
  }
]

// here to get more info of BrowserWindow:
// https://github.com/electron/electron/blob/master/docs-translations/zh-CN/api/browser-window.md
function createWindow () {
  // Create the browser window.
  // learn the config of BrowserWindow
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false,
    titleBarStyle: 'hidden-inset', // top titleBar in your App, can be default, hidden, hidden-inset
    autoHideMenuBar: true,
    title: 'Electron Demo',
    alwaysOnTop: true,
    center: true,
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
  const menu = Menu.buildFromTemplate(menus);
  Menu.setApplicationMenu(menu);
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
