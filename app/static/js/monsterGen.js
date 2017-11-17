//ÔÇô ÔÇÖ
var stepOneDescription = {
    "Combatant": "The <b>combatant</b> option is for an NPC that will primarily fight in physical combat, such as a bodyguard or a feral beast. Such NPCs represent significant threats on the field of battle. These attacks are often physical but they might also be strange supernatural abilities.",
    "Expert": "Pick the <b>expert</b> option for skilled enemies such as stealthy scouts or non-combatants such as merchants or advisors. Expert NPCs benefit from a wide array of skills, making them competent at specialized tasks such as sneaking or sabotage.",
    "Spellcaster": "Use the <b>spellcaster</b> option for any NPC whose main capabilities come from casting spells or using spell-like abilities. Spellcaster NPCs usually have the most unusual abilities."
}

//CR: EAC,	KAC,	Fort,	Ref,	Will,	Hit Points,	Ability DC	Base, Spell Dc,	Ability Score Modifiers,	Special Abilities,	Master Skills,	Good Skills
var combatantMainStats = {
    "1/3": ["10", "12", "+1", "+1", "+0", "6", "8", "8", "+3, +1, +0", "1", "+7 (1)", "+3 (2)"],
    "1/2": ["10", "12", "+2", "+2", "+0", "13", "9", "9", "+3, +2, +1", "1", "+9 (1)", "+4 (2)"],
    "1": ["11", "13", "+3", "+3", "+1", "20", "10", "9", "+4, +2, +1", "1", "+10 (1)", "+5 (2)"],
    "2": ["13", "15", "+4", "+4", "+1", "25", "11", "10", "+4, +2, +1", "2", "+12 (1)", "+7 (2)"],
    "3": ["14", "16", "+5", "+5", "+2", "40", "12", "11", "+4, +2, +1", "2", "+13 (1)", "+8 (2)"],
    "4": ["16", "18", "+6", "+6", "+3", "50", "13", "11", "+5, +3, +1", "2", "+15 (1)", "+10 (2)"],
    "5": ["17", "19", "+7", "+7", "+4", "70", "13", "11", "+5, +3, +2", "2", "+16 (1)", "+11 (2)"],
    "6": ["18", "20", "+8", "+8", "+5", "90", "14", "12", "+5, +3, +2", "2", "+18 (1)", "+13 (2)"],
    "7": ["19", "21", "+9", "+9", "+6", "105", "15", "13", "+5, +4, +2", "2", "+19 (1)", "+14 (2)"],
    "8": ["20", "22", "+10", "+10", "+7", "125", "16", "13", "+6, +4, +2", "2", "+21 (1)", "+16 (2)"],
    "9": ["22", "24", "+11", "+11", "+8", "145", "16", "13", "+6, +4, +3", "2", "+22 (1)", "+17 (2)"],
    "10": ["23", "25", "+12", "+12", "+9", "165", "17", "14", "+8, +5, +3", "2", "+24 (1)", "+19 (2)"],
    "11": ["24", "26", "+13", "+13", "+10", "180", "18", "14", "+8, +5, +3", "2", "+25 (1)", "+20 (2)"],
    "12": ["26", "28", "+14", "+14", "+11", "200", "19", "15", "+8, +5, +4", "3", "+27 (1)", "+22 (2)"],
    "13": ["27", "29", "+15", "+15", "+12", "225", "19", "15", "+8, +6, +4", "3", "+28 (1)", "+23 (2)"],
    "14": ["28", "30", "+16", "+16", "+12", "250", "20", "15", "+8, +6, +4", "3", "+30 (1)", "+25 (2)"],
    "15": ["29", "31", "+17", "+17", "+13", "275", "21", "16", "+9, +7, +5", "3", "+31 (1)", "+26 (2)"],
    "16": ["30", "32", "+18", "+18", "+14", "300", "22", "16", "+10, +7, +5", "3", "+33 (1)", "+28 (2)"],
    "17": ["31", "33", "+19", "+19", "+15", "340", "22", "16", "+11, +8, +5", "3", "+34 (1)", "+29 (2)"],
    "18": ["32", "34", "+19", "+19", "+16", "375", "23", "17", "+11, +8, +6", "4", "+36 (1)", "+31 (2)"],
    "19": ["33", "35", "+20", "+20", "+16", "415", "24", "18", "+11, +9, +6", "4", "+37 (1)", "+32 (2)"],
    "20": ["35", "37", "+21", "+21", "+17", "465", "25", "19", "+12, +9, +6", "4", "+39 (1)", "+34 (2)"],
    "21": ["36", "38", "+22", "+22", "+18", "500", "25", "19", "+12, +10, +7", "4", "+40 (1)", "+35 (2)"],
    "22": ["38", "40", "+22", "+22", "+18", "550", "26", "20", "+13, +10, +7", "4", "+42 (1)", "+37 (2)"],
    "23": ["39", "41", "+23", "+23", "+19", "600", "27", "21", "+13, +11, +7", "4", "+43 (1)", "+38 (2)"],
    "24": ["41", "43", "+24", "+24", "+20", "650", "28", "22", "+15, +11, +8", "4", "+45 (1)", "+40 (2)"],
    "25": ["42", "44", "+25", "+25", "+21", "700", "28", "22", "+15, +12, +8", "4", "+46 (1)", "+41 (2)"]
};
//CR	Attack Bonuses	Ranged Damage	Melee Damage
//High	Low	Energy	Kinetic	Standard	Three Attacks	Four Attacks
combatantAttackStats = {
    "1/3": ["+4", "+1", "1d4", "1d4", "1d6+Str", "-", "-"],
    "1/2": ["+6", "+3", "1d4", "1d6", "1d6+Str", "-", "-"],
    "1": ["+8", "+5", "1d4+1", "1d6+1", "1d6+1+Str", "-", "-"],
    "2": ["+10", "+7", "1d4+2", "1d6+2", "1d6+2+Str", "-", "-"],
    "3": ["+11", "+8", "1d4+3", "1d6+3", "1d6+3+Str", "-", "-"],
    "4": ["+12", "+9", "1d4+4", "1d6+4", "1d6+4+Str", "-", "-"],
    "5": ["+14", "+11", "1d6+5", "1d8+5", "1d6+5+Str", "-", "-"],
    "6": ["+16", "+13", "1d10+6", "2d6+6", "1d8+6+Str", "1d4+6+Str", "-"],
    "7": ["+17", "+14", "2d6+7", "2d8+7", "2d6+7+Str", "1d8+7+Str", "1d6+7+Str"],
    "8": ["+19", "+16", "2d8+8", "3d6+8", "3d4+8+Str", "1d10+8+Str", "1d6+8+Str"],
    "9": ["+21", "+18", "3d6+9", "5d4+9", "2d10+9+Str", "2d6+9+Str", "1d10+9+Str"],
    "10": ["+22", "+19", "2d10+10", "4d6+10", "2d10+10+Str", "3d4+10+Str", "1d10+10+Str"],
    "11": ["+23", "+20", "3d8+11", "3d10+11", "4d6+11+Str", "2d8+11+Str", "2d6+11+Str"],
    "12": ["+25", "+22", "6d4+12", "4d8+12", "6d4+12+Str", "3d6+12+Str", "3d4+12+Str"],
    "13": ["+26", "+23", "5d6+13", "6d6+13", "3d12+13+Str", "2d12+13+Str", "2d8+13+Str"],
    "14": ["+27", "+24", "3d12+14", "5d10+14", "8d6+14+Str", "4d8+14+Str", "4d6+14+Str"],
    "15": ["+28", "+25", "5d8+15", "8d6+15", "8d6+15+Str", "3d12+15+Str", "6d4+15+Str"],
    "16": ["+30", "+27", "7d6+16", "6d10+16", "6d10+16+Str", "5d8+16+Str", "3d10+16+Str"],
    "17": ["+31", "+28", "8d6+17", "6d12+17", "6d12+17+Str", "4d12+17+Str", "3d12+17+Str"],
    "18": ["+32", "+29", "6d10+18", "8d10+18", "13d6+18+Str", "8d6+18+Str", "5d8+18+Str"],
    "19": ["+33", "+30", "8d8+19", "9d10+19", "15d6+19+Str", "6d10+19+Str", "4d12+19+Str"],
    "20": ["+34", "+31", "12d6+20", "16d6+20", "11d10+20+Str", "6d12+20+Str", "8d6+20+Str"],
    "21": ["+35", "+32", "13d6+21", "18d6+21", "12d10+21+Str", "8d10+21+Str", "6d10+21+Str"],
    "22": ["+36", "+33", "12d8+22", "20d6+22", "21d6+22+Str", "9d10+22+Str", "8d8+22+Str"],
    "23": ["+37", "+34", "17d6+23", "14d10+23", "24d6+23+Str", "10d10+23+Str", "12d6+23+Str"],
    "24": ["+39", "+36", "10d12+24", "19d8+24", "14d12+24+Str", "11d10+24+Str", "13d6+24+Str"],
    "25": ["+40", "+37", "13d10+25", "14d12+25", "18d10+25+Str", "12d10+25+Str", "9d10+25+Str"]
};

