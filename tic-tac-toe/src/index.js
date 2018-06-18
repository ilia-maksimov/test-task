import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { configureStore } from './store/configureStore';
import './index.styles.css';
import App from './containers/app/app.container';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
	<Provider store = { store }>
		<Router history = { history }>
			<App />
		</Router>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
