<script>
    export let modalUserProps;
    let user = modalUserProps;

    const idToken = localStorage.getItem('id_token');

    // Check des sélecteurs HTML
    let activatedValue = user.activated ? 'true' : 'false';
    let roleValue = user.authorities.includes("ROLE_ADMIN") ? 'admin' : 'user';

    // Mise à jour des données de l'utilisateur désigné
    async function updateUser(id) {

        let change = false;

        let loginData = user.login;
        let emailData = user.email;
        let nomData = user.lastName;
        let prenomData = user.firstName;
        let actifData = user.activated;
        let roleData = user.authorities;

        let loginInput = document.getElementById("login").value;
        let emailInput = document.getElementById("email").value;
        let nomInput = document.getElementById("nom").value;
        let prenomInput = document.getElementById("prenom").value;
        let actifInput = null;
        actifInput = document.getElementById("actif").value === "true";
        let roleInput = null;
        if (document.getElementById("role").value === "admin") {
            roleInput = ["ROLE_USER", "ROLE_ADMIN"]
        } else {
            roleInput = ["ROLE_USER"]
        }
        if (loginData !== loginInput || emailData !== emailInput || nomData !== nomInput || prenomData !== prenomInput || actifData !== actifInput) {
            change = true;
        }
        if (change === true) {

            try {
                const response = await fetch('http://localhost:8080/api/admin/users', {
                    method: 'PUT',
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${idToken}`,
                    },
                    body: JSON.stringify({
                        id,
                        login: loginInput,
                        firstName: prenomInput,
                        lastName: nomInput,
                        email: emailInput,
                        imageUrl: null,
                        activated: actifInput,
                        langKey: null,
                        createdBy: null,
                        createdDate: null,
                        lastModifiedBy: null,
                        lastModifiedDate: null,
                        authorities: roleInput, // assuming authorities is a single string
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Update user successful:', data);
                    // Optionally, handle the success response here
                } else {
                    console.error('Update user failed:', response.status, response.statusText);
                    // Optionally, handle the error response here
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }
    }

    // Suppression des données de l'utilisateur désigné
    async function deleteUser(userLogin) {
        try {
            // Make the DELETE request using Fetch API
            const response = await fetch(`http://localhost:8080/api/admin/users/${userLogin}`, {
                method: 'DELETE',
                headers: {
                    'Accept': '*/*',
                    'Authorization': `Bearer ${idToken}`,
                },
            });

            if (response.ok) {
                console.log(`DELETE request for user ${userLogin} successful`);
                // Optionally, handle the success response here
            } else {
                console.error(`DELETE request for user ${userLogin} failed:`, response.status, response.statusText);
                // Optionally, handle the error response here
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
</script>

<main>
    <form action="#">
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <label for="login"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Login</label>
                <input type="text" name="login" id="login" value="{user.login}"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                       placeholder="Login">
            </div>
            <div>
                <label for="email"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" name="email" id="email" value="{user.email}"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                       placeholder="Email">
            </div>
            <div>
                <label for="nom"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                <input type="text" value="{user.lastName}" name="nom" id="nom"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                       placeholder="Nom">
            </div>
            <div>
                <label for="prenom"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                <input type="text" value="{user.firstName}" name="prenom" id="prenom"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                       placeholder="Prénom">
            </div>
            <div>
                <label for="actif" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profil
                    activé</label>
                <select
                        id="actif"
                        bind:value={activatedValue}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option value="true">Oui</option>
                    <option value="false">Non</option>
                </select>
            </div>
            <div>
                <label for="role"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rôle</label>
                <select id="role"
                        bind:value={roleValue}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option value="admin">Administrateur</option>
                    <option value="user">Utilisateur</option>
                </select>
            </div>
        </div>
        <div class="flex items-center space-x-4">
            <button on:click={() => updateUser(user.id)} type="submit"
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Enregistrer
            </button>
            <button on:click={() => deleteUser(user.login)}
                    type="button"
                    class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"></path>
                </svg>
                Supprimer
            </button>
        </div>
    </form>
</main>