//CR: EAC,	KAC,	Fort,	Ref,	Will,	Hit Points,	Ability DC	Base, Spell Dc,	Ability Score Modifiers,	Special Abilities,	Master Skills,	Good Skills
var expertMainStats = {
    "1/3": ["10", "11", "+0", "+0", "+2", "6", "10", "10", "+3, +1, +0", "1", "+7 (3)", "+3 (2)"],
    "1/2": ["10", "11", "+0", "+0", "+3", "12", "11", "11", "+3, +2, +1", "1", "+9 (3)", "+4 (2)"],
    "1": ["11", "12", "+1", "+1", "+4", "17", "12", "11", "+4, +2, +1", "1", "+10 (3)", "+5 (2)"],
    "2": ["13", "14", "+1", "+1", "+5", "23", "13", "12", "+4, +2, +1", "1", "+12 (3)", "+7 (2)"],
    "3": ["14", "15", "+2", "+2", "+6", "35", "14", "13", "+4, +2, +1", "2", "+13 (3)", "+8 (2)"],
    "4": ["16", "17", "+3", "+3", "+7", "45", "15", "13", "+5, +3, +1", "2", "+15 (3)", "+10 (2)"],
    "5": ["17", "18", "+4", "+4", "+8", "65", "15", "13", "+5, +3, +2", "2", "+16 (3)", "+11 (2)"],
    "6": ["18", "19", "+5", "+5", "+9", "80", "16", "14", "+5, +3, +2", "2", "+18 (3)", "+13 (2)"],
    "7": ["19", "20", "+6", "+6", "+10", "100", "17", "15", "+5, +4, +2", "2", "+19 (3)", "+14 (2)"],
    "8": ["20", "21", "+7", "+7", "+11", "115", "18", "15", "+6, +4, +2", "2", "+21 (3)", "+16 (2)"],
    "9": ["22", "23", "+8", "+8", "+12", "135", "18", "15", "+6, +4, +3", "2", "+22 (3)", "+17 (2)"],
    "10": ["23", "24", "+9", "+9", "+13", "150", "19", "16", "+8, +5, +3", "2", "+24 (3)", "+19 (2)"],
    "11": ["24", "25", "+10", "+10", "+14", "170", "20", "16", "+8, +5, +3", "2", "+25 (3)", "+20 (2)"],
    "12": ["26", "27", "+11", "+11", "+15", "185", "21", "17", "+8, +5, +4", "3", "+27 (3)", "+22 (2)"],
    "13": ["27", "28", "+12", "+12", "+16", "210", "21", "17", "+8, +6, +4", "3", "+28 (3)", "+23 (2)"],
    "14": ["28", "29", "+12", "+12", "+17", "235", "22", "17", "+8, +6, +4", "3", "+30 (3)", "+25 (2)"],
    "15": ["29", "30", "+13", "+13", "+18", "255", "23", "18", "+9, +7, +5", "3", "+31 (3)", "+26 (2)"],
    "16": ["30", "31", "+14", "+14", "+19", "280", "24", "18", "+10, +7, +5", "3", "+33 (3)", "+28 (2)"],
    "17": ["31", "32", "+15", "+15", "+20", "315", "24", "18", "+11, +8, +5", "3", "+34 (3)", "+29 (2)"],
    "18": ["32", "33", "+16", "+16", "+20", "350", "25", "19", "+11, +8, +6", "3", "+36 (3)", "+31 (2)"],
    "19": ["33", "34", "+16", "+16", "+21", "385", "26", "20", "+11, +9, +6", "4", "+37 (3)", "+32 (2)"],
    "20": ["35", "36", "+17", "+17", "+22", "430", "27", "21", "+12, +9, +6", "4", "+39 (3)", "+34 (2)"],
    "21": ["36", "37", "+18", "+18", "+23", "465", "27", "21", "+12, +10, +7", "4", "+40 (3)", "+35 (2)"],
    "22": ["38", "39", "+18", "+18", "+23", "500", "28", "22", "+13, +10, +7", "4", "+42 (3)", "+37 (2)"],
    "23": ["39", "40", "+19", "+19", "+24", "550", "29", "23", "+13, +11, +7", "4", "+43 (3)", "+38 (2)"],
    "24": ["41", "42", "+20", "+20", "+25", "600", "30", "24", "+15, +11, +8", "4", "+45 (3)", "+40 (2)"],
    "25": ["42", "43", "+21", "+21", "+26", "650", "30", "24", "+15, +12, +8", "4", "+46 (3)", "+41 (2)"]
};

//CR	Attack Bonuses	Ranged Damage	Melee Damage
//High	Low	Energy	Kinetic	Standard	Three Attacks	Four Attacks
expertAttackStats = {
    "1/3": ["+2", "+0", "1d4", "1d4", "1d4+Str", "-", "-"],
    "1/2": ["+4", "+2", "1d4", "1d4", "1d4+Str", "-", "-"],
    "1": ["+6", "+4", "1d4+1", "1d4+1", "1d4+1+Str", "-", "-"],
    "2": ["+8", "+6", "1d4+2", "1d4+2", "1d4+2+Str", "-", "-"],
    "3": ["+9", "+7", "1d4+3", "1d4+3", "1d4+3+Str", "-", "-"],
    "4": ["+10", "+8", "1d4+4", "1d4+4", "1d4+4+Str", "-", "-"],
    "5": ["+12", "+10", "1d4+5", "1d6+5", "1d4+5+Str", "-", "-"],
    "6": ["+14", "+12", "1d6+6", "1d8+6", "1d6+6+Str", "1d4+6+Str", "-"],
    "7": ["+15", "+13", "1d8+7", "1d12+7", "1d8+7+Str", "1d4+7+Str", "1d4+7+Str"],
    "8": ["+17", "+15", "1d10+8", "2d6+8", "1d12+8+Str", "1d8+8+Str", "1d4+8+Str"],
    "9": ["+19", "+17", "2d6+9", "2d8+9", "3d4+9+Str", "1d10+9+Str", "1d6+9+Str"],
    "10": ["+20", "+18", "3d4+10", "2d8+10", "2d8+10+Str", "1d10+10+Str", "1d8+10+Str"],
    "11": ["+21", "+19", "2d8+11", "2d10+11", "2d10+11+Str", "3d4+11+Str", "1d10+11+Str"],
    "12": ["+23", "+21", "2d8+12", "2d10+12", "2d12+12+Str", "3d4+12+Str", "1d12+12+Str"],
    "13": ["+24", "+22", "2d10+13", "4d6+13", "6d4+13+Str", "3d6+13+Str", "3d4+13+Str"],
    "14": ["+25", "+23", "5d4+14", "4d8+14", "6d6+14+Str", "4d6+14+Str", "3d6+14+Str"],
    "15": ["+26", "+24", "4d6+15", "6d6+15", "5d8+15+Str", "6d4+15+Str", "2d10+15+Str"],
    "16": ["+28", "+26", "6d4+16", "5d8+16", "6d8+16+Str", "4d8+16+Str", "3d8+16+Str"],
    "17": ["+29", "+27", "4d8+17", "4d12+17", "8d6+17+Str", "3d12+17+Str", "6d4+17+Str"],
    "18": ["+30", "+28", "3d12+18", "8d6+18", "8d8+18+Str", "5d8+18+Str", "4d8+18+Str"],
    "19": ["+31", "+29", "5d8+19", "6d10+19", "9d8+19+Str", "6d8+19+Str", "3d12+19+Str"],
    "20": ["+32", "+30", "4d12+20", "8d8+20", "13d6+20+Str", "9d6+20+Str", "5d8+20+Str"],
    "21": ["+33", "+31", "8d6+21", "6d12+21", "15d6+21+Str", "10d6+21+Str", "4d12+21+Str"],
    "22": ["+34", "+32", "6d10+22", "8d10+22", "17d6+22+Str", "6d12+22+Str", "8d6+22+Str"],
    "23": ["+35", "+33", "8d8+23", "13d6+23", "12d10+23+Str", "8d10+23+Str", "6d10+23+Str"],
    "24": ["+37", "+35", "9d8+24", "15d6+24", "21d6+24+Str", "9d10+24+Str", "8d8+24+Str"],
    "25": ["+38", "+36", "8d10+25", "16d6+25", "12d12+25+Str", "15d6+25+Str", "6d12+25+Str"]
};


