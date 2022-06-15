import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar/Navbar.jsx'

const Chat = React.lazy(() => import('./pages/Chat/Chat.jsx'))

const routes = [
    {
        path: '/',
        component: Chat,
        exact: true,
    },
    // {
    //     path: '/profile',
    //     component: 2,
    //     exact: true,
    // },
]

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Suspense fallback={<div>Загрузка</div>}>
                    <Routes>
                        {routes.map((el, index) => <Route key={index} path={el.path} exact={el.exact} element={<el.component />} />)}
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
