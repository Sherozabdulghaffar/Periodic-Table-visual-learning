/* ============================================================
   Periodix Tutorials — a fully local, backend-free study buddy.
   Answers "how to play", memory tips, group facts, and element
   questions from a built-in knowledge base. No API, no network.
   Exposes window.PeriodixTutorials.getReply(messages).
   ============================================================ */
(function () {
	"use strict";

	// Compact element table: symbol -> [name, atomic number, atomic mass]
	const ELEMENTS = {
		H: ["Hydrogen", 1, "1.008"], He: ["Helium", 2, "4.003"],
		Li: ["Lithium", 3, "6.941"], Be: ["Beryllium", 4, "9.012"],
		B: ["Boron", 5, "10.811"], C: ["Carbon", 6, "12.011"],
		N: ["Nitrogen", 7, "14.007"], O: ["Oxygen", 8, "15.999"],
		F: ["Fluorine", 9, "18.998"], Ne: ["Neon", 10, "20.180"],
		Na: ["Sodium", 11, "22.990"], Mg: ["Magnesium", 12, "24.305"],
		Al: ["Aluminium", 13, "26.982"], Si: ["Silicon", 14, "28.086"],
		P: ["Phosphorus", 15, "30.974"], S: ["Sulfur", 16, "32.065"],
		Cl: ["Chlorine", 17, "35.453"], Ar: ["Argon", 18, "39.948"],
		K: ["Potassium", 19, "39.098"], Ca: ["Calcium", 20, "40.078"],
		Sc: ["Scandium", 21, "44.956"], Ti: ["Titanium", 22, "47.867"],
		V: ["Vanadium", 23, "50.942"], Cr: ["Chromium", 24, "51.996"],
		Mn: ["Manganese", 25, "54.938"], Fe: ["Iron", 26, "55.845"],
		Co: ["Cobalt", 27, "58.933"], Ni: ["Nickel", 28, "58.693"],
		Cu: ["Copper", 29, "63.546"], Zn: ["Zinc", 30, "65.380"],
		Ga: ["Gallium", 31, "69.723"], Ge: ["Germanium", 32, "72.640"],
		As: ["Arsenic", 33, "74.922"], Se: ["Selenium", 34, "78.960"],
		Br: ["Bromine", 35, "79.904"], Kr: ["Krypton", 36, "83.798"],
		Ag: ["Silver", 47, "107.868"], Sn: ["Tin", 50, "118.710"],
		I: ["Iodine", 53, "126.904"], Xe: ["Xenon", 54, "131.293"],
		Au: ["Gold", 79, "196.967"], Hg: ["Mercury", 80, "200.590"],
		Pb: ["Lead", 82, "207.200"], U: ["Uranium", 92, "238.029"]
	};

	// Common alternate spellings / names
	const ALIASES = {
		aluminum: "Al", aluminium: "Al", sulphur: "S", tungsten: "W",
		potassium: "K", sodium: "Na", gold: "Au", silver: "Ag",
		mercury: "Hg", lead: "Pb", tin: "Sn", copper: "Cu", iron: "Fe"
	};

	const byName = {};
	Object.keys(ELEMENTS).forEach((sym) => {
		byName[ELEMENTS[sym][0].toLowerCase()] = sym;
	});

	const GROUPS = [
		{ keys: ["noble gas", "noble gases", "group 18", "inert gases"], name: "Noble gases", text: "Group 18 — helium, neon, argon, krypton, xenon, radon. Their outer electron shells are full, which is why they almost never react." },
		{ keys: ["alkali metal", "alkali metals", "group 1"], name: "Alkali metals", text: "Group 1 — lithium, sodium, potassium, rubidium, cesium, francium. Soft, silvery metals that react vigorously with water." },
		{ keys: ["alkaline earth", "group 2"], name: "Alkaline-earth metals", text: "Group 2 — beryllium, magnesium, calcium, strontium, barium, radium. Harder than the alkali metals, still quite reactive." },
		{ keys: ["halogen", "halogens", "group 17"], name: "Halogens", text: "Group 17 — fluorine, chlorine, bromine, iodine, astatine. Highly reactive nonmetals that love gaining one electron." },
		{ keys: ["transition metal", "transition metals"], name: "Transition metals", text: "The d-block in the middle of the table — iron, copper, gold, zinc and friends. Most are hard, shiny, good conductors, and form colored compounds." },
		{ keys: ["post-transition metal", "post transition metal"], name: "Post-transition metals", text: "The soft-ish metals to the right of the transition block — aluminium, tin, lead, bismuth." },
		{ keys: ["metalloid", "metalloids", "semi metal"], name: "Metalloids", text: "Boron, silicon, germanium, arsenic, antimony, tellurium — the staircase. They behave like metals sometimes and like nonmetals other times." },
		{ keys: ["nonmetal", "nonmetals"], name: "Nonmetals", text: "Hydrogen, carbon, nitrogen, oxygen, phosphorus, sulfur, selenium and the halogens. Poor conductors that usually form covalent bonds." },
		{ keys: ["lanthanide", "rare earth"], name: "Lanthanides", text: "Elements 57–71 (lanthanum to lutetium), shown in the row pulled out below the main table. Soft, silvery metals." },
		{ keys: ["actinide", "actinides"], name: "Actinides", text: "Elements 89–103 (actinium to lawrencium), in the row below the lanthanides. All are radioactive; uranium and plutonium are the famous ones." },
		{ keys: ["group", "column", "family"], name: "Groups", text: "Groups are the 18 columns of the table. Elements in the same column share the same number of outer electrons, so they behave alike." },
		{ keys: ["period"], name: "Periods", text: "Periods are the 7 rows. Moving left to right along a row, elements gain one proton and one electron at a time." }
	];

	const TOPICS = [
		{
			keys: ["how to play", "how do i play", "rules", "how it works", "gameplay", "what do i do", "instructions", "tutorial"],
			text: "**Here's how the game works:**\n1. Pick a difficulty in the start screen.\n2. A tray fills with the next 20 element tiles.\n3. Drag each tile onto the chart and drop it in its correct slot.\n4. Wrong slots shake the tile; right ones click into place.\n5. Beat the clock, finish all 6 levels, and you can **download your results**."
		},
		{
			keys: ["difficulty", "easy mode", "medium mode", "hard mode", "harder"],
			text: "**Difficulty settings:**\n• Easy — atomic numbers stay visible and you get +5 minutes.\n• Medium — numbers are hidden, standard time.\n• Hard — names are hidden too, and you get −5 minutes.\nThere are **6 levels** of 18–20 elements each — 118 elements in total."
		},
		{
			keys: ["timer", "time", "clock", "time's up", "ran out", "out of time"],
			text: "The timer starts when you do. **Medium gives you 10 minutes on desktop (20 on mobile)**, Easy adds 5, Hard takes 5 away. If the clock hits zero you can keep placing tiles, but you stop earning points."
		},
		{
			keys: ["score", "point", "points", "mark", "perfect"],
			text: "Every correct placement is worth **5 points**. Place all 118 elements across 6 levels for a perfect run. Your final score is shown on the results card you can download."
		},
		{
			keys: ["certificate", "cert", "download", "result", "results", "proof"],
			text: "Once you complete all six levels, a **Download your results** button appears. It saves a results card image with your name, score, level, and time — straight from your browser, no account or backend needed."
		},
		{
			keys: ["shuffle", "mix up", "reorder"],
			text: "The **Shuffle** button re-sorts the tiles still sitting in the tray — handy when you want a fresh look at which elements are left."
		},
		{
			keys: ["remember", "memoriz", "memory tip", "memory trick", "memorize", "study", "mnemonic", "learn faster"],
			text: "**Memory tips:**\n• Learn the table in order — it's a story of building up electrons.\n• Group by category color — metals on the left, nonmetals on the right.\n• Make mnemonics for rows (e.g. \"Li Na K Rb Cs Fr\" → \"Little Nana Kisses Rubies & Cesium's French\").\n• Master the first 20 elements cold before touching the rest."
		},
		{
			keys: ["mendeleev", "history", "who invented", "who made", "discovered the table"],
			text: "**A quick history:** Dmitri Mendeleev published the first recognizable periodic table in 1869. He arranged elements by atomic mass and left gaps for elements nobody had found yet — then predicted their properties correctly."
		},
		{
			keys: ["electronegativity", "trend", "atomic radius", "reactivity"],
			text: "**Key trends:**\n• Atomic radius grows going down a group, shrinks going right.\n• Electronegativity (pull on electrons) grows going right, shrinks going down.\n• The most reactive metals sit bottom-left; the most reactive nonmetals sit top-right (noble gases excepted)."
		},
		{
			keys: ["atom", "proton", "neutron", "electron", "shell", "orbit"],
			text: "**Atom basics:** protons (positive) and neutrons (neutral) live in the nucleus; electrons (negative) orbit in shells. The atomic number equals the number of protons. A neutral atom has as many electrons as protons."
		},
		{
			keys: ["hi", "hello", "hey", "yo", "thanks", "thank you"],
			text: "Hi! 👋 I'm ORION, Periodix's built-in tutor. Ask me about **how to play**, **memory tips**, **noble gases**, or any element — for example, \"What is the atomic number of iron?\""
		}
	];

	function getReply(messages) {
		const userMsg = Array.isArray(messages)
			? [...messages].reverse().find((m) => m && m.role === "user")
			: null;
		const q = ((userMsg && userMsg.content) || "").toString().toLowerCase().trim();
		if (!q) return "Ask me anything about the game or the elements — I'm all local, no internet needed.";

		// 1. Element lookup by name (or common alias)
		let sym = null;
		const nameHit = Object.keys(byName).find((n) => new RegExp("\\b" + n + "\\b").test(q));
		if (nameHit) {
			sym = byName[nameHit];
		} else {
			const aliasHit = Object.keys(ALIASES).find((a) => new RegExp("\\b" + a + "\\b").test(q));
			if (aliasHit) sym = ALIASES[aliasHit];
		}
		if (sym) {
			const [name, num, mass] = ELEMENTS[sym];
			const wantsMass = /mass|weight|heavy|amu/.test(q);
			const wantsNumber = /atomic number|number of|proton/.test(q);
			if (wantsMass) return `**${name} (${sym})** has an atomic mass of about **${mass} u**.`;
			if (wantsNumber) return `**${name} (${sym})** has atomic number **${num}** — that's ${num} protons.`;
			return `**${name}** — symbol **${sym}**, atomic number **${num}**, atomic mass ≈ **${mass}**.`;
		}

		// Short/symbol queries like "fe" or "what is Fe"
		if (q.length <= 10 || /symbol/.test(q)) {
			const symHit = Object.keys(ELEMENTS).find(
				(s) => q === s.toLowerCase() || q.endsWith(s.toLowerCase())
			);
			if (symHit) {
				const [name, num, mass] = ELEMENTS[symHit];
				return `**${name}** — symbol **${symHit}**, atomic number **${num}**, atomic mass ≈ **${mass}**.`;
			}
		}

		// 2. Group / concept lookups
		for (const g of GROUPS) {
			if (g.keys.some((k) => q.includes(k))) return `**${g.name}** — ${g.text}`;
		}

		// 3. General topics
		for (const t of TOPICS) {
			if (t.keys.some((k) => q.includes(k))) return t.text;
		}

		// 4. Fallback
		return "I'm a local tutor, so I know chemistry basics best. Try asking:\n• \"How do I play?\"\n• \"Tips for memorizing elements?\"\n• \"What are noble gases?\"\n• \"What is the atomic number of gold?\"";
	}

	window.PeriodixTutorials = { getReply };
})();