//CR: EAC,	KAC,	Fort,	Ref,	Will,	Hit Points,	Ability DC	Base, Spell Dc,	Ability Score Modifiers,	Special Abilities,	Master Skills,	Good Skills
var spellcasterMainStats = {
    "1/3": ["9", "10", "+0", "+0", "+2", "5", "10", "12", "+3, +1, +0", "1", "+7 (2)", "+3 (1)"],
    "1/2": ["9", "10", "+0", "+0", "+3", "11", "11", "13", "+3, +2, +1", "1", "+9 (2)", "+4 (1)"],
    "1": ["10", "11", "+1", "+1", "+4", "16", "12", "13", "+4, +2, +1", "1", "+10 (2)", "+5 (1)"],
    "2": ["12", "13", "+1", "+1", "+5", "21", "13", "14", "+4, +2, +1", "2", "+12 (2)", "+7 (1)"],
    "3": ["13", "14", "+2", "+2", "+6", "32", "14", "15", "+4, +2, +1", "2", "+13 (2)", "+8 (1)"],
    "4": ["15", "16", "+3", "+3", "+7", "43", "15", "15", "+5, +3, +1", "2", "+15 (2)", "+10 (1)"],
    "5": ["16", "17", "+4", "+4", "+8", "60", "15", "15", "+5, +3, +2", "2", "+16 (2)", "+11 (1)"],
    "6": ["17", "18", "+5", "+5", "+9", "75", "16", "16", "+5, +3, +2", "2", "+18 (2)", "+13 (1)"],
    "7": ["18", "19", "+6", "+6", "+10", "90", "17", "17", "+5, +4, +2", "2", "+19 (2)", "+14 (1)"],
    "8": ["19", "20", "+7", "+7", "+11", "105", "18", "17", "+6, +4, +2", "2", "+21 (2)", "+16 (1)"],
    "9": ["21", "22", "+8", "+8", "+12", "120", "18", "17", "+6, +4, +3", "2", "+22 (2)", "+17 (1)"],
    "10": ["22", "23", "+9", "+9", "+13", "140", "19", "18", "+8, +5, +3", "2", "+24 (2)", "+19 (1)"],
    "11": ["23", "24", "+10", "+10", "+14", "155", "20", "18", "+8, +5, +3", "2", "+25 (2)", "+20 (1)"],
    "12": ["25", "26", "+11", "+11", "+15", "170", "21", "19", "+8, +5, +4", "3", "+27 (2)", "+22 (1)"],
    "13": ["26", "27", "+12", "+12", "+16", "190", "21", "19", "+8, +6, +4", "3", "+28 (2)", "+23 (1)"],
    "14": ["27", "28", "+12", "+12", "+17", "215", "22", "19", "+8, +6, +4", "3", "+30 (2)", "+25 (1)"],
    "15": ["28", "29", "+13", "+13", "+18", "235", "23", "20", "+9, +7, +5", "3", "+31 (2)", "+26 (1)"],
    "16": ["29", "30", "+14", "+14", "+19", "255", "24", "20", "+10, +7, +5", "3", "+33 (2)", "+28 (1)"],
    "17": ["30", "31", "+15", "+15", "+20", "285", "24", "20", "+11, +8, +5", "3", "+34 (2)", "+29 (1)"],
    "18": ["31", "32", "+16", "+16", "+20", "320", "25", "21", "+11, +8, +6", "4", "+36 (2)", "+31 (1)"],
    "19": ["32", "33", "+16", "+16", "+21", "350", "26", "22", "+11, +9, +6", "4", "+37 (2)", "+32 (1)"],
    "20": ["34", "35", "+17", "+17", "+22", "395", "27", "23", "+12, +9, +6", "4", "+39 (2)", "+34 (1)"],
    "21": ["35", "36", "+18", "+18", "+23", "425", "27", "23", "+12, +10, +7", "4", "+40 (2)", "+35 (1)"],
    "22": ["37", "38", "+18", "+18", "+23", "470", "28", "24", "+13, +10, +7", "4", "+42 (2)", "+37 (1)"],
    "23": ["38", "39", "+19", "+19", "+24", "510", "29", "25", "+13, +11, +7", "4", "+43 (2)", "+38 (1)"],
    "24": ["40", "41", "+20", "+20", "+25", "550", "30", "26", "+15, +11, +8", "4", "+45 (2)", "+40 (1)"],
    "25": ["41", "42", "+21", "+21", "+26", "600", "30", "26", "+15, +12, +8", "4", "+46 (2)", "+41 (1)"]
};

