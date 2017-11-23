//ÔÇô ÔÇÖ
var stepOneDescription = {
    "Combatant": "The <b>combatant</b> option is for an NPC that will primarily fight in physical combat, such as a bodyguard or a feral beast. Such NPCs represent significant threats on the field of battle. These attacks are often physical but they might also be strange supernatural abilities.",
    "Expert": "Pick the <b>expert</b> option for skilled enemies such as stealthy scouts or non-combatants such as merchants or advisors. Expert NPCs benefit from a wide array of skills, making them competent at specialized tasks such as sneaking or sabotage.",
    "Spellcaster": "Use the <b>spellcaster</b> option for any NPC whose main capabilities come from casting spells or using spell-like abilities. Spellcaster NPCs usually have the most unusual abilities."
}

//CR: EAC,	KAC,	Fort,	Ref,	Will,	Hit Points,	Ability DC	Base, Spell Dc,	Ability Score Modifiers,	Special Abilities,	Master Skills,	Good Skills
var combatantMainStats = {
      "1/3": [10, 12, 1, 1, 0, 6, 8, 8, 3, 1, 0, 1, [7,1], [3,2]],
      "1/2": [10, 12, 2, 2, 0, 13, 9, 9, 3, 2, 1, 1, [9,1], [4,2]],
      "1": [11, 13, 3, 3, 1, 20, 10, 9, 4, 2, 1, 1, [10,1], [5,2]],
      "2": [13, 15, 4, 4, 1, 25, 11, 10, 4, 2, 1, 2, [12,1], [7,2]],
      "3": [14, 16, 5, 5, 2, 40, 12, 11, 4, 2, 1, 2, [13,1], [8,2]],
      "4": [16, 18, 6, 6, 3, 50, 13, 11, 5, 3, 1, 2, [15,1], [10,2]],
      "5": [17, 19, 7, 7, 4, 70, 13, 11, 5, 3, 2, 2, [16,1], [11,2]],
      "6": [18, 20, 8, 8, 5, 90, 14, 12, 5, 3, 2, 2, [18,1], [13,2]],
      "7": [19, 21, 9, 9, 6, 105, 15, 13, 5, 4, 2, 2, [19,1], [14,2]],
      "8": [20, 22, 10, 10, 7, 125, 16, 13, 6, 4, 2, 2, [21,1], [16,2]],
      "9": [22, 24, 11, 11, 8, 145, 16, 13, 6, 4, 3, 2, [22,1], [17,2]],
      "10": [23, 25, 12, 12, 9, 165, 17, 14, 8, 5, 3, 2, [24,1], [19,2]],
      "11": [24, 26, 13, 13, 10, 180, 18, 14, 8, 5, 3, 2, [25,1], [20,2]],
      "12": [26, 28, 14, 14, 11, 200, 19, 15, 8, 5, 4, 3, [27,1], [22,2]],
      "13": [27, 29, 15, 15, 12, 225, 19, 15, 8, 6, 4, 3, [28,1], [23,2]],
      "14": [28, 30, 16, 16, 12, 250, 20, 15, 8, 6, 4, 3, [30,1], [25,2]],
      "15": [29, 31, 17, 17, 13, 275, 21, 16, 9, 7, 5, 3, [31,1], [26,2]],
      "16": [30, 32, 18, 18, 14, 300, 22, 16, 10, 7, 5, 3, [33,1], [28,2]],
      "17": [31, 33, 19, 19, 15, 340, 22, 16, 11, 8, 5, 3, [34,1], [29,2]],
      "18": [32, 34, 19, 19, 16, 375, 23, 17, 11, 8, 6, 4, [36,1], [31,2]],
      "19": [33, 35, 20, 20, 16, 415, 24, 18, 11, 9, 6, 4, [37,1], [32,2]],
      "20": [35, 37, 21, 21, 17, 465, 25, 19, 12, 9, 6, 4, [39,1], [34,2]],
      "21": [36, 38, 22, 22, 18, 500, 25, 19, 12, 10, 7, 4, [40,1], [35,2]],
      "22": [38, 40, 22, 22, 18, 550, 26, 20, 13, 10, 7, 4, [42,1], [37,2]],
      "23": [39, 41, 23, 23, 19, 600, 27, 21, 13, 11, 7, 4, [43,1], [38,2]],
      "24": [41, 43, 24, 24, 20, 650, 28, 22, 15, 11, 8, 4, [45,1], [40,2]],
      "25": [42, 44, 25, 25, 21, 700, 28, 22, 15, 12, 8, 4, [46,1], [41,2]]
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
  "1/3": [10, 11, 0, 0, 2, 6, 10, 10, 3, 1, 0, 1, [7,3], [3,2]],
  "1/2": [10, 11, 0, 0, 3, 12, 11, 11, 3, 2, 1, 1, [9,3], [4,2]],
  "1": [11, 12, 1, 1, 4, 17, 12, 11, 4, 2, 1, 1, [10,3], [5,2]],
  "2": [13, 14, 1, 1, 5, 23, 13, 12, 4, 2, 1, 1, [12,3], [7,2]],
  "3": [14, 15, 2, 2, 6, 35, 14, 13, 4, 2, 1, 2, [13,3], [8,2]],
  "4": [16, 17, 3, 3, 7, 45, 15, 13, 5, 3, 1, 2, [15,3], [10,2]],
  "5": [17, 18, 4, 4, 8, 65, 15, 13, 5, 3, 2, 2, [16,3], [11,2]],
  "6": [18, 19, 5, 5, 9, 80, 16, 14, 5, 3, 2, 2, [18,3], [13,2]],
  "7": [19, 20, 6, 6, 10, 100, 17, 15, 5, 4, 2, 2, [19,3], [14,2]],
  "8": [20, 21, 7, 7, 11, 115, 18, 15, 6, 4, 2, 2, [21,3], [16,2]],
  "9": [22, 23, 8, 8, 12, 135, 18, 15, 6, 4, 3, 2, [22,3], [17,2]],
  "10": [23, 24, 9, 9, 13, 150, 19, 16, 8, 5, 3, 2, [24,3], [19,2]],
  "11": [24, 25, 10, 10, 14, 170, 20, 16, 8, 5, 3, 2, [25,3], [20,2]],
  "12": [26, 27, 11, 11, 15, 185, 21, 17, 8, 5, 4, 3, [27,3], [22,2]],
  "13": [27, 28, 12, 12, 16, 210, 21, 17, 8, 6, 4, 3, [28,3], [23,2]],
  "14": [28, 29, 12, 12, 17, 235, 22, 17, 8, 6, 4, 3, [30,3], [25,2]],
  "15": [29, 30, 13, 13, 18, 255, 23, 18, 9, 7, 5, 3, [31,3], [26,2]],
  "16": [30, 31, 14, 14, 19, 280, 24, 18, 10, 7, 5, 3, [33,3], [28,2]],
  "17": [31, 32, 15, 15, 20, 315, 24, 18, 11, 8, 5, 3, [34,3], [29,2]],
  "18": [32, 33, 16, 16, 20, 350, 25, 19, 11, 8, 6, 3, [36,3], [31,2]],
  "19": [33, 34, 16, 16, 21, 385, 26, 20, 11, 9, 6, 4, [37,3], [32,2]],
  "20": [35, 36, 17, 17, 22, 430, 27, 21, 12, 9, 6, 4, [39,3], [34,2]],
  "21": [36, 37, 18, 18, 23, 465, 27, 21, 12, 10, 7, 4, [40,3], [35,2]],
  "22": [38, 39, 18, 18, 23, 500, 28, 22, 13, 10, 7, 4, [42,3], [37,2]],
  "23": [39, 40, 19, 19, 24, 550, 29, 23, 13, 11, 7, 4, [43,3], [38,2]],
  "24": [41, 42, 20, 20, 25, 600, 30, 24, 15, 11, 8, 4, [45,3], [40,2]],
  "25": [42, 43, 21, 21, 26, 650, 30, 24, 15, 12, 8, 4, [46,3], [41,2]]
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
    "1/3": [9, 10, 0, 0, 2, 5, 10, 12, 3, 1, 0, 1, [7,2], [3,1]],
    "1/2": [9, 10, 0, 0, 3, 11, 11, 13, 3, 2, 1, 1, [9,2], [4,1]],
    "1": [10, 11, 1, 1, 4, 16, 12, 13, 4, 2, 1, 1, [10,2], [5,1]],
    "2": [12, 13, 1, 1, 5, 21, 13, 14, 4, 2, 1, 2, [12,2], [7,1]],
    "3": [13, 14, 2, 2, 6, 32, 14, 15, 4, 2, 1, 2, [13,2], [8,1]],
    "4": [15, 16, 3, 3, 7, 43, 15, 15, 5, 3, 1, 2, [15,2], [10,1]],
    "5": [16, 17, 4, 4, 8, 60, 15, 15, 5, 3, 2, 2, [16,2], [11,1]],
    "6": [17, 18, 5, 5, 9, 75, 16, 16, 5, 3, 2, 2, [18,2], [13,1]],
    "7": [18, 19, 6, 6, 10, 90, 17, 17, 5, 4, 2, 2, [19,2], [14,1]],
    "8": [19, 20, 7, 7, 11, 105, 18, 17, 6, 4, 2, 2, [21,2], [16,1]],
    "9": [21, 22, 8, 8, 12, 120, 18, 17, 6, 4, 3, 2, [22,2], [17,1]],
    "10": [22, 23, 9, 9, 13, 140, 19, 18, 8, 5, 3, 2, [24,2], [19,1]],
    "11": [23, 24, 10, 10, 14, 155, 20, 18, 8, 5, 3, 2, [25,2], [20,1]],
    "12": [25, 26, 11, 11, 15, 170, 21, 19, 8, 5, 4, 3, [27,2], [22,1]],
    "13": [26, 27, 12, 12, 16, 190, 21, 19, 8, 6, 4, 3, [28,2], [23,1]],
    "14": [27, 28, 12, 12, 17, 215, 22, 19, 8, 6, 4, 3, [30,2], [25,1]],
    "15": [28, 29, 13, 13, 18, 235, 23, 20, 9, 7, 5, 3, [31,2], [26,1]],
    "16": [29, 30, 14, 14, 19, 255, 24, 20, 10, 7, 5, 3, [33,2], [28,1]],
    "17": [30, 31, 15, 15, 20, 285, 24, 20, 11, 8, 5, 3, [34,2], [29,1]],
    "18": [31, 32, 16, 16, 20, 320, 25, 21, 11, 8, 6, 4, [36,2], [31,1]],
    "19": [32, 33, 16, 16, 21, 350, 26, 22, 11, 9, 6, 4, [37,2], [32,1]],
    "20": [34, 35, 17, 17, 22, 395, 27, 23, 12, 9, 6, 4, [39,2], [34,1]],
    "21": [35, 36, 18, 18, 23, 425, 27, 23, 12, 10, 7, 4, [40,2], [35,1]],
    "22": [37, 38, 18, 18, 23, 470, 28, 24, 13, 10, 7, 4, [42,2], [37,1]],
    "23": [38, 39, 19, 19, 24, 510, 29, 25, 13, 11, 7, 4, [43,2], [38,1]],
    "24": [40, 41, 20, 20, 25, 550, 30, 26, 15, 11, 8, 4, [45,2], [40,1]],
    "25": [41, 42, 21, 21, 26, 600, 30, 26, 15, 12, 8, 4, [46,2], [41,1]]
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

humanoidSubtypes = ["Human"];
outsiderSubtypes = ["Aeon"];

creatureType = {
  "Aberration": {
    "Adjustments": {"fortitude":2,"reflex":2,"attackMod":1},
    "Description": "An aberration has a bizarre anatomy, strange abilities, an alien mindset, or any combination of the three.",
    "Senses": ["Darkvision 60 ft."]
  },
  "Animal": {
    "Adjustments": {"fortitude":2,"reflex":2},
    "Description": "An animal is a living, nonhumanoid creature, usually a vertebrate with no magical abilities and no innate capacity for language or culture.",
    "Senses": ["Low-light vision"],
    "Options": ["Set intelligence -4","Set intelligence -5"]
  },
  "Construct": {
    "Adjustments": {"fortitude":-2,"reflex":-2,"will":-2,"attackMod":1,"con":"-"},
    "Description": "A construct is a magically animated object or an artificially created creature.",
    "Senses": ["Darkvision 60 ft.","Low-light vision"],
    "OtherAbilities": ["Unliving"],
    "Immunities": ["Construct"],
    "Subtypes": ["magical","technological"],
    "Options": ["Mindless","Not mindless"]
  },
  "Dragon": {
    "Adjustments": {"fortitude":2,"reflex":2,"will":2,"attackMod":1},
    "Description": "A dragon is a reptilian creature, usually winged, with magical or otherwise unusual abilities.",
    "Senses": ["Darkvision 60 ft.","Low-light vision"],
    "Immunities": ["paralysis","sleep"]
  },
  "Fey": {
    "Adjustments": {"fortitude":2,"reflex":2,"attackMod":-1},
    "Description": "A fey is a creature with supernatural abilities and connections to nature or to some other force or place.",
    "Senses": ["Low-light vision."]
  },
  "Humanoid": {
    "Adjustments": {"anySave":2},
    "Description": "A humanoid usually has two arms, two legs, and one head, or it has a humanlike torso, arms, and a head. Humanoids have few or no supernatural or extraordinary abilities, but most can speak and usually have well-developed societies.",
    "Subtypes": humanoidSubtypes
  },
  "Magical Beast": {
    "Adjustments": {"fortitude":2,"reflex":2,"attackMod":1},
    "Description": "Magical beasts are similar to animals but can have Intelligence modifiers greater than -4 (in which case the magical beast knows at least one language, though it can't necessarily speak). Magical beasts usually have supernatural or extraordinary abilities.",
    "Senses": ["Darkvision 60 ft.","Low-light vision."]
  },
  "Monstrous Humanoid": {
    "Adjustments": {"reflex":2,"will":2,"attackMod":1},
    "Description": "Monstrous humanoids are similar to humanoids, but they have monstrous or animalistic features. They often have magical abilities as well.",
    "Senses": ["Darkvision 60 ft."]
  },
  "Ooze": {
    "Adjustments": {"fortitude":2,"reflex":-2,"will":-2,"skills":"only natural","int":"-"},
    "Description": "An ooze is an amorphous or mutable creature.",
    "Senses": ["Blindsight","Sightless"],
    "OtherAbilities": ["Mindless"],
    "Immunities": ["Ooze"]
  },
  "Outsider": {
    "Adjustments": {"anySave":2,"attackMod":1},
    "Description": "An outsider is at least partially composed of the essence (but not necessarily the material) of a plane other than the Material Plane. Some creatures start out as another type and become outsiders when they attain a higher or lower state of spiritual existence.",
    "Senses": ["Darkvision 60 ft."],
    "Subtypes": outsiderSubtypes
  },
  "Plant": {
    "Adjustments": {"fortitude":2},
    "Description": "This type describes vegetable creatures. Note that regular plants, such as those growing in gardens or fields, lack Wisdom and Charisma modifiers and are objects, not creatures, even though they are alive.",
    "Senses": ["Low-light vision"],
    "Immunities": ["Plant"]
  },
  "Undead": {
    "Adjustments": {"fortitude":2,"con":"-"},
    "Description": "Undead are once-living creatures animated by magic or advanced technological forces.",
    "Senses": ["Darkvision 60 ft."],
    "OtherAbilities": ["Unliving"],
    "Immunities": ["Undead"]
  },
  "Vermin": {
    "Adjustments": {"fortitude":2,"int":"-"},
    "Description": "This type includes insects, arachnids, other arthropods, worms, and similar invertebrates.",
    "Senses": ["Darkvision 60 ft."],
    "OtherAbilities": ["Mindless"]
  }
};

//subtype lists
subTypeAll = ["Air","Magical","Chaotic","Evil", "Extraplanar","Good","Lawful","Native","Technological","Aquatic","Cold","Earth","Elemental","Giant","Incorporeal","Fire","Plantlike","Shapechanger","Water"];
subTypeOutsider = ["Aeon","Agathion","Angel","Archon","Azata","Daemon","Demon","Devil","Inevitable","Protean"];
subTypeHumanoid = ["Android","Dwarf","Elf","Gnome","Goblinoid","Gray","Halfling","Human","Ikeshti","Kasatha","Lashunta","Maraquoi","Orc","Reptoid","Ryphorian","Sarcesian","Shirren","Skittermander","Verthani","Vesk","Ysoki"];
subTypeConstruct = ["Magical","Technological"];
subTypeVermin = ["Swarm"];
subTypeDragon = ["Black Dragon","Blue Dragon","Green Dragon","Red Dragon","White Dragon"];

creatureSubType = {
  "Aeon": {
    "Description": "Aeons are a race of neutral outsiders who maintain the balance of reality.",
    "Immunities": [
      "cold",
      "critical hits",
      "poison"
    ],
    "Languages": [
      "telepathy 100 ft. (non-verbal)"
    ],
    "OtherAbilities": [
      "+CR to skill checks to recall knowledge"
    ],
    "Resistance": [
      "electricity 10",
      "fire 10"
    ],
    "SpecialAbilities": {
      "Extension of All (Ex)": "Aeons can communicate telepathically with other aeons over vast distances. This ability works even across planes, albeit less effectively, allowing the communication of only vague impressions and feelings."
    }
  },
  "Agathion": {
    "Description": "Agathions are celestials, or good outsiders, native to Nirvana.",
    "Immunities": [
      "electricity",
      "petrification"
    ],
    "Languages": [
      "truespeech"
    ],
    "OtherAbilities": [
      "+4 to saving throws against poison"
    ],
    "Resistance": [
      "cold 10",
      "sonic 10"
    ],
    "Senses": [
      "Low-light vision"
    ],
    "SpecialAbilities": {
      "Healing Channel (Su)": "You can heal yourself and your allies. Healing yourself with channeled energy is a move action, healing an ally you touch is a standard action, and healing all allies within 30 feet is a full action. This energy restores 2d8 Hit Points and increases by 2d8 every 3 CR levels",
      "Speak with Animals (Su)": "You can communicate with any creature of the animal type, though this doesn't make it friendly. If an animal is friendly toward you, it may do you favors. This ability allows you to use Intimidate to bully animals, and you can use any other language-dependent effect against animals."
    }
  },
  "Air": {
    "Description": "This subtype is usually applied to outsiders with a connection to the Plane of Air.",
    "MasterSkills": [
      "acrobatics"
    ],
    "Speed": [
      "fly 60 ft. (perfect)"
    ]
  },
  "Android": {
    "Description": "This subtype is applied to androids and creatures related to androids.",
    "OtherAbilities": [
      "constructed",
      "flat affect",
      "upgrade slot"
    ],
    "Senses": [
      "Darkvision 60 ft.",
      "low-light vision"
    ]
  },
  "Angel": {
    "Description": "Angels are celestials, or good outsiders, native to the good-aligned Outer Planes.",
    "Immunities": [
      "acid",
      "cold",
      "petrification"
    ],
    "Languages": [
      "truespeech"
    ],
    "OtherAbilities": [
      "+4 to saving throws against poison"
    ],
    "Resistance": [
      "electricity 10",
      "fire 10"
    ],
    "Senses": [
      "Darkvision 60 ft.",
      "low-light vision"
    ],
    "SpecialAbilities": {
      "Protective Aura (Su)": "For angels of CR 3 to CR 15, this ability grants creatures within the aura (usually 20 feet), including the angel, a divine bonus (usually +2) to AC against attacks made by evil creatures and a divine bonus (usually +4) to saving throws against effects created by evil creatures. The protective aura of a more powerful or a weaker angel might grant a larger or smaller bonus and have a larger or smaller radius, respectively."
    }
  },
  "Aquatic": {
    "Description": "These creatures are often native to environments that are mostly or entirely underwater.",
    "MasterSkills": [
      "athletics"
    ],
    "Options": [
      "OtherAbilities",
      "Amphibious",
      "Not amphibious"
    ],
    "OtherAbilities": [
      "water breathing"
    ],
    "Speed": [
      "swim 30 ft."
    ]
  },
  "Archon": {
    "Description": "Archons are celestials, or good outsiders, native to Heaven.",
    "Immunities": [
      "electricity",
      "petrification"
    ],
    "Languages": [
      "truespeech"
    ],
    "OtherAbilities": [
      "+4 to saving throws against poison"
    ],
    "Resistance": [
      "electricity 10",
      "fire 10"
    ],
    "Senses": [
      "Darkvision 60 ft.",
      "low-light vision"
    ],
    "SpecialAbilities": {
      "Aura of Menace (Su)": "This ability imposes a divine penalty (usually -2) to the AC, attacks, and saving throws of each hostile creature within the aura (usually 20 feet) that fails a Will save. This penalty lasts for 24 hours or until that creature deals damage to the archon who generated the aura. A creature that has resisted or broken the effect can't be affected again by the same archon's aura for 24 hours. The aura of a more powerful or weaker archon might impose a larger or smaller penalty and might have a larger or smaller radius, respectively."
    },
    "Spell-likeAbilities": {
      "atWill": [
        "teleport"
      ]
    }
  },
  "Azata": {
    "Description": "Azatas are celestials, or good outsiders, native to Elysium.",
    "Immunities": [
      "electricity",
      "petrification"
    ],
    "Languages": [
      "truespeech"
    ],
    "Resistance": [
      "cold 10",
      "fire 10"
    ],
    "Senses": [
      "Darkvision 60 ft.",
      "low-light vision"
    ]
  },
  "Chaotic": {
    "Description": "This subtype is applied to chaotic aligned creatures"
  },
  "Cold": {
    "Description": "Creatures with this subtype are usually native to frigid environments.",
    "Immunities": [
      "cold"
    ],
    "Vulnerable": [
      "fire"
    ]
  },
  "Daemon": {
    "Abilities": [
      "summon allies (Sp)"
    ],
    "Description": "Daemons are fiends, or evil outsiders, native to Abaddon.",
    "Immunities": [
      "acid",
      "death effects",
      "disease",
      "poison"
    ],
    "Languages": [
      "telepathy"
    ],
    "Resistance": [
      "electricity 10",
      "fire 10",
      "cold 10"
    ]
  },
  "Demon": {
    "Abilities": [
      "summon allies (Sp)"
    ],
    "Description": "Demons are fiends, or evil outsiders, native to the Abyss.",
    "Immunities": [
      "electricity",
      "poison"
    ],
    "Languages": [
      "telepathy"
    ],
    "Resistance": [
      "acid 10",
      "fire 10",
      "cold 10"
    ]
  },
  "Devil": {
    "Abilities": [
      "summon allies (Sp)"
    ],
    "Description": "Devils are fiends, or evil outsiders, native to Hell.",
    "Immunities": [
      "fire",
      "poison"
    ],
    "Languages": [
      "telepathy"
    ],
    "Resistance": [
      "acid 10",
      "cold 10"
    ],
    "Senses": [
      "See in darkness"
    ]
  },
  "Dwarf": {
    "Description": "This subtype is applied to dwarves and creatures related to dwarves.",
    "OtherAbilities": [
      "slow but steady",
      "stonecunning",
      "traditional enemies",
      "weapon familiarity"
    ],
    "Senses": [
      "Darkvision 60 ft."
    ]
  },
  "Earth": {
    "Description": "This subtype is usually applied to outsiders with a connection to the Plane of Earth.",
    "Options": [
      "Senses",
      "blindsense 30 ft.",
      "blindsight (vibration) 30 ft."
    ],
    "Speed": [
      "burrow 30 ft."
    ]
  },
  "Elemental": {
    "Description": "An elemental is a creature composed entirely of matter from one of the four Elemental Planes.",
    "Immunities": [
      "Elemental"
    ]
  },
  "Elf": {
    "Description": "This subtype is applied to elves and creatures related to elves.",
    "SubRaces": {
      "Drow": {
        "Immunities": [
          "drow"
        ],
        "MasterSkills": [
          "perception"
        ],
        "OtherAbilities": [
          "drow magic",
          "light blindness"
        ],
        "Senses": [
          "darkvision 60 ft."
        ]
      },
      "Elf": {
        "Immunities": [
          "elven"
        ],
        "MasterSkills": [
          "perception",
          "mysticism"
        ],
        "OtherAbilities": [
          "elven magic"
        ],
        "Senses": [
          "low-light vision"
        ]
      },
      "Half-elf": {
        "AditionalAbilities": {
          "GoodSkills": 1
        },
        "MasterSkills": [
          "perception",
          "mysticism"
        ],
        "OtherAbilities": [
          "elven blood"
        ],
        "Senses": [
          "low-light vision"
        ]
      }
    }
  },
  "Evil": {
    "Description": "This subtype is applied to evil creatures"
  },
  "Extraplanar": {
    "Description": "This subtype is applies to creatures originating from another plane"
  },
  "Fire": {
    "Description": "This subtype is usually applied to outsiders with a connection to the Plane of Fire and creatures with a strong affinity to fire.",
    "Immunities": [
      "fire"
    ],
    "Vulnerable": [
      "cold"
    ]
  },
  "Giant": {
    "Description": "This subtype is applied to giants and creatures related to giants.",
    "MasterSkills": [
      "intimidate",
      "perception"
    ],
    "Senses": [
      "low-light vision"
    ]
  },
  "Gnome": {
    "Description": "This subtype is applied to gnomes and creatures related to gnomes.",
    "MasterSkills": [
      "culture"
    ],
    "OtherAbilities": [
      "eternal hope",
      "gnome magic"
    ],
    "Senses": [
      "low-light vision"
    ]
  },
  "Goblinoid": {
    "Description": "This subtype is applied to humanoids of various goblinoid subspecies, such as space goblins.",
    "GoodSkills": [
      "survival"
    ],
    "MasterSkills": [
      "engineering",
      "stealth"
    ],
    "OtherAbilities": [
      "fast",
      "tinker"
    ],
    "Senses": [
      "darkvision 60 ft."
    ]
  },
  "Good": {
    "Description": "This subtype is applied to good aligned creatures"
  },
  "Gray": {
    "Description": "This subtype is applied to the humanoid aliens known as grays and creatures related to grays.",
    "Languages": [
      "telepathy 100 ft."
    ],
    "OtherAbilities": [
      "phase"
    ],
    "Senses": [
      "darkvision 60 ft."
    ]
  },
  "Halfling": {
    "Description": "This subtype is applied to halflings and creatures related to halflings.",
    "GoodSkills": [
      "acrobatics",
      "athletics"
    ],
    "MasterSkills": [
      "perception",
      "stealth"
    ],
    "OtherAbilities": [
      "halfling luck",
      "sneaky"
    ]
  },
  "Human": {
    "AditionalAbilities": {
      "GoodSkills": 1,
      "SpecialAbilities": 1
    },
    "Description": "This subtype is applied to humans and creatures related to humans."
  },
  "Ikeshti": {
    "Description": "This subtype is applied to ikeshtis and creatures related to ikeshtis.",
    "OtherAbilities": [
      "desert survivor",
      "shed skin",
      "squirt blood"
    ],
    "Speed": [
      "climb 20 ft."
    ]
  },
  "Incorporeal": {
    "Description": "Creatures with this subtype have no physical bodies.",
    "OtherAbilities": [
      "incorporeal"
    ]
  },
  "Inevitable": {
    "Abilities": [
      "regeneration (Ex) (suppressed by chaotic-aligned attacks)"
    ],
    "Description": "Inevitables are construct-like outsiders built to enforce the laws of the universe.",
    "Languages": [
      "truespeech"
    ],
    "OtherAbilities": [
      "constructed"
    ],
    "Senses": [
      "darkvision 60 ft.",
      "low-light vision"
    ]
  },
  "Kasatha": {
    "Description": "This subtype is applied to kasathas and creatures related to kasathas.",
    "GoodSkills": [
      "culture"
    ],
    "MasterSkills": [
      "acrobatics",
      "athletics"
    ],
    "OtherAbilities": [
      "desert stride",
      "four-armed"
    ]
  },
  "Lashunta": {
    "Description": "This subtype is applied to lashuntas and creatures related to lashuntas.",
    "OtherAbilities": [
      "limited telepathy"
    ],
    "Spell-likeAbilities": {
      "1/day": [
        "detect thoughts"
      ],
      "atWill": [
        "daze",
        "psychokinetic hand"
      ]
    }
  },
  "Lawful": {
    "Description": "This subtype is applied to lawful aligned creatures"
  },
  "Magical": {
    "Description": "This subtype is applies to creatures of magical origins"
  },
  "Maraquoi": {
    "Description": "This subtype is applied to maraquoi and creatures related to maraquoi.",
    "MasterSkills": [
      "survival"
    ],
    "OtherAbilities": [
      "prehensile tail"
    ],
    "Senses": [
      "low-light vision",
      "blindsense (sound) 30 ft"
    ],
    "Speed": [
      "climb 20 ft."
    ]
  },
  "Native": {
    "Description": "This subtype is applies to native creatures"
  },
  "Orc": {
    "Description": "This subtype is applied to orcs and creatures who are related to orcs.",
    "SubRaces": {
      "Half-orc": {
        "Abilities": [
          "ferocity"
        ],
        "OtherAbilities": [
          "intimidate",
          "survival"
        ],
        "Senses": [
          "darkvision 60 ft."
        ]
      },
      "Orc": {
        "Abilities": [
          "ferocity"
        ],
        "Senses": [
          "darkvision 60 ft."
        ]
      }
    }
  },
  "Plantlike": {
    "Abilities": [
      "plantlike"
    ],
    "Description": "Plantlike creatures have many of the characteristics of plants."
  },
  "Protean": {
    "Abilities": [
      "amorphous",
      "change shape"
    ],
    "Description": "Proteans are serpentine outsiders of pure chaos native to the Maelstrom.",
    "Immunities": [
      "acid"
    ],
    "OtherAbilities": [
      "grab ability with its natural attacks"
    ],
    "Resistance": [
      "electricity 10",
      "sonic 10"
    ],
    "Senses": [
      "blindsense 30 ft."
    ],
    "Speed": [
      "fly 60 ft."
    ]
  },
  "Reptoid": {
    "Description": "This subtype is applied to the shapechanging aliens known as reptoids and creatures related to reptoids.",
    "OtherAbilities": [
      "change shape",
      "natural weapons",
      "cold-blooded"
    ],
    "Senses": [
      "low-light vision"
    ]
  },
  "Ryphorian": {
    "AditionalAbilities": {
      "SpecialAbilities": 1
    },
    "Description": "This subtype is applied to ryphorians and creatures related to ryphorians.",
    "MasterSkills": [
      "perception"
    ],
    "OtherAbilities": [
      "trimorphic"
    ],
    "Senses": [
      "low-light vision"
    ]
  },
  "Sarcesian": {
    "AditionalAbilities": {
      "GoodSkills": 1
    },
    "Description": "This subtype is applied to sarcesians and creatures related to sarcesians.",
    "OtherAbilities": [
      "void flyer"
    ],
    "Senses": [
      "low-light vision"
    ]
  },
  "Shapechanger": {
    "Abilities": [
      "change shape"
    ],
    "Description": "This subtype is applied to creatures that can dramatically alter their forms."
  },
  "Shirren": {
    "Description": "This subtype is applied to shirrens and creatures related to shirrens.",
    "GoodSkills": [
      "culture",
      "diplomacy"
    ],
    "OtherAbilities": [
      "communalism",
      "limited telepathy"
    ],
    "Senses": [
      "blindsense (vibration) 30 ft."
    ]
  },
  "Skittermander": {
    "Description": "This subtype is applied to skittermanders and creatures related to skittermanders.",
    "OtherAbilities": [
      "grappler",
      "hyper",
      "six-armed"
    ],
    "Senses": [
      "low-light vision"
    ]
  },
  "Swarm": {
    "Attacks": [
      "melee swarm attack (1d6+2 P)"
    ],
    "DefensiveAbilities": [
      "swarm defenses"
    ],
    "Description": "This subtype is applied to any collection of Fine, Diminutive, or Tiny creatures (usually vermin) that acts as a single creature. A single swarm usually occupies a square (if it is made up of nonflying creatures) or a cube (if it is made up of flying creatures) 10 feet on a side, but its reach is 0 feet. A swarm can move through cracks or holes large enough for its component creatures to fit through. In order to attack, a swarm moves into an opponent's space, which provokes an attack of opportunity. Spellcasting or concentrating on spells within the area of a swarm requires a successful caster level check (DC = 20 + spell level). Using skills that involve patience and concentration, such as Computers, within the area of a swarm requires a successful DC 20 Will saving throw.",
    "Immunities": [
      "swarm"
    ],
    "OffensiveAbilities": [
      "distraction"
    ]
  },
  "Technological": {
    "Description": "This subtype is applies to creatures of technological origins"
  },
  "Verthani": {
    "AditionalAbilities": {
      "GoodSkills": 1
    },
    "Description": "This subtype is applied to verthani and creatures related to verthani.",
    "OtherAbilities": [
      "easily augmented",
      "skin mimic"
    ],
    "Senses": [
      "low-light vision"
    ]
  },
  "Vesk": {
    "Description": "This subtype is applied to vesk and creatures related to vesk.",
    "OtherAbilities": [
      "armor savant",
      "fearless",
      "natural weapons"
    ],
    "Senses": [
      "low-light vision"
    ]
  },
  "Water": {
    "Description": "This subtype is usually applied to outsiders with a connection to the Plane of Water.",
    "MasterSkills": [
      "athletics"
    ],
    "Speed": [
      "swim 30 ft."
    ]
  },
  "Ysoki": {
    "Description": "This subtype is applied to ysoki and creatures related to ysoki.",
    "GoodSkills": [
      "survival"
    ],
    "MasterSkills": [
      "engineering",
      "stealth"
    ],
    "OtherAbilities": [
      "cheeck pouches",
      "moxie"
    ],
    "Senses": [
      "darkvision 60 ft."
    ]
  },

//
//Dragon Entries
//
  "Black Dragon": {
    "Abilities": [
      "Breath weapon (line 30 ft. + 10 feet per 2 CR, 1d6 A + 1d6 per CR)",
      "frightful presence (CR 11+, 60 feet + 10 feet per CR)",
      "spell-like abilities (CR 10+)"
    ],
    "Alignment": "Chaotic evil",
    "DR": {
      "CR12": "10/magic",
      "CR15": "15/magic",
      "CR17": "20/magic",
      "DR10": "5/magic"
    },
    "Description": "Black dragons are callous and enjoy using fear to exert their influence over others.",
    "Immunities": [
      "acid"
    ],
    "MasterSkills": [
      "athletics"
    ],
    "Required Creature Type": "Dragon",
    "SR": {
      "CR10": "11+CR"
    },
    "Senses": [
      "blindsense 60 ft.",
      "darkvision 120 ft."
    ],
    "SpecialAbilities": {
      "Swamp Stride (Ex)": "A black dragon can move through bogs and quicksand without penalty at its normal speed."
    },
    "Speed": [
      "swim 60 ft."
    ]
  },
  "Blue Dragon": {
    "Abilities": [
      "Breath weapon (line 30 feet + 10 feet per 2 CR, 1d8 E + 1d8 per CR)",
      "frightful presence (CR 9+, 60 feet + 10 feet per CR)",
      "spell-like abilities (CR 9+)"
    ],
    "Alignment": "Lawful evil.",
    "DR": {
      "CR13": "10/magic",
      "CR15": "15/magic",
      "CR17": "20/magic",
      "DR11": "5/magic"
    },
    "Description": "Stacking plans within plans, blue dragons obsessively dwell on their pet projects.",
    "Immunities": [
      "electricity"
    ],
    "Required Creature Type": "Dragon",
    "SR": {
      "CR12": "11+CR"
    },
    "Senses": [
      "blindsense 60 ft.",
      "darkvision 120 ft."
    ],
    "SpecialAbilities": {
      "Sound Imitation (Ex)": "A blue dragon can mimic any voice or sound it has heard by succeeding at a Bluff check opposed by a listener's Sense Motive check."
    },
    "Speed": [
      "burrow 60 ft."
    ]
  },
  "Green Dragon": {
    "Abilities": [
      "Breath weapon (cone 15 feet + 5 feet per 2 CR, 1d6 A + 1d6 per CR)",
      "frightful presence (CR 9+, 60 feet + 10 feet per CR)",
      "spell-like abilities (CR 9+)"
    ],
    "Alignment": "Lawful evil",
    "DR": {
      "CR13": "10/magic",
      "CR15": "15/magic",
      "CR17": "20/magic",
      "DR11": "5/magic"
    },
    "Description": "Of all the chromatic dragons, green dragons seem the most reasonable, but they will turn on their so-called allies at a moment's notice if profit is on the line.",
    "Immunities": [
      "acid"
    ],
    "MasterSkills": [
      "acrobatics"
    ],
    "OtherAbilities": [
      "water breathing"
    ],
    "Required Creature Type": "Dragon",
    "SR": {
      "CR11": "11+CR"
    },
    "Senses": [
      "blindsense 60 ft.",
      "darkvision 120 ft."
    ],
    "SpecialAbilities": {
      "Woodland Stride (Ex)": "A green dragon can move through natural foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically altered affect it normally."
    },
    "Speed": [
      "fly 60 ft. (perfect)",
      "swim 40 ft."
    ]
  },
  "Red Dragon": {
    "Abilities": [
      "Breath weapon (cone 15 feet + 5 feet per 2 CR, 1d10 F + 1d10 per CR)",
      "frightful presence (CR 10+, 60 feet + 10 feet per CR)",
      "spell-like abilities (CR 10+)"
    ],
    "Alignment": "Chaotic evil",
    "DR": {
      "CR12": "10/magic",
      "CR14": "15/magic",
      "CR16": "20/magic",
      "DR10": "5/magic"
    },
    "Description": "Red dragons are quite imperious and brook no disrespect from lowly humanoids, but they can be swayed by copious amounts of groveling.",
    "Immunities": [
      "fire"
    ],
    "Required Creature Type": "Dragon",
    "SR": {
      "CR12": "11+CR"
    },
    "Senses": [
      "blindsense 60 feet",
      "darkvision 120 feet",
      "sense through (vision [smoke only])"
    ],
    "Vulnerable": [
      "cold"
    ]
  },
  "White Dragon": {
    "Abilities": [
      "Breath weapon (cone 15 feet + 10 feet per 2 CR, 1d6 C + 1d6 per CR)",
      "frightful presence (CR 10+, 60 feet + 10 feet per CR)",
      "spell-like abilities (CR 10+)."
    ],
    "Alignment": "Chaotic evil",
    "DR": {
      "CR12": "10/magic",
      "CR14": "15/magic",
      "CR16": "20/magic",
      "CR9": "5/magic"
    },
    "Description": "Similar to the terrain they prefer, white dragons appear cold and emotionless until angered.",
    "Immunities": [
      "cold"
    ],
    "Required Creature Type": "Dragon",
    "SR": {
      "CR12": "11+CR"
    },
    "Senses": [
      "blindsense 60 ft.",
      "darkvision 120 ft.",
      "sense through (vision [snow only])"
    ],
    "SpecialAbilities": {
      "Icewalking (Ex)": "A white dragon can move across icy surfaces without penalty and doesn't need to attempt Acrobatics checks to run or charge on ice. In addition, a white dragon can climb icy surfaces as if under the effect of spider climb."
    },
    "Speed": [
      "burrow 30 ft.",
      "swim 60 ft."
    ],
    "Vulnerable": [
      "fire"
    ]
  }

};

classCombatant = ["Solarian","Soldier"];
classExpert = ["Envoy","Mechanic","Operative"];
classSpellcaster = ["Mystic","Technomancer"];

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

var grafts = {
  "Aerial": {
    "CRMin":"1",
    "Description": "Aerial creatures are native denizens of the Elemental Plane of Air, gas giant planets, or similar landless environments, and have unique adaptations to help them survive there.",
    "SubTypeGraft": "Air",
    "DamageMod": "Natural 1/2 electricity",
    "Text": ["Gains the extraplanar subtype when it isn't on the Elemental Plane of Air."]
  },
  "Aqueous": {
    "CRMin":"1",
    "Description": "Aqueous creatures are native denizens of the Elemental Plane of Water or similar landless environments, able to survive both in and out of water.",
    "SubTypeGraft":"Water",
    "OtherAbilities": "amphibious",
    "AttackChanges": ["Natural all piercing","electricity to cold","fire to cold"],
    "Text": ["Gains the extraplanar subtype when it isn't on the Elemental Plane of Water."]
  },
  "Astral": {
    "Description": "Astral creatures are natives of the Astral Plane, a vast silvery void between planes.",
    "Text": ["Gains the extraplanar subtype when it isn't on the Astral Plane."],
    "DR": {
      "min": "1/-",
      "DR": "CR-10/-",
      "IfDRExists":{
        "Resistance": ["electricity CR-5"]
      }
    }
  },
  "Celestial": {
    "Alignment": "Alignment changes to good.",
    "Description": "Celestial creatures are natives of one of the good-aligned Outer Planes.",
    "DR": {
      "DR": "CR-10/evil",
      "IfDRExists":{
        "Resistance": ["electricity CR-5"]
      }
    },
    "Text": ["When the creature isn't on its home plane, it gains the extraplanar subtype."]
  },
  "Cthonic": {
    "CRMin":"1",
    "Description": "Cthonic creatures are native denizens of the Elemental Plane of Earth or underground environments, and they have adapted to exist in dirt and rock.",
    "Senses": {
      "blindsense (vibration)":["1",30],
      "blindsight (vibration)":["8",30]
    },
    "SubTypeGraft": "Earth",
    "DamageMod": "DR/cold iron",
    "Text": ["Gains the extraplanar subtype when it isn't on the Elemental Plane of Earth."]
  },
  "Cybernetic": {
    "CRMin":"1/2",
    "ArmorUpgrade": {
      "CR3-7":1,
      "CR8":2
    },

    "Description": "A cybernetic creature has been augmented by technological implants (although the same simple template graft can be used to represent creatures augmented by biotech).",
    "Weapon": [
      "CR+1"
    ],
  },
  "Entropic": {
    "Alignment": "Alignment changes to chaotic.",
    "Description": "Entropic creatures are natives of one of the Outer Planes where chaos is paramount. A GM can allow creatures summoned with the summon creature spell that would normally have the astral, celestial, or fiendish simple template graft instead have the entropic simple template graft.",
    "DR": {
      "DR": "CR-10/lawful",
      "IfDRExists":{
        "Resistance": ["acid CR-5"]
      }
    },
    "Text": ["When the creature isn't on its home plane, it gains the extraplanar subtype."]
  },
  "Fiendish": {
    "Alignment": "evil",
    "Description": "Fiendish creatures are natives of one of the evil-aligned Outer Planes.",
    "DR": {
      "DR": "CR-10/good",
      "IfDRExists":{
        "Resistance": ["fire CR-5"]
      }
    },
    "Text": ["When the creature isn't on its home plane, it gains the extraplanar subtype."]
  },
  "Fiery": {
    "CRMin":"1",
    "Description": "Fiery creatures are native denizens of the Elemental Plane of Fire or habitats covered in fire, and they have unique adaptations to help them survive there.",
    "SubTypeGraft": "Fire",
    "DamageMod": "Natural 1/2 fire",
    "Text": ["Gains the extraplanar subtype when it isn't on the Elemental Plane of Fire."]
  },
  "Giant": {
    "CRMin":"1",
    "Description": "Giant creatures are larger than typical members of their species, and might represent a subspecies that has grown to unusual size due to environmental conditions.",
    "Size": 1,
    "Space": 1,
    "Reach": 1
  },
  "Miniature": {
    "Description": "Miniature creatures are smaller than typical members of their species and might represent a subspecies that has shrunk down due to environmental conditions.",
    "Size":-1,
    "Space": -1,
    "Reach": -1
  },
  "Phrenic": {
    "Adjustments": {"will":2},
    "OtherAbilities":["limited telepathy"],
    "Description": "Phrenic creatures have minor innate mental powers, which they might have developed due to high levels of native psychic energy in their environments.",
    "Senses": {
      "Blindsense (emotion)":["7",5]
    },
  },
  "Resolute": {
    "Alignment": "lawful",
    "DR": {
      "DR": "CR-10/chaotic",
      "IfDRExists":{
        "Resistance": ["cold CR-5"]
      }
    },
    "Description": "Resolute creatures are natives of one of the Outer Planes where law is paramount. A GM can allow creatures summoned with the summon creature spell that would normally have the astral, celestial, or fiendish simple template graft instead have the resolute simple template graft.",
    "Text": ["When the creature isn't on its home plane, it gains the extraplanar subtype."]
  },
  "Synthetic": {
    "Description": "Synthetic creatures are constructed through the use of extremely advanced technology, similar to that which makes androids possible.",
    "SpecialAbilities": {
      "Constructed (Ex)": "For effects targeting creatures by type, synthetic creatures count as both their actual creature type and constructs (whichever type allows an ability to affect them for abilities that affect only one type, and whichever type is worse for abilities that affect both creature types). They receive a +2 racial bonus to saving throws against disease, mind-affecting effects, poison, and sleep, unless those effects specifically target constructs. In addition, synthetic creatures do not breathe or suffer the normal environmental effects of being in a vacuum.",
      "Synthetic (Ex)": "The creature is affected by any ability that specifies it functions against androids."
    }
  },
  "Two-Headed": {
    "CRMin":"3",
    "Description": "This creature is a rare two-headed mutant or a member of a two-headed subspecies of a more common race.",
    "OtherAbilities": ["unflankable"],
    "MasterSkills": ["perception"],
    "AttackChanges": ["bite","bite x2 as full attack -3 penalty"]
  },
  "Umbral": {
    "Description": "Umbral creatures exist in the lightless places of the universe, which might be the Shadow Plane, the interior of unlit caves, or the bottom of the darkest oceans.",
    "Senses": {
      "Darkvision":[60],
      "Blindsense (vibration)":["7",5]
    },
  }
}

var statLabels = ["eac","kac","fortitude","reflex","will","hitPoints","abilityDCBase","spellDC","abilityScoreModifiers","specialAbilities","masterSkills","goodSkills","highAttackBonus","lowAttackBonus","rangedEnergy","rangedKinetic","meleeStandard","meleeThree","meleeFour"];
var CRLabels = ["CR 1/3","CR 1/2","CR 1","CR 2","CR 3","CR 4","CR 5","CR 6","CR 7","CR 8","CR 9","CR 10","CR 11","CR 12","CR 13","CR 14","CR 15","CR 16","CR 17","CR 18","CR 19","CR 20","CR 21","CR 22","CR 23","CR 24","CR 25"]
