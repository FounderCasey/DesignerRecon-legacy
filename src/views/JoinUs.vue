<template>
    <div class="welcome">
        <div class="header">
            <Navbar></Navbar>
            <div class="hcontainer">
                <h1>You are the designer we are searching for.</h1>
                <img src="../assets/Meteor.png">
                <h3>Join our network, we find and deliver design leads directly to you, daily.</h3>
                <button>Join Us</button>
            </div>
        </div>
        <div class="container">
            <div class="wrap">
                <h2>Our Pricing</h2>
                <h4>Straight Forward and Transparent</h4>
                <div class="pricebox">
                    <div class="pricecard">
                        <h2>Indie</h2>
                        <h3><span>$ </span>19.99<span> /mo</span></h3>
                        <hr>
                        <p>Leads Delivered to Your Dashboard</p>
                        <p>Leads Delivered Twice a Week</p>
                        <p>Up to 25 Leads Per Week</p>
                        <button @click="toSignUp">Start Free Trial</button>
                    </div>
                    <div class="pricecard">
                        <h2>Team</h2>
                        <h3><span>$ </span>49.99<span> /mo</span></h3>
                        <hr>
                        <p>Leads Delivered to Your Dashboard</p>
                        <p>Leads Delivered Immediately</p>
                        <p>Unlimited Leads</p>
                        <button @click="toSignUp">Start Free Trial</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue'

    export default {
        name: 'welcome',
        components: {
            Navbar: Navbar
        },
        methods: {
            toSignUp: function() {
                this.$router.replace('SignUp');
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

        button {
            border: none;
            outline: none;
            width: 250px;
            height: 50px;
            font-size: 1.4em;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            border-radius: 5px;
            background: #3A1819;
            color: #fcfcfc;
            margin-top: 25px;
        }

        button:hover {
            cursor: pointer;
        }

        .container {
            color: #333;
        }

        .wrap {
            width: 80%;
            margin: auto;
            padding: 50px;
            text-align: center;
        }

        .wrap h2 {
            font-size: 2.75em;
        }

        .wrap h4 {
            font-size: 1.3em;
            margin-top: -25px;
            margin-bottom: 50px;
        }

        .pricebox {
            width: 650px;
            margin: auto;
        }

        .pricecard {
            width: 40%;
            display: inline-block;
            margin: 0 15px;
            background: rgb(255, 255, 255);
            border-radius: 5px;
            box-shadow: 0 5px 25px #45454554;
            padding: 0 15px;
        }

        .pricecard button {
            margin-top: 15px;
            margin-bottom: 25px;
        }

        .pricecard span {
            color: #979797;
            font-weight: 500;
            font-size: 0.5em;
            vertical-align: 45%;
        }

        .pricecard h2 {
            font-size: 2em;
        }

        .pricecard h3 {
            font-size: 2.5em;
            margin: 0 0 25px 0;
        }

        hr {
            height: 4px;
            border: none;
            outline: none;
            background: coral;
            width: 100px;
            border-radius: 5px;
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
            width: 40%;
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

        button {
            border: none;
            outline: none;
            width: 250px;
            height: 50px;
            font-size: 1.4em;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            border-radius: 5px;
            background: #3A1819;
            color: #fcfcfc;
            margin-top: 25px;
        }

        button:hover {
            cursor: pointer;
        }

        .container {
            color: #333;
        }

        .wrap {
            width: 80%;
            margin: auto;
            padding: 50px;
            text-align: center;
        }

        .wrap h2 {
            font-size: 2.75em;
        }

        .wrap h4 {
            font-size: 1.3em;
            margin-top: -25px;
            margin-bottom: 50px;
        }

        .pricebox {
            width: 650px;
            margin: auto;
        }

        .pricecard {
            width: 40%;
            display: inline-block;
            margin: 0 15px;
            background: rgb(255, 255, 255);
            border-radius: 5px;
            box-shadow: 0 5px 25px #45454554;
            padding: 0 15px;
        }

        .pricecard button {
            margin-top: 15px;
            margin-bottom: 25px;
        }

        .pricecard span {
            color: #979797;
            font-weight: 500;
            font-size: 0.5em;
            vertical-align: 45%;
        }

        .pricecard h2 {
            font-size: 2em;
        }

        .pricecard h3 {
            font-size: 2.5em;
            margin: 0 0 25px 0;
        }

        hr {
            height: 4px;
            border: none;
            outline: none;
            background: coral;
            width: 100px;
            border-radius: 5px;
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

        button {
            border: none;
            outline: none;
            width: 250px;
            height: 50px;
            font-size: 1.4em;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            border-radius: 5px;
            background: #3A1819;
            color: #fcfcfc;
            margin-top: 25px;
        }

        button:hover {
            cursor: pointer;
        }

        .container {
            color: #333;
        }

        .wrap {
            width: 80%;
            margin: auto;
            padding: 50px;
            text-align: center;
        }

        .wrap h2 {
            font-size: 2.75em;
        }

        .wrap h4 {
            font-size: 1.3em;
            margin-top: -25px;
            margin-bottom: 50px;
        }

        .pricebox {
            width: 650px;
            margin: auto;
        }

        .pricecard {
            width: 40%;
            display: inline-block;
            margin: 0 15px;
            background: rgb(255, 255, 255);
            border-radius: 5px;
            box-shadow: 0 5px 25px #45454554;
            padding: 0 15px;
        }

        .pricecard button {
            margin-top: 15px;
            margin-bottom: 25px;
        }

        .pricecard span {
            color: #979797;
            font-weight: 500;
            font-size: 0.5em;
            vertical-align: 45%;
        }

        .pricecard h2 {
            font-size: 2em;
        }

        .pricecard h3 {
            font-size: 2.5em;
            margin: 0 0 25px 0;
        }

        hr {
            height: 4px;
            border: none;
            outline: none;
            background: coral;
            width: 100px;
            border-radius: 5px;
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

        button {
            border: none;
            outline: none;
            width: 250px;
            height: 50px;
            font-size: 1.4em;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            border-radius: 5px;
            background: #3A1819;
            color: #fcfcfc;
            margin-top: 25px;
        }

        button:hover {
            cursor: pointer;
        }

        .container {
            color: #333;
            width: 100%;
        }

        .wrap {
            width: 100%;
            margin: auto;
            text-align: center;
            padding: 0;
        }

        .wrap h2 {
            font-size: 2.15em;
        }

        .wrap h4 {
            font-size: 1.1em;
            margin-top: -25px;
            margin-bottom: 50px;
        }

        .pricebox {
            width: 100%;
            margin: auto;
        }

        .pricecard {
            max-width: 300px;
            min-width: 250px;
            display: inline-block;
            margin: 15px 15px;
            background: rgb(255, 255, 255);
            border-radius: 5px;
            box-shadow: 0 5px 25px #45454554;
            padding: 0 15px;
        }

        .pricecard button {
            margin-top: 15px;
            margin-bottom: 25px;
            width: 90%;
        }

        .pricecard span {
            color: #979797;
            font-weight: 500;
            font-size: 0.5em;
            vertical-align: 45%;
        }

        .pricecard h2 {
            font-size: 2em;
        }

        .pricecard h3 {
            font-size: 2.5em;
            margin: 0 0 25px 0;
        }

        hr {
            height: 4px;
            border: none;
            outline: none;
            background: coral;
            width: 100px;
            border-radius: 5px;
        }
    }
</style>


