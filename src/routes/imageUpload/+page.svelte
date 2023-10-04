<main>
<h3>Upload Widget Example</h3>

<button
        id="upload_widget"
        class="cloudinary-button">
    Upload files
</button>

<p>
    <a
            href="https://cloudinary.com/documentation/upload_widget"
            target="_blank">Upload Widget User Guide</a>
</p>
<p>
    <a
            href="https://cloudinary.com/documentation/upload_widget_reference"
            target="_blank">Upload Widget Reference</a>
</p>

<!-- placeholder for uploaded image -->
<img
        id="uploadedimage"
        src=""
        alt="">
    <script
            src="https://widget.cloudinary.com/v2.0/global/all.js"
            type="text/javascript">

    </script>

    <script type="module">

        import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

        const cloudName = "dgmr6cbjr";
        const uploadPreset = "meme_preset";

        const myWidget = cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                // cropping: true, //add a cropping step
                // showAdvancedOptions: true,  //add advanced options (public_id and tag)
                // sources: [ "local", "url"], // restrict the upload sources to URL and local files
                // multiple: false,  //restrict upload to a single file
                // folder: "user_images", //upload files to the specified folder
                // tags: ["users", "profile"], //add the given tags to the uploaded files
                // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
                // clientAllowedFormats: ["images"], //restrict uploading to image files only
                // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
                // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
                // theme: "purple", //change to a purple theme
            },
            (error, result) => {
                if (!error && result && result.event === "success") {

                    let data;
                    data = new FormData();
                    data.append('url', result.info.secure_url);
                    data.append('models', 'offensive');
                    data.append('api_user', '1373396455');
                    data.append('api_secret', 'nmtJLv95FyBxXTv5HZWa');
                    axios({
                        method: 'post',
                        url:'https://api.sightengine.com/1.0/check.json',
                        data: data,
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

                    document
                        .getElementById("uploadedimage")
                        .setAttribute("src", result.info.secure_url);

                }
            }
        );

        document.getElementById("upload_widget").addEventListener(
            "click",
            function () {
                myWidget.open();
            },
            false
        );
    </script>
    <!-- cloudinary upload widget -->

</main>