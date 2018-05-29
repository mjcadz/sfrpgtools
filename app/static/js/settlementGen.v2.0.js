var government = ["Anarchy","Autocracy","Council","Magocracy","Military","Oligarchy","Secret Syndicate","Plutocracy","Utopia","True Democracy"];

var alignment = ["CG","NG","LG","CN","N","LN","CE","NE","LE"];

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

var wateringHole = {
  "prefixes": [
    'Angry','Arcane','Sidereal','Blackened','Blind','Bloody','Nanotech','Blushing','Augmented','Antigrav','Carved','Celestial','Chaotic','Charming','Concussive','Sentient','Crimson','Dancing','Dark','Deaf','Demonic','Dire','Dirty','Draconic','Dragon\'s','Drunken','Superluminal','Dull','Electric','Fighting','Filthy','Flaming','Flying','Forceful','Forged','Forgotten','Fractured','Frightened','Galactic','Golden','Happy','Hidden','Holy','Hungry','Interstellar','Invisible','Iron','Solar','Stellar','Joyful','Jumping','Keen','Robo','Cybernetic','Lawful','Lawless','Quantum','Autonomous','Sonic','Thermal','Lonely','Lost','Lucky','Metal',"Sapient",'Miniature','Terraformed','Monstrous','Mossy','Musty','Necrotic','Nervous','Old','Pious','Platinum','Cosmic','Polished','Celestial','Prone','Divine','Radiant','Raging','Rusty','Sad','Shining','Sleeping','Steel','Sultry','Sweet','Tiny','Toothless','Tranquil','Twisted','Unholy','Electrostatic','Unlucky','Unsoiled','Violent','Heavenly','White','Wicked','Winged','Wise','Wounded','Yawning',"Fusion"
  ],
  "suffixes": [
    'Logic','Angel','Anvil','Bullet','Doshko','Drifter','Beacon','Satellite','Droid','Blade','Starship','Star','Station','Chain','Moon','Circle','Cloak','Clover','Credit','Crowbar','Crown','Comet','Asteroid','Planet','Galaxy','Devil','Door','Dove','Dragon','Drow','Dwarf','Antimatter','Elemental','Soldier','Technomancer','Mystic','Operative','Mechanic','Databank','Solarian','Envoy','Drone','Robot','Longhammer','Lashunta','Kasathan','Ysoki','Vesk','Shirren','Android','Gnome','Goat','Goblin','Hag','Halfling','Hammer','Hoard','Jelly','King','Quasar','Pulsar','Lantern','Lemon','Lich','Blaster','Loot','Nova','Nebula','Laser','Melon','Nuar','Nail','Nightmare','Plasma','Ooze','Orb','Battery','Pitcher','Plate','Polyhedral','Datapad','Computer','Datacore','Queen','Constellation','Helmet','Respite','Rest','Ring','Robe','Rope','Sack','Spacer','Sanctum','Shadow','Ship','Slumber','Sphere','Generator','Force Field','Rocket','Stone','Sword','Armor','Jewel','Vortex','Blackhole','Railgun','Thruster','Tackle','Jump Jet','Tail','Titan','Shield','Grenade','Crew','Power Core','Circuit','Sensor','Jetpack','Singularity','Cargo','Trap','Tree','Triangle','Portal','Unicorn','Whistle','Wizard'
  ],
  "establishment": [
    "bar","spacer bar","nightclub","cantina","tavern","commissary","pub","atmo bar","intoxicant hall","speakeasy","live music venue"
  ],
  "flavour": [
    "is the seediest place in this quadrant",
    "has the best live shows in town",
    "has over 9000 types of intoxicants",
    "has a karaoke setup on the main stage",
    "was once ran by the mob, now run as a legitimate business; yet the patrons of the place are still shady outlaws",
    "doesn’t serve cocktails and their beer selection is rather slim, ranging from such cheap beers as Pappy’s Blue Rocket or Intergalactical Bohemian",
    "have a surprisingly fine selection of whiskeys, although the connoisseur will realize it’s the same whiskey just replaced in fancier bottles and with premium price tags"


  ]
};

