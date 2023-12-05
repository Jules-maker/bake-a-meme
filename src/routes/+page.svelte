<script>
  import Header from "$lib/components/header.svelte";
</script>

<Header />

<main>
  <h3>Télécharger une image</h3>

  <button id="upload_widget" class="cloudinary-button">Upload files</button>

  <!--    <p><a href="https://cloudinary.com/documentation/upload_widget" target="_blank">Upload Widget User Guide</a></p>-->
  <!--    <p><a href="https://cloudinary.com/documentation/upload_widget_reference" target="_blank">Upload Widget Reference</a></p>-->

  <!-- placeholder for uploaded image -->
  <img id="uploadedimage" src="" alt="">

  <!-- Include the Cloudinary SDK script -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/cloudinary-core/2.12.0/cloudinary-core-shrinkwrap.js"></script>

  <!-- Include the Cloudinary widget script -->
  <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>

  <script >
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
                  url: 'https://api.sightengine.com/1.0/check.json',
                  data: data,
                })
                        .then(function (response) {
                          if (response.data.offensive.prob < 0.7) {
                            console.log("Image acceptée");

                            const uploadImage = async () => {
                              const imagePayload = { url: result.info.secure_url };

                              try {
                                const response = await fetch("http://localhost:8080/api/images", {
                                  method: "POST",
                                  body: JSON.stringify(imagePayload),
                                  headers: {
                                    'Content-Type': 'application/json'
                                  },
                                });

                                if (response.ok) {
                                } else {
                                  const data = await response.json();
                                  if (data.error) {
                                    alert(`Erreur API: ${data.error}`);
                                  } else {
                                    alert("Une erreur s'est produite lors de l'envoi de l'image.");
                                  }
                                }
                              } catch (error) {
                                console.error("Erreur lors de la requête API :", error);
                                alert("Une erreur s'est produite lors de la requête API.");
                              }
                            };
                            uploadImage();

                            // async function destroyImage() {
                            //     const response = await axios.request("https://api.cloudinary.com/v1_1/demo/image/destroy", {
                            //         method: "POST",
                            //         headers: {
                            //             "Content-Type": "application/x-www-form-urlencoded",
                            //         },
                            //         body: new FormData([
                            //             ["public_id", 'scd6xtqds5wlzqgejguk'],
                            //             ["timestamp", "173719931"],
                            //             ["api_key", "413555337918452"],
                            //             ["signature", "a788d68f86a6f868af"],
                            //         ]),
                            //     });
                            //
                            //     if (response.status === 200) {
                            //         console.log("Image successfully destroyed.");
                            //     } else {
                            //         console.error("Failed to destroy image:", response.statusText);
                            //     }
                            // }
                            //
                            // destroyImage();

                            // cloudinary.uploader
                            //     .destroy(result.info.secure_url)
                            //     .then(result => console.log(result));
                          } else {
                            console.log("Image refusée");
                            alert("L'image est porteuse d'un contenu offensant");
                          }
                        })
                        .catch(function (error) {
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
</main>