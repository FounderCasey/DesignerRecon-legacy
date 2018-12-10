<template>
	<div>
		<nav class="dash">
			<ul>
				<router-link class="dash-link logout" :to="'/'">
					<span @click="logout"><i class="fas fa-power-off"></i></span>
				</router-link>
				<router-link class="dash-link" :to="'/join'"><i class="fas fa-user-circle"></i></router-link>
				<router-link class="dash-link special" :to="'/welcome'">Designer Recon</router-link>
			</ul>
		</nav>
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default {
		name: 'DashBar',
		data: function() {
			return {
				links: [
					{
						id: 0,
						text: 'Join Us',
						page: '/joinus'
					},
					{ 
						id: 1, 
						text: 'Find A Designer',
						page: '/welcome'
					},
					{ 
						id: 2, 
						text: 'Login',
						page: '/login'
					},
					{
						id: 3,
						text: 'Designer Recon',
						page: '/welcome'
					}
				]
			}
		},
		methods: {
			logout: function() {
				firebase.auth().signOut().then(() => {
					this.$router.replace('login');
				})
			}
		}
	}
</script>

<style scoped>
	.dash {
        width: 100%; /* Full width */
        margin: auto;
        font-family: 'Montserrat', sans-serif;
        background: linear-gradient(40deg, coral, rgb(255, 80, 80));
	}
	
	ul {
		list-style-type: none;
        margin: auto;
        padding: 0;
        overflow: hidden;
		font-weight: 600;
        width: 84%;
	}
	
	.dash-link {
        margin: 2px 15px;
		float: right;
		display: block;
        text-align: center;
        padding: 10px 0px;
        text-decoration: none;
		font-weight: bold;
        font-size: 1.5em;
        font-weight: 500;
        color: #fcfcfc;
	}
	
	.dash-link:hover {
		color: rgb(207, 207, 207);
	}
	
	.special {
        margin: 0;
		float: left;
		padding: 12px 0px;
        font-size: 1.5em;
        font-weight: 700;
        border: none;
	}
	
	.special:hover {
		float: left;
        border: none;
	}

	.logout {
		padding: 10px 0px;
        font-size: 1.5em;
        font-weight: 400;
        border: none;
		transition: 0.3s;
	}

	.logout:hover {
		border: none;
		color: rgb(37, 37, 37);
		transform: rotate(360deg);
	}
</style>