<script>
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
</script>

<Header/>

<main class="p-2 w-1/2 rounded-md m-auto min-h-full mt-40 relative bg-slate-100 shadow-2xl border border-slate-200"
      id="main">

    <h3 class="text-center text-3xl font-bold text-slate-500 p-2">Télécharger une image</h3>
    <div class="justify-between w-full flex">
        <button id="upload_widget" class="cloudinary-button" title="Télécharger une image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/>
            </svg>
        </button>
        <button id="save-button" class="p-3  bg-green-500 text-white rounded-full" title="Sauvgarder l'image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
            </svg>
        </button>

        <button id="delete-button" class="p-3 bg-red-500 text-white rounded-full" style="display: none;"
                title="Supprimer l'image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
            </svg>

        </button>
    </div>

    <div class="block my-2">
        <input type="text" id="text-input" placeholder="Entrez votre texte" class="p-2 rounded-md w-full">
    </div>
    <div class=" relative">
        <div id="image-container" class=" w-full  m-auto">
            <img id="uploadedimage" width="100%" alt="" onload="onImageLoad()">
            <div id="text-overlay"></div>
        </div>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.2.2/html2canvas.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/cloudinary-core/2.12.0/cloudinary-core-shrinkwrap.js"></script>

    <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>

    <script type="module">
        import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

        const textInput = document.getElementById("text-input");
        const textOverlay = document.getElementById("text-overlay");
        const uploadedImage = document.getElementById("uploadedimage");
        const deleteButton = document.getElementById("delete-button");

        deleteButton.addEventListener("click", function () {
            uploadedImage.setAttribute("src", "");
            textOverlay.textContent = "";
            // Cachez le bouton de suppression
            deleteButton.style.display = "none";
            // Effacez le texte de l'input
            textInput.value = "";
        });

        let isDragging = false;
        let offsetX, offsetY;

        function onImageLoad() {
            textInput.style.left = "50px";
            textInput.style.top = "50px";
        }

        function saveImage() {
            const node = document.getElementById('image-container');
            domtoimage.toPng(node)
                .then(function (dataUrl) {
                    const link = document.createElement('a');
                    link.download = 'bake_a_meme.png';
                    link.href = dataUrl;
                    link.click();
                })
                .catch(function (error) {
                    console.error('oops, une erreur lors de sauvgarde!', error);
                });
        }

        textInput.addEventListener("input", function () {
            textOverlay.textContent = textInput.value;
            if (textInput.value.trim() === "") {
                textOverlay.style.display = "none";
            } else {
                textOverlay.style.display = "block";
            }

            // Affichez le bouton de suppression uniquement si l'image est affichée
            if (uploadedImage.getAttribute("src")) {
                deleteButton.style.display = "block";
            } else {
                deleteButton.style.display = "none";
            }

        });


        textOverlay.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - textOverlay.getBoundingClientRect().left;
            offsetY = e.clientY - textOverlay.getBoundingClientRect().top;
            textOverlay.style.cursor = "grabbing";
        });

        document.addEventListener("mousemove", (e) => {
            if (isDragging) {
                const newX = e.clientX - offsetX;
                const newY = e.clientY - offsetY;
                textOverlay.style.left = newX + "px";
                textOverlay.style.top = newY + "px";
            }
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            textOverlay.style.cursor = "grab";
        });

        const cloudName = "dgmr6cbjr";
        const uploadPreset = "meme_preset";

        const myWidget = cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    deleteButton.style.display = "block";

                    const data = new FormData();
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
                                    const imagePayload = {url: result.info.secure_url};

                                    try {
                                        const response = await fetch("http://localhost:8080/api/images", {
                                            method: "POST",
                                            body: JSON.stringify(imagePayload),
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                        });

                                        if (response.ok) {
                                            // Vous pouvez ajouter ici une logique pour afficher un message de confirmation
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
                            } else {
                                console.log("Image refusée");
                                alert("L'image est porteuse d'un contenu offensant. Vous ne pouvez pas télécharger cette image.");
                                // Effacer l'image et le texte
                                uploadedImage.setAttribute("src", "");
                                textOverlay.textContent = "";

                                // Désactiver le bouton de suppression
                                deleteButton.style.display = "none";

                                // Désactiver le bouton de téléchargement
                                document.getElementById("upload_widget").disabled = true;
                                window.location.reload()
                            }
                        })
                        .catch(function (error) {
                            if (error.response) console.log(error.response.data);
                            else console.log(error.message);
                        });

                    uploadedImage.setAttribute("src", result.info.secure_url);
                }
            });

        document.getElementById("upload_widget").addEventListener(
            "click",
            function () {
                myWidget.open();
            },
            false
        );
        document.getElementById("save-button").addEventListener("click", function () {
            saveImage();
        });
    </script>
</main>

<style scoped>
    #image-container {
        position: relative;
    }

    #text-overlay {
        position: absolute;
        top: 50px;
        left: 50px;
        font-size: 24px;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
    }

    .cloudinary-button {
        border-radius: 50px;
    }
</style>

<Footer/>