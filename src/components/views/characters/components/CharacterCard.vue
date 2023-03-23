<script setup lang="ts">
import Card from '@/components/core/Card.vue';
</script>

<template>
	<Card>
		<template v-slot:footer v-if="$slots.pcContact">
			Primary <abbr title="Player Character">PC</abbr> contact: <slot name="pcContact"></slot>
		</template>
		<template v-for="(slot, index) in Object.keys($slots)" :key="index" v-slot:[slot]>
			<slot :name="slot"></slot>
		</template>
	</Card>
</template>

<script lang="ts">
export default {
  name: 'CharacterCard',
}
</script>
