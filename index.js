const { app } = require('electron')
const { BrowserWindow } = require('electron-acrylic-window');

app.on('ready', function () {
	let win = new BrowserWindow({ 
		width: 800, 
		height: 600,
		transparent:true,
		frame: false,
		vibrancy: 'light'
	})
	win.on('closed', () => {
		win = null
	})
	win.loadURL(`file://${__dirname}/index.html`)
})
