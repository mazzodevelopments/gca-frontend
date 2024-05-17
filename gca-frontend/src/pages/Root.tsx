import { Outlet } from 'react-router-dom';
import LoginPage from './LoginPage';
import useAuth from '../hooks/use-auth-context';
import NavBar from '../components/NavBar';

export default function Root() {
    const { isLoggedIn } = useAuth();

    return (
        <div className="min-h-screen bg-gray-100">
            <main>
                {isLoggedIn && <NavBar />}{' '}
                <section className="flex justify-center items-center ">
                    {isLoggedIn ? <Outlet /> : <LoginPage />}
                </section>
            </main>
        </div>
    );
}
