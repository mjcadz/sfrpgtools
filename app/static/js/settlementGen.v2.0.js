var government = ["Anarchy","Autocracy","Council","Magocracy","Military","Oligarchy","Secret Syndicate","Plutocracy","Utopia","True Democracy"];

var alignment = ["CG","NG","LG","CN","N","LN","CE","NE","LE"];

var spellGems0 = ["Spell Gem (Dancing Lights)","Spell Gem (Daze)","Spell Gem (Detect Affliction)","Spell Gem (Detect Magic)","Spell Gem (Energy Ray)","Spell Gem (Fatigue)","Spell Gem (Ghost Sound)","Spell Gem (Grave Words)","Spell Gem (Mending)","Spell Gem (Psychokinetic Hand)","Spell Gem (Stabilize)","Spell Gem (Telekinetic Projectile)","Spell Gem (Telepathic Message)","Spell Gem (Token Spell)","Spell Gem (Transfer Charge)"];
var spellGems1 = ["Spell Gem (Charm Person)","Spell Gem (Command)","Spell Gem (Comprehend Languages)","Spell Gem (Confusion (Lesser))","Spell Gem (Detect Radiation)","Spell Gem (Detect Tech)","Spell Gem (Detect Thoughts)","Spell Gem (Disguise Self)","Spell Gem (Erase)","Spell Gem (Fear (Level 1))","Spell Gem (Flight (Level 1))","Spell Gem (Grease)","Spell Gem (Hold Portal)","Spell Gem (Holographic Image (Level 1))","Spell Gem (Identify)","Spell Gem (Jolting Surge)","Spell Gem (Keen Senses)","Spell Gem (Life Bubble)","Spell Gem (Magic Missile)","Spell Gem (Mind Link)","Spell Gem (Mind Thrust (Level 1))","Spell Gem (Mystic Cure (Level 1))","Spell Gem (Overheat)","Spell Gem (Reflecting Armor)","Spell Gem (Remove Condition (Lesser))","Spell Gem (Share Language)","Spell Gem (Supercharge Weapon)","Spell Gem (Unseen Servant)","Spell Gem (Wisp Ally)"];
var spellGems2 = ["Spell Gem (Augury)","Spell Gem (Caustic Conversion)","Spell Gem (Command Undead)","Spell Gem (Darkvision)","Spell Gem (Daze Monster)","Spell Gem (Fear (Level 2))","Spell Gem (Flight (Level 2))","Spell Gem (Fog Cloud)","Spell Gem (Force Blast)","Spell Gem (Hold Person)","Spell Gem (Holographic Image (Level 2))","Spell Gem (Hurl Forcedisk)","Spell Gem (Implant Data)","Spell Gem (Inflict Pain)","Spell Gem (Inject Nanobots)","Spell Gem (Invisibility)","Spell Gem (Knock)","Spell Gem (Logic Bomb)","Spell Gem (Make Whole)","Spell Gem (Microbot Assault)","Spell Gem (Mind Thrust (Level 2))","Spell Gem (Mirror Image)","Spell Gem (Mystic Cure (Level 2))","Spell Gem (Recharge)","Spell Gem (Remove Condition)","Spell Gem (Restoration (Lesser))","Spell Gem (Security Seal)","Spell Gem (See Invisibility)","Spell Gem (Shield Other)","Spell Gem (Spider Climb)","Spell Gem (Status)","Spell Gem (Zone of Truth)"];
var spellGems3 = ["Spell Gem (Arcane Sight)","Spell Gem (Arcing Surge)","Spell Gem (Bestow Curse)","Spell Gem (Charm Monster)","Spell Gem (Clairaudience/Clairvoyance)","Spell Gem (Deep Slumber)","Spell Gem (Discharge)","Spell Gem (Dispel Magic)","Spell Gem (Displacement)","Spell Gem (Entropic Grasp)","Spell Gem (Explosive Blast)","Spell Gem (Fear (Level 3))","Spell Gem (Flight (Level 3))","Spell Gem (Handy Junkbot)","Spell Gem (Haste)","Spell Gem (Healing Junkbot)","Spell Gem (Hologram Memory)","Spell Gem (Holographic Image (Level 3))","Spell Gem (Instant Virus)","Spell Gem (Irradiate)","Spell Gem (Mind Thrust (Level 3))","Spell Gem (Mystic Cure (Level 3))","Spell Gem (Nondetection)","Spell Gem (Probability Prediction)","Spell Gem (Psychokinetic Strangulation)","Spell Gem (Ray of Exhaustion)","Spell Gem (Remove","Affliction)","Spell Gem (Resistant Armor (Lesser))","Spell Gem (Slow)","Spell Gem (Speak with Dead)","Spell Gem (Suggestion)","Spell Gem (Synaptic Pulse)","Spell Gem (Tongues)"];
var spellGems4 = ["Spell Gem (Animate Dead)","Spell Gem (Arcane Eye)","Spell Gem (Confusion)","Spell Gem (Corrosive Haze)","Spell Gem (Cosmic Eddy)","Spell Gem (Creation (Level 4))","Spell Gem (Death Ward)","Spell Gem (Destruction Protocol)","Spell Gem (Dimension Door)","Spell Gem (Discern Lies)","Spell Gem (Dismissal (Level 4))","Spell Gem (Divination)","Spell Gem (Enervation)","Spell Gem (Fear (Level 4))","Spell Gem (Flight (Level 4))","Spell Gem (Hold Monster)","Spell Gem (Holographic Image (Level 4))","Spell Gem (Invisibility (Greater))","Spell Gem (Mind Probe)","Spell Gem (Mind Thrust (Level 4))","Spell Gem (Mystic Cure (Level 4))","Spell Gem (Overload Systems)","Spell Gem (Planar Binding (Level 4))","Spell Gem (Reincarnate)","Spell Gem (Remove Radioactivity)","Spell Gem (Resilient Sphere)","Spell Gem (Resistant Armor)","Spell Gem (Restoration)","Spell Gem (Rewire Flesh)","Spell Gem (Soothing Protocol)","Spell Gem (Telepathic Bond)","Spell Gem (Wall of Fire)"];
var spellGems5 = ["Spell Gem (Break Enchantment)","Spell Gem (Call Cosmos)","Spell Gem (Command (Greater))","Spell Gem (Commune with Nature)","Spell Gem (Contact Other Plane)","Spell Gem (Control Machines)","Spell Gem (Creation (Level 5))","Spell Gem (Crush Skull)","Spell Gem (Dismissal (Level 5))","Spell Gem (Dispel Magic (Greater))","Spell Gem (Dominate Person)","Spell Gem (Feeblemind)","Spell Gem (Flight (Level 5))","Spell Gem (Heat Leech)","Spell Gem (Holographic Image (Level 5))","Spell Gem (Holographic Terrain)","Spell Gem (Mind Thrust (Level 5))","Spell Gem (Modify Memory)","Spell Gem (Mislead)","Spell Gem (Mystic Cure (Level 5))","Spell Gem (Mystic Cure (Mass)(Level 5))","Spell Gem (Passwall)","Spell Gem (Planar Binding (Level 5))","Spell Gem (Private Sanctum)","Spell Gem (Prying Eyes)","Spell Gem (Raise Dead)","Spell Gem (Rapid Repair)","Spell Gem (Remove Condition (Greater))","Spell Gem (Resistant Aegis)","Spell Gem (Retrocognition)","Spell Gem (Synapse Overload)","Spell Gem (Synaptic Pulse (Greater))","Spell Gem (Telekinesis)","Spell Gem (Telepathy)","Spell Gem (Teleport)","Spell Gem (Unwilling Guardian)","Spell Gem (Wall of Force)","Spell Gem (Waves of Fatigue)"];
var spellGems6 = ["Spell Gem (Battle Junkbot)","Spell Gem (Chain Surge)","Spell Gem (Control Gravity)","Spell Gem (Control Undead)","Spell Gem (Discharge (Greater))","Spell Gem (Disintegrate)","Spell Gem (Enshrining Refuge)","Spell Gem (Ethereal Jaunt)","Spell Gem (Flesh to Stone)","Spell Gem (Flight (Level 6))","Spell Gem (Gravitational Singularity)","Spell Gem (Holographic Image (Level 6))","Spell Gem (Inflict Pain (Mass))","Spell Gem (Interplanetary Teleport)","Spell Gem (Invisibility (Mass))","Spell Gem (Mind Thrust (Level 6))","Spell Gem (Mystic Cure (Level 6))","Spell Gem (Mystic Cure (Mass)(Level 6))","Spell Gem (Planar Barrier)","Spell Gem (Planar Binding (Level 6))","Spell Gem (Plane Shift)","Spell Gem (Psychic Surgery)","Spell Gem (Regenerate)","Spell Gem (Resistant Armor (Greater))","Spell Gem (Rewire Flesh (Mass))","Spell Gem (Shadow Walk)","Spell Gem (Shadowy Fleet)","Spell Gem (Snuff Life)","Spell Gem (Subjective Reality)","Spell Gem (Suggestion (Mass))","Spell Gem (Sympathetic Vibration)","Spell Gem (Telepathic Jaunt)","Spell Gem (Terraform)","Spell Gem (True Seeing)","Spell Gem (Veil)","Spell Gem (Vision)","Spell Gem (Wall of Steel)"];

