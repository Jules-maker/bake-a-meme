<script>
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import {onMount} from 'svelte';

    const idToken = localStorage.getItem('id_token');
    let users = [];

    async function getUsers() {
        const response = await fetch('http://localhost:8080/api/admin/users', {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        });
        const data = await response.json();
        return data;
    }

    async function deleteUser(userLogin) {
        try {
            // Make the DELETE request using Fetch API
            const response = await fetch(`http://localhost:8080/api/admin/users/${userLogin}`, {
                method: 'DELETE',
                headers: {
                    'Accept': '*/*',
                    'Authorization': 'Bearer ${idToken}'
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

    onMount(async () => {
        users = await getUsers();
        console.log(users);
    });
</script>

<Header/>

<section class="p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <!-- Start coding here -->
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <input type="text" id="simple-search"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="Search" required="">
                        </div>
                    </form>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-4 py-3">ID</th>
                        <th scope="col" class="px-4 py-3">Login</th>
                        <th scope="col" class="px-4 py-3">Nom</th>
                        <th scope="col" class="px-4 py-3">Prénom</th>
                        <th scope="col" class="px-4 py-3">Email</th>
                        <th scope="col" class="px-4 py-3">Role</th>
                        <th scope="col" class="px-4 py-3">
                            <span class="sr-only">Supprimer</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each users as user (user.id)}
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row"
                                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {user.id}
                            </th>
                            <td class="px-4 py-3">{user.login}</td>
                            <td class="px-4 py-3">{user.lastName}</td>
                            <td class="px-4 py-3">{user.firstName}</td>
                            <td class="px-4 py-3">{user.email}</td>
                            <td class="px-4 py-3">{user.authorities.slice(-1)}</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button on:click={() => deleteUser(user.login)}
                                        class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                        type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="white" viewBox="0 0 22 22"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                                              stroke="red" stroke-width="2" stroke-linecap="round"
                                              stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>

<Footer/>
