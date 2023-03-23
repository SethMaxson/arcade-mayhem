<script setup lang="ts">
import ViewBlurb from "../../core/ViewBlurb.vue";
import JournalLabels from "./subviews/JournalLabels.vue";
import JournalEntry from "./subviews/JournalEntry.vue";
import Location from "@/components/core/text-tags/Location.vue";
import Important from "@/components/core/text-tags/Important.vue";
import Character from "@/components/core/text-tags/Character.vue";
</script>

<template>
	<header>
		<ViewBlurb header="Journal">
			The story so far...
		</ViewBlurb>
	</header>
	<main>
		<div class="container border border-2 g-0">
			<JournalLabels session="Session #" name="Name" party="Party Members" date="Date" class="bg-info fw-bold" />
			<JournalEntry :session=1 name="Fizzy Lifting Drink" date="04/20/2022" party="Guidos, Murica, Peppa Shortbottom">
				A trio of adventurers were locked within the brig of an airship prisoner transport when the vessel was suddenly attacked by pirates. A stray piece of shrapnel destroyed the lock to their cell. The prisoners seized upon this opportunity, narrowly escaping by feeding an Anti Gravity Crystal to an ogrillon and using their new friend as a makeshift airship until they could make landfall.
			</JournalEntry>
			<JournalEntry :session=2 name="Landfall" date="05/05/2022" party="Floopy, Guidos, Murica">
				The gang reached dry land and completed their first adventuring contract. Afterwards, they tailed a squad of duergar bounty hunters to the secret city of Aphotia.
			</JournalEntry>
			<JournalEntry :session=3 name="Shuffling the Deck" date="05/11/2022" party="Floopy, Guidos, Murica">
				The gang met Ssssimon and purchased several mystical artifacts, including a Deck of Many Things. They drew several cards, losing them a crewmate but gaining them minor wealth.
			</JournalEntry>
			<JournalEntry :session=4 name="The Come-up" date="05/18/2022" party="Floopy, Guidos, Murica">
				The gang pooled their resources to purchase an airship before traveling to the city of Tilaporth to claim it. Upon arrival, they discovered that it was impounded for a human trafficking investigation. The party began an investigation of their own in the hopes of freeing their ship from the yellow tape. Floopy and Murica played catch with some poison darts they found, inflicting both with curses.
			</JournalEntry>
			<JournalEntry :session=5 name="New Car Smell" date="05/26/2022" party="Floopy, Guidos, Murica">
				The gang solved the crime, rescued most of the victims, and finally obtained their ship. The overworked official assigned to the case gave thanked the gang by giving them a map said to lead to the lost treasure of GreedBeard. Murica exploded 24 times and became a drow.
			</JournalEntry>
			<JournalEntry :session=6 name="Test Drive" date="06/01/2022" party="Floopy, Guidos, Murica">
				The gang set out to follow the treasure map in the newly christened 'The Flying Englishman.' They purchased a bag of 'shrooms and salvaged an airship whose crew had been slain by an extradimensional entity before finally arriving at the remote island shown on their treasure map.
			</JournalEntry>
			<JournalEntry :session=7 name="Dungeon Delving" date="06/15/2022" party="Floopy, Guidos, Murica">
				The gang began their exploration of the ancient catacombs on the remote island. Floopy found and donned an obviously cursed mask, which immediately fused to his face.
			</JournalEntry>
			<JournalEntry :session=8 name="Silly Rabbit, Trix are for Ancient Catacombs" date="06/23/2022" party="Floopy, Guidos, Murica">
				The gang discovered the legendary 'treasure' of GreedBeard: the <Important>GreedBurger secret formula</Important>. They made a final search of the catacombs, and stumbled onto a hidden, secret wing that housed occult imagery. Floopy managed to trigger a prophetic vision of cultists performing a ritual to summon an eldritch being known as <Important>Fwloaiolok</Important>, or '<Important>The First Hunger</Important>.'
			</JournalEntry>
			<JournalEntry :session=9 name="Windfall" date="07/12/2022" party="Floopy, Guidos, Murica">
				The gang sailed back to the mainland of <Location>Lagos</Location>, making a pit stop in <Location>The Essentials</Location> along the way. Floopy and Guidos made <Important>Blood Oaths</Important> with <Character>Ssssimon</Character> in exchange for magic items they could not otherwise afford. On the final leg of their return voyage, they crashed a <Important>mysterious gala</Important> hosted by a wealthy duchess on a large, luxury airship. They discovered the gala to be a birthday party for the duchess' violent talking doberman, <Character>Mr. Smoochums</Character>, who had been locked below decks after trying to eat party-goers' femurs. Floopy set the dog free, causing no small amount of chaos aboard the yacht. The party escaped before consequences could find them, but lost <Character>Teddy</Character> in the shuffle.
			</JournalEntry>
			<JournalEntry :session=10 name="Warmth for Orphans" date="07/21/2022" party="Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=11 name="A Tangled Yarn" date="08/03/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=12 name="Welcome to the Jungle" date="08/10/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=13 name="Slayer of Tendies" date="08/24/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=14 name="The Fate of the Minotaur" date="09/14/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=15 name="Trials and Revelations" date="09/21/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=16 name="The Search Begins" date="10/05/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=17 name="Golden Hoof" date="10/19/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=18 name="Kitchen Nightmare" date="11/03/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=19 name="The Good, the Bad, and the Corny" date="11/09/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=20 name="Gift Tax" date="12/14/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=21 name="Rudolph the Red" date="12/21/2022" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=22 name="When the Cows Came Home" date="01/05/2023" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=23 name="A Head Shorter" date="01/11/2023" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=24 name="Ghosts & Leprechauns" date="01/18/2023" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=25 name="The Vault Part I" date="02/08/2023" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=26 name="The Vault Part II" date="02/15/2023" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=27 name="This Dirt Tastes Like Chicken" date="03/01/2023" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=28 name="Landfall" date="03/08/2023" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
			<JournalEntry :session=29 name="Landfall" date="03/15/2023" party="Dilbert, Floopy, Guidos, Murica">
				Summary
			</JournalEntry>
		</div>
	</main>
</template>
