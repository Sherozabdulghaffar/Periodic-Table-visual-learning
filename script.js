// Element data
const data = {
	elements: [
		{
			symbol: "H",
			name: "Hydrogen",
			number: 1,
			mass: "1.008",
			group: "nonmetal",
			period: 1,
			groupNumber: 1
		},
		{
			symbol: "He",
			name: "Helium",
			number: 2,
			mass: "4.003",
			group: "noble-gas",
			period: 1,
			groupNumber: 18
		},
		{
			symbol: "Li",
			name: "Lithium",
			number: 3,
			mass: "6.941",
			group: "alkali-metal",
			period: 2,
			groupNumber: 1
		},
		{
			symbol: "Be",
			name: "Beryllium",
			number: 4,
			mass: "9.012",
			group: "alkaline-earth",
			period: 2,
			groupNumber: 2
		},
		{
			symbol: "B",
			name: "Boron",
			number: 5,
			mass: "10.811",
			group: "metalloid",
			period: 2,
			groupNumber: 13
		},
		{
			symbol: "C",
			name: "Carbon",
			number: 6,
			mass: "12.011",
			group: "nonmetal",
			period: 2,
			groupNumber: 14
		},
		{
			symbol: "N",
			name: "Nitrogen",
			number: 7,
			mass: "14.007",
			group: "nonmetal",
			period: 2,
			groupNumber: 15
		},
		{
			symbol: "O",
			name: "Oxygen",
			number: 8,
			mass: "15.999",
			group: "nonmetal",
			period: 2,
			groupNumber: 16
		},
		{
			symbol: "F",
			name: "Fluorine",
			number: 9,
			mass: "18.998",
			group: "nonmetal",
			period: 2,
			groupNumber: 17
		},
		{
			symbol: "Ne",
			name: "Neon",
			number: 10,
			mass: "20.180",
			group: "noble-gas",
			period: 2,
			groupNumber: 18
		},
		{
			symbol: "Na",
			name: "Sodium",
			number: 11,
			mass: "22.990",
			group: "alkali-metal",
			period: 3,
			groupNumber: 1
		},
		{
			symbol: "Mg",
			name: "Magnesium",
			number: 12,
			mass: "24.305",
			group: "alkaline-earth",
			period: 3,
			groupNumber: 2
		},
		{
			symbol: "Al",
			name: "Aluminum",
			number: 13,
			mass: "26.982",
			group: "post-transition",
			period: 3,
			groupNumber: 13
		},
		{
			symbol: "Si",
			name: "Silicon",
			number: 14,
			mass: "28.086",
			group: "metalloid",
			period: 3,
			groupNumber: 14
		},
		{
			symbol: "P",
			name: "Phosphorus",
			number: 15,
			mass: "30.974",
			group: "nonmetal",
			period: 3,
			groupNumber: 15
		},
		{
			symbol: "S",
			name: "Sulfur",
			number: 16,
			mass: "32.065",
			group: "nonmetal",
			period: 3,
			groupNumber: 16
		},
		{
			symbol: "Cl",
			name: "Chlorine",
			number: 17,
			mass: "35.453",
			group: "nonmetal",
			period: 3,
			groupNumber: 17
		},
		{
			symbol: "Ar",
			name: "Argon",
			number: 18,
			mass: "39.948",
			group: "noble-gas",
			period: 3,
			groupNumber: 18
		},
		{
			symbol: "K",
			name: "Potassium",
			number: 19,
			mass: "39.098",
			group: "alkali-metal",
			period: 4,
			groupNumber: 1
		},
		{
			symbol: "Ca",
			name: "Calcium",
			number: 20,
			mass: "40.078",
			group: "alkaline-earth",
			period: 4,
			groupNumber: 2
		},
		{
			symbol: "Sc",
			name: "Scandium",
			number: 21,
			mass: "44.956",
			group: "transition",
			period: 4,
			groupNumber: 3
		},
		{
			symbol: "Ti",
			name: "Titanium",
			number: 22,
			mass: "47.867",
			group: "transition",
			period: 4,
			groupNumber: 4
		},
		{
			symbol: "V",
			name: "Vanadium",
			number: 23,
			mass: "50.942",
			group: "transition",
			period: 4,
			groupNumber: 5
		},
		{
			symbol: "Cr",
			name: "Chromium",
			number: 24,
			mass: "51.996",
			group: "transition",
			period: 4,
			groupNumber: 6
		},
		{
			symbol: "Mn",
			name: "Manganese",
			number: 25,
			mass: "54.938",
			group: "transition",
			period: 4,
			groupNumber: 7
		},
		{
			symbol: "Fe",
			name: "Iron",
			number: 26,
			mass: "55.845",
			group: "transition",
			period: 4,
			groupNumber: 8
		},
		{
			symbol: "Co",
			name: "Cobalt",
			number: 27,
			mass: "58.933",
			group: "transition",
			period: 4,
			groupNumber: 9
		},
		{
			symbol: "Ni",
			name: "Nickel",
			number: 28,
			mass: "58.693",
			group: "transition",
			period: 4,
			groupNumber: 10
		},
		{
			symbol: "Cu",
			name: "Copper",
			number: 29,
			mass: "63.546",
			group: "transition",
			period: 4,
			groupNumber: 11
		},
		{
			symbol: "Zn",
			name: "Zinc",
			number: 30,
			mass: "65.380",
			group: "transition",
			period: 4,
			groupNumber: 12
		},
		{
			symbol: "Ga",
			name: "Gallium",
			number: 31,
			mass: "69.723",
			group: "post-transition",
			period: 4,
			groupNumber: 13
		},
		{
			symbol: "Ge",
			name: "Germanium",
			number: 32,
			mass: "72.640",
			group: "metalloid",
			period: 4,
			groupNumber: 14
		},
		{
			symbol: "As",
			name: "Arsenic",
			number: 33,
			mass: "74.922",
			group: "metalloid",
			period: 4,
			groupNumber: 15
		},
		{
			symbol: "Se",
			name: "Selenium",
			number: 34,
			mass: "78.960",
			group: "nonmetal",
			period: 4,
			groupNumber: 16
		},
		{
			symbol: "Br",
			name: "Bromine",
			number: 35,
			mass: "79.904",
			group: "nonmetal",
			period: 4,
			groupNumber: 17
		},
		{
			symbol: "Kr",
			name: "Krypton",
			number: 36,
			mass: "83.798",
			group: "noble-gas",
			period: 4,
			groupNumber: 18
		},
		{
			symbol: "Rb",
			name: "Rubidium",
			number: 37,
			mass: "85.468",
			group: "alkali-metal",
			period: 5,
			groupNumber: 1
		},
		{
			symbol: "Sr",
			name: "Strontium",
			number: 38,
			mass: "87.620",
			group: "alkaline-earth",
			period: 5,
			groupNumber: 2
		},
		{
			symbol: "Y",
			name: "Yttrium",
			number: 39,
			mass: "88.906",
			group: "transition",
			period: 5,
			groupNumber: 3
		},
		{
			symbol: "Zr",
			name: "Zirconium",
			number: 40,
			mass: "91.224",
			group: "transition",
			period: 5,
			groupNumber: 4
		},
		{
			symbol: "Nb",
			name: "Niobium",
			number: 41,
			mass: "92.906",
			group: "transition",
			period: 5,
			groupNumber: 5
		},
		{
			symbol: "Mo",
			name: "Molybdenum",
			number: 42,
			mass: "95.950",
			group: "transition",
			period: 5,
			groupNumber: 6
		},
		{
			symbol: "Tc",
			name: "Technetium",
			number: 43,
			mass: "98",
			group: "transition",
			period: 5,
			groupNumber: 7
		},
		{
			symbol: "Ru",
			name: "Ruthenium",
			number: 44,
			mass: "101.070",
			group: "transition",
			period: 5,
			groupNumber: 8
		},
		{
			symbol: "Rh",
			name: "Rhodium",
			number: 45,
			mass: "102.906",
			group: "transition",
			period: 5,
			groupNumber: 9
		},
		{
			symbol: "Pd",
			name: "Palladium",
			number: 46,
			mass: "106.420",
			group: "transition",
			period: 5,
			groupNumber: 10
		},
		{
			symbol: "Ag",
			name: "Silver",
			number: 47,
			mass: "107.868",
			group: "transition",
			period: 5,
			groupNumber: 11
		},
		{
			symbol: "Cd",
			name: "Cadmium",
			number: 48,
			mass: "112.411",
			group: "transition",
			period: 5,
			groupNumber: 12
		},
		{
			symbol: "In",
			name: "Indium",
			number: 49,
			mass: "114.818",
			group: "post-transition",
			period: 5,
			groupNumber: 13
		},
		{
			symbol: "Sn",
			name: "Tin",
			number: 50,
			mass: "118.710",
			group: "post-transition",
			period: 5,
			groupNumber: 14
		},
		{
			symbol: "Sb",
			name: "Antimony",
			number: 51,
			mass: "121.760",
			group: "metalloid",
			period: 5,
			groupNumber: 15
		},
		{
			symbol: "Te",
			name: "Tellurium",
			number: 52,
			mass: "127.600",
			group: "metalloid",
			period: 5,
			groupNumber: 16
		},
		{
			symbol: "I",
			name: "Iodine",
			number: 53,
			mass: "126.904",
			group: "nonmetal",
			period: 5,
			groupNumber: 17
		},
		{
			symbol: "Xe",
			name: "Xenon",
			number: 54,
			mass: "131.293",
			group: "noble-gas",
			period: 5,
			groupNumber: 18
		},
		{
			symbol: "Cs",
			name: "Cesium",
			number: 55,
			mass: "132.905",
			group: "alkali-metal",
			period: 6,
			groupNumber: 1
		},
		{
			symbol: "Ba",
			name: "Barium",
			number: 56,
			mass: "137.327",
			group: "alkaline-earth",
			period: 6,
			groupNumber: 2
		},
		{
			symbol: "La",
			name: "Lanthanum",
			number: 57,
			mass: "138.905",
			group: "lanthanide",
			period: 6,
			groupNumber: 3
		},
		{
			symbol: "Ce",
			name: "Cerium",
			number: 58,
			mass: "140.116",
			group: "lanthanide",
			period: 6,
			groupNumber: 4
		},
		{
			symbol: "Pr",
			name: "Praseodymium",
			number: 59,
			mass: "140.908",
			group: "lanthanide",
			period: 6,
			groupNumber: 5
		},
		{
			symbol: "Nd",
			name: "Neodymium",
			number: 60,
			mass: "144.242",
			group: "lanthanide",
			period: 6,
			groupNumber: 6
		},
		{
			symbol: "Pm",
			name: "Promethium",
			number: 61,
			mass: "145",
			group: "lanthanide",
			period: 6,
			groupNumber: 7
		},
		{
			symbol: "Sm",
			name: "Samarium",
			number: 62,
			mass: "150.360",
			group: "lanthanide",
			period: 6,
			groupNumber: 8
		},
		{
			symbol: "Eu",
			name: "Europium",
			number: 63,
			mass: "151.964",
			group: "lanthanide",
			period: 6,
			groupNumber: 9
		},
		{
			symbol: "Gd",
			name: "Gadolinium",
			number: 64,
			mass: "157.250",
			group: "lanthanide",
			period: 6,
			groupNumber: 10
		},
		{
			symbol: "Tb",
			name: "Terbium",
			number: 65,
			mass: "158.925",
			group: "lanthanide",
			period: 6,
			groupNumber: 11
		},
		{
			symbol: "Dy",
			name: "Dysprosium",
			number: 66,
			mass: "162.500",
			group: "lanthanide",
			period: 6,
			groupNumber: 12
		},
		{
			symbol: "Ho",
			name: "Holmium",
			number: 67,
			mass: "164.930",
			group: "lanthanide",
			period: 6,
			groupNumber: 13
		},
		{
			symbol: "Er",
			name: "Erbium",
			number: 68,
			mass: "167.259",
			group: "lanthanide",
			period: 6,
			groupNumber: 14
		},
		{
			symbol: "Tm",
			name: "Thulium",
			number: 69,
			mass: "168.934",
			group: "lanthanide",
			period: 6,
			groupNumber: 15
		},
		{
			symbol: "Yb",
			name: "Ytterbium",
			number: 70,
			mass: "173.054",
			group: "lanthanide",
			period: 6,
			groupNumber: 16
		},
		{
			symbol: "Lu",
			name: "Lutetium",
			number: 71,
			mass: "174.967",
			group: "lanthanide",
			period: 6,
			groupNumber: 3
		},
		{
			symbol: "Hf",
			name: "Hafnium",
			number: 72,
			mass: "178.490",
			group: "transition",
			period: 6,
			groupNumber: 4
		},
		{
			symbol: "Ta",
			name: "Tantalum",
			number: 73,
			mass: "180.948",
			group: "transition",
			period: 6,
			groupNumber: 5
		},
		{
			symbol: "W",
			name: "Tungsten",
			number: 74,
			mass: "183.840",
			group: "transition",
			period: 6,
			groupNumber: 6
		},
		{
			symbol: "Re",
			name: "Rhenium",
			number: 75,
			mass: "186.207",
			group: "transition",
			period: 6,
			groupNumber: 7
		},
		{
			symbol: "Os",
			name: "Osmium",
			number: 76,
			mass: "190.230",
			group: "transition",
			period: 6,
			groupNumber: 8
		},
		{
			symbol: "Ir",
			name: "Iridium",
			number: 77,
			mass: "192.217",
			group: "transition",
			period: 6,
			groupNumber: 9
		},
		{
			symbol: "Pt",
			name: "Platinum",
			number: 78,
			mass: "195.084",
			group: "transition",
			period: 6,
			groupNumber: 10
		},
		{
			symbol: "Au",
			name: "Gold",
			number: 79,
			mass: "196.967",
			group: "transition",
			period: 6,
			groupNumber: 11
		},
		{
			symbol: "Hg",
			name: "Mercury",
			number: 80,
			mass: "200.590",
			group: "transition",
			period: 6,
			groupNumber: 12
		},
		{
			symbol: "Tl",
			name: "Thallium",
			number: 81,
			mass: "204.383",
			group: "post-transition",
			period: 6,
			groupNumber: 13
		},
		{
			symbol: "Pb",
			name: "Lead",
			number: 82,
			mass: "207.200",
			group: "post-transition",
			period: 6,
			groupNumber: 14
		},
		{
			symbol: "Bi",
			name: "Bismuth",
			number: 83,
			mass: "208.980",
			group: "post-transition",
			period: 6,
			groupNumber: 15
		},
		{
			symbol: "Po",
			name: "Polonium",
			number: 84,
			mass: "209",
			group: "post-transition",
			period: 6,
			groupNumber: 16
		},
		{
			symbol: "At",
			name: "Astatine",
			number: 85,
			mass: "210",
			group: "metalloid",
			period: 6,
			groupNumber: 17
		},
		{
			symbol: "Rn",
			name: "Radon",
			number: 86,
			mass: "222",
			group: "noble-gas",
			period: 6,
			groupNumber: 18
		},
		{
			symbol: "Fr",
			name: "Francium",
			number: 87,
			mass: "223",
			group: "alkali-metal",
			period: 7,
			groupNumber: 1
		},
		{
			symbol: "Ra",
			name: "Radium",
			number: 88,
			mass: "226",
			group: "alkaline-earth",
			period: 7,
			groupNumber: 2
		},
		{
			symbol: "Ac",
			name: "Actinium",
			number: 89,
			mass: "227",
			group: "actinide",
			period: 7,
			groupNumber: 3
		},
		{
			symbol: "Th",
			name: "Thorium",
			number: 90,
			mass: "232.038",
			group: "actinide",
			period: 7,
			groupNumber: 4
		},
		{
			symbol: "Pa",
			name: "Protactinium",
			number: 91,
			mass: "231.036",
			group: "actinide",
			period: 7,
			groupNumber: 5
		},
		{
			symbol: "U",
			name: "Uranium",
			number: 92,
			mass: "238.029",
			group: "actinide",
			period: 7,
			groupNumber: 6
		},
		{
			symbol: "Np",
			name: "Neptunium",
			number: 93,
			mass: "237",
			group: "actinide",
			period: 7,
			groupNumber: 7
		},
		{
			symbol: "Pu",
			name: "Plutonium",
			number: 94,
			mass: "244",
			group: "actinide",
			period: 7,
			groupNumber: 8
		},
		{
			symbol: "Am",
			name: "Americium",
			number: 95,
			mass: "243",
			group: "actinide",
			period: 7,
			groupNumber: 9
		},
		{
			symbol: "Cm",
			name: "Curium",
			number: 96,
			mass: "247",
			group: "actinide",
			period: 7,
			groupNumber: 10
		},
		{
			symbol: "Bk",
			name: "Berkelium",
			number: 97,
			mass: "247",
			group: "actinide",
			period: 7,
			groupNumber: 11
		},
		{
			symbol: "Cf",
			name: "Californium",
			number: 98,
			mass: "251",
			group: "actinide",
			period: 7,
			groupNumber: 12
		},
		{
			symbol: "Es",
			name: "Einsteinium",
			number: 99,
			mass: "252",
			group: "actinide",
			period: 7,
			groupNumber: 13
		},
		{
			symbol: "Fm",
			name: "Fermium",
			number: 100,
			mass: "257",
			group: "actinide",
			period: 7,
			groupNumber: 14
		},
		{
			symbol: "Md",
			name: "Mendelevium",
			number: 101,
			mass: "258",
			group: "actinide",
			period: 7,
			groupNumber: 15
		},
		{
			symbol: "No",
			name: "Nobelium",
			number: 102,
			mass: "259",
			group: "actinide",
			period: 7,
			groupNumber: 16
		},
		{
			symbol: "Lr",
			name: "Lawrencium",
			number: 103,
			mass: "262",
			group: "actinide",
			period: 7,
			groupNumber: 3
		},
		{
			symbol: "Rf",
			name: "Rutherfordium",
			number: 104,
			mass: "267",
			group: "transition",
			period: 7,
			groupNumber: 4
		},
		{
			symbol: "Db",
			name: "Dubnium",
			number: 105,
			mass: "268",
			group: "transition",
			period: 7,
			groupNumber: 5
		},
		{
			symbol: "Sg",
			name: "Seaborgium",
			number: 106,
			mass: "269",
			group: "transition",
			period: 7,
			groupNumber: 6
		},
		{
			symbol: "Bh",
			name: "Bohrium",
			number: 107,
			mass: "270",
			group: "transition",
			period: 7,
			groupNumber: 7
		},
		{
			symbol: "Hs",
			name: "Hassium",
			number: 108,
			mass: "269",
			group: "transition",
			period: 7,
			groupNumber: 8
		},
		{
			symbol: "Mt",
			name: "Meitnerium",
			number: 109,
			mass: "278",
			group: "transition",
			period: 7,
			groupNumber: 9
		},
		{
			symbol: "Ds",
			name: "Darmstadtium",
			number: 110,
			mass: "281",
			group: "transition",
			period: 7,
			groupNumber: 10
		},
		{
			symbol: "Rg",
			name: "Roentgenium",
			number: 111,
			mass: "282",
			group: "transition",
			period: 7,
			groupNumber: 11
		},
		{
			symbol: "Cn",
			name: "Copernicium",
			number: 112,
			mass: "285",
			group: "transition",
			period: 7,
			groupNumber: 12
		},
		{
			symbol: "Nh",
			name: "Nihonium",
			number: 113,
			mass: "286",
			group: "post-transition",
			period: 7,
			groupNumber: 13
		},
		{
			symbol: "Fl",
			name: "Flerovium",
			number: 114,
			mass: "289",
			group: "post-transition",
			period: 7,
			groupNumber: 14
		},
		{
			symbol: "Mc",
			name: "Moscovium",
			number: 115,
			mass: "290",
			group: "post-transition",
			period: 7,
			groupNumber: 15
		},
		{
			symbol: "Lv",
			name: "Livermorium",
			number: 116,
			mass: "293",
			group: "post-transition",
			period: 7,
			groupNumber: 16
		},
		{
			symbol: "Ts",
			name: "Tennessine",
			number: 117,
			mass: "294",
			group: "post-transition",
			period: 7,
			groupNumber: 17
		},
		{
			symbol: "Og",
			name: "Oganesson",
			number: 118,
			mass: "294",
			group: "noble-gas",
			period: 7,
			groupNumber: 18
		}
	]
};