var spellAmpoule0 = ["Spell Ampoule (Stabilize)"];
var spellAmpoule1 = ["Spell Ampoule (Flight (Level 1))","Spell Ampoule (Keen Senses)","Spell Ampoule (Life Bubble)","Spell Ampoule (Mystic Cure (Level 1))","Spell Ampoule (Remove Condition (Lesser))"];
var spellAmpoule2 = ["Spell Ampoule (Darkvision)","Spell Ampoule (Flight (Level 2))","Spell Ampoule (Invisibility)","Spell Ampoule (Mystic Cure (Level 2))","Spell Ampoule (Remove Condition)","Spell Ampoule (Restoration (Lesser))","Spell Ampoule (Spider Climb)"];
var spellAmpoule3 = ["Spell Ampoule (Displacement)","Spell Ampoule (Flight (Level 3))","Spell Ampoule (Haste)","Spell Ampoule (Mystic Cure (Level 3))","Spell Ampoule (Nondetection)","Spell Ampoule (Remove Affliction)"];


var dieties = {
  "Abadar":	{
    "Description": "God of civilization, commerce, law, wealth",
    "Title": "the Master of the First Vault",
    "Symbol": "a golden key",
    "Align": "LN"
  },
  "Besmara":	{
    "Description": "Goddess of piracy, space monsters, strife",
    "Title": "the Pirate Queen",
    "Symbol": "a skull and crossbones",
    "Align": "CN"
  },
  "Damoritosh": {
    "Description": "God of conquest, duty, war",
    "Title": "the Conqueror",
    "Symbol": "a red doshko energy blades on a black field",
    "Align": "LE"
  },
  "Desna": {
    "Description": "Goddess of dreams, luck, stars, travelers",
    "Title": "the Song of the Spheres",
    "Symbol": "A butterfly with stars, suns, and moons on its wings",
    "Align": "CG"
  },
  "The Devourer": {
    "Description": "God of black holes, destruction, supernovas",
    "Title": "the Star-Eater",
    "Symbol": "a black hole, tinged with red",
    "Align": "CE"
  },
  "Eloritu": {
    "Description": "God of history, magic, secrets",
    "Title": "the Hidden Truth",
    "Symbol": "a glowing ring of magic runes",
    "Align": "TN	SOURCEPAGE:p.485"
  },
  "Hylax": {
    "Description": "Goddess of diplomacy, first contact, friendship, peace",
    "Title": "the Forever Queen",
    "Symbol": "a shirren head crowned with stars",
    "Align": "LG"
  },
  "Ibra": {
    "Description": "God of celestial bodies, the cosmos, mysteries of the universe",
    "Title": "the Inscrutable",
    "Symbol": "a circle and arrow containing a constellation",
    "Align": "N"
  },
  "Iomedae": {
    "Description": "Goddess of honorable battle, humanity, justice, valor",
    "Title": "the Spirit of Golarion",
    "Symbol": "a longsword surrounded by a sunburst",
    "Align": "LG"
  },
  "Lao Shu Po": {
    "Description": "Goddess of assassins, rats, spies, thieves",
    "Title": "Grandmother Rat",
    "Symbol": "a curled and emaciated rat",
    "Align": "NE"
  },
  "Nyarlathotep": {
    "Description": "Outer God of conspiracies, dangerous secrets, forbidden magic",
    "Title": "the Crawling Chaos",
    "Symbol": "an inverted black ankh",
    "Align": "CE"
  },
  "Oras": {
    "Description": "God of adaptation, evolution, natural selection",
    "Title": "the Agent of Change",
    "Symbol": "a double helix",
    "Align": "CN"
  },
  "Pharasma": {
    "Description": "Goddess of birth, death, fate, prophecy",
    "Title": "the Lady of Graves",
    "Symbol": "a cometlike spiral of energy",
    "Align": "N"
  },
  "Sarenrae": {
    "Description": "Goddess of healing, redemption, the sun",
    "Title": "the Dawnflower",
    "Symbol": "an angel with flaming wings",
    "Align": "NG"
  },
  "Talavet": {
    "Description": "Goddess of community, self-reliance, tradition",
    "Title": "the Storyteller",
    "Symbol": "an ancient kasathan sigil of community",
    "Align": "LN"
  },
  "Triune": {
    "Description": "God of artificial intelligence, computers, the Drift",
    "Title": "the All-Code",
    "Symbol": "three interlocking circles of computer code",
    "Align": "N"
  },
  "Urgathoa": {
    "Description": "Goddess of disease, gluttony, undeath",
    "Title": "the Pallid Princess",
    "Symbol": "a skull-backed fly or deaths head moth",
    "Align": "NE"
  },
  "Weydan": {
    "Description": "God of discovery, equality, exploration, freedom",
    "Title": "the Endless Horizon",
    "Symbol": "a starship heading into the unknown",
    "Align": "CG"
  },
  "Yaraesa": {
    "Description": "Goddess of knowledge, mental perfection, scholarship, science",
    "Title": "the Lady of Wisdom",
    "Symbol": "an atom with a brain as its nucleus",
    "Align": "NG"
  },
  "Zon-Kuthon": {
    "Description": "God of darkness, envy, loss, pain",
    "Title": "the Midnight Lord",
    "Symbol": "a skull with spiked chains through its eye sockets",
    "Align": "LE"
  }
}

