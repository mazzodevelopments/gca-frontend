import type { HomePageClient } from '../../types/client';
import { getAllClientsByUserId } from '../../services/clientService';

export interface HomeLoaderResults {
    clients: HomePageClient[];
}

function read_cookies(): Record<string, string | undefined> {
    const cookies: Record<string, string | undefined> = {};
    for (const item of document.cookie.split(';')) {
        const match = item.match(/^\s*([^]*?)="?([^]*?)"?\s*$/);
        if (match) cookies[match[1]] = decodeURIComponent(match[2]);
    }
    return cookies;
}

export async function homeLoader(): Promise<HomeLoaderResults> {
    // LEER COOKIES DEL NAVEGADOR
    const cookies = read_cookies();
    // EXTRAER USERID DE LAS COOKIES
    const authCookie = cookies.auth;
    const userId = authCookie ? JSON.parse(authCookie).userId : null;
    // SI NO HAY USERID REDIRIGIR AL LOGIN
    if (!userId) {
        window.location.href = '/login';
    }

    // OBTENER TODOS LOS CLIENTES DEL USER Y DEVOLVERLOS
    const clients = await getAllClientsByUserId(userId);
    return { clients };
}
