<script lang="ts">
  import { navigate } from 'svelte-routing';

  let username = '';
  let password = '';

  function onSubmit() {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      navigate('/folder');
    } else {
      alert("Invalid username or password");
    }
  }

</script>

<div class="card">
  <h1>Login</h1>
  <form on:submit="{onSubmit}">
    <table>
      <tr>
        <td><label for="username">Username:</label></td>
        <td><input type="text" id="username" bind:value="{username}" required /></td>
      </tr>
      <tr>
        <td><label for="password">Password:</label></td>
        <td><input type="password" id="password" bind:value="{password}" required /></td>
      </tr>
      <tr>
        <td colspan=2><button type="submit">Login</button></td>
      </tr>
    </table>
  </form>
</div>

<div>
  <style lang="scss">
    h1{
      margin:0px;
      margin-bottom: 20px;
      text-align:center;
      font-size: 3.2em;
      line-height: 1.1;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
    .card{
      background-color: #b8c0d8;
      width: fit-content;
      padding: 30px;
      margin: auto;
      vertical-align: middle;
      input {
      display: block;
      width: 193px;
      height: 25px;
      }
      table{
        td{
          padding-bottom: 10px;
        }
      }
      button{
      display: block;
      margin: auto;
      width: 100px;
      height: 40px;
        &:hover{
          background-color: #3e67d9;
          color: black;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  </style>
</div>