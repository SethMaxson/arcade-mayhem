<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
</script>

<template>
	<CharacterCardDeck>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/killinggame/default-portrait.jpeg" />
			</template>
			<template #heading>Baddie</template>
			<template #subheading>Species Job</template>

			<b>Baddie</b> is some kind of person.
		</CharacterCard>
	</CharacterCardDeck>
</template>