// Define game state variables at the top
let currentScore = 0;
let currentLevel = 1;
let gameDifficulty = 'medium'; // easy, medium, hard
let isGamePaused = false;
let isTimerExpired = false;
let timeRemaining;
let timerInterval;
let isGameStarted = false;
let isGameComplete = false;

// ===== Site config (client-side controls) =====
const SITE_CONFIG_DEFAULT = {
	maintenance: {
		enabled: false,
		message: "We’re doing maintenance right now. Please check back soon."
	},
	blocked: {
		emails: [],
		message: "This email is blocked."
	},
	features: {
		emailCertificate: true,
		adminButton: true
	}
};

let siteConfig = SITE_CONFIG_DEFAULT;

const SITE_CONFIG_OVERRIDES_KEY = 'periodicSiteConfigOverrides';

function loadSiteConfigOverrides() {
	try {
		const raw = localStorage.getItem(SITE_CONFIG_OVERRIDES_KEY);
		if (!raw) return null;
		const obj = JSON.parse(raw);
		return obj && typeof obj === 'object' ? obj : null;
	} catch (e) {
		return null;
	}
}

function saveSiteConfigOverrides(overrides) {
	try {
		localStorage.setItem(SITE_CONFIG_OVERRIDES_KEY, JSON.stringify(overrides || {}));
		return true;
	} catch (e) {
		return false;
	}
}

function clearSiteConfigOverrides() {
	try { localStorage.removeItem(SITE_CONFIG_OVERRIDES_KEY); } catch (e) {}
}

function mergeSiteConfig(baseCfg, overrides) {
	if (!overrides || typeof overrides !== 'object') return baseCfg;
	return {
		...baseCfg,
		...overrides,
		maintenance: { ...(baseCfg?.maintenance || {}), ...(overrides?.maintenance || {}) },
		blocked: {
			...(baseCfg?.blocked || {}),
			...(overrides?.blocked || {}),
			emails: Array.isArray(overrides?.blocked?.emails)
				? overrides.blocked.emails
				: (baseCfg?.blocked?.emails || [])
		},
		features: { ...(baseCfg?.features || {}), ...(overrides?.features || {}) }
	};
}

function normalizeEmail(value) {
	return String(value || "").trim().toLowerCase();
}

function isEmailBlocked(email) {
	const blockedList = siteConfig?.blocked?.emails || [];
	const target = normalizeEmail(email);
	if (!target) return false;
	return blockedList.some((e) => normalizeEmail(e) === target);
}

function setButtonEnabled(id, enabled) {
	const el = document.getElementById(id);
	if (!el) return;
	el.disabled = !enabled;
	// keep visuals simple
	el.style.opacity = enabled ? "" : "0.5";
	el.style.pointerEvents = enabled ? "" : "none";
}

