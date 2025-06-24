const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

// Mantener una referencia global del objeto de ventana
let mainWindow;

function createWindow() {
  // Crear la ventana del navegador
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: true,
      allowRunningInsecureContent: false
    },
    icon: path.join(__dirname, '../src/assets/logo.png'),
    show: false,
    titleBarStyle: 'default'
  });

  // Cargar la aplicación
  if (isDev) {
    // En desarrollo, cargar desde el servidor de desarrollo
    mainWindow.loadURL('https://phpstack-883512-3581748.cloudwaysapps.com/');
    // Abrir las herramientas de desarrollo
    mainWindow.webContents.openDevTools();
  } else {
    // En producción, cargar desde el build
    mainWindow.loadURL('https://phpstack-883512-3581748.cloudwaysapps.com/');
  }

  // Mostrar la ventana cuando esté lista
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Emitido cuando la ventana es cerrada
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Este método será llamado cuando Electron haya terminado
// la inicialización y esté listo para crear ventanas del navegador
app.whenReady().then(() => {
  createWindow();

  // En macOS, es común recrear una ventana en la aplicación cuando el
  // dock icon es clickeado y no hay otras ventanas abiertas
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit cuando todas las ventanas estén cerradas
app.on('window-all-closed', () => {
  // En macOS es común para las aplicaciones y sus barras de menú
  // permanecer activas hasta que el usuario salga explícitamente con Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// En este archivo puedes incluir el resto del código específico del proceso principal
// de tu aplicación. También puedes ponerlos en archivos separados y requerirlos aquí.