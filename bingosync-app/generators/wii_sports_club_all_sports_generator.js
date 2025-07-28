bingoGenerator = require("./generators/generator_bases/isaac_generator.js");

//Contact cedrikple on Discord if you spot an error have questions about goals.

var bingoList = [];

var easyChallenges = [
  { name: "Level 2 (Tennis)", types: ["TennisLevel", "Level2"] },
  { name: "Smash Point / Smash Hitter (Tennis stamp)", types: ["TennisStamp"] },
  { name: "Forehand Master (Tennis stamp)", types: ["TennisStamp"] },
  {
    name: "Rally the ball for 15 shots with your Mii on all 4 positions (Tennis)",
    types: ["TennisChallenge", "TennisRally"],
  },
  {
    name: "Rally the ball for 25 shots (Tennis)",
    types: ["TennisChallenge", "TennisRally"],
  },
  {
    name: "Win 4 rallies after all 4 Miis shot the ball (Tennis)",
    types: ["TennisChallenge"],
  },
  { name: "Win 2 matches (Tennis)", types: ["TennisMatch"] },
  { name: "Win a Best of 3 / Two-Game Match (Tennis)", types: ["TennisMatch"] },
  {
    name: "Win a Best of 5 / Three-Game Match (Tennis)",
    types: ["TennisMatch"],
  },
  {
    name: "Finish a match with your Mii once on both sides (Tennis)",
    types: ["TennisMatch"],
  },
  {
    name: "Win a match with a CPU on your team (Tennis)",
    types: ["TennisMatch"],
  },
  {
    name: "Win a match without using the front Mii (Tennis)",
    types: ["TennisMatch"],
  },
  { name: "Bronze medal (Ring Master)", types: ["RiMaMedal", "RiMaScore"] },
  { name: "60 points (Ring Master)", types: ["RiMaScore"] },
  { name: "90 points (Ring Master)", types: ["RiMaScore"] },
  { name: "Get through a red ring (Ring Master)", types: ["RiMaChallenge"] },
  { name: "Get through 10 red rings (Ring Master)", types: ["RiMaChallenge"] },
  { name: "Get through 30 rings (Ring Master)", types: ["RiMaChallenge"] },
  {
    name: "40 points without hitting a ring (Ring Master)",
    types: ["RiMaScore"],
  },
  { name: "Hit 5 rings (Ring Master)", types: ["RiMaChallenge"] },
  { name: "Hit 10 rings (Ring Master)", types: ["RiMaChallenge"] },
  {
    name: "Bronze medal (Tennis Moles / Mole Commotion)",
    types: ["TeMoMedal", "TeMoScore"],
  },
  { name: "100 points (Tennis Moles / Mole Commotion)", types: ["TeMoScore"] },
  { name: "140 points (Tennis Moles / Mole Commotion)", types: ["TeMoScore"] },
  {
    name: "Hit 45 moles (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "Hit 15 blue (+1) moles (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "Hit 12 green (+2) moles (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "Hit 9 yellow (+3) moles (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "Hit 6 red (+4) moles (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "Hit 5 moles of each colour (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "Hit 3 moles with a single ball (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "Hit 4 moles with a single ball (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "Hit 3 big moles (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "90 points using only back- OR forehand (Tennis Moles / Mole Commotion)",
    types: ["TeMoScore"],
  },
  {
    name: "40 points without hitting multiple moles per ball (Tennis Moles / Mole Commotion)",
    types: ["TeMoScore"],
  },
  {
    name: "Exactly 5 points with a single ball (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "Bronze medal (Runner Ducky / Duck Dash)",
    types: ["RuDuMedal", "RuDuScore"],
  },
  { name: "75.0m/yd. (Runner Ducky / Duck Dash)", types: ["RuDuScore"] },
  { name: "150.0m/yd. (Runner Ducky / Duck Dash)", types: ["RuDuScore"] },
  {
    name: "Hit the duck 3 times (Runner Ducky / Duck Dash)",
    types: ["RuDuChallenge", "Quack"],
  },
  {
    name: "Hit the duck 5 times (Runner Ducky / Duck Dash)",
    types: ["RuDuChallenge", "Quack"],
  },
  {
    name: "Collect 3 clocks (Runner Ducky / Duck Dash)",
    types: ["RuDuChallenge"],
  },
  {
    name: "125.0m/yd. without hitting the duck (Runner Ducky / Duck Dash)",
    types: ["RuDuScore"],
  },
  {
    name: "100.0m/yd. without collecting any clocks (Runner Ducky / Duck Dash)",
    types: ["RuDuScore"],
  },
  {
    name: "80.0m/yd. using only back- OR forehand (Runner Ducky / Duck Dash)",
    types: ["RuDuScore"],
  },
  {
    name: "Score with 10 balls in a row (Runner Ducky / Duck Dash)",
    types: ["RuDuChallenge"],
  },
  {
    name: "Gobble Gobble / Turkey Wrangler (Bowling stamp)",
    types: ["BowlingStamp", "BowlingStrikes"],
  },
  {
    name: "100-Pin Strike / Powerhouse Strike (Bowling stamp)",
    types: ["BowlingStamp", "BowlingStrikes"],
  },
  { name: "The Bare Minimum (Bowling stamp)", types: ["BowlingStamp"] },
  {
    name: "The Secret Strike / Secret Striker (Bowling stamp)",
    types: ["BowlingStamp", "BowlingStrikes"],
  },
  {
    name: "3 strikes in each main mode (Bowling)",
    types: ["BowlingChallengeA", "BowlingStrikes"],
  },
  {
    name: "160 points without adjusting aim (Bowling 10-Pin Game)",
    types: ["Bowling10Score", "BowlingStandstill"],
  },
  {
    name: "3 strikes without adjusting aim (Bowling)",
    types: ["BowlingChallengeB", "BowlingStrikes", "BowlingStandstill"],
  },
  {
    name: "4 strikes or spares in a row without adjusting aim (Bowling)",
    types: [
      "BowlingChallengeB",
      "BowlingStrikes",
      "BowlingStandstill",
      "BowlingSpares",
    ],
  },
  { name: "120 points (Bowling 10-Pin Game)", types: ["Bowling10Score"] },
  { name: "180 points (Bowling 10-Pin Game)", types: ["Bowling10Score"] },
  {
    name: "65 points without strikes or spares (Bowling 10-Pin Game)",
    types: ["Bowling10Score"],
  },
  {
    name: "75 points without strikes or spares (Bowling 10-Pin Game)",
    types: ["Bowling10Score"],
  },
  {
    name: "4 strikes in one game (Bowling)",
    types: ["BowlingChallengeB", "BowlingStrikes"],
  },
  {
    name: "6 spares in one game (Bowling)",
    types: ["BowlingChallengeB", "BowlingSpares"],
  },
  {
    name: "5 consecutive strikes or spares (Bowling)",
    types: ["BowlingChallengeB", "BowlingStrikes"],
  },
  {
    name: "Convert 2 splits (Bowling)",
    types: ["BowlingChallengeB", "BowlingSpares"],
  },
  { name: "1200 points (Bowling 100-Pin Game)", types: ["Bowling100Score"] },
  { name: "1500 points (Bowling 100-Pin Game)", types: ["Bowling100Score"] },
  {
    name: "900 points without adjusting aim (Bowling 100-Pin Game)",
    types: ["Bowling100Score"],
  },
  {
    name: "840 points with barrier deflection before pin contact (Bowling 100-Pin Game)",
    types: ["Bowling100Score"],
  },
  {
    name: "1200 points without red button (Bowling 100-Pin Game)",
    types: ["Bowling100Score"],
  },
  {
    name: "Convert a split without red button (Bowling 100-Pin Game)",
    types: ["BowlingChallengeB", "BowlingSpares"],
  },
  {
    name: "Exactly 75 pins in one frame (Bowling 100-Pin Game)",
    types: ["BowlingChallengeB"],
  },
  {
    name: "Exactly 90 pins in one frame (Bowling 100-Pin Game)",
    types: ["BowlingChallengeB"],
  },
  {
    name: "Strike on an expert lane (Bowling Spin Control)",
    types: ["BowlingChallengeB", "BowlingStrikes"],
  },
  {
    name: "2 spares on different expert lanes (Bowling Spin Control)",
    types: ["BowlingChallengeB", "BowlingSpares"],
  },
  { name: "90 points (Bowling Spin Control)", types: ["BowlingSpinScore"] },
  { name: "120 points (Bowling Spin Control)", types: ["BowlingSpinScore"] },
  {
    name: "Bronze medal (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiMedal", "SpPiScore"],
  },
  {
    name: "550 points (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "690 points (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "170 points without adjusting aim (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "250 points without adjusting aim (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "230 points without collecting stars (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "Clear stage 6 with all balls remaining (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiChallenge"],
  },
  {
    name: "Clear stage 7 (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiChallenge"],
  },
  {
    name: "Collect 9 stars while clearing stages (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiChallenge"],
  },
  {
    name: "Collect 12 stars while clearing stages (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiChallenge"],
  },
  {
    name: "Bronze medal (Tricky Pins / Skittle Skills)",
    types: ["TrPiMedal", "TrPiScore"],
  },
  {
    name: "Clear stages 1-5 (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "Clear stages 6-10 (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "Clear 3 stages from level 3 (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "Clear 2 stages per level (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "Clear 7 odd numbered stages (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "Clear 6 even numbered stages (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  { name: "80 points (Tricky Pins / Skittle Skills)", types: ["TrPiScore"] },
  {
    name: "Clear 5 stages in a row without missing (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "Clear stages with exactly 50 pins total, then finish (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "Clear 6 stages (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "Clear 2 stages without adjusting aim (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "Bronze medal (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrMedal", "100PiPrScore"],
  },
  { name: "450 points (100-Pin Pro / Triple Whammy)", types: ["100PiPrScore"] },
  { name: "600 points (100-Pin Pro / Triple Whammy)", types: ["100PiPrScore"] },
  {
    name: "470 points without red button (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  {
    name: "610 points without red button (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  {
    name: "480 points without adjusting aim (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  {
    name: "420 points with barrier deflection before pin contact (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  {
    name: "Exactly 69 pins in one frame (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrChallenge"],
  },
  {
    name: "Exactly 85 pins in one frame (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrChallenge"],
  },
  {
    name: "Exactly 90 pins in one frame (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrChallenge"],
  },
  {
    name: "Exactly 95 pins in two frames (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrChallenge"],
  },
  {
    name: "All pins in a frame without red button (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrChallenge"],
  },
  { name: "Under Par / Underachiever (Golf stamp)", types: ["GolfStamp"] },
  { name: "The Secret Shot (Golf stamp)", types: ["GolfStamp", "GolfLetters"] },
  { name: "Finish any Lakeside 3-hole course (Golf)", types: ["Golf3"] },
  { name: "Finish any Classic 3-hole course (Golf)", types: ["Golf3"] },
  { name: "Finish any Resort 3-hole course (Golf)", types: ["Golf3"] },
  { name: "Finish any A 3-hole course (Golf)", types: ["Golf3"] },
  { name: "Finish any B 3-hole course (Golf)", types: ["Golf3"] },
  {
    name: "Finish any Lakeside 3-hole course, no GiveUp (Golf)",
    types: ["Golf3"],
  },
  {
    name: "Finish any Classic 3-hole course, no GiveUp (Golf)",
    types: ["Golf3"],
  },
  {
    name: "Finish any Resort 3-hole course, no GiveUp (Golf)",
    types: ["Golf3"],
  },
  { name: "Finish any A 3-hole course, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Finish Lakeside A, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Finish Classic A, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Finish Classic B, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Finish Resort A, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Finish Resort B, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Hit a flagstick or flag (Golf)", types: ["GolfChallengeB"] },
  { name: "Hit 6 different tree trunks (Golf)", types: ["GolfChallengeB"] },
  { name: "Hit 10 different tree trunks (Golf)", types: ["GolfChallengeB"] },
  {
    name: "Hit the same duck twice (Golf)",
    types: ["GolfChallengeB", "Quack"],
  },
  {
    name: "Land in all bunkers on any hole before finishing, no GiveUp (Golf)",
    types: ["GolfChallengeB", "GolfBunker"],
  },
  {
    name: "Land in 3 unique bodies of water on one hole (Golf)",
    types: ["GolfChallengeB"],
  },
  { name: "Land in 10 different bunkers (Golf)", types: ["GolfChallengeB"] },
  {
    name: "Land on fairway, rough, deep rough, fringe and green on one hole (Golf)",
    types: ["GolfChallengeB"],
  },
  {
    name: "Land on top of all 4 letters on Hole L7 (Golf)",
    types: ["GolfChallengeB", "GolfLetters"],
  },
  {
    name: "Finish any 3-hole course without going out of bounds (Golf)",
    types: ["GolfChallenge3"],
  },
  {
    name: "Finish any 3-hole course without landing in a bunker, no GiveUp (Golf)",
    types: ["GolfChallenge3", "GolfBunker"],
  },
  { name: "GiveUp on 3 different holes (Golf)", types: ["GolfChallengeA"] },
  { name: "Bronze medal (Pro Putter / Putter Madness)", types: ["PrPuMedal"] },
  {
    name: "Sink 2 balls in a row without adjusting aim (Pro Putter / Putter Madness)",
    types: ["PrPuChallenge"],
  },
  {
    name: "Sink 5 balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallenge"],
  },
  {
    name: "Sink 6 balls (Pro Putter / Putter Madness)",
    types: ["PrPuChallenge"],
  },
  {
    name: "Sink 2 balls while splicing the putt (Pro Putter / Putter Madness)",
    types: ["PrPuChallenge"],
  },
  {
    name: "Bronze medal (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiMedal", "ChInBiScore"],
  },
  { name: "75 points (Chip-In Bingo / Bingo Clubber)", types: ["ChInBiScore"] },
  { name: "90 points (Chip-In Bingo / Bingo Clubber)", types: ["ChInBiScore"] },
  {
    name: "Cover 2 spaces with a single ball (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "Cover the 1 and 25 space (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "Cover the 6 and 9 space (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "Cover the 4 and 20 space (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "Cover the space that's on the same position as this goal (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "Cover 7 spaces (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "Score with 6 balls (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "80 points only using irons (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScore"],
  },
  {
    name: "120 points without using putter (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScore"],
  },
  {
    name: "Bronze medal (Driver Challenge / Target Shooter)",
    types: ["DrChMedal", "DrChScore"],
  },
  {
    name: "200.0 points (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "Hit a metal bar twice (Driver Challenge / Target Shooter)",
    types: ["DrChChallenge"],
  },
  {
    name: "Between 14.9 and 35.1 points with one ball (Driver Challenge / Target Shooter)",
    types: ["DrChChallenge"],
  },
  {
    name: "Between 54.9 and 90.1 points with one ball (Driver Challenge / Target Shooter)",
    types: ["DrChChallenge"],
  },
  {
    name: "Hit the 1-area 2 times (Driver Challenge / Target Shooter)",
    types: ["DrChChallenge"],
  },
  {
    name: "Hit the 10-area 2 times (Driver Challenge / Target Shooter)",
    types: ["DrChChallenge"],
  },
  {
    name: "30.0 points without multipliers (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "190.0 points without driver (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "135.0 points only using irons (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  { name: "Get to the 2nd inning (Baseball)", types: ["BaseballMatch"] },
  {
    name: "Home Run, no training / skill shaper (Baseball)",
    types: ["BaseballChallenge", "BaseballHomeRun"],
  },
  { name: "2 points with a single hit (Baseball)", types: ["BaseballScore"] },
  { name: "3 consecutive foul balls (Baseball)", types: ["BaseballChallenge"] },
  {
    name: "Strikeout 2 pitchers (Baseball)",
    types: ["BaseballChallenge", "BaseballStrikeout"],
  },
  { name: "Bronze medal (Homer Hero / Home Run Hero)", types: ["HoHeMedal"] },
  {
    name: "5 consecutive Home Runs (Homer Hero / Home Run Hero)",
    types: ["HoHeChallenge"],
  },
  {
    name: "3 consecutive Home Runs with increasing distance (Homer Hero / Home Run Hero)",
    types: ["HoHeChallenge"],
  },
  {
    name: "3 consecutive Home Runs with decreasing distance (Homer Hero / Home Run Hero)",
    types: ["HoHeChallenge"],
  },
  {
    name: "Out of the Park (Homer Hero / Home Run Hero)",
    types: ["HoHeChallenge"],
  },
  { name: "440 points (Wall Breaker / Smash Hitter)", types: ["WaBrScore"] },
  { name: "550 points (Wall Breaker / Smash Hitter)", types: ["WaBrScore"] },
  {
    name: "Score with 4 consecutive balls (Wall Breaker / Smash Hitter)",
    types: ["WaBrChallenge"],
  },
  {
    name: "Score with 6 consecutive balls (Wall Breaker / Smash Hitter)",
    types: ["WaBrChallenge"],
  },
  {
    name: "Hit the pink (+100) wall 2 times (Wall Breaker / Smash Hitter)",
    types: ["WaBrChallenge"],
  },
  {
    name: "Score the same with 3 consecutive balls (Wall Breaker / Smash Hitter)",
    types: ["WaBrChallenge"],
  },
  {
    name: "160 points without hitting a pink (+100) wall (Wall Breaker / Smash Hitter)",
    types: ["WaBrScore"],
  },
  {
    name: "Bronze medal (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeMedal", "PiPeScore"],
  },
  {
    name: "710 points (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeScore"],
  },
  {
    name: "Catch 4 objects (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Catch 5 objects (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Hit all boxes in the upper row (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Hit all boxes in the middle row (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Hit all boxes in the lower row (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Hit 3 boxes with consecutive pitches (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Hit 4 boxes (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Miss boxes with 6 consecutive pitches (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Miss boxes with 7 consecutive pitches (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Catch a duck (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge", "Quack"],
  },
  {
    name: "Catch a pool ball (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Get 2 High Speed Bonuses (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "600 points without High Speed Bonuses (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeScore"],
  },
  {
    name: "Lightning Round / Fast-Fists KO (Boxing stamp)",
    types: ["BoxingStamp"],
  },
  {
    name: "Dazed and Contused / Opportunist (Boxing stamp)",
    types: ["BoxingStamp"],
  },
  {
    name: "A Straight Fight / Straight Fight (Boxing stamp)",
    types: ["BoxingStamp", "BoxingStraight"],
  },
  { name: "2 Boxing stamps", types: ["BoxingStamp"] },
  { name: "Win a match (Boxing)", types: ["BoxingMatch"] },
  {
    name: "Win a match using only one remote (Boxing)",
    types: ["BoxingMatch"],
  },
  {
    name: "Damage your opponent with 8 uppercuts (Boxing)",
    types: ["BoxingChallenge", "BoxingUppercut"],
  },
  {
    name: "Damage your opponent with 8 hooks (Boxing)",
    types: ["BoxingChallenge", "BoxingHook"],
  },
  {
    name: "Damage your opponent with 12 straight punches (Boxing)",
    types: ["BoxingChallenge", "BoxingStraight"],
  },
  {
    name: "Block 3 punches (Boxing)",
    types: ["BoxingChallenge", "BoxingBlock"],
  },
  {
    name: "Bronze medal (Plate Smasher / Pro Puncher)",
    types: ["PlSmMedal", "PlSmScore"],
  },
  { name: "420 points (Plate Smasher / Pro Puncher)", types: ["PlSmScore"] },
  { name: "550 points (Plate Smasher / Pro Puncher)", types: ["PlSmScore"] },
  { name: "650 points (Plate Smasher / Pro Puncher)", types: ["PlSmScore"] },
  {
    name: "Smash 37 plates (Plate Smasher / Pro Puncher)",
    types: ["PlSmChallenge"],
  },
  {
    name: "Smash 45 plates (Plate Smasher / Pro Puncher)",
    types: ["PlSmChallenge"],
  },
  {
    name: "Don't miss any plates for 7 consecutive rounds (Plate Smasher / Pro Puncher)",
    types: ["PlSmChallenge"],
  },
  {
    name: "120 points without straight punches (Plate Smasher / Pro Puncher)",
    types: ["PlSmScore"],
  },
  {
    name: "Smash 10 plates with uppercuts (Plate Smasher / Pro Puncher)",
    types: ["PlSmChallenge"],
  },
  {
    name: "Smash 10 plates with hooks (Plate Smasher / Pro Puncher)",
    types: ["PlSmChallenge"],
  },
  {
    name: "Bronze medal (Picky Puncher / Speed Bag)",
    types: ["PiPuMedal", "PiPuScore"],
  },
  { name: "350 points (Picky Puncher / Speed Bag)", types: ["PiPuScore"] },
  { name: "500 points (Picky Puncher / Speed Bag)", types: ["PiPuScore"] },
  {
    name: "Get a 20 Combo (Picky Puncher / Speed Bag)",
    types: ["PiPuChallenge"],
  },
  {
    name: "Get a 30 Combo (Picky Puncher / Speed Bag)",
    types: ["PiPuChallenge"],
  },
  {
    name: "Bronze medal (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoMedal", "FoDoScore"],
  },
  {
    name: "Silver medal (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoMedal", "FoDoScore"],
  },
  {
    name: "175 points (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoScore"],
  },
  {
    name: "240 points (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoScore"],
  },
  {
    name: "275 points (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoScore"],
  },
  {
    name: "300 points (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoScore"],
  },
  {
    name: "200 points with only 2 punches (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoScore"],
  },
  {
    name: "Get hit 24 times (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoChallenge"],
  },
  {
    name: "Get hit 27 times (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoChallenge"],
  },
  {
    name: "Get hit 5 or fewer times (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoChallenge"],
  },
  {
    name: "Get hit 6 or fewer times without pausing the game (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoChallenge"],
  },
  { name: "5 stamps", types: ["StampMultiA", "StampMultiC"] },
  { name: "1 stamp in 3 sports each", types: ["StampMultiB"] },
  {
    name: "3 stamps in one sport",
    types: [
      "StampMultiB",
      "StampMultiC",
      "StampMulti34Tennis",
      "StampMulti34Bowling",
      "StampMulti34Golf",
      "StampMulti34Boxing",
    ],
  },
  { name: "4 bronze medals", types: ["MedalMultiA", "MedalMultiBronze"] },
  { name: "Any gold medal", types: ["GoldMedal"] },
  {
    name: "2 Bowling silver medals",
    types: ["MedalMultiB", "SpPiMedal", "TrPiMedal", "100PiPrMedal"],
  },
  { name: "Gain 150XP total", types: ["XP", "Level34", "LevelGeneral"] },
  {
    name: "Win 4 matches against different CPUs / CPU teams",
    types: ["BeatCPU"],
  },
  {
    name: "Finish 1 training game / skill shaper per sport",
    types: ["TrainingMulti", "Training1Each"],
  },
  { name: "Hit or catch a duck", types: ["Quack"] },
];

