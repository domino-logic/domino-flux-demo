import AdActions from './AdActions'
import domino from '../domino'

domino.register('ads.*', function(payload, type){
  console.log(payload);
  switch(type){
    case 'ads.adCreated':
      AdActions.adCreated(payload)
      break;
    case 'ads.adUpdated':
      AdActions.adUpdated(payload)
      break;
  }
})
