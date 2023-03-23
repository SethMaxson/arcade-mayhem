<template>
	<Text class="important">
		<slot></slot>
	</Text>
</template>

<style scoped>
.important {
	color: #94030f;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Text from "./Text.vue";

export default defineComponent({
    name: "Important",
    components: { Text }
})
</script>