'use strict';


const DWS = require('domino-web-service');
const DAS = require('domino-actor-service');

const handler = require('./app/handler')

const httpServer = new DWS.createHttpServer({staticFolder:'static', port: 8000})
const socketServer = new DWS.createSocketServer({app: httpServer.server})

httpServer.start()
socketServer.start()

const app = new DAS.ActionHandler();

app.start(init)

function init (err, app){
  app.domain('ads')
    .actor('create', handler.adCreateHandler)
    .watcher('created', handler.adCreatedHandler)
}
