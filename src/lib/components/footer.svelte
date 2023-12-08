
<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
  </script>



  <Footer footerType="socialmedia" class="bg-gray-100 border">
    <div class="md:flex md:justify-around ">
      <div class="mb-6 md:mb-0">
        <img src="../../src/images/BM-.png" alt="" class="w-32"/>
      </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">Accueil</FooterLink>
            <FooterLink liClass="mb-4" href="/Contact">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">GitHub</FooterLink>
            <FooterLink liClass="mb-4" href="/">Discord</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/generalConditions">Mentions légales</FooterLink>

          </FooterLinkGroup>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="/" by="Bake A Meme" year={2023}/>
        <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
        <FooterIcon href="/">
facebook
        </FooterIcon>
        <FooterIcon href="/">
Discord        </FooterIcon>
        <FooterIcon href="/">
Twitter - X        </FooterIcon>
        <FooterIcon href="/">
Github        </FooterIcon>

      </div>
    </div>
  </Footer>