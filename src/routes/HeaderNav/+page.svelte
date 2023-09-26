<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
  </script>
  
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    <div class="flex md:order-2 ">
      <a href="/Login" class="bg-green-600 p-2 rounded-md text-white">Get started</a>
      <NavHamburger on:click={toggle} />
    </div>
    <NavUl {hidden} class="order-1">
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>