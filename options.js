'user strict';


const DRM = require('domino-rabbitmq-messenger')

const options = {
  staticFolder:'static',
  port: 8000
}

options.messenger = new DRM.Messenger(this.options)

module.exports = options
