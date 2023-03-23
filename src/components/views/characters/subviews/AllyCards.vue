<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
</script>

<template>
	<CharacterCardDeck>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/kenji-cherrymoon.png" />
			</template>
			<template #heading>Kenji Cherrymoon</template>
			<template #subheading>Halfling Chimneysweep</template>

			<b>Kenji Cherrymoon</b> is a friendly chimneysweep in the city of Tilaporth. His knowledge of the criminal underworld and tendency to pop up in shady circumstances may hint towards a secret double life...
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/killinggame/default-portrait.jpeg" />
			</template>
			<template #heading>Skia</template>
			<template #subheading>Celestial Adiutor to Tavrosa</template>
			<template #pcContact>Floopy Nugen</template>

			<b>Skia</b> is an ancient being sworn to watch over the goddess of the Minotaur. His essence was sealed within a mask by dark magic, but he was recently restored by Floopy Nugen and friends. 
		</CharacterCard>
	</CharacterCardDeck>
</template>
