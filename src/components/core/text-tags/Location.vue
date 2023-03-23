<script setup lang="ts">
// import Text from "@/components/core/text-tags/Text.vue";
// defineProps({
// 	class: {
// 		type: String,
// 		required: false
// 	},
// 	style: {
// 		type: String,
// 		required: false
// 	}
// })
</script>

<template>
	<Text class="location">
		<slot></slot>
	</Text>
</template>

<style scoped>
.location {
	color: #039422;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Text from "./Text.vue";

export default defineComponent({
    name: "Location",
    components: { Text }
})
</script>