//CR	Attack Bonuses	Ranged Damage	Melee Damage
//High	Low	Energy	Kinetic	Standard	Three Attacks	Four Attacks
spellcasterAttackStats = {
    "1/3": ["+0", "-2", "1d4", "1d4", "1d4+Str", "-", "-"],
    "1/2": ["+2", "+0", "1d4", "1d4", "1d4+Str", "-", "-"],
    "1": ["+4", "+2", "1d4+1", "1d4+1", "1d4+1+Str", "-", "-"],
    "2": ["+6", "+4", "1d4+2", "1d4+2", "1d4+2+Str", "-", "-"],
    "3": ["+7", "+5", "1d4+3", "1d4+3", "1d4+3+Str", "-", "-"],
    "4": ["+8", "+6", "1d4+4", "1d4+4", "1d4+4+Str", "-", "-"],
    "5": ["+10", "+8", "1d4+5", "1d6+5", "1d4+5+Str", "-", "-"],
    "6": ["+12", "+10", "1d6+6", "1d8+6", "1d6+6+Str", "1d4+6+Str", "-"],
    "7": ["+13", "+11", "1d8+7", "1d12+7", "1d8+7+Str", "1d4+7+Str", "1d4+7+Str"],
    "8": ["+15", "+13", "1d10+8", "2d6+8", "1d12+8+Str", "1d8+8+Str", "1d4+8+Str"],
    "9": ["+17", "+15", "2d6+9", "2d8+9", "3d4+9+Str", "1d10+9+Str", "1d6+9+Str"],
    "10": ["+18", "+16", "3d4+10", "2d8+10", "2d8+10+Str", "1d10+10+Str", "1d8+10+Str"],
    "11": ["+19", "+17", "2d8+11", "2d10+11", "2d10+11+Str", "3d4+11+Str", "1d10+11+Str"],
    "12": ["+21", "+19", "2d8+12", "2d10+12", "2d12+12+Str", "3d4+12+Str", "1d12+12+Str"],
    "13": ["+22", "+20", "2d10+13", "4d6+13", "6d4+13+Str", "3d6+13+Str", "3d4+13+Str"],
    "14": ["+23", "+21", "5d4+14", "4d8+14", "6d6+14+Str", "4d6+14+Str", "3d6+14+Str"],
    "15": ["+24", "+22", "4d6+15", "6d6+15", "5d8+15+Str", "6d4+15+Str", "2d10+15+Str"],
    "16": ["+26", "+24", "6d4+16", "5d8+16", "6d8+16+Str", "4d8+16+Str", "3d8+16+Str"],
    "17": ["+27", "+25", "4d8+17", "4d12+17", "8d6+17+Str", "3d12+17+Str", "6d4+17+Str"],
    "18": ["+28", "+26", "3d12+18", "8d6+18", "8d8+18+Str", "5d8+18+Str", "4d8+18+Str"],
    "19": ["+29", "+27", "5d8+19", "6d10+19", "9d8+19+Str", "6d8+19+Str", "3d12+19+Str"],
    "20": ["+30", "+28", "4d12+20", "8d8+20", "13d6+20+Str", "9d6+20+Str", "5d8+20+Str"],
    "21": ["+31", "+29", "8d6+21", "6d12+21", "15d6+21+Str", "10d6+21+Str", "4d12+21+Str"],
    "22": ["+32", "+30", "6d10+22", "8d10+22", "17d6+22+Str", "6d12+22+Str", "8d6+22+Str"],
    "23": ["+33", "+31", "8d8+23", "13d6+23", "12d10+23+Str", "8d10+23+Str", "6d10+23+Str"],
    "24": ["+35", "+33", "9d8+24", "15d6+24", "21d6+24+Str", "9d10+24+Str", "8d8+24+Str"],
    "25": ["+36", "+34", "8d10+25", "16d6+25", "12d12+25+Str", "15d6+25+Str", "6d12+25+Str"]
};


creatureType = {
    "Aberration": ["An <b>aberration</b> has a bizarre anatomy, strange abilities, an alien mindset, or any combination of the three.", "Traits: Darkvision 60 ft.", "Adjustments: +2 to Will saving throws."],
    "Animal": ["An <b>animal</b> is a living, nonhumanoid creature, usually a vertebrate with no magical abilities and no innate capacity for language or culture.", "Traits: Low-light vision; set Intelligence modifier to -4 or -5.", "Adjustments: +2 to Fortitude and Reflex saving throws."],
    "Construct": ["A <b>construct</b> is a magically animated object or an artificially created creature.", "Traits: Darkvision 60 ft., low-light vision, construct immunities, unliving; set Constitution modifier to -; must have either the magical or technological subtype; if the construct is mindless, set Intelligence modifier to - and add mindless.", "Adjustments: -2 to all saving throws, +1 to attack rolls."],
    "Dragon": ["A <b>dragon</b> is a reptilian creature, usually winged, with magical or otherwise unusual abilities.", "Traits: Darkvision 60 ft., low-light vision, immunity to paralysis and sleep.", "Adjustments: +2 to all saving throws, +1 to attack rolls."],
    "Fey": ["A <b>fey</b> is a creature with supernatural abilities and connections to nature or to some other force or place.", "Traits: Low-light vision.", "Adjustments: +2 to Fortitude and Reflex saving throws, -1 to attack rolls."],
    "Humanoid": ["A <b>humanoid</b> usually has two arms, two legs, and one head, or it has a humanlike torso, arms, and a head. Humanoids have few or no supernatural or extraordinary abilities, but most can speak and usually have well-developed societies.", "Traits: Must have a subtype that matches its race (such as human, lashunta, or shirren) or that is related to its race (such as goblinoid).", "Adjustments: +2 to one type of saving throw."],
    "Magical Beast": ["<b>Magical beasts</b> are similar to animals but can have Intelligence modifiers greater than -4 (in which case the magical beast knows at least one language, though it can't necessarily speak). Magical beasts usually have supernatural or extraordinary abilities.", "Traits: Darkvision 60 ft., low-light vision.", "Adjustments: +2 to Fortitude and Reflex saving throws, +1 to attack rolls."],
    "Monstrous Humanoid": ["<b>Monstrous humanoids</b> are similar to humanoids, but they have monstrous or animalistic features. They often have magical abilities as well.", "Traits: Darkvision 60 ft.", "Adjustments: +2 to Reflex and Will saving throws, +1 to attack rolls."],
    "Ooze": ["An <b>ooze</b> is an amorphous or mutable creature.", "Traits: Blindsight, mindless, ooze immunities, sightless; set Intelligence modifier to -.", "Adjustments: +2 to Fortitude saving throws, -2 to Reflex and Will saving throws, no master or good skills unless the creature would have them naturally, rather than through training."],
    "Outsider": ["An <b>outsider</b> is at least partially composed of the essence (but not necessarily the material) of a plane other than the Material Plane. Some creatures start out as another type and become outsiders when they attain a higher or lower state of spiritual existence.", "Traits: Darkvision 60 ft.; if the outsider is a member of a specific race (such as angel, devil, etc.), it must have a subtype to match its race.", "Adjustments: +2 to one type of saving throw, +1 to attack rolls."],
    "Plant": ["The <b>plant</b> type describes vegetable creatures. Note that regular plants, such as those growing in gardens or fields, lack Wisdom and Charisma modifiers and are objects, not creatures, even though they are alive.", "Traits: Low-light vision, plant immunities.", "Adjustments: +2 to Fortitude saving throws."],
    "Undead": ["<b>Undead</b> are once-living creatures animated by magic or advanced technological forces.", "Traits: Darkvision 60 ft., undead immunities, unliving; set Constitution modifier to -.", "Adjustments: +2 to Will saving throws."],
    "Vermin": ["This type includes insects, arachnids, other arthropods, worms, and similar invertebrates.","Traits: Darkvision 60 ft.,mindless; set Intelligence modifier to -.","Adjustments: +2 to Fortitude saving throws."]
};