var placeofWorship = {
  "flavour": [
    "is seldom used anymore, the population has moved away from this deity",
    "is always full, people pay their respects at all times of the day",
    "is frequented by travellerers, some coming from different worlds to pay their respects here",
    "is bustling, the annual pilgrimage has begun",
    "seems empty, no one has been here in a long time",
    "has a huge statue of SX as its centrepiece",
    "has its walls adorned by SX",
    "is met by a large set of doors decorated with SX",
    "has been destryed by a long forgotten crusade",
    "provides divine services if you have the credits",
    "displays a rich tapestry of SX",
    "has a hologram of SX in the middle of the building",
    "is hidden in an underground bunker accessible only with the right codes",
    "many screens in the entry show SX"
  ],
  "names": [
    "The church of DX",
    "The divine abbey of DX",
    "A small temple devoted to DX",
    "A large temple devoted to DX",
    "A secret following of DX",
    "A sanctuary for the followers of DX",
    "A shrine for the worship of DX",
    "A huge cathedral dedicated to DX"
  ]
};

var stores = {
  "Pharmacy": {
    "equipment":["Drugs Medicinals And Poisons","Healing Serum","Medical Gear"],
    "flavour": [
      "has enough stock to replenish your medical supplies",
      "has a large range of prescription only medications",
      "is owned by a pharmacist that will hand out any medication for a price",
      "has shelves upon shelves of hair products for every race",
      "looks to have been recently ransacked",
      "has a smell of disinfectant lingering near the entrance to the employee area"
    ],
    "names": [
      "Dans Pharmaceuticals",
      "Holistic Genomics",
      "Corner Cancer Cures",
      "Tricorder Emporium",
      "Patient Zero"
    ]
  },
  "Electronics Workshop": {
    "equipment":["Technological Items","Computers"],
    "flavour": [
      "has an owner that can fix just about anything given enough time",
      "is full of rare parts, in archive type part boxes, most of which the owner doesn’t know about",
      "crafts housebrand knock-offs at a discounted rate",
      "is very popular among the aging population",
      "has half completed projects lying all over the workshop"
    ],
    "names": [
      "Circuit Breakers",
      "Robotic Instruments",
      "The Rusty CPU",
      "Solid States",
      "System Analytics"
    ]
  },
  "Computer Specialist": {
    "equipment":["Computers","Computer Countermeasures","Computer Modules","Upgrades"],
    "flavour": [
      "has an owner that can fix just about anything given enough time",
      "obviously needs a new maintenance drone; lights flicker dimly overhead, & the aisles are filthy",
      "is filled with scattered AI cortexes",
      "specializes in portable datapad computers",
      "specializes in gaming computers"
    ],
    "names": [
      "Ultra Newegg",
      "Datamancers R Us",
      "Hackable Assets",
      "The Teraflop Shop",
      "The rogue AI"
    ]
  },
  "Hypermarket": {
    "equipment":["Augmentations", "Advanced Melee Weapons", "Ammunition", "Armor Upgrades", "Basic Melee Weapons", "Computer Countermeasures", "Computer Modules", "Computer Upgrades", "Computers", "Drugs Medicinals And Poisons", "Food And Drink", "Fusion Seals", "Grenades", "Heavy Armor", "Heavy Weapons", "Hybrid Items", "Light Armor", "Longarms", "Magic Items", "Personal Items", "Small Arms", "Sniper Weapons", "Solarion Weapon Crystals", "Special Ammunition", "Special Weapons", "Spell Ampoules", "Spell Gems", "Technological Items", "Healing Serum", "Medical Gear", "Trade Goods"],
    "flavour": [
      "is having a promotion on 10,000 types of fruit",
      "only sells genetically modified protein paste",
      "has the galaxy's largest range of foods",
      "has shelves upon shelves of many types of cereal",
      "is packed with the most annoying, pushy, salespeople"
    ],
    "names": [
      "The Central Market",
      "Space Bazaar",
      "Underground Market",
      "Black Market",
      "Exchange Hall"
    ]
  },
  "Magical Items Store": {
    "equipment":["Magic Items","Hybrid Items","Spell Ampoules","Spell Gems"],
    "flavour": [
      "has arcane trinkets and circuits for sale",
      "is filled with curios that look very old",
      "has very tall dusty shelves filled with strange items",
      "has the latest and greatest magic infused items",
      "is open about their magic use policies"
    ],
    "names": [
      "Wizards of the Coast",
      "The Mysticism Check",
      "Spell Slots Galore",
      "Level 7 Magic",
      "Reliable Arcane Goods"
    ]
  },
  "Augmentations Clinic": {
    "equipment":["Augmentations"],
    "flavour": [
      "has 10 different types of knee joints",
      "specializes in biotech",
      "specializes in cybernetics",
      "has a large range of cybernetics and biotech"
    ],
    "names": [
      "Body Recyclers",
      "The Second Hand Store",
      "Metal, Carbon, and Plastics Surgery",
      "Neils Bulk Surgery",
      "Executive Spares"
    ]
  },
  "Gun Store": {
    "equipment":["Small Arms","Longarms","Heavy Weapons","Sniper Weapons","Special Weapons","Grenades"],
    "flavour": [
      "will only sell to patrons with proper licensing",
      "holds regular open days to try out new weapons",
      "has a shooting range out back",
      "will let you hire weapons on a temporary basis",
      "specializes in grenades",
      "specializes in sniper weapons"
    ],
    "names": [
      "Barrels of Barrels",
      "The Hunters Mark",
      "Automatics Boutique",
      "The Chain Gun Store",
      "Reds Munitions"
    ]
  },
  "Melee Weapon Store": {
    "equipment":["Basic Melee Weapons","Advanced Melee Weapons"],
    "flavour": [
      "has just the basics, all you need for smashing slimes",
      "has restricted and military-grade equipment, but only sells to licensed individuals",
      "has restricted and military-grade equipment, and will sell to anyone for the right price",
      "holds regular open days to try out new weapons"
    ],
    "names": [
      "Bloodbath & Beyond",
      "The Pointy End",
      "Close Combat Pawnshop",
      "Blade & Bust",
      "Melee and More"
    ]
  },
  "Ammunition Store": {
    "equipment":["Ammunition","Special Ammunition"],
    "flavour": [
      "has the equipment to keep your weapons powered and armed",
      "has batteries guaranteed to keep charge for 200 years",
      "has ammo with shelf lives upwards of 50 years",
      "is guaranteed to have stock to fit your weapon",
      "has every type of battery available to the public and some that are not"
    ],
    "names": [
      "Batteries & Bullets",
      "Battery Barn",
      "Ballistic Supplies",
      "Jack Flaks"
    ]
  },
  "Upgrade Store": {
    "equipment":["Armor Upgrades","Fusion Seals","Solarion Weapon Crystals"],
    "flavour": [
      "sells upgrades that will make your equipment perform at its best",
      "has upgrades for any combat system",
      "will get your combat items ready for combat",
      "has the armor upgrades you seek",
      "specializes in weapon fusions"
    ],
    "names": [
      "Upgrade Hub",
      "Everyman Enhancements",
      "Boost Shack",
      "Ugly Upgrades",
      "The Fusion King"
    ]
  },
  "Armor Store": {
    "equipment":["Light Armor","Heavy Armor"],
    "flavour": [
      "has every kind of body plating",
      "specializes in heavy armor",
      "specializes in light armor",
      "will fit you out in a full environmental armored suit",
      "has the tough kind of synthesised plating"
    ],
    "names": [
      "The Armorer",
      "Pauls Plating",
      "Aegis Protections",
      "The Shield & Safeguard",
      "Kineticproof Vest"
    ]
  },
  "Armory": {
    "equipment":["Light Armor","Heavy Armor","Armor Upgrades","Fusion Seals","Solarion Weapon Crystals","Ammunition","Special Ammunition","Small Arms","Longarms","Heavy Weapons","Sniper Weapons","Special Weapons","Grenades","Basic Melee Weapons","Advanced Melee Weapons"],
    "flavour": [
      "carries all manner of items needed for combat",
      "stocks all manner of combat items, from armor to ammunition",
      "is a huge store with shelves full of stock",
      "is a store that specialises in all forms of combat items"
    ],
    "names": [
      "Artys Armory",
      "Navy Surplus",
      "Munitions Mega Store",
      "Gnome Depot"
    ]
  },
}

