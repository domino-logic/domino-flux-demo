import {dispatch} from '../dispatcher/dispatcher'
import domino from '../domino'

export function createAd (ad){
  domino.action('ads.create', ad)
}

export function adCreated(ad){
  dispatch({
    type:'ad/created',
    payload: ad
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
}