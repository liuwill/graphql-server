const App = require('./app')

const SERVER_PORT = process.env.SERVER_PORT || 3000

const serverApp = App.createServer();
App.startServer(SERVER_PORT);

