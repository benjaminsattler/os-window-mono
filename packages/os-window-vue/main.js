/* eslint-disable import/extensions */
import * as lib from './lib/index.js';

const {
  OsWindowVue,
} = lib;

export function install(Vue) {
  Vue.component('os-window-vue', OsWindowVue);
  Vue.config.ignoredElements.push('os-window');
}

export default OsWindowVue;
