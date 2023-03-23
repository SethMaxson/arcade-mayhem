<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
import WikiLink from '@/components/core/WikiLink.vue';
</script>

<template>
	<CharacterCardDeck>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/npc/moiven.png" />
			</template>
			<template #heading>Moiven Enialis Yridnae</template>
			<template #subheading>Elf Inventor</template>
			<template #pcContact>Guidos</template>

			<b>Moiven</b> is an elvish inventor that the party first encountered in a tavern on <WikiLink>Moss Point</WikiLink>. He gave a sending stone to Guidos.
		</CharacterCard>
		<!-- <CharacterCard>
			<template #image>
				<Portrait src="characters/npc/killinggame/default-portrait.jpeg" />
			</template>
			<template #heading>Baddie</template>
			<template #subheading>Species Job</template>
			<template #pcContact>PCContact</template>

			<b>Baddie</b> is some kind of person.
		</CharacterCard> -->
	</CharacterCardDeck>
</template>