function disableGameUI(message) {
	[
		"reset-button",
		"pause-button",
		"shuffle-button",
		"share-button",
		"cert-button",
		"verify-button",
		"admin-button"
	].forEach((id) => setButtonEnabled(id, false));

	try {
		// make sure gameplay doesn't start
		isGamePaused = true;
		isGameStarted = false;
		isTimerExpired = true;
		clearInterval(timerInterval);
	} catch (e) {}

	showInfo(message);
}

async function safeFetchJson(url) {
	try {
		const res = await fetch(url, { cache: "no-store" });
		if (!res.ok) return null;
		return await res.json();
	} catch (e) {
		return null;
	}
}

function getRemoteSiteConfigUrlFromLocalCfg(localCfg) {
	// Allows split hosting:
	// - Public site on GitHub Pages
	// - Admin/API on a separate origin (e.g. https://your-backend.example/api/site-config)
	const url = localCfg?.remoteApi?.siteConfigUrl || localCfg?.remoteSiteConfigUrl;
	if (!url) return null;
	if (typeof url !== "string") return null;
	const trimmed = url.trim();
	if (!trimmed) return null;
	return trimmed;
}

async function loadSiteConfig() {
	try {
		// Load local file first so static hosting can optionally point to a remote API.
		const localCfg = await safeFetchJson("./site-config.json");

		// Prefer same-origin backend API if present (Mode B).
		let cfg = await safeFetchJson("/api/site-config");

		// For GitHub Pages (static-only), optionally fetch config from a separate backend origin.
		if (!cfg) {
			const remoteUrl = getRemoteSiteConfigUrlFromLocalCfg(localCfg);
			if (remoteUrl) cfg = await safeFetchJson(remoteUrl);
		}

		// Fallback to local config if no backend config was fetched.
		if (!cfg && localCfg) cfg = localCfg;
		if (!cfg) return;

		let merged = {
			...SITE_CONFIG_DEFAULT,
			...(localCfg || {}),
			...cfg,
			maintenance: {
				...SITE_CONFIG_DEFAULT.maintenance,
				...((localCfg && localCfg.maintenance) || {}),
				...(cfg?.maintenance || {})
			},
			blocked: {
				...SITE_CONFIG_DEFAULT.blocked,
				...((localCfg && localCfg.blocked) || {}),
				...(cfg?.blocked || {})
			},
			features: {
				...SITE_CONFIG_DEFAULT.features,
				...((localCfg && localCfg.features) || {}),
				...(cfg?.features || {})
			}
		};

		// Apply per-device overrides (legacy; stored in localStorage)
		// IMPORTANT: do not allow local overrides to disable a global maintenance state.
		const globalMaintenanceEnabled = !!merged?.maintenance?.enabled;
		const globalMaintenanceMessage = merged?.maintenance?.message;
		merged = mergeSiteConfig(merged, loadSiteConfigOverrides());
		if (globalMaintenanceEnabled) {
			merged.maintenance = {
				...(merged.maintenance || {}),
				enabled: true,
				message: globalMaintenanceMessage || merged?.maintenance?.message
			};
		}
		siteConfig = merged;
	} catch (e) {
		// If config can't be loaded, keep defaults
	}
}
const totalElements = data.elements.length;
const finalLevel = Math.ceil(totalElements / 20);
function isMobileLikeDevice() {
	// Prefer capability detection over width. This targets phones/tablets using touch.
	try {
		return window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches;
	} catch (e) {
		return false;
	}
}

function getDefaultTimerSeconds() {
	// Base time: Mobile users: 20 minutes, Desktop users: 10 minutes
	const baseTime = isMobileLikeDevice() ? 20 * 60 : 10 * 60;
	
	// Adjust based on difficulty
	if (gameDifficulty === 'easy') {
		return baseTime + (5 * 60); // +5 minutes
	} else if (gameDifficulty === 'hard') {
		return baseTime - (5 * 60); // -5 minutes
	}
	
	return baseTime; // medium: normal time
}

const TIMER_SECONDS = getDefaultTimerSeconds();
const elementsPerLevel = new Map([
	[1, 20],
	[2, 20],
	[3, 20],
	[4, 20],
	[5, 20],
	[6, 18]
]);
const POINTS_PER_CORRECT = 5;

function updateScoreDisplay() {
	const scoreDisplay = document.getElementById("score-display");
	if (scoreDisplay) {
		scoreDisplay.textContent = `Score: ${currentScore}`;
	} else {
		console.error("Score display element not found");
	}
}

