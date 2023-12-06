import {goto} from '$app/navigation';
import {writable} from 'svelte/store';

//////// Créez un store pour stocker l'état de connexion
export const isAuthenticated = writable(false);
export const username = writable('');
export const authToken = writable('');

// REQUETE D'AUTHENTIFICATION POUR SE CONNECTER
export async function login(user, password) {
    try {
        const response = await fetch('http://localhost:8080/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: user, password}),
        });

        if (response.ok) {
            ///// Mettez à jour l'état de l'authentification
            isAuthenticated.set(true);
            // Mettez à jour le nom d'utilisateur
            username.set(user);

            // Convertissez la réponse en JSON
            const data = await response.json();

            // Stockage du token sur le local storage
            const userToken = data.id_token;
            // console.log(userToken);
            localStorage.setItem('id_token', userToken);

            if (userToken) {
                // Décryptage du token (publique)
                const [header, payload, signature] = userToken.split('.');

                // Données publiques de lu token
                const decodedPayload = JSON.parse(atob(payload));
                // console.log(decodedPayload.auth);

                // Stockage des données publiques dans le local storage
                const arrayRole = decodedPayload.auth.split(',').map(role => role.trim());
                localStorage.setItem('role', decodedPayload.auth);
            }

            // REQUETE DES INFORMATIONS UTILISATEUR
            const endpoint = 'http://localhost:8080/api/admin/users/' + user;

            // Options de la requête
            const options = {
                method: 'GET',
                headers: {
                    'accept': '*/*',
                    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTcwMDQ5MzMyMH0.3yZdM_sh62OHZgrK9Hdl4hNNho3h4WgqP-qMUj5xX90L1PehRst-q-2jg74WOU751vksnBXp4YZlpNQeHAR5gg',
                },
            };

            // Le requête fonctionne avec le token admin mais il faut passer par le back pour la faire correctement
            // Token admin
            // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTcwMDQ5MzMyMH0.3yZdM_sh62OHZgrK9Hdl4hNNho3h4WgqP-qMUj5xX90L1PehRst-q-2jg74WOU751vksnBXp4YZlpNQeHAR5gg

            try {
                // Effectuer la requête
                const response = await fetch(endpoint, options);

                // Vérifier si la requête a réussi (status 2xx)
                if (response.ok) {
                    // Convertir la réponse en JSON si nécessaire
                    const data = await response.json();
                    console.log('Réponse de l\'API:', data);
                } else {
                    console.error('Erreur lors de la requête à l\'API');
                }
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la requête:', error);
            }

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