creatureSubType = {
    "Aeon": ["Aeons are a race of neutral outsiders who maintain the balance of reality.", "Traits: Immunity to cold, critical hits, and poison; resistance 10 to electricity and fire; bonus equal to CR to skill checks to recall knowledge; extension of all (see below), telepathy 100 ft. (non-verbal).", "Extension of All (Ex): Aeons can communicate telepathically with other aeons over vast distances. This ability works even across planes, albeit less effectively, allowing the communication of only vague impressions and feelings."],
    "Agathion": ["Agathions are celestials, or good outsiders, native to Nirvana.", "Traits: Low-light vision; +4 to saving throws against poison; immunity to electricity and petrification; resistance 10 to cold and sonic; healing channel (as per the healer mystic connection power); truespeech; speak with animals (as per the xenodruid mystic connection power)."],
    "Air": ["This subtype is usually applied to outsiders with a connection to the Plane of Air.", "Traits: Supernatural fly speed, usually with perfect maneuverability; gains Acrobatics as a master or good skill."],
    "Android": ["This subtype is applied to androids and creatures related to androids.", "Traits: Most creatures with this subtype gain darkvision 60 ft. and low-light vision; if the NPC is of the android race, it also gains the constructed, flat affect, and upgrade slot racial traits."],
    "Angel": ["Angels are celestials, or good outsiders, native to the good-aligned Outer Planes.", "Traits: Darkvision 60 ft.; low-light vision; protective aura (see below); +4 to saving throws against poison; immunity to acid, cold, and petrification; resistance 10 to electricity and fire; truespeech.", "Protective Aura (Su): For angels of CR 3 to CR 15, this ability grants creatures within the aura (usually 20 feet), including the angel, a divine bonus (usually +2) to AC against attacks made by evil creatures and a divine bonus (usually +4) to saving throws against effects created by evil creatures. The protective aura of a more powerful or a weaker angel might grant a larger or smaller bonus and have a larger or smaller radius, respectively."],
    "Aquatic": ["These creatures are often native to environments that are mostly or entirely underwater.", "Traits: Swim speed, water breathing, Athletics as a master or good skill; if it can breathe air, it also gains the amphibious special ability."],
    "Archon": ["Archons are celestials, or good outsiders, native to Heaven.", "Traits: Darkvision 60 ft.; low-light vision; aura of menace (see below); +4 to saving throws against poison; immunity to electricity and petrification; truespeech; many archons can cast teleport as an at-will spell-like ability (caster level equal to its CR).", "Aura of Menace (Su): This ability imposes a divine penalty (usually -2) to the AC, attacks, and saving throws of each hostile creature within the aura (usually 20 feet) that fails a Will save. This penalty lasts for 24 hours or until that creature deals damage to the archon who generated the aura. A creature that has resisted or broken the effect can't be affected again by the same archon's aura for 24 hours. The aura of a more powerful or weaker archon might impose a larger or smaller penalty and might have a larger or smaller radius, respectively."],
    "Azata": ["Azatas are celestials, or good outsiders, native to Elysium.", "Traits: Darkvision 60 ft., low-light vision; immunity to electricity and petrification; resistance 10 to cold and fire; truespeech."],
    "Cold": ["Creatures with this subtype are usually native to frigid environments.", "Traits: Immunity to cold; vulnerable to fire."],
    "Daemon": ["Daemons are fiends, or evil outsiders, native to Abaddon.", "Traits: Immunity to acid, death effects, disease, and poison; resistance 10 to cold, electricity, and fire; gains ability to summon allies; telepathy."],
    "Demon": ["Demons are fiends, or evil outsiders, native to the Abyss.", "Traits: Immunity to electricity and poison; resistance 10 to acid, cold, and fire; gains ability to summon allies; telepathy."],
    "Devil": ["Devils are fiends, or evil outsiders, native to Hell.", "Traits: See in darkness; immunity to fire and poison; resistance 10 to acid and cold; gains ability to summon allies; telepathy."],
    "Dwarf": ["This subtype is applied to dwarves and creatures related to dwarves.", "Traits: Most creatures with this subtype gain darkvision 60 ft.; if the NPC is of the dwarven race, it also gains the slow but steady, stonecunning, traditional enemies, and weapon familiarity racial traits."],
    "Earth": ["This subtype is usually applied to outsiders with a connection to the Plane of Earth.", "Traits: Burrow speed; blindsense or blindsight (vibration) with a varied range."],
    "Elemental": ["An elemental is a creature composed entirely of matter from one of the four Elemental Planes.", "Traits: Elemental immunities."],
    "Elf": ["This subtype is applied to elves and creatures related to elves.", "Traits: Most creatures with this subtype gain low-light vision and gain Perception as an additional master skill; if the NPC is of the drow race, it gains darkvision 60 ft. instead of low-light vision, as well as the drow immunities, drow magic, and light blindness racial traits; if the NPC is of the elven race, it gains the elven immunities and elven magic racial traits and Mysticism as a master skill; if the NPC is of the half-elven race, it gains the elven blood racial trait and an extra good skill."],
    "Fire": ["This subtype is usually applied to outsiders with a connection to the Plane of Fire and creatures with a strong affinity to fire.", "Traits: Immunity to fire; vulnerable to cold."],
    "Giant": ["This subtype is applied to giants and creatures related to giants.", "Traits: Low-light vision; many NPCs with this subtype gain Intimidate and Perception as master skills."],
    "Gnome": ["This subtype is applied to gnomes and creatures related to gnomes.", "Traits: Low-light vision; if the NPC is of the gnome race it also gains the eternal hope and gnome magic racial traits and Culture as a master skill."],
    "Goblinoid": ["This subtype is applied to humanoids of various goblinoid subspecies, such as space goblins.", "Traits: Darkvision 60 ft.; if the NPC is of the space goblin race, it also gains the fast and tinker racial traits, Engineering and Stealth as master skills, and Survival as a good skill."],
    "Gray": ["This subtype is applied to the humanoid aliens known as grays and creatures related to grays.", "Traits: Darkvision 60 ft.; if the NPC is of the gray race, it also gains telepathy 100 ft. and the phase special ability."],
    "Halfling": ["This subtype is applied to halflings and creatures related to halflings.", "Traits: None; if the NPC is of the halfling race, it gains the halfling luck and sneaky racial traits, Perception and Stealth as master skills, and Acrobatics and Athletics as good skills."],
    "Human": ["This subtype is applied to humans and creatures related to humans.", "Traits: None; if the NPC is of the human race, it gains an additional special ability of any type and an additional good skill."],
    "Ikeshti": ["This subtype is applied to ikeshtis and creatures related to ikeshtis.", "Traits: Most creatures with this subtype gain a climb speed; if the NPC is of the ikeshti race, it also gains the desert survivor, shed skin, and squirt blood racial traits."],
    "Incorporeal": ["Creatures with this subtype have no physical bodies.", "Traits: Incorporeal."],
    "Inevitable": ["Inevitables are construct-like outsiders built to enforce the laws of the universe.", "Traits: Darkvision 60 ft., low-light vision; constructed; regeneration (suppressed by chaotic-aligned attacks); truespeech."],
    "Kasatha": ["This subtype is applied to kasathas and creatures related to kasathas.", "Traits: None; if the NPC is of the kasatha race, it gains the desert stride and four-armed racial traits, Acrobatics and Athletics as master skills, and Culture as a good skill."],
    "Lashunta": ["This subtype is applied to lashuntas and creatures related to lashuntas.", "Traits: None; if the NPC is of the lashunta race, it gains the limited telepathy racial trait and can cast the following spells as spell-like abilities: 1/day- detect thoughts; at will-daze and psychokinetic hand."],
    "Maraquoi": ["This subtype is applied to maraquoi and creatures related to maraquoi.", "Traits: Low-light vision; if the NPC is of the maraquoi race, it also gains blindsense (sound) 30 ft., a climb speed of 20 ft., the prehensile tail racial trait, and Survival as a master skill."],
    "Orc": ["This subtype is applied to orcs and creatures who are related to orcs.", "Traits: Most creatures of this subtype gain darkvision 60 ft. and the ferocity universal creature rule; if the creature is of the half-orc race, it also gains Intimidate and Survival as master skills."],
    "Plantlike": ["Plantlike creatures have many of the characteristics of plants.", "Traits: Most plantlike creatures have the plantlike universal creature rule."],
    "Protean": ["Proteans are serpentine outsiders of pure chaos native to the Maelstrom.", "Traits: Blindsense (distance and sense varies by protean type); immunity to acid; resistance 10 to electricity and sonic; supernatural flight speed; amorphous; change shape; grab ability with its natural attacks."],
    "Reptoid": ["This subtype is applied to the shapechanging aliens known as reptoids and creatures related to reptoids.", "Traits: Low-light vision; if the NPC is of the reptoid race, it also gains the change shape, cold-blooded, and natural weapons racial traits."],
    "Ryphorian": ["This subtype is applied to ryphorians and creatures related to ryphorians.", "Traits: Low-light vision; if the NPC is of the ryphorian race, it also gains an additional special ability of any type, the trimorphic racial trait, and Perception as a master skill."],
    "Sarcesian": ["This subtype is applied to sarcesians and creatures related to sarcesians.", "Traits: Low-light vision; if the NPC is of the sarcesian race, it also gains the void flyer special ability and an additional good skill."],
    "Shapechanger": ["This subtype is applied to creatures that can dramatically alter their forms.", "Traits: Change shape (specific details depend upon creature)."],
    "Shirren": ["This subtype is applied to shirrens and creatures related to shirrens.", "Traits: Blindsense (vibration) 30 ft.; if the NPC is of the shirren race, it also gains the communalism and limited telepathy racial traits and Culture and Diplomacy as good skills."],
    "Skittermander": ["This subtype is applied to skittermanders and creatures related to skittermanders.", "Traits: Low-light vision; if the NPC is of the skittermander race, it also gains the grappler, hyper, and six-armed racial traits."],
    "Swarm": ["This subtype is applied to any collection of Fine, Diminutive, or Tiny creatures (usually vermin) that acts as a single creature. A single swarm usually occupies a square (if it is made up of nonflying creatures) or a cube (if it is made up of flying creatures) 10 feet on a side, but its reach is 0 feet. A swarm can move through cracks or holes large enough for its component creatures to fit through. In order to attack, a swarm moves into an opponent's space, which provokes an attack of opportunity. Spellcasting or concentrating on spells within the area of a swarm requires a successful caster level check (DC = 20 + spell level). Using skills that involve patience and concentration, such as Computers, within the area of a swarm requires a successful DC 20 Will saving throw.", "Traits: Swarm defenses, swarm immunities, distraction, swarm attack."],
    "Verthani": ["This subtype is applied to verthani and creatures related to verthani.", "Traits: Low-light vision; if the NPC is of the verthani race, it also gains the easily augmented and skin mimic racial traits and an additional good skill."],
    "Vesk": ["This subtype is applied to vesk and creatures related to vesk.", "Traits: Low-light vision; if the NPC is of the vesk race, it also gains the armor savant, fearless, and natural weapons racial traits."],
    "Water": ["This subtype is usually applied to outsiders with a connection to the Plane of Water.", "Traits: Swim speed, gains Athletics as a master or good skill."],
    "Ysoki": ["This subtype is applied to ysoki and creatures related to ysoki","Traits: Darkvision 60 ft.; if the NPC is of the ysoki race, it also gains the cheek pouches and moxie racial traits, Engineering and Stealth as master skills, and Survival as a good skill."]
};

