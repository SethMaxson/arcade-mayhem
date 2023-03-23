<script setup lang="ts">
import ViewBlurb from "@/components/core/ViewBlurb.vue";
</script>

<template>
	<header>
		<ViewBlurb header="Rules">
			<!-- Behold the makeshift ruleset powering this thing. -->
		</ViewBlurb>
	</header>
	<main class="px-2">
		<div>
			<h3>Stats</h3>
			<p>Each of the five stats measure how talented or untalented a character is at certain things.</p>
			
			<ul class="list-group" style="list-style-type:disc;">
				<li class="list-group-item">
					<span class="fw-bold">Strength</span> - Brute strength. Used to lift and carry things, as well as punch good.
				</li>
				<li class="list-group-item">
					<span class="fw-bold">Speed</span> - Fastness. Every three points of speed grants an extra action.
				</li>
				<li class="list-group-item">
					<span class="fw-bold">Mind</span> - Smartness and charisma. Used to ponder and persuade, as well as make gadget attacks.
				</li>
				<li class="list-group-item">
					<span class="fw-bold">Meta</span> - Magic and psychic stuff. Used for meta abilities both in and out of combat.
				</li>
				<li class="list-group-item">
					<span class="fw-bold">HP</span> - Ability to not die. This has a 1:1 ratio with max health.
				</li>
			</ul>

			<div class="tips">
				You shouldn't judge a character's abilities based solely their appearance! Whether it comes from bulging muscles, magical bracelets, or something entirely different, it's all the same to the Central Processing Unit.
			</div>
		</div>

		<div class="pt-3">
			<h3>Combat</h3>
			<p>All attacks do precisely 1 point of damage.</p>
		</div>

		<div class="pt-3">
			<h3>Leveling Up</h3>
			<p>
				There is no class or job system in Fitzman's Arcade. Each character gets a single stat point every time they level up, and they are free to invest it into whichever stat strikes their fancy.
			</p>
		</div>
	</main>
</template>
