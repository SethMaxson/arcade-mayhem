<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import Card from '@/components/core/Card.vue';
import Portrait from '@/components/core/Portrait.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
</script>

<template>
	<CharacterCardDeck>
		<!-- <Card>
			<template #image>
				<Portrait src="characters/party/wednesday-warriors/dilbert.png" />
			</template>
			<template #heading>Dilbert the Incontinent</template>
			<template #subheading>Human Paladin</template>

			<b>Dilbert the Incontinent</b> is a formidable warrior with a natural tendency towards good-natured altruism. He
			has uncommonly high self-doubt, which may be the only thing hampering his otherwise tactical mind.
			<!- <template #button><a href="#" class="btn btn-primary">Go somewhere</a></template> ->
		</Card> -->
		<CharacterCard>
			<template #image>
				<Portrait src="characters/party/wednesday-warriors/dilbert.png" />
			</template>
			<template #heading>Dilbert the Incontinent</template>
			<template #subheading>Human Paladin</template>

			<b>Dilbert the Incontinent</b> is a formidable warrior with a natural tendency towards good-natured altruism. He
			has uncommonly high self-doubt, which may be the only thing hampering his otherwise tactical mind.
			<!-- <template #button><a href="#" class="btn btn-primary">Go somewhere</a></template> -->
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/party/wednesday-warriors/floopy.png" />
			</template>
			<template #heading>Floopy Nugen</template>
			<template #subheading>High Elf Barbarian</template>

			<b>Floopy Nugen</b> is a manic, unpredictable elvish barbarian. His aloof tendencies naturally blend with the
			wild magic that flows within his veins to make Floopy the ultimate agent of chaos.
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/party/wednesday-warriors/guidos.png" />
			</template>
			<template #heading>Guidos</template>
			<template #subheading>Deep Gnome Wizard</template>

			<b>Guidos</b> is a gifted scholar of the arcane with a fondness for treasure in nearly any form. He has a fuse
			that matches his short stature, but his quick-witted cunning usually prevents him from getting in over his head.
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/party/wednesday-warriors/murica.png" />
			</template>
			<template #heading>Murica Bigbrain</template>
			<template #subheading>Drow Monk</template>

			<b>Murica Bigbrain</b> is a practitioner of the martial arts, as well as the only recorded instance of a
			were-rabbit. Despite sometimes shifting into the form of a bunny, Murica never turns tail when faced with a
			fight.
		</CharacterCard>
	</CharacterCardDeck>
</template>

<script lang="ts">
export default {
    name: "PartyCards",
    components: { CharacterCardDeck }
}
</script>
