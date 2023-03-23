<script setup lang="ts">
import ColorModeToggle from "./ColorModeToggle.vue";
defineProps<{
	activePage?: string;
}>();
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-dark">
		<!-- <div class="container-fluid"> -->
		<div class="container">
			<router-link class="navbar-brand" to="/"> Fitzman's Arcade </router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
				aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarToggler">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link" to="/home"> Home </router-link>
					</li>
					<!-- <li class="nav-item">
						<router-link class="nav-link" to="/characters"> Meet the Cast </router-link>
					</li> -->
					<li class="nav-item">
						<router-link class="nav-link" to="/character-select"> Character Select </router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/games"> Games </router-link>
					</li>
					<!-- <li class="nav-item">
						<router-link class="nav-link" to="/journal"> Journal </router-link>
					</li> -->
					<!-- <li class="nav-item">
						<router-link class="nav-link" to="/glossary"> Glossary </router-link>
					</li> -->
					<!-- <ColorModeToggle /> -->
				</ul>
			</div>
		</div>
	</nav>
</template>