bingoList[1] = easyChallenges;

var mediumChallenges = [
  { name: "Level 3 (Tennis)", types: ["TennisLevel", "Level34"] },
  {
    name: "Back-and-Forth Battler / Nail-Biter (Tennis stamp)",
    types: ["TennisStamp", "TennisDeuce"],
  },
  {
    name: "30-Shot Rally (Tennis stamp)",
    types: ["TennisStamp", "TennisRally"],
  },
  { name: "Tennis Pro / Tennis Ace (Tennis stamp)", types: ["TennisStamp"] },
  { name: "Smash Return (Tennis stamp)", types: ["TennisStamp"] },
  {
    name: "Run them Ragged / 3K Runner (Tennis stamp)",
    types: ["TennisStamp"],
  },
  { name: "2 Tennis stamps", types: ["TennisStamp"] },
  { name: "3 Tennis stamps", types: ["TennisStamp", "StampMulti34Tennis"] },
  { name: "4 Tennis stamps", types: ["TennisStamp", "StampMulti34Tennis"] },
  {
    name: "Rally the ball for 18 shots with your Mii on all 4 positions (Tennis)",
    types: ["TennisChallenge", "TennisRally"],
  },
  { name: "Deuce 7 times (Tennis)", types: ["TennisChallenge", "TennisDeuce"] },
  {
    name: "Win 2 matches without power serves (Tennis)",
    types: ["TennisMatch"],
  },
  { name: "Win all 3 match types (Tennis)", types: ["TennisMatch", "BeatCPU"] },
  {
    name: "Win 2 Single Games / Single-Game Matches (Tennis)",
    types: ["TennisMatch"],
  },
  {
    name: "Win 2 Best of 3 / Two-Game Matches (Tennis)",
    types: ["TennisMatch"],
  },
  { name: "Silver medal (Ring Master)", types: ["RiMaMedal", "RiMaScore"] },
  { name: "120 points (Ring Master)", types: ["RiMaScore"] },
  { name: "130 points (Ring Master)", types: ["RiMaScore"] },
  { name: "Get through 60 rings (Ring Master)", types: ["RiMaChallenge"] },
  {
    name: "55 points without hitting a ring (Ring Master)",
    types: ["RiMaScore"],
  },
  {
    name: "10 points or more with a single ball (Ring Master)",
    types: ["RiMaChallenge"],
  },
  {
    name: "70 points using only back- OR forehand (Ring Master)",
    types: ["RiMaScore"],
  },
  {
    name: "110 points using only back- OR forehand (Ring Master)",
    types: ["RiMaScore"],
  },
  {
    name: "Silver medal (Tennis Moles / Mole Commotion)",
    types: ["TeMoMedal", "TeMoScore"],
  },
  { name: "190 points (Tennis Moles / Mole Commotion)", types: ["TeMoScore"] },
  { name: "220 points (Tennis Moles / Mole Commotion)", types: ["TeMoScore"] },
  {
    name: "Hit 60 moles (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "80 points without hitting a blue (+1) mole (Tennis Moles / Mole Commotion)",
    types: ["TeMoScore"],
  },
  {
    name: "70 points without hitting a green (+2) mole (Tennis Moles / Mole Commotion)",
    types: ["TeMoScore"],
  },
  {
    name: "60 points without hitting a yellow (+3) mole (Tennis Moles / Mole Commotion)",
    types: ["TeMoScore"],
  },
  {
    name: "50 points without hitting a red (+4) mole (Tennis Moles / Mole Commotion)",
    types: ["TeMoScore"],
  },
  {
    name: "Hit 5 big moles (Tennis Moles / Mole Commotion)",
    types: ["TeMoChallenge"],
  },
  {
    name: "110 points using only back- OR forehand (Tennis Moles / Mole Commotion)",
    types: ["TeMoScore"],
  },
  {
    name: "Silver medal (Runner Ducky / Duck Dash)",
    types: ["RuDuMedal", "RuDuScore"],
  },
  { name: "225.0m/yd. (Runner Ducky / Duck Dash)", types: ["RuDuScore"] },
  {
    name: "Collect 5 clocks (Runner Ducky / Duck Dash)",
    types: ["RuDuChallenge"],
  },
  {
    name: "175.0m/yd. without hitting the duck (Runner Ducky / Duck Dash)",
    types: ["RuDuScore"],
  },
  {
    name: "135.0m/yd. without collecting any clocks (Runner Ducky / Duck Dash)",
    types: ["RuDuScore"],
  },
  {
    name: "160.0m/yd. using only back- OR forehand (Runner Ducky / Duck Dash)",
    types: ["RuDuScore"],
  },
  {
    name: "Finish with no medal while scoring with every ball (Runner Ducky / Duck Dash)",
    types: ["RuDuScore", "RuDuMedal"],
  },
  {
    name: "Score with 13 balls in a row (Runner Ducky / Duck Dash)",
    types: ["RuDuChallenge"],
  },
  { name: "Level 2 (Bowling)", types: ["BowlingLevel", "Level2"] },
  {
    name: "Split-Frame Spare (Bowling stamp)",
    types: ["BowlingStamp", "BowlingSpares"],
  },
  { name: "Pro Bowler (Bowling stamp)", types: ["BowlingStamp"] },
  {
    name: "Standstill Shooter / Straight Shooter (Bowling stamp)",
    types: ["BowlingStamp", "BowlingStandstill"],
  },
  { name: "No Pin Standing (Bowling stamp)", types: ["BowlingStamp"] },
  { name: "3 Bowling stamps", types: ["BowlingStamp", "StampMulti34Bowling"] },
  { name: "4 Bowling stamps", types: ["BowlingStamp", "StampMulti34Bowling"] },
  { name: "Finish all 3 main modes (Bowling)", types: ["BowlingChallengeA"] },
  {
    name: "Strike in frame 8, 9 or 10 (Bowling)",
    types: ["BowlingChallengeB", "BowlingStrikes"],
  },
  { name: "210 points (Bowling 10-Pin Game)", types: ["Bowling10Score"] },
  {
    name: "600 points across multiple games (Bowling 10-Pin Game)",
    types: ["Bowling10Score"],
  },
  {
    name: "7 consecutive strikes or spares (Bowling)",
    types: ["BowlingChallengeB", "BowlingStrikes", "BowlingSpares"],
  },
  {
    name: "10 strikes (Bowling)",
    types: ["BowlingChallengeA", "BowlingStrikes"],
  },
  {
    name: "15 strikes (Bowling)",
    types: ["BowlingChallengeA", "BowlingStrikes"],
  },
  {
    name: "10 spares (Bowling)",
    types: ["BowlingChallengeA", "BowlingSpares"],
  },
  {
    name: "15 spares (Bowling)",
    types: ["BowlingChallengeA", "BowlingSpares"],
  },
  {
    name: "20 strikes (Bowling)",
    types: ["BowlingChallengeA", "BowlingStrikes"],
  },
  { name: "1800 points (Bowling 100-Pin Game)", types: ["Bowling100Score"] },
  {
    name: "6000 points across multiple games (Bowling 100-Pin Game)",
    types: ["Bowling100Score"],
  },
  {
    name: "1010 points without adjusting aim (Bowling 100-Pin Game)",
    types: ["Bowling100Score"],
  },
  {
    name: "940 points with barrier deflection before pin contact (Bowling 100-Pin Game)",
    types: ["Bowling100Score"],
  },
  {
    name: "1500 points without red button (Bowling 100-Pin Game)",
    types: ["Bowling100Score"],
  },
  {
    name: "1800 points without red button (Bowling 100-Pin Game)",
    types: ["Bowling100Score"],
  },
  {
    name: "Hit a different barrier with each ball in 7 consecutive frames (Bowling Spin Control)",
    types: ["BowlingChallengeB"],
  },
  {
    name: "Strike on each of the 3 lane difficulties (Bowling Spin Control)",
    types: ["BowlingChallengeB", "BowlingStrikes"],
  },
  { name: "150 points (Bowling Spin Control)", types: ["BowlingSpinScore"] },
  {
    name: "300 points across multiple games (Bowling Spin Control)",
    types: ["BowlingSpinScore"],
  },
  {
    name: "80 points without touching barriers (Bowling Spin Control)",
    types: ["BowlingSpinScore"],
  },
  {
    name: "110 points without touching barriers (Bowling Spin Control)",
    types: ["BowlingSpinScore"],
  },
  {
    name: "100 points while touching at least 5 different barriers (Bowling Spin Control)",
    types: ["BowlingSpinScore"],
  },
  {
    name: "69 points without strikes or spares (Bowling Spin Control)",
    types: ["BowlingSpinScore"],
  },
  {
    name: "Silver medal (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiMedal", "SpPiScore"],
  },
  {
    name: "1000 points (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "470 points without collecting stars (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "Clear stage 10 (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiChallenge"],
  },
  {
    name: "Clear stage 12 (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiChallenge"],
  },
  {
    name: "Collect 14 stars while clearing stages (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiChallenge"],
  },
  {
    name: "830 points without collecting blue (x2) stars (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "670 points without collecting red (x3) stars (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "840 points without collecting yellow (x5) stars (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "3000 points across multiple games (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiScore"],
  },
  {
    name: "Silver medal (Tricky Pins / Skittle Skills)",
    types: ["TrPiMedal", "TrPiScore"],
  },
  { name: "110 points (Tricky Pins / Skittle Skills)", types: ["TrPiScore"] },
  { name: "130 points (Tricky Pins / Skittle Skills)", types: ["TrPiScore"] },
  { name: "170 points (Tricky Pins / Skittle Skills)", types: ["TrPiScore"] },
  {
    name: "Clear 8 stages (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "Clear 9 stages (Tricky Pins / Skittle Skills)",
    types: ["TrPiChallenge"],
  },
  {
    name: "600 points across multiple games (Tricky Pins / Skittle Skills)",
    types: ["TrPiScore"],
  },
  {
    name: "Silver medal (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrMedal", "100PiPrScore"],
  },
  { name: "680 points (100-Pin Pro / Triple Whammy)", types: ["100PiPrScore"] },
  {
    name: "660 points without red button (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  {
    name: "550 points without adjusting aim (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  {
    name: "520 points with barrier deflection before pin contact (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  {
    name: "540 points with barrier deflection before pin contact (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  {
    name: "Exactly 499 points (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  {
    name: "Exactly 501 points (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  { name: "Level 2 (Golf)", types: ["Level2"] },
  {
    name: "Fairway to Go! / Fairway or Bust (Golf stamp)",
    types: ["GolfStamp", "GolfFairway"],
  },
  { name: "2 Golf stamps", types: ["GolfStamp"] },
  { name: "3 Golf stamps", types: ["GolfStamp", "StampMulti34Golf"] },
  { name: "Finish any C 3-hole course (Golf)", types: ["Golf3"] },
  { name: "Finish any B 3-hole course, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Finish any C 3-hole course, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Finish Lakeside B, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Finish Lakeside C, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Finish Classic C, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "Finish Resort C, no GiveUp (Golf)", types: ["Golf3"] },
  { name: "3 Triple Bogeys (Golf)", types: ["GolfChallengeA"] },
  { name: "3 Double Bogeys (Golf)", types: ["GolfChallengeA"] },
  { name: "3 Bogeys (Golf)", types: ["GolfChallengeA"] },
  { name: "3 Pars (Golf)", types: ["GolfChallengeA"] },
  { name: "3 Birdies (Golf)", types: ["GolfChallengeA"] },
  { name: "Eagle, Albatross or Hole in One (Golf)", types: ["GolfChallengeA"] },
  {
    name: "Finish any 3-hole course without adjusting aim (Golf)",
    types: ["GolfChallenge3"],
  },
  {
    name: "Finish any 3-hole course without using the D-Pad (Golf)",
    types: ["GolfChallenge3"],
  },
  {
    name: "Finish any 3-hole course without driver, no GiveUp (Golf)",
    types: ["GolfChallenge3"],
  },
  {
    name: "Finish any 3-hole course while landing in every Bunker (Golf)",
    types: ["GolfChallenge3", "GolfBunker"],
  },
  {
    name: "Finish any 3-hole course only using irons and putter, no GiveUp (Golf)",
    types: ["GolfChallenge3"],
  },
  { name: "Hit 2 different ducks (Golf)", types: ["GolfChallengeB", "Quack"] },
  { name: "Hit 3 different ducks (Golf)", types: ["GolfChallengeB", "Quack"] },
  { name: "Land in 12 different bunkers (Golf)", types: ["GolfChallengeB"] },
  { name: "Finish 3 different Par 3s, no GiveUp (Golf)", types: ["GolfMulti"] },
  { name: "Finish 3 different Par 4s, no GiveUp (Golf)", types: ["GolfMulti"] },
  { name: "Finish 3 different Par 5s, no GiveUp (Golf)", types: ["GolfMulti"] },
  {
    name: "Finish 2 holes while getting a red bar every shot, except putts, no GiveUp (Golf)",
    types: ["GolfChallengeB"],
  },
  {
    name: "Finish 3 consecutive holes with the same amount of strokes (Golf)",
    types: ["GolfChallengeA"],
  },
  {
    name: "Finish 3 consecutive holes with Bogey or better (Golf)",
    types: ["GolfChallengeA"],
  },
  {
    name: "Finish any 3-hole course without landing on rough (Golf)",
    types: ["GolfChallenge3", "GolfFairway"],
  },
  {
    name: "Finish any 3-hole course without landing on fairway, no GiveUp (Golf)",
    types: ["GolfChallenge3"],
  },
  {
    name: "Finish any 3-hole course blind (hold 2 while selecting the course), no GiveUp (Golf)",
    types: ["GolfChallenge3"],
  },
  { name: "Finish 5 different holes, no GiveUp (Golf)", types: ["GolfMulti"] },
  { name: "Finish 7 different holes, no GiveUp (Golf)", types: ["GolfMulti"] },
  { name: "Silver medal (Pro Putter / Putter Madness)", types: ["PrPuMedal"] },
  {
    name: "Sink 4 balls in a row (Pro Putter / Putter Madness)",
    types: ["PrPuChallenge"],
  },
  {
    name: "No medal while sinking 5 balls (Pro Putter / Putter Madness)",
    types: ["PrPuMedal"],
  },
  {
    name: "Sink a ball into every unique hole across multiple games (Pro Putter / Putter Madness)",
    types: ["PrPuChallenge"],
  },
  {
    name: "Silver medal (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiMedal", "ChInBiScore"],
  },
  {
    name: "135 points (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScore"],
  },
  {
    name: "Cover 3 single-digit spaces (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "Cover 8 spaces (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "Score with 7 balls (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "105 points only using irons (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScore"],
  },
  {
    name: "4 spaces in a line (Almost there!) (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "1 space per line and column (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiChallenge"],
  },
  {
    name: "No medal while covering 5 or more spaces (Chip-In Bingo / Bingo Clubber)",
    types: ["ChInBiScore"],
  },
  {
    name: "Silver medal (Driver Challenge / Target Shooter)",
    types: ["DrChMedal", "DrChScore"],
  },
  {
    name: "325.0 points (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "350.0 points (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "Hit the 2-area 3 times (Driver Challenge / Target Shooter)",
    types: ["DrChChallenge"],
  },
  {
    name: "Hit the 5-area 3 times (Driver Challenge / Target Shooter)",
    types: ["DrChChallenge"],
  },
  {
    name: "41.0 points without multipliers (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "Score with 9 balls (Driver Challenge / Target Shooter)",
    types: ["DrChChallenge"],
  },
  {
    name: "250.0 points without driver (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "305.0 points without driver (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "175.0 points only using irons (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  { name: "Win a game (Baseball)", types: ["BaseballMatch"] },
  { name: "Lose a game (Baseball)", types: ["BaseballMatch"] },
  { name: "Get to the 3rd inning (Baseball)", types: ["BaseballMatch"] },
  { name: "3 singles (Baseball)", types: ["BaseballChallenge"] },
  { name: "3 doubles (Baseball)", types: ["BaseballChallenge"] },
  {
    name: "2 Home Runs, no training / skill shaper (Baseball)",
    types: ["BaseballChallenge", "BaseballHomeRun"],
  },
  {
    name: "Strikeout 5 pitchers (Baseball)",
    types: ["BaseballChallenge", "BaseballStrikeout"],
  },
  { name: "7 successful hits (Baseball)", types: ["BaseballChallenge"] },
  { name: "2 points (Baseball)", types: ["BaseballScore"] },
  { name: "3 points (Baseball)", types: ["BaseballScore"] },
  { name: "Silver medal (Homer Hero / Home Run Hero)", types: ["HoHeMedal"] },
  {
    name: "7 consecutive Home Runs (Homer Hero / Home Run Hero)",
    types: ["HoHeChallenge"],
  },
  {
    name: "9 consecutive Home Runs (Homer Hero / Home Run Hero)",
    types: ["HoHeChallenge"],
  },
  {
    name: "15 Home Runs (Homer Hero / Home Run Hero)",
    types: ["HoHeChallenge"],
  },
  {
    name: "16 Home Runs (Homer Hero / Home Run Hero)",
    types: ["HoHeChallenge"],
  },
  {
    name: "20 Home Runs (Homer Hero / Home Run Hero)",
    types: ["HoHeChallenge"],
  },
  {
    name: "Bronze medal (Wall Breaker / Smash Hitter)",
    types: ["WaBrMedal", "WaBrScore"],
  },
  {
    name: "Silver medal (Wall Breaker / Smash Hitter)",
    types: ["WaBrMedal", "WaBrScore"],
  },
  { name: "690 points (Wall Breaker / Smash Hitter)", types: ["WaBrScore"] },
  { name: "1000 points (Wall Breaker / Smash Hitter)", types: ["WaBrScore"] },
  {
    name: "Hit the light blue (+20) wall 5 times (Wall Breaker / Smash Hitter)",
    types: ["WaBrChallenge"],
  },
  {
    name: "Hit the light blue (+20) wall 6 times (Wall Breaker / Smash Hitter)",
    types: ["WaBrChallenge"],
  },
  {
    name: "Hit the dark blue (+50) wall 4 times (Wall Breaker / Smash Hitter)",
    types: ["WaBrChallenge"],
  },
  {
    name: "Hit the dark blue (+50) wall 5 times (Wall Breaker / Smash Hitter)",
    types: ["WaBrChallenge"],
  },
  {
    name: "Hit the pink (+100) wall 4 times (Wall Breaker / Smash Hitter)",
    types: ["WaBrChallenge"],
  },
  {
    name: "250 points without hitting a light blue (+20) wall (Wall Breaker / Smash Hitter)",
    types: ["WaBrScore"],
  },
  {
    name: "Silver medal (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeMedal", "PiPeScore"],
  },
  {
    name: "950 points (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeScore"],
  },
  {
    name: "1250 points (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeScore"],
  },
  {
    name: "Hit 6 boxes (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Catch 2 small (+100) objects (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Catch 2 medium (+50) objects (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "Catch 2 big (+20) objects (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  {
    name: "790 points without High Speed Bonuses (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeScore"],
  },
  {
    name: "Catch 9 different objects across multiple games (Pitch Perfect / Pitch for Prizes)",
    types: ["PiPeChallenge"],
  },
  { name: "Level 2 (Boxing)", types: ["BoxingLevel", "Level2"] },
  {
    name: "Upper Deck / Uppercutter (Boxing stamp)",
    types: ["BoxingStamp", "BoxingUppercut"],
  },
  {
    name: "Totally Hooked / Stone Fists (Boxing stamp)",
    types: ["BoxingStamp", "BoxingHook"],
  },
  {
    name: "Closely Guarded / Guard Master (Boxing stamp)",
    types: ["BoxingStamp", "BoxingBlock"],
  },
  { name: "3 Boxing stamps", types: ["BoxingStamp", "StampMulti34Boxing"] },
  { name: "Win a match in round 2 (Boxing)", types: ["BoxingMatch"] },
  { name: "Win a match without KO (Boxing)", types: ["BoxingMatch"] },
  {
    name: "Win a match without hitting your opponent straight (Boxing)",
    types: ["BoxingMatch"],
  },
  {
    name: "Block 5 punches (Boxing)",
    types: ["BoxingChallenge", "BoxingBlock"],
  },
  { name: "Win against 3 different CPUs (Boxing)", types: ["BoxingMatch"] },
  {
    name: "Silver medal (Plate Smasher / Pro Puncher)",
    types: ["PlSmMedal", "PlSmScore"],
  },
  {
    name: "Silver medal using only one remote (Plate Smasher / Pro Puncher)",
    types: ["PlSmMedal", "PlSmScore"],
  },
  {
    name: "1100 points across multiple games (Plate Smasher / Pro Puncher)",
    types: ["PlSmScore"],
  },
  {
    name: "Silver medal (Picky Puncher / Speed Bag)",
    types: ["PiPuMedal", "PiPuScore"],
  },
  { name: "600 points (Picky Puncher / Speed Bag)", types: ["PiPuScore"] },
  { name: "650 points (Picky Puncher / Speed Bag)", types: ["PiPuScore"] },
  {
    name: "Get a 35 Combo (Picky Puncher / Speed Bag)",
    types: ["PiPuChallenge"],
  },
  {
    name: "300 points only using uppercuts and hooks (Picky Puncher / Speed Bag)",
    types: ["PiPuScore"],
  },
  {
    name: "360 points only using uppercuts and hooks (Picky Puncher / Speed Bag)",
    types: ["PiPuScore"],
  },
  {
    name: "Land 30 uppercuts (Picky Puncher / Speed Bag)",
    types: ["PiPuChallenge"],
  },
  {
    name: "Land 30 hooks (Picky Puncher / Speed Bag)",
    types: ["PiPuChallenge"],
  },
  {
    name: "Silver medal using only one remote (Picky Puncher / Speed Bag)",
    types: ["PiPuMedal", "PiPuScore"],
  },
  {
    name: "40 points without multipliers (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoScore"],
  },
  {
    name: "50 points without multipliers (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoScore"],
  },
  {
    name: "150 points without scoring 100 in a single punch (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoScore"],
  },
  {
    name: "205 points without scoring 100 in a single punch (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoScore"],
  },
  {
    name: "Get hit 2 or fewer times (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoChallenge"],
  },
  {
    name: "Get hit 3 or fewer times without pausing the game (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoChallenge"],
  },
  {
    name: "500 points across multiple games (Fowl Dodgeball / Duck and Dodge)",
    types: ["FoDoScore"],
  },
  { name: "6 stamps", types: ["StampMultiA", "StampMultiC"] },
  { name: "7 stamps", types: ["StampMultiA"] },
  { name: "1 stamp in 4 sports each", types: ["StampMultiB"] },
  {
    name: "4 stamps in one sport",
    types: [
      "StampMultiB",
      "StampMultiC",
      "StampMulti34Tennis",
      "StampMulti34Bowling",
      "StampMulti34Golf",
      "StampMulti34Boxing",
    ],
  },
  { name: "5 bronze medals", types: ["MedalMultiA", "MedalMultiBronze"] },
  { name: "6 bronze medals", types: ["MedalMultiA", "MedalMultiBronze"] },
  { name: "3 silver medals", types: ["MedalMultiA", "MedalMultiSilver"] },
  { name: "4 silver medals", types: ["MedalMultiA", "MedalMultiSilver"] },
  { name: "2 gold medals", types: ["GoldMedal"] },
  {
    name: "1 bronze medal per sport",
    types: ["MedalMultiB", "MedalMultiBronze", "Training1Each"],
  },
  {
    name: "3 bronze medals in one sport",
    types: ["MedalMultiB", "MedalMultiBronze"],
  },
  {
    name: "1 silver medal per sport",
    types: ["MedalMultiB", "MedalMultiSilver", "Training1Each"],
  },
  {
    name: "2 Tennis silver medals",
    types: ["MedalMultiB", "RiMaMedal", "TeMoMedal", "RuDuMedal"],
  },
  {
    name: "2 Golf silver medals",
    types: ["MedalMultiB", "PrPuMedal", "ChInBiMedal", "DrChMedal"],
  },
  {
    name: "2 Baseball silver medals",
    types: ["MedalMultiB", "HoHeMedal", "WaBrMedal", "PiPeMedal"],
  },
  {
    name: "2 Boxing silver medals",
    types: ["MedalMultiB", "PlSmMedal", "PiPuMedal", "FoDoMedal"],
  },
  { name: "Level 3 in any sport", types: ["Level34", "LevelGeneral"] },
  { name: "Level 2 in 2 sports", types: ["Level2", "LevelGeneral"] },
  { name: "Gain 250XP total", types: ["XP", "Level34", "LevelGeneral"] },
  {
    name: "Win against 12 different Miis (Tennis = 2, Baseball = 9, Boxing = 1 if none repeat)",
    types: ["BeatCPU"],
  },
  { name: "Hit 2 different ducks", types: ["Quack"] },
];

