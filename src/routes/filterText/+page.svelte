<script>
    import FormData from "form-data";
    import axios from "axios";

    let data;
    data = new FormData();
    data.append('text', "Jules aime le zizi");
    data.append('lang', 'fr');
    data.append('opt_countries', 'us,gb,fr');
    data.append('mode', 'rules');
    data.append('api_user', '1373396455');
    data.append('api_secret', 'nmtJLv95FyBxXTv5HZWa');
    axios({
        url: 'https://api.sightengine.com/1.0/text/check.json',
        method: 'post',
        data: data,
    })
        .then(function (response) {
            if (response.data.profanity.matches) {
                response.data.profanity.matches.forEach(element => {
                    // Console log de la nature du/des textes(s) refusé(s) par l'API Sightengine
                    console.log(element.type + " content: \"" + element.match + "\"");
                });
            } else {
                // Upload du texte sur la BDD
                const uploadText = async () => {
                    // const textPayload = {url: result.info.secure_url};
                    const textPayload = "test";

                    try {
                        const response = await fetch("http://localhost:8080/api/images", {
                            method: "POST",
                            body: JSON.stringify(textPayload),
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
                uploadText();
            }
        })
        .catch(function (error) {
            if (error.response) console.log(error.response.data);
            else console.log(error.message);
        });

    //
    // let data = new FormData();
    // data.append('text', 'Contact rick(at)gmail(dot)com to have s_*_x');
    // data.append('lang', 'en');
    // data.append('opt_countries', 'us,gb,fr');
    // data.append('mode', 'rules');
    // data.append('api_user', '{api_user}');
    // data.append('api_secret', '{api_secret}');
    //
    // axios({
    //     url: 'https://api.sightengine.com/1.0/text/check.json',
    //     method: 'post',
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

</script>
<p>Ok</p>
