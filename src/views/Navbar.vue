<template>
	<div>
		<nav>
			<ul class="nav-ul">
				<a href="javascript:void(0)" class="link hamburger" @click="open = !open"><i class="fas fa-bars link"></i></a>
				<router-link class="link desktop" :to="'/login'">Login</router-link>
				<router-link class="link desktop" :to="'/join'">Join Us</router-link>
				<router-link class="link desktop" :to="'/welcome'">Find A Designer</router-link>
				<router-link class="link special" :to="'/welcome'">Designer Recon</router-link>
			</ul>
		</nav>
		<div class="menu-box" v-if="open">
			<ul class="menu-ul">
				<a href="javascript:void(0)" class="menu-link close" @click="open = !open"><i class="fas fa-times menu-link"></i></a>
				<router-link class="menu-link menu-special" :to="'/welcome'">Designer Recon</router-link>
				<router-link class="menu-link" :to="'/welcome'">Find A Designer</router-link>
				<router-link class="menu-link" :to="'/join'">Join Us</router-link>
				<router-link class="menu-link" :to="'/login'">Login</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Navbar',
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
				],
				open: false
			}
		},
		methods: {

		}
	}
</script>

<style>
	@media (min-width: 980px) {
		nav {
			width: 100%; /* Full width */
			margin: auto;
			font-family: 'Montserrat', sans-serif;
		}
		
		.nav-ul {
			list-style-type: none;
			margin: auto;
			padding: 0;
			overflow: hidden;
			font-weight: 600;
			width: 80%;
		}

		.menu-box {
			display: none;
		}
		
		.link {
			margin: 15px 15px;
			float: right;
			display: block;
			text-align: center;
			padding: 10px 0px;
			text-decoration: none;
			font-weight: bold;
			border-bottom: solid 4px transparent;
			font-size: 1.5em;
			color: #fcfcfc;
		}
		
		.link:hover {
			border-bottom: solid 4px #fcfcfc;
		}

		.desktop {
			display: block;
		}
		
		.special {
			margin: 0;
			float: left;
			padding: 20px 0px;
			font-size: 2em;
			font-weight: 700;
			border: none;
		}
		
		.special:hover {
			float: left;
			border: none;
		}

		.hamburger {
			display: none;
		}
	}

	@media (max-width: 980px) {
		nav {
			width: 100%; /* Full width */
			margin: auto;
			font-family: 'Montserrat', sans-serif;
		}
		
		.nav-ul {
			list-style-type: none;
			margin: auto;
			padding: 0;
			overflow: hidden;
			font-weight: 600;
			width: 90%;
		}
		
		.link {
			margin: 12px 0px;
			float: right;
			display: block;
			text-align: center;
			text-decoration: none;
			font-weight: bold;
			font-size: 1.2em;
			color: #fcfcfc;
		}

		.link:active {
			color: rgb(156, 156, 156);
		}

		.desktop {
			display: none;
		}
		
		.special {
			margin: 0;
			float: left;
			padding: 20px 0px;
			font-size: 1.4em;
			font-weight: 700;
			border: none;
		}
		
		.special:hover {
			float: left;
			border: none;
		}

		.special:active {
			color: #fcfcfc;
		}

		.menu-special {
			font-size: 5em;
			font-weight: 700;
		}

		.menu-ul {
			list-style-type: none;
  			margin: 55px 0;
  			padding: 0;
			font-weight: 600;
			width: 100vw;
			position: relative;
		}

		.menu-link {
			display: block;
			text-decoration: none;
			font-weight: bold;
			font-size: 1.2em;
			color: #fcfcfc;
			text-align: center;
			margin-bottom: 55px;
		}

		.menu-link:active {
			color: rgb(156, 156, 156);
		}

		.close {
			position: absolute;
			top: -15%;
			right: 5%;
		}

		.menu-box {
			background: #3A1819;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 5;
		}
	}
</style>