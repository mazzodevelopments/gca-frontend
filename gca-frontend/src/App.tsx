import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Root from './pages/Root';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import ClientPage from './pages/ClientPage/ClientPage';
import ClientAddPage from './pages/ClientPage/ClientAddPage';
import ClientEditPage from './pages/ClientPage/ClientEditPage';
import PolicyPage from './pages/PolicyPage/PolicyPage';
import PolicyAddPage from './pages/PolicyPage/PolicyAddPage';
import PolicyEditPage from './pages/PolicyPage/PolicyEditPage';

import { AuthProvider } from './context/AuthContext';
import { clientLoader } from './pages/ClientPage/clientLoader';
import { policyLoader } from './pages/PolicyPage/policyLoader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { path: 'login', element: <LoginPage /> },
            {
                path: 'client/:clientId',
                element: <ClientPage />,
                loader: clientLoader
            },
            { path: 'client-add', element: <ClientAddPage /> },
            {
                path: 'client/:clientId/edit',
                element: <ClientEditPage />,
                loader: clientLoader
            },
            {
                path: 'client/:clientId/policy/:policyId',
                element: <PolicyPage />,
                loader: policyLoader
            },
            {
                path: 'client/:clientId/policy/:policyId/edit',
                element: <PolicyEditPage />,
                loader: policyLoader
            },
            {
                path: 'client/:clientId/policy-add',
                element: <PolicyAddPage />
            },
            { path: '/', element: <HomePage /> }
        ]
    }
]);

export default function App() {
    return (
        <AuthProvider>
            <CookiesProvider>
                <RouterProvider router={router} />
            </CookiesProvider>
        </AuthProvider>
    );
}
