/* eslint-disable import/extensions */
import * as lib from './lib/index.js';

if (typeof window !== 'undefined') {
  window.OsWindowReact = lib.OsWindowReact(window.React, window.PropTypes);
}
