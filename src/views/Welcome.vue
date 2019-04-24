<template>
  <div class="welcome">
    <div class="header">
      <Navbar></Navbar>
      <div class="hcontainer">
        <h1>Finding a Designer has never been so easy!</h1>
        <img src="../assets/Meteor.png">
        <h3>We will find you a designer or design team in just a few hours, for <em><strong>free</strong></em>.</h3>
        <form class="fsub" @submit.prevent='subscribe'>
            <div id="signup">
              <input type="email" v-model="email" placeholder="Your email address" class="special-input" required>
              <input type="submit" class="special-submit">
            </div>
        </form>
      </div>
    </div>
    <div class="icontainer">
      <div class="info-box">
        <div class="box">
          <i class="fas fa-life-ring icon"></i>
          <h2>Designers For You</h2>
          <p>It can be hard to find the team or designer who is right for you. We use our network of designers to find a great match.</p>
        </div>
        <div class="box">
          <i class="fas fa-rocket icon"></i>
          <h2>Free For You</h2>
          <p>We don't think that you should be paying to find a designer. That's why we find a designer for you.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  import { db } from '../main.js'
  import firebase from 'firebase'

  export default {
    name: 'welcome',
    data() {
      return {
        email: ''
      }
    },
    metaInfo: {
      title: 'Welcome'
    },
    components: {
      Navbar: Navbar
    },
    methods: {
      subscribe: function() {
        db.collection('emails').add({
          email: this.email
        });
        this.email = "Thanks, we have sent you an email!";
      }
    }
  }
</script>

