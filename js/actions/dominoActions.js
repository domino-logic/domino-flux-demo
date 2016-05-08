import AdActions from './AdActions'
import domino from '../domino'

domino.register('platform.ads.*', function(payload, type){
  console.log(payload);
  switch(type){
    case 'platform.ads.adCreated':
      AdActions.adCreated(payload)
      break;
  }
})
