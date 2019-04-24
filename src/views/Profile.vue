<template>
  <div class="dashboard">
    <DashBar></DashBar>
    <div class="wrapper">
      <div class="left">
        <div class="container">
          <h1>{{ user.name }}</h1>
          <h2>{{ user.company }}</h2>
          <h2>{{ user.subscriptionType }}</h2>
        </div>
      </div>
      <div class="right">
        <div class="container">
          <h1>Preferences</h1>
          <div id="input-container">
            <h4>Lead Types</h4>
            <ul>
              <li
                :class="[ user.allTypes ? 'selected' : 'not-selected' ]"
                @click="changePreference('all')"
              >All Leads</li>
              <li
                :class="[ user.logo ? 'selected' : 'not-selected' ]"
                @click="changePreference('logo')"
              >Logo Design</li>
              <li
                :class="[ user.brand ? 'selected' : 'not-selected' ]"
                @click="changePreference('brand')"
              >Brand Design</li>
              <li
                :class="[ user.web ? 'selected' : 'not-selected' ]"
                @click="changePreference('web')"
              >Web Design</li>
              <li
                :class="[ user.app ? 'selected' : 'not-selected' ]"
                @click="changePreference('app')"
              >App Design</li>
              <li
                :class="[ user.product ? 'selected' : 'not-selected' ]"
                @click="changePreference('product')"
              >Product Design</li>
            </ul>
          </div>
          <h2>Notifications</h2>
          <h2>Billing</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import { db } from "../main.js";
import DashBar from "./DashBar";
import { debug } from "util";

export default {
  name: "dashboard",
  data() {
    return {
      user: []
    };
  },
  metaInfo: {
    title: "Profile"
  },
  components: {
    DashBar: DashBar
  },
  firestore() {
    var user = firebase.auth().currentUser;

    return {
      user: db.collection("designers").doc(user.uid)
    };
  },
  methods: {
    changePreference(type) {
      var user = firebase.auth().currentUser;
      var userRef = db.collection("designers").doc(user.uid);

      if (type == "all") {
        if (!this.user.allTypes) {
          db.collection("designers")
            .doc(user.uid)
            .update({
              allTypes: true,
              brand: true,
              logo: true,
              web: true,
              app: true,
              product: true
            });
          this.user.allTypes = true;
          this.allTypes = true;
        } else if (this.user.allTypes) {
          db.collection("designers")
            .doc(user.uid)
            .update({
              allTypes: false,
              brand: false,
              logo: false,
              web: false,
              app: false,
              product: false
            });
          this.user.allTypes = false;
          this.allTypes = false;
        }
      } else if (type == "brand") {
        db.collection("designers")
          .doc(user.uid)
          .update({
            brand: !this.user.brand,
            allTypes: false
          });
        this.brand = !this.user.brand;
        console.log(this.brand);
      } else if (type == "logo") {
        db.collection("designers")
          .doc(user.uid)
          .update({
            logo: !this.user.logo,
            allTypes: false
          });
        this.logo = !this.user.logo;
        console.log(this.logo);
      } else if (type == "web") {
        db.collection("designers")
          .doc(user.uid)
          .update({
            web: !this.user.web,
            allTypes: false
          });
        this.web = !this.user.web;
        console.log(this.web);
      } else if (type == "app") {
        db.collection("designers")
          .doc(user.uid)
          .update({
            app: !this.user.app,
            allTypes: false
          });
        this.app = !this.user.app;
        console.log(this.app);
      } else if (type == "product") {
        db.collection("designers")
          .doc(user.uid)
          .update({
            product: !this.user.product,
            allTypes: false
          });
        this.product = !this.user.product;
        console.log(this.product);
      }
    }
  }
};
</script>

<style scoped>
.dashboard {
  font-family: "Montserrat", sans-serif;
  color: #3a1819;
  background: #f3f3f3;
  height: 100vh;
  overflow: scroll;
  position: relative;
}

.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
}

.left {
  width: 50%;
  float: left;
}

.right {
  width: 50%;
  float: right;
}

.container {
  text-align: center;
}

ul {
  list-style-type: none;
  margin: auto;
  width: 320px;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  padding-left: 0;
}

li {
  display: table;
  padding: 10px 0px;
  margin-bottom: 10px;
  width: 150px;
  border: solid 2px;
  border-radius: 3px;
  list-style-position: inside;
  transition: 0.15s;
}

li:hover {
  background: #3a1819;
  color: #f3f3f3;
  border: solid #3a1819 2px;
  border-radius: 3px;
  cursor: pointer;
}

.not-selected {
  background: #f3f3f3;
  color: #3a1819;
  border: solid 2px;
  border-radius: 3px;
}

.selected {
  background: #3a1819;
  color: #f3f3f3;
  border: solid #3a1819 2px;
  border-radius: 3px;
}

.selected:hover {
  background: #f3f3f3;
  color: #3a1819;
  border: solid 2px;
}
</style>

