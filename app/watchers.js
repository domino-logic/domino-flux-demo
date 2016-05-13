'use strict'


function adCreatedHandler(message, broadcast) {
  broadcast('ads.adCreated', message.content.payload)
}

function adUpdatedHandler(message, broadcast) {
  broadcast('ads.adUpdated', message.content.payload)
}

module.exports = {
  adCreatedHandler,
  adUpdatedHandler
}