bingoList[2] = mediumChallenges;

var hardChallenges = [
  { name: "Level 4 (Tennis)", types: ["TennisLevel", "Level34"] },
  {
    name: "300 points across multiple games (Ring Master)",
    types: ["RiMaScore"],
  },
  {
    name: "500 points across multiple games (Tennis Moles / Mole Commotion)",
    types: ["TeMoScore"],
  },
  {
    name: "500m/yd. across multiple games (Runner Ducky / Duck Dash)",
    types: ["RuDuScore"],
  },
  { name: "Level 3 (Bowling)", types: ["BowlingLevel", "Level34"] },
  {
    name: "25 strikes (Bowling)",
    types: ["BowlingChallengeA", "BowlingStrikes"],
  },
  {
    name: "600 points across multiple games (Bowling Spin Control)",
    types: ["BowlingSpinScore"],
  },
  {
    name: "Clear 3 stages without gaining points (Spare Pickups / Shoot for the Spares)",
    types: ["SpPiChallenge"],
  },
  {
    name: "2100 points across multiple games without red button (100-Pin Pro / Triple Whammy)",
    types: ["100PiPrScore"],
  },
  {
    name: "Finish any 3-hole course with 2 players (Golf)",
    types: ["GolfChallenge3"],
  },
  {
    name: "Finish any 3-hole course without adjusting aim, no GiveUp (Golf)",
    types: ["GolfChallenge3"],
  },
  {
    name: "Finish any 3-hole course without using the D-Pad, no GiveUp (Golf)",
    types: ["GolfChallenge3"],
  },
  { name: "Finish 10 different holes, no GiveUp (Golf)", types: ["GolfMulti"] },
  { name: "Finish 12 different holes, no GiveUp (Golf)", types: ["GolfMulti"] },
  { name: "Finish any 9-hole course (Golf)", types: ["GolfMulti"] },
  { name: "Finish 3 different 3-hole courses (Golf)", types: ["GolfMulti"] },
  {
    name: "1001.0 points across multiple games (Driver Challenge / Target Shooter)",
    types: ["DrChScore"],
  },
  {
    name: "Home Run / Home Runner (Baseball stamp)",
    types: ["BaseballStamp", "BaseballHomeRun"],
  },
  {
    name: "Pitch Perfect / Strike Stringer (Baseball stamp)",
    types: ["BaseballStamp", "BaseballStrikeout"],
  },
  { name: "2 Baseball stamps", types: ["BaseballStamp"] },
  {
    name: "Win a game without mercy rule (Baseball)",
    types: ["BaseballMatch"],
  },
  { name: "Tie a game (Baseball)", types: ["BaseballMatch"] },
  {
    name: "Successfully hit with the first Mii twice in one game (Baseball)",
    types: ["BaseballChallenge"],
  },
  { name: "10 successful hits (Baseball)", types: ["BaseballChallenge"] },
  {
    name: "6 points across multiple games (Baseball)",
    types: ["BaseballScore"],
  },
  {
    name: "8 points across multiple games (Baseball)",
    types: ["BaseballScore"],
  },
  {
    name: "2500 points across multiple games (Wall Breaker / Smash Hitter)",
    types: ["WaBrScore"],
  },
  { name: "Level 3 (Boxing)", types: ["BoxingLevel", "Level34"] },
  { name: "Level 4 (Boxing)", types: ["BoxingLevel", "Level34"] },
  { name: "4 Boxing stamps", types: ["BoxingStamp", "StampMulti34Boxing"] },
  {
    name: "Win against 7 different CPUs (Boxing)",
    types: ["BoxingMatch", "BeatCPU"],
  },
  { name: "8 stamps", types: ["StampMultiA"] },
  { name: "9 stamps", types: ["StampMultiA"] },
  { name: "10 stamps", types: ["StampMultiA"] },
  { name: "11 stamps", types: ["StampMultiA"] },
  { name: "1 stamp per sport", types: ["StampMultiB"] },
  { name: "2 stamps in 3 sports each", types: ["StampMultiB", "StampMultiC"] },
  {
    name: "3 stamps in 2 sports each",
    types: [
      "StampMultiB",
      "StampMultiC",
      "StampMulti34Tennis",
      "StampMulti34Bowling",
      "StampMulti34Golf",
      "StampMulti34Boxing",
    ],
  },
  { name: "7 bronze medals", types: ["MedalMultiA"] },
  { name: "5 silver medals", types: ["MedalMultiA", "MedalMultiSilver"] },
  { name: "3 gold medals", types: ["GoldMedal"] },
  {
    name: "2 bronze medals in 3 sports each",
    types: ["MedalMultiB", "MedalMultiBronze"],
  },
  {
    name: "3 silver medals in one sport",
    types: ["MedalMultiB", "MedalMultiSilver"],
  },
  {
    name: "2 silver medals in 3 sports each",
    types: ["MedalMultiB", "MedalMultiSilver"],
  },
  { name: "Level 2 in 3 sports", types: ["Level2", "LevelGeneral"] },
  { name: "Gain 350XP total", types: ["XP", "Level34", "LevelGeneral"] },
  { name: "Gain 420XP total", types: ["XP", "LevelGeneral"] },
  { name: "Gain 450XP total", types: ["XP", "LevelGeneral"] },
  { name: "Gain 480XP total", types: ["XP"] },
  { name: "Gain 500XP total", types: ["XP"] },
  { name: "Finish all sports (All Sports rules)", types: ["AllSports"] },
  {
    name: "Win 8 matches against different CPUs / CPU teams",
    types: ["BeatCPU"],
  },
  {
    name: "Win against 16 different Miis (Tennis = 2, Baseball = 9, Boxing = 1 if none repeat)",
    types: ["BeatCPU"],
  },
  {
    name: "Win against 18 different Miis (Tennis = 2, Baseball = 9, Boxing = 1 if none repeat)",
    types: ["BeatCPU"],
  },
  {
    name: "Finish 10 training games / skill shapers",
    types: ["TrainingMulti", "Training10"],
  },
  { name: "Hit 3 different ducks", types: ["Quack"] },
  { name: "Hit 4 different ducks", types: ["Quack"] },
  { name: "Hit 5 different ducks", types: ["Quack"] },
];

