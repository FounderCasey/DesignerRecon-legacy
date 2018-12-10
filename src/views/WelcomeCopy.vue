<template>
    <div class="welcome">
        <div class="header">
            <Navbar></Navbar>
            <div class="hcontainer">
                <div class="hbox">
                    <h1>Finding a Designer has never been so easy!</h1>
                    <h3>We will find you a designer or design team in just a few hours, for <em><strong>free</strong></em>.</h3>
                    <button>Find A Designer</button>
                </div>
                <h1>{{$mq | mq({ sm: 'small and medium', lg: 'large'})}}</h1>
                <mq-layout mq="lg">
                    <prism language="html" code="&lt;mq-layout mq=&quot;lg&quot;&gt; only large &lt;/mq-layout&gt;"/>
                </mq-layout>
                <mq-layout mq="md+">
                    <prism language="html" code="&lt;mq-layout mq=&quot;md+&quot;&gt; md and larger &lt;/mq-layout&gt;"/>
                </mq-layout>
                <div class="hbox">
                    <img src="../assets/Meteor.png">
                </div>
            </div>
        </div>
        <div class="icontainer">
            <div class="info-box">
                <div class="box icon">
                    <i class="fas fa-life-ring"></i>
                </div>
                <div class="box">
                    <h2>Designers For You</h2>
                    <p>It can be hard to find the team or designer who is right for you. We use our network of designers to find a great match.</p>
                </div>
                <div class="box icon">
                    <i class="fas fa-rocket"></i>
                </div>
                <div class="box">
                    <h2>Free For You</h2>
                    <p>We don't think that you should be paying to find a designer. That's why we find a designer for you.</p>
                </div>
            </div>
        </div>
        <div class="scontainer">
            <div class="wrap">
                <div class="success" v-if="seen">
                    <h1>Let us find your designer</h1>
                    <p>It can be hard to find the team or designer who is right for you.<br>We use our network of designers to find a great match.</p>
                </div>
                <div class="success" v-else>
                    <h1>Great!</h1>
                    <h2>What now?</h2>
                    <p>We sent you an email, go ahead and confirm your information.</p>
                </div>
                <form @submit.prevent="signUp" id="signForm" v-if="seen">
                    <input class="ui" v-model="name" type="text" placeholder="Name" required>
                    <input class="ui" v-model="email" type="email" placeholder="Email" required>
                    <input class="ui" v-model="company" type="text" placeholder="Company">
                    <input class="ui" v-model="description" type="text" placeholder="A little about your project" required>
                    <select class="ui" v-model="service" required>
                        <option disabled value="" id="disabled">Where can we help?</option>
                        <option>Logo/Brand Design</option>
                        <option>Web Design</option>
                        <option>App Design</option>
                        <option>Product Design</option>
                    </select>
                    <input class="ui" type="submit" value="Start Search" v-on:click="seen = !seen">
                </form>
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
                name: '',
                email: '',
                company: '',
                description: '',
                service: '',
                date: '',
                reports: '',
                seen: true
            }
        },
        components: {
            Navbar: Navbar
        },
        methods: {
            signUp: function() {
                db.collection("leads").add({
                    name: this.name,
                    email: this.email,
                    company: this.company,
                    description: this.description,
                    service: this.service,
                    date: formatDate(new Date()),
                    reports: 0
                })

                function formatDate(date) {
                    var ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    return ms[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
                }
            },
        }
    }
</script>

<style scoped>
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
        display: flex;
        padding: 40px 0;
        flex-direction: row;
        margin: auto;
    }

    .hbox {
        display: inline-block;
    }

    .hcontainer h1 {
        font-size: 4em;
        width: 70%;
        float: left;
    }

    .hcontainer h3 {
        font-size: 2em;
        font-weight: 500;
        width: 70%;
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

    input[type="submit"] {
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

    input[type="submit"]:hover {
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

    form {
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
        width: 50%;
        margin: auto;
        margin-top: 8em;
    }

    .box {
        width: 40%;
        margin: 0 auto;
        line-height: 30px;
    }

    .box h2 {
        margin: 15px 0 0 0;
        font-size: 2em;
    }

    .box p {
        margin: 15px 0;
        font-size: 1.3em;
    }

    .icon {
        width: 60px;
        margin-top: 15px;
        margin-right: 15px; 
        font-size: 4em;
        color: rgba(255, 80, 80, 0.75);
    }
</style>