otherSubTypes = ["Chaotic", "Evil", "Extraplanar", "Good", "Lawful", "Magical", "Native", "Technological"]

classData = {
    "Mystic": {
        "Description": "Calling on connections to supernatural forces, mystics can manifest magic in a number of different ways.",
        "Skills": " Master Mysticism and good or master skills chosen from the connection's associated skills.",
        "Special Rules": " Choose one mystic connection. The mystic creature's connection powers must come from that connection. Any connection powers that aren't relevant to the creature (or that can simply be incorporated into the creature's statistics) don't need to appear in its stat block. Spells must come from the mystic spell list. Start with connection spells of the corresponding levels and then fill in the remaining slots.",
        "Adjustments": " None.",
        "Required Array": " Spellcaster.",
        "abilitiesByCr": {
            "11": "1st-, 3rd-, 6th-, and 9th-level connection powers; mindlink; and telepathic bond.",
            "12": "1st-, 3rd-, 6th-, 9th-, and 12th-level connection powers; mindlink; and telepathic bond.",
            "15": "1st-, 3rd-, 6th-, 9th-, 12th-, and 15th-level connection powers; mindlink; and telepathic bond.",
            "19": "All connection powers, mindlink, telepathic bond, and transcendence.",
            "18": "All connection powers, mindlink, and telepathic bond.",
            "1": "1st-level connection power and one special ability.",
            "3": "1st- and 3rd-level connection powers and mindlink.",
            "2": "1st-level connection power, mindlink, and one special ability.",
            "6": "1st-, 3rd-, and 6th-level connection powers and mindlink.",
            "9": "1st-, 3rd-, 6th-, and 9th-level connection powers and mindlink.",
            "20": "All connection powers, mindlink, telepathic bond, transcendence, and enlightenment."
        },
        "Ability Score Modifiers": " Wisdom, Constitution, and Charisma.",
        "Gear": " Light armor (item level = CR), small arm (item level = CR), and basic melee weapon (item level = CR - 1)."
    },
    "Envoy": {
        "Gear": " Light armor (item level = CR), small arm (item level = CR), and basic melee weapon (item level = CR - 1).",
        "Skills": " Master Sense Motive and master Bluff, Diplomacy, or Intimidate.",
        "Adjustments": " +2 to Reflex saving throws.",
        "Required Array": " Expert.",
        "abilitiesByCr": {
            "10": "Two 8th-level envoy improvisations, one 6th-level envoy improvisation, one 4th-level envoy improvisation, skillful special ability, and one special ability.",
            "12": "Three 8th-level envoy improvisations, one 6th-level envoy improvisation, skillful special ability, and one special ability.",
            "20": "True expertise, four 8th-level envoy improvisations, skillful special ability, and one special ability.",
            "16": "Four 8th-level envoy improvisations, skillful special ability, and one special ability.",
            "1": "One 1st-level envoy improvisation and one special ability.",
            "2": "Two 1st-level envoy improvisations and one special ability.",
            "4": "One 4th-level envoy improvisation, one 1st-level envoy improvisation, and one special ability.",
            "6": "One 6th-level envoy improvisation, one 4th-level envoy improvisation, one 1st-level envoy improvisation, and one special ability.",
            "9": "One 8th-level envoy improvisation, one 6th-level envoy improvisation, one 4th-level envoy improvisation, skillful special ability, and one special ability.",
            "8": "One 8th-level envoy improvisation, one 6th-level envoy improvisation, one 4th-level envoy improvisation, and one special ability."
        },
        "Ability Score Modifiers": " Charisma, Intelligence, and Dexterity.",
        "Description": "Charismatic envoys assist their allies through inspiration and tactical orders."
    },
    "Soldier": {
        "Gear": " A soldier creature's gear selection depends on whether it's focused on melee or ranged combat.",
        "Ranged": " Heavy armor (item level = CR), advanced melee weapon (item level = CR), longarm (item level = CR + 1) or heavy weapon (item level = CR), and two grenades (item level = CR).",
        "Special Rules": " Choose one fighting style (soldier creatures of CR 9 or higher also choose a secondary fighting style). The soldier creature's style techniques must come from the selected fighting style or styles. Any style techniques that aren't relevant to the soldier creature can be skipped (or can simply be incorporated into the creature's statistics) and don't need to appear in the creature's stat block.",
        "Adjustments": " -2 to Reflex saving throws and +2 to Will saving throws.",
        "Required Array": " Combatant.",
        "Melee": " Heavy armor (item level = CR), advanced melee weapon (item level = CR + 1), longarm (item level = CR), and two grenades (item level = CR).",
        "abilitiesByCr": {
            "11": "1st-, 5th-, and 9th-level style techniques; secondary fighting style; 1st-level secondary style technique; soldier's onslaught; two gear boosts; and one special ability.",
            "13": "1st-, 5th-, 9th-, and 13th-level style techniques; secondary fighting style; 1st- and 5th-level secondary style techniques; soldier's onslaught; and three special abilities.",
            "20": "1st-, 5th-, 9th-, 13th-, and 17th-level style techniques; second style; 1st-, 5th-, and 9th-level secondary style techniques; soldier's onslaught; kill shot; two gear boosts; and one special ability.",
            "17": "1st-, 5th-, 9th-, 13th-, and 17th-level style techniques; second style; 1st-, 5th-, and 9th-level secondary style techniques; soldier's onslaught; two gear boosts; and one special ability.",
            "1": "1st-level style technique and one special ability.",
            "2": "1st-level style technique, one gear boost, and one special ability.",
            "5": "1st- and 5th-level style techniques, one gear boost, and one special ability.",
            "7": "1st- and 5th-level style techniques, two gear boosts, and one special ability.",
            "9": "1st-, 5th-, and 9th-level style techniques; secondary fighting style; 1st-level secondary style technique; two gear boosts; and one special ability."
        },
        "Ability Score Modifiers": " A soldier creature should arrange its ability score modifiers depending on its focus in combat. Melee",
        "Description": "Equipped with powerful weapons and armor, soldiers are trained to serve in the front line of battle and to both dish out and withstand massive force."
    },
    "Solarian": {
        "Description": "Drawing power from the eternal cycles of stars, solarians fight with the power of photons and gravitons.",
        "Skills": " Good Mysticism.",
        "Special Rules": " Choose one solar manifestation, either solar armor or solar weapon. For a solarian creature with solar armor, its EAC and KAC each increase by 1 and it receives the energy resistance listed in the table of solarian class features. For a solarian creature with a solar weapon, that weapon deals the standard melee damage for the NPC's CR from Table 2",
        "Solar Weapon": " Light armor (item level = CR), small arm (item level = CR), and solarian crystal (item level = CR).",
        "Adjustments": " -2 to Reflex saving throws and +2 to Will saving throws.",
        "Required Array": " Combatant.",
        "Solar Armor": " Light armor (item level = CR), small arm (item level = CR), and advanced melee weapon (item level = CR + 1).",
        "abilitiesByCr": {
            "10": "Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, one 10th-level stellar revelation, one 6th-level stellar revelation, and one zenith revelation.",
            "13": "Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, solarian's onslaught, two 10thlevel stellar revelations, and one zenith revelation.",
            "20": "Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, solarian's onslaught, stellar apotheosis, two 14th-level stellar revelations, and two zenith revelations.",
            "14": "Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, solarian's onslaught, one 14thlevel stellar revelation, one 10th-level stellar revelation, and one zenith revelation.",
            "17": "Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, solarian's onslaught, two 14thlevel stellar revelations, and two zenith revelations.",
            "1": "Solar manifestation, stellar alignment, black hole, and supernova.",
            "2": "Solar manifestation, stellar alignment, black hole, supernova, and one 2nd-level stellar revelation.",
            "4": "Solar manifestation, stellar alignment, black hole, supernova, and two 2nd-level stellar revelations.",
            "7": "Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, one 6th-level stellar revelation, and one 2nd-level stellar revelation.",
            "6": "Solar manifestation, stellar alignment, black hole, supernova, one 6th-level stellar revelation, and one 2nd-level stellar revelation.",
            "9": "Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, two 6th-level stellar revelations, and one zenith revelation.",
            "8": "Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, and two 6th-level stellar revelations."
        },
        "Ability Score Modifiers": " Strength, Dexterity, and Charisma.",
        "Gear": " A solarian's gear selection depends on whether you choose solar armor or solar weapon for its solar manifestation."
    },
    "Mechanic": {
        "Description": "Experts at dealing with machines, mechanics either use exocortexes to enhance their combat abilities or are accompanied by robotic drones that they can control remotely.",
        "Skills": " Master Computers and Engineering.",
        "Special Rules": " All mechanic creatures get the artificial intelligence class feature, which requires a choice between a drone and an exocortex. For a mechanic creature with a drone, build the drone as a separate technological construct of the mechanic's CR - 2 or use an existing technological construct with the mechanic's CR - 2. The drone does not get a full suite of actions on its own; each round, the mechanic creature and the drone can each take a move action, a swift action, and a reaction, but only one of them can take a standard action or combine its move and standard actions into a full action. The drone doesn't have its own CR, it doesn't contribute to the CR of the encounter, and PCs receive no XP for defeating a drone. For a mechanic creature with an exocortex, add target tracking at CR 1 (see below), wireless hack at CR 5, twin tracking at CR 10, multitasking at CR 15, and quad tracking at CR 20. Target Tracking (Ex)",
        "Adjustments": " +2 to Fortitude and Reflex saving throws and -2 to Will saving throws.",
        "Required Array": " Expert.",
        "abilitiesByCr": {
            "11": "Artificial intelligence, overload, remote hack, expert rig, miracle worker 2/day, override, and two 8th-level mechanic tricks.",
            "13": "Artificial intelligence, overload, remote hack, miracle worker 2/day, override, advanced rig, and two 8th-level mechanic tricks.",
            "20": "Artificial intelligence, overload, remote hack, miracle worker 3/day, override, ghost in the machine, superior rig, and four 14th-level mechanic tricks.",
            "14": "Artificial intelligence, overload, remote hack, miracle worker 2/day, override, advanced rig, one 14th-level mechanic trick, and one 8th-level mechanic trick.",
            "16": "Artificial intelligence, overload, remote hack, miracle worker 3/day, override, advanced rig, and two 14th-level mechanic tricks.",
            "19": "Artificial intelligence, overload, remote hack, miracle worker 3/day, override, ghost in the machine, superior rig, and three 14th-level mechanic tricks.",
            "18": "Artificial intelligence, overload, remote hack, miracle worker 3/day, override, advanced rig, and three 14th-level mechanic tricks.",
            "1": "Artificial intelligence (see Special Rules above), custom rig, one special ability.",
            "3": "Artificial intelligence, custom rig, overload, and one 2ndlevel mechanic trick.",
            "2": "Artificial intelligence, custom rig, one 2ndlevel mechanic trick, and one special ability.",
            "5": "Artificial intelligence, custom rig, overload, remote hack, and two 2nd-level mechanic tricks.",
            "4": "Artificial intelligence, custom rig, overload, and two 2ndlevel mechanic tricks.",
            "7": "Artificial intelligence, overload, remote hack, expert rig, miracle worker 1/day, and two 2nd-level mechanic tricks.",
            "9": "Artificial intelligence, overload, remote hack, expert rig, miracle worker 1/day, override, one 8th-level mechanic trick, and one 2nd-level mechanic trick.",
            "8": "Artificial intelligence, overload, remote hack, expert rig, miracle worker 1/day, one 8th-level mechanic trick, and one 2nd-level mechanic trick."
        },
        "Ability Score Modifiers": " Intelligence, Dexterity, and Constitution.",
        "Gear": " Light armor (item level = CR), small arm (item level = CR), and basic melee weapon (item level = CR - 1)."
    },
    "Technomancer": {
        "Description": "These spellcasters meld magic and technology.",
        "Skills": " Master Computers and good Mysticism.",
        "Special Rules": " In general, spells must come from the technomancer spell list. When choosing a spell for cache capacitor, you don't have to choose one of the spells from the list of the spells the technomancer knows.",
        "Adjustments": " None.",
        "Required Array": " Spellcaster.",
        "Ability Score Modifiers": " Intelligence, Dexterity, and Wisdom.",
        "Gear": " Light armor (item level = CR), small arm (item level = CR), and basic melee weapon (item level = CR - 1)."
    },
    "Operative": {
        "Description": "Cunning and swift, operatives are especially skilled and can cause foes to drop their guards, paving the way for devastating attacks.",
        "Skills": " Master skills from operative specialization.",
        "Special Rules": " Choose one operative specialization. The operative creature's specialization exploit and specialization power must come from that specialization. Any exploits that aren't relevant to the creature (or that can simply be incorporated into the creature's statistics) don't need to appear in the creature's stat block.",
        "Adjustments": " Bonus to initiative equal to the creature's CR divided by 4, + 1; +3 to Reflex saving throws; +1 to all skill checks.",
        "Required Array": " Expert.",
        "abilitiesByCr": {
            "11": "Trick attack +6d8, evasion, quick movement +20 ft., debilitating trick, uncanny agility, triple attack, specialization power, specialization exploit, and one 10th-level operative exploit.",
            "10": "Trick attack +5d8, evasion, quick movement +20 ft., debilitating trick, uncanny agility, triple attack, specialization exploit, and one 10th-level operative exploit.",
            "13": "Trick attack +7d8, evasion, quick movement +20 ft., debilitating trick, uncanny agility, quad attack, specialization power, specialization exploit, and one 10th-level operative exploit.",
            "15": "Trick attack +8d8, evasion, quick movement +30 ft., debilitating trick, uncanny agility, quad attack, specialization power, specialization exploit, and one 14th-level operative exploit.",
            "14": "Trick attack +7d8, evasion, quick movement +20 ft., debilitating trick, uncanny agility, quad attack, specialization power, specialization exploit, and one 14th-level operative exploit.",
            "17": "Trick attack +9d8, evasion, quick movement +30 ft., debilitating trick, uncanny agility, quad attack, double debilitation, specialization power, specialization exploit, and one 14th-level operative exploit.",
            "19": "Trick attack +10d8, evasion, quick movement +30 ft., debilitating trick, uncanny agility, quad attack, double debilitation, specialization power, specialization exploit, and two 14th-level operative exploits.",
            "20": "Trick attack +10d8, evasion, quick movement +30 ft., debilitating trick, uncanny agility, quad attack, double debilitation, specialization power, specialization exploit, supreme operative, and two 14th-level operative exploits.",
            "1": "Trick attack +1d4 and one special ability.",
            "3": "Trick attack +1d8, evasion, quick movement +10 ft., one 2nd-level operative exploit, and one special ability.",
            "2": "Trick attack +1d4, evasion, one 2nd-level operative exploit, and one special ability.",
            "5": "Trick attack +3d8, evasion, quick movement +10 ft., debilitating trick, specialization exploit, and two 2nd-level operative exploits.",
            "4": "Trick attack +1d8, evasion, quick movement +10 ft., debilitating trick, and two 2nd-level operative exploits.",
            "7": "Trick attack +4d8, evasion, quick movement +10 ft., debilitating trick, uncanny agility, specialization exploit, and one 6th-level operative exploit.",
            "6": "Trick attack +3d8, evasion, quick movement +10 ft., debilitating trick, specialization exploit, and one 6th-level operative exploit.",
            "9": "Trick attack +5d8, evasion, quick movement +20 ft., debilitating trick, uncanny agility, triple attack, specialization exploit, and one 6th-level operative exploit.",
            "8": "Trick attack +4d8, evasion, quick movement +10 ft., debilitating trick, uncanny agility, triple attack, specialization exploit, and one 6th-level operative exploit."
        },
        "Ability Score Modifiers": " Dexterity, Intelligence, and Wisdom.",
        "Gear": " Light armor (item level = CR), small arm (item level = CR), sniper rifle (item level = CR), and basic melee weapon with operative special quality (item level = CR - 1)."
    }
};