bingoList[3] = hardChallenges;

extraHardChallenges = [
  { name: "Finish 16 different holes, no GiveUp (Golf)", types: ["GolfMulti"] },
  { name: "Finish 18 different holes (Golf)", types: ["GolfMulti"] },
  { name: "Finish 18 different holes, no GiveUp (Golf)", types: ["GolfMulti"] },
  { name: "Finish 5 different 3-hole courses (Golf)", types: ["GolfMulti"] },
  { name: "Level 2 (Baseball)", types: ["Level2"] },
  {
    name: "10 points across multiple games (Baseball)",
    types: ["BaseballScore"],
  },
  { name: "12 stamps", types: ["StampMultiA"] },
  { name: "13 stamps", types: ["StampMultiA"] },
  { name: "14 stamps", types: ["StampMultiA"] },
  { name: "15 stamps", types: ["StampMultiA"] },
  { name: "16 stamps", types: ["StampMultiA"] },
  { name: "9 bronze medals", types: ["MedalMultiA"] },
  { name: "10 bronze medals", types: ["MedalMultiA", "Training10"] },
  { name: "8 silver medals", types: ["MedalMultiA"] },
  { name: "9 silver medals", types: ["MedalMultiA"] },
  { name: "Level 3 in 2 sports", types: ["Level34", "LevelGeneral"] },
  { name: "Gain 550XP total", types: ["XP"] },
  { name: "Gain 600XP total", types: ["XP"] },
  {
    name: "Finish all sports plus (All Sports + rules)",
    types: ["AllSportsPlus"],
  },
  { name: "Hit 7 different ducks", types: ["Quack"] },
];

bingoList[4] = extraHardChallenges;