var placesOfInterest = {
  "Robo Repair": {
    "flavour": [
      "specialises is drone repair",
      "is filled with many junk bots that serve no real purpose",
      "has pallets of robot parts ready to be installed",
      "has large broken down security robots",
      "is a flying drone specialist repairer",
      "is a pact worlds certified repairer"
    ]
  },
  "Warehouse": {
    "flavour": [
      "is a huge facility, yet empty",
      "has countless shelves spanning many kilometers",
      "is a small facility that many locals use",
      "is a front for an Azlanti forward recon party",
      "regularly hosts rave parties",
      "was converted into art lofts. Most art students will live here and play on their synths until the early hours of the morning",
      "Is fully stocked with merchandise from a cancelled holo show"
    ]
  },
  "Legal Firm": {
    "flavour": [
      "is run by the shadiest legal team this side of the gap",
      "has an owner who only takes cases they know they can win",
      "specializes in Xenowarden overreach cases",
      "is completely messy with papers, books and binders scattered all around the office",
      "specializes in starship crash cases"
    ]
  },
  "Capsule Hotel": {
    "flavour": [
      "has rooms to cater to every race and religion",
      "is the owner of the largest heart shaped bed in the galaxy. Many people come from far far away to stay at the honeymoon suite, suitable for 40+ guests",
      "has the cheapest rooms available",
      "will upgrade you to a double capsule if you book on your birthday",
      "only charges you if you touch the bed"
    ]
  },
  "Data Storage": {
    "flavour": [
      "will keep your data secure in any event possible",
      "has data safety and retention plans for every person",
      "will take illegal data if you know the passphrase",
      "can take an near infinite amount of data over its vast distribution networks",
      "enforces triple terabyte security phrases with 13 factor biometric authentication "
    ]
  },
  "Low Rent Housing Project": {
    "flavour": [
      "has every room packed with multiple families",
      "is home to a lot of random races. Most notable is the surprisingly abundant amount of Gripli’s residing",
      "has streetball court next door",
      "has small rooms and smaller kitchens",
      "is only lived in by those who can't get out"
    ]
  },
  "Designated Starship Parking": {
    "flavour": [
      "is a large flat area of land with many waiting starships",
      "is a huge automated facility that parks and retrieves ship from underground",
      "it just a flat space of land, you'll have to walk the rest of the way",
      "has designated parking times, you will need to shift spaces soon",
      "is a multi floored facility mostly for long term parking"
    ]
  },
  "Fast Food Franchise": {
    "flavour": [
      "has genetically modified 'chicken wings' from some backwater blue planet",
      "specializes in cannibalistic delicacies",
      "named Crumb’s Crunchy Delights, takes care of the homeless population in the area",
      "has been mainly using bugs for it’s protein since the mass cow extinction of 2347 AD. The Shirren population boycotts such establishments",
      "has golden arches adorning every entryway"
    ]
  },
  "Police Department": {
    "flavour": [
      "protects the rich and serves the richer",
      "will take any case no matter how petty",
      "upholds the changing daily laws of the pact worlds",
      "doesn't have enough resources",
      "tackles future crime"
    ]
  },
  "College": {
    "flavour": [
      "has a bunch of holo courses popular among the middle aged",
      "is for the liberal art minds. The biggest courses are in music theory, taught by one of the last known bards in existence, Sir Elton John",
      "is one of the last remaining schools where people physically attend",
      "is completely hosted on the infosphere",
      "will only take applications from those who pass a secret test"
    ]
  },
  "Government Building": {
    "flavour": [
      "where the laws are made",
      "is constantly flooded with protestors",
      "is constantly under threat from local militia",
      "is open every hour of every day",
      "has robots patrolling every entrance"
    ]
  },
  "Hospital": {
    "flavour": [
      "is full of patients from a recent bio terror attack",
      "is run fully by robots. It’s never hard to get in",
      "sends birthing robots out to people's homes so they don't need to come in",
      "is a psychiatric hospital",
      "has a ER waiting list, it could takes days to get care"
    ]
  },

  "Luxury Apartments": {
    "flavour": [
      "is open to the public, if you have the credits",
      "has may famous personalities as tenants",
      "rents rooms weekly",
      "is about to be knocked down as no one can afford to live here",
      "will not even let non tenants on the street it is on"
    ]
  },
  "Media Company": {
    "flavour": [
      "is the local source of news and entertainment",
      "has a huge globe atop their massive building",
      "is rumored to have a super hero working as a reporter",
      "is the only place in the quadrant that still prints news",
      "sends a story to the infosphere every 60 milliseconds"
    ]
  },
  "Starship Dealership": {
    "flavour": [
      "can order you a new ship from their extensive catalog",
      "specializes in bulk haulers",
      "has a range of ships docked in orbit",
      "only sells luxury yachts",
      "does not sell ships with drift drives as per local regulations"
    ]
  },
  "Vehicle Rental": {
    "flavour": [
      "hires out hover bikes and hover cars",
      "only hires cars to vesk, they are the most careful",
      "has vehicle available with weapons attached",
      "has insurance that costs 5 times as much as the rental",
      "will not hire to halflings, last time was the final time."
    ]
  },
  "VRcade": {
    "flavour": [
      "has a catalog of millions of games and movies",
      "gamers can make credits here if they are good enough",
      "has a lounge that shows 3D romantic comedies every hour of every day",
      "is where most teens go to get adventuring out of their system",
      "is the most popular form of entertainment in the area"
    ]
  },
  "Habitation Stack": {
    "flavour": [
      "contains self sustaining habitation pods",
      "is full of some of the more smaller races",
      "goes higher than most can see",
      "has habitation pods that have been further subdivided by smaller species",
      "is perfect for sleeping but no room for any activities"
    ]
  },
  "Bulk Transport Company": {
    "flavour": [
      "can get your items from A to Galaxy 45-B7K",
      "is always looking for more drivers",
      "is a front for an illegal android trafficking business",
      "is a front for an illegal smuggling business",
      "will transport almost anything for the right amount of credits",
      "is completely clean and above board, they just ship things"

    ]
  },
  "Cafe": {
    "flavour": [
      "serves the strongest coffee fusion in the galaxy, it will keep you awake for years",
      "has the most inattentive and aloof staff, mainly young adults from the nearby college",
      "the tea cakes here are absolutely scrumptious",
      "over 10,000 types of tea can be synthesised here",
      "overlooks a nice park"
    ]
  },
  "Bank": {
    "flavour": [
      "is connected to a vast banking network offering near infinite credit",
      "offers quantum safe deposits; deposit it here, remove it from any of their 80 locations",
      "was once robbed weekly, now has 4 large security guards asking you to remove your glasses and hat before entering",
      "was the first bank to offer fleet loans to up and coming militaristic planets",
      "charges the rich extra fees and spreads the earnings among the poor"
    ]
  },
  "Shipyard": {
    "flavour": [
      "scraps old ships for credits",
      "is where derelict ships go to rot; a veritable graveyard of vessels sit out back",
      "secretly serves the Corpse Fleet",
      "could probably cobble together a space worthy ship from spare parts alone",
      "will clean and detail a ship until it looks brand new",
      "has ship parts and upgrades for sale"
    ]
  },
  "Private Security": {
    "flavour": [
      "scraps old ships for credits",
      "gets most of its business from the lenders and bankers in the area. Giving them mostly high dollar bodyguard jobs",
      "hires mainly exmilitary, from any military including the enemies military",
      "gets most of its business from surrounding stores",
      "only hires people taller than 7 feet",
      "has a reputation for 'beating' the competition"
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
  "is obscured by large holo ads",
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
  "is in an area plagued by violence",
  "has a fine decor",
  "has an odd, lingering, odor",
  "Has condemned spray painted on the outside",
  "Smells of old cheese",
  "Creaks with the slightest gust of wind",
  "Is covered in both aged and current missing persons posters",
  "Is covered in layers of aging paint",
  "Is beautifully adorned with intricate carvings",
  "Is brightly lit from the inside ",
  "Is painted entirely red",
  "Has a large ornate brass knocker on the front door",
  "Has only one entrance and exit",
  "Has a small starship landing pad on the roof",
  "Is covered in fast growing vines",
  "Smells like cookies on the inside",
  "Is well known in the community as a dangerous place",
  "Is rumored to be haunted",
  "is owned by a mega corp"

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

var namesEnd = ["dale", "moor", "ton","more","haunt","bed","s Landing","s End","rast", " Gate","rise", "town","bound","spire","winter","burg","bourne","water","fire","set", "shore", "ville", "ton", "sley"," End","dawn", "waters", "ridge", "sley", "age", "mere", "shire", "feld", "field", "wall", " Falls", "bury", "ford", "arm", " City", " Fork", "fall", "caster", "moor", "cliff", "sby", "chapel", "blight", " Falls", "bend", "hope", " Point"," Rise", "lone", "side", " Gate", "ham", "melt"];
var namesStart = ["Aeon","Aban","Ale","Ash","End","Bane","Nova","Atmos","Data","Mem","Dream","Ender","Radiation","Fable","Glory","Luna","Mag", "Chrono","Aura","Apollo","Nether","Ark","Alpha","Beta","Gamma","Lore","Enigma","Quiet","Neo","Snow","Awe","Wolf","Bear","Rain","Drought","Voyage","Glimmer","Glitter","Wind","Miracle","Moon","Birds","Necro","Ill","Lost","Crash","Light","Fools","Back","Kill","Cat","Dark","Dread","Ever","Hope","Ember","Happy","Dead","Dog","Dawn","Dire","Ditch","Dirt","Void","Demon","Angel","Cruel","Crumble","Somer","Cloud","Border","Break","Bliss","Doom","Water","Fire","Earth","Boom","Air","Metal","Space","Zero","Black","White","Blue","Red","Yellow","Purple","Green","Gray","Orbit","Rose","Outland","Elf","Dwarf","Beast","Pinoeer","Prism","Relic","Scout","Tech","Computer","Settler","Scout","Terra","Cosmo","Shere"]
var names = ["Aegis", "Olympus","Aeon","Miracle","Paradox","Anomaly","Alliance","Helios","Guardian","Memento","Hyperion","Inception","Infinity","Beacon","Genesis","Exposure","Curiosity","Fortuna","Eternity","Atlas","Atrophy","Beggar's End","Havoc", "Promise","Terminus","Seclusion","Serenity","Solitude","Remorse","Jericho","Hub","Nirvana","Pleasure","Paradise","Nemesis","Hope","Harmony","Misery","Karma","Carnage","Cavity","City of Dawn","Closure","Hazard","Deadline","Eden","Elysium","Eternity","Final","Forsaken","Valhalla","Titan","Tranquility","Vestige"]

var numOfShops = {
  "empty": 0,
  "tiny": 1,
  "small": 2,
  "medium": 3,
  "large": 5,
  "huge": 7
};

var indexCounter = 0;

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

function printPanel(alignment,population,type,government,qualities,item,size) {
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
  panelTitle = panelTitle.replace('tt','t').replace('ss','s')
  var panelBody =   "<p>" + alignment + " " + type +
                    "<br><b>Population </b>" + population +
                    "<br><b>Government </b>" + government.toLowerCase() +
                    "<br><b>Qualities </b>" + qualities.join(', ').toLowerCase() +
                    "<br><b>Maximum Item Level </b>" + item + "</p>";

  if (size != "empty"){
      panelBody += "<hr>";
  }

  var worshipDone = false;

  for (var i = 0; i < numOfShops[size]; i++){
    //only one place of worship
    var oneTwoThree = ["bar","shop","place"].concat(worshipDone ? [] : ["worship"]).selectRandom()
    switch(oneTwoThree) {
      case "bar":
        panelBody += genWateringHole()
        break;
      case "worship":
        panelBody += genPlaceOfWorship(alignment);
        worshipDone = true
        break;
      case "shop":
        panelBody += genStore(indexString + 'index' + item.slice(0, -2));
        break;
      case "place":
        panelBody += genPlaceOfInterest();
        break;

    }
  }

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

function genWateringHole() {

  var body = "<p><b>The " + wateringHole.prefixes.selectRandom() + " " + wateringHole.suffixes.selectRandom() + "</b><br>"
  body += "This " + wateringHole.establishment.selectRandom() + " " + wateringHole.flavour.selectRandom().toLowerCase() + " and " + buildingFlavour.selectRandom().toLowerCase() + "</p>"
  body += '<p></p>'
  return body
}

function genPlaceOfWorship(alignment) {
  var alignedDeities = []
  for (deity in dieties) {
    if (dieties[deity].Align == alignment) {
      alignedDeities.push(deity)
    }
  }
  var chosenDeity = alignedDeities.selectRandom()
  var name = [dieties[chosenDeity].Title+" (" + chosenDeity + ")",chosenDeity].selectRandom()
  var body = "<p><b>" + placeofWorship.names.selectRandom().replace('DX',name) + "</b><br>"
  body += "This place of worship " + placeofWorship.flavour.selectRandom().replace('SX',dieties[chosenDeity].Symbol).toLowerCase() + "</p>"
  body += '<p></p>'
  return body
}

function genStore(index) {
  var place = Object.keys(stores).selectRandom()
  var indexString = place.replace(/\s/g,'-') + index
  var body = "<p><b>" + stores[place].names.selectRandom() + "</b><br>"
  body += "This " + place.toLowerCase() + " " + stores[place].flavour.selectRandom().toLowerCase() + " and " + buildingFlavour.selectRandom().toLowerCase() + "</p>"
  body += '<p></p>'
  return body
}

function genPlaceOfInterest() {
  var place = Object.keys(placesOfInterest).selectRandom()
  var body = "<p><b>" +place + "</b><br>"
  body += "This " + place.toLowerCase() + " " + placesOfInterest[place].flavour.selectRandom().toLowerCase() + " and " + buildingFlavour.selectRandom().toLowerCase() + "</p>"
  body += '<p></p>'
  return body
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
  printPanel(randAlign,randPop,randType,randGov,randQuals,itemDrop,sizePick)

  ga('send', 'event', 'Generation', 'settlement', sizePick);

}

//runs when page is loaded
$( document ).ready(function() {
  //initialise pickers
  $('.selectpicker').selectpicker();
});