var races = ["android","human","kasatha","lashunta","shirren","vesk","ysoki","dwarf","elf","gnome","half-elf","half-elf","halfling"];

var qualities = {
  "Academic" : "It is often easier to do research in this settlement, which is home to a large school, research facility, or great repository of knowledge.",
  "Bureaucratic" : "The settlement is a nightmarish, confusing, and frustrating maze of red tape and official paperwork.",
  "Cultured": "The settlement is well known for being a place where artistry thrives, such as a community of actors and musicians.",
  "Devout": "The settlement is devoted to a deity (which must be of the same alignment as the community) or follows a religious creed.",
  "Financial Center": "This settlement is home to large banks, trading houses, currency exchanges and other powerful financial and mercantile organizations.",
  "Insular": "The settlement is isolated, perhaps physically. Its citizens are fiercely loyal to one another, often making it difficult to learn secrets about them.",
  "Notorious": "The settlement has a reputation (deserved or not) for being a den of iniquity. It is usualy easier to procure illegal goods and services.",
  "Polluted": "The settlement's magical or high-tech industry has filled the ground and sky with disgusting pollution.",
  "Tech": {
    "Technologically Advanced": "The settlement produces and uses a level of technology that isn't widely seen elsewhere.",
    "Technologically Average": "The level of technology used by the settlement is similar to that found in the majority of other settlements.",
    "Technologically Underdeveloped": "The technology used by the settlement is less advanced than that found elsewhere.",
  },
  "In Recession": "The settlement is experiencing an economic downturn, usually resulting in higher unemployment rates.",
  "Profiteering": "The businesses of this settlement engage in unethical practices in order to make profits.",
  "Secret Location": "The settlement is concealed or hidden in some way, or its precise location is a closely guarded secret.",
  "Modular": "The compartmentalized nature of this settlement's construction allows for relatively easy and quick additions, renovations, and even physical rearrangement. It can also be used to physically seperate parts of the city for quarantine or security purposes",
  "Surrounded by the Past": "The citizens of the settlement live among the vestiges of their distant ancestors, though they can't usually take full advantage of such relics.",
  "Remote": "Reaching this settlement is very difficult, often requiring secret knowledge or very specialized skills.",
};

