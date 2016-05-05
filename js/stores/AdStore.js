import {Store} from 'flux/utils';
import {reject, clone} from 'lodash'
import dispatcher from '../dispatcher/dispatcher';

var _ads = [
  {
    id: '123325xdvs',
    type: 'Social Ad',
    creationDate: '23/01/2016 5:11pm',
    name: 'Coca Cola Ad',
    paused: true,
  },
  {
    id: '1235xdvs',
    type: 'TV Ad',
    creationDate: '23/02/2016 5:10pm',
    name: 'Pepsy Ad',
    paused: false,
  },
];


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
        break;

      case 'ad/modified':
        ad = this.get(payload.id)
        Object.assign(ad, payload)
        ads = clone(ads)

      case 'ad/deleted':
        _ads = reject(_ads, {id: payload})

      default:
        return;
    }

    return this.__emitChange();
  }
}


export default new AdStore(dispatcher);
