<script>
    // register.svelte in front/bake-a-meme/src/routes/register.svelte
 import { onMount } from 'svelte';
  import { setContext } from 'svelte';


  import { getContext } from 'svelte';

      

  // const fetchApi = async () => {
  //   const response = await fetch('http://localhost:8080/api/memes');
  //   const data = await response.json();
  //   setContext('data', data);
  // };

  // onMount(fetchApi);
  
  // const data = getContext('data');

/*fonction classique
  const register = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form); // { username: '...', email: '...', password: '...', confirmPassword: '...' } , formdata is a key value pair
    const body = Object.fromEntries(formData); // { username: '...', email: '...', password: '...', confirmPassword: '...' } , object.fromentries is a function that takes an array of key value pairs and returns an object
    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
  };
*/
  /***********/
/*fonction utilisant les bindings svelte*/
let username = "";
  let email = "";
  let password = "";
  let confirmPassword = "";
async function register(event) {
  event.preventDefault();
  const login = username;
  //compare password and confirmPassword with security
  if(password !== confirmPassword){
    console.log("passwords are not the same");
    return;
  }  
  

  fetchOnce('http://localhost:8080/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({ login, email, password}),
  }).then((response) => {
    if (response.ok) {
      console.log("okééé lets goo°oOo0ooOO00",response.json());
      return response.json();

    }
    return response.json().then((error) => {
      throw new Error(error.message);
    });
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  }

  );
}
    </script>
    
    <h1>Register</h1>
  
  <form on:submit|preventDefault={register}>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" bind:value={username}/>
  
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" bind:value={email}/>
  
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" bind:value={password}/>
  
    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" name="confirmPassword" bind:value={confirmPassword}/>
  
    <button type="submit">Register</button>
  </form>