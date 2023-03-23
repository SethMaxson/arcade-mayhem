<script setup lang="ts">
const props = defineProps({
	str: {
		type: Number,
		required: true,
		default: 0
	},
	spd: {
		type: Number,
		required: false,
		default: 0
	},
	mind: {
		type: Number,
		required: false,
		default: 0
	},
	meta: {
		type: Number,
		required: false,
		default: 0
	},
	hp: {
		type: Number,
		required: false,
		default: 0
	}
})

const lvl = props.str + props.spd + props.mind + props.meta + props.hp - 5;
</script>

<template>
	<div class="col">
		<div class="card bg-dark border border-secondary" style="width: 20rem;">
			<div class="card-header">
				<h4 class="card-title text-center">
					<slot name="heading"></slot>
				</h4>
				<h6 class="card-subtitle mb-2 text-center">
					<slot name="subheading"></slot>
				</h6>
			</div>
			<slot name="image"></slot>
			<div class="card-body">
				<!-- <h5 class="card-title text-center">
					<slot name="heading"></slot>
				</h5>
				<h6 class="card-subtitle mb-2 text-center">
					<slot name="subheading"></slot>
				</h6> -->
				<div class="card-text">
					<div class="row text-info">
						<div class="col">Level</div>
						<div class="col text-end">{{ lvl }}</div>
					</div>
					<div class="row">
						<div class="col">Max HP</div>
						<div class="col text-end">{{ hp }}</div>
					</div>
					<div class="row">
						<div class="col">Strength</div>
						<div class="col text-end">{{ str }}</div>
					</div>
					<div class="row">
						<div class="col">Speed</div>
						<div class="col text-end">{{ spd }}</div>
					</div>
					<div class="row">
						<div class="col">Mind</div>
						<div class="col text-end">{{ mind }}</div>
					</div>
					<div class="row">
						<div class="col">Meta</div>
						<div class="col text-end">{{ meta }}</div>
					</div>
					<slot></slot>
				</div>
				<slot name="button"></slot>
			</div>
			<div class="card-footer text-muted" v-if="$slots.footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
  name: 'CharacterCard',
}
</script>

<style scoped>
h4, h5, h6, .col { font-variant: small-caps; }
</style>
