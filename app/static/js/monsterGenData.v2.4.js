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

var statLabels = ["eac","kac","fortitude","reflex","will","hitPoints","abilityDCBase","spellDC","abilityScoreModifier0","abilityScoreModifier1","abilityScoreModifier2","specialAbilities","masterSkills","goodSkills","highAttackBonus","lowAttackBonus","rangedEnergy","rangedKinetic","meleeStandard","meleeThree","meleeFour"];
var CRLabels = ["CR 1/3","CR 1/2","CR 1","CR 2","CR 3","CR 4","CR 5","CR 6","CR 7","CR 8","CR 9","CR 10","CR 11","CR 12","CR 13","CR 14","CR 15","CR 16","CR 17","CR 18","CR 19","CR 20","CR 21","CR 22","CR 23","CR 24","CR 25"]

xp = {
  "1/3": "135",
  "1/2": "200",
  "1": "400",
  "2": "600",
  "3": "800",
  "4": "1,200",
  "5": "1,600",
  "6": "2,400",
  "7": "3,200",
  "8": "4,800",
  "9": "6,400",
  "10": "9,600",
  "11": "12,800",
  "12": "19,200",
  "13": "25,600",
  "14": "38,400",
  "15": "51,200",
  "16": "76,800",
  "17": "102,400",
  "18": "153,600",
  "19": "204,800",
  "20": "307,200",
  "21": "409,600",
  "22": "614,400",
  "23": "819,200",
  "24": "1,228,800",
  "25": "1,638,400"
};

var energyMeleeTypes = {
  "Acid":"A",
  "Cryo": "C",
  "Flame": "F",
  "Plasma": "E & F",
  "Shock": "E",
  "Sonic": " So"
};

var energyRangedTypes = {
  "Acid":"A",
  "Cryo": "C",
  "Flame": "F",
  "Laser": "F",
  "Plasma": "E & F",
  "Shock": "E",
  "Sonic": " So"
};

var kineticMeleeTypes = {
  "Bludgeoning": "B",
  "Piercing": "P",
  "Slashing": "S"
};

