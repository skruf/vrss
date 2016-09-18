import { app, BrowserWindow } from "electron"
import path from "path"

let mainWindow

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800
  })

  const mainURL = process.env.HOT
    ? `http://localhost:${process.env.PORT}/main.html`
    : "file://" + path.join(__dirname, "main.html")

  mainWindow.loadURL(mainURL)

  if(process.env.NODE_ENV !== "production") {
    mainWindow.openDevTools()
  }

  mainWindow.on("closed", () => {
    mainWindow = null
  })
})

app.on("window-all-closed", () => {
  app.quit()
})
