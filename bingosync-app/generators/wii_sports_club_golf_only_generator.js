bingoGenerator = require("./generators/generator_bases/isaac_generator.js");

//Contact cedrikple on Discord if you spot an error have questions about goals.

var bingoList = [];

var easyChallenges = [
  { name: "Finish 6 different holes, no GiveUp", types: ["MultiHoleA"] },
  { name: "Finish Lakeside A, no GiveUp", types: ["3Lake", "3A"] },
  { name: "Finish Classic A, no GiveUp", types: ["3Classic", "3A"] },
  { name: "Finish Classic B, no GiveUp", types: ["3Classic", "3B"] },
  { name: "Finish Resort A, no GiveUp", types: ["3Resort", "3A"] },
  { name: "Finish Resort B, no GiveUp", types: ["3Resort", "3B"] },
  { name: "Finish any Lakeside 3-hole course", types: ["3Lake"] },
  { name: "Finish any Classic 3-hole course", types: ["3Classic"] },
  { name: "Finish any Resort 3-hole course", types: ["3Resort"] },
  { name: "Finish any A 3-hole course", types: ["3A"] },
  { name: "Finish any B 3-hole course", types: ["3B"] },
  { name: "Finish any C 3-hole course", types: ["3C"] },
  { name: "Finish Lakeside A", types: ["3Lake", "3A"] },
  { name: "Finish Lakeside B", types: ["3Lake", "3B"] },
  { name: "Finish Classic A", types: ["3Classic", "3A"] },
  { name: "Finish Classic B", types: ["3Classic", "3B"] },
  { name: "Finish Resort A", types: ["3Resort", "3A"] },
  { name: "Finish Resort B", types: ["3Resort", "3B"] },
  {
    name: "Finish any course without going out of bounds",
    types: ["SurfaceChallengeA"],
  },
  {
    name: "Finish any course without landing in a bunker, no GiveUp",
    types: ["SurfaceChallengeA"],
  },
  {
    name: "Finish any course without landing in a bunker or going out of bounds",
    types: ["SurfaceChallengeA"],
  },
  {
    name: "Finish any course without landing in a bunker or deep rough, no GiveUp",
    types: ["SurfaceChallengeA"],
  },
  {
    name: "Finish any course without landing on the same surface more than once per hole",
    types: ["SurfaceChallengeA"],
  },
  {
    name: "Finish any course blind (hold 2 while selecting the course)",
    types: ["Blind"],
  },
  { name: "Finish any course without adjusting aim", types: ["Turningless"] },
  {
    name: "Finish any course without driver, no GiveUp",
    types: ["ClubChallengeA", "ClubChallengeB"],
  },
  { name: "Finish any course -1 or better", types: ["ScoreA"] },
  { name: "Hit any Lakeside B duck", types: ["DuckSpecific"] },
  { name: "Hit any Lakeside C duck", types: ["DuckSpecific"] },
  { name: "Hit any Classic A duck", types: ["DuckSpecific"] },
  { name: "Hit any Classic B duck", types: ["DuckSpecific"] },
  { name: "Hit any Classic C duck", types: ["DuckSpecific"] },
  { name: "Hit any Resort A duck", types: ["DuckSpecific"] },
  {
    name: "Hit the same duck with 3 consecutive shots",
    types: ["DuckChallenge"],
  },
  { name: "Hit any duck from a fairway", types: ["DuckChallenge"] },
  {
    name: "Hit any duck without landing out of bounds",
    types: ["DuckChallenge"],
  },
  { name: "Hit 6 different tree trunks", types: ["TreeMulti", "TreeFew"] },
  { name: "Hit 8 different tree trunks", types: ["TreeMulti", "TreeFew"] },
  {
    name: "Hit 4 different tree trunks on any hole before finishing, no GiveUp",
    types: ["TreeChallenge", "TreeFew"],
  },
  {
    name: "Land on the green by bouncing off a tree trunk",
    types: ["TreeChallenge"],
  },
  { name: "Land in 9 different bunkers", types: ["BunkerMulti", "BunkersFew"] },
  { name: "Land in 12 different bunkers", types: ["BunkerMulti"] },
  {
    name: "Land in all bunkers on any hole before finishing, no GiveUp",
    types: ["BunkerChallenge", "BunkersFew"],
  },
  { name: "Land in 7 unique bodies of water", types: ["Water"] },
  {
    name: "Land on fairway, rough, deep rough, fringe and green on one hole",
    types: ["SurfaceMultiChallenge"],
  },
  {
    name: "Finish 3 consecutive holes with the same amount of strokes",
    types: ["ScoreConsecutiveChallenge"],
  },
  {
    name: "Finish 3 consecutive holes with Par or better",
    types: ["ScoreConsecutiveChallenge", "3Pars"],
  },
  { name: "GiveUp on 3 different holes", types: ["GiveUp"] },
  { name: "GiveUp on 5 different holes", types: ["GiveUp"] },
  {
    name: "Hit a flagstick or flag without getting a Chip-In",
    types: ["Flagstick"],
  },
  {
    name: "Land on the green with a driver twice, not hitting the flag(stick)",
    types: ["Flagstick"],
  },
  { name: "3 Triple Bogeys", types: ["Bogeys"] },
  { name: "3 Double Bogeys", types: ["Bogeys"] },
  { name: "3 Bogeys", types: ["Bogeys"] },
  { name: "3 Pars", types: ["Pars", "3Pars"] },
  { name: "3 Birdies", types: ["Birdies"] },
  {
    name: "Successful putts from rough or deep rough",
    types: ["PuttChallenge"],
  },
  { name: "2 successful putts from the fringe", types: ["PuttChallenge"] },
  { name: "Land exactly 69yd. away from the hole ", types: ["ExactDistance"] },
  { name: "Land exactly 123yd. away from the hole ", types: ["ExactDistance"] },
  { name: "Land exactly 222yd. away from the hole ", types: ["ExactDistance"] },
  { name: "Land on top of all 4 letters on Hole L7", types: ["L7Letters"] },
  {
    name: "Land on all 5 islands on Hole C9 without going into water",
    types: ["SpecificHoleChallengeB"],
  },
  {
    name: "Finish any hole using every club exactly once, no GiveUp",
    types: ["SpecificHoleChallengeC"],
  },
  {
    name: "Hit the ball without altering its distance to the hole",
    types: ["ExactDistance"],
  },
  { name: "Under Par / Underachiever (stamp)", types: ["ScoreA"] },
  { name: "Chip It In / Chip-In Wizard (stamp)", types: ["ChipIn"] },
  { name: "The Secret Shot (stamp)", types: ["L7Letters"] },
  { name: "3 stamps", types: ["MultiStamps"] },
  {
    name: "Bronze medal (Pro Putter / Putter Madness)",
    types: ["Bronze", "PrPuScore"],
  },
  {
    name: "Silver medal (Pro Putter / Putter Madness)",
    types: ["Silver", "PrPuScore"],
  },
  {
    name: "Sink 2 balls in a row without adjusting aim (Pro Putter / Putter Madness)",
    types: ["PrPuNoAimAdjust"],
  },
  {
    name: "Sink 3 balls in a row without adjusting aim (Pro Putter / Putter Madness)",
    types: ["PrPuNoAimAdjust"],
  },
  {
    name: "Sink 5 consecutive balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallengeA", "PrPuChallengeB"],
  },
  {
    name: "Sink 6 balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallengeA", "PrPuChallengeB"],
  },
  {
    name: "Sink 7 balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallengeA", "PrPuChallengeB"],
  },
  {
    name: "No medal while sinking 5 balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallengeB"],
  },
  {
    name: "Bronze medal (Chip-In Bingo / Bingo Clubber)",
    types: ["Bronze", "ChInBiScore", "ChInBiScoreLow"],
  },
  {
    name: "Silver medal (Chip-In Bingo / Bingo Clubber)",
    types: ["Silver", "ChInBiScore", "ChInBiScoreLow"],
  },
  {
    name: "75 points (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScore", "ChInBiScoreLow"],
  },
  {
    name: "125 points (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScore", "ChInBiScoreLow"],
  },
  {
    name: "80 points only using irons (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScoreChallenge", "ChInBiScoreLow"],
  },
  {
    name: "90 points without using putter (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScoreChallenge", "ChInBiScoreLow"],
  },
  {
    name: "140 points without using putter (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScoreChallenge", "ChInBiScoreLow"],
  },
  {
    name: "Cover 1 space per line and column (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "4 spaces in a line (Almost there!) (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeB"],
  },
  {
    name: "Cover the space that's on the same position as this goal (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Cover exactly 2 spaces with a single ball (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Cover 8 spaces (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Sink a ball (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Cover the 6 and 9 space  (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Cover the 4 and 20 space  (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Cover the 7 and 13 space  (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Cover the 4 corner spaces (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Bingo (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeB"],
  },
  {
    name: "Bronze medal (Driver Challenge / Target Shooter)",
    types: ["Bronze", "DrChScore", "DrChScoreLow"],
  },
  {
    name: "Silver medal (Driver Challenge / Target Shooter)",
    types: ["Silver", "DrChScore", "DrChScoreLow"],
  },
  {
    name: "200.0 points (Driver Challenge / Target Shooter)",
    types: ["DrChScore", "DrChScoreLow"],
  },
  {
    name: "350.0 points (Driver Challenge / Target Shooter)",
    types: ["DrChScore", "DrChScoreLow"],
  },
  {
    name: "30.0 points without multipliers (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeA"],
  },
  {
    name: "40.0 points without multipliers (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeA"],
  },
  {
    name: "140.0 points only using irons (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeB", "DrChScoreLow"],
  },
  {
    name: "290.0 points without driver (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeB", "DrChScoreLow"],
  },
  {
    name: "390.0 points without driver (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeB"],
  },
  {
    name: "250.0 points without x10-multipliers (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeB", "DrChScoreLow"],
  },
  {
    name: "340.0 points without x10-multipliers (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeB"],
  },
  {
    name: "150.0 points without multipliers above 5.0 (Driver Challenge / Target Shooter) (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeB", "DrChScoreLow"],
  },
  {
    name: "Score with 9 balls (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeA"],
  },
  {
    name: "Hit a metal bar twice (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeA"],
  },
  {
    name: "Hit a metal bar thrice (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeA"],
  },
  {
    name: "Hit the 1-area 4 times (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeA"],
  },
  {
    name: "Hit the 2-area 4 times (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeA"],
  },
  {
    name: "Hit the 5-area 4 times (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeA"],
  },
  {
    name: "Hit the 10-area 4 times (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeA"],
  },
  {
    name: "Between 24.9 and 40.1 points with one ball (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeB"],
  },
  {
    name: "Between 34.9 and 45.1 points with one ball (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeB"],
  },
  {
    name: "Between 69.9 and 90.1 points with one ball (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeB"],
  },
  {
    name: "Between 74.9 and 85.1 points with one ball (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeB"],
  },
  { name: "Hit a duck in any training game", types: ["DuckSpecific"] },
  { name: "Finish all training games", types: ["MultiTraining"] },
  { name: "2 silver medals", types: ["Silver", "MultiTraining"] },
  { name: "Sink a ball with a red bar", types: ["Redbar"] },
];

