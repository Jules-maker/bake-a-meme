<script>
    import axios from 'axios';
    import FormData from 'form-data';
    import fs from 'fs';

    let data;
    data = new FormData();
    data.append('media', fs.createReadStream('static/images/memes-test/SteamSetup.exe'));
    data.append('models', 'offensive');
    data.append('api_user', '1373396455');
    data.append('api_secret', 'nmtJLv95FyBxXTv5HZWa');

    axios({
        method: 'post',
        url:'https://api.sightengine.com/1.0/check.json',
        data: data,
        headers: data.getHeaders()
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
</script>
