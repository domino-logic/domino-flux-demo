'use strict'

const redisClient = require("redis").createClient()

function adUpdateWorker(dispatch){
  redisClient.hgetall('ads', function(err, ads) {

    for(let id in ads){
      let ad = JSON.parse(ads[id])

      if(Math.random() > .90){
        ad.views = ad.views + Math.ceil(Math.random() * 10)
        redisClient.hset('ads', ad.id, JSON.stringify(ad))
        dispatch('updated', ad)
      }
    }

  })
}

module.exports = {
  adUpdateWorker
}