<template>
  <div class="welcome">
    <div class="header">
			<Navbar></Navbar>
			<Confetti></Confetti>
			<div class="hcontainer">
				<h1>Thank you!</h1>
				<img src="../assets/Meteor.png">
				<h3>Welcome to Designer Recon!<br><br>Now, check your email. We have sent you the next steps!</h3>
			</div>
    </div>
  </div>
</template>

<script>
	import Navbar from './Navbar.vue'
	import Confetti from '../components/Confetti.vue';

  export default {
    name: 'thanks',
    components: {
			Navbar: Navbar,
			Confetti: Confetti
    },
    metaInfo: {
      title: 'Thanks'
		},
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
      height: 100vh;
      background: linear-gradient(180deg, coral, rgb(255, 80, 80));
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

    .hcontainer h1 {
      font-size: 4em;
      width: 45%;
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
      background: linear-gradient(180deg, coral, rgb(255, 80, 80));
			height: 100vh;
			overflow: hidden;
    }

    .hcontainer {
      width: 80%;
      margin: auto;
      padding: 40px 0;
    }

    .hcontainer h1 {
      font-size: 4em;
      width: 40%;
      float: left;
			padding-top: 40px;
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
      height: 100vh;
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
  }

  @media (max-width: 800px) {
    .welcome {
      width: 100%;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      height: 100vh;
    }

    .header {
      text-align: left;
      margin: 0;
      overflow: hidden;
      background: linear-gradient(180deg, coral, rgb(255, 80, 80));
    }

    .hcontainer {
      width: 90%;
      margin: auto;
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
  }
</style>


