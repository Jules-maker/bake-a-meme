<script>
    // import axios from 'axios';
    // import FormData from 'form-data';
    // import fs from 'fs';
    //
    // // let res;
    //
    // function handleSubmit(event) {
    //     event.preventDefault();
    //
    //     console.log(event);
    //     console.log(event.target.elements.media.files[0]);
    //
    // let data;
    //     // data = new FormData();
    // data = new FormData(event.target);
    // data.append('media', fs.createReadStream(event.target.elements.media.files[0].name));
    // data.append('models', 'offensive');
    // data.append('api_user', '1373396455');
    // data.append('api_secret', 'nmtJLv95FyBxXTv5HZWa');
    //
    // axios({
    //     method: 'post',
    //     url:'https://api.sightengine.com/1.0/check.json',
    //     data: data,
    //     headers: data.getHeaders()
    // })
    //     .then(function (response) {
    //         // on success: handle response
    //         console.log(response.data);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         if (error.response) console.log(error.response.data);
    //         else console.log(error.message);
    //     });
    // }
    function handleSubmit() {
        const fileInput = document.getElementById('file-input');
        const file = fileInput.files[0];
        // console.log(fileInput.files[0]);

        if (file) {
            const reader = new FileReader();

            reader.onload = function () {
                const base64Data = reader.result.split(',')[1]; // Get the base64 data (after the comma)

                const imagePreview = document.getElementById('image-preview');
                console.log(base64Data);
            };

            reader.readAsDataURL(file);
        } else {
            alert('Please select a file to upload.');
        }
    }

</script>

<form on:submit={handleSubmit}>
    <input id="file-input" type="file" name="media" />
    <button type="submit">Submit</button>
</form>
