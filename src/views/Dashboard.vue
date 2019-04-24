<template>
  <div class="dashboard">
    <DashBar></DashBar>
    <div class="tcontainer">
      <div class="filter-bar">
        <ul>
          <li @click="toggle = true" v-bind:class="{'li-on': toggle,  'li-off': !toggle}">All</li>
          <li>•</li>
          <li @click="toggle = false" v-bind:class="{'li-on': !toggle,  'li-off': toggle}">Favorites</li>
        </ul>
      </div>
      <table>
        <thead>
          <tr class="header-row">
            <th>Name</th>
            <th>Company</th>
            <th>Type</th>
            <th>Added</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lead in shownLeads">
            <td class="td-first">{{ lead.name }}</td>
            <td id="td-company">{{ lead.company }}</td>
            <td id="td-service">{{ lead.service }}</td>
            <td id="td-date">{{ lead.date }}</td>
            <td class="td-desc">{{ lead.description }}</td>
            <td class="td-last actions">
              <a v-bind:href="'mailto:' + lead.email">
                <i class="fas fa-envelope email"></i>
              </a>
              <i v-if="toggle" class="fas fa-plus like" @click="addToLike(lead)"></i>
              <i v-if="!toggle" class="fas fa-minus unlike" @click="removeLike(lead)"></i>
              <i class="fas fa-exclamation report" @click="report(lead)"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import { db } from "../main.js";
import DashBar from "./DashBar";

export default {
  name: "dashboard",
  data() {
    return {
      user: [],
      leads: [],
      finalLeads: [],
      usersLikes: [],
      toggle: true,
      selectedLead: {}
    };
  },
  computed: {
    shownLeads: function() {
      var user = firebase.auth().currentUser;
      var userRef = db.collection("designers").doc(user.uid);
      console.log(this.leads);
      var allLeads = this.leads;
      var brandLeads = [];
      var logoLeads = [];
      var appLeads = [];
      var webLeads = [];
      var productLeads = [];
      var testLeads = this.leads;

      let curr = this.user;

      this.leads.forEach(element => {
        if (element.service == "Brand Design") {
          brandLeads.push(element);
        }
        if (element.service == "Logo Design") {
          logoLeads.push(element);
        }
        if (element.service == "App Design") {
          appLeads.push(element);
        }
        if (element.service == "Web Design") {
          webLeads.push(element);
        }
        if (element.service == "Product Design") {
          productLeads.push(element);
        }
      });

      if (curr.allTypes) {
        this.finalLeads = this.leads;
      }

      if (curr.brand && !curr.allTypes) {
        this.finalLeads = this.finalLeads.concat(brandLeads);
      }

      if (curr.logo && !curr.allTypes) {
        this.finalLeads = this.finalLeads.concat(logoLeads);
      }

      if (curr.web && !curr.allTypes) {
        this.finalLeads = this.finalLeads.concat(webLeads);
      }

      if (curr.app && !curr.allTypes) {
        this.finalLeads = this.finalLeads.concat(appLeads);
      }

      if (curr.product && !curr.allTypes) {
        this.finalLeads = this.finalLeads.concat(productLeads);
      }

      console.log("Final: " + this.finalLeads);

      if (this.toggle) {
        return this.finalLeads.filter(function(lead) {
          return lead.canView;
        });
      } else {
        return this.usersLikes.filter(function(lead) {
          return lead.canView;
        });
      }
    }
  },
  metaInfo: {
    title: "Dashboard"
  },
  components: {
    DashBar: DashBar
  },
  firestore() {
    var user = firebase.auth().currentUser;
    return {
      user: db.collection("designers").doc(user.uid),
      leads: db.collection("leads"),
      usersLikes: db
        .collection("designers")
        .doc(user.uid)
        .collection("likes")
    };
  },
  methods: {
    report: function(reportedLead) {
      this.selectedLead = reportedLead;
      if (reportedLead.reports < 10) {
        reportedLead.reports++;
        db.collection("leads")
          .doc(`${reportedLead.id}`)
          .set(
            {
              reports: reportedLead.reports
            },
            { merge: true }
          );
        console.log(reportedLead.reports);
        this.$notify({
          group: "foo",
          type: "warn",
          title: "Report Successful",
          text: "We have received your report. Thank you."
        });
        // update data from db
      } else if (reportedLead.reports >= 10) {
        reportedLead.canView = false;
        db.collection("leads")
          .doc(`${reportedLead.id}`)
          .set(
            {
              canView: reportedLead.canView
            },
            { merge: true }
          );
        console.log(reportedLead.canView);
      }
    },
    addToLike: function(likedLead) {
      this.selectedLead = likedLead;
      let user = firebase.auth().currentUser;
      db.collection("designers")
        .doc(user.uid)
        .collection("likes")
        .doc(likedLead.id)
        .set({
          canView: likedLead.canView,
          company: likedLead.company,
          confirmed: likedLead.confirmed,
          date: likedLead.date,
          description: likedLead.description,
          email: likedLead.email,
          name: likedLead.name,
          reports: likedLead.reports,
          service: likedLead.service
        });
      this.$notify({
        group: "foo",
        type: "success",
        title: "Favorited",
        text: "Added to your favorites."
      });
    },
    removeLike: function(likedLead) {
      this.selectedLead = likedLead;
      let user = firebase.auth().currentUser;
      db.collection("designers")
        .doc(user.uid)
        .collection("likes")
        .doc(likedLead.id)
        .delete();
      this.$notify({
        group: "foo",
        type: "error",
        title: "Removed",
        text: "Removed from your favorites."
      });
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

.tcontainer {
  width: 100%;
  margin: auto;
}

.li-on {
  font-weight: bolder;
  text-decoration: underline;
  color: #3a1819;
}

.li-off {
  color: #7e7e7e;
}

.li-off:hover {
  text-decoration: underline;
}

table {
  border-spacing: 0 10px;
  margin: auto;
  padding-top: 25px;
}

th {
  padding: 0px 25px;
  background: #f3f3f3;
}

td {
  width: 200px;
  padding: 10px 25px;

}

tr:hover {
  box-shadow: 1px 2px 3px rgba(199, 199, 199, 0.575);
}

.header-row:hover {
  box-shadow: none;
}

tr {
  text-align: left;
  background: white;
  transition: 0.2s;
  padding: 50% 0;
}

.td-desc {
  width: 400px;
}

.td-first {
  width: 150px;
  border-radius: 5px 0 0 5px;
}

.td-last {
  width: 130px;
  border-radius: 0px 5px 5px 0;
  text-align: center;
}

#td-date {
  width: 100px;
}

#td-service {
  width: 150px;
}

#td-company {
  width: 150px;
}

