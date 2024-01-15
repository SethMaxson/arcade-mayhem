<script setup lang="ts">
import ViewBlurb from "../../core/ViewBlurb.vue";
import CharacterCard from './components/CharacterCard.vue';
</script>

<template>
	<header>
		<ViewBlurb header="Choose your character!">
			<!-- Choose your character! -->
		</ViewBlurb>
	</header>
	<main>
		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-1">
			<CharacterCard :str="1" :spd="2" :mind="1" :meta="5" :hp="1">
				<template #image>
					<img class="bg-secondary" src="../../../../public/characters/bub.png" />
				</template>
				<template #heading>Bub</template>
				<template #subheading>Bubble Bobble</template>
				<!-- <template #button><a href="#" class="btn btn-primary">Go somewhere</a></template> -->
			</CharacterCard>
			<CharacterCard :str="3" :spd="3" :mind="1" :meta="1" :hp="2">
				<template #image>
					<img class="bg-secondary pix" src="../../../../public/characters/mighty.png" />
				</template>
				<template #heading>Mighty the Armadillo</template>
				<template #subheading>SegaSonic the Hedgehog</template>
			</CharacterCard>
			<CharacterCard :str="2" :spd="2" :mind="2" :meta="2" :hp="2">
				<template #image>
					<img class="bg-secondary pix" src="../../../../public/characters/bart.png" />
				</template>
				<template #heading>Bart Simpson</template>
				<template #subheading>The Simpsons (1991)</template>
			</CharacterCard>
			<CharacterCard :str="2" :spd="1" :mind="1" :meta="4" :hp="2">
				<template #image>
					<img class="bg-secondary pix" src="../../../../public/characters/anarkis.png" />
				</template>
				<template #heading>Anarkis</template>
				<template #subheading>Darkstalkers 3</template>
			</CharacterCard>
			<CharacterCard :str="4" :spd="2" :mind="2" :meta="1" :hp="1">
				<template #image>
					<img class="bg-secondary" src="../../../../public/characters/dirk.png" />
				</template>
				<template #heading>Dirk the Daring</template>
				<template #subheading>Dragon's Lair</template>
			</CharacterCard>
			<CharacterCard :str="5" :spd="2" :mind="1" :meta="1" :hp="1">
				<template #image>
					<img class="bg-secondary pix" src="../../../../public/characters/dkjr.png" />
				</template>
				<template #heading>Donkey Kong Jr.</template>
				<template #subheading>Donkey Kong Jr.</template>
			</CharacterCard>
			<CharacterCard :str="2" :spd="2" :mind="1" :meta="3" :hp="2">
				<template #image>
					<img class="bg-secondary" src="../../../../public/characters/mspacman.png" />
				</template>
				<template #heading>Ms. Pacman</template>
				<template #subheading>Ms. Pacman</template>
			</CharacterCard>
			<CharacterCard :str="2" :spd="2" :mind="1" :meta="3" :hp="2">
				<template #image>
					<img class="bg-secondary pix" src="../../../../public/characters/subzero.png" />
				</template>
				<template #heading>Sub-Zero</template>
				<template #subheading>Ultimate Mortal Kombat 3</template>
			</CharacterCard>
			<CharacterCard :str="1" :spd="3" :mind="1" :meta="3" :hp="2">
				<template #image>
					<img class="bg-secondary pix" src="../../../../public/characters/paddle.png" />
				</template>
				<template #heading>Paddle #1</template>
				<template #subheading>Pong</template>
			</CharacterCard>
			<CharacterCard :str="3" :spd="4" :mind="1" :meta="1" :hp="1">
				<template #image>
					<img class="bg-secondary pix" src="../../../../public/characters/paperboy.png" />
				</template>
				<template #heading>Paperboy</template>
				<template #subheading>Paperboy</template>
			</CharacterCard>
		</div>
	</main>
</template>
