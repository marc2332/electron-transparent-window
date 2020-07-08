const { app, BrowserWindow } = require('electron')

app.on('ready', function () {
	let win = new BrowserWindow({ 
		width: 800, 
		height: 600,
		transparent:true,
		frame: false
	})
	win.on('closed', () => {
		win = null
	})
	win.loadURL(`file://${__dirname}/index.html`)
})
