'use strict';


const DWS = require('domino-web-service');
const DAS = require('domino-actor-service');

const actors = require('./app/actors')
const watchers = require('./app/watchers')

const httpServer = new DWS.createHttpServer({staticFolder:'static', port: 8000})
const socketServer = new DWS.createSocketServer({app: httpServer.server})

httpServer.start()
socketServer.start()

const app = new DAS.ActionHandler();

app.start(init)

function init (err, app){
  app.domain('ads')
    .actor('create', actors.createAdHandler)
    .actor('get', actors.getAdsHandler)
    .watcher('created', watchers.adCreatedHandler)
}
