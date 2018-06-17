import React from 'react';
import ReactDOM from 'react-dom';
import './index.styles.css';
import { App } from './components/app/app.component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
