<script>
    import { page } from '$app/stores';
    import Cookies from "./Cookies/+page.svelte"
</script>
<Cookies />
<div class="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
    <h1 class="text-4xl font-bold mb-4">Oops ! Page non trouvée</h1>
    <p class="text-lg">Il semble qu'une erreur se soit produite, désolé pour cela.</p>

    {#if $page?.error}
        <div class="mt-6 p-4 border rounded-md bg-red-100 border-red-300">
            {#if $page?.status}
                <p class="text-sm">Statut de la page : {$page?.status}</p>
            {/if}
            {#if $page?.error?.message}
                <p class="text-sm">Message d'erreur : {$page?.error?.message}</p>
            {/if}
        </div>
    {/if}
    
    <img src="../../src/images/error404.png" alt="Image 404" class="mt-8 max-w-full h-auto" />

    <a href="/" class="mt-8 text-blue-500 hover:underline">Retour à la page d'accueil</a>
</div>
