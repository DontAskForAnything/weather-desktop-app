const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

/**
 * Creates a new Electron BrowserWindow and loads the application.
 *
 * @return {void}
 */
function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    minWidth: 700,
    height: 650,
    minHeight: 660,
    autoHideMenuBar: true,
    webPreferences: {devTools: false},
    icon: path.join(__dirname, '..', 'icon.png' ),
  });

  const startUrl = process.env.NODE_ENV === 'dev' ? 'http://127.0.0.1:5173/' :
  url.format({
    pathname: path.join( __dirname, '..', 'frontend', 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true,
  });
  win.loadURL(startUrl);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
