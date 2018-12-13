<template>
  <div class="home">
    <DashBar></DashBar>
    <div class="tcontainer">
      <table>
        <thead>
          <tr class="header-row">
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Service</th>
            <th>Added</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lead in leads">
            <td class="td-first">{{ lead.name }}</td>
            <td><a v-bind:href="'mailto:' + lead.email">{{ lead.email }}</a></td>
            <td>{{ lead.company }}</td>
            <td id="td-service">{{ lead.service }}</td>
            <td id="td-date">{{ lead.date }}</td>
            <td class="td-desc">{{ lead.description }}</td>
            <td class="td-last actions">
              <i class="fas fa-arrow-circle-up like"></i>
              <i class="fas fa-exclamation-circle report" @click="report(lead)"></i>
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
  name: 'home',
  data() {
    return {
      leads: [],
      selectedLead: {}
    }
  },
  components: {
    DashBar: DashBar
  },
  firestore() {
    return {
      leads: db.collection('leads')
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      })
    },
    report: function(reportedLead) {
      this.selectedLead = reportedLead;
      // update data from db
      console.log(reportedLead.reports);
    }
  }
}
</script>

<style scoped>
  .home {
    font-family: 'Montserrat', sans-serif;
    color: #3A1819;
    background: #f3f3f3;
    height: 100vh;
  }

  .tcontainer {
    width: 85%;
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
    width: 120px;
    border-radius: 5px 0 0 5px;
  }

  .td-last {
    width: 80px;
    border-radius: 0px 5px 5px 0;
    text-align: right;
  }

  #td-date {
    width: 150px;
  }

  #td-service {
    width: 150px;
  }

  i {
    margin: 0px 3px;
  }

  .actions {
    vertical-align:middle;
  }

  .report, .like {
    color: #3A1819;
    transition: 0.3s;
    font-size: 1.3em;
  }

  .like:hover {
    color: rgb(47, 167, 73);
  }

  .report:hover {
    color: crimson;
  }

  .report:visited {
    color: crimson;
  }
</style>

