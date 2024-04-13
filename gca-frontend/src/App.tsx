import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ClientPage from './pages/ClientPage/ClientPage';
import { clientLoader } from './pages/ClientPage/clientLoader';
import ClientAddPage from './pages/ClientAddPage';
import { AuthProvider } from './context/AuthContext';
import { policyLoader } from './pages/PolicyPage/policyLoader';
import { PolicyPage } from './pages/PolicyPage/PolicyPage';

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
                path: 'client/:clientId/policy/:policyId',
                element: <PolicyPage />,
                loader: policyLoader
            },
            { path: '/', element: <HomePage /> }
        ]
    }
]);

export default function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />;
        </AuthProvider>
    );
}
