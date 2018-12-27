<template>
    <div class="sign-up">
        <Navbar></Navbar>
        <div class="container">
            <h3>Sign Up</h3>
            <input type="text" v-model="name" placeholder="Name"><br>
            <input type="text" v-model="email" placeholder="Email"><br>
            <input type="text" v-model="company" placeholder="Company"><br>
            <input type="password" v-model="password" placeholder="Password"><br>
            <button @click="signUp">Sign Up</button>
            <p>Have an account? <router-link to="/login">Login</router-link></p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import { db } from "../main.js"
import Navbar from './Navbar'

    export default {
        name: 'signUp',
        data() {
            return {
                name: '',
                email: '',
                company: '',
                password: ''
            }
        },
        metaInfo: {
            title: 'Sign Up'
        },
        components: {
            Navbar: Navbar
        },
        methods: {
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        var updateUser = firebase.auth().currentUser;
                        updateUser.updateProfile({
                            displayName: this.name
                        })
                        db.collection("designers").doc(updateUser.uid).set({
                            name: this.name,
                            email: this.email,
                            company: this.company
                        })
                        this.$router.replace('home');
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
        .sign-up {
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
        .sign-up {
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