<script>
    import { onMount } from 'svelte';
  
    let is_user_authenticated = false;
    let isWebComponentLoaded = false;
  
    function loadWebComponent() {
      const script = document.createElement('script');
      script.src = '/src/assets/folder-web-component.js';
      script.async = true;
      script.onload = () => {
        isWebComponentLoaded = true;
      };
  
      document.body.appendChild(script);
    }
  
    onMount(() => {
        if(localStorage.getItem('username') && 'admin' === localStorage.getItem('username')){
            is_user_authenticated = true;
        }
        if (!isWebComponentLoaded) {
            loadWebComponent();
        }
    });
  </script>
  
  {#if isWebComponentLoaded}
    <folder-component {is_user_authenticated}></folder-component>
  {:else}
    <p>Loading...</p>
  {/if}
  