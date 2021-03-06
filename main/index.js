const { app, BrowserWindow } = require("electron");
const electron = require("electron");
const debug = require("electron-debug");
const path = require("path");
const { format } = require("url");
const { resolve } = require("app-root-path");
const isDev = require("electron-is-dev");
const { default: installExtension, VUEJS_DEVTOOLS } = require("electron-devtools-installer");

require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "../node_modules", ".bin", "electron")
});

//debug();
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

async function createWindow() {
  var displays = electron.screen.getAllDisplays();
  var display = displays[displays.length - 1];

  // Create the browser window.
  win = new BrowserWindow({
    title: "Viroid Games Tools",
    frame: false,
    icon: path.join(__dirname, "../renderer/src/assets/viroid_64x64.png"),
    acceptFirstMouse: true,
    hasShadow: false,
    minWidth: 1100,
    maxWidth: 1600,
    height: 500,
    x: display.bounds.x + 50,
    y: display.bounds.y + 50,
    webPreferences: {
      nodeIntegration: true
    }
  });

  const devPath = "http://localhost:8080";
  const prodPath = format({ pathname: resolve("dist/index.html"), protocol: "file:", slashes: true });

  const url = isDev ? devPath : prodPath;

  // Emitted when the window is closed.
  win.on("closed", () => {
    // Dereference the window object, usually you would store windows in an array if
    // your app supports multi windows, this is the time when you should delete the
    // corresponding element.
    win = null;
  });

  win.on("page-title-updated", event => event.preventDefault());

  win.loadURL(url);
  win.maximize();
  if (isDev) {
    await installExtension(VUEJS_DEVTOOLS);

    win.webContents.openDevTools();
  }
}

// This method will be called when Electron has finished initialization and is
// ready to create browser windows. Some APIs can only be used after this event
// occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar to stay active
  // until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the dock icon is
  // clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
