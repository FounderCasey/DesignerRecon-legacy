<template>
  <div class="dashboard">
    <DashBar></DashBar>
    <div class="tcontainer">
      <div class="filter-bar">
        <ul>
          <li @click="toggle = true">All</li>
          <li @click="toggle = false">Favorites</li>
        </ul>
      </div>
      <table>
        <thead>
          <tr class="header-row">
            <th>Name</th>
            <th>Company</th>
            <th>Service</th>
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
              <a v-bind:href="'mailto:' + lead.email"><i class="fas fa-envelope email"></i></a>
              <i class="fas fa-plus like" @click="addToLike(lead)"></i>
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
import firebase from 'firebase'
import { db } from '../main.js'
import DashBar from './DashBar'

export default {
  name: 'dashboard',
  data() {
    return {
      leads: [],
      usersLikes: [],
      toggle: true,
      selectedLead: {}
    }
  },
  computed: {
    shownLeads: function() {
      if (this.toggle) {
        console.log("toggle off")
        return this.leads.filter(function(lead) {
          return lead.canView
        })
      } else {
        console.log("toggle on")
        return this.usersLikes.filter(function(lead) {
          return lead.canView
        })
      }
    }
  },
  metaInfo: {
    title: 'Dashboard'
  },
  components: {
    DashBar: DashBar
  },
  firestore() {
    var user = firebase.auth().currentUser;
    return {
      leads: db.collection('leads'),
      usersLikes: db.collection("designers").doc(user.uid).collection('likes')
    }
  },
  methods: {
    report: function(reportedLead) {
      alert('Thank you for your report.')
      this.selectedLead = reportedLead;
      if (reportedLead.reports < 10) {
        reportedLead.reports++;
        db.collection('leads').doc(`${reportedLead.id}`).set({
          reports: reportedLead.reports
        }, {merge: true})
        console.log(reportedLead.reports);
        // update data from db
      } else if (reportedLead.reports >= 10) {
        reportedLead.canView = false;
        db.collection('leads').doc(`${reportedLead.id}`).set({
          canView: reportedLead.canView
        },{merge: true})
        console.log(reportedLead.canView)
      }
    },
    addToLike: function(likedLead) {
      this.selectedLead = likedLead;
      var user = firebase.auth().currentUser;
      db.collection("designers").doc(user.uid).collection('likes').doc(likedLead.id).set({
        canView: likedLead.canView,
        company: likedLead.company,
        confirmed: likedLead.confirmed,
        date: likedLead.date,
        description: likedLead.description,
        email: likedLead.email,
        name: likedLead.name,
        reports: likedLead.reports,
        service: likedLead.service
      })
    },
    toggleLikes: function() {
      
    }
  }
}
</script>

<style scoped>
  .dashboard {
    font-family: 'Montserrat', sans-serif;
    color: #3A1819;
    background: #f3f3f3;
    height: 100vh;
    overflow: scroll;
  }

  .tcontainer {
    width: 95%;
    margin: auto;
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
    vertical-align: top;
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
  }

  .td-desc {
    width: 350px;
  }

  .td-first {
    width: 250px;
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
    width: 250px;
  }

  #td-company {
    width: 40px;
  }

  .actions {
    vertical-align: middle;
  }

  i {
    padding: 0px 5px;
  }

  .report, .like, .email {
    color: #3A1819;
    transition: 0.3s;
  }

  .report {
    font-size: 1.2em;
  }

  .like {
    font-size: 1.35em;
  }

  .email {
    font-size: 1.25em;
  }

  .like:hover {
    color: rgb(47, 167, 73);
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
</style>

