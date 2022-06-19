import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import styled from 'styled-components';
import colors from './colors';
import Navbar from './components/Navbar/Navbar.jsx'
import useActions from './hooks/useActions';
import Flex from './ui/Flex'

const Chat = React.lazy(() => import('./pages/ChatPage/ChatPage.jsx'))

const routes = [
    {
        path: '/',
        component: Chat,
        exact: true,
    },
]

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.background || 'white'};
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex-direction: column;
`

function App() {
    const { fetchAllMessages } = useActions()
    React.useEffect(() => {
        fetchAllMessages()
    }, [])
    return (
        <AppWrapper background={colors.main_background}>
            <Navbar />
            <Flex type='centered' width='100%' height='400px'>
                <Suspense fallback={<div>Загрузка</div>}>
                    <Routes>
                        {routes.map((el, index) => <Route key={index} path={el.path} exact={el.exact} element={<el.component />} />)}
                    </Routes>
                </Suspense>
            </Flex>
        </AppWrapper>
    );
}

export default App;
