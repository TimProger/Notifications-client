import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyles from './styles/clearStyles';
import FontFace from './styles/font-face';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles/>
        <FontFace/>
        <App />
    </React.StrictMode>,
);