bingoList[1] = easyChallenges;

var mediumChallenges = [
  {
    name: "Finish 9 different holes, no GiveUp",
    types: ["MultiHoleA", "9Hole"],
  },
  { name: "Finish 10 different holes, no GiveUp", types: ["MultiHoleA"] },
  { name: "Finish 3 different 3-hole courses", types: ["Multi3Hole"] },
  { name: "Finish Lakeside 9-hole course", types: ["9Hole"] },
  { name: "Finish Classic 9-hole course", types: ["9Hole"] },
  { name: "Finish Resort 9-hole course", types: ["9Hole"] },
  { name: "Finish any 9-hole course", types: ["9Hole"] },
  { name: "Finish Lakeside B, no GiveUp", types: ["3Lake", "3B"] },
  { name: "Finish Lakeside C, no GiveUp", types: ["3Lake", "3C"] },
  { name: "Finish Classic C, no GiveUp", types: ["3Classic", "3C"] },
  { name: "Finish Resort C, no GiveUp", types: ["3Resort", "3C"] },
  { name: "Finish Lakeside C", types: ["3Lake", "3C"] },
  { name: "Finish Classic C", types: ["3Classic", "3C"] },
  { name: "Finish Resort C", types: ["3Resort", "3C"] },
  {
    name: "Finish any course without landing on rough, no GiveUp",
    types: ["SurfaceChallengeA"],
  },
  {
    name: "Finish any course without landing on rough or in deep rough, no GiveUp",
    types: ["SurfaceChallengeA"],
  },
  {
    name: "Finish any course without landing on fairway, no GiveUp",
    types: ["NoFairway"],
  },
  {
    name: "Finish any course without landing on fairway or in a bunker, no GiveUp",
    types: ["NoFairway"],
  },
  {
    name: "Finish any course without landing on fairway or in deep rough, no GiveUp",
    types: ["NoFairway"],
  },
  {
    name: "Finish any course without landing on fairway or fringe, no GiveUp",
    types: ["NoFairway"],
  },
  {
    name: "Finish any course blind (hold 2 while selecting the course), no GiveUp",
    types: ["Blind"],
  },
  {
    name: "Finish any course blind without going out of bounds (hold 2 while selecting the course), no GiveUp",
    types: ["Blind"],
  },
  { name: "Finish any course with 2 players", types: ["2P"] },
  { name: "Finish any course with 2 players, no GiveUp", types: ["2P"] },
  {
    name: "Finish any course with 2 players, one left-handed, one right-handed",
    types: ["2P"],
  },
  {
    name: "Finish any course without adjusting aim, no GiveUp",
    types: ["Turningless"],
  },
  { name: "Finish any course without using the D-Pad", types: ["Turningless"] },
  {
    name: "Finish any course without using the D-Pad, no GiveUp",
    types: ["Turningless"],
  },
  {
    name: "Finish any course without driver and spoon / 3 wood, no GiveUp",
    types: ["ClubChallengeA"],
  },
  {
    name: "Finish any course without irons, no GiveUp",
    types: ["ClubChallengeB"],
  },
  {
    name: "Finish any course only using irons and putter, no GiveUp",
    types: ["ClubChallengeA", "ClubChallengeB"],
  },
  { name: "Finish any course -3 or better", types: ["ScoreA"] },
  { name: "Finish any course -4 or better", types: ["ScoreA"] },
  { name: "Hit any Lakeside A duck", types: ["DuckSpecific"] },
  { name: "Hit any Resort B duck", types: ["DuckSpecific"] },
  { name: "Hit any Resort C duck", types: ["DuckSpecific"] },
  { name: "Hit 3 different Classic ducks", types: ["DuckMulti"] },
  { name: "Hit any Lakeside, Classic and Resort duck", types: ["DuckMulti"] },
  { name: "Hit 3 different ducks that float on water", types: ["DuckMulti"] },
  { name: "Hit 4 different ducks", types: ["DuckMulti"] },
  { name: "Hit 5 different ducks", types: ["DuckMulti"] },
  { name: "Hit 10 different tree trunks", types: ["TreeMulti"] },
  { name: "Hit 12 different tree trunks", types: ["TreeMulti"] },
  {
    name: "Hit 5 different tree trunks on any hole before finishing, no GiveUp",
    types: ["TreeChallenge", "TreeFew"],
  },
  { name: "Land in 16 different bunkers", types: ["BunkerMulti"] },
  {
    name: "Land in 5 different bunkers on one hole before finishing, no GiveUp",
    types: ["BunkerChallenge", "BunkersFew"],
  },
  { name: "Land in 10 unique bodies of water", types: ["Water"] },
  {
    name: "Land in 3 unique bodies of water on one hole before finishing, no GiveUp",
    types: ["Water"],
  },
  {
    name: "Land on fairway, rough, deep rough, fringe and green on one hole, no GiveUp",
    types: ["SurfaceMultiChallenge"],
  },
  {
    name: "Finish 2 holes while getting a red bar every shot, except putts, no GiveUp",
    types: ["Redbar"],
  },
  {
    name: "Finish 3 holes while getting a red bar every shot, except putts, no GiveUp",
    types: ["Redbar"],
  },
  {
    name: "Finish 5 consecutive holes with the same amount of strokes",
    types: ["ScoreConsecutiveChallenge"],
  },
  {
    name: "Finish 6 consecutive holes with Par or better",
    types: ["ScoreConsecutiveChallenge"],
  },
  { name: "GiveUp on 8 different holes", types: ["GiveUp"] },
  {
    name: "Land on the green with a driver thrice, not hitting the flag(stick)",
    types: ["Flagstick"],
  },
  { name: "3 Chip-Ins", types: ["ChipIn"] },
  { name: "4 Chip-Ins", types: ["ChipIn"] },
  { name: "7 Pars", types: ["Pars"] },
  { name: "5 Birdies", types: ["Birdies"] },
  { name: "7 Birdies", types: ["Birdies"] },
  { name: "Hole in One", types: ["HiO"] },
  { name: "2 Eagles or Albatrosses", types: ["Eagles"] },
  { name: "3 Eagles or Albatrosses", types: ["Eagles"] },
  {
    name: "3 successful putts from outside the green",
    types: ["PuttChallenge"],
  },
  { name: "4 successful putts from the fringe", types: ["PuttChallenge"] },
  {
    name: "Reach the green on Hole C8 only using the wedge",
    types: ["SpecificHoleChallengeB"],
  },
  {
    name: "Land in 4 unique patches of deep rough on Hole L5 before finishing, no GiveUp",
    types: ["SpecificHoleChallengeC"],
  },
  {
    name: "Land on 6 unique patches of fairway on Hole L4 before finishing, no GiveUp",
    types: ["SpecificHoleChallengeC"],
  },
  {
    name: "Reach the green on Hole R8 only using the wedge without going into water",
    types: ["SpecificHoleChallengeB"],
  },
  {
    name: "Par or Birdie on any Par 3 after landing in deep rough",
    types: ["SpecificHoleChallengeA"],
  },
  {
    name: "Par or Birdie on any Par 3 after hitting a tree trunk",
    types: ["SpecificHoleChallengeA"],
  },
  {
    name: "Fairway to Go! / Fairway or Bust (stamp)",
    types: ["SurfaceChallengeA"],
  },
  {
    name: "Longe-Range Putter / Power Putter (stamp)",
    types: ["PuttChallenge"],
  },
  { name: "Flag It Down (stamp)", types: ["ChipIn"] },
  { name: "Hole-in-One / Hole in One (stamp)", types: ["HiO"] },
  { name: "4 stamps", types: ["MultiStamps"] },
  { name: "5 stamps", types: ["MultiStamps"] },
  { name: "Level 2", types: ["Level"] },
  { name: "150 XP", types: ["Level"] },
  {
    name: "Gold medal (Pro Putter / Putter Madness)",
    types: ["Gold", "PrPuScore"],
  },
  {
    name: "Sink 4 balls in a row without adjusting aim (Pro Putter / Putter Madness)",
    types: ["PrPuNoAimAdjust"],
  },
  {
    name: "Sink 8 balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallengeA"],
  },
  {
    name: "Sink 9 balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallengeA"],
  },
  {
    name: "Sink a ball into every unique hole across multiple games (Pro Putter / Putter Madness)",
    types: ["PrPuChallengeA"],
  },
  {
    name: "No medal while sinking 6 balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallengeB"],
  },
  {
    name: "No medal while sinking 7 balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallengeB"],
  },
  {
    name: "Gold medal (Chip-In Bingo / Bingo Clubber)",
    types: ["Gold", "ChInBiScore"],
  },
  {
    name: "175 points (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScore", "ChInBiScoreLow"],
  },
  {
    name: "200 points (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScore"],
  },
  {
    name: "225 points (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScore"],
  },
  {
    name: "130 points only using irons (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScoreChallenge", "ChInBiScoreLow"],
  },
  {
    name: "180 points only using irons (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScoreChallenge"],
  },
  {
    name: "190 points without using putter (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScoreChallenge"],
  },
  {
    name: "Cover exactly 3 spaces with a single ball (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Score with 10 balls (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Cover 12 spaces (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Sink 2 balls into unique holes across multiple games (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Cover 6 single-digit spaces (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Cover 6 spaces with consecutive numbers (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "Cover all 5 spaces with holes (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeA"],
  },
  {
    name: "50 points covering only odd numbered spaces, no putter (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScoreChallenge"],
  },
  {
    name: "50 points covering only even numbered spaces, no putter (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScoreChallenge"],
  },
  {
    name: "No medal while covering 5 spaces (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScoreChallenge"],
  },
  {
    name: "2 Bingos (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeB"],
  },
  {
    name: "Gold medal (Driver Challenge / Target Shooter)",
    types: ["Gold", "DrChScore"],
  },
  {
    name: "450.0 points (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "500.0 points (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "550.0 points (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "1001.0 points across multiple games that get finished (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "50.0 points without multipliers (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeA"],
  },
  {
    name: "102.0 points without multipliers (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeA", "DuckSpecific"],
  },
  {
    name: "200.0 points only using irons (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeB"],
  },
  {
    name: "490.0 points without driver (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeB"],
  },
  {
    name: "430.0 points without x10-multipliers (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeB"],
  },
  {
    name: "200.0 points without multipliers above 5.0 (Driver Challenge / Target Shooter) (Driver Challenge / Target Shooter)",
    types: ["DrChScoreChallengeB", "DrChScoreLow"],
  },
  {
    name: "Score with all balls (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeA"],
  },
  {
    name: "Hit the 5-area 5 times (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeA"],
  },
  {
    name: "Hit the 10-area 5 times (Driver Challenge / Target Shooter)",
    types: ["DrChChallengeA"],
  },
  { name: "3 bronze medals", types: ["Bronze", "MultiTraining"] },
  { name: "3 silver medals", types: ["Silver", "MultiTraining"] },
  { name: "2 gold medals", types: ["Gold", "MultiTraining"] },
  { name: "Any platinum medal", types: ["Platinum", "MultiTraining"] },
];

