const App = require('./app')

const SERVER_PORT = process.env.SERVER_PORT || 3000

App.createServer()
App.startServer(SERVER_PORT)