var kineticRangedTypes = {
  "Projectile": "P",
};

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
    "Immunities": ["construct immunities"],
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
    "Description": "A humanoid usually has two arms, two legs, and one head, or it has a humanlike torso, arms, and a head. Humanoids have few or no supernatural or extraordinary abilities, but most can speak and usually have well-developed societies."
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
    "Senses": ["Blindsight (vibration) 60 ft.","Sightless"],
    "OtherAbilities": ["Mindless"],
    "Immunities": ["Ooze immunities"]
  },
  "Outsider": {
    "Adjustments": {"anySave":2,"attackMod":1},
    "Description": "An outsider is at least partially composed of the essence (but not necessarily the material) of a plane other than the Material Plane. Some creatures start out as another type and become outsiders when they attain a higher or lower state of spiritual existence.",
    "Senses": ["Darkvision 60 ft."]
  },
  "Plant": {
    "Adjustments": {"fortitude":2},
    "Description": "This type describes vegetable creatures. Note that regular plants, such as those growing in gardens or fields, lack Wisdom and Charisma modifiers and are objects, not creatures, even though they are alive.",
    "Senses": ["Low-light vision"],
    "Immunities": ["Plant immunities"]
  },
  "Undead": {
    "Adjustments": {"fortitude":2,"con":"-"},
    "Description": "Undead are once-living creatures animated by magic or advanced technological forces.",
    "Senses": ["Darkvision 60 ft."],
    "OtherAbilities": ["Unliving"],
    "Immunities": ["Undead immunities"]
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
subTypeHumanoid = ["Android","Damai","Dwarf","Elf","Gnome","Goblinoid","Gray","Halfling","Human","Ikeshti","Kasatha","Lashunta","Maraquoi","Orc","Pahtra","Phentomite","Reptoid","Ryphorian","Sarcesian","Shirren","Skittermander","Verthani","Vesk","Vlaka","Ysoki"];
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
    "PlusAbilities": [
      "+CR to skill checks to recall knowledge"
    ],
    "Resistance": [
      "electricity 10",
      "fire 10"
    ],
    "SpecialAbilities": [
      "Extension of All (Ex)"
    ]
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
    "PlusAbilities": [
      "+4 to saving throws against poison"
    ],
    "Resistance": [
      "cold 10",
      "sonic 10"
    ],
    "Senses": [
      "Low-light vision"
    ],
    "SpecialAbilities": [
      "Healing Channel (Su)",
      "Speak with Animals (Su)"
    ]
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
    "PlusAbilities": [
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
    "SpecialAbilities": [
      "Protective Aura (Su)"
    ]
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
    "PlusAbilities": [
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
    "SpecialAbilities": [
      "Aura of Menace (Su)"
    ],
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
    "Description": "This subtype is applied to chaotic aligned creatures",
    "Alignment": "Chaotic",
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
    "SpecialAbilities": [
      "Summon Allies (Sp)"
    ],
    "Spell-likeAbilities": {
      "1/day": [
        "summon allies"
      ]
    },
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
  "Damai": {
    "Description": "This subtype is applied to damais and creatures related to damais",
    "MasterSkills": [
      "stealth"
      "survival"
    ], 
    "OtherAbilities": [
      "scrappy"
    ],
    "Senses": [
      "low-light vision"
    ]
  },	
  "Demon": {
    "SpecialAbilities": [
      "Summon Allies (Sp)"
    ],
    "Spell-likeAbilities": {
      "1/day": [
        "summon allies"
      ]
    },
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
    "SpecialAbilities": [
      "Summon Allies (Sp)"
    ],
    "Spell-likeAbilities": {
      "1/day": [
        "summon allies"
      ]
    },
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
      "elemental immunities"
    ]
  },
  "Elf": {
    "Description": "This subtype is applied to elves and creatures related to elves.",
    "SubRaces": {
      "Drow": {
        "Immunities": [
          "drow immunities"
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
          "elven immunities"
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
        "AdditionalAbilities": {
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
    "Description": "This subtype is applied to evil creatures",
    "Alignment": "Evil"
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
    "SubRaces": {
      "Space Goblin": {
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
      "Hobgoblin": {
        "MasterSkills": [
          "intimidate",
          "stealth"
      ],
      "OtherAbilities": [
        "battle hardened"
      ],
      "Senses": [
        "darkvision 60 ft."
      ]
      },
       "Kanabo": {
       "OtherAbilities": [
         "armor savant",
         "kanabo magic"
       ],
       "Senses": [
         "darkvision 60 ft."
        ]
      }
    }
  },
  "Good": {
    "Description": "This subtype is applied to good aligned creatures",
    "Alignment": "Good"
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
    "AdditionalAbilities": {
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
    "Description": "Inevitables are construct-like outsiders built to enforce the laws of the universe.",
    "Languages": [
      "truespeech"
    ],
    "OtherAbilities": [
      "constructed",
      "regeneration (Ex) (suppressed by chaotic-aligned attacks)"
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
    "Languages": [
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
    "Description": "This subtype is applied to lawful aligned creatures",
    "Alignment": "Lawful"
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
        "OtherAbilities": [
          "ferocity"
        ],
        "MasterSkills": [
          "intimidate",
          "survival"
        ],
        "Senses": [
          "darkvision 60 ft."
        ]
      },
      "Orc": {
        "OtherAbilities": [
          "ferocity"
        ],
        "Senses": [
          "darkvision 60 ft."
        ]
      }
    }
  },
  "Pahtra": {
    "Description": "This subtype is applied to pahtras and creatures related to pahtras"
    "OtherAbilities": [
      "nimble",
      "wary"
    ],
    "MasterSkills": [
      "acrobatics",
      "stealth"
    ],
    "Senses": [
      "darkvision 60 ft.",
      "low-light vision"
    ]
  },
  "Phentomite": {
    "Description": "This subtype is applied to phentomites and creatures related to phentomites."
    "OtherAbilities": [
      "acclimated",
      "heat tracking"
    ],
    "MasterSkills": [
      "acrobatics",
      "athletics"
    ],
    "Senses": [
      "darkvision 60 ft.",
    ]
  },
  "Plantlike": {
    "OtherAbilities": [
      "plantlike"
    ],
    "Description": "Plantlike creatures have many of the characteristics of plants."
  },
  "Protean": {
    "OtherAbilities": [
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
      "fly 60 ft. (average)"
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
    "AdditionalAbilities": {
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
    "AdditionalAbilities": {
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
    "OtherAbilities": [
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
    ],
    "Languages": [
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
    "SpecialAbilities": [
      "Swarm Defenses (Ex)",
      "Distraction (Ex)"
    ],
    "Description": "This subtype is applied to any collection of Fine, Diminutive, or Tiny creatures (usually vermin) that acts as a single creature. A single swarm usually occupies a square (if it is made up of nonflying creatures) or a cube (if it is made up of flying creatures) 10 feet on a side, but its reach is 0 feet. A swarm can move through cracks or holes large enough for its component creatures to fit through. In order to attack, a swarm moves into an opponent's space, which provokes an attack of opportunity. Spellcasting or concentrating on spells within the area of a swarm requires a successful caster level check (DC = 20 + spell level). Using skills that involve patience and concentration, such as Computers, within the area of a swarm requires a successful DC 20 Will saving throw.",
    "Immunities": [
      "swarm immunities"
    ]
  },
  "Technological": {
    "Description": "This subtype is applies to creatures of technological origins"
  },
  "Verthani": {
    "AdditionalAbilities": {
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
  "Vlaka": {
    "Description": "This subtype is applied to vlakas and other creatures related to vlakas",
    "Resistance": [
      "cold 5"
    ],
    "OtherAbilities": [
      "buoy",
      "cooperative",
      "versed",
      "vlaken senses"
    ],
    "MasterSkills": [
      "sense motive"
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
      "cheek pouches",
      "moxie"
    ],
    "Senses": [
      "darkvision 60 ft."
    ]
  }
};

classCombatant = ["Solarian","Soldier"];
classExpert = ["Envoy","Mechanic","Operative"];
classSpellcaster = ["Mystic","Technomancer"];

classData = {
    "Envoy": {
        "AbilitiesByCr": {
            "1": {
                "description":"One 1st-level envoy improvisation and one special ability.",
                "improvisations":{"1st":1},
                "special":1
            },
            "2": {
                "description":"Two 1st-level envoy improvisations and one special ability.",
                "improvisations":{"1st":2},
                "special":1
            },
            "4": {
                "description":"One 4th-level envoy improvisation, one 1st-level envoy improvisation, and one special ability.",
                "improvisations":{"1st":1,"4th":1},
                "special":1
            },
            "6": {
                "description":"One 6th-level envoy improvisation, one 4th-level envoy improvisation, one 1st-level envoy improvisation, and one special ability.",
                "improvisations":{"1st":1,"4th":1,"6th":1},
                "special":1
            },
            "8": {
                "description":"One 8th-level envoy improvisation, one 6th-level envoy improvisation, one 4th-level envoy improvisation, and one special ability.",
                "improvisations":{"1st":1,"4th":1,"6th":1,"8th":1},
                "special":1
            },
            "9": {
                "description":"One 8th-level envoy improvisation, one 6th-level envoy improvisation, one 4th-level envoy improvisation, skillful special ability, and one special ability.",
                "improvisations":{"4th":1,"6th":1,"8th":1},
                "skillful":1,
                "special":1
            },
            "10": {
                "description":"Two 8th-level envoy improvisations, one 6th-level envoy improvisation, one 4th-level envoy improvisation, skillful special ability, and one special ability.",
                "improvisations":{"4th":1,"6th":1,"8th":2},
                "skillful":1,
                "special":1
            },
            "12": {
                "description":"Three 8th-level envoy improvisations, one 6th-level envoy improvisation, skillful special ability, and one special ability.",
                "improvisations":{"6th":1,"8th":3},
                "skillful":1,
                "special":1
            },
            "16": {
                "description":"Four 8th-level envoy improvisations, skillful special ability, and one special ability.",
                "improvisations":{"8th":4},
                "skillful":1,
                "special":1
            },
            "20": {
                "description":"True expertise, four 8th-level envoy improvisations, skillful special ability, and one special ability.",
                "improvisations":{"8th":4},
                "skillful":1,
                "special":1,
                "features":["true expertise"],
            }
        },
        "AbilityScoreModifiers": ["Cha","Int","Dex"],
        "Adjustments": {"reflex":2},
        "Description": "Charismatic envoys assist their allies through inspiration and tactical orders.",
        "Gear": "Light armor (item level = CR), small arm (item level = CR), and basic melee weapon (item level = CR-1).",
        "RequiredArray": "Expert",
        "MasterSkills": [
          "sense Motive"
        ],
        "MasterSkillChoice":["Bluff", "Diplomacy" ,"Intimidate"]
    },
    "Mechanic": {
        "AbilitiesByCr": {
            "1": {
              "description":"Artificial intelligence, custom rig, one special ability.",
              "features":["Artificial intelligence","Custom Rig"],
              "exocortex":["Target Tracking"],
              "special":1
            },
            "2": {
              "description":"Artificial intelligence, custom rig, one 2nd-level mechanic trick, and one special ability.",
              "features":["Artificial intelligence","Custom Rig"],
              "trick":{"2nd":1},
              "exocortex":["Target Tracking"],
              "special":1
            },
            "3": {
              "description":"Artificial intelligence, custom rig, overload, and one 2nd-level mechanic trick.",
              "features":["Artificial intelligence","Custom Rig","Overload"],
              "exocortex":["Target Tracking"],
              "trick":{"2nd":1}
            },
            "4": {
              "description":"Artificial intelligence, custom rig, overload, and two 2nd-level mechanic tricks.",
              "features":["Artificial intelligence","Custom Rig","Overload"],
              "exocortex":["Target Tracking"],
              "trick":{"2nd":2}
            },
            "5": {
              "description":"Artificial intelligence, custom rig, overload, remote hack, and two 2nd-level mechanic tricks.",
              "features":["Artificial intelligence","Custom Rig","Overload","Remote Hack"],
              "exocortex":["Target Tracking","Wireless Hack"],
              "trick":{"2nd":2}
            },
            "7": {
              "description":"Artificial intelligence, overload, remote hack, expert rig, miracle worker 1/day, and two 2nd-level mechanic tricks.",
              "features":["Artificial intelligence","Overload","Remote Hack","Expert Rig","Miracle Worker 1/day"],
              "exocortex":["Target Tracking","Wireless Hack"],
              "trick":{"2nd":2}
            },
            "8": {
              "description":"Artificial intelligence, overload, remote hack, expert rig, miracle worker 1/day, one 8th-level mechanic trick, and one 2nd-level mechanic trick.",
              "features":["Artificial intelligence","Overload","Remote Hack","Expert Rig","Miracle Worker 1/day"],
              "exocortex":["Target Tracking","Wireless Hack"],
              "trick":{
                "8th":1,
                "2nd":1
              }
            },
            "9": {
              "description":"Artificial intelligence, overload, remote hack, expert rig, miracle worker 1/day, override, one 8th-level mechanic trick, and one 2nd-level mechanic trick.",
              "features":["Artificial intelligence","Overload","Remote Hack","Expert Rig","Miracle Worker 1/day","Override"],
              "exocortex":["Target Tracking","Wireless Hack"],
              "trick":{
                "8th":1,
                "2nd":1
              }
            },
            "11": {
              "description":"Artificial intelligence, overload, remote hack, expert rig, miracle worker 2/day, override, and two 8th-level mechanic tricks.",
              "features":["Artificial intelligence","Overload","Remote Hack","Expert Rig","Miracle Worker 2/day","Override"],
              "exocortex":["Twin Tracking","Wireless Hack"],
              "trick":{
                "8th":2
              }
            },
            "13": {
              "description":"Artificial intelligence, overload, remote hack, miracle worker 2/day, override, advanced rig, and two 8th-level mechanic tricks.",
              "features":["Artificial intelligence","Overload","Remote Hack","Miracle Worker 2/day","Override","Advanced Rig"],
              "exocortex":["Twin Tracking","Wireless Hack"],
              "trick":{
                "8th":2
              }
            },
            "14": {
              "description":"Artificial intelligence, overload, remote hack, miracle worker 2/day, override, advanced rig, one 14th-level mechanic trick, and one 8th-level mechanic trick.",
              "features":["Artificial intelligence","Overload","Remote Hack","Miracle Worker 2/day","Override","Advanced Rig"],
              "exocortex":["Twin Tracking","Wireless Hack"],
              "trick":{
                "8th":1,
                "14th":1
              }
            },
            "16": {
              "description":"Artificial intelligence, overload, remote hack, miracle worker 3/day, override, advanced rig, and two 14th-level mechanic tricks.",
              "features":["Artificial intelligence","Overload","Remote Hack","Miracle Worker 3/day","Override","Advanced Rig"],
              "exocortex":["Twin Tracking","Wireless Hack","Multitasking"],
              "trick":{
                "14th":2
              }
            },
            "18": {
              "description":"Artificial intelligence, overload, remote hack, miracle worker 3/day, override, advanced rig, and three 14th-level mechanic tricks.",
              "features":["Artificial intelligence","Overload","Remote Hack","Miracle Worker 3/day","Override","Advanced Rig"],
              "exocortex":["Twin Tracking","Wireless Hack","Multitasking"],
              "trick":{
                "14th":3
              }
            },
            "19": {
              "description":"Artificial intelligence, overload, remote hack, miracle worker 3/day, override, ghost in the machine, superior rig, and three 14th-level mechanic tricks.",
              "features":["Artificial intelligence","Overload","Remote Hack","Miracle Worker 3/day","Override","Ghost In The Machine","Superior Rig"],
              "exocortex":["Twin Tracking","Wireless Hack","Multitasking"],
              "trick":{
                "14th":3
              }
            },
            "20": {
              "description":"Artificial intelligence, overload, remote hack, miracle worker 3/day, override, ghost in the machine, superior rig, and four 14th-level mechanic tricks.",
              "features":["Artificial intelligence","Overload","Remote Hack","Miracle Worker 3/day","Override","Ghost In The Machine","Superior Rig"],
              "exocortex":["Quad Tracking","Wireless Hack","Multitasking"],
              "trick":{
                "14th":4
              }
            }
        },
        "AbilityScoreModifiers": ["Int","Dex","Con"],
        "Adjustments": {"fortitude":2,"reflex":2,"will":-2},
        "Description": "Experts at dealing with machines, mechanics either use exocortexes to enhance their combat abilities or are accompanied by robotic drones that they can control remotely.",
        "Gear": "Light armor (item level = CR), small arm (item level = CR), and basic melee weapon (item level = CR-1).",
        "RequiredArray": "Expert",
        "MasterSkills": [
          "computers",
          "engineering"
        ],
        "SpecialRules": " All mechanic creatures get the artificial intelligence class feature, which requires a choice between a drone and an exocortex. For a mechanic creature with a drone, build the drone as a separate technological construct of the mechanic’s CR - 2 or use an existing technological construct with the mechanic’s CR - 2. The drone does not get a full suite of actions on its own; each round, the mechanic creature and the drone can each take a move action, a swift action, and a reaction, but only one of them can take a standard action or combine its move and standard actions into a full action. The drone doesn’t have its own CR, it doesn’t contribute to the CR of the encounter, and PCs receive no XP for defeating a drone. For a mechanic creature with an exocortex, add target tracking at CR 1 (see below), wireless hack at CR 5, twin tracking at CR 10, multitasking at CR 15, and quad tracking at CR 20."
    },
    "Mystic": {
        "AbilitiesByCr": {
            "1": {
              "description":"1st-level connection power and one special ability.",
                "connection":[
                  "1st"
                ],
                "special":1
            },
            "2": {
              "description":"1st-level connection power, mindlink, and one special ability.",
              "features":["Mindlink"],
              "connection":[
                "1st"
              ],
              "special":1
            },
            "3": {
              "description":"1st- and 3rd-level connection powers and mindlink.",
              "features":["Mindlink"],
              "connection":[
                "1st",
                "3rd"
              ]
            },
            "6": {
              "description":"1st-, 3rd-, and 6th-level connection powers and mindlink.",
              "features":["Mindlink"],
              "connection":[
                "1st",
                "3rd",
                "6th"
              ]
            },
            "9": {
              "description":"1st-, 3rd-, 6th-, and 9th-level connection powers and mindlink.",
              "features":["Mindlink"],
              "connection":[
                "1st",
                "3rd",
                "6th",
                "9th"
              ]
            },
            "11": {
              "description":"1st-, 3rd-, 6th-, and 9th-level connection powers; mindlink; and telepathic bond.",
              "features":["Mindlink","Telepathic Bond"],
              "connection":[
                "1st",
                "3rd",
                "6th",
                "9th"
              ]
            },
            "12": {
              "description":"1st-, 3rd-, 6th-, 9th-, and 12th-level connection powers; mindlink; and telepathic bond.",
              "features":["Mindlink","Telepathic Bond"],
              "connection":[
                "1st",
                "3rd",
                "6th",
                "9th",
                "12th"
              ]
            },
            "15": {
              "description":"1st-, 3rd-, 6th-, 9th-, 12th-, and 15th-level connection powers; mindlink; and telepathic bond.",
              "features":["Mindlink","Telepathic Bond"],
              "connection":[
                "1st",
                "3rd",
                "6th",
                "9th",
                "12th",
                "15th"
              ]
            },
            "18": {
              "description":"All connection powers, mindlink, and telepathic bond.",
              "features":["Mindlink","Telepathic Bond"],
              "connection":[
                "1st",
                "3rd",
                "6th",
                "9th",
                "12th",
                "15th",
                "18th"
              ]
            },
            "19": {
              "description":"All connection powers, mindlink, telepathic bond, and transcendence.",
              "features":["Mindlink","Telepathic Bond","Transcendence"],
              "connection":[
                "1st",
                "3rd",
                "6th",
                "9th",
                "12th",
                "15th",
                "18th"
              ]
            },
            "20": {
              "description":"All connection powers, mindlink, telepathic bond, transcendence, and enlightenment.",
              "features":["Mindlink","Telepathic Bond","Transcendence","Enlightenment"],
              "connection":[
                "1st",
                "3rd",
                "6th",
                "9th",
                "12th",
                "15th",
                "18th"
              ]
            }
        },
        "AbilityScoreModifiers": ["Wis","Con","Cha"],
        "Adjustments": {"None":0},
        "Description": "Calling on connections to supernatural forces, mystics can manifest magic in a number of different ways.",
        "Gear": "Light armor (item level = CR), small arm (item level = CR), and basic melee weapon (item level = CR-1).",
        "RequiredArray": "Spellcaster",
        "MasterSkills": {
          "Overlord":["diplomacy","intimidate","mysticism"],
          "Xenodruid":["life science","survival","mysticism"],
          "Mindbreaker":["bluff","intimidate","mysticism"],
          "Star Shaman":["perception","piloting","mysticism"],
          "Healer":["medicine","mysticism"],
          "Empath":["perception","sense motive","mysticism"],
          "Akashic":["culture","mysticism"]
        },
        "SpecialRules": " Choose one mystic connection. The mystic creature’s connection powers must come from that connection. Any connection powers that aren’t relevant to the creature (or that can simply be incorporated into the creature’s statistics) don’t need to appear in its stat block. Spells must come from the mystic spell list. Start with connection spells of the corresponding levels and then fill in the remaining slots.Good or master skills chosen from the connection’s associated skills."
    },
    "Operative": {
        "AbilitiesByCr": {
            "1": {
              "description":"Trick attack +1d4 and one special ability.",
              "features":["Trick Attack"],
              "special":1
            },
            "2": {
              "description":"Trick attack +1d4, evasion, one 2nd-level operative exploit, and one special ability.",
              "features":["Trick Attack","Evasion"],
              "exploit": {
                "2nd":1
              },
              "special":1
            },
            "3": {
              "description":"Trick attack +1d8, evasion, quick movement +10 ft., one 2nd-level operative exploit, and one special ability.",
              "features":["Trick Attack","Evasion","Quick Movement 10"],
              "exploit": {
                "2nd":1
              },
              "special":1
            },
            "4": {
              "description":"Trick attack +1d8, evasion, quick movement +10 ft., debilitating trick, and two 2nd-level operative exploits.",
              "features":["Trick Attack","Evasion","Quick Movement 10","Debilitating Trick"],
              "exploit": {
                "2nd":2
              }
            },
            "5": {
              "description":"Trick attack +3d8, evasion, quick movement +10 ft., debilitating trick, specialization exploit, and two 2nd-level operative exploits.",
              "features":["Trick Attack","Evasion","Quick Movement 10","Debilitating Trick","Specialization Exploit"],
              "exploit": {
                "2nd":2
              }
            },
            "6": {
              "description":"Trick attack +3d8, evasion, quick movement +10 ft., debilitating trick, specialization exploit, and one 6th-level operative exploit.",
              "features":["Trick Attack","Evasion","Quick Movement 10","Debilitating Trick","Specialization Exploit"],
              "exploit": {
                "6th":1
              }
            },
            "7": {
              "description":"Trick attack +4d8, evasion, quick movement +10 ft., debilitating trick, uncanny agility, specialization exploit, and one 6th-level operative exploit.",
              "features":["Trick Attack","Evasion","Quick Movement 10","Debilitating Trick","Uncanny Agility","Specialization Exploit"],
              "exploit": {
                "6th":1
              }
            },
            "8": {
              "description":"Trick attack +4d8, evasion, quick movement +10 ft., debilitating trick, uncanny agility, triple attack, specialization exploit, and one 6th-level operative exploit.",
              "features":["Trick Attack","Evasion","Quick Movement 10","Debilitating Trick","Uncanny Agility","Triple Attack","Specialization Exploit"],
              "exploit": {
                "6th":1
              }
            },
            "9": {
              "description":"Trick attack +5d8, evasion, quick movement +20 ft., debilitating trick, uncanny agility, triple attack, specialization exploit, and one 6th-level operative exploit.",
              "features":["Trick Attack","Evasion","Quick Movement 20","Debilitating Trick","Uncanny Agility","Triple Attack","Specialization Exploit"],
              "exploit": {
                "6th":1
              }
            },
            "10": {
              "description":"Trick attack +5d8, evasion, quick movement +20 ft., debilitating trick, uncanny agility, triple attack, specialization exploit, and one 10th-level operative exploit.",
              "features":["Trick Attack","Evasion","Quick Movement 20","Debilitating Trick","Uncanny Agility","Triple Attack","Specialization Exploit"],
              "exploit": {
                "10th":1
              }
            },
            "11": {
              "description":"Trick attack +6d8, evasion, quick movement +20 ft., debilitating trick, uncanny agility, triple attack, specialization power, specialization exploit, and one 10th-level operative exploit.",
              "features":["Trick Attack","Evasion","Quick Movement 20","Debilitating Trick","Uncanny Agility","Triple Attack","Specialization Power","Specialization Exploit"],
              "exploit": {
                "10th":1
              }
            },
            "13": {
              "description":"Trick attack +7d8, evasion, quick movement +20 ft., debilitating trick, uncanny agility, quad attack, specialization power, specialization exploit, and one 10th-level operative exploit.",
              "features":["Trick Attack","Evasion","Quick Movement 20","Debilitating Trick","Uncanny Agility","Quad Attack","Specialization Power","Specialization Exploit"],
              "exploit": {
                "10th":1
              }
            },
            "14": {
              "description":"Trick attack +7d8, evasion, quick movement +20 ft., debilitating trick, uncanny agility, quad attack, specialization power, specialization exploit, and one 14th-level operative exploit.",
              "features":["Trick Attack","Evasion","Quick Movement 20","Debilitating Trick","Uncanny Agility","Quad Attack","Specialization Power","Specialization Exploit"],
              "exploit": {
                "14th":1
              }
            },
            "15": {
              "description":"Trick attack +8d8, evasion, quick movement +30 ft., debilitating trick, uncanny agility, quad attack, specialization power, specialization exploit, and one 14th-level operative exploit.",
              "features":["Trick Attack","Evasion","Quick Movement 30","Debilitating Trick","Uncanny Agility","Quad Attack","Specialization Power","Specialization Exploit"],
              "exploit": {
                "14th":1
              }
            },
            "17": {
              "description":"Trick attack +9d8, evasion, quick movement +30 ft., debilitating trick, uncanny agility, quad attack, double debilitation, specialization power, specialization exploit, and one 14th-level operative exploit.",
              "features":["Trick Attack","Evasion","Quick Movement 30","Debilitating Trick","Uncanny Agility","Quad Attack","Double Debilitation","Specialization Power","Specialization Exploit"],
              "exploit": {
                "14th":1
              }
            },
            "19": {
              "description":"Trick attack +10d8, evasion, quick movement +30 ft., debilitating trick, uncanny agility, quad attack, double debilitation, specialization power, specialization exploit, and two 14th-level operative exploits.",
              "features":["Trick Attack","Evasion","Quick Movement 30","Debilitating Trick","Uncanny Agility","Quad Attack","Double Debilitation","Specialization Power","Specialization Exploit"],
              "exploit": {
                "14th":2
              }
            },
            "20": {
              "description":"Trick attack +10d8, evasion, quick movement +30 ft., debilitating trick, uncanny agility, quad attack, double debilitation, specialization power, specialization exploit, supreme operative, and two 14th-level operative exploits.",
              "features":["Trick Attack","Evasion","Quick Movement 30","Debilitating Trick","Uncanny Agility","Quad Attack","Double Debilitation","Specialization Power","Specialization Exploit","Supreme Operative"],
              "exploit": {
                "14th":2
              }
            }
        },
        "AbilityScoreModifiers": ["Dex","Int","Wis"],
        "Adjustments": {"initiativeMod":"+CR/4","reflex":3,"skillCheckMod":1},
        "MasterSkills": {
          "Daredevil":["acrobatics","athletics"],
          "Detective":["culture","sense motive"],
          "Explorer":["culture","survival"],
          "Ghost":["acrobatics","stealth"],
          "Hacker":["computers","engineering"],
          "Spy":["bluff","disguise"],
          "Thief":["perception","sleight of hand"]
        },
        "Description": "Cunning and swift, operatives are especially skilled and can cause foes to drop their guards, paving the way for devastating attacks.",
        "Gear": "Light armor (item level = CR), small arm (item level = CR), sniper rifle (item level = CR), and basic melee weapon with operative special quality (item level = CR-1).",
        "RequiredArray": "Expert",
        "SpecialRules": "Choose one operative specialization. The operative creature’s specialization exploit and specialization power must come from that specialization. Any exploits that aren’t relevant to the creature (or that can simply be incorporated into the creature’s statistics) don’t need to appear in the creature’s stat block. Master skills from operative specialization."
    },
    "Solarian": {
        "AbilitiesByCr": {
            "1": {
              "description":"Solar manifestation, stellar alignment, black hole, and supernova.",
              "features":["solar manifestation","stellar alignment","black hole","supernova"]
            },
            "2": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, and one 2nd-level stellar revelation.",
              "features":["solar manifestation","stellar alignment","black hole","supernova"],
              "revelations": {
                "2nd":1
              }
            },
            "4": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, and two 2nd-level stellar revelations.",
              "features":["solar manifestation","stellar alignment","black hole","supernova"],
              "revelations": {
                "2nd":2
              }
            },
            "6": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, one 6th-level stellar revelation, and one 2nd-level stellar revelation.",
              "features":["solar manifestation","stellar alignment","black hole","supernova"],
              "revelations": {
                "2nd":1,
                "6th":1
              }
            },
            "7": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, one 6th-level stellar revelation, and one 2nd-level stellar revelation.",
              "features":["solar manifestation","stellar alignment","black hole","supernova","flashing strikes"],
              "revelations": {
                "2nd":1,
                "6th":1
              }
            },
            "8": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, and two 6th-level stellar revelations.",
              "features":["solar manifestation","stellar alignment","black hole","supernova","flashing strikes"],
              "revelations": {
                "6th":2
              }
            },
            "9": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, two 6th-level stellar revelations, and one zenith revelation.",
              "features":["solar manifestation","stellar alignment","black hole","supernova","flashing strikes"],
              "revelations": {
                "6th":2,
                "Zenith":1
              }
            },
            "10": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, one 10th-level stellar revelation, one 6th-level stellar revelation, and one zenith revelation.",
              "features":["solar manifestation","stellar alignment","black hole","supernova","flashing strikes"],
              "revelations": {
                "6th":1,
                "10th":1,
                "Zenith":1
              }
            },
            "13": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, solarian’s onslaught, two 10thlevel stellar revelations, and one zenith revelation.",
              "features":["solar manifestation","stellar alignment","black hole","supernova","flashing strikes","solarian’s onslaught"],
              "revelations": {
                "10th":2,
                "Zenith":1
              }
            },
            "14": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, solarian’s onslaught, one 14thlevel stellar revelation, one 10th-level stellar revelation, and one zenith revelation.",
              "features":["solar manifestation","stellar alignment","black hole","supernova","flashing strikes","solarian’s onslaught"],
              "revelations": {
                "10th":1,
                "14th":1,
                "Zenith":1
              }
            },
            "17": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, solarian’s onslaught, two 14thlevel stellar revelations, and two zenith revelations.",
              "features":["solar manifestation","stellar alignment","black hole","supernova","flashing strikes","solarian’s onslaught"],
              "revelations": {
                "14th":2,
                "Zenith":2
              }
            },
            "20": {
              "description":"Solar manifestation, stellar alignment, black hole, supernova, flashing strikes, solarian’s onslaught, stellar apotheosis, two 14th-level stellar revelations, and two zenith revelations.",
              "features":["solar manifestation","stellar alignment","black hole","supernova","flashing strikes","solarian’s onslaught","stellar apotheosis"],
              "revelations": {
                "14th":2,
                "Zenith":2
              }
            }
        },
        "AbilityScoreModifiers": ["Str","Dex","Cha"],
        "Adjustments": {"reflex":-2,"will":2},
        "Description": "Drawing power from the eternal cycles of stars, solarians fight with the power of photons and gravitons.",
        "Gear": {
          "Solar armor": "Light armor (item level = CR), small arm (item level = CR), and advanced melee weapon (item level =CR+1)",
          "Solar weapon": "Light armor (item level = CR), small arm (item level = CR), and solarian crystal (item level = CR).",
        },
        "RequiredArray": "Combatant",
        "GoodSkills": [
          "mysticism"
        ],
        "SpecialRules": "Choose one solar manifestation, either solar armor or solar weapon. For a solarian creature with solar armor, its EAC and KAC each increase by 1 and it receives the energy resistance listed in the table of solarian class features. For a solarian creature with a solar weapon, that weapon deals the standard melee damage for the NPC’s CR from Table 2",
        "Resistance": {
          "1/3": "",
          "1/2": "",
          "1": "",
          "2": "",
          "3": "",
          "4": "",
          "5": "5",
          "6": "5",
          "7": "5",
          "8": "5",
          "9": "5",
          "10": "10",
          "11": "10",
          "12": "10",
          "13": "10",
          "14": "10",
          "15": "15",
          "16": "15",
          "17": "15",
          "18": "15",
          "19": "15",
          "20": "20",
          "21": "20",
          "22": "20",
          "23": "20",
          "24": "20",
          "25": "20"
        }
    },
    "Soldier": {
        "AbilitiesByCr": {
            "1": {
              "description":"1st-level style technique (from primary fighting style) and one special ability.",
              "Fighting style":{
                "first":["1st"]
              },
              "special":1
            },
            "2": {
              "description":"1st-level style technique (from primary fighting style), one gear boost, and one special ability.",
              "Fighting style":{
                "first":["1st"]
              },
              "Gear boost":1,
              "special":1
            },
            "5": {
              "description":"1st- and 5th-level style techniques (from primary fighting style), one gear boost, and one special ability.",
              "Fighting style":{
                "first":["1st","5th"]
              },
              "Gear boost":1,
              "special":1
            },
            "7": {
              "description":"1st- and 5th-level style techniques (from primary fighting style), two gear boosts, and one special ability.",
              "Fighting style":{
                "first":["1st","5th"]
              },
              "Gear boost":2,
              "special":1
            },
            "9": {
              "description":"1st-, 5th-, and 9th-level style techniques (from primary fighting style); 1st-level secondary style technique (from secondary fighting style); two gear boosts; and one special ability.",
              "Fighting style":{
                "first":["1st","5th","9th"],
                "second":["1st"]
              },
              "Gear boost":2,
              "special":1
            },
            "11": {
              "description":"1st-, 5th-, and 9th-level style techniques (from primary fighting style); 1st-level secondary style technique (from secondary fighting style); soldier’s onslaught; two gear boosts; and one special ability.",
              "Fighting style":{
                "first":["1st","5th","9th"],
                "second":["1st"]
              },
              "features":["Soldier's Onslaught"],
              "Gear boost":2,
              "special":1
            },
            "13": {
              "description":"1st-, 5th-, 9th-, and 13th-level style techniques (from primary fighting style); 1st- and 5th-level secondary style techniques (from secondary fighting style); soldier’s onslaught; and three special abilities.",
              "Fighting style":{
                "first":["1st","5th","9th","13th"],
                "second":["1st","5th"]
              },
              "features":["Soldier's Onslaught"],
              "special":3
            },
            "17": {
              "description":"1st-, 5th-, 9th-, 13th-, and 17th-level style techniques (from primary fighting style); 1st-, 5th-, and 9th-level secondary style techniques (from secondary fighting style); soldier’s onslaught; two gear boosts; and one special ability.",
              "Fighting style":{
                "first":["1st","5th","9th","13th","17th"],
                "second":["1st","5th","9th"]
              },
              "features":["Soldier's Onslaught"],
              "Gear boost":2,
              "special":1
            },
            "20": {
              "description":"1st-, 5th-, 9th-, 13th-, and 17th-level style techniques (from primary fighting style); 1st-, 5th-, and 9th-level secondary style techniques (from secondary fighting style); soldier’s onslaught; kill shot; two gear boosts; and one special ability.",
              "Fighting style":{
                "first":["1st","5th","9th","13th","17th"],
                "second":["1st","5th","9th"]
              },
              "features":["Soldier's Onslaught","Kill Shot"],
              "Gear boost":2,
              "special":1
            }
        },
        "MeleeStyle":{
          "AbilityScoreModifiers":["Str","Dex","Con"],
          "Gear":"Heavy armor (item level = CR), advanced melee weapon (item level = CR+1), longarm (item level = CR), and two grenades (item level = CR)."
        },
        "RangedStyle":{
          "AbilityScoreModifiers":["Dex","Str","Con"],
          "Gear":"Heavy armor (item level = CR), advanced melee weapon (item level = CR), longarm (item level = CR+1) or heavy weapon (item level = CR), and two grenades (item level = CR)."
        },
        "Adjustments": {"reflex":-2,"will":2},
        "Description": "Equipped with powerful weapons and armor, soldiers are trained to serve in the front line of battle and to both dish out and withstand massive force.",
        "RequiredArray": "Combatant"
    },
    "Technomancer": {
        "AbilitiesByCr": {
            "1": {
              "description":"Spell cache and one special ability.",
              "features":["Spell Cache"],
              "special":1
            },
            "2": {
              "description":"Spell cache, one 2nd-level magic hack, and one special ability.",
              "features":["Spell Cache"],
              "Magic hack":{
                "2nd":1
              },
              "special":1
            },
            "5": {
              "description":"Spell cache, one 5th-level magic hack, and one 2nd-level magic hack.",
              "features":["Spell Cache"],
              "Magic hack":{
                "2nd":1,
                "5th":1
              }
            },
            "6": {
              "description":"Spell cache, cache capacitor 1, one 5th-level magic hack, and one 2nd-level magic hack.",
              "features":["Spell Cache","Cache Capacitor 1"],
              "Magic hack":{
                "2nd":1,
                "5th":1
              }
            },
            "8": {
              "description":"Spell cache, cache capacitor 1, one 8th-level magic hack, and one 5th-level magic hack.",
              "features":["Spell Cache","Cache Capacitor 1"],
              "Magic hack":{
                "5th":1,
                "8th":1
              }
            },
            "11": {
              "description":"Spell cache, cache capacitor 1, one 11th-level magic hack, and one 8th-level magic hack.",
              "features":["Spell Cache","Cache Capacitor 1"],
              "Magic hack":{
                "8th":1,
                "11th":1
              }
            },
            "12": {
              "description":"Spell cache, cache capacitor 2, one 11th-level magic hack, and one 8th-level magic hack.",
              "features":["Spell Cache","Cache Capacitor 2"],
              "Magic hack":{
                "8th":1,
                "11th":1
              }
            },
            "14": {
              "description":"Spell cache, cache capacitor 2, one 14th-level magic hack, and one 11th-level magic hack.",
              "features":["Spell Cache","Cache Capacitor 2"],
              "Magic hack":{
                "11th":1,
                "14th":1
              }
            },
            "17": {
              "description":"Spell cache, cache capacitor 2, and two 14th-level magic hacks.",
              "features":["Spell Cache","Cache Capacitor 2"],
              "Magic hack":{
                "14th":2
              }
            },
            "18": {
              "description":"Spell cache, cache capacitor 3, and two 14th-level magic hacks.",
              "features":["Spell Cache","Cache Capacitor 3"],
              "Magic hack":{
                "14th":2
              }
            }
        },
        "AbilityScoreModifiers": ["Int","Dex","Wis"],
        "Adjustments": {"None":0},
        "Description": "These spellcasters meld magic and technology.",
        "Gear": "Light armor (item level = CR), small arm (item level = CR), and basic melee weapon (item level = CR-1).",
        "RequiredArray": "Spellcaster",
        "MasterSkills": [
          "mysticism",
          "computers"
        ],
        "SpecialRules": "In general, spells must come from the technomancer spell list. When choosing a spell for cache capacitor, you don’t have to choose one of the spells from the list of the spells the technomancer knows."
    }
};


//make sure there are not graft entries of the same name in multiple sub headings. eg no "dragon" in both DragonGrafts AND simpleGrafts
graftTemplates = {
	"simpleGrafts": {
		"Aerial (CR 1+)": {
			"CRMin": 1,
			"Description": "Aerial creatures are native denizens of the Elemental Plane of Air, gas giant planets, or similar landless environments, and have unique adaptations to help them survive there.",
			"RequiredSubType": "Air",
			"Text": "Half of the damage dealt by its natural attacks becomes electricity damage; Gains the extraplanar subtype when it isn't on the Elemental Plane of Air."
		},
		"Aqueous (CR 1+)": {
			"CRMin": 1,
			"Description": "Aqueous creatures are native denizens of the Elemental Plane of Water or similar landless environments, able to survive both in and out of water.",
			"RequiredSubType": "Water",
			"OtherAbilities": "amphibious",
			"AttackChanges": ["Natural all piercing", "electricity to cold", "fire to cold"],
			"Text": "Natural attacks that deal bludgeoning or slashing damage deal piercing damage instead; Natural attacks that deal electricity or fire damage deal cold damage instead; Gains the extraplanar subtype when it isn't on the Elemental Plane of Water."
		},
		"Astral": {
			"Description": "Astral creatures are natives of the Astral Plane, a vast silvery void between planes.",
			"Text": "Gains the extraplanar subtype when it isn't on the Astral Plane.",
			"DR": {
				"DR": "CR-10/-",
				"IfDRExists": {
					"Resistance": ["electricity CR-5"]
				}
			}
		},
		"Celestial": {
			"Alignment": "Good",
			"Description": "Celestial creatures are natives of one of the good-aligned Outer Planes.",
			"DR": {
				"DR": "CR-10/evil",
				"IfDRExists": {
					"Resistance": ["electricity CR-5"]
				}
			},
			"Text": "When the creature isn't on its home plane, it gains the extraplanar subtype."
		},
		"Cthonic (CR 1+)": {
			"CRMin": 1,
			"Description": "Cthonic creatures are native denizens of the Elemental Plane of Earth or underground environments, and they have adapted to exist in dirt and rock.",
			"SensesTable": {
				"blindsense (vibration) 30ft.": 0,
				"blindsight (vibration) 30ft.": 8
			},
			"RequiredSubType": "Earth",
			"Text": "Natural melee attacks bypass DR/cold iron; Gains the extraplanar subtype when it isn't on the Elemental Plane of Earth."
		},
		"Cybernetic (CR 1/2+)": {
			"CRMin": 0.5,
			"Description": "A cybernetic creature has been augmented by technological implants (although the same simple template graft can be used to represent creatures augmented by biotech).",
      "Text": "Armor: If the creature is CR 3–7, add one armor upgrade with an item level equal to or less than the creature’s CR. If it is CR 8+, add two armor upgrades, each with an item level equal to or less than the creature’s CR.<br>Weapon: Add a ranged weapon of a level no greater than the creature’s CR + 1; this weapon can’t be disarmed. A creature with the combatant array should get a longarm, and a creature with the expert or spellcaster array should get a small arm. Add the creature’s CR to damage dealt with its weapon. The ammunition of such weapons is recovered once per day after the creature rests for 8 hours."
    },
		"Entropic": {
			"Alignment": "Chaotic",
			"Description": "Entropic creatures are natives of one of the Outer Planes where chaos is paramount. A GM can allow creatures summoned with the summon creature spell that would normally have the astral, celestial, or fiendish simple template graft instead have the entropic simple template graft.",
			"DR": {
				"DR": "CR-10/lawful",
				"IfDRExists": {
					"Resistance": ["acid CR-5"]
				}
			},
			"Text": "When the creature isn't on its home plane, it gains the extraplanar subtype."
		},
		"Fiendish": {
			"Alignment": "Evil",
			"Description": "Fiendish creatures are natives of one of the evil-aligned Outer Planes.",
			"DR": {
				"DR": "CR-10/good",
				"IfDRExists": {
					"Resistance": ["fire CR-5"]
				}
			},
			"Text": "When the creature isn't on its home plane, it gains the extraplanar subtype."
		},
		"Fiery (CR 1+)": {
			"CRMin": 1,
			"Description": "Fiery creatures are native denizens of the Elemental Plane of Fire or habitats covered in fire, and they have unique adaptations to help them survive there.",
			"RequiredSubType": "Fire",
			"DamageMod": "Natural 1/2 fire",
			"Text": "Half of damage dealt by its natural attacks becomes fire damage; Gains the extraplanar subtype when it isn't on the Elemental Plane of Fire."
		},
		"Giant (CR 1+)": {
			"CRMin": 1,
			"Description": "Giant creatures are larger than typical members of their species, and might represent a subspecies that has grown to unusual size due to environmental conditions.",
			"Size": 1,
			"Space": 1,
			"Reach": 1
		},
		"Miniature": {
			"Description": "Miniature creatures are smaller than typical members of their species and might represent a subspecies that has shrunk down due to environmental conditions.",
			"Size": -1,
			"Space": -1,
			"Reach": -1
		},
		"Phrenic": {
      "CalculatedAbilities": {
        "Save": {
          "will": 2
        }
      },
			"Languages": ["limited telepathy"],
			"Description": "Phrenic creatures have minor innate mental powers, which they might have developed due to high levels of native psychic energy in their environments.",
      "SensesTable": {
				"blindsense (emotion) 5 ft.": 7
			},
		},
		"Resolute": {
			"Alignment": "Lawful",
			"DR": {
				"DR": "CR-10/chaotic",
				"IfDRExists": {
					"Resistance": ["cold CR-5"]
				}
			},
			"Description": "Resolute creatures are natives of one of the Outer Planes where law is paramount. A GM can allow creatures summoned with the summon creature spell that would normally have the astral, celestial, or fiendish simple template graft instead have the resolute simple template graft.",
			"Text": "When the creature isn't on its home plane, it gains the extraplanar subtype."
		},
		"Synthetic": {
			"Description": "Synthetic creatures are constructed through the use of extremely advanced technology, similar to that which makes androids possible.",
			"SpecialAbilities": [
				"Constructed (Ex)",
				"Synthetic (Ex)"
			]
		},
		"Two-Headed (CR 3+)": {
			"CRMin": 3,
			"Description": "This creature is a rare two-headed mutant or a member of a two-headed subspecies of a more common race.",
			"OtherAbilities": ["unflankable"],
			"MasterSkills": ["perception"],
			"Text": "If the creature has a bite attack, it can make two bite attacks (and no other attacks) as a full action with a –3 penalty to each bite attack roll."
		},
		"Umbral": {
			"Description": "Umbral creatures exist in the lightless places of the universe, which might be the Shadow Plane, the interior of unlit caves, or the bottom of the darkest oceans.",
      "SensesTable": {
				"darkvision 60 ft.": "always",
				"blindsense (vibration) 5 ft.": 7
			},
		}
	},
  "dragonGrafts": {
    "Black Dragon": {
      "CalculatedAbilities": {
        "Breath weapon": {
          "type": "line",
          "range": "30+10per2CR",
          "damageType": "A",
          "damage":"1d6+1d6perCR"
        },
        "Frightful presence": {
          "CR": 11,
          "range": "60+10perCR"
        }
      },
      "Spell-likeAbilities": {
        "CR": 10
      },
      "Alignment": "Chaotic Evil",
      "DRtable": {
        "type" : "magic",
        "CR" : [10,12,15,17],
        "DR" : [5,10,15,20]
      },
      "Description": "Black dragons are callous and enjoy using fear to exert their influence over others.",
      "Immunities": [
        "acid"
      ],
      "RequiredCreatureType": "Dragon",
      "RequiredSubType": "Water",
      "RequiredCR": 3
      "SRtable": {
        "CR" : [10],
        "SR" : ["11+CR"]
      },
      "Senses": [
        "blindsense 60 ft.",
        "darkvision 120 ft."
      ],
      "SpecialAbilities": [
        "Swamp Stride (Ex)"
      ],
      "Speed": [
        "swim 60 ft.",
        "FlyTable": {
          "CR" : [3,7,11,17}
          "FlySpeed" : ["150 ft. [Ex, average]","200 ft. [Ex, average]","200 ft. [Ex, clumsy]","250 ft. [Ex, clumsy]")
	 }
      ]
    },
    "Blue Dragon": {
      "CalculatedAbilities": {
        "Breath weapon": {
          "type": "line",
          "range": "30+10per2CR",
          "damageType": "E",
          "damage":"1d8+1d8perCR"
        },
        "Frightful presence": {
          "CR": 9,
          "range": "60+10perCR"
        }
      },
      "Spell-likeAbilities": {
        "CR": 9
      },
      "Alignment": "Lawful Evil",
      "DRtable": {
        "type" : "magic",
        "CR" : [11,13,15,17],
        "DR" : [5,10,15,20]
      },
      "Description": "Stacking plans within plans, blue dragons obsessively dwell on their pet projects.",
      "Immunities": [
        "electricity"
      ],
      "RequiredCreatureType": "Dragon",
      "RequiredSubType": "Earth",
      "SRtable": {
        "CR" : [12],
        "SR" : ["11+CR"]
      },
      "Senses": [
        "blindsense 60 ft.",
        "darkvision 120 ft."
      ],
      "SpecialAbilities": [
        "Sound Imitation (Ex)"
      ],
      "Speed": [
        "burrow 60 ft."
        "FlyTable": {
          "CR" : [3,7,11,17}
          "FlySpeed" : ["150 ft. [Ex, average]","200 ft. [Ex, average]","200 ft. [Ex, clumsy]","250 ft. [Ex, clumsy]")
	 }
      ]
    },
    "Green Dragon": {
      "CalculatedAbilities": {
        "Breath weapon": {
          "type": "cone",
          "range": "15+5per2CR",
          "damageType": "A",
          "damage":"1d6+1d6perCR"
        },
        "Frightful presence": {
          "CR": 9,
          "range": "60+10perCR"
        }
      },
      "Spell-likeAbilities": {
        "CR": 9
      },
      "Alignment": "Lawful Evil",
      "DRtable": {
        "type" : "magic",
        "CR" : [11,13,15,17],
        "DR" : [5,10,15,20]
      },
      "Description": "Of all the chromatic dragons, green dragons seem the most reasonable, but they will turn on their so-called allies at a moment's notice if profit is on the line.",
      "Immunities": [
        "acid"
      ],
      "OtherAbilities": [
        "water breathing"
      ],
      "RequiredCreatureType": "Dragon",
      "RequiredSubType": "Air",
      "SRtable": {
        "CR" : [11],
        "SR" : ["11+CR"]
      },
      "Senses": [
        "blindsense 60 ft.",
        "darkvision 120 ft."
      ],
      "SpecialAbilities": [
        "Woodland Stride (Ex)"
      ],
      "Speed": [
        "swim 40 ft."
        "FlyTable": {
          "CR" : [3,7,11,17}
          "FlySpeed" : ["150 ft. [Ex, average]","200 ft. [Ex, average]","200 ft. [Ex, clumsy]","250 ft. [Ex, clumsy]")
	 }
      ]
    },
    "Red Dragon": {
      "CalculatedAbilities": {
        "Breath weapon": {
          "type": "cone",
          "range": "30+5per2CR",
          "damageType": "F",
          "damage":"1d10+1d10perCR"
        },
        "Frightful presence": {
          "CR": 10,
          "range": "60+10perCR"
        }
      },
      "Spell-likeAbilities": {
        "CR": 10
      },
      "Alignment": "Chaotic Evil",
      "DRtable": {
        "type" : "magic",
        "CR" : [10,12,14,16],
        "DR" : [5,10,15,20]
      },
      "Description": "Red dragons are quite imperious and brook no disrespect from lowly humanoids, but they can be swayed by copious amounts of groveling.",
      "Immunities": [
        "fire"
      ],
      "RequiredCreatureType": "Dragon",
      "RequiredSubType": "Fire",
      "SRtable": {
        "CR" : [12],
        "SR" : ["11+CR"]
      },
      "Senses": [
        "blindsense 60 feet",
        "darkvision 120 feet",
        "sense through (vision [smoke only])"
      ],
      "Vulnerable": [
        "cold"
      ]
      "Speed": [
        "FlyTable": {
          "CR" : [3,7,11,17}
          "FlySpeed" : ["150 ft. [Ex, average]","200 ft. [Ex, average]","200 ft. [Ex, clumsy]","250 ft. [Ex, clumsy]")
	 }
      ]
    },
    "White Dragon": {
      "CalculatedAbilities": {
        "Breath weapon": {
          "type": "cone",
          "range": "15+10per2CR",
          "damageType": "C",
          "damage":"1d6+1d6perCR"
        },
        "Frightful presence": {
          "CR": 10,
          "range": "60+10perCR"
        }
      },
      "Spell-likeAbilities": {
        "CR": 10
      },
      "Alignment": "Chaotic Evil",
      "DRtable": {
        "type" : "magic",
        "CR" : [9,12,14,16],
        "DR" : [5,10,15,20]
      },
      "Description": "Similar to the terrain they prefer, white dragons appear cold and emotionless until angered.",
      "Immunities": [
        "cold"
      ],
      "RequiredCreatureType": "Dragon",
      "RequiredSubType": "Cold",
      "SRtable": {
        "CR" : [12],
        "SR" : ["11+CR"]
      },
      "Senses": [
        "blindsense 60 ft.",
        "darkvision 120 ft.",
        "sense through (vision [snow only])"
      ],
      "SpecialAbilities": [
        "Icewalking (Ex)"
      ],
      "Speed": [
        "burrow 30 ft.",
        "swim 60 ft."
        "FlyTable": {
          "CR" : [3,7,11,17}
          "FlySpeed" : ["150 ft. [Ex, average]","200 ft. [Ex, average]","200 ft. [Ex, clumsy]","250 ft. [Ex, clumsy]")
	 }
      ],
      "Vulnerable": [
        "fire"
      ]
    },
  }
},
  "giantGrafts": {
    "Cloud Giant": 
      "Spell-likeAbilities": {
        "CR": 11
      },
      "Alignment": "Neutral Good", "Neutral Evil",
      "Description": "Cloud giants live on floating citadels in the swirling atmospheres of gas planets.",
      "ResistanceTable": {
        "type" : "cold",
        "CR" : [3,7,11,15}
        "Resistance" : [5,10,20,30]
      },
      "RequiredCreatureType": "Humanoid",
      "RequiredSubType": "Giant",
      "Senses": [
        "blindsense (scent) 60 ft.",
        "sense through (vision [clouds only])"
      ],
      "OffensiveAbilities": [
        "crush (replace with standard melee damage)"
      ],
      "OtherAbilities": [
        "hurl debris"
      ],
      "SpecialAbilities": [
        "Knockback (Ex)"
      ],
      "Speed": {
        "type" : "fly speed 40 ft. Su, average; normal, thick, and toxic atmospheres only",
        "CR" : 5
      }
    }
  }
};

specialAbilities = {
  "AdjustmentAbilities":{
    "Brute": {
      "Description": "Use the low attack value for the NPC’s main attack, but determine the attack’s damage as if the NPC’s CR were 2 higher (adding the extra damage from weapon specialization).This special ability has a greater impact at higher CRs.",
      "Adjustments": {
        "attackValue":"low",
        "attackDamageCR":2
      },
    },
    "Extra Hit Points": {
      "Description": "Increase the NPC’s HP by 20%.",
      "Adjustments": {"hp":0.2},
    },
    "Save Boost": {
      "Description": "Increase all saving throw bonuses by 1 or one saving throw bonus by 3.",
      "Adjustments": {"allSave":1,"anySave":3},
    },
    "Secondary Magic": {
      "Description": "The NPC gains spell-like abilities (chosen in Step 8) according to its CR, though it gains only the once-per-day spells or one spell per unit of frequency (at will, 1/day, etc.).",
      "Spell-likeAbilities": "magic, baby"
    },
    "Skillful": {
      "Description": "Increase all master and good skill bonuses by 1.",
      "Adjustments": {
        "GoodSkillBonus": 1,
        "MasterSkillBonus": 1
      },
    }
  },
  "FreeAbilities": {
    "Amphibious (Ex)": {
      "Description": "The creature has the aquatic subtype, but it can breathe air and survive on land.",
      "Format": "Other Abilities amphibious."
    },
    "Blindsense (Ex)": {
      "Description": "The creature has a specific imprecise nonvisual sense (vibration or scent) that operates effectively without vision. This specific sense is indicated in parentheses.",
      "Format": "Senses blindsense (vibration or scent) 60 ft.",
      "Guidelines": "Blindsense usually has a range of 60 feet."
    },
    "Burrow (Ex)": {
      "Description": "The creature can tunnel through dirt.",
      "Format": "Speed burrow 30 ft."
    },
    "Climb (Ex)": {
      "Description": "The creature can climb slopes, walls other steep inclines.",
      "Format": "Speed climb 30 ft."
    },
    "Darkvision (Ex Or Su)": {
      "Description": "The creature can see out to the listed range with no light source at all.",
      "Format": "Senses darkvision 60 ft.",
      "Guidelines": "Darkvision has a range of 60 feet for most creatures or 120 feet in exceptional cases."
    },
    "Fly (Ex Or Su)": {
      "Description": "The source of the creature's fly speed (whether extraordinary, supernatural, or from another source such as an item) is noted before its maneuverability. Unless otherwise noted, a creature whose ability to fly is extraordinary can't fly in a vacuum.",
      "Format": "Speed fly 60 ft. (Ex, perfect)."
    },
    "Light Blindness (Ex)": {
      "Description": "The creature is blinded for 1 round when first exposed to bright light, such as sunlight, and it is dazzled for as long as it remains in an area of bright light.",
      "Format": "Other Abilities light blindness."
    },
    "Limited Telepathy (Ex Or Su)": {
      "Description": "The creature can mentally communicate with any creatures within the listed range with which it shares a language.",
      "Format": "Languages limited telepathy 30 ft."
    },
    "Low-Light Vision (Ex)": {
      "Description": "The creature can see in dim light as if it were normal light.\nLow-light vision is color vision, unlike darkvision. A creature with low-light vision can read as long as even the tiniest source of light is next to it. Creatures with low-light vision can see outdoors on a moonlit night as well as they can during the day, since the moon casts dim light.",
      "Format": "Senses low-light vision."
    },
    "Mindless (Ex)": {
      "Description": "The creature has no Intelligence score or modifier and is immune to mind-affecting effects. Any DCs or other statistics that rely on an Intelligence score treat the creature as having a score of 10 (+0).",
      "Format": "Other Abilities mindless.",
      "Guidelines": "Mindless creatures usually have fewer good skills and no master skills. Their skills should be based on inborn abilities, since they're incapable of training."
    },
    "Swim (Ex)": {
      "Description": "The creature can swim through liquids.",
      "Format": "Speed swim 30 ft."
    },
    "Water Breathing (Ex)": {
      "Description": "The creature can breathe water. It can't breathe air unless it has the amphibious special ability.",
      "Format": "Other Abilities water breathing."
    }
  },
  "Weaknesses": {
    "Dependency (Specified)": {
      "Description": "The creature is dependent on a substance, a sense, or something else to either survive or function normally. If the creature is dependent on something to live (such as water), it can survive without that thing for a number of minutes equal to 5 * its Constitution modifier. Beyond this limit, the creature runs the risk of negative effects, such as suffocation or death. A creature that is dependent on something to function normally (such as a creature with blindsight and no visual sense) usually gains a negative condition when it loses that thing.",
      "Format": "Weaknesses blindsight dependency."
    },
    "Other Weakness (Specified)": {
      "Description": "The creature might have a specific weakness e.g. Akata are susceptible to salt water.",
      "Format": "Weaknesses"
    },
    "Vulnerability (Specified)": {
      "Description": "The creature takes half again as much damage (+50%) when it takes damage of a specific type. Creatures with a vulnerability to an effect that doesn't deal damage instead take a -4 penalty to saves against spells and effects that cause or use the listed vulnerability (such as enchantments). Some creatures might suffer additional effects, as noted in their stat blocks.",
      "Format": "Weaknesses vulnerable"
    }
  },
  "Abilities": {
    "Amorphous (Ex)": {
      "Description": "The creature's body is malleable and shapeless. It does not take double damage from critical hits, but it is affected by critical hit effects normally.",
      "Format": "Defensive Abilities amorphous."
    },
    "Attach (Ex)": {
      "Description": "The creature can attempt a special attack against KAC as a standard action. If it succeeds, it deals no damage, but it adheres to its target. Once attached, the creature gains a +4 bonus to its AC (from cover) and a +2 circumstance bonus to melee attacks, but it can attack only the creature to which it is attached. An attached creature can't move (though it moves with its target), take actions that require two hands, or make attacks of opportunity. An attached creature can be removed with a successful Strength check (DC = 10 + 1-1/2 * the creature's CR) made as a move action, or it can remove itself from its target as a move action.",
      "Format": "Melee attach +6."
    },
    "Aura (Ex Sp Or Su)": {
      "Description": "Unless an aura says otherwise, a target is affected by an aura automatically with no action required on the creature's part whenever the target is within the aura's listed range (either when the target enters the aura on its turn or when it begins its turn in the aura, whichever comes first). If the aura deals damage, it damages a target only the first time the target is in the aura each round, regardless of how many times within the round the target enters and leaves the aura. A creature can suppress its aura for 1 round as a move action unless noted otherwise.",
      "Format": "Aura radiation (30 ft., DC 17); if additional information is needed, the aura also has an entry in Special Abilities."
    },
    "Blindsense Exotic (Ex)": {
      "Description": "The creature has a specific imprecise nonvisual sense (life, thought, or other exotic sense) that operates effectively without vision. This specific sense is indicated in parentheses.",
      "Format": "Senses blindsense (life, thought, or other exotic sense) 60 ft.",
      "Guidelines": "Blindsense usually has a range of 60 feet."
    },
    "Blindsight (Ex)": {
      "Description": "Blindsight is a more precise version of blindsense. This ability operates out to a specified range. A creature with blindsight typically perceives using a specific type of sense, indicated in parentheses.",
      "Format": "Senses blindsight (life) 60 ft.",
      "Guidelines": "Blindsight usually has a range of 60 feet."
    },
    "Breath Weapon (Su)": {
      "Description": "Some creatures can exhale a cone or line of energy or another magical effect. A breath weapon attack usually deals damage, and it is often energy-based. A breath weapon usually allows a target to attempt a Reflex saving throw for half damage, though some breath weapons require a successful Fortitude or Will save instead. A creature is immune to its own breath weapon and the breath weapons of others of its kind unless otherwise noted.\nEach breath weapon also indicates how often it can be used.",
      "Format": "Offensive Abilities breath weapon (60-ft. cone, 8d6 F, DC 18, usable every 1d4 rounds); if the breath has more complicated effects, it also has an entry in Special Abilities.",
      "Guidelines": "1d6 damage + 1d6 per CR, usable once every 1d4 rounds. A cone is usually 30 feet long, increasing by 10 feet for every size category above Medium or decreasing by 5 feet for every size category below Medium. A line is twice as long as a cone would be."
    },
    "Change Shape (Su)": {
      "Description": "The creature has the ability to assume the appearance of a specific creature or type of creature, but it retains most of its own physical qualities. If the form assumed has any of the following abilities, the creature gains them while in that form: blindsight (scent), darkvision, low-light vision, and swim 30 feet. The creature can retain its own breathing ability, or it can assume the ability to breathe in any environment the assumed shape can breathe in (including the no breath ability, which enables it to survive in the vacuum of space). If the ability does not specify what the creature can change shape into, it can assume the form of any creature of the humanoid type, but it can't mimic a specific humanoid. Change shape grants a +10 bonus to Disguise checks to appear as a creature of the type and subtype of the new form, and the DC of the creature's Disguise check is not modified as a result of altering major features or disguising itself as a different race or creature type.\nA creature can assume a form that is one size category smaller or larger than its original form; it becomes that size.\nUnless otherwise stated, it can remain in an alternate form indefinitely. Some creatures can transform into unique forms with special modifiers and abilities. These creatures adjust their ability scores, as noted in their description.",
      "Format": "Other Abilities change shape (humanoid); creatures with a unique form also have an entry in Special Abilities."
    },
    "Compression (Ex)": {
      "Description": "The creature can move through an area as small as one-quarter of its space without squeezing or one-eighth its space when squeezing.",
      "Format": "Other Abilities compression."
    },
    "Create Darkness (Su)": {
      "Description": "As a standard action, the creature can create a 20-foot-radius area of darkness centered on itself, which negates the effects of all nonmagical light sources in that area. This darkness lasts for a number of minutes equal to the creature's CR, and the creature can dismiss the effect as a standard action. The darkness doesn't move with the creature. Unless otherwise noted, any magic source of light can increase the light level in the area as normal.",
      "Format": "Offensive Abilities create darkness."
    },
    "Crush (Ex)": {
      "Description": "When ending a flying or jumping movement, the creature can land on targets that are at least three size categories smaller than itself. Targets are automatically knocked prone, take the listed damage, and are pinned. Each crushed target can attempt to escape the pin normally on its turn, and the pin ends automatically if the crushing creature moves off the target's square. A crushed target does not take damage from the crush more than once, unless the crushing creature moves fully off that creature and then back onto it.",
      "Format": "Offensive Abilities crush (4d6+8 B).",
      "Guidelines": "Use the same damage amount as for the creature's standard melee attack."
    },
    "Detect Alignment (Sp Or Su)": {
      "Description": "The creature can detect the alignment of another creature.\nThis functions as detect magic, but rather than determining which creatures and objects in the area are magical, the creature can determine one other creature's alignment.",
      "Format": "Senses detect alignment."
    },
    "Distraction (Ex)": {
      "Description": "The creature can nauseate targets that it damages. A living creature that takes damage from a creature with the distraction ability is nauseated for 1 round; the target can negate the effect with a successful Fortitude save at the listed DC.",
      "Format": "Offensive Abilities distraction (DC 15)."
    },
    "Earth Glide (Ex)": {
      "Description": "When the creature burrows, it can pass through dirt, stone, or almost any other sort of earth except metal as easily as a fish swims through water. If protected against fire damage, it can even glide through lava. Its burrowing leaves behind no tunnel or hole, nor does it create any ripple or other sign of its presence.",
      "Format": "Other Abilities earth glide."
    },
    "Energy Drain (Su)": {
      "Description": "A successful energy drain attack inflicts one or more negative levels (as described in the ability). If an attack that includes an energy drain scores a critical hit, it inflicts twice the listed number of negative levels. Unless otherwise specified in the draining creature's description, it gains 5 temporary Hit Points for each negative level it inflicts on an opponent. These temporary Hit Points last for a maximum of 1 hour. Negative levels from energy drain remain until 24 hours have passed or until they are removed with magic or technology. If a negative level isn't removed before 24 hours have passed, the affected target must attempt a Fortitude saving throw (the exact DC is given in the creature's stat block). On a success, the negative level goes away. On a failure, the negative level becomes permanent. A separate saving throw is required for each negative level.",
      "Format": "Melee slam +24 (6d12+22 B plus energy drain); Offensive Abilities energy drain (2 levels, DC 22)."
    },
    "Fast Healing (Ex)": {
      "Description": "The creature regains the listed number of Hit Points at the start of its turn. Unless otherwise noted, the creature can never exceed its maximum Hit Points.\nFast healing does not restore Hit Points lost from starvation, thirst, or suffocation, nor does it allow a creature to regrow or reattach lost body parts, unless otherwise stated. Fast healing continues to function until a creature dies, at which point the effects of fast healing end immediately.",
      "Format": "Defensive Abilities fast healing 5."
    },
    "Ferocity (Ex)": {
      "Description": "When the creature is brought to 0 Hit Points, it can fight on for 1 more round. It can act normally until the end of its next turn; if it has 0 HP at that point, it dies. If it would lose further Hit Points before this, it ceases to be able to act and dies.",
      "Format": "Defensive Abilities ferocity."
    },
    "Frightful Presence (Ex Or Su)": {
      "Description": "The creature's presence unsettles its foes. It can activate this ability as part of the action of making an attack or as a move action, but it can activate it only once per round. It usually has a range of 30 feet. Opponents within the range must succeed at a Will save or be shaken. The duration is 5d6 rounds unless the ability says otherwise. Once an opponent has been exposed to a creature's frightful presence (whether or not the opponent succeeds at its saving throw), it cannot be affected by the same creature's frightful presence for 24 hours. This is an emotion, fear, mind-affecting, and sense-dependent effect.",
      "Format": "Aura frightful presence (30 ft., DC 22)."
    },
    "Gaze (Su)": {
      "Description": "Opponents that look at a creature with a gaze ability are in danger of being charmed, being paralyzed, being turned to stone, or suffering another negative effect. Each opponent within the gaze's listed range must attempt a saving throw (usually Fortitude or Will) at the beginning of its turn. On a successful save, the effect is negated. An opponent can give itself an advantage against this ability in one of two ways.\nLooking Obliquely: An opponent that avoids looking directly at the creature's face (either by following the creature's shadow or by tracking it in a reflective surface) or that looks at the creature through a camera or heads-up display gains a +4 circumstance bonus to the saving throw. However, the creature with the gaze ability gains concealment against that opponent.\nBlocking Its Vision: By completely blocking or covering its own visual sensors, an opponent doesn't need to attempt a save against the gaze. However, the creature with the gaze ability gains total concealment against that opponent.\nGaze abilities can affect ethereal opponents but not opponents without visual sensors. A creature is immune to the gaze abilities of others of its kind unless otherwise noted. Allies of a creature with a gaze ability can still be affected, but they are always considered to be looking obliquely at the creature.\nThe creature can also veil its eyes, thus negating its gaze ability.",
      "Format": "Offensive Abilities paralyzing gaze (60 ft., DC 14)."
    },
    "Grab (Ex)": {
      "Description": "If the creature hits with the indicated attack (usually a claw or bite attack), it deals the normal damage. If the creature's attack roll successfully hits the target's KAC + 4, the creature also automatically grapples the foe as a free action. (If it hits the target's KAC + 13, it instead pins the target.) The creature does not need to have a spare limb free to perform this grapple, as long as it can make the listed attack, and it can potentially grapple more than one target if it has more than one attack with the grab ability. The creature can maintain the grab either with another successful grab attack or by performing the grapple combat maneuver normally.",
      "Format": "Melee claw +8 (1d6+4 plus grab)."
    },
    "Immunity (Ex Or Su)": {
      "Description": "The creature takes no damage from the listed source. Creatures can be immune to certain types of damage, types of afflictions, conditions, spells (based on school, level, or save type), and other effects. A creature that is immune to critical hits doesn't take double damage or suffer critical hit effects. A creature that is immune to a listed source doesn't suffer from its effects or from any secondary effects that it would trigger.",
      "Format": "Immunities acid, paralysis.",
      "Guidelines": "A creature usually has one immunity, plus one for every 5 CR. Broad immunities like immunity to mind-affecting effects or all magic should be chosen with caution and might count as multiple abilities."
    },
    "Multiattack (Ex)": {
      "Description": "When making a full attack, the creature can make all the listed attacks, instead of two attacks, at the attack bonuses indicated. It can make the attacks in any order.",
      "Format": "Multiattack bite +10 (3d6+5), 2 claws +10 (2d8+5).",
      "Guidelines": "Use the appropriate damage column for the creature's array, and impose a -6 penalty on these attacks instead of a -4 penalty."
    },
    "Natural Weapons (Ex)": {
      "Description": "Natural weapons (and natural attacks), such as acid spit, bite, claw, or slam don't require ammunition and can't be disarmed or sundered.",
      "Format": "Offensive Abilities",
    },
    "No Breath (Ex)": {
      "Description": "The creature doesn't breathe, and it is immune to effects that require breathing (such as inhaled poison). This does not give it immunity to cloud or gas attacks that don't require breathing.",
      "Format": "Other Abilities no breath."
    },
    "Plantlike (Ex)": {
      "Description": "For effects targeting creatures by type, plantlike creatures count as both their type and plants, whichever is most detrimental to them. They also receive a +2 racial bonus to saving throws against mind-affecting effects, paralysis, poison, polymorph, sleep, and stunning, unless the effect specifies that it works against plants.",
      "Format": "Other Abilities plantlike."
    },
    "Regeneration (Ex)": {
      "Description": "The creature regains Hit Points at the start of its turn, as with fast healing, but it can't die as long as its regeneration is still functioning (although creatures with regeneration still fall unconscious when their Hit Points reach 0). Certain attacks, typically those that deal acid or fire damage, cause a creature's regeneration to stop functioning for 1 round. During this round, the creature doesn't regain Hit Points and can die normally. The creature's stat block describes the types of damage that suppress the regeneration.\nRegeneration doesn't restore Hit Points lost from starvation, thirst, or suffocation. Creatures with regeneration can regrow lost portions of their bodies and can reattach severed body parts if they are recovered within 1 hour of severing. Severed parts that aren't reattached wither and decompose normally.\nA creature usually must have a Constitution score or modifier to have this ability.",
      "Format": "Defensive Abilities regeneration 5 (acid)."
    },
    "Resistance (Ex)": {
      "Description": "The creature ignores some damage of a certain type (acid, cold, electricity, fire, or sonic) per attack, but it does not have total immunity.",
      "Format": "Resistances acid 10."
    },
    "See In Darkness (Su)": {
      "Description": "The creature can see perfectly in darkness of any kind, including magical darkness.",
      "Format": "Senses see in darkness."
    },
    "Sense Through (Su)": {
      "Description": "The creature can sense through obstacles that would normally block the ability to perceive what is beyond them. The specific sense this ability applies to is indicated in parentheses after the sense through entry in the creature's statistics. If the ability allows the creature to sense through only a specific material, that material is listed after the specific sense.",
      "Format": "Senses sense through (vision)."
    },
    "Sightless (Ex)": {
      "Description": "The creature does not use any visual senses and is thus never subject to any effect that requires the creature to see a target or effect. Sightless creatures normally have some form of blindsight to compensate for their sightlessness, but if not, they are assumed to be able to operate as well as a creature with normal vision unless the creature's description says otherwise.",
      "Format": "Senses sightless."
    },
    "Spell Resistance (Ex)": {
      "Description": "The creature can avoid the effects of some spells and spell-like abilities that would directly affect it. To determine whether a spell or spell-like ability works against a creature with spell resistance, the caster must attempt a caster level check (1d20 + caster level). If the result equals or exceeds the creature's spell resistance, the spell works normally, though the creature can still attempt any saving throws normally allowed.",
      "Format": "SR 18."
    },
    "Stellar Alignment (Su)": {
      "Description": "The creature is aligned to the cycles of solar systems. Creatures with stellar alignment usually have stellar revelations and zenith revelations, either ones from the solarian class or ones unique to the creature. When using stellar revelations, the creature is always considered attuned. However, it's not always considered fully attuned, so it normally can't always use zenith powers. When you roll initiative for the creature, roll 1d3. Once that many rounds have elapsed, the creature is considered fully attuned and gains access to its zenith powers. After it uses a zenith power, it's no longer fully attuned and you roll 1d3 again to see how many rounds it will take to recharge.\nIf a creature has stellar alignment (graviton) or stellar alignment (photon), it's considered to be attuned only in the indicated mode and can become fully attuned only in the indicated mode, as described above.",
      "Format": "Other Abilities stellar alignment (graviton)."
    },
    "Summon Allies (Sp)": {
      "Description": "The creature can attempt to summon creatures of the same creature type as itself as a full action. The summoned ally returns to the place from which it came after 1 hour.",
      "Format": "Spell-Like Abilities 1/day-summon allies (1 imp 60%).",
      "Guidelines": "Choose either a creature of the same CR as the monster (with a 35% chance of success) or a creature with a CR no greater than the monster's - 5 (with a 60% chance of success)."
    },
    "Swallow Whole (Ex)": {
      "Description": "If the creature hits with the indicated attack (usually a bite attack), it deals the normal damage. If the creature's attack roll successfully hits the target's KAC + 4, the creature also automatically grapples the foe as part of the attack action. (If it hits the target's KAC + 13, it instead pins the target). The creature doesn't need to have a free limb to perform this grapple. Unless otherwise specified, a creature can swallow whole only targets that are at least one size category smaller than itself, and it has room for a single target of that size in its stomach (doubling the maximum number of creatures it can have swallowed for each additional size category by which these creatures are smaller).\nOn the creature's next turn after grappling or pinning the target, if the target has not escaped the grapple or pin, the target automatically takes the attack's damage at the beginning of the creature's turn. The creature can then make a new attack roll with the same attack. If it hits the target's KAC, the grapple or pin is maintained. If it hits the target's KAC + 4, the target is swallowed whole (no damage is dealt).\nOnce swallowed, the target takes the listed swallow whole damage automatically at the beginning its turn every round.\nThe target is considered grappled as long as it is swallowed.\nThe target can attempt to cut its way out (the interior of a creature with swallow whole has the same EAC as its exterior and a KAC equal to that of its exterior - 4) by dealing an amount of damage equal to one-quarter the swallowing creature's total Hit Points, though any attack that does not deal slashing damage deals only half its normal damage. If a target cuts its way out of the creature, the creature cannot use swallow whole again until that damage is healed.\nAlternatively, a target swallowed whole can attempt to climb out. The swallowed creature must succeed at both a grapple check against the creature's internal KAC + 8 and an Athletics check to climb (DC = 10 + 1-1/2 * the creature's CR).\nEach of these actions takes a full round. If both checks are successful, the target climbs back up to the creature's mouth and can escape, ending up in an open square adjacent to the creature.",
      "Format": "Melee bite +19 (5d4+16 P plus swallow whole); Offensive Abilities swallow whole (5d4+16 A, EAC 30, KAC 27, 71 HP)."
    },
    "Swarm Attack (Ex)": {
      "Description": "The creature deals automatic damage to any creature whose space it occupies at the end of its turn, with no attack roll needed. Swarm attacks are not subject to a miss chance for concealment or cover.",
      "Format": "Melee swarm attack (1d6+2 P).",
      "Guidelines": "To determine the amount of damage a creature of CR 6 or lower deals with swarm attack, use the value listed in the CR 6 Three Attacks entry on its appropriate array table (see pages 129-132), lowering the additional damage from that CR to match its actual CR. For all other creatures, use the Four Attacks entry for its CR in the corresponding array table."
    },
    "Swarm Defenses (Ex)": {
      "Description": "Swarms take damage from weapons differently depending on how the weapon targets them.\nA swarm is immune to attacks and effects that targets a single creature (including single-target spells), with the exception of mind-affecting effects if the swarm has an Intelligence score and an ability similar to the formian's hive mind.\nA swarm takes half again as much damage (+50%) from effects that affect all targets in an area, such as grenades, blast and explode weapons, and many evocation spells.\nA swarm takes normal damage from an attack or effect that affects multiple targets (including lines and fully automatic mode attacks). For the purpose of automatic fire, the swarm counts as five targets. For example, if an automatic attack is made using 12 rounds of ammunition, it can attack a maximum of six targets, so it can damage a swarm normally. However, if two other targets are closer to the attacker than the swarm, they must be attacked first, leaving only four attacks to target the swarm, so it takes no damage.",
      "Format": "Defensive Abilities swarm defenses."
    },
    "Tracking (Ex)": {
      "Description": "The creature can use the Perception skill to perform the follow tracks task of the Survival skill with the listed sense.\nThe sense is usually related to a type of signature that most creatures leave behind, such as a scent or heat trail. The creature might gain a bonus or penalty to its Perception check to follow tracks depending on the strength of the quarry's signature, at the GM's discretion. It is possible for stronger signatures to completely mask other signatures, making following tracks with a weaker signature very difficult.",
      "Format": "Other Abilities tracking (scent)."
    },
    "Trample (Ex)": {
      "Description": "As a full action, the creature can move up to its speed and through the space of any creatures that are at least one size smaller than itself. The creature does not need to make an attack roll; each creature whose space it moves through takes damage. A target of a trample can attempt a Reflex save with the listed DC to take half damage; if it attempts the save, it can't make an attack of opportunity against the trampling creature due to the creature's movement. A creature can deal trample damage to a given target only once per round.",
      "Format": "Offensive Abilities trample (3d4+14 B, DC 16).",
      "Guidelines": "The amount of damage the trample deals should be the same as the creature's standard melee damage."
    },
    "Truespeech (Su)": {
      "Description": "The creature can speak with any other creature that has a language. This ability is always active.",
      "Format": "Languages truespeech."
    },
    "Unflankable (Ex)": {
      "Description": "Flanking the creature does not grant any bonuses, and abilities that function only against a creature that is flanked do not function against it.",
      "Format": "Defensive Abilities unflankable."
    },
    "Unliving (Ex)": {
      "Description": "The creature has no Constitution score or modifier. Any DCs or other statistics that rely on a Constitution score treat the creature as having a score of 10 (+0). The creature is immediately destroyed when it reaches 0 Hit Points. An unliving creature doesn't heal damage naturally, but a construct can be repaired with the right tools. Spells such as make whole can heal constructs, and magic effects can heal undead. An unliving creature with fast healing still benefits from that ability. Unliving creatures don't breathe, eat, or sleep. They can't be raised or resurrected, except through the use of miracle, wish, or a similar effect that specifically works on unliving creatures.",
      "Format": "Other Abilities unliving."
    },
    "Vortex (Ex Or Su)": {
      "Description": "A vortex ability works identically to the whirlwind ability (see below), except the creature gains a swim speed instead of a fly speed, it can form only in a liquid (such as in water), it cannot leave a liquid medium, and it always blocks all vision within it and line of sight past it. In addition, carried creatures must have a swim speed in order to attempt a Reflex save to escape.",
      "Format": "Offensive Abilities vortex (4d6+8 B, DC 15, 1/day)."
    },
    "Whirlwind (Ex Or Su)": {
      "Description": "The creature can transform into a whirlwind. Unless otherwise specified, the creature can remain in whirlwind form for a number of rounds equal to half its CR. If the creature has a fly speed, it retains that in its whirlwind form. If it does not have a fly speed, it gains an extraordinary fly speed (with average maneuverability) equal to its base speed. A creature in whirlwind form can move freely into and through other creatures' spaces, and it does not provoke attacks of opportunity as a result of its movement.\nThe base of a creature in whirlwind form occupies a 5-foot square, and the whirlwind is twice as wide at its top as its base and has a height equal to four times the width of its base; this doesn't change the size category of the creature. If a creature is Large or larger, it can vary the size of its whirlwind form up to a maximum of a base equal to its normal space as a swift or move action. A creature in whirlwind form does not threaten any spaces around it, and it cannot make its normal attacks.\nIf a creature in whirlwind form enters the space of another creature, that creature must succeed at a Fortitude save with the listed DC or take the whirlwind's listed damage. If the whirlwind covers all of the creature's space, the creature must also succeed at a Reflex save or be picked up by the whirlwind and carried along with it. A carried creature is flatfooted, grappled, and off-target, and it automatically takes the whirlwind's damage at the beginning of its turn. If the carried creature can fly, it can attempt a Reflex save as a move action, escaping on a successful save. If a carried creature does not escape, it can attempt a Fortitude save; if it succeeds, it can take any remaining actions it has on its turn (other than movement). On a failed save, the carried creature is unable to act until its next turn or until the whirlwind releases it.\nA creature in whirlwind form can carry up to two creatures of its size, with the total number it can carry doubling for every size category the affected creatures are smaller than the whirlwind. The creature in whirlwind form can eject a carried creature at any time during its turn, dropping the carried creature in a space of its choice adjacent to its position at the time of ejection. At the GM's discretion, if the whirlwind is in contact with dirt, gases, water, or other material that can be easily drawn into it, the whirlwind blocks all vision within it (including darkvision) and blocks line of sight through it.",
      "Format": "Offensive Abilities whirlwind (4d6+8 B, DC 15, 1/day).",
      "Guidelines": "This ability is generally usable once per day, plus one additional time per day for every 5 CR the creature has. The amount of damage the whirlwind deals should be the same as the creature's standard melee damage. Whirlwinds normally deal bludgeoning damage."
    }
  },
  "Immunities": {
    "Construct Immunities (Ex)": {
      "Description": "Constructs are immune to the following effects, unless the effect specifies that it works against constructs:\nBleed, death effects, disease, mind-affecting effects, necromancy effects, paralysis, poison, sleep, and stunning.\nAbility damage, ability drain, energy drain, exhaustion, fatigue, negative levels, and nonlethal damage.\nAny effect that requires a Fortitude save (unless the effect works on objects or is harmless).",
      "Format": "Immunities construct immunities."
    },
    "Elemental Immunities (Ex)": {
      "Description": "Elementals are immune to the following effects, unless the effect specifies that it works against elemental creatures:\nBleed, critical hits, paralysis, poison, sleep effects, and stunning.\nFlanking-elementals are unflankable.",
      "Format": "Immunities elemental immunities."
    },
    "Ooze Immunities (Ex)": {
      "Description": "Oozes are immune to the following effects, unless the effect specifies that it works against oozes:\nCritical hits, paralysis, poison, polymorph, sleep, and stunning.\nGaze abilities, illusions, visual effects, and other attacks that rely on sight.\nFlanking-oozes are unflankable.",
      "Format": "Immunities ooze immunities."
    },
    "Plant Immunities (Ex)": {
      "Description": "Plants are immune to the following effects, unless the effect specifies it works against plants:\nMind-affecting effects, paralysis, poison, polymorph, sleep, and stunning.",
      "Format": "Immunities plant immunities."
    },
    "Swarm Immunities (Ex)": {
      "Description": "Swarms are immune to the following effects unless the effect specifies it works against swarms:\nBleeding, critical hits, flat-footed, off-target, pinned, prone, staggered, and stunned.\nCombat maneuvers-swarms can't be affected by and can't perform combat maneuvers unless the swarm's description says otherwise.\nFlanking-swarms are unflankable.\nDying-a swarm reduced to 0 Hit Points breaks up and ceases to exist as a swarm, though individual members of it might survive.",
      "Format": "Immunities swarm immunities."
    },
    "Undead Immunities (Ex)": {
      "Description": "Undead are immune to the following effects unless the effect specifies it works against undead creatures:\nBleed, death effects, disease, mind-affecting effects, paralysis, poison, sleep, and stunning.\nAbility damage, ability drain, energy drain, exhaustion, fatigue, negative levels, and nonlethal damage.\nAny effect that requires a Fortitude save (unless the effect works on objects or is harmless).",
      "Format": "Immunities undead immunities."
    }
  }
};

skillNames = {
  "Acrobatics": "Dex",
  "Athletics": "Str",
  "Bluff": "Cha",
  "Computers": "Int",
  "Culture": "Int",
  "Diplomacy": "Cha",
  "Disguise": "Cha",
  "Engineering": "Int",
  "Intimidate": "Cha",
  "Life Science": "Int",
  "Medicine": "Int",
  "Mysticism": "Wis",
  "Perception": "Wis",
  "Physical Science": "Int",
  "Piloting": "Dex",
  "Profession": "Int,Wis,Cha",
  "Sense Motive": "Wis",
  "Sleight of Hand": "Dex",
  "Stealth": "Dex",
  "Survival": "Wis"
};

professionSkills = [
  "Profession (Accountant)",
  "Profession (Actor)",
  "Profession (Archaeologist)",
  "Profession (Architect)",
  "Profession (Artist)",
  "Profession (Bounty Hunter)",
  "Profession (Comedian)",
  "Profession (Con Artist)",
  "Profession (Cook)	",
  "Profession (Corporate Professional)",
  "Profession (Courtesan)",
  "Profession (Counselor)",
  "Profession (Dancer)",
  "Profession (Dockworker)",
  "Profession (Electrician)",
  "Profession (Farmer)",
  "Profession (Gambler)",
  "Profession (General Contractor)",
  "Profession (Herbalist)",
  "Profession (Lab Technician)",
  "Profession (Lawyer)",
  "Profession (Maintenance Worker)",
  "Profession (Manager)",
  "Profession (Mathematician)",
  "Profession (Mercenary)",
  "Profession (Merchant)",
  "Profession (Miner)",
  "Profession (Musician)",
  "Profession (Orator)",
  "Profession (Philosopher)",
  "Profession (Poet)",
  "Profession (Politician)",
  "Profession (Professor)",
  "Profession (Smuggler)",
  "Profession (Video Personality)",
  "Profession (Vidgamer)",
  "Profession (Writer)"
];

spellCounts = {
    "1/3": {"spell-like":{"1/day":[2,1],"at will":[2,0]},"caster":{"3/day":[2,1],"at will":[2,0]}},
    "1/2": {"spell-like":{"1/day":[2,1],"at will":[2,0]},"caster":{"3/day":[2,1],"at will":[2,0]}},
    "1": {"spell-like":{"1/day":[2,1],"at will":[2,0]},"caster":{"3/day":[2,1],"at will":[2,0]}},
    "2": {"spell-like":{"1/day":[2,1],"at will":[2,0]},"caster":{"3/day":[2,1],"at will":[2,0]}},
    "3": {"spell-like":{"1/day":[2,1],"at will":[2,0]},"caster":{"3/day":[2,1],"at will":[2,0]}},
    "4": {"spell-like":{"1/day":[2,2],"3/day":[3,1],"at will":[2,0]},"caster":{"3/day":[2,2],"6/day":[3,1],"at will":[2,0]}},
    "5": {"spell-like":{"1/day":[2,2],"3/day":[3,1],"at will":[2,0]},"caster":{"3/day":[2,2],"6/day":[3,1],"at will":[2,0]}},
    "6": {"spell-like":{"1/day":[2,2],"3/day":[3,1],"at will":[2,0]},"caster":{"3/day":[2,2],"6/day":[3,1],"at will":[2,0]}},
    "7": {"spell-like":{"1/day":[2,3],"3/day":[4,2],"at will":[2,1]},"caster":{"3/day":[2,3],"6/day":[4,2],"at will":[2,1]}},
    "8": {"spell-like":{"1/day":[2,3],"3/day":[4,2],"at will":[2,1]},"caster":{"3/day":[2,3],"6/day":[4,2],"at will":[2,1]}},
    "9": {"spell-like":{"1/day":[2,3],"3/day":[4,2],"at will":[2,1]},"caster":{"3/day":[2,3],"6/day":[4,2],"at will":[2,1]}},
    "10": {"spell-like":{"1/day":[2,4],"3/day":[4,3],"at will":[2,2]},"caster":{"3/day":[2,4],"6/day":[4,3],"at will":[2,2]}},
    "11": {"spell-like":{"1/day":[2,4],"3/day":[4,3],"at will":[2,2]},"caster":{"3/day":[2,4],"6/day":[4,3],"at will":[2,2]}},
    "12": {"spell-like":{"1/day":[2,4],"3/day":[4,3],"at will":[2,2]},"caster":{"3/day":[2,4],"6/day":[4,3],"at will":[2,2]}},
    "13": {"spell-like":{"1/day":[2,5],"3/day":[4,4],"at will":[2,3]},"caster":{"3/day":[2,5],"6/day":[4,4],"at will":[2,3]}},
    "14": {"spell-like":{"1/day":[2,5],"3/day":[4,4],"at will":[2,3]},"caster":{"3/day":[2,5],"6/day":[4,4],"at will":[2,3]}},
    "15": {"spell-like":{"1/day":[2,5],"3/day":[4,4],"at will":[2,3]},"caster":{"3/day":[2,5],"6/day":[4,4],"at will":[2,3]}},
    "16": {"spell-like":{"1/day":[2,6],"3/day":[4,5],"at will":[2,4]},"caster":{"3/day":[2,6],"6/day":[4,5],"at will":[2,4]}},
    "17": {"spell-like":{"1/day":[2,6],"3/day":[4,5],"at will":[2,4]},"caster":{"3/day":[2,6],"6/day":[4,5],"at will":[2,4]}},
    "18": {"spell-like":{"1/day":[2,6],"3/day":[4,5],"at will":[2,4]},"caster":{"3/day":[2,6],"6/day":[4,5],"at will":[2,4]}},
    "19": {"spell-like":{"1/day":[4,6],"3/day":[3,5],"at will":[2,4]},"caster":{"3/day":[4,6],"6/day":[3,5],"at will":[2,4]}},
    "20": {"spell-like":{"1/day":[4,6],"3/day":[3,5],"at will":[2,4]},"caster":{"3/day":[4,6],"6/day":[3,5],"at will":[2,4]}},
    "21": {"spell-like":{"1/day":[4,6],"3/day":[3,5],"at will":[2,4]},"caster":{"3/day":[4,6],"6/day":[3,5],"at will":[2,4]}},
    "22": {"spell-like":{"1/day":[4,6],"3/day":[3,5],"at will":[2,4]},"caster":{"3/day":[4,6],"6/day":[3,5],"at will":[2,4]}},
    "23": {"spell-like":{"1/day":[4,6],"3/day":[3,5],"at will":[2,4]},"caster":{"3/day":[4,6],"6/day":[3,5],"at will":[2,4]}},
    "24": {"spell-like":{"1/day":[4,6],"3/day":[3,5],"at will":[2,4]},"caster":{"3/day":[4,6],"6/day":[3,5],"at will":[2,4]}},
    "25": {"spell-like":{"1/day":[4,6],"3/day":[3,5],"at will":[2,4]},"caster":{"3/day":[4,6],"6/day":[3,5],"at will":[2,4]}}
};

graftSpecialAbilities = {
  "Healing Channel (Su)": "You can heal yourself and your allies. Healing yourself with channeled energy is a move action, healing an ally you touch is a standard action, and healing all allies within 30 feet is a full action. This energy restores 2d8 Hit Points and increases by 2d8 every 3 CR levels.",
  "Speak with Animals (Su)": "You can communicate with any creature of the animal type, though this doesn't make it friendly. If an animal is friendly toward you, it may do you favors. This ability allows you to use Intimidate to bully animals, and you can use any other language-dependent effect against animals.",
  "Extension of All (Ex)": "Aeons can communicate telepathically with other aeons over vast distances. This ability works even across planes, albeit less effectively, allowing the communication of only vague impressions and feelings.",
  "Protective Aura (Su)": "For angels of CR 3 to CR 15, this ability grants creatures within the aura (usually 20 feet), including the angel, a divine bonus (usually +2) to AC against attacks made by evil creatures and a divine bonus (usually +4) to saving throws against effects created by evil creatures. The protective aura of a more powerful or a weaker angel might grant a larger or smaller bonus and have a larger or smaller radius, respectively.",
  "Aura of Menace (Su)": "This ability imposes a divine penalty (usually -2) to the AC, attacks, and saving throws of each hostile creature within the aura (usually 20 feet) that fails a Will save. This penalty lasts for 24 hours or until that creature deals damage to the archon who generated the aura. A creature that has resisted or broken the effect can't be affected again by the same archon's aura for 24 hours. The aura of a more powerful or weaker archon might impose a larger or smaller penalty and might have a larger or smaller radius, respectively.",
  "Constructed (Ex)": "For effects targeting creatures by type, synthetic creatures count as both their actual creature type and constructs (whichever type allows an ability to affect them for abilities that affect only one type, and whichever type is worse for abilities that affect both creature types). They receive a +2 racial bonus to saving throws against disease, mind-affecting effects, poison, and sleep, unless those effects specifically target constructs. In addition, synthetic creatures do not breathe or suffer the normal environmental effects of being in a vacuum.",
  "Synthetic (Ex)": "The creature is affected by any ability that specifies it functions against androids.",
  "Swamp Stride (Ex)": "A black dragon can move through bogs and quicksand without penalty at its normal speed.",
  "Sound Imitation (Ex)": "A blue dragon can mimic any voice or sound it has heard by succeeding at a Bluff check opposed by a listener's Sense Motive check.",
  "Icewalking (Ex)": "A white dragon can move across icy surfaces without penalty and doesn't need to attempt Acrobatics checks to run or charge on ice. In addition, a white dragon can climb icy surfaces as if under the effect of spider climb.",
  "Woodland Stride (Ex)": "A green dragon can move through natural foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically altered affect it normally.",
  "Summon Allies (Sp)": "The creature can attempt to summon creatures of the same creature type as itself as a full action. The summoned ally returns to the place from which it came after 1 hour.",
  "Knockback (Ex)": "Whenever a cloud giant successfully deals damage to a creature with a melee attack or thrown projectile, the giant can immediately initiate a bull rush combat maneuver against that target (this takes no action and does not provoke attacks of opportunity).",
  
};

commonLanguages = [
  "Common",
  "Aklo",
  "Lashunta",
  "Eoxian",
  "Kasatha",
  "Shirren",
  "Triaxian",
  "Vercite",
  "Vesk",
  "Ysoki"
];

uncommonLanguages = [
  "Aquan",
  "Arkanen",
  "Auran",
  "Celestial",
  "Damai",
  "Draconic",
  "Drow",
  "Dwarven",
  "Elven",
  "Gnome",
  "Goblin",
  "Halfling",
  "Ignan",
  "Infernal",
  "Kalo",
  "Nchaki",
  "Orc",
  "Pahtra",
  "Phentomite",
  "Sarcesian",
  "Shobhad",
  "Terran",
  "Vlaka"
];

alignments = {
  "LawfulGood":"LG",
  "LawfulNeutral":"LN",
  "LawfulEvil":"LE",
  "NeutralGood":"NG",
  "NeutralNeutral":"N",
  "NeutralEvil":"NE",
  "ChaoticGood":"CG",
  "ChaoticNeutral":"CN",
  "ChaoticEvil":"CE"
};

//category:  height or length , weight, space, natural reach tall, natural reach long
creatureSize = {
  "Fine":       ["6 in. or less","1/8 lb. or less","1/2 ft.","0 ft.","0 ft."],
  "Diminutive": ["6 in.–1 ft.","1/8–1 lb.","1 ft.","0 ft.","0 ft."],
  "Tiny":       ["1–2 ft.","1–8 lbs.","2-1/2 ft.","0 ft.","0 ft."],
  "Small":      ["2–4 ft.","8–60 lbs.","5 ft.","5 ft.","5 ft."],
  "Medium":     ["4–8 ft.","60–500 lbs.","5 ft.","5 ft.","5 ft."],
  "Large":      ["8–16 ft.","500 lbs.–2 tons","10 ft.","10 ft.","5 ft."],
  "Huge":       ["16–32 ft.","2–16 tons","15 ft.","15 ft.","10 ft."],
  "Gargantuan": ["32–64 ft.","16–125 tons","20 ft.","20 ft.","15 ft."],
  "Colossal":   ["64 ft. or more","125 tons or more","30 ft.","30 ft.","20 ft."]
};
