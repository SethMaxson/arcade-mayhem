<template>
	<Text class="character">
		<slot></slot>
	</Text>
</template>

<style scoped>
.character {
	color: #031e94;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
import Text from "./Text.vue";

export default defineComponent({
    name: "Character",
    components: { Text }
})
</script>