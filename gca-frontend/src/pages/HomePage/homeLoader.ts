import type { Client } from '../../types/client';
import { getAllClientsByUserId } from '../../services/clientService';

export interface HomeLoaderResults {
    clients: Client[];
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
    // Leer las cookies del navegador
    const cookies = read_cookies();
    // Extraer el userId de las cookies
    const authCookie = cookies.auth;
    const userId = authCookie ? JSON.parse(authCookie).userId : null;

    if (!userId) {
        throw new Error('User must be logged in');
    }

    // Obtener los clientes por userId
    const clients = await getAllClientsByUserId(userId);

    return { clients };
}
