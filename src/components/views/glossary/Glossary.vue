<script setup lang="ts">
import Card from "@/components/core/Card.vue";
import CardDeck from "@/components/core/CardDeck.vue";
import Portrait from "@/components/core/Portrait.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
</script>

<template>
	<header>
		<ViewBlurb header="Factions">
			Some of the organizations at play in this story.
		</ViewBlurb>
	</header>
	<main>
		<CardDeck>
			<Card>
				<!-- <template #image>
					<Portrait src="characters/party/wednesday-warriors/dilbert.png" />
				</template> -->
				<template #heading>F.I.R.E.</template>
				<template #subheading>The Fellowship of Individuals for the Reclamation of Edolador</template>

				<b>FIRE</b> is a faction of dragonspawn that has recently become active in the Divitaera region of Paros.
				Their collective goal is to reclaim the historic home of their draconic ancestors.
			</Card>
		</CardDeck>
	</main>
</template>
