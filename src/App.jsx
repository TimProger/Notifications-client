import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Chat from './pages/Chat/Chat.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

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
                <Routes>
                    {routes.map((el, index) => <Route key={index} path={el.path} exact={el.exact} element={<el.component />} />)}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
