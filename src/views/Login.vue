<template>
  <div class="login">
    <Navbar></Navbar>
    <div class="container">
      <h3>Login</h3>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button @click="login">Login</button>
      <p>Need an account? <router-link to="/signup">Create one</router-link></p>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import Navbar from './Navbar.vue'

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    metaInfo: {
      title: 'Login'
    },
    components: {
      Navbar: Navbar
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('dashboard');
          },
          (err) => {
            alert("Error: " + err.message);
          }
        );
      }
    }
  }
</script>

<style scoped>
  @media (min-width: 980px) {
    .login {
      height: 100vh;
      background: linear-gradient(180deg, coral, rgb(255, 80, 80));
      font-family: 'Montserrat', sans-serif;
    }

    .container {
      position: absolute;
      width: 300px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    input {
      margin: 10px 0;
      width: 100%;
      padding: 10px 0;
      border: none;
      outline: none;
      border-bottom: solid 3px #fcfcfc;
      background: transparent;
      color: #fcfcfc;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.1em;
    }

    input::placeholder {
      color: #d1d1d1;
    }

    button {
      margin-top: 20px;
      text-align: center;
      width: 100%;
      cursor: pointer;
    }

    h3 {
      font-size: 2em;
      text-align: center;
      width: 100%;
    }

    p {
      width: 100%;
      margin-top: 20px;
      font-size: 1.05em;
      text-align: center;
    }

    p a {
      text-decoration: none;
      border-bottom: solid 2px;
      cursor: pointer;
      color: rgb(241, 40, 73);
      padding-bottom: 5px;
      font-weight: 700;
    }
  }

  @media (max-width: 980px) {
    .login {
      height: 100vh;
      background: linear-gradient(180deg, coral, rgb(255, 80, 80));
      font-family: 'Montserrat', sans-serif;
    }

    .container {
      position: absolute;
      width: 300px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    input {
      margin: 10px 0;
      width: 100%;
      padding: 10px 0;
      border: none;
      outline: none;
      border-bottom: solid 3px #fcfcfc;
      background: transparent;
      color: #fcfcfc;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.1em;
    }

    input::placeholder {
      color: #d1d1d1;
    }

    button {
      margin-top: 20px;
      text-align: center;
      width: 100%;
      cursor: pointer;
    }

    h3 {
      font-size: 2em;
      text-align: center;
      width: 100%;
    }

    p {
      width: 100%;
      line-height: 30px;
      margin-top: 20px;
      font-size: 1.05em;
      text-align: center;
    }

    p a {
      text-decoration: none;
      border-bottom: solid 2px;
      cursor: pointer;
      color: rgb(241, 40, 73);
      padding-bottom: 5px;
      font-weight: 700;
    }
  }

  @media (max-width: 450px) {
    .container {
      width:90%;
    }
  }
</style>