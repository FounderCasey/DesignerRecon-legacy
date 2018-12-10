<template>
  <div id="app">
    <router-view/>
    <div class="beta-tag">
      <img src="./assets/Meteor.png"><p>Alpha 0.1</p>
    </div>
  </div>
</template>

<script>
	
	export default {
		name: 'App',
	}
</script>

<style>

  @media (min-width: 980px) {
      body {
      width: 100%;
      margin: 0;
      color: #fcfcfc;
      font-family: 'Montserrat', sans-serif;
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

      ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
      }

      .beta-tag {
        background: rgb(41, 41, 41);
        font-weight: 700;
        width: 110px;
        text-align: center;
        padding: 5px 3px;
        font-size: 0.75em;
        position: fixed;
        bottom: 4%;
        left: 2%;
        border-radius: 5px;
        box-shadow: 2px 2px 15px #0000008e;
        color: rgb(197, 197, 197);
      }

      .beta-tag img {
        height: 20px;
        float: left;
        padding-top: 4px;
        padding-left: 7px;
      }

      .beta-tag p {
        margin: 0;
        padding-top: 4px;
      }
  }

  @media (max-width: 980px) {
      body {
      width: 100%;
      margin: 0;
      color: #fcfcfc;
      font-family: 'Montserrat', sans-serif;
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

      ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
      }

      .beta-tag {
        background: rgb(41, 41, 41);
        font-weight: 700;
        width: 110px;
        text-align: center;
        padding: 5px 3px;
        font-size: 0.75em;
        position: fixed;
        bottom: 4%;
        left: 2%;
        border-radius: 5px;
        box-shadow: 2px 2px 15px #0000008e;
        color: rgb(197, 197, 197);
      }

      .beta-tag img {
        height: 20px;
        float: left;
        padding-top: 4px;
        padding-left: 7px;
      }

      .beta-tag p {
        margin: 0;
        padding-top: 4px;
      }
  }

  @media (max-width: 980px) {
      body {
      width: 100%;
      margin: 0;
      color: #fcfcfc;
      font-family: 'Montserrat', sans-serif;
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

      ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
      }

      .beta-tag {
        background: rgb(41, 41, 41);
        font-weight: 700;
        width: 110px;
        text-align: center;
        padding: 5px 3px;
        font-size: 0.75em;
        position: fixed;
        bottom: 4%;
        left: 2%;
        border-radius: 5px;
        box-shadow: 2px 2px 15px #0000008e;
        color: rgb(197, 197, 197);

        display: none;
      }

      .beta-tag img {
        height: 20px;
        float: left;
        padding-top: 4px;
        padding-left: 7px;
      }

      .beta-tag p {
        margin: 0;
        padding-top: 4px;
      }
  }
</style>
