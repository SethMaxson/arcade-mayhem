import { createApp } from "vue";
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/main.css";
import CharactersViewComponent from "./components/views/characters/Characters.vue";
import CharacterSelectViewComponent from "./components/views/character-select/CharacterSelect.vue";
import GamesViewComponent from "./components/views/games/Games.vue";
import GlossaryViewComponent from "./components/views/glossary/Glossary.vue";
import JournalViewComponent from "./components/views/journal/Journal.vue";
import RulesViewComponent from "./components/views/rules/Rules.vue";

// createApp(App).mount("#app");

const router = createRouter({
	history: createWebHashHistory("/arcade-mayhem/"),
	routes:[
		{ path: '/', component: CharacterSelectViewComponent},
		{ path: '/about', component: CharacterSelectViewComponent},
		{ path: '/characters', component: CharactersViewComponent},
		{ path: '/character-select', component: CharacterSelectViewComponent},
		{ path: '/games', component: GamesViewComponent},
		{ path: '/glossary', component: GlossaryViewComponent},
		{ path: '/journal', component: JournalViewComponent},
		{ path: '/rules', component: RulesViewComponent},
		{ path: '/home', component: CharacterSelectViewComponent}]
});

const app= createApp(App)

app.use(router)

app.mount('#app')
