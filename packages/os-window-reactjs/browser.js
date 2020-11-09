/* eslint-disable import/extensions */
import OsWindowReact from './lib/OsWindowReact.js';

if (typeof window !== 'undefined') {
  window.OsWindowReact = OsWindowReact(window.React, window.PropTypes);
}
