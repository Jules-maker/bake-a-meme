<script>

    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Modal, Card} from 'flowbite-svelte';
    import {onMount} from "svelte";


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
    onMount(getImageFeed);
    console.log(imageData)

</script>

<div class="grid">
    {#each imageData as image}
        <div class="grid-item">
            <a href={image.url} target="_blank">
                <img src={image.url} alt=""/>
            </a>
        </div>
    {/each}
</div>

<style>
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

    img {
        cursor: pointer;
    }
</style>
  