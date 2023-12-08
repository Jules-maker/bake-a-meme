<script>

    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Modal, Card} from 'flowbite-svelte';
    import {onMount} from "svelte";
    import { isAuthenticated, isAdmin } from '$lib/auth.js';

onMount(async () => {
    users = await getUsers();
    console.log(users);
});


const idToken = typeof localStorage !== 'undefined' ? localStorage.getItem('id_token') : null;
let users = [];
let userChart;


async function getUsers() {
    const response = await fetch('http://localhost:8080/api/admin/users', {
        headers: {
            Authorization: `Bearer ${idToken}`,
        },
    });
    const data = await response.json();
    return data;
}

    export let title = "Pas de titre pour l'instant";
    export let imageUrl = "http://localhost:5173/src/images/memes-test/";
    let imageData = [];

    const getImageFeed = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/images", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log(response);
            if (response.ok) {
                imageData = await response.json();
            } else {
                const data = await response.json();
                if (data.error) {
                    alert(`Erreur API: ${data.error}`);
                } else {
                    alert("Une erreur s'est produite lors du chargement des images.");
                }
            }
        } catch (error) {
            console.error("Erreur lors de la requête API :", error);
            alert("Une erreur s'est produite lors de la requête API.");
        }
    };
    
onMount(async () => {
    users = await getUsers();
    deleteImage();
});
    const deleteImage = async (imageId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/images/${imageId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                // Supprimer l'image du tableau local
                imageData = imageData.filter(image => image.id !== imageId);
            } else {
                const data = await response.json();
                if (data.error) {
                    alert(`Erreur API: ${data.error}`);
                } else {
                    alert("Une erreur s'est produite lors de la suppression de l'image.");
                }
            }
        } catch (error) {
            console.error("Erreur lors de la requête API :", error);
            alert("Une erreur s'est produite lors de la requête API.");
        }
    };

    onMount(getImageFeed);
    onMount(getImageFeed);
    console.log(imageData)

</script>
<main class="feedmain">
    <h1 class="font-bold text-xl mx-auto my-10 text-center">Envie d'utiliser les images déjà utilisées sur ce site ? Faites comme chez vous !</h1>
    <div class="grid">
    {#each imageData as image}
        <div class="grid-item">
            <a href={image.url} target="_blank">
                <img src={image.url} alt=""/>
            </a>
            {#if $isAuthenticated && isAdmin()}
                <button on:click={() => deleteImage(image.id)} class="p-2 bg-red-500 text-white border rounded-bl-md rounded-br-md">Supprimer</button>
            {/if}
            </div>
    {/each}
</div>
</main>

<style>
    .feedmain{
             width: 90%;
        margin: auto;
    }
    .grid {
   
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: min-content;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
       
    }

    .grid-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
   
    }

    img { width: 300px;
        height: 300px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        cursor: pointer;
    }
</style>
  