function shuffleElements(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function createElementBoxes() {
	const container = document.getElementById("elements-pool");
	container.innerHTML = "";

	// Apply difficulty class to body for CSS styling
	applyDifficultyClass();

	// Calculate which elements to show based on current level.
	// Sum up the counts for all previous levels to get the correct start index.
	const getLevelCount = (lvl) => elementsPerLevel.get(lvl) || 20;
	let startIndex = 0;
	for (let lvl = 1; lvl < currentLevel; lvl++) {
		startIndex += getLevelCount(lvl);
	}
	const currentCount = getLevelCount(currentLevel);
	const endIndex = startIndex + currentCount;
	const currentElements = data.elements.slice(startIndex, endIndex);

	// Shuffle the current level's elements
	shuffleElements(currentElements);

	currentElements.forEach((element) => {
		const box = document.createElement("div");
		box.className = "element-box";
		box.draggable = true;
		box.dataset.number = element.number;
		box.innerHTML = `
            <div class="atomic-number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
            <div class="mass">${element.mass}</div>
        `;

		box.addEventListener("dragstart", handleDragStart);
		box.addEventListener("dragend", handleDragEnd);
		box.addEventListener("pointerdown", handlePointerDown);

		container.appendChild(box);
	});
}

// ===== Mobile/touch drag support (Pointer Events) =====
let _pointerDrag = null;

function isTouchLikePointer(e) {
	return e && (e.pointerType === 'touch' || e.pointerType === 'pen');
}

function getDropZoneFromPoint(x, y) {
	const el = document.elementFromPoint(x, y);
	if (!el) return null;
	return el.closest ? el.closest('.drop-zone') : null;
}

function clearZonePreview(zone) {
	if (!zone) return;
	zone.classList.remove('correct-hover', 'incorrect');
	zone.style.removeProperty('--indicator-color');
}

function previewZoneForElement(zone, elementNumber) {
	if (!zone) return;
	clearZonePreview(zone);
	if (zone.dataset.group === 'spacer') return;
	if (zone.hasChildNodes()) return;

	zone.classList.add('correct-hover');
	const dropZoneNumber = parseInt(zone.dataset.position);
	if (!Number.isNaN(dropZoneNumber) && elementNumber !== dropZoneNumber) {
		const distance = calculateDistance(elementNumber, dropZoneNumber);
		const color = calculateColor(distance);
		zone.style.setProperty('--indicator-color', color);
		zone.classList.add('incorrect');
	}
}

function placeElementIfValid(zone, draggedEl, elementNumber) {
	if (!zone || !draggedEl) return false;
	if (isGamePaused || isGameComplete || isTimerExpired) return false;
	if (zone.dataset.group === 'spacer') return false;
	if (zone.hasChildNodes()) return false;

	const position = parseInt(zone.dataset.position);
	if (Number.isNaN(position) || elementNumber !== position) {
		draggedEl.classList.add('shake');
		setTimeout(() => draggedEl.classList.remove('shake'), 200);
		return false;
	}

	zone.appendChild(draggedEl);
	zone.classList.add('correct');
	if (!isTimerExpired) {
		currentScore += POINTS_PER_CORRECT;
		updateScoreDisplay();
		saveGameState();
	}
	checkLevelComplete();
	return true;
}

function handlePointerDown(e) {
	// Only enable this flow for touch/pen. Mouse uses native HTML5 DnD.
	if (!isTouchLikePointer(e)) return;

	if (!isGameStarted || isGamePaused || isGameComplete || isTimerExpired) {
		e.preventDefault();
		return;
	}

	const target = e.currentTarget;
	if (!target || !target.dataset || !target.dataset.number) return;

	const elementNumber = parseInt(target.dataset.number);
	if (Number.isNaN(elementNumber)) return;

	// Prevent page scrolling while dragging a tile
	e.preventDefault();
	try { target.setPointerCapture(e.pointerId); } catch (err) {}

	// Build a lightweight ghost element
	const ghost = target.cloneNode(true);
	ghost.style.position = 'fixed';
	ghost.style.left = '0px';
	ghost.style.top = '0px';
	ghost.style.transform = 'translate(-9999px, -9999px)';
	ghost.style.opacity = '0.95';
	ghost.style.pointerEvents = 'none';
	ghost.style.zIndex = '99999';
	ghost.style.boxShadow = '0 10px 22px rgba(0,0,0,0.45)';
	document.body.appendChild(ghost);

	// Dim the original while dragging
	target.classList.add('dragging');

	_pointerDrag = {
		pointerId: e.pointerId,
		elementNumber,
		original: target,
		ghost,
		lastZone: null,
		offsetX: 0,
		offsetY: 0
	};

	// Center ghost under finger
	const rect = target.getBoundingClientRect();
	_pointerDrag.offsetX = rect.width / 2;
	_pointerDrag.offsetY = rect.height / 2;
	moveGhost(e.clientX, e.clientY);

	document.addEventListener('pointermove', handlePointerMove, { passive: false });
	document.addEventListener('pointerup', handlePointerUp, { passive: false });
	document.addEventListener('pointercancel', handlePointerUp, { passive: false });
}

function moveGhost(x, y) {
	if (!_pointerDrag || !_pointerDrag.ghost) return;
	const left = x - _pointerDrag.offsetX;
	const top = y - _pointerDrag.offsetY;
	_pointerDrag.ghost.style.transform = `translate(${left}px, ${top}px)`;
}

function handlePointerMove(e) {
	if (!_pointerDrag || e.pointerId !== _pointerDrag.pointerId) return;
	if (!isTouchLikePointer(e)) return;
	e.preventDefault();

	moveGhost(e.clientX, e.clientY);

	const zone = getDropZoneFromPoint(e.clientX, e.clientY);
	if (zone !== _pointerDrag.lastZone) {
		clearZonePreview(_pointerDrag.lastZone);
		_pointerDrag.lastZone = zone;
	}
	previewZoneForElement(zone, _pointerDrag.elementNumber);
}

function cleanupPointerDrag() {
	if (!_pointerDrag) return;
	clearZonePreview(_pointerDrag.lastZone);
	try { _pointerDrag.original.classList.remove('dragging'); } catch (e) {}
	try { _pointerDrag.ghost.remove(); } catch (e) {}
	_pointerDrag = null;
	document.removeEventListener('pointermove', handlePointerMove);
	document.removeEventListener('pointerup', handlePointerUp);
	document.removeEventListener('pointercancel', handlePointerUp);
}

function handlePointerUp(e) {
	if (!_pointerDrag || e.pointerId !== _pointerDrag.pointerId) return;
	if (isTouchLikePointer(e)) e.preventDefault();

	const zone = _pointerDrag.lastZone || getDropZoneFromPoint(e.clientX, e.clientY);
	placeElementIfValid(zone, _pointerDrag.original, _pointerDrag.elementNumber);
	cleanupPointerDrag();
}

function createDropZones() {
	const grid = document.getElementById("periodic-grid");
	grid.innerHTML = "";

	// Remove any existing sub-grids (lanthanides/actinides) to prevent duplicates
	const oldSubGrids = document.querySelectorAll(".sub-periodic-grid");
	oldSubGrids.forEach(sg => sg.remove());

	// Create main periodic table (7 rows x 18 columns)
	for (let period = 1; period <= 7; period++) {
		for (let group = 1; group <= 18; group++) {
			const zone = document.createElement("div");
			zone.className = "drop-zone";

			// Handle special cases for lanthanides and actinides
			if (period === 6 && group === 3) {
				// Lanthanide placeholder (57-71)
				zone.dataset.group = "lanthanide-placeholder";
				zone.textContent = "57-71";
			} else if (period === 7 && group === 3) {
				// Actinide placeholder (89-103)
				zone.dataset.group = "actinide-placeholder";
				zone.textContent = "89-103";
			} else {
				// Find if a main table element exists in this position
				const element = data.elements.find(
					(el) =>
						el.period === period &&
						el.groupNumber === group &&
						el.group !== "lanthanide" &&
						el.group !== "actinide"
				);

				if (element) {
					zone.dataset.position = element.number;
					zone.dataset.group = element.group;
				} else {
					zone.dataset.group = "spacer";
				}
			}
			zone.addEventListener("dragenter", handleDragEnter);
			zone.addEventListener("dragleave", handleDragLeave);
			zone.addEventListener("dragover", handleDragOver);
			zone.addEventListener("drop", handleDrop);
			grid.appendChild(zone);
		}
	}

	// Create separate table for lanthanides and actinides
	const subGrid = document.createElement("div");
	subGrid.className = "sub-periodic-grid";

	// Add lanthanides
	const lanthanides = data.elements
		.filter((el) => el.group === "lanthanide")
		.sort((a, b) => a.number - b.number);

	lanthanides.forEach((element, index) => {
		const zone = document.createElement("div");
		zone.className = "drop-zone";
		zone.dataset.position = element.number;
		zone.dataset.group = "lanthanide";
		zone.addEventListener("dragenter", handleDragEnter);
		zone.addEventListener("dragleave", handleDragLeave);
		zone.addEventListener("dragover", handleDragOver);
		zone.addEventListener("drop", handleDrop);
		subGrid.appendChild(zone);
	});

	// Add actinides
	const actinides = data.elements
		.filter((el) => el.group === "actinide")
		.sort((a, b) => a.number - b.number);

	actinides.forEach((element, index) => {
		const zone = document.createElement("div");
		zone.className = "drop-zone";
		zone.dataset.position = element.number;
		zone.dataset.group = "actinide";
		zone.addEventListener("dragenter", handleDragEnter);
		zone.addEventListener("dragleave", handleDragLeave);
		zone.addEventListener("dragover", handleDragOver);
		zone.addEventListener("drop", handleDrop);
		subGrid.appendChild(zone);
	});

	grid.parentNode.appendChild(subGrid);
}

function calculateDistance(elementNumber, dropZoneNumber) {
	// Get the elements' data
	const draggedElement = data.elements.find((el) => el.number === elementNumber);
	const targetElement = data.elements.find((el) => el.number === dropZoneNumber);

	if (!draggedElement || !targetElement) return 1; // Maximum distance if invalid

	// Calculate distance based on period and group differences
	const periodDiff = Math.abs(draggedElement.period - targetElement.period);
	const groupDiff = Math.abs(
		draggedElement.groupNumber - targetElement.groupNumber
	);

	// Normalize the distance to a value between 0 and 1
	const maxPossibleDiff = 7 + 18; // max period (7) + max group (18) difference
	const normalizedDistance = (periodDiff + groupDiff) / maxPossibleDiff;

	return normalizedDistance;
}

function calculateColor(distance) {
	// "Warmest" color (same teal-green as .correct-hover): rgb(100, 255, 218)
	// "Coldest" color (bright red): rgb(255, 40, 40)

	const r = Math.round(lerp(100, 255, distance));
	const g = Math.round(lerp(255, 40, distance));
	const b = Math.round(lerp(218, 40, distance));

	return `rgb(${r}, ${g}, ${b})`;
}

function lerp(start, end, amount) {
	return start + (end - start) * amount;
}

// Drag and Drop handlers
function handleDragEnter(e) {
	e.stopPropagation();
	e.preventDefault();

	const zone = e.currentTarget;
	if (!zone) return;

	if (!zone.hasChildNodes() && zone.dataset.group !== "spacer") {
		zone.classList.add("correct-hover");

		const elementNumber = window.draggedElementNumber;
		const dropZoneNumber = parseInt(zone.dataset.position);

		if (!Number.isNaN(dropZoneNumber) && elementNumber !== dropZoneNumber) {
			const distance = calculateDistance(elementNumber, dropZoneNumber);
			const color = calculateColor(distance);
			zone.style.setProperty("--indicator-color", color);
			zone.classList.add("incorrect");
		}
	}
}

function handleDragLeave(e) {
	e.stopPropagation();
	const zone = e.currentTarget;
	if (zone) zone.classList.remove("correct-hover", "incorrect");
}

function handleDragOver(e) {
	e.stopPropagation();
	const zone = e.currentTarget;
	if (!zone) return;

	// Check if this would be a valid drop using our stored number
	const elementNumber = window.draggedElementNumber;
	const position = parseInt(zone.dataset.position);

	if (!zone.hasChildNodes() && elementNumber === position) {
		e.preventDefault();
		e.dataTransfer.dropEffect = "move"; // Show move cursor
	}
}

function handleDragStart(e) {
	e.stopPropagation();
	if (!isGameStarted || isGamePaused || isGameComplete || isTimerExpired) {
		e.preventDefault();
		return false;
	}
	e.target.classList.add("dragging");
	e.dataTransfer.effectAllowed = "move";
	e.dataTransfer.setData("text/plain", e.target.dataset.number);
	window.draggedElementNumber = parseInt(e.target.dataset.number);
}

function handleDragEnd(e) {
	e.stopPropagation();
	e.target.classList.remove("dragging");
	// Clean up our global variable
	delete window.draggedElementNumber;
}

function handleDrop(e) {
	e.stopPropagation();
	e.preventDefault();

	if (isGamePaused || isGameComplete || isTimerExpired) {
		return false;
	}

	const zone = e.currentTarget;
	if (!zone) return false;

	const elementNumber = parseInt(e.dataTransfer.getData("text/plain"));
	const position = parseInt(zone.dataset.position);
	const draggedElement = document.querySelector(
		`[data-number="${elementNumber}"]`
	);

	// Remove hover effect regardless of drop success
	zone.classList.remove("correct-hover");

	// Only allow drop if the zone is empty and it's the correct position
	if (!zone.hasChildNodes() && elementNumber === position && draggedElement) {
		zone.appendChild(draggedElement);
		zone.classList.add("correct");
		draggedElement.classList.remove("dragging");
		if (!isTimerExpired) {
			currentScore += POINTS_PER_CORRECT;
			updateScoreDisplay();
			saveGameState();
		}
		checkLevelComplete();
	} else {
		// For incorrect drops, give a short feedback
		if (draggedElement) {
			draggedElement.classList.add("shake");
			setTimeout(() => {
				draggedElement.classList.remove("shake");
			}, 200);
		}
		return false;
	}
}

function togglePause() {
	isGamePaused = !isGamePaused;
	const pauseButton = document.getElementById("pause-button");
	pauseButton.textContent = isGamePaused ? "Resume" : "Pause";

	// Add/remove visual paused state
	const gameContainer = document.querySelector(".game-container");
	if (isGamePaused) {
		gameContainer.classList.add("paused");
	} else {
		gameContainer.classList.remove("paused");
	}

	saveGameState();
}

function updateTimerDisplay() {
	const minutes = Math.floor(timeRemaining / 60);
	const seconds = timeRemaining % 60;
	const timerDisplay = document.getElementById("timer-display");
	timerDisplay.textContent = `Time: ${minutes}:${seconds
		.toString()
		.padStart(2, "0")}`;

	// Add warning class when time is running low (last 30 seconds)
	if (timeRemaining <= 30) {
		timerDisplay.classList.add("timer-warning");
	} else {
		timerDisplay.classList.remove("timer-warning");
	}
}

function updateLevelDisplay() {
	const levelDisplay = document.getElementById("level-display");
	if (levelDisplay) {
		levelDisplay.textContent = `Level: ${currentLevel}`;
	}
}

function saveGameState() {
	const gameState = {
		currentScore,
		currentLevel,
		timeRemaining,
		isGamePaused,
		isTimerExpired
	};
	localStorage.setItem("periodicGameState", JSON.stringify(gameState));
}

function loadGameState() {
	const savedState = localStorage.getItem("periodicGameState");
	if (savedState) {
		const gameState = JSON.parse(savedState);
		currentScore = gameState.currentScore;
		currentLevel = gameState.currentLevel;
		timeRemaining = gameState.timeRemaining;
		isGamePaused = gameState.isGamePaused;
		isTimerExpired = gameState.isTimerExpired;
		return true;
	}
	return false;
}

function checkLevelComplete() {
	const placedElements = document.querySelectorAll(".drop-zone.correct");

	if (placedElements.length === elementsPerLevel.get(currentLevel)) {
		if (currentLevel < finalLevel) {
			// Transition out current level
			const elementsPool = document.getElementById("elements-pool");
			const elementBoxes = document.querySelectorAll(".element-box");

			elementBoxes.forEach((box) => box.classList.add("fade-out"));

			setTimeout(() => {
				currentLevel++;
				updateLevelDisplay();
				saveGameState();

				// Clear and prepare for next level
				elementsPool.innerHTML = "";
				document.querySelectorAll(".drop-zone").forEach((zone) => {
					zone.innerHTML = "";
					zone.classList.remove("correct");
				});

				// Remove transition classes
				elementBoxes.forEach((box) => box.classList.remove("fade-out"));

				// Initialize next level
				initLevel();

				// Add fade-in class to new elements
				const newElementBoxes = document.querySelectorAll(".element-box");
				newElementBoxes.forEach((box) => box.classList.add("fade-in"));

				// Remove fade-in class after animation
				setTimeout(() => {
					newElementBoxes.forEach((box) => box.classList.remove("fade-in"));
				}, 500);
			}, 500); // Wait for fade-out to complete
		} else {
			handleGameCompletion();
		}
	}
}

function startTimer() {
	timeRemaining = timeRemaining || TIMER_SECONDS;
	updateTimerDisplay();

	clearInterval(timerInterval);
	timerInterval = setInterval(() => {
		if (!isGamePaused) {
			if (timeRemaining > 0) {
				timeRemaining--;
				updateTimerDisplay();
				saveGameState();
			}
			if (timeRemaining === 0) {
				clearInterval(timerInterval);
				isTimerExpired = true;
				handleTimeUp();
			}
		}
	}, 1000);
}

function handleTimeUp() {
	isTimerExpired = true;
	saveGameState();
	alert(
		"Time's up! You can continue placing elements but won't earn additional points."
	);
}

function initLevel() {
	// Clear all drop zones
	document.querySelectorAll(".drop-zone").forEach((zone) => {
		zone.innerHTML = "";
		zone.classList.remove("correct");
	});

	createElementBoxes();
	startTimer(); // Restart timer for new level
}

function enableHighProtection() {
	// Disable right-click context menu globally
	document.addEventListener('contextmenu', (e) => { e.preventDefault(); }, true);

	// Disable common DevTools keyboard shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S)
	document.addEventListener('keydown', (e) => {
		try {
			if (e.key === 'F12') { e.preventDefault(); }
			if (e.ctrlKey && e.shiftKey && /[IiJjCcKk]/.test(e.key)) e.preventDefault();
			if (e.ctrlKey && /[UuSsPp]/.test(e.key) && !e.altKey) e.preventDefault();
		} catch (err) {}
	}, true);

	// Prevent text selection outside of inputs/textarea/contenteditable
	document.addEventListener('selectstart', (e) => {
		const tag = e.target && e.target.tagName;
		if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;
		e.preventDefault();
	}, true);

	// Block copy/cut/paste outside of form fields
	['copy','cut','paste'].forEach((ev) => document.addEventListener(ev, (e) => {
		const tag = e.target && e.target.tagName;
		if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;
		e.preventDefault();
	}));

	// Prevent dragging (reduces easy saving of images/text) — but allow game tiles.
	document.addEventListener('dragstart', (e) => {
		try {
			const t = e.target;
			if (t && t.classList && t.classList.contains('element-box')) return;
		} catch (err) {}
		e.preventDefault();
	}, true);
}

async function initGame() {
	// Load config early (maintenance / blocks / feature toggles)
	await loadSiteConfig();

	// Check if URL has download parameter (from email link)
	const urlParams = new URLSearchParams(window.location.search);
	const downloadCode = urlParams.get('download');
	if (downloadCode) {
		// User clicked download link from email
		// Retrieve certificate from localStorage and trigger download
		try {
			const storeKey = 'periodicCertificates';
			const raw = localStorage.getItem(storeKey);
			if (raw) {
				const map = JSON.parse(raw);
				const cert = map[downloadCode];
				if (cert && cert.name) {
					// Regenerate and auto-download the certificate
					generateCertificate(cert.name, { 
						autoDownload: true, 
						showModal: false, 
						code: downloadCode,
						score: cert.score 
					});
					// Clean URL
					window.history.replaceState({}, document.title, window.location.pathname);
				}
			}
		} catch (e) {
			console.error('Download error:', e);
		}
	}

	// Check if player name is stored; if not, show welcome modal
	let playerName = localStorage.getItem('periodicPlayerName');
	if (!playerName) {
		showWelcomeModal();
		return; // Wait for user to enter name
	}

	// Continue with game initialization
	initGameAfterWelcome();
}

function initGameAfterWelcome() {
	// Prevent duplicate initialization
	if (window._gameInitialized) {
		console.warn('Game already initialized');
		return;
	}
	window._gameInitialized = true;

	currentScore = 0;
	currentLevel = 1;
	isGamePaused = false;
	isTimerExpired = false;
	isGameStarted = false;

	// Load difficulty from localStorage
	gameDifficulty = localStorage.getItem('periodicDifficulty') || 'medium';
	
	// Apply difficulty class to body
	applyDifficultyClass();

	// Try to load saved state and preserve loaded timer if present
	const loaded = loadGameState();
	if (loaded) isGameStarted = true;
	else timeRemaining = getDefaultTimerSeconds();
	updateTimerDisplay();
	// Enable client-side protections to reduce right-click / devtools access
	enableHighProtection();

	const resetButton = document.getElementById("reset-button");
	resetButton.textContent = isGameStarted ? "Reset" : "Start";
	// Remove any existing listener before adding new one
	const newResetButton = resetButton.cloneNode(true);
	resetButton.parentNode.replaceChild(newResetButton, resetButton);
	newResetButton.addEventListener("click", handleStartReset);

	const pauseButton = document.getElementById("pause-button");
	// Remove any existing listener before adding new one
	const newPauseButton = pauseButton.cloneNode(true);
	pauseButton.parentNode.replaceChild(newPauseButton, pauseButton);
	newPauseButton.addEventListener("click", togglePause);

	// Always create the drop zones (grid) so the board exists.
	createDropZones();

	// If we loaded a saved started game, restore elements and timer
	if (isGameStarted) {
		createElementBoxes();
		resetButton.classList.add("reset");
		// Start/resume timer (uses preserved timeRemaining)
		if (!isTimerExpired) startTimer();
	}

	updateScoreDisplay();
	updateLevelDisplay();

	document.getElementById("shuffle-button").addEventListener("click", () => {
		if (!isGamePaused && isGameStarted) {
			const currentElements = Array.from(
				document.querySelectorAll(".element-box")
			).filter((el) => !el.parentElement.classList.contains("drop-zone"));
			shuffleElements(currentElements);
			const container = document.getElementById("elements-pool");
			currentElements.forEach((element) => container.appendChild(element));
		}
	});

	// Set up header button handlers
	if (!window._headerButtonsSetup) {
		const shareBtn = document.getElementById('share-button');
		if (shareBtn) shareBtn.addEventListener('click', () => openModal('share-modal'));
		const certBtn = document.getElementById('cert-button');
		if (certBtn) certBtn.addEventListener('click', () => {
			if (!isGameComplete) {
				showInfo('Complete the game first to receive a certificate.');
			} else {
				openModal('cert-input-modal');
			}
		});
		const verifyBtn = document.getElementById('verify-button');
		if (verifyBtn) verifyBtn.addEventListener('click', () => openModal('verify-modal'));
		window._headerButtonsSetup = true;
	}

	// Apply feature toggles (admin button may not exist on the public page)
	setButtonEnabled('admin-button', !!siteConfig?.features?.adminButton);

	// Maintenance mode check
	if (siteConfig?.maintenance?.enabled) {
		disableGameUI(siteConfig.maintenance.message || SITE_CONFIG_DEFAULT.maintenance.message);
		return;
	}

	// Blocked user check (client-side; based on last entered email)
	const rememberedEmail = normalizeEmail(localStorage.getItem('periodicPlayerEmail'));
	if (rememberedEmail && isEmailBlocked(rememberedEmail)) {
		disableGameUI(siteConfig?.blocked?.message || SITE_CONFIG_DEFAULT.blocked.message);
		return;
	}
}

function handleStartReset() {
	const button = document.getElementById("reset-button");

	if (!isGameStarted) {
		// Show difficulty selection modal before starting
		showDifficultyModal();
	} else {
		// Reset game
		if (
			confirm(
				"Are you sure you want to reset the game? This will clear your progress."
			)
		) {
			localStorage.removeItem("periodicGameState");
			currentScore = 0;
			currentLevel = 1;
			isGamePaused = false;
			isTimerExpired = false;
			isGameComplete = false;
			isGameStarted = false;
			timeRemaining = getDefaultTimerSeconds();

			document.querySelectorAll(".drop-zone").forEach((zone) => {
				zone.innerHTML = "";
				zone.classList.remove("correct", "correct-hover");
			});

			const elementsPool = document.getElementById("elements-pool");
			elementsPool.innerHTML = "";

			clearInterval(timerInterval);

			// Reset button back to Start
			button.textContent = "Start";
			button.classList.remove("reset");

			updateScoreDisplay();
			updateLevelDisplay();
			updateTimerDisplay();
		}
	}
}

function resetGame() {
	if (
		confirm(
			"Are you sure you want to reset the game? This will clear your progress."
		)
	) {
		// Clear local storage
		localStorage.removeItem("periodicGameState");

		// Reset all game variables
		currentScore = 0;
		currentLevel = 1;
		isGamePaused = false;
		isTimerExpired = false;
		isGameComplete = false;

		// Clear all drop zones
		document.querySelectorAll(".drop-zone").forEach((zone) => {
			zone.innerHTML = "";
			zone.classList.remove("correct");
		});

		// Reset and restart timer
		clearInterval(timerInterval);
		timeRemaining = getDefaultTimerSeconds();
		startTimer();

		// Update displays
		updateScoreDisplay();
		updateLevelDisplay();
		// Reinitialize level
		initLevel();
	}
}

function createConfettiRain() {
	const duration = 3000;
	const end = Date.now() + duration;

	(function frame() {
		confetti({
			particleCount: 2,
			angle: 60,
			spread: 55,
			origin: { x: 0, y: 0.3 }
		});
		confetti({
			particleCount: 2,
			angle: 120,
			spread: 55,
			origin: { x: 1, y: 0.3 }
		});

		if (Date.now() < end) {
			requestAnimationFrame(frame);
		}
	})();
}

function handleGameCompletion() {
	if (window.gameCompleted) return;
	window.gameCompleted = true;
	isGameComplete = true;
	clearInterval(timerInterval);
	localStorage.removeItem("periodicGameState");

	// First, clear the current elements
	document.querySelectorAll(".drop-zone").forEach((zone) => {
		zone.innerHTML = "";
		zone.classList.remove("correct");
	});

	// Place all elements in their correct positions
	data.elements.forEach((element) => {
		const box = document.createElement("div");
		box.className = "element-box";
		box.dataset.number = element.number;
		box.innerHTML = `
            <div class="atomic-number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
            <div class="mass">${element.mass}</div>
        `;

		// Find the correct drop zone
		const dropZone = document.querySelector(
			`.drop-zone[data-position="${element.number}"]`
		);
		if (dropZone) {
			dropZone.appendChild(box);
			dropZone.classList.add("correct");
		}
	});

	// Start the confetti
	createConfettiRain();

	// Create celebration overlay
	setTimeout(() => {
		const overlay = document.createElement("div");
		overlay.className = "celebration-overlay";

		const message = document.createElement("div");
		message.className = "celebration-message";
		message.innerHTML = `
            <h2>Congratulations!</h2>
            <p>You've mastered the Periodic Table!</p>
            <p>Final Score: ${currentScore}</p>
            <p>Time Remaining: ${Math.floor(timeRemaining / 60)}:${(
			timeRemaining % 60
		)
			.toString()
			.padStart(2, "0")}</p>
            <button id="get-certificate" class="celebration-button">Get Certificate</button>
            <button id="play-again" class="celebration-button">Play Again</button>
        `;

		overlay.appendChild(message);
		document.querySelector(".game-container").appendChild(overlay);

		// Add play again handler
		document.getElementById("play-again").addEventListener("click", () => {
			overlay.remove();
			localStorage.removeItem("periodicGameState");
			isGameComplete = false;
			isTimerExpired = false;
			resetGame();
		});

		// Add certificate handler - auto-download on click
		document.getElementById("get-certificate").addEventListener("click", () => {
			const name = localStorage.getItem('periodicPlayerName') || 'Player';
			// Auto-download set to true
			generateCertificate(name, { autoDownload: true, showModal: true });
		});
	}, 2000); // Wait for confetti to start before showing the message
	// Show email modal after celebration
	// Show email modal after celebration and REMOVE overlay
setTimeout(() => {
	const emailModal = document.getElementById("email-modal");

	// Remove celebration overlay so it doesn't block the modal
	const overlay = document.querySelector(".celebration-overlay");
	if (overlay) overlay.remove();

	if (emailModal) {
		emailModal.style.display = "flex";
		emailModal.style.zIndex = "9999";
	}
}, 3500);
}

function shareScore() {
	const title = 'Periodic Puzzle';
	const text = `I scored ${currentScore} points in Periodic Puzzle! Try it: ${location.href}`;
	const url = location.href;

	if (navigator.share) {
		navigator.share({ title, text, url }).catch(() => {});
		return;
	}

	if (navigator.clipboard) {
		navigator.clipboard.writeText(`${text} ${url}`).then(() => {
			alert('Score copied to clipboard. Share it with friends!');
		}).catch(() => {
			window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n' + url)}`;
		});
	} else {
		window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n' + url)}`;
	}
}

function generateCertCode() {
	try {
		const arr = new Uint8Array(6);
		crypto.getRandomValues(arr);
		return Array.from(arr)
			.map((n) => n.toString(36).padStart(2, '0'))
			.join('')
			.slice(0, 8)
			.toUpperCase();
	} catch (e) {
		return (Math.random().toString(36).slice(2, 10)).toUpperCase();
	}
}

// Draw a best badge (star-shaped with "BEST" text)
function drawBestBadge(ctx, x, y) {
	const radius = 50;
	const spikes = 5;
	
	// Draw yellow circle background
	ctx.fillStyle = '#FFD700';
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.fill();
	
	// Draw gold border
	ctx.strokeStyle = '#FFA500';
	ctx.lineWidth = 3;
	ctx.stroke();
	
	// Draw star inside circle
	ctx.fillStyle = '#FF6B6B';
	drawStar(ctx, x, y, spikes, radius * 0.6, radius * 0.3);
	
	// Draw "BEST" text
	ctx.fillStyle = '#FFFFFF';
	ctx.font = 'bold 20px sans-serif';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText('BEST', x, y);
}

// Helper function to draw a star
function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
	let rot = Math.PI / 2 * 3;
	let step = Math.PI / spikes;
	
	ctx.beginPath();
	ctx.moveTo(cx, cy - outerRadius);
	
	for (let i = 0; i < spikes; i++) {
		ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
		rot += step;
		ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
		rot += step;
	}
	
	ctx.lineTo(cx, cy - outerRadius);
	ctx.closePath();
	ctx.fill();
}