var statLabels = ["eac","kac","fortitude","reflex","will","hitPoints","abilityDCBase","spellDC","abilityScoreModifiers","specialAbilities","masterSkills","goodSkills","highAttackBonus","lowAttackBonus","rangedEnergy","rangedKinetic","meleeStandard","meleeThree","meleeFour"];
var CRLabels = ["CR 1/3","CR 1/2","CR 1","CR 2","CR 3","CR 4","CR 5","CR 6","CR 7","CR 8","CR 9","CR 10","CR 11","CR 12","CR 13","CR 14","CR 15","CR 16","CR 17","CR 18","CR 19","CR 20","CR 21","CR 22","CR 23","CR 24","CR 25"]

function buildStatBlock() {

  var statBlock = {};

  //base array
  var CRDrop = $('[data-id="CRDrop"]').text().trim().replace("CR ","");
  var arrayDrop = $('[data-id="arrayDrop"]').text().trim();

  var baseStats = [];
  if (arrayDrop == 'Combatant') {
    baseStats = combatantMainStats[CRDrop].concat(combatantAttackStats[CRDrop]);
  } else if (arrayDrop == 'Expert') {
    baseStats = expertMainStats[CRDrop].concat(expertAttackStats[CRDrop]);
  } else if (arrayDrop == 'Spellcaster') {
    baseStats = spellcasterMainStats[CRDrop].concat(spellcasterAttackStats[CRDrop]);
  }

  //assign base stat values
  for (i = 0; i < statLabels.length; i++) {
    statBlock[statLabels[i]] = baseStats[i]
  }

  var $outputArea = $(".output.area").first();
  $outputArea.empty();
  $outputArea.append("<p>"+statBlock.meleeStandard+"</p>");

}

