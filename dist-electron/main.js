import { app, BrowserWindow, ipcMain } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let mainWindow = null;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 574,
    height: 564,
    resizable: false,
    icon: path.join(process.env.APP_ROOT, "src", "assets", "logo.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true,
    transparent: true,
    frame: false
  });
  mainWindow.loadURL(
    process.env.VITE_DEV_SERVER_URL || `file://${path.join(__dirname, "../dist/index.html")}`
  );
  ipcMain.on("splash-complete", () => {
    if (mainWindow) {
      mainWindow.setResizable(true);
      mainWindow.setMinimumSize(1280, 832);
      mainWindow.setSize(1280, 832, true);
      mainWindow.center();
    }
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    mainWindow = null;
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
app.whenReady().then(createWindow);
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