function generateCertificate(nameParam, options = {}) {
	const { autoDownload = false, showModal = true, level = null, code = null, admin = false, score = null } = options || {}; // score: explicit score for email downloads


	let name = nameParam;
	if (!name) {
		name = localStorage.getItem('periodicPlayerName') || 'Player';
	}
	if (!name || !name.trim()) name = 'Player';

	// Use provided score or current game score
	const certificateScore = score !== null ? score : currentScore;

	const canvas = document.getElementById('certificate-canvas');
	const ctx = canvas.getContext('2d');
	const w = canvas.width;
	const h = canvas.height;

	// Clear
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0, 0, w, h);

	// Decorative border
	ctx.strokeStyle = '#64ffda';
	ctx.lineWidth = 12;
	ctx.strokeRect(20, 20, w - 40, h - 40);

	// Title
	ctx.fillStyle = '#0a192f';
	ctx.font = '48px serif';
	ctx.textAlign = 'center';
	ctx.fillText('Certificate of Achievement', w / 2, 140);

	// Subtitle
	ctx.fillStyle = '#333';
	ctx.font = '22px sans-serif';
	ctx.fillText('This certifies that', w / 2, 210);

	// Name
	ctx.fillStyle = '#0a192f';
	ctx.font = 'bold 42px serif';
	ctx.fillText(name, w / 2, 290);

	// Achievement line
	ctx.fillStyle = '#333';
	ctx.font = '20px sans-serif';
	if (level) ctx.fillText(`has completed Level ${level} of the Periodic Puzzle`, w / 2, 340);
	else ctx.fillText(`has successfully completed the Periodic Puzzle`, w / 2, 340);

	// Score (use certificateScore instead of currentScore)
	ctx.fillStyle = '#0a192f';
	ctx.font = '28px sans-serif';
	ctx.fillText(`Score: ${certificateScore}`, w / 2, 420);

	// Date and Time
	const issuedAt = new Date();
	const dateStr = issuedAt.toLocaleDateString();
	const timeStr = issuedAt.getHours().toString().padStart(2, '0') + ':' + issuedAt.getMinutes().toString().padStart(2, '0');
	ctx.font = '18px sans-serif';
	ctx.fillText(`Date: ${dateStr}`, w / 2, 480);
	ctx.fillText(`Time: ${timeStr}`, w / 2, 520);

	// Draw Best Badge (star-like badge at top-right)
	drawBestBadge(ctx, w - 120, 80);

	// Small footer
	ctx.font = '16px sans-serif';
	ctx.fillStyle = '#666';
	ctx.fillText('Periodic Puzzle — By SHAHROZ', w / 2, h - 120);

	// Certificate unique code (8 chars) — allow overriding via options.code
	const certCode = code || generateCertCode();
	ctx.font = '20px monospace';
	ctx.fillStyle = '#0a192f';
	ctx.fillText(`Certificate Code: ${certCode}`, w / 2, h - 80);

	// Build verification URL (users can verify on the same site)
	const verificationURL = `${location.origin}${location.pathname}?verify=${certCode}`;

	// Prepare download/display function that can be called regardless of QR loading
	
	const finalizeAndDownload = () => {
		// Save certificate metadata to localStorage for verification
		try {
			const storeKey = 'periodicCertificates';
			const raw = localStorage.getItem(storeKey);
			const map = raw ? JSON.parse(raw) : {};
			map[certCode] = {
				name,
				score: certificateScore,
				date: dateStr,
				time: timeStr,
				code: certCode,
				url: location.href,
				admin: admin ? true : false
			};
			localStorage.setItem(storeKey, JSON.stringify(map));
		} catch (err) {
			console.warn('Could not save certificate to localStorage', err);
		}

		const dataUrl = canvas.toDataURL('image/png');
		const filename = `periodic-puzzle-certificate-${certCode}.png`;

		// Auto-download if requested
		if (autoDownload) {
			try {
				const a = document.createElement('a');
				a.href = dataUrl;
				a.download = filename;
				document.body.appendChild(a);
				a.click();
				a.remove();
			} catch (e) {
				console.warn('Auto-download failed', e);
			}
		}

		// Show modal if requested
		if (showModal) {
			const modal = document.getElementById('certificate-modal');
			const downloadLink = document.getElementById('download-cert');
			modal.style.display = 'flex';
			if (downloadLink) {
				downloadLink.href = dataUrl;
				downloadLink.download = filename;
				downloadLink.style.opacity = '1';
				downloadLink.style.pointerEvents = 'auto';
			}

			const codeEl = document.getElementById('cert-code');
			if (codeEl) codeEl.textContent = `Certificate Code: ${certCode}`;

			// Attach close button handler
			const closeBtn = document.getElementById('close-cert');
			if (closeBtn) closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
		}
	};

	// Draw QR code (use tinyqrc.com API)
	const qrImg = new Image();
	qrImg.crossOrigin = 'Anonymous';
	qrImg.src = 'https://api.tinyqrc.com/v1/qr?data=' + encodeURIComponent(verificationURL) + '&size=160x160';
	
	let qrLoaded = false;
	
	qrImg.onload = () => {
		qrLoaded = true;
		// Draw QR at bottom-right corner
		const size = 160;
		ctx.drawImage(qrImg, w - size - 40, h - size - 40, size, size);
		finalizeAndDownload();
	};

	qrImg.onerror = () => {
		qrLoaded = true;
		console.warn('QR generation failed — proceeding without QR');
		finalizeAndDownload();
	};
	
	// Fallback: if QR doesn't load in 2 seconds, proceed anyway
	setTimeout(() => {
		if (!qrLoaded) {
			console.warn('QR loading timeout - proceeding without QR');
			finalizeAndDownload();
		}
	}, 2000);
}