bingoList[2] = mediumChallenges;

var hardChallenges = [
  { name: "Finish 12 different holes, no GiveUp", types: ["MultiHoleA"] },
  { name: "Finish 15 different holes, no GiveUp", types: ["MultiHoleA"] },
  {
    name: "Finish 18 different holes, no GiveUp",
    types: ["MultiHoleA", "18Hole"],
  },
  { name: "Finish 20 different holes, no GiveUp", types: ["MultiHoleA"] },
  { name: "Finish 5 different Part 3s below Par", types: ["MultiHoleB"] },
  { name: "Finish 7 different Part 4s below Par", types: ["MultiHoleB"] },
  { name: "Finish 5 different Part 5s below Par", types: ["MultiHoleB"] },
  { name: "Finish Lakeside 9-hole course, no GiveUp", types: ["9Hole"] },
  { name: "Finish Classic 9-hole course, no GiveUp", types: ["9Hole"] },
  { name: "Finish Resort 9-hole course, no GiveUp", types: ["9Hole"] },
  { name: "Finish any 18-hole course", types: ["18Hole"] },
  {
    name: "Finish any course with 3 players with the same final scores, no GiveUp",
    types: ["3P"],
  },
  { name: "Finish any course -10 or better", types: ["ScoreA"] },
  { name: "Hit 3 different Lakeside ducks", types: ["DuckMulti"] },
  { name: "Hit 3 different Resort ducks", types: ["DuckMulti"] },
  { name: "Hit 6 different ducks", types: ["DuckMulti"] },
  { name: "Hit 8 different ducks", types: ["DuckMulti"] },
  {
    name: "Finish 5 holes while getting a red bar every shot, except putts, no GiveUp",
    types: ["Redbar"],
  },
  {
    name: "Finish 9 consecutive holes with Par or better",
    types: ["ScoreConsecutiveChallenge"],
  },
  { name: "4 Chip-Ins without hitting the flag", types: ["ChipIn"] },
  { name: "5 Chip-Ins", types: ["ChipIn"] },
  { name: "6 Chip-Ins", types: ["ChipIn"] },
  { name: "9 Birdies", types: ["Birdies"] },
  { name: "11 Birdies", types: ["Birdies"] },
  { name: "4 Eagles or Albatrosses", types: ["Eagles"] },
  { name: "5 Eagles or Albatrosses", types: ["Eagles"] },
  {
    name: "5 successful putts from outside the green",
    types: ["PuttChallenge"],
  },
  { name: "King of Clubs / Birdie Watcher (stamp)", types: ["ScoreA"] },
  { name: "6 stamps", types: ["MultiStamps"] },
  { name: "Level 3", types: ["Level"] },
  { name: "250 XP", types: ["Level"] },
  {
    name: "Platinum medal (Pro Putter / Putter Madness)",
    types: ["Platinum", "PrPuScore"],
  },
  {
    name: "Sink all balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallengeA"],
  },
  {
    name: "Platinum medal (Chip-In Bingo / Bingo Clubber)",
    types: ["Platinum", "ChInBiScore"],
  },
  {
    name: "685 points across multiple games that get finished (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeC"],
  },
  {
    name: "4 Bingos across multiple games (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallengeB", "ChInBiChallengeC"],
  },
  {
    name: "Platinum medal (Driver Challenge / Target Shooter)",
    types: ["Platinum", "DrChScore"],
  },
  {
    name: "2002.0 points across multiple games that get finished (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  { name: "3 gold medals", types: ["Gold", "MultiTraining"] },
  { name: "2 platinum medals", types: ["Platinum", "MultiTraining"] },
];

bingoList[3] = hardChallenges;

extraHardChallenges = [
  { name: "Finish 21 different holes, no GiveUp", types: ["MultiHoleA"] },
  { name: "Finish 24 different holes, no GiveUp", types: ["MultiHoleA"] },
  { name: "Finish all 27 unique holes", types: ["MultiHoleA"] },
  { name: "Finish any course -13 or better", types: ["ScoreA"] },
  { name: "Hit 10 different ducks", types: ["DuckMulti"] },
  { name: "Ace of Clubs / Birdie of Prey (stamp)", types: ["ScoreB"] },
  { name: "7 stamps", types: ["MultiStamps"] },
  { name: "8 stamps", types: ["MultiStamps"] },
  { name: "Level 4", types: ["Level"] },
  { name: "350 XP", types: ["Level"] },
];

bingoList[4] = extraHardChallenges;
