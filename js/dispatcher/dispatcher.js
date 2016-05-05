'use strict';

import {Dispatcher} from 'flux';

const instance = new Dispatcher();

export default instance;
export {instance as Dispatcher};
export const dispatch = instance.dispatch.bind(instance);