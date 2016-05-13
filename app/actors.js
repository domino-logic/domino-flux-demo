'use strict'

const uuid = require('node-uuid');
const redisClient = require("redis").createClient();


function createAdHandler(message, response, dispatch) {
  const ad = message.content.payload
  ad.id = uuid.v4()
  ad.creationDate = new Date().toISOString()
  ad.paused = Math.random() < .5
  ad.cpm = 1 + Math.random() * 2
  ad.type = 'Social Ad'
  ad.views = 0

  redisClient.hset('ads', ad.id, JSON.stringify(ad))

  response.ok(ad)
  dispatch('created', ad)
}

function getAdsHandler(message, response) {
  redisClient.hgetall('ads', function(err, ads) {
    const values = []

    for(let id in ads){
      values.push(JSON.parse(ads[id]))
    }
    response.ok(values)
  })
}


module.exports = {
  createAdHandler,
  getAdsHandler
}