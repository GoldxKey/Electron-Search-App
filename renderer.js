// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
console.log('this is a Electron Demo Application');

// remote is used to connect with main-process and render-process
// clipboard provide functions to copy and paste
// const {clipboard, remote} = require('electron');
import {clipboard, remote} from 'electron';

// for example, you can use remote to get the currentWindow
let currentWindow = remote.getCurrentWindow();
console.log(currentWindow); // It's an Object
// some example of window's function
currentWindow.on('focus', () => {
  console.log('I\'m on focus');
});
currentWindow.on('blur', () => {
  console.log('I\'m on blur');
});
currentWindow.on('enter-full-screen', () => {
  console.log('I\'m on Max Size~');
});
// ATTENTION: some important things you must know:
// when you bind a callback on remote object, like above example, I bind 'focus', 'blur' and 'enter-full-screen'
// after that, it will always bind these callback until garbage collection.
// So, when you are not unbind them manully, every time you open the window, it will rebind these callback.


document.getElementById('clipboard').onclick = () => {
  clipboard.writeText('clipboard example of Electron App');
}

// also, you can use it to open a new window from render-process
document.getElementById('test').onclick = () => {
  const BrowserWindow = remote.BrowserWindow;
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL('https://github.com');
}

// for more use of remote, see
// https://github.com/electron/electron/blob/master/docs-translations/zh-CN/api/remote.md
