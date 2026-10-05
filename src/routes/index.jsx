import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Wrapper from '../components/Wrapper';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((item) => (
                    <Route
                        key={item.id}
                        path={item.path}
                        element={
                            item.noWrapper
                                ? item.component
                                : <Wrapper>{item.component}</Wrapper>
                        }
                    />
                ))}

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

const routes = [
    {
        id: 0,
        path: '/',
        component: <Home />,
    },
];