var cityBySize = {
    "empty":[
      "lost city",
      "ruined city",
      "decrepit space station",
      "missing starship",
      "abandoned township",
      "ancient orbital platform",
      "fallen space station"
    ],
    "tiny":[
      "farm",
      "village",
      "barracks",
      "lone tavern",
      "outpost",
      "research station",
      "camp site",
      "orbital platform",
      "hamlet",
      "fishing village",
      "cave dwelling",
      "asteroid base",
      "prison",
    ],
    "small":[
      "farming community",
      "town",
      "trading post",
      "terraforming platform",
      "barracks",
      "colony",
      "community",
      "biodome",
      "township",
      "outpost",
      "research station",
      "castle town",
      "orbital platform",
      "cave system",
      "fishing village",
      "tunnel system",
      "resort",
      "arcology",
      "military base",
      "asteroid base",
      "space station",
      "bubble-city",
      "flotilla",
      "mining town",
      "prison",
      "labour camp"
    ],
    "medium":[
      "spaceport",
      "trading post",
      "terraforming platform",
      "colony",
      "mining colony",
      "community",
      "occupied city",
      "biodome",
      "township",
      "large town",
      "castle town",
      "floating city",
      "underground city",
      "orbital platform",
      "treetop city",
      "underwater city",
      "cave system",
      "tunnel system",
      "suburb",
      "resort",
      "arcology",
      "port city",
      "colony ship",
      "military base",
      "asteroid base",
      "necroplis",
      "space station",
      "bubble-city",
      "floating city",
      "flotilla",
      "starship",
      "holy city",
    ],
    "large":[
      "city",
      "spaceport",
      "trading post",
      "colony",
      "mining colony",
      "occupied city",
      "biodome",
      "city state",
      "large city",
      "floating city",
      "underground city",
      "treetop city",
      "underwater city",
      "arcology",
      "megaplex",
      "port city",
      "metropolis",
      "colony ship",
      "necroplis",
      "space station",
      "bubble-city cluster",
      "flotilla",
      "starship",
      "holy city",
    ],
    "huge":[
      "megacity",
      "planetwide city",
      "city state",
      "large city",
      "megaplex",
      "metropolis",
      "bubble-city cluster",
      "deep space flotilla",
      "artificial planetoid",
      "planetary super weapon",
      "starship city",
      "dyson sphere",
    ],
};

var tavernGen = ["Tavern","Bar","Club","Dance Hall","Seedy Bar"]
var shopGen = ["Market","Armory","General Store","Data Storage","Computer Repair"]
var otherPlaceGen = ["Church","School of","Guard Post","Space Port","Data Center"]

var stores = {
  "Pharmacy": {
    "equipment":["Drugs Medicinals And Poisons","Healing Serum","Medical Gear"],
    "flavour": [
      "has enough stock to replenish your medical supplies",
      "has a large range of prescription only medications",
      "is owned by a pharmacist that will hand out any medication for a price",
      "has shelves upon shelves of hair products for every race",
      "is very popular among the aging population"
    ]
  },
  "Electronics Workshop": {
    "equipment":["Technological Items","Computers"],
    "flavour": [
      "has an owner that can fix just about anything given enough time",
    ]
  },
  "Computer Specialist": {
    "equipment":["Computers","Computer Countermeasures","Computer Modules","Upgrades"],
    "flavour": [
      "has an owner that can fix just about anything given enough time",
    ]
  },
  "Hypermarket": {
    "equipment":["Any"],
    "flavour": [
      "is having a promotion on 10,000 types of fruit",
      "only sells genectically modified protein paste",
      "has the galaxys largest range of foods",
      "has shelves upon shelves of types of cereal",
    ]
  },
  "Magical Item Store": {
    "equipment":["Magic Items","Hybrid Items","Spell Ampoules","Spell Gems"],
    "flavour": [
      "",
    ]
  },
  "Augmentation Clinic": {
    "equipment":["Augmentations"],
    "flavour": [
      "",
    ]
  },
  "Fabrication Hub": {
    "equipment":["Drugs Medicinals And Poisons"],
    "flavour": [
      "",
    ]
  },
  "Weapons Supply": {
    "equipment":["Small Arms","Longarms","Heavy Weapons","Sniper Weapons","Special Weapons","Grenades","Fusion Seals"],
    "flavour": [
      "",
    ]
  },
  "Armor Supply": {
    "equipment":["Light Armor","Heavy Armor","Armor Upgrades"],
    "flavour": [
      "",
    ]
  },
}

var placesOfInterest = {

  "Robo Repair": {
    "flavour": [
      "specialises is drone repair",
      "is filled with many junk bots that serve no real purpose",
    ]
  },

  "Warehouse": {
    "flavour": [
      "is a huge facility, yet empty",
      "has countless shelves spanning many kilometers",
      "is a small facility that many locals use",
    ]
  },
  "Legal Firm": {
    "flavour": [
      "is run by the shadiest legal team this side of the gap",
      "has an owner who only takes cases they know they can win",
    ]
  },
  "Religous Building": {
    "flavour": [
      "is seldom used anymore, the population has moved away from this deity",
      "is always full, people pay their respects at all times of the day",
      "is frequented by travellerers, some coming from different worlds to pay their respects here",
      "is bustling, the annual pilgrimage has begun",
      "seems empty, no one has been here in a log time",
      "has a huge statue as its centrepiece",
      "has its walls adorned by SX",
      "is met by a large set of doors decorated with SX",
      "has been destryed by a long forgotten crusade",
      "provides divine services if you have the credits",
      "displays a rich tapestry of SX",
      "has a hologram of SX in the middle of the building",
      "is hidden in an underground bunker accessible only with the right codes"
    ],
    "name":[
      "The church of DX",
      "The divine abbey of DX",
      "A small temple devoted to DX",
      "A large temple devoted to DX",
      "A secret following of DX",
      "A sanctuary for the followers of DX",
      "A shrine for the worship of DX",
      "A huge cathedral dedicated to DX"]
  },
  "Capsule Hotel": {
    "flavour": [
      "has rooms to cater to every race and religion",
    ]
  },
  "Data Storage": {
    "flavour": [
      "will keep your data secure in any event possible",
      "has data safety and retention plans for every person",
      "will take illegal data if you know the pass phrase",
      "can take an near infinite amount of data over its vast distrubution networks",
      "enforces triple terrabyte security phrases with 13 factor biometric authentification "
    ]
  },
  "Low Rent Housing Project": {
    "flavour": [
      "has every room packed with multiple families",
    ]
  },

  "Designated Starship Parking": {
    "flavour": [
      "is a large flat area of land with many waiting starships",
      "is a huge automated facility that parks and retrieves ship from underground",
    ]
  },
  "Fast Food Franchise": {
    "flavour": [
      "",
    ]
  },
  "Police Department": {
    "flavour": [
      "",
    ]
  },
  "College": {
    "flavour": [
      "",
    ]
  },
  "Government Building": {
    "flavour": [
      "",
    ]
  },
  "Hospital": {
    "flavour": [
      "",
    ]
  },

  "Luxury Apartments": {
    "flavour": [
      "",
    ]
  },
  "Media Company": {
    "flavour": [
      "",
    ]
  },
  "Starship Dealership": {
    "flavour": [
      "",
    ]
  },
  "Vehicle Rental": {
    "flavour": [
      "",
    ]
  },
  "VRcade": {
    "flavour": [
      "",
    ]
  },
  "Habitation Stack": {
    "flavour": [
      "",
    ]
  },
  "Nightclub bar etc": {
    "flavour": [
      "",
    ]
  },

  "Bulk Transport Company": {
    "flavour": [
      "",
    ]
  },
  "Coffe shop, cafe, Restaurant": {
    "flavour": [
      "",
    ]
  },
  "Bank": {
    "flavour": [
      "",
    ]
  },
  "Private Security": {
    "flavour": [
      "",
    ]
  }
}

