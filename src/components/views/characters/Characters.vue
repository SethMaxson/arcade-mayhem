<script setup lang="ts">
import AcquaintanceCards from "./subviews/AcquaintanceCards.vue";
import AllyCards from "./subviews/AllyCards.vue";
import CrewCards from "./subviews/CrewCards.vue";
import EnemyCards from "./subviews/EnemyCards.vue";
import FrenemyCards from "./subviews/FrenemyCards.vue";
import PartyCards from "./subviews/PartyCards.vue";
import AccordionItem from "../../core/AccordionItem.vue";
import ViewBlurb from "../../core/ViewBlurb.vue";
</script>

<template>
	<header>
		<ViewBlurb header="Characters">
			Everyone knows a story is only as good as its cast.
		</ViewBlurb>
	</header>
	<main>
		<div class="accordion" id="characters-accordion">
			<AccordionItem name="Main Characters" parent-id="characters-accordion" :default-open="true">
				<PartyCards />
			</AccordionItem>
			<AccordionItem name="Crew" parent-id="characters-accordion">
				<CrewCards />
			</AccordionItem>
			<AccordionItem name="Allies" parent-id="characters-accordion">
				<AllyCards />
			</AccordionItem>
			<AccordionItem name="Frenemies" parent-id="characters-accordion">
				<FrenemyCards />
			</AccordionItem>
			<AccordionItem name="Enemies" parent-id="characters-accordion">
				<EnemyCards />
			</AccordionItem>
			<AccordionItem name="Acquaintances" parent-id="characters-accordion">
				<AcquaintanceCards />
			</AccordionItem>
		</div>
	</main>
</template>
