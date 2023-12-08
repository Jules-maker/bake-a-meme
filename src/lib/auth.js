import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

//////// Créez un store pour stocker l'état de connexion
export const isAuthenticated = writable(false);
export const username = writable('');
export const authToken = writable('');

export function isAdmin() {
    try {
        const role = localStorage.getItem('role');
        return role && role.includes('ROLE_ADMIN');
    } catch (error) {
        console.error('Erreur lors de la vérification du rôle administrateur:', error);
        return false;
    }
}

// REQUETE D'AUTHENTIFICATION POUR SE CONNECTER
export async function login(user, password) {
    try {
        const response = await fetch('http://localhost:8080/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: user, password }),
        });

        if (response.ok) {
            isAuthenticated.set(true);
            username.set(user);
            const data = await response.json();

            // Stockage du token sur le local storage
            const userToken = data.id_token;
            localStorage.setItem('id_token', userToken);

            if (userToken) {
                // Décryptage du token (publique)
                const [header, payload, signature] = userToken.split('.');

                const decodedPayload = JSON.parse(atob(payload));

                // Stockage des données publiques dans le local storage
                localStorage.setItem('role', decodedPayload.auth);
            }

            // Return the result of isAdmin()
            if(isAdmin()){
                goto('/users')
            }
        } else {
            console.error('Échec de la connexion');
            return false;
        }
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        return false;
    }
}

export function logout() {
    isAuthenticated.set(false);
    username.set('');
    authToken.set('');
    window.location.reload();
goto('/');
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('id_token');
        localStorage.removeItem('role');
    }
    console.log('Déconnecté');
}
