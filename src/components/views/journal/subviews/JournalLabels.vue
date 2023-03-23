<script setup lang="ts">
defineProps({
	class: {
		type: String,
		required: false
	},
	session: {
		type: [Number, String],
		required: false,
		default: 0
	},
	name: {
		type: String,
		required: true
	},
	party: {
		type: String,
		required: false
	},
	date: {
		type: String,
		required: false
	}
})
</script>

<template>
	<div class="row border-bottom border-2 m-0" :class="class">
		<div class="col-1 border-end border-2 text-end">
			{{session}}
		</div>
		<div class="col border-end border-2">
			{{name}}
		</div>
		<div class="col border-end border-2 d-none d-md-block">
			{{party}}
		</div>
		<div class="col text">
			{{date}}
		</div>
	</div>
</template>

<script lang="ts">
export default {
  name: 'JournalLabels',
}
</script>