var buildingFlavour = [
  "has extreme security protocols",
  "is decrepit and rundown",
  "is covered in graffiti",
  "looks newly renovated",
  "seems unusally busy",
  "seems very quiet",
  "has very little security",
  "is a front for criminal activity",
  "obscured by large holo ads",
  "was constructed by nanites",
  "looks like it has been fire damaged",
  "is covered in bright glyphs and graphics",
  "is constructed from plastic",
  "has an active anti-drone system",
  "requires weapons to be left at the door",
  "has a metal detector",
  "is members only",
  "has an AI system that greets people upon entry",
  "seems to be well guarded",
  "is on a street taken over by junkees",
  "has very unpleasent climate control",
  "appears to be self aware",
  "has an unusual smell",
  "is completely automated",
  "is family owned",
  "is soon to be demolished",
  "is very dim and dark inside",
  "is brightly lit",
  "has the music turned up too loud",
  "has an agressively enforced no parking zone out front",
  "the main entrance it closed, you need to go around the back",
  "has tinted windows",
  "is closed during the day",
  "has pristine white halls",
  "is dark and dirty",
  "can not be found on the infosphere",
  "you must scan your biometrics on entry",
  "the owner looks like they are armed",
  "is in an area plagued by violence"
]

var settlementFlavour = [
  "Is inhabited solely by refugees",
  "Has a gang problem",
  "Wouldn’t win any awards for cleanliness",
  "is overrun with rampant corruption ",
  "is packed with overly helpful Skittermander ",
  "Smells like oranges.",
  "Is home to an abstract religion.",
  "Is a front for a drug manufacturer.",
  "Is densely inhabited with Lashunta.",
  "Is run by a magical council .",
  "Is ruled by a maniacal arms dealer.",
  "Is infested by flying pests",
  "Is blanketed with dense haze",
  "Was thought lost to the ages",
  "Is corporate owned and funded",
  "Doesn’t show up in any maps or records",
  "Is festooned with “Danger” signs ",
  "Boasts they have the best ice cream parlor",
  "Is harder to find each time you visit"
]

var professions = ["Accountant","Actor","Archaeologist","Architect","Artist","Bounty Hunter","Comedian","Con Artist","Cook","Corporate Professional","Courtesan","Counselor","Dancer","Dockworker","Electrician","Farmer","Gambler","General Contractor","Herbalist","Lab Technician","Lawyer","Maintenance Worker","Manager","Mathematician","Mercenary","Merchant","Miner","Musician","Orator","Philosopher","Poet","Politician","Professor","Psychologist","Smuggler","Video Personality","Vidgamer","Writer"]


var namesEnd = ["dale", "moor", "ton","more","haunt","bed","s Landing","s End","rast", " Gate","rise", "town","bound","spire","winter","burg","bourne","water","fire","set", "shore", "ville", "ton", "sley"," End","dawn", "waters", "ridge", "sley", "age", "mere", "shire", "feld", "field", "wall", " Falls", "bury", "ford", "arm", " City", " Fork", "fall", "caster", "moor", "cliff", "sby", "chapel", "blight", " Falls", "bend", "hope", " Point"," Rise", "lone", "side", " Gate", "ham", "melt"];
var namesStart = ["Aeon","Aban","Ale","Ash","End","Bane","Nova","Atmos","Data","Mem","Dream","Ender","Radiation","Fable","Glory","Luna","Mag", "Chrono","Aura","Apollo","Nether","Ark","Alpha","Beta","Gamma","Lore","Enigma","Quiet","Neo","Snow","Awe","Wolf","Bear","Rain","Drought","Voyage","Glimmer","Glitter","Wind","Miracle","Moon","Birds","Necro","Ill","Lost","Crash","Light","Fools","Back","Kill","Cat","Dark","Dread","Ever","Hope","Ember","Happy","Dead","Dog","Dawn","Dire","Ditch","Dirt","Void","Demon","Angel","Cruel","Crumble","Somer","Cloud","Border","Break","Bliss","Doom","Water","Fire","Earth","Boom","Air","Metal","Space","Zero","Black","White","Blue","Red","Yellow","Purple","Green","Gray","Orbit","Rose","Outland","Elf","Dwarf","Beast","Pinoeer","Prism","Relic","Scout","Tech","Computer","Settler","Scout","Terra","Cosmo","Shere"]
var names = ["Aegis", "Olympus","Aeon","Miracle","Paradox","Anomaly","Alliance","Helios","Guardian","Memento","Hyperion","Inception","Infinity","Beacon","Genesis","Exposure","Curiosity","Fortuna","Eternity","Atlas","Atrophy","Beggar's End","Havoc", "Promise","Terminus","Seclusion","Serenity","Solitude","Remorse","Jericho","Hub","Nirvana","Pleasure","Paradise","Nemesis","Hope","Harmony","Misery","Karma","Carnage","Cavity","City of Dawn","Closure","Hazard","Deadline","Eden","Elysium","Eternity","Final","Forsaken","Valhalla","Titan","Tranquility","Vestige"]

