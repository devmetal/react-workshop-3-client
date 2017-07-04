import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';

import App from './App.v9';
import './index.css';

const Root = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
