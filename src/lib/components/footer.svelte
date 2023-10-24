<script>
    import {Footer, FooterCopyright, FooterLinkGroup, FooterLink} from 'flowbite-svelte';
</script>

<Footer>
    <div class="container mx-auto text-center">
        <a href="/">Accueil</a> |
        <a href="/generalConditions">Mentions légales</a>
        <FooterCopyright href="/" by="Bake A Meme" year={2023}/>
    </div>
</Footer>

<!--<script>-->
<!--    import {onMount} from 'svelte';-->
<!--    import {Footer} from 'flowbite-svelte';-->

<!--    onMount(() => {-->
<!--        const footer = document.querySelector('.footer');-->

<!--        window.addEventListener('scroll', () => {-->
<!--            if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {-->
<!--                footer.classList.add('visible');-->
<!--            } else {-->
<!--                footer.classList.remove('visible');-->
<!--            }-->
<!--        });-->
<!--    });-->
<!--</script>-->

<!--<style>-->
<!--    .footer {-->
<!--        position: fixed;-->
<!--        bottom: 0;-->
<!--        left: 0;-->
<!--        right: 0;-->
<!--        height: 5px;-->
<!--        border-radius: 0px;-->
<!--        padding-top: 15px;-->
<!--        padding-bottom: 15px;-->
<!--        transition: bottom 0.3s ease-in-out;-->
<!--        transform: translateY(100%);-->
<!--    }-->

<!--    .footer.visible {-->
<!--        transform: translateY(0);-->
<!--    }-->
<!--</style>-->

<!--<Footer class="footer" style="color: black;">-->
<!--    <div class="container mx-auto text-center">-->
<!--        &copy; 2023 <a href="/">Bake A Meme</a> |-->
<!--        <a href="/">Home</a> |-->
<!--        <a href="/legals">Mentions légales</a>-->
<!--    </div>-->
<!--</Footer>-->

<!--<script>-->
<!--    import {Footer} from 'flowbite-svelte';-->
<!--</script>-->

<!--<style>-->
<!--</style>-->

<!--<Footer style="color: black; height: 5px; border-radius: 0px; position: fixed; bottom: 0; left: 0; right: 0; padding-top: 15px; padding-bottom: 15px;">-->
<!--    <div class="container mx-auto text-center">-->
<!--        &copy; 2023 <a href="/">Bake A Meme</a> |-->
<!--        <a href="/">Home</a> |-->
<!--        <a href="/legals">Mentions légales</a>-->
<!--    </div>-->
<!--</Footer>-->


<!--<style>-->
<!--    footer {-->
<!--        position: absolute;-->
<!--        bottom: 0;-->
<!--        left: 0;-->
<!--        width: 100%;-->
<!--        background-color: #333;-->
<!--        color: white;-->
<!--        padding: 20px;-->
<!--    }-->
<!--</style>-->

<!--<script>-->
<!--    import {onMount} from 'svelte';-->

<!--    let isFooterVisible = false;-->

<!--    onMount(() => {-->
<!--        const contentHeight = document.documentElement.scrollHeight;-->
<!--        const viewportHeight = window.innerHeight;-->
<!--        isFooterVisible = contentHeight > viewportHeight;-->
<!--    });-->
<!--</script>-->

<!--<footer style="{isFooterVisible ? 'position: relative;' : 'position: absolute; bottom: 0;'}">-->
<!--    <div class="container mx-auto text-center">-->
<!--        &copy; 2023 <a href="/">Your Company Name</a> |-->
<!--        <a href="/">Home Page</a> |-->
<!--        <a href="/legals">Legals</a>-->
<!--    </div>-->
<!--</footer>-->

<!--<style>-->
<!--    footer {-->
<!--        position: absolute;-->
<!--        bottom: 0;-->
<!--        left: 0;-->
<!--        width: 100%;-->
<!--        background-color: #333;-->
<!--        color: white;-->
<!--        padding: 20px;-->
<!--    }-->
<!--</style>-->

<!--<footer>-->
<!--    <div class="container mx-auto text-center">-->
<!--        &copy; 2023 <a href="/">Your Company Name</a> |-->
<!--        <a href="/">Home Page</a> |-->
<!--        <a href="/legals">Legals</a>-->
<!--    </div>-->
<!--</footer>-->