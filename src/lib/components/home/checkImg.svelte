<script>
    import { onMount } from "svelte";

    const url = "https://api.sightengine.com/1.0/check.json";

    let data = null;
    let error = null;

    onMount(() => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: "https://sightengine.com/assets/img/examples/example1.jpg",
                models: "offensive",
                api_user: "1373396455",
                api_secret: "nmtJLv95FyBxXTv5HZWa",
            }),
        })
            .then((response) => response.json())
            .then((json) => {
                data = json;
                console.log(data);
            })
            .catch((err) => {
                error = err;
            });
    });

</script>

<h1>Résultats de l'API</h1>

{#if data}
    <p>
        Score d'offense : {data.score}
    </p>
    <p>
        Catégorie : {data.category}
    </p>
{:else if error}
    <p>
        Erreur : {error.message}
    </p>
{/if}