var tavernPrefixes = [
'Angry','Arcane','Sidereal','Blackened','Blind','Bloody','Nanotech','Blushing','Augmented','Antigrav','Carved','Celestial','Chaotic','Charming','Concussive','Sentient','Crimson','Dancing','Dark','Deaf','Demonic','Dire','Dirty','Draconic','Dragon\'s','Drunken','Superluminal','Dull','Electric','Fighting','Filthy','Flaming','Flying','Forceful','Forged','Forgotten','Fractured','Frightened','Galactic','Golden','Happy','Hidden','Holy','Hungry','Interstellar','Invisible','Iron','Solar','Stellar','Joyful','Jumping','Keen','Robo','Cybernetic','Lawful','Lawless','Quantum','Autonomous','Sonic','Thermal','Lonely','Lost','Lucky','Metal',"Sapient",'Miniature','Terraformed','Monstrous','Mossy','Musty','Necrotic','Nervous','Old','Pious','Platinum','Cosmic','Polished','Celestial','Prone','Divine','Radiant','Raging','Rusty','Sad','Shining','Sleeping','Steel','Sultry','Sweet','Tiny','Toothless','Tranquil','Twisted','Unholy','Electrostatic','Unlucky','Unsoiled','Violent','Heavenly','White','Wicked','Winged','Wise','Wounded','Yawning',"Fusion"
]
var tavernSuffixes = [
'Logic','Angel','Anvil','Bullet','Doshko','Drifter','Beacon','Satellite','Droid','Blade','Starship','Star','Station','Chain','Moon','Circle','Cloak','Clover','Credit','Crowbar','Crown','Comet','Asteroid','Planet','Galaxy','Devil','Door','Dove','Dragon','Drow','Dwarf','Antimatter','Elemental','Soldier','Technomancer','Mystic','Operative','Mechanic','Databank','Solarian','Envoy','Drone','Robot','Longhammer','Lashunta','Kasathan','Ysoki','Vesk','Shirren','Android','Gnome','Goat','Goblin','Hag','Halfling','Hammer','Hoard','Jelly','King','Quasar','Pulsar','Lantern','Lemon','Lich','Blaster','Loot','Nova','Nebula','Laser','Melon','Nuar','Nail','Nightmare','Plasma','Ooze','Orb','Battery','Pitcher','Plate','Polyhedral','Datapad','Computer','Datacore','Queen','Constellation','Helmet','Respite','Rest','Ring','Robe','Rope','Sack','Spacer','Sanctum','Shadow','Ship','Slumber','Sphere','Generator','Force Field','Rocket','Stone','Sword','Armor','Jewel','Vortex','Blackhole','Railgun','Thruster','Tackle','Jump Jet','Tail','Titan','Shield','Grenade','Crew','Power Core','Circuit','Sensor','Jetpack','Singularity','Cargo','Trap','Tree','Triangle','Portal','Unicorn','Whistle','Wizard']

var fusionSeal = {
  "1": 120,
  "2": 360,
  "3": 440,
  "4": 680,
  "5": 720,
  "6": 1040,
  "7": 1560,
  "8": 2300,
  "9": 2600,
  "10": 3580,
  "11": 4880,
  "12": 6920,
  "13": 9760,
  "14": 11700,
  "15": 17800,
  "16": 27000,
  "17": 40500,
  "18": 60300,
  "19": 90000,
  "20": 135000
};

var indexCounter = 0;

