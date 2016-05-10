import {dispatch} from '../dispatcher/dispatcher'
import domino from '../domino'

export function createAd (ad){
  domino.action('ads.create', ad)
  .then((payload) => console.log(payload))
  .catch((payload) => console.error(payload))
}

export function adCreated(ad){
  dispatch({
    type:'ad/created',
    payload: ad
  })
}

export function getAds(ad){
  domino.action('ads.get')
  .then((ads) => receivedAds(ads))
  .catch((payload) => console.error(payload))
}

export function receivedAds(ads){
  dispatch({
    type:'ad/received',
    payload: ads
  })
}

export function setTeam(team) {
  domino.setContext({team})
}

export function setAccount(account) {
  domino.updateContext({account})
}

export default {
  createAd,
  adCreated,
  setAccount,
  setTeam,
  getAds,
  receivedAds,
}