function verifyCertificateByCode(code) {
	const storeKey = 'periodicCertificates';
	const raw = localStorage.getItem(storeKey);
	if (!raw) return null;
	try {
		const map = JSON.parse(raw);
		return map[code] || null;
	} catch (e) {
		return null;
	}
}

// Modal utilities and handlers
function openModal(id) {
	const el = document.getElementById(id);
	if (!el) return;
	el.style.display = 'flex';
	document.body.style.overflow = 'hidden';
	// If share modal, populate text now
	if (id === 'share-modal') {
		const txtEl = document.getElementById('share-text');
		if (txtEl) txtEl.value = `I scored ${currentScore} points in Periodic Puzzle! Try it: ${location.href}`;
	}
	// focus first input if present
	const input = el.querySelector('input, textarea, button');
	if (input) input.focus();
}

function closeModal(id) {
	const el = document.getElementById(id);
	if (!el) return;
	el.style.display = 'none';
	document.body.style.overflow = '';
}

function showInfo(message) {
	const info = document.getElementById('info-modal');
	if (!info) { alert(message); return; }
	document.getElementById('info-message').textContent = message;
	openModal('info-modal');
}

function setupModalHandlers() {
	// Share modal
	const shareText = () => `I scored ${currentScore} points in Periodic Puzzle! Try it: ${location.href}`;
	document.getElementById('share-copy-btn').addEventListener('click', () => {
		navigator.clipboard?.writeText(shareText()).then(() => {
			document.getElementById('share-status').textContent = 'Copied to clipboard!';
		}).catch(() => { document.getElementById('share-status').textContent = 'Copy failed.'; });
	});
	document.getElementById('share-native-btn').addEventListener('click', () => {
		if (navigator.share) {
			navigator.share({ title: 'Periodic Puzzle', text: shareText(), url: location.href }).catch((e) => { document.getElementById('share-status').textContent = 'Share canceled or not available.'; });
		} else { document.getElementById('share-status').textContent = 'Native share not available on this device.'; }
	});
	document.getElementById('share-email-btn').addEventListener('click', () => {
		window.location.href = `mailto:?subject=${encodeURIComponent('Periodic Puzzle')}&body=${encodeURIComponent(shareText())}`;
	});
	document.getElementById('share-close-btn').addEventListener('click', () => closeModal('share-modal'));
	document.getElementById('share-modal').addEventListener('click', (e) => { if (e.target.id === 'share-modal') closeModal('share-modal'); });

	// Certificate input modal
	document.getElementById('cert-generate-btn').addEventListener('click', () => {
		const name = document.getElementById('cert-name-input').value.trim();
		if (!name) { document.getElementById('cert-input-status').textContent = 'Please enter a name.'; return; }
		generateCertificate(name, { autoDownload: true, showModal: true });
		closeModal('cert-input-modal');
	});
	document.getElementById('cert-cancel-btn').addEventListener('click', () => closeModal('cert-input-modal'));
	document.getElementById('cert-input-modal').addEventListener('click', (e) => { if (e.target.id === 'cert-input-modal') closeModal('cert-input-modal'); });

	// Verify modal
	document.getElementById('verify-submit-btn').addEventListener('click', () => {
		const code = document.getElementById('verify-code-input').value.trim().toUpperCase();
		if (!code) { document.getElementById('verify-result').textContent = 'Enter a certificate code.'; return; }
		const info = verifyCertificateByCode(code);
		if (!info) document.getElementById('verify-result').textContent = 'Certificate not found or invalid code.';
		else document.getElementById('verify-result').textContent = `Certificate found — Name: ${info.name}, Score: ${info.score}, Date: ${info.date}, Time: ${info.time || 'N/A'}, Code: ${info.code}`;
	});
	document.getElementById('verify-close-btn').addEventListener('click', () => closeModal('verify-modal'));
	document.getElementById('verify-modal').addEventListener('click', (e) => { if (e.target.id === 'verify-modal') closeModal('verify-modal'); });

	// Admin modal
	const adminRunBtn = document.getElementById('admin-run-btn');
	if (adminRunBtn) adminRunBtn.addEventListener('click', () => {
		const code = document.getElementById('admin-code-input').value.trim();
		const name = document.getElementById('admin-name-input').value.trim() || 'Admin';
		if (!code) { document.getElementById('admin-result').textContent = 'Enter admin code.'; return; }
		if (code !== '4017') { document.getElementById('admin-result').textContent = 'Invalid admin code.'; return; }
		// perform admin actions (same as before)
clearInterval(timerInterval);

// Give full score
const maxPoints = totalElements * POINTS_PER_CORRECT;
currentScore = maxPoints + POINTS_PER_CORRECT;
updateScoreDisplay();

// 🔥 CRITICAL: trigger real game completion
handleGameCompletion();

// Issue admin certificate AFTER completion UI appears
setTimeout(() => {
	generateCertificate(name, {
		autoDownload: true,
		showModal: true,
		admin: true
	});
}, 1000);

document.getElementById('admin-result').textContent =
	'Admin action completed. Game finished and certificate issued.';
	});
	const adminCancelBtn = document.getElementById('admin-cancel-btn');
	if (adminCancelBtn) adminCancelBtn.addEventListener('click', () => closeModal('admin-modal'));
	const adminModal = document.getElementById('admin-modal');
	if (adminModal) adminModal.addEventListener('click', (e) => { if (e.target.id === 'admin-modal') closeModal('admin-modal'); });

	// Info modal
	document.getElementById('info-close-btn').addEventListener('click', () => closeModal('info-modal'));
	document.getElementById('info-modal').addEventListener('click', (e) => { if (e.target.id === 'info-modal') closeModal('info-modal'); });

	// When share modal opens, populate text dynamically
	document.getElementById('share-modal').addEventListener('click', () => {
		document.getElementById('share-text').value = `I scored ${currentScore} points in Periodic Puzzle! Try it: ${location.href}`;
	});
}