String.prototype.toTitleCase = function() {
  return this.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function getPopulation(size) {
  var pop = 0;
  switch (size) {
    case "empty":
        pop = 0;
        break;
    case "tiny":
        pop = getRandomInt(2, 200);//two to two hundred
        break;
    case "small":
        pop = getRandomInt(200, 20000);//two hundred to twenty thousand
        pop = Math.round(pop/10)*10;
        break;
    case "medium":
        pop = getRandomInt(20000, 2000000);//twenty thousand to two million
        pop = Math.round(pop/100)*100;
        break;
    case "large":
        pop = getRandomInt(2000000, 200000000);//two million to two hundred million
        pop = Math.round(pop/1000)*1000;
        break;
    case "huge":
        pop = getRandomInt(200000000, 20000000000);//two hundred million to twenty billion
        pop = Math.round(pop/1000000)*1000000;
        break;
  }
  return pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");//add commas as necessary
;
}

function clearOutput() {
  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  indexCounter = 0;
}

function printPanel(alignment,population,type,government,qualities,item) {
  var $outputArea = $(".output.area").first();
  var storeOutput = $( "div.output.area" ).html();
  $outputArea.empty();

  indexCounter += 1;
  indexString = "index" + indexCounter.toString();

  var settlement = [];
  settlement.push(names.selectRandom());
  settlement.push(namesStart.selectRandom() + namesEnd.selectRandom());
  settlement.push(namesStart.selectRandom() + namesEnd.selectRandom());

  var panelTitle =  settlement.selectRandom();
  var panelBody =   "<p>" + alignment + " " + type +
                    "<br><b>Population </b>" + population +
                    "<br><b>Government </b>" + government.toLowerCase() +
                    "<br><b>Qualities </b>" + qualities.join(', ').toLowerCase() +
                    "<br><b>Maximum Item Level </b>" + item + "</p>";

  panelBody += getPlaceOfInterest(indexString + 'index' + item.slice(0, -2))

  $outputArea.append("<div class=\"panel " + indexString + "\">");
  var $panel = $(".panel."+indexString).first();
  $panel.append("<div class=\"panel-heading panel-bottom\"><h4>" + panelTitle + "</h4></div>");
  $panel.append("<div class=\"panel-body "+ indexString + "\">");
  var $index = $(".panel-body."+indexString).first();
  $index.append(panelBody);
  $index.append("<button type=\"button\" id=\""+indexString+"\"class=\"btn btn-default btn-sm btn-notblack pull-right\" onclick = \"removeEntry(this.id)\">Remove</button>");

  if (storeOutput != ""){
    $outputArea.append(storeOutput);
  }
}

function getPlaceOfInterest(index) {
  var place = Object.keys(stores).selectRandom()
  var indexString = place.replace(' ','-') + index
  console.log(indexString)
  var body = "<p><b>Places of Interest</b></p>"
  body += "<p>" + place + "</p>"
  body += "<button type=\"button\" id=\""+indexString+"\"class=\"btn btn-grn btn-sm\" onclick = \"rollInventory(this.id)\">Roll Inventory</button>"
  body += "<button style=\"margin-left: 10px\" type=\"button\" id=\""+indexString+"\"class=\"btn btn-default btn-notblack btn-sm\" onclick = \"clearInventory(this.id)\">Clear</button>"
  body += '<div class="' + indexString + '"></div>'
  return body
}

function clearInventory(index) {
  var $inventoryArea = $("."+index).first();
  $inventoryArea.empty();
}

function rollInventory(index) {
  indexparts = index.split("index")
  var $inventoryArea = $("."+index).first();
  $inventoryArea.empty();
  var store = indexparts[0].replace('-',' ') //0 is shop type

  //get equipment from categories
  var equipment = []
  var types = stores[store].equipment
  for (var i = 0;i<types.length;i++){
    for (item in equipmentData[types[i]]) {
      var currentItem = []
      currentItem[0] = item.toTitleCase().replace("Iii","III").replace("Ii","II").replace("Iv","IV").replace("Viii","VIII").replace("Vii","VII").replace("Vi","VI").replace("Fxprofession",randomChoice(professions));//name

      if (["Computer Countermeasures","Computer Modules","Computer Upgrades"].includes(types[i])){
        currentItem[3] = " ";//bulk
        currentItem[1] = "1"//level
        currentItem[4] = 'CRB ' + equipmentData[types[i]][item]['sourcepage'];//sourcepage
      } else {
        currentItem[1] = equipmentData[types[i]][item]['level']//level
        console.log(item)
        currentItem[4] = equipmentData[types[i]][item]['sourcebook'].toUpperCase() + ' ' + equipmentData[types[i]][item]['sourcepage'];//sourcepage
        if (["Augmentations","Computers"].includes(types[i])){
          currentItem[3] = " ";//bulk
        } else {
          currentItem[3] = equipmentData[types[i]][item]['bulk'];//bulk
        }
      }
      if (types[i].includes("Fusion Seal")){
        currentItem[2] = fusionSeal[currentItem[1]].toString();//fusion seal cost
      } else {
        currentItem[2] = equipmentData[types[i]][item]['cost'];//cost
      }
      //sub in spell names and add extra
      if (currentItem[0].includes("Spell Ampoule")){
        var copy1 = currentItem.slice(0);
        var copy2 = currentItem.slice(0);
        currentItem[0] = currentItem[0].replace("Spell Ampoule (Level 0)",randomChoice(spellAmpoule0)).replace("Spell Ampoule (Level 1)",randomChoice(spellAmpoule1)).replace("Spell Ampoule (Level 2)",randomChoice(spellAmpoule2)).replace("Spell Ampoule (Level 3)",randomChoice(spellAmpoule3));
        copy1[0] = copy1[0].replace("Spell Ampoule (Level 0)",randomChoice(spellAmpoule0)).replace("Spell Ampoule (Level 1)",randomChoice(spellAmpoule1)).replace("Spell Ampoule (Level 2)",randomChoice(spellAmpoule2)).replace("Spell Ampoule (Level 3)",randomChoice(spellAmpoule3));
        copy2[0] = copy2[0].replace("Spell Ampoule (Level 0)",randomChoice(spellAmpoule0)).replace("Spell Ampoule (Level 1)",randomChoice(spellAmpoule1)).replace("Spell Ampoule (Level 2)",randomChoice(spellAmpoule2)).replace("Spell Ampoule (Level 3)",randomChoice(spellAmpoule3));
        equipment.push(copy1);
        equipment.push(copy2);
      }
      if (currentItem[0].includes("Spell Gem")){
        var copy1 = currentItem.slice(0);
        var copy2 = currentItem.slice(0);
        currentItem[0] = currentItem[0].replace("Spell Gem (Level 0)",randomChoice(spellGems0)).replace("Spell Gem (Level 1)",randomChoice(spellGems1)).replace("Spell Gem (Level 2)",randomChoice(spellGems2)).replace("Spell Gem (Level 3)",randomChoice(spellGems3)).replace("Spell Gem (Level 4)",randomChoice(spellGems4)).replace("Spell Gem (Level 5)",randomChoice(spellGems5)).replace("Spell Gem (Level 6)",randomChoice(spellGems6));
        copy1[0] = copy1[0].replace("Spell Gem (Level 0)",randomChoice(spellGems0)).replace("Spell Gem (Level 1)",randomChoice(spellGems1)).replace("Spell Gem (Level 2)",randomChoice(spellGems2)).replace("Spell Gem (Level 3)",randomChoice(spellGems3)).replace("Spell Gem (Level 4)",randomChoice(spellGems4)).replace("Spell Gem (Level 5)",randomChoice(spellGems5)).replace("Spell Gem (Level 6)",randomChoice(spellGems6));
        copy2[0] = copy2[0].replace("Spell Gem (Level 0)",randomChoice(spellGems0)).replace("Spell Gem (Level 1)",randomChoice(spellGems1)).replace("Spell Gem (Level 2)",randomChoice(spellGems2)).replace("Spell Gem (Level 3)",randomChoice(spellGems3)).replace("Spell Gem (Level 4)",randomChoice(spellGems4)).replace("Spell Gem (Level 5)",randomChoice(spellGems5)).replace("Spell Gem (Level 6)",randomChoice(spellGems6));
        equipment.push(copy1);
        equipment.push(copy2);
      }
      equipment.push(currentItem);
    }
  }
  //keep only appropriate level items
  var equipmentLeveled = []
  var level = Number(indexparts[2])
  for (var i = 0; i < equipment.length; i++){
    if (Number(equipment[i][1]) <= level) {
      equipmentLeveled.push(equipment[i])
    }
  }
  console.log(equipmentLeveled)
  //get randomised inventory
  var inventory = []
  if (equipmentLeveled.length > 10) {
    while (inventory.length < 10) {
      inventory.push(equipmentLeveled.selectRandom())
    }
  } else {
    inventory = inventory.concat(equipmentLeveled);
  }
  var stripe = false;

  var table = "<div class=\"container table-responsive\"><table class=\"table table-striped\"><thead><tr><th>Inventory</th><th>Level</th><th>Cost</th><th>Bulk</th><th>Sourcepage</th></tr></thead><tbody>";
  for (var i = 0; i < inventory.length; i++){
    //stripe table
    if (stripe) {
      var stripeClass = ' class="success"';
    } else {
      var stripeClass = '';
    }
    stripe = !stripe
    table += "<tr" + stripeClass + "><td>"+inventory[i][0]+"</td><td>"+inventory[i][1]+"</td><td>"+inventory[i][2]+"</td><td>"+inventory[i][3]+"</td><td>"+inventory[i][4]+"</td></tr>";
  }
  table += "</tbody></table></div>";

  $inventoryArea.append(table)
}

function removeEntry(index) {
  $(".panel."+index).remove();
}

function sortNumber(a,b) {
    return b - a;
}

//removes the selected element from selected array
function removeElement(array,element) {

  var index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;

}

function popPercentages() {
  //split 100 into random sum parts
  var parts = 1;
  var maxparts = [2,3,4,5,6].selectRandom();
  var n = 100;
  var randomSumParts = [];
  while (n > 0) {
    parts += 1
    var s = Math.round(Math.random() * (n - 1)) + 1;
    randomSumParts.push(s);
    n -= s;
    if (parts == maxparts && n > 0){
      randomSumParts.push(n);
      n = 0;
    }
  }
  //sort array
  randomSumParts.sort(sortNumber);
  var otherPart = randomSumParts.selectRandom()
  randomSumParts = removeElement(randomSumParts,otherPart)
  randomSumParts.push(otherPart)

  //add string parts
  var possibleRaces = []
  possibleRaces = possibleRaces.concat(races)
  var popString = " ("
  for (var j = 0; j < randomSumParts.length - 1 ; j++) {
    var selectrace = possibleRaces.selectRandom()
    possibleRaces = removeElement(possibleRaces,selectrace)
    popString += randomSumParts[j].toString() + '% ' +selectrace +', '
  }
  popString += randomSumParts[randomSumParts.length - 1].toString() + '% other)'
  return popString
}

function generateSettlement() {

  //size & type
  var sizeDrop = $('#sizePicker').val().trim();
  var itemDrop = $('#itemPicker').val().trim().replace('Any max item level',["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th"].selectRandom());

  if (sizeDrop.includes("Any")) {
    var sizeKeys = Object.keys(cityBySize);
    var sizePick = sizeKeys.selectRandom();
  } else {
    var sizePick = sizeDrop.toLowerCase();
  }
  var randType = cityBySize[sizePick].selectRandom();

  //alignment
  var randAlign = alignment.selectRandom();

  //government
  var randGov = government.selectRandom();

  //qualities
  var qualNum = [1,2,3].selectRandom();
  var randQuals = [];
  var qualKeys = Object.keys(qualities);

  for(var i = 0; i < qualNum; i++) {
      var newQual = qualKeys.selectRandom();
      if (newQual == "Tech") {
        newQual = Object.keys(qualities.Tech).selectRandom()
      }
      if (!randQuals.includes(newQual)){
        randQuals.push(newQual);
      }
  }

  //population
  var randPop = 0;
  if (["lone tavern","camp site","farm"].includes(randType)) {
    randPop = getRandomInt(2, 20).toString();
    randPop += " (100% " + races.selectRandom() + ")"
  } else if (["planetwide city"].includes(randType)) {
    randPop = getRandomInt(20000000000, 2000000000000);
    randPop = Math.round(randPop/1000000000)*1000000000;
    randPop = randPop.toString() + popPercentages()
  } else {
    randPop = getPopulation(sizePick)
    if (Number(randPop.replace(/,/g , "")) > 20){
      randPop += popPercentages()
    } if (Number(randPop.replace(/,/g , "")) > 0) {
      randPop += " (100% " + races.selectRandom() + ")"
    }
  }


  //display
  printPanel(randAlign,randPop,randType,randGov,randQuals,itemDrop)

}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});
