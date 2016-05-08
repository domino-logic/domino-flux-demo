import {Store} from 'flux/utils';
import {reject, clone} from 'lodash'
import dispatcher from '../dispatcher/dispatcher';

var _ads = []

class AdStore extends Store {
  get(id) {
    return find(_ads, {id});
  }

  getAll () {
    return _ads;
  }

  __onDispatch({type, payload}) {
    switch (type) {
      case 'ad/created':
        _ads = _ads.concat(payload)
        break

      case 'ad/modified':
        ad = this.get(payload.id)
        Object.assign(ad, payload)
        ads = clone(ads)
        break

      case 'ad/deleted':
        _ads = reject(_ads, {id: payload})
        break

      default:
        return
    }

    return this.__emitChange();
  }
}


export default new AdStore(dispatcher);