//creates bootstrap-select dropdowns from arrays
function generateDropdown(parentID,dropID,title,array) {
  var dropHtml = '<select class="selectpicker" id="'+ dropID +'" title="'+title+'" data-style="btn-default" data-width="100%" data-size="10">'
  for (i = 0; i < array.length; i++) {
    dropHtml += '<option>' + array[i] + '</option>';
  }
  dropHtml += '</select>';
  document.getElementById(parentID).innerHTML = dropHtml;
  //rebind dropdown click dropClickHandler
  $('.selectpicker').on('changed.bs.select', dropClickHandler);
}

//handle clicks of dropdowns
function dropClickHandler(e, clickedIndex, newValue, oldValue) {
    var selected = $(e.currentTarget).val();
    if (Object.keys(stepOneDescription).includes(selected)) {
        var $descriptionArea = $(".stepOneDescription").first();
        $descriptionArea.empty();
        $descriptionArea.append("<p>"+stepOneDescription[selected]+"</p>");

    } else if (Object.keys(creatureType).includes(selected)) {
        var $descriptionArea = $(".stepTwoDescription").first();
        $descriptionArea.empty();
        $descriptionArea.append("<p>"+creatureType[selected]+"</p>");

    } else if (Object.keys(creatureSubType).includes(selected)) {
        var $descriptionArea = $(".stepThreeDescription").first();
        $descriptionArea.empty();
        $descriptionArea.append("<p>"+creatureSubType[selected]+"</p>");

    }
    $('[data-id="'+$(e.currentTarget).attr('id')+'"]').removeClass('wizard-shadow');//remove validation highlight
}

//bind bootstrap-select dropdown change event
$('.selectpicker').on('changed.bs.select', dropClickHandler);

// Wizard Initialization
$('.wizard-card').bootstrapWizard({
    'tabClass': 'nav nav-pills',
    'nextSelector': '.btn-next',
    'previousSelector': '.btn-previous',

    //runs when wizard initialised
    onInit: function(tab, navigation, index) {

        //create initial dropdowns from data arrays
        //step1
        generateDropdown("CRDropdown","CRDrop","Choose challenge rating",CRLabels);
        generateDropdown("arrayDropdown","arrayDrop","Choose base",Object.keys(stepOneDescription));
        //step2
        generateDropdown("creatureTypeDropdown","creatureTypeDrop","Choose creature type",Object.keys(creatureType));
        //Step3
        generateDropdown("creatureSubtypeDropdown","subtypeDrop","Choose creature subtype",Object.keys(creatureSubType));
    },

    //runs when next button pressed.
    onNext: function(tab, navigation, index) {
        //Validation tab 1
        if (index == 1) {

            var validated = true;

            if ($('[data-id="CRDrop"]').text().includes("Choose")) {
                $('[data-id="CRDrop"]').addClass('wizard-shadow');
                validated = false;
            }
            if ($('[data-id="arrayDrop"]').text().includes("Choose")) {
                $('[data-id="arrayDrop"]').addClass('wizard-shadow');
                validated = false;
            }

            if (validated) {
                buildStatBlock()

                //return false; //temp for testing
            } else {
                return false;
            }
        }
        if (index == 2) {
            var validated = true;

            if ($('[data-id="creatureTypeDrop"]').text().includes("Choose")) {
                $('[data-id="creatureTypeDrop"]').addClass('wizard-shadow');
                validated = false;
            }

            if (validated) {

                //return false; //temp for testing
            } else {
                return false;
            }
        }

    },

    // toggle next/finish button on last tab
    onTabShow: function(tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index + 1;

        var $wizard = navigation.closest('.wizard-card');

        // If it's the last tab then hide the last button and show the finish instead
        if ($current >= $total) {
            $($wizard).find('.btn-next').hide();
            $($wizard).find('.btn-finish').show();
        } else {
            $($wizard).find('.btn-next').show();
            $($wizard).find('.btn-finish').hide();
        }

        //set progress bar
        if ($current == 1) {
          var $percent = 0;
        } else {
          var $percent = (($current-1)/($total-1)) * 100;
        }

		    $($wizard).find('.progress-bar').css({width:$percent+'%'});
    }
});
//finish function
$('.btn-finish').click(function() {
    alert('Finished!');
});
