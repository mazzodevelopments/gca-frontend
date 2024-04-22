import { Outlet } from 'react-router-dom';
import LoginPage from './LoginPage';
import useAuth from '../hooks/use-auth-context';

export default function Root() {
    const { isLoggedIn } = useAuth();

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto p-4">
                {isLoggedIn ? <Outlet /> : <LoginPage />}
            </main>
        </div>
    );
}
