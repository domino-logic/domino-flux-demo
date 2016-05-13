'use strict';

const DWS = require('domino-web-service');
const DAS = require('domino-actor-service');

const options = require('./options')
const actors = require('./app/actors')
const watchers = require('./app/watchers')

const httpServer = new DWS.createHttpServer(options)

options.app = httpServer.server

const socketServer = new DWS.createSocketServer(options)

httpServer.start()
socketServer.start()

const app = new DAS.ActionHandler();

app.start(init)

function init (err, app){
  app.domain('ads')
    .actor('create', actors.createAdHandler)
    .actor('get', actors.getAdsHandler)
    .watcher('created', watchers.adCreatedHandler)
    .watcher('updated', watchers.adUpdatedHandler)
}
