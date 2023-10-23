import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

//////// Créez un store pour stocker l'état de connexion
export const isAuthenticated = writable(false);
export const username = writable('');
export const authToken = writable('');

// Fonction pour se connecter
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
      ///// Mettez à jour l'état de l'authentification
      isAuthenticated.set(true);
      // Mettez à jour le nom d'utilisateur
      username.set(user);
      return true; 
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
    goto('/')

    // Supprime le token de localStorage (si disponible)
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(JWT_KEY);
    }
    console.log('déconnecté')

  }