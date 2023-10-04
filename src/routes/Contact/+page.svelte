<script>
    import HeaderNav from '../HeaderNav/+page.svelte';
    

    </script>
    
    
      <HeaderNav/>
      <form method="POST"   class="w-1/2 m-auto border p-5 mt-24 ">
        <div class="mb-4">
          <label for="name">Nom</label>
          <input type="text" id="name" name="name" class="w-full rounded-md" />
        </div>
        <div class="mb-4">
          <label for="email">Email</label>
          <input type="email" id="email" name="email"  class="w-full rounded-md"/>
        </div>
        <div class="mb-4">
          <label for="message">Message</label>
          <textarea id="message" name="message"  class="w-full rounded-md"/>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Envoyer</button>
      </form>