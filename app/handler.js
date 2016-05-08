const uuid = require('node-uuid');


function adCreateHandler(body, dispatch) {
  ad = body.payload
  ad.id = uuid.v4()
  ad.creationDate = new Date().toISOString(),
  dispatch('created', ad)
}

function adCreatedHandler(data, broadcast) {
  broadcast('ads.adCreated', data.payload)
}

module.exports = {
  adCreateHandler,
  adCreatedHandler,
}