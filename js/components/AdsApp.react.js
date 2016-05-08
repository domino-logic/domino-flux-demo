import React from 'react'
import {Container} from 'flux/utils'

import AdStore from '../stores/AdStore'
import AdActions from '../actions/AdActions'
import AdTable from './AdTable.react'

import dominoActions from '../actions/dominoActions'

function forgeAd(){
  return {
    id: Math.floor(Math.random() * 100000),
    creationDate: new Date().toLocaleString(),
    type: 'Social Ad',
    name: 'Coca Cola',
    paused: Math.random() > .5,
  }
}

class AdsAppComponent extends React.Component {
  createAd () {
    AdActions.createAd(
      forgeAd()
    );
  }

  static getStores() {
    return [AdStore]
  }

  static calculateState(prevState) {
    return {
      ads: AdStore.getAll(),
    }
  }

  render (){
    return (
      <div>
        <h1>Lets get started </h1>
        <AdTable ads={this.state.ads}></AdTable>
        <div className="row">
          <div className="col-xs-12">
            <button onClick={this.createAd} className="btn btn-primary">
              New Ad
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Container.create(AdsAppComponent);
