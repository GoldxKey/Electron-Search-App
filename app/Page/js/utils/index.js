import {Promise} from 'es6-promise';

import {
  DEFAULT_WINDOW_OPTIONS
} from './const_value';

export const getFiles = (relativePath) => {
  return new Promise((resolve, reject) => {
    let fs = require('fs');
    // let path = require('path');
    // let CURRENT_PATH = path.resolve(__dirname);
    // console.log(CURRENT_PATH);
    // console.log(__dirname);
    // console.log(relativePath);
    // let targetPath = path.join(__dirname, relativePath);

    fs.readdir('../../image/language/', (err, files) => {
      if(err) {
        console.log(err);
        reject(false)
      }else {
        resolve(files);
      }
    });
  });
}

export const showNewPage = (url, name = 'new window', options) => {
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;
  let windowOptions = Object.assign({}, DEFAULT_WINDOW_OPTIONS, options);

  let showNewPage = new BrowserWindow({
    width: windowOptions.width,
    height: windowOptions.height,
    titleBarStyle: windowOptions.titleBarStyle,
    autoHideMenuBar: windowOptions.autoHideMenuBar,
    title: name,
    alwaysOnTop: windowOptions.alwaysOnTop,
    center: windowOptions.center,
    resizable: windowOptions.resizable,
  });
  showNewPage.on('closed', () => {
    showNewPage = null;
  });
  // showNewPage.setBounds({
  //   width: 1500,
  //   height: 700
  // }, true);
  showNewPage.loadURL(url);
  showNewPage.show();
}

export const expandWindow = (title) => {
  const remote = require('electron').remote;
  let currentWindow = remote.getCurrentWindow();
  currentWindow.setContentSize(800, 700, true);
  currentWindow.setTitle(title);
}
