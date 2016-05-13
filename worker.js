'user strict';


const DAS = require('domino-actor-service');
const workers = require('./app/workers')
const options = require('./options')

const dispatcher = new DAS.Dispatcher(options)

dispatcher.start(runWorker)


function runWorker(err, dispatcher){
  if(err){
    console.error(err);
    return
  }

  const dispatch = dispatcher.getDispatcherFor('ads')

  setInterval(
    workers.adUpdateWorker.bind(null, dispatch), 200
  )
}
