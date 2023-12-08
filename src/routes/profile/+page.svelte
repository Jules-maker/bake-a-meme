<script>
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import { isAuthenticated, isAdmin } from "$lib/auth.js";

    import {onMount} from 'svelte';

    const idToken = typeof localStorage !== 'undefined' ? localStorage.getItem('id_token') : null;
    let user = [];

    // Récupération des données de l'utilisateur connecté
    async function fetchUserData() {
        const response = await fetch('http://localhost:8080/api/account', {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        });
        const data = await response.json();
        return data;
    }

    onMount(async () => {
        user = await fetchUserData();
        console.log(user);
    });

    // Update des données de l'utilisateur connecté
    async function updateUser() {

        let change = false;

        let idData = user.id;
        let loginData = user.login;
        let emailData = user.email;
        let nomData = user.lastName;
        let prenomData = user.firstName;
        let actifData = user.activated;
        let roleData = user.authorities;

        let emailInput = document.getElementById("email").value;
        let nomInput = document.getElementById("nom").value;
        let prenomInput = document.getElementById("prenom").value;

        if (emailData !== emailInput || nomData !== nomInput || prenomData !== prenomInput) {
            change = true;
        }
        if (change === true) {

            try {
                const response = await fetch('http://localhost:8080/api/account', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${idToken}`,
                    },
                    body: JSON.stringify({
                        id: user.id,
                        login: loginData,
                        firstName: prenomInput,
                        lastName: nomInput,
                        email: emailInput,
                        imageUrl: null,
                        activated: null,
                        langKey: null,
                        createdBy: null,
                        createdDate: null,
                        lastModifiedBy: null,
                        lastModifiedDate: null,
                        authorities: null
                    }),
                });

                if (response.ok) {
                    // const data = await response.json();
                    // console.log('Update user successful:', data);
                    console.log('Update user successful');
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

</script>

<Header/>
{#if $isAuthenticated }

<section class="bg-white mx-40 my-40">
    <form action="#" class="grid gap-4 mb-4 sm:grid-cols-1 bg-slate-100 p-5 shadow-lg" >
        <div class="grid gap-4 mb-4 sm:grid-cols-1">
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
        </div>
        <div class="flex items-center space-x-4">
            <button on:click={() => updateUser()}
                    type="submit"
                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Enregistrer
            </button>
        </div>
    </form>
</section>
{:else}
  <p class="my-40 mx-auto font-bold text-2xl text-center">Vous n'êtes pas connecté !</p>
  {/if}
<Footer/>