function setupHowItWorksTutorial() {
	const howLink = document.getElementById('how-it-works-link');
	const howBtn = document.getElementById('how-it-works-btn');
	const modalId = 'howto-modal';
	const modal = document.getElementById(modalId);
	const tile = document.getElementById('tutorial-tile');
	const target = document.getElementById('tutorial-target');
	const pointer = document.getElementById('tutorial-pointer');
	const status = document.getElementById('tutorial-status');
	const skipBtn = document.getElementById('tutorial-skip-btn');
	const closeBtn = document.getElementById('tutorial-close-btn');
	const stage = modal?.querySelector('.tutorial-stage');

	const hasTrigger = !!howLink || !!howBtn;
	if (!hasTrigger || !modal || !tile || !target || !pointer || !status || !skipBtn || !closeBtn || !stage) return;

	let dragging = false;
	let pointerId = null;
	let grabOffsetX = 0;
	let grabOffsetY = 0;
	let startLeft = 0;
	let startTop = 0;

	const reset = () => {
		status.textContent = '';
		target.classList.remove('is-hot');
		pointer.style.display = '';
		tile.classList.remove('is-dragging');
		tile.style.left = '';
		tile.style.top = '';
		tile.style.transform = '';
		tile.style.pointerEvents = '';
		// ensure initial centered-y
		tile.style.left = '22px';
		tile.style.top = '50%';
		tile.style.transform = 'translateY(-50%)';
	};

	const open = () => {
		reset();
		openModal(modalId);
	};

	const close = () => {
		closeModal(modalId);
	};

	if (howLink) {
		howLink.addEventListener('click', (e) => {
			e.preventDefault();
			open();
		});
	}
	if (howBtn) {
		howBtn.addEventListener('click', () => open());
	}

	skipBtn.addEventListener('click', () => close());
	closeBtn.addEventListener('click', () => close());
	modal.addEventListener('click', (e) => { if (e.target?.id === modalId) close(); });

	const setTilePos = (leftPx, topPx) => {
		tile.style.left = `${leftPx}px`;
		tile.style.top = `${topPx}px`;
		tile.style.transform = 'translate(0, 0)';
	};

	const constrain = (value, min, max) => Math.max(min, Math.min(max, value));

	const isOverTarget = () => {
		const tileRect = tile.getBoundingClientRect();
		const targetRect = target.getBoundingClientRect();
		const tileCx = tileRect.left + tileRect.width / 2;
		const tileCy = tileRect.top + tileRect.height / 2;
		return (
			tileCx >= targetRect.left &&
			tileCx <= targetRect.right &&
			tileCy >= targetRect.top &&
			tileCy <= targetRect.bottom
		);
	};

	const complete = () => {
		status.textContent = 'Nice! Tutorial complete.';
		target.classList.remove('is-hot');
		pointer.style.display = 'none';
		tile.classList.remove('is-dragging');
		tile.style.pointerEvents = 'none';
		setTimeout(() => close(), 900);
	};

	const onPointerDown = (e) => {
		// Allow mouse + touch
		if (dragging) return;
		dragging = true;
		pointerId = e.pointerId;
		pointer.style.display = 'none';
		tile.classList.add('is-dragging');

		const stageRect = stage.getBoundingClientRect();
		const tileRect = tile.getBoundingClientRect();

		// capture start in stage coordinate system
		startLeft = tileRect.left - stageRect.left;
		startTop = tileRect.top - stageRect.top;
		grabOffsetX = e.clientX - tileRect.left;
		grabOffsetY = e.clientY - tileRect.top;

		try { tile.setPointerCapture(pointerId); } catch (err) {}
		status.textContent = 'Drag it into the slot →';
	};

	const onPointerMove = (e) => {
		if (!dragging || e.pointerId !== pointerId) return;
		e.preventDefault();

		const stageRect = stage.getBoundingClientRect();
		const tileW = tile.offsetWidth;
		const tileH = tile.offsetHeight;

		const left = e.clientX - stageRect.left - grabOffsetX;
		const top = e.clientY - stageRect.top - grabOffsetY;
		const boundedLeft = constrain(left, 10, stageRect.width - tileW - 10);
		const boundedTop = constrain(top, 10, stageRect.height - tileH - 10);
		setTilePos(boundedLeft, boundedTop);

		const hot = isOverTarget();
		target.classList.toggle('is-hot', hot);
	};

	const onPointerUp = (e) => {
		if (!dragging || e.pointerId !== pointerId) return;
		e.preventDefault();
		dragging = false;
		pointerId = null;

		if (isOverTarget()) {
			// snap to target center in stage coordinates
			const stageRect = stage.getBoundingClientRect();
			const targetRect = target.getBoundingClientRect();
			const tileW = tile.offsetWidth;
			const tileH = tile.offsetHeight;
			const left = (targetRect.left - stageRect.left) + (targetRect.width - tileW) / 2;
			const top = (targetRect.top - stageRect.top) + (targetRect.height - tileH) / 2;
			setTilePos(left, top);
			complete();
		} else {
			status.textContent = 'Almost — try again.';
			target.classList.remove('is-hot');
			// return to start
			setTilePos(startLeft, startTop);
			pointer.style.display = '';
			tile.classList.remove('is-dragging');
		}
	};

	tile.addEventListener('pointerdown', onPointerDown);
	tile.addEventListener('pointermove', onPointerMove);
	tile.addEventListener('pointerup', onPointerUp);
	tile.addEventListener('pointercancel', onPointerUp);

	// Keyboard accessibility: Enter/Space opens the tutorial already; keep tile focusable.
	modal.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') close();
	});
}

// Initialize modals when game starts
if (!window._modalSetup) {
	window._modalSetup = true;
	window.addEventListener('load', () => {
		setupModalHandlers();
		setupHowItWorksTutorial();
	});
}

// Start the game when page loads
window.addEventListener("load", initGame);
function sendCertificateEmail() {
	const emailInput = document.getElementById("player-email");
	const status = document.getElementById("email-status");

	if (!emailInput || !status) return;

	const email = emailInput.value.trim();

	// Feature toggle: disable email sending
	if (siteConfig?.features?.emailCertificate === false) {
		status.textContent = "❌ Email certificates are disabled right now.";
		return;
	}

	if (!email || !email.includes("@")) {
		status.textContent = "❌ Please enter a valid email address";
		return;
	}

	// Remember email (used for client-side blocking on next visits)
	try { localStorage.setItem('periodicPlayerEmail', email); } catch (e) {}

	// Block list check
	if (isEmailBlocked(email)) {
		status.textContent = siteConfig?.blocked?.message || "This email is blocked.";
		return;
	}

	status.textContent = "📧 Generating certificate...";

	// Generate certificate and get the data URL
	const canvas = document.getElementById('certificate-canvas');
	const ctx = canvas.getContext('2d');
	const w = canvas.width;
	const h = canvas.height;
	const name = email.split('@')[0];

	// Clear and draw certificate
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0, 0, w, h);

	// Decorative border
	ctx.strokeStyle = '#64ffda';
	ctx.lineWidth = 12;
	ctx.strokeRect(20, 20, w - 40, h - 40);

	// Title
	ctx.fillStyle = '#0a192f';
	ctx.font = '48px serif';
	ctx.textAlign = 'center';
	ctx.fillText('Certificate of Achievement', w / 2, 140);

	// Subtitle
	ctx.fillStyle = '#333';
	ctx.font = '22px sans-serif';
	ctx.fillText('This certifies that', w / 2, 210);

	// Name
	ctx.fillStyle = '#0a192f';
	ctx.font = 'bold 42px serif';
	ctx.fillText(name, w / 2, 290);

	// Achievement
	ctx.fillStyle = '#333';
	ctx.font = '20px sans-serif';
	ctx.fillText('has successfully completed the Periodic Puzzle', w / 2, 340);

	// Score
	ctx.fillStyle = '#0a192f';
	ctx.font = '28px sans-serif';
	ctx.fillText(`Score: ${currentScore}`, w / 2, 420);

	// Date and Time
	const now = new Date();
	const dateStr = now.toLocaleDateString();
	const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
	ctx.font = '18px sans-serif';
	ctx.fillText(`Date: ${dateStr}`, w / 2, 480);
	ctx.fillText(`Time: ${timeStr}`, w / 2, 520);

	// Draw Best Badge
	drawBestBadge(ctx, w - 120, 80);

	// Footer
	ctx.font = '16px sans-serif';
	ctx.fillStyle = '#666';
	ctx.fillText('Periodic Puzzle — By SHAHROZ', w / 2, h - 120);

	// Certificate code
	const certCode = generateCertCode();
	ctx.font = '20px monospace';
	ctx.fillStyle = '#0a192f';
	ctx.fillText(`Certificate Code: ${certCode}`, w / 2, h - 80);

	// Get certificate as base64 with quality optimization
	const certificateImage = canvas.toDataURL('image/jpeg', 0.8);

	// Send via EmailJS
	status.textContent = "📤 Sending email...";

	// EmailJS configuration
	const serviceID = 'service_dlozwz4';
	const templateID = 'template_qfh6lec';
	const publicKey = 'yNc2k0colkBeS_eTO';

	// Ensure EmailJS is initialized (safe to call more than once)
	try {
		if (typeof emailjs !== 'undefined' && typeof emailjs.init === 'function') {
			emailjs.init(publicKey);
		}
	} catch (e) {
		// ignore
	}

	// Check if EmailJS is loaded
	if (typeof emailjs === 'undefined') {
		status.textContent = "❌ EmailJS not loaded. Please refresh the page.";
		console.error('EmailJS SDK not loaded');
		return;
	}

	// Generate verification URL
	const verificationURL = `${location.origin}${location.pathname}?verify=${certCode}`;

	// Send email using the initialized EmailJS SDK
	emailjs.send(serviceID, templateID, {
		// Recipient fields (EmailJS template "To email" must reference one of these)
		to_email: email,
		email: email,
		user_email: email,
		recipient: email,
		recipient_email: email,
		reply_to: email,

		// Name fields
		to_name: name,
		name: name,
		player_name: name,

		// Template fields (match your template HTML)
		score: currentScore,
		date: dateStr,
		time: timeStr,
		certCode: certCode,

		// Don't send certificate image - it exceeds 50KB limit
		// Users can download via the download_link instead
		
		// Backward-compatible aliases (safe to keep)
		completion_date: dateStr,
		completion_time: timeStr,
		certificate_code: certCode,
		verification_url: verificationURL,
		game_url: location.href,
		// Download link (point to a page that triggers download)
		download_link: `${location.origin}${location.pathname}?download=${certCode}`,
		message: `Congratulations ${name}! You've completed the Periodic Puzzle with a score of ${currentScore}. Your certificate code is: ${certCode}`
	})
	.then((response) => {
		status.textContent = "✅ Certificate sent successfully! Check your inbox.";
		// Save certificate locally
		try {
			const storeKey = 'periodicCertificates';
			const raw = localStorage.getItem(storeKey);
			const map = raw ? JSON.parse(raw) : {};
			map[certCode] = {
				name,
				score: currentScore,
				date: dateStr,
				time: timeStr,
				code: certCode,
				email: email,
				url: location.href
			};
			localStorage.setItem(storeKey, JSON.stringify(map));
		} catch (err) {
			console.warn('Could not save certificate to localStorage', err);
		}
		setTimeout(() => closeEmailModal(), 3000);
	})
	.catch((error) => {
		console.error('EmailJS Full Error:', error);
		console.error('Error status:', error.status);
		console.error('Error text:', error.text);

		// Show the *actual* EmailJS error in the UI (DevTools is blocked by the page)
		const statusCode = (error && typeof error.status !== 'undefined') ? String(error.status) : 'unknown';
		const errorText = (error && error.text) ? String(error.text) : 'No error text provided';
		status.innerHTML = `❌ Failed to send email.<br><small>Status: ${statusCode}</small><br><small>${errorText}</small>`;
		
		// Common quick hints (based on typical EmailJS errors)
		if (/recipients?|to_email|destination/i.test(errorText)) {
			status.innerHTML += '<br><small>Hint: In EmailJS template settings, set “To email” to {{to_email}} and ensure you pass to_email.</small>';
		} else if (/user id|public key|invalid user/i.test(errorText)) {
			status.innerHTML += '<br><small>Hint: Public key is wrong or EmailJS init is not happening.</small>';
		} else if (/service.*not found|template.*not found/i.test(errorText)) {
			status.innerHTML += '<br><small>Hint: Service ID / Template ID mismatch.</small>';
		} else if (/not authorized|blocked|origin/i.test(errorText)) {
			status.innerHTML += '<br><small>Hint: Check EmailJS “Allowed origins” for localhost.</small>';
		}
		
		// Offer download as fallback
		setTimeout(() => {
			status.innerHTML = '💾 Download certificate instead?<br>';
			const downloadBtn = document.createElement('button');
			downloadBtn.textContent = 'Download Certificate';
			downloadBtn.className = 'celebration-button';
			downloadBtn.style.marginTop = '10px';
			downloadBtn.onclick = () => {
				// Save certificate locally first
				try {
					const storeKey = 'periodicCertificates';
					const raw = localStorage.getItem(storeKey);
					const map = raw ? JSON.parse(raw) : {};
					map[certCode] = {
						name,
						score: currentScore,
						date: dateStr,
						time: timeStr,
						code: certCode,
						email: email,
						url: location.href
					};
					localStorage.setItem(storeKey, JSON.stringify(map));
				} catch (err) {
					console.warn('Could not save certificate to localStorage', err);
				}
				
				// Download certificate
				const a = document.createElement('a');
				a.href = certificateImage;
				a.download = `periodic-puzzle-certificate-${certCode}.png`;
				a.click();
				setTimeout(() => closeEmailModal(), 500);
			};
			status.appendChild(downloadBtn);
		}, 1500);
	});
}

