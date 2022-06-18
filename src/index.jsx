import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import GlobalStyles from './styles/clearStyles';
import FontFace from './styles/font-face';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <GlobalStyles/>
                <FontFace/>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
);
