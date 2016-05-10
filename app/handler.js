const uuid = require('node-uuid');


function createAdHandler(message, response, dispatch) {
  ad = message.content.payload
  ad.id = uuid.v4()
  ad.creationDate = new Date().toISOString()
  ad.paused = Math.random() < .5
  ad.cpm = 1 + Math.random() * 2
  ad.type = 'Social Ad'

  if(Math.random() < .5){
    response.ok(ad)
    dispatch('created', ad)
  }
  else
    response.error('Error!!!')
}

function adCreatedHandler(message, broadcast) {
  broadcast('ads.adCreated', message.content.payload)
}


module.exports = {
  createAdHandler,
  adCreatedHandler,
}