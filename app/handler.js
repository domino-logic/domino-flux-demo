const uuid = require('node-uuid');


function createAdHandler(body, dispatch) {
  ad = body.payload
  ad.id = uuid.v4()
  ad.creationDate = new Date().toISOString()
  ad.paused = Math.random() < .5
  ad.cpm = 1 + Math.random() * 2
  ad.type = 'Social Ad'

  dispatch('created', ad)
}

function adCreatedHandler(data, broadcast) {
  broadcast('ads.adCreated', data.payload)
}


module.exports = {
  adCreateHandler,
  adCreatedHandler,
}