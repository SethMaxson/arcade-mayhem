<script setup lang="ts">
defineProps<{
	name: {
		type: string,
		required: true,
		default: "name"
	},
	stat: {
		type: string,
		required: true,
		default: "Strength"
	},
	use: {
		type: string,
		required: true,
		default: "Combat"
	},
}>();
</script>

<template>
	<div class="ability">
		<div class="row">
			<div class="col">
				{{ name }}
			</div>
			<div class="col">
				Stat: {{ stat }}
			</div>
			<div class="col">
				Probable type: {{ use }}
			</div>
		</div>
		<div class="row">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
export default {
  name: 'AbilityCard',
}
</script>