<style scoped>
  @media (min-width: 1440px) {
    .welcome {
      width: 100%;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
    }

    .header {
      text-align: left;
      margin: 0;
      padding-bottom: 70px;
      background: linear-gradient(180deg, coral, rgb(255, 80, 80));
    }

    .hcontainer {
      width: 80%;
      margin: auto;
      padding: 40px 0;
    }

    .hcontainer h1 {
      font-size: 4em;
      width: 50%;
      float: left;
    }

    .hcontainer h3 {
      font-size: 2em;
      font-weight: 500;
      width: 43%;
    }

    .hcontainer img {
      float: right;
      margin-top: 50px;
      animation: slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @keyframes slide-in-bottom {
      0% {
        transform: translateY(200px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .special-input {
      margin: 10px;
      height: 35px;
      width: 80%;
      border: none;
      outline: none;
      border-bottom: solid 3px #fcfcfc;
      background: transparent;
      font-size: 1.13em;
      color: #fcfcfc;
      text-indent: 10px;
    }

    .submit {
      border: none;
      outline: none;
      width: 60%;
      height: 50px;
      font-size: 1.4em;
      font-weight: 700;
      border-radius: 5px;
      background: #3A1819;
      color: #fcfcfc;
      margin-top: 25px;
      text-indent: -10px;
    }

    .submit:hover {
      cursor: pointer;
    }
    
    button:hover {
      cursor: pointer;
    }

    .icontainer {
      color: #3A1819;
      height: 300px;
    }

    .info-box {
      display: flex;
      max-width: 70%;
      min-width: 60%;
      margin: auto;
      margin-top: 8em;
    }

    .box {
      width: 40%;
      margin: 0 auto;
      line-height: 30px;
      position: relative;
      padding-left: 80px;
    }

    .box h2 {
      margin: 15px 0 0 0;
      font-size: 2em; 
    }

    .box p {
      margin: 15px 0;
      font-size: 1.3em;
      width: 90%;
    }

    .icon {
      width: 60px;
      font-size: 4em;
      color: rgba(255, 80, 80, 0.75);
      position: absolute;
      left: -15px;
      top: 5%;
    }

    .fsub {
      width: 50%;
      position: relative;
    }

    .special-input {
      border: none;
      outline: none;
      background: #fcfcfc;
      font-size: 1.13em;
      color: #3A1819;
      text-indent: 10px;
      text-align: left;
      width: 95%;
      height: 50px;
      padding: 0;
      margin: 0;
      border-radius: 3px;
    }

    .special-input::placeholder {
      color: #3A1819;
    }
    
    .special-submit {
      position: absolute;
      right: 4%;
      top: 50%;
      transform: translate(-10%, -50%);
      font-size: 1rem;
      width: 100px;
      background: #3A1819;
      color: #fcfcfc;
      height: 80%;
      border: none;
      outline: none;
      border-radius: 3px;
    }

    .special-submit:hover {
      cursor: pointer;
    }

    .special-submit:active {
      background: coral;
      transition: 0.2s;
    }
  }

  @media (max-width: 1440px) {
    .welcome {
      width: 100%;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
    }

    .header {
      text-align: left;
      margin: 0;
      padding-bottom: 70px;
      background: linear-gradient(180deg, coral, rgb(255, 80, 80));
    }

    .hcontainer {
      width: 80%;
      margin: auto;
      padding: 40px 0;
    }

    .hcontainer h1 {
      font-size: 3em;
      width: 50%;
      float: left;
    }

    .hcontainer h3 {
      font-size: 1.6em;
      font-weight: 500;
      width: 43%;
    }

    .hcontainer img {
      float: right;
      margin-top: 5%;
      min-width: 300px;
      max-width: 50%;
      animation: slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .fsub {
      width: 50%;
      position: relative;
    }

    .special-input {
      border: none;
      outline: none;
      background: #fcfcfc;
      font-size: 1.13em;
      color: #3A1819;
      text-indent: 10px;
      text-align: left;
      width: 95%;
      height: 50px;
      padding: 0;
      margin: 0;
      border-radius: 3px;
    }

    .special-input::placeholder {
      color: #3A1819;
    }
    
    .special-submit {
      position: absolute;
      right: 4%;
      top: 50%;
      transform: translate(-10%, -50%);
      font-size: 1rem;
      width: 100px;
      background: #3A1819;
      color: #fcfcfc;
      height: 80%;
      border: none;
      outline: none;
      border-radius: 3px;
    }

    .special-submit:hover {
      cursor: pointer;
    }

    .special-submit:active {
      background: coral;
      transition: 0.2s;
    }

    @keyframes slide-in-bottom {
      0% {
        transform: translateY(200px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .submit {
      border: none;
      outline: none;
      width: 60%;
      height: 50px;
      font-size: 1.4em;
      font-weight: 700;
      border-radius: 5px;
      background: #3A1819;
      color: #fcfcfc;
      margin-top: 25px;
      text-indent: -10px;
    }

    .submit:hover {
      cursor: pointer;
    }
    
    button:hover {
      cursor: pointer;
    }

    .scontainer {
      color: #fcfcfc;
      background: linear-gradient(25deg, coral, rgb(255, 80, 80));
    }

    .wrap {
      width: 80%;
      min-height: 40vh;
      margin: auto;
      padding: 50px;
      text-align: center;
    }

    .fsignup {
      margin: auto;
      width: 650px;
      text-align: center;
      outline: none;
    }

    .ui {
      margin: 10px;
      height: 35px;
      width: 80%;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      border: none;
      outline: none;
      border-bottom: solid 3px #fcfcfc;
      background: transparent;
      font-size: 1.13em;
      color: #fcfcfc;
      text-indent: 10px;
    }

    input::placeholder {
      color:rgba(224, 224, 224, 0.253);
    }

    select, option {
      color: #333;
    }

    #disabled {
      color: rgba(6, 89, 255, 0.281);
    }

    .icontainer {
      color: #3A1819;
      height: 300px;
    }

    .info-box {
      display: flex;
      max-width: 90%;
      min-width: 70%;
      margin: auto;
      margin-top: 8em;
    }

    .box {
      width: 40%;
      margin: 0 auto;
      line-height: 30px;
      padding-left: 100px;
      position: relative;
    }

    .box h2 {
      margin: 15px 0 0 0;
      font-size: 2em;
    }

    .box p {
      margin: 15px 0;
      font-size: 1.3em;
      width: 90%;
    }

    .icon {
      width: 60px;
      font-size: 4em;
      color: rgba(255, 80, 80, 0.75);
      position: absolute;
      left: 6px;
      top: 5%;
    }
  }

  @media (max-width: 980px) {
    .welcome {
      width: 100%;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
    }

    .header {
      text-align: left;
      margin: 0;
      padding-bottom: 70px;
      background: linear-gradient(180deg, coral, rgb(255, 80, 80));
    }

    .hcontainer {
      width: 80%;
      margin: auto;
      padding: 40px 0;
    }

    .hcontainer h1 {
      font-size: 3em;
      width: 50%;
      float: left;
    }

    .hcontainer h3 {
      font-size: 1.6em;
      font-weight: 500;
      width: 43%;
    }

    .hcontainer img {
      float: right;
      margin-top: 14%;
      min-width: 250px;
      max-width: 50%;
      animation: slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @keyframes slide-in-bottom {
      0% {
        transform: translateY(200px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    .submit {
      border: none;
      outline: none;
      width: 60%;
      height: 50px;
      font-size: 1.4em;
      font-weight: 700;
      border-radius: 5px;
      background: #3A1819;
      color: #fcfcfc;
      margin-top: 25px;
      text-indent: -10px;
    }

    .submit:hover {
      cursor: pointer;
    }
    
    button:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 800px) {
    .welcome {
      width: 100%;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
    }

    .header {
      text-align: left;
      margin: 0;
      padding-bottom: 70px;
      background: linear-gradient(180deg, coral, rgb(255, 80, 80));
    }

    .hcontainer {
      width: 90%;
      margin: auto;
      padding: 40px 0;
    }

    .hcontainer h1 {
      font-size: 2em;
      width: 100%;
    }

    .hcontainer h3 {
      font-size: 1.6em;
      font-weight: 500;
      width: 100%;
    }

    .hcontainer img {
      float: right;
      margin-top: 14%;
      min-width: 250px;
      max-width: 50%;
      animation: slide-in-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      display: none;
    }
    
    .submit {
      border: none;
      outline: none;
      width: 60%;
      height: 50px;
      font-size: 1.4em;
      font-weight: 700;
      border-radius: 5px;
      background: #3A1819;
      color: #fcfcfc;
      margin-top: 25px;
      text-indent: -10px;
    }

    .submit:hover {
      cursor: pointer;
    }

    button {
      text-align: center;
    }
    
    button:hover {
      cursor: pointer;
    }

    .fsignup {
      margin: auto;
      width: 100%;
      text-align: center;
      outline: none;
    }

    .ui {
      margin: 10px 0;
      height: 35px;
      width: 80%;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      border: none;
      outline: none;
      border-bottom: solid 3px #fcfcfc;
      background: transparent;
      font-size: 1.13em;
      color: #fcfcfc;
      text-indent: 10px;
    }

    input::placeholder {
      color:rgba(224, 224, 224, 0.253);
    }

    select, option {
      color: #333;
    }

    #disabled {
      color: rgba(6, 89, 255, 0.281);
    }

    .icontainer {
      color: #3A1819;
      height: 500px;
    }

    .info-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 1.6em auto;
    }

    .box {
      width: 90%;
      margin: auto;
      padding: 0;
      line-height: 30px;
      position: relative;
      text-align: center;
    }

    .box h2 {
      margin: 15px 0 0 0;
      font-size: 1.3em;
    }

    .box p {
      margin: auto;
      font-size: 1.1em;
      padding-bottom: 15px;
    }

    .icon {
      width: 100%;
      font-size: 3em;
      color: rgba(255, 80, 80, 0.75);
      margin-top: 15px;
      position: initial;
      text-align: center;
    }

    br {
      line-height: 155%;
    }

    .fsub {
      width: 105%;
      position: relative;
    }

    .special-input {
      border: none;
      outline: none;
      background: #fcfcfc;
      font-size: 1.13em;
      color: #3A1819;
      text-indent: 10px;
      text-align: left;
      width: 95%;
      height: 50px;
      padding: 0;
      margin: 0;
      border-radius: 3px;
    }

    .special-input::placeholder {
      color: #3A1819;
    }
    
    .special-submit {
      position: absolute;
      right: 4%;
      top: 50%;
      transform: translate(-10%, -50%);
      font-size: 1rem;
      width: 100px;
      background: #3A1819;
      color: #fcfcfc;
      height: 80%;
      border: none;
      outline: none;
      border-radius: 3px;
    }

    .special-submit:hover {
      cursor: pointer;
    }

    .special-submit:active {
      background: coral;
      transition: 0.2s;
    }
  }
</style>


