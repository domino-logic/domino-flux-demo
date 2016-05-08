import Domino from 'domino-client-service'

const instance = new Domino('http://localhost:18007')

export default instance

export const register = instance.register.bind(instance)
export const updateContext = instance.updateContext.bind(instance)
export const setContext = instance.setContext.bind(instance)
export const action = instance.action.bind(instance)