function closeEmailModal() {
	const modal = document.getElementById("email-modal");
	if (modal) modal.style.display = "none";
}

// ==== Difficulty Selection Modal ====
function showDifficultyModal() {
	const modal = document.getElementById('welcome-modal');
	const input = document.getElementById('welcome-name-input');
	const startBtn = document.getElementById('welcome-start-btn');
	const status = document.getElementById('welcome-status');
	const noteEl = document.getElementById('welcome-note-text');
	
	if (!modal) return;
	
	modal.style.display = 'flex';
	
	// Check if player name already exists
	const savedName = localStorage.getItem('periodicPlayerName');
	if (savedName) {
		// Hide name input if already saved
		if (input) input.style.display = 'none';
		if (noteEl) {
			noteEl.textContent = 'Choose your difficulty level:';
		}
	} else {
		if (input) {
			input.style.display = 'block';
			input.focus();
		}
		if (noteEl) {
			noteEl.textContent = 'Enter your name and choose your difficulty level:';
		}
	}
	
	// Setup difficulty selector
	const difficultyBtns = document.querySelectorAll('.difficulty-btn');
	difficultyBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			// Remove active from all buttons
			difficultyBtns.forEach(b => b.classList.remove('active'));
			// Add active to clicked button
			btn.classList.add('active');
			// Store selected difficulty
			gameDifficulty = btn.getAttribute('data-difficulty');
			localStorage.setItem('periodicDifficulty', gameDifficulty);
		});
	});
	
	// Restore saved difficulty if exists
	const savedDifficulty = localStorage.getItem('periodicDifficulty') || 'medium';
	gameDifficulty = savedDifficulty;
	difficultyBtns.forEach(btn => {
		if (btn.getAttribute('data-difficulty') === savedDifficulty) {
			btn.classList.add('active');
		} else {
			btn.classList.remove('active');
		}
	});
	
	const handleStart = () => {
		const name = input && input.style.display !== 'none' ? input.value.trim() : savedName;
		if (!name) {
			status.textContent = 'Please enter your name to continue.';
			status.style.color = '#ff6b6b';
			return;
		}
		
		localStorage.setItem('periodicPlayerName', name);
		modal.style.display = 'none';
		status.textContent = '';
		
		// Start the game with selected difficulty
		startGameWithDifficulty();
	};
	
	if (startBtn) {
		startBtn.onclick = handleStart;
	}
	
	if (input) {
		input.onkeypress = (e) => {
			if (e.key === 'Enter') handleStart();
		};
	}
}

// ==== Welcome Modal (First-time player name) ====
function showWelcomeModal() {
	showDifficultyModal();
}

// ==== Apply Difficulty Class to Body ====
function applyDifficultyClass() {
	const body = document.body;
	// Remove all difficulty classes
	body.classList.remove('difficulty-easy', 'difficulty-medium', 'difficulty-hard');
	// Add current difficulty class
	body.classList.add(`difficulty-${gameDifficulty}`);
}

// ==== Start Game with Selected Difficulty ====
function startGameWithDifficulty() {
	const button = document.getElementById("reset-button");
	
	// Update game state
	isGameStarted = true;
	if (button) {
		button.textContent = "Reset";
		button.classList.add("reset");
	}
	
	// Apply difficulty class for styling
	applyDifficultyClass();
	
	// Recalculate timer based on selected difficulty
	timeRemaining = getDefaultTimerSeconds();
	updateTimerDisplay();
	
	// Initialize first level
	initLevel();
}

// ==== Verify Certificate Handlers ====
document.addEventListener('DOMContentLoaded', () => {
	const verifyModal = document.getElementById('verify-modal');
	const verifyScanBtn = document.getElementById('verify-scan-btn');
	const verifyManualBtn = document.getElementById('verify-manual-btn');
	const scanArea = document.getElementById('verify-scan-area');
	const manualArea = document.getElementById('verify-manual-area');
	const verifyResult = document.getElementById('verify-result');
	const verifyCloseBtn = document.getElementById('verify-close-btn');
	const verifyBackBtn = document.getElementById('verify-back-btn');
	const verifySubmitBtn = document.getElementById('verify-submit-btn');
	const stopScanBtn = document.getElementById('stop-scan-btn');
	const qrVideo = document.getElementById('qr-video');
	const qrCanvas = document.getElementById('qr-canvas');

	let videoStream = null;
	let scanning = false;

	// Show scan option
	if (verifyScanBtn) {
		verifyScanBtn.addEventListener('click', () => {
			scanArea.style.display = 'block';
			manualArea.style.display = 'none';
			verifyResult.textContent = '';
			startQRScanning();
		});
	}

	// Show manual entry option
	if (verifyManualBtn) {
		verifyManualBtn.addEventListener('click', () => {
			scanArea.style.display = 'none';
			manualArea.style.display = 'block';
			verifyResult.textContent = '';
			stopQRScanning();
		});
	}

	// Back button from manual entry
	if (verifyBackBtn) {
		verifyBackBtn.addEventListener('click', () => {
			scanArea.style.display = 'none';
			manualArea.style.display = 'none';
			document.getElementById('verify-code-input').value = '';
		});
	}

	// Verify certificate by code
	if (verifySubmitBtn) {
		verifySubmitBtn.addEventListener('click', () => {
			const code = document.getElementById('verify-code-input').value.trim().toUpperCase();
			if (!code) {
				verifyResult.textContent = 'Please enter a certificate code.';
				verifyResult.style.color = '#ff6b6b';
				return;
			}
			verifyCertificate(code);
		});
	}

	// Stop scanning
	if (stopScanBtn) {
		stopScanBtn.addEventListener('click', stopQRScanning);
	}

	// Close modal
	if (verifyCloseBtn) {
		verifyCloseBtn.addEventListener('click', () => {
			if (verifyModal) verifyModal.style.display = 'none';
			stopQRScanning();
			scanArea.style.display = 'none';
			manualArea.style.display = 'none';
			verifyResult.textContent = '';
		});
	}

	function startQRScanning() {
		if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
			verifyResult.textContent = 'Camera access not supported in this browser.';
			verifyResult.style.color = '#ff6b6b';
			return;
		}

		scanning = true;
		navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
			.then(stream => {
				videoStream = stream;
				qrVideo.srcObject = stream;
				qrVideo.play();
				requestAnimationFrame(scanQRCode);
			})
			.catch(err => {
				verifyResult.textContent = 'Camera access denied or unavailable.';
				verifyResult.style.color = '#ff6b6b';
				console.error('Camera error:', err);
			});
	}

	function stopQRScanning() {
		scanning = false;
		if (videoStream) {
			videoStream.getTracks().forEach(track => track.stop());
			videoStream = null;
		}
		if (qrVideo) qrVideo.srcObject = null;
	}

	function scanQRCode() {
		if (!scanning || !qrVideo.readyState === qrVideo.HAVE_ENOUGH_DATA) {
			if (scanning) requestAnimationFrame(scanQRCode);
			return;
		}

		const canvas = qrCanvas;
		const ctx = canvas.getContext('2d');
		canvas.width = qrVideo.videoWidth;
		canvas.height = qrVideo.videoHeight;
		ctx.drawImage(qrVideo, 0, 0, canvas.width, canvas.height);

		try {
			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			// Simple QR detection using jsQR library would go here
			// For now, we'll just use manual entry as the primary method
		} catch (e) {
			console.error('QR scan error:', e);
		}

		if (scanning) requestAnimationFrame(scanQRCode);
	}

	function verifyCertificate(code) {
		try {
			const storeKey = 'periodicCertificates';
			const raw = localStorage.getItem(storeKey);
			if (!raw) {
				verifyResult.textContent = `❌ Certificate ${code} not found in this browser.`;
				verifyResult.style.color = '#ff6b6b';
				return;
			}

			const map = JSON.parse(raw);
			const cert = map[code];

			if (!cert) {
				verifyResult.textContent = `❌ Certificate ${code} not found.`;
				verifyResult.style.color = '#ff6b6b';
				return;
			}

			const date = new Date(cert.timestamp).toLocaleDateString();
			verifyResult.innerHTML = `
				✅ <strong>Valid Certificate!</strong><br>
				Name: ${cert.name}<br>
				Issued: ${date}<br>
				Score: ${cert.score || 'N/A'}
			`;
			verifyResult.style.color = '#64ffda';
		} catch (e) {
			verifyResult.textContent = '❌ Verification failed. Invalid data.';
			verifyResult.style.color = '#ff6b6b';
			console.error('Verify error:', e);
		}
	}
});