.actions {
  vertical-align: middle;
}

i {
  padding: 0px 5px;
}

.report,
.like,
.email {
  color: #3a1819;
  transition: 0.3s;
}

.report {
  font-size: 1.15em;
}

.like,
.unlike {
  font-size: 1.25em;
}

.email {
  font-size: 1.25em;
}

.like:hover {
  color: rgb(47, 167, 73);
}

.unlike:hover {
  color: crimson;
}

.report:hover {
  color: crimson;
}

.email:hover {
  color: rgb(2, 90, 223);
}

.report:visited {
  color: crimson;
}

.filter-bar {
  margin: auto;
}

.filter-bar ul {
  list-style-type: none;
  margin: 20px auto -10px auto;
  padding: 0;
  overflow: hidden;
  width: 15%;
}

.filter-bar li {
  float: left;
  padding: 0px 10px;
}

.filter-bar li:hover {
  cursor: pointer;
}

.popup {
  position: absolute;
  bottom: -15%;
  left: 50%;
  transform: translate(-50%, -0%);
  background: rgb(243, 101, 101);
  padding: 0px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 9px #58585875;
  color: #f3f3f3;
  animation-name: popup_anim;
  animation-duration: 2s;
}

@keyframes popup_anim {
  0% {
    bottom: -15%;
  }
  20% {
    bottom: 2%;
  }
  80% {
    bottom: 2%;
  }
  100% {
    bottom: -15%;
  }
}
</style>

