const dispatcher = require('../dispatcher/dispatcher')

function newAd (){
  const ad = {
    id: Math.floor(Math.random() * 100000),
    creationDate: new Date().toLocaleString(),
    type: 'Social Ad',
    name: 'Coca Cola',
    paused: Math.random() > .5,
  };

  dispatcher.dispatch({
    type:'ad/created',
    payload: ad
  })

}

module.exports = {
  newAd
}