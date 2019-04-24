<template>
  <div class="confirmation">
    <div class="header">
      <Navbar></Navbar>
      <div class="hcontainer">
        <h2>Let's confirm your needs</h2>
        <form class="fsignup" @submit.prevent="signUp" id="signForm">
          <input class="ui" v-model="name" type="text" placeholder="Name" required>
          <input class="ui" v-model="email" type="email" placeholder="Email" required>
          <input class="ui" v-model="company" type="text" placeholder="Company">
          <input
            class="ui"
            v-model="description"
            type="text"
            placeholder="A little about your project"
            required
          >
          <select class="ui" v-model="service" required>
            <option selected disabled id="disabled">How can we help?</option>
            <option>Brand Design</option>
            <option>Logo Design</option>
            <option>App Design</option>
            <option>Web Design</option>
            <option>Product Design</option>
          </select>
          <input class="submit" type="submit" value="Start Search">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import { db } from "../main.js";
import firebase from "firebase";

export default {
  name: "confirmation",
  data() {
    return {
      name: "",
      email: "",
      company: "",
      description: "",
      service: "",
      date: "",
      reports: "",
      confirmed: "",
      canView: ""
    };
  },
  components: {
    Navbar: Navbar
  },
  metaInfo: {
    title: "Confirmation"
  },
  methods: {
    signUp: function() {
      db.collection("leads")
        .add({
          name: this.name,
          email: this.email,
          company: this.company,
          description: this.description,
          service: this.service,
          date: formatDate(new Date()),
          reports: 0,
          confirmed: true,
          canView: true
        })
        .then(function() {
          this.$router.replace("Thanks");
        });

      function formatDate(date) {
        var ms = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];
        return (
          ms[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()
        );
      }
    }
  }
};
</script>

<style scoped>
@media (min-width: 1440px) {
  .confirmation {
    width: 100%;
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }

  .header {
    text-align: left;
    margin: 0;
    height: 100vh;
    background: linear-gradient(180deg, coral, rgb(255, 80, 80));
    padding-bottom: 70px;
  }

  .hcontainer {
    width: 80%;
    margin: auto;
    padding: 40px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hcontainer h2 {
    font-size: 2em;
    text-align: center;
  }

  .hcontainer img {
    float: right;
    margin-top: 50px;
    animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

  .fsignup {
    margin: auto;
    width: 650px;
    text-align: center;
    outline: none;
  }

  .ui {
    margin: 10px;
    height: 35px;
    border: none;
    outline: none;
    background: #fcfcfc;
    font-size: 1.13em;
    color: #3a1819;
    text-indent: 10px;
    text-align: left;
    width: 95%;
    height: 50px;
    border-radius: 3px;
    font-weight: bold;
  }

  input::placeholder {
    color: #3a1819;
    font-weight: normal;
  }

  .submit {
    border: none;
    outline: none;
    width: 60%;
    height: 50px;
    font-size: 1.4em;
    font-weight: 700;
    border-radius: 5px;
    background: #3a1819;
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

@media (max-width: 1440px) {
  .confirmation {
    width: 100%;
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }

  .header {
    text-align: left;
    margin: 0;
    background: linear-gradient(180deg, coral, rgb(255, 80, 80));
    height: 100%;
    padding-bottom: 70px;
  }

  .hcontainer {
    width: 80%;
    margin: auto;
    height: 100%;
  }

  .hcontainer h2 {
    font-size: 2em;
    text-align: center;
  }

  .hcontainer img {
    float: right;
    margin-top: 5%;
    min-width: 300px;
    max-width: 50%;
    animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

  .fsignup {
    margin: auto;
    width: 650px;
    text-align: center;
    outline: none;
  }

  .ui {
    margin: 10px;
    height: 35px;
    border: none;
    outline: none;
    background: #fcfcfc;
    font-size: 1.13em;
    color: #3a1819;
    text-indent: 10px;
    text-align: left;
    width: 95%;
    height: 50px;
    border-radius: 3px;
    font-weight: bold;
  }

  input::placeholder {
    color: #3a1819;
    font-weight: normal;
  }

  #disabled {
    color: red !important;
  }

  .submit {
    border: none;
    outline: none;
    width: 60%;
    height: 50px;
    font-size: 1.4em;
    font-weight: 700;
    border-radius: 5px;
    background: #3a1819;
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

@media (max-width: 980px) {
  .confirmation {
    width: 100%;
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }

  .header {
    text-align: left;
    margin: 0;
    background: linear-gradient(180deg, coral, rgb(255, 80, 80));
  }

  .hcontainer {
    width: 90%;
  }

  .hcontainer h2 {
    font-size: 1.3em;
    width: 100%;
    margin: 0;
  }

  .hcontainer img {
    float: right;
    margin-top: 14%;
    min-width: 250px;
    max-width: 50%;
    animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    display: none;
  }

  .fsignup {
    margin: auto;
    width: 95%;
    text-align: center;
    outline: none;
  }

  .ui {
    margin: 10px;
    border: none;
    outline: none;
    background: #fcfcfc;
    font-size: 1em;
    color: #3a1819;
    text-indent: 10px;
    text-align: left;
    width: 95%;
    height: 40px;
    border-radius: 3px;
    font-weight: bold;
  }

  input::placeholder {
    color: #3a1819;
    font-weight: normal;
  }

  #disabled {
    color: red !important;
  }

  .submit {
    border: none;
    outline: none;
    width: 60%;
    height: 50px;
    font-size: 1.4em;
    font-weight: 700;
    border-radius: 5px;
    background: #3a1819;
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
  .confirmation {
    width: 100%;
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }

  .header {
    text-align: left;
    margin: 0;
    height: 100vh;
    background: linear-gradient(180deg, coral, rgb(255, 80, 80));
  }

  .hcontainer {
    width: 90%;
  }

  .hcontainer h1 {
    font-size: 0.3em;
    width: 100%;
    margin: 0;
  }

  .hcontainer img {
    float: right;
    margin-top: 14%;
    min-width: 250px;
    max-width: 50%;
    animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    display: none;
  }

  .fsignup {
    margin: auto;
    width: 95%;
    text-align: center;
    outline: none;
  }

  .ui {
    margin: 10px;
    height: 35px;
    border: none;
    outline: none;
    background: #fcfcfc;
    font-size: 1.13em;
    color: #3a1819;
    text-indent: 10px;
    text-align: left;
    width: 95%;
    height: 50px;
    border-radius: 3px;
    font-weight: bold;
  }

  input::placeholder {
    color: #3a1819;
    font-weight: normal;
  }

  #disabled {
    color: red !important;
  }

  .submit {
    border: none;
    outline: none;
    width: 60%;
    height: 50px;
    font-size: 1.4em;
    font-weight: 700;
    border-radius: 5px;
    background: #3a1819;
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
</style>


