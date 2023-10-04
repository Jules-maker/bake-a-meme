<script>

    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Modal, Card } from 'flowbite-svelte';

    // Propriétés pour la carte et l'image
    export let title = "Pas de titre pour l'instant";
    export let imageUrl = "http://localhost:8080";
  </script>
  
  <Card class="my-card">
    <h2>{title}</h2>
    
    <img src={imageUrl} alt="Image prévisualisée" />
  
    <button>Voir en détail</button>
  </Card>
  
  <style>
    .my-card {
      width: 300px;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 16px;
      text-align: center;
    }
  
    img {
      max-width: 100%;
      height: auto;
      margin: 8px 0;
    }
  
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  