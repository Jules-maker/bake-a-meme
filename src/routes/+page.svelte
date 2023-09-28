<script>
    import Header from '$lib/components/home/header.svelte';
    import CheckImg from "$lib/components/home/checkImg.svelte";
    import axios from 'axios';
    import FormData from 'form-data';

    async function sendImage(imageUrl) {
        const data = new FormData();
        data.append('media', await axios.get(imageUrl));
        data.append('models', 'nudity,wad,offensive,text-content,gore');
        data.append('api_user', '1374066647');
        data.append('api_secret', 'qiD7P27GafceZqK4zB9K');

        axios({
            method: 'post',
            url: 'https://api.sightengine.com/1.0/check.json',
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                // on success: handle response
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                if (error.response) console.log(error.response.data);
                else console.log(error.message);
            });
    }
</script>

<button on:click={sendImage('https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg')}>Send image</button>

<Header />
<!--<CheckImg />-->



<!--<h1>Welcome to SvelteKit</h1>-->
<!--<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>-->