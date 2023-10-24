<script>

    import Header from "$lib/components/header.svelte";
    import Feed from '$lib/components/feed/feed.svelte';
    import Footer from "$lib/components/footer.svelte";

    // Informations de l'entreprise
    let companyName = "Bake A Meme";
    let companyAddress = "1 rue de la Need For School";
    let companyEmail = "contact@bakeameme.com";
    let companyPhone = "+1 (123) 456-7890";
</script>

<Header/>

<main class="container mx-auto px-4">
    <h1 class="text-3xl font-semibold mt-8 mb-4 text-center">Mentions Légales</h1>

    <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Informations légales</h2>
        <p>Raison sociale : {companyName}</p>
        <p>Adresse : {companyAddress}</p>
        <p>Email : {companyEmail}</p>
        <p>Téléphone : {companyPhone}</p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md mt-4">
        <h2 class="text-xl font-semibold mb-4">Responsabilité</h2>
        <p>Le contenu de ce site est fourni à titre informatif uniquement. Bien que nous nous efforcions de maintenir
            les informations à jour et exactes, nous ne pouvons garantir leur exhaustivité ni leur exactitude. Nous ne
            sommes pas responsables de l'utilisation que vous faites des informations présentes sur ce site.</p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md mt-4">
        <h2 class="text-xl font-semibold mb-4">Propriété intellectuelle</h2>
        <p>Tous les contenus présents sur ce site, incluant, mais sans s'y limiter, les textes, images, graphiques,
            logos, et vidéos, sont la propriété exclusive de {companyName} ou de ses fournisseurs de contenu et sont
            protégés par les lois sur la propriété intellectuelle. Aucune reproduction ou utilisation non autorisée de
            ces contenus n'est permise.</p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md mt-4">
        <h2 class="text-xl font-semibold mb-4">Protection des données personnelles</h2>
        <p>Nous respectons la confidentialité de vos données personnelles. Les données que vous nous fournissez sont
            traitées conformément à notre <a href="/politique-de-confidentialite">politique de confidentialité</a>. Nous
            collectons uniquement les informations nécessaires à la prestation de nos services, et nous ne les
            partageons pas avec des tiers sans votre consentement explicite.</p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md mt-4">
        <h2 class="text-xl font-semibold mb-4">Cookies</h2>
        <p>Ce site utilise des cookies pour améliorer l'expérience de l'utilisateur. Les cookies sont de petits fichiers
            texte stockés sur votre ordinateur pour aider à suivre votre utilisation du site. Vous pouvez en savoir plus
            sur l'utilisation des cookies dans notre <a href="/politique-de-cookies">politique de cookies</a>.</p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md mt-4">
        <h2 class="text-xl font-semibold mb-4">Droit applicable</h2>
        <p>Ce site est soumis aux lois en vigueur en France. Tout litige découlant de l'utilisation de ce site sera
            soumis à la juridiction compétente du lieu de résidence de l'utilisateur ou à une juridiction appropriée
            selon la loi applicable.</p>
    </div>
</main>


<Footer/>
