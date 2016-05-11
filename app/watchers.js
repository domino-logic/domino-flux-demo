'use strict'

function adCreatedHandler(message, broadcast) {
  broadcast('ads.adCreated', message.content.payload)
}


module.exports = {
  adCreatedHandler
}