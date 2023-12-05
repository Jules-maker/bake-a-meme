<script>
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import {onMount} from 'svelte';

    let tokenInfo = null;

    onMount(async () => {
        // Retrieve the token from local storage
        const idToken = localStorage.getItem('id_token');

        if (idToken) {
            // Make an API call to your server with the token
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${idToken}`,
                },
            });

            if (response.ok) {
                // Parse the response JSON to get token information
                tokenInfo = await response.json();
            } else {
                console.error('Failed to fetch token information');
            }
        }
    });
</script>

<Header/>

<main>
    {#if tokenInfo}
        <h1>User Information:</h1>
        <p>Name: {tokenInfo.name}</p>
        <p>Email: {tokenInfo.email}</p>
        <!-- Add other fields as needed -->
    {:else}
        <p>No token available or failed to fetch token information.</p>
    {/if}
</main>

<Footer/>