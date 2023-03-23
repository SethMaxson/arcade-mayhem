<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
</script>

<template>
	<CharacterCardDeck>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/gojiro.png" />
			</template>
			<template #heading>Gojiro</template>
			<template #subheading>Tabaxi Mercenary</template>

			<b>Gojiro</b> is an infamous mercenary known for his martial prowess, stealth, and tracking ability. He seems to have taken a shine to the protag
		</CharacterCard>
	</CharacterCardDeck>
</template>
