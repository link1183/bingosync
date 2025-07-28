bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Win a Single-Game Match (Tennis)", types: ["Tennismatch"] },
  {
    name: "100-Pin Strike (Bowling Stamp)",
    types: ["Bowlingstempel", "Allesmussweg", "Perfekt"],
  },
  {
    name: "Under Par/Underachiever (Golf Stamp)",
    types: ["Golfstempel", "Golf3", "Golf9", "Golf18", "Golfweiteres"],
  },
  { name: "Get a score of -1 or better on Classic A (Golf)", types: ["Golf3"] },
  { name: "Get a score of -1 or better on Classic B (Golf)", types: ["Golf3"] },
  { name: "Get a score of -1 or better on Resort A (Golf)", types: ["Golf3"] },
  { name: "Get a score of -1 or better on Resort B (Golf)", types: ["Golf3"] },
  {
    name: "Score 500+ points (Boxing Plate Smasher)",
    types: ["Boxenpkt", "Scheibenschlag"],
  },
];
bingoList[2] = [
  { name: "Smash Point/Smash Hitter (Tennis Stamp)", types: ["Tennisstempel"] },
  { name: "Win a Two-Game Match (Tennis)", types: ["Tennismatch"] },
  {
    name: "Score 150+ points (Bowling Tricky Pins)",
    types: ["Kunstwurf", "Bowlingpunkte"],
  },
  { name: "Get a score of -1 or better on Classic C (Golf)", types: ["Golf3"] },
  { name: "Get a score of -1 or better on Resort C (Golf)", types: ["Golf3"] },
  {
    name: "Get a score of -1 or better on Lakeside A (Golf)",
    types: ["Golf3"],
  },
  {
    name: "Get a score of -1 or better on Classic 9 Hole (Golf)",
    types: ["Golf9"],
  },
  {
    name: "Score 1300m/4265ft.+ (Baseball Homer Hero)",
    types: ["Home", "Baseballpunkte"],
  },
  {
    name: "Home Run/Home Runner (Baseball Stamp)",
    types: ["Baseballstempel", "Homerundoppel"],
  },
  {
    name: "Score 250+ points (Boxing Fowl Dodgeball)",
    types: ["Boxenpkt", "Beschuss"],
  },
];
bingoList[3] = [
  { name: "Smash Return (Tennis Stamp)", types: ["Tennisstempel"] },
  {
    name: "Score 1075+ points (Bowling Spare Pickups)",
    types: ["Spare", "Bowlingpunkte"],
  },
  {
    name: "Score 800+ points (Bowling 100-Pin Pro)",
    types: ["Dreiwurf", "Bowlingpunkte"],
  },
  {
    name: "The Bare Minimum (Bowling Stamp)",
    types: ["Bowlingstempel", "Allesmussweg"],
  },
  {
    name: "The Secret Strike/Secret Striker (Bowling Stamp)",
    types: ["Bowlingstempel"],
  },
  { name: "Reach Level 3 (Bowling)", types: ["Bowlinglevel", "Level3"] },
  {
    name: "Get a score of -1 or better on Resort 9 Hole (Golf)",
    types: ["Golf9"],
  },
  {
    name: "Score 550+ points (Boxing Plate Smasher)",
    types: ["Boxenpkt", "Scheibenschlag"],
  },
];
bingoList[4] = [
  {
    name: "Score 100+ points (Tennis Ring Master)",
    types: ["Ringe", "Tennispunkte"],
  },
  { name: "Win a Three-Game Match (Tennis)", types: ["Tennismatch"] },
  {
    name: "Gobble Gobble/Turkey Wrangler (Bowling Stamp)",
    types: ["Bowlingstempel", "Turkey"],
  },
  { name: "Score 2000+ points (Bowling 100-Pin Game)", types: ["Bowling100"] },
  {
    name: "Play a 10-Pin Game, 100-Pin Game and Spin Control (Bowling)",
    types: ["Bowling", "Allemodi"],
  },
  { name: "Chip It in/Chip-In Wizard (Golf Stamp)", types: ["Golfstempel"] },
  {
    name: "Get a score of -1 or better on Lakeside B (Golf)",
    types: ["Golf3"],
  },
  { name: "Get a score of -2 or better on Classic A (Golf)", types: ["Golf3"] },
  { name: "Get a score of -2 or better on Classic B (Golf)", types: ["Golf3"] },
  { name: "Get a score of -2 or better on Resort A (Golf)", types: ["Golf3"] },
  {
    name: "Get a score of -3 or better on Classic 9 Hole (Golf)",
    types: ["Golf9"],
  },
  {
    name: "Get a score of -1 or better on Lakeside 9 Hole (Golf)",
    types: ["Golf9"],
  },
  {
    name: "Score 150+ points without breaking any 20/30-plates (Boxing Plate Smasher)",
    types: ["Boxenwtrs", "Scheibenschlag"],
  },
];
bingoList[5] = [
  {
    name: "Score 140+ points (Tennis Tennis Moles)",
    types: ["Maulwurf", "Tennispunkte"],
  },
  { name: "Rattlesnake Reflexes (Tennis Stamp)", types: ["Tennisstempel"] },
  {
    name: "Win a Single-Game Match without using your front Mii (Tennis)",
    types: ["Tennismatch", "Ohnepunkt"],
  },
  { name: "Reach Level 4 (Bowling)", types: ["Bowlinglevel", "Level45"] },
  {
    name: "Score 34.0m/111.5ft.+ (Golf Pro Putter)",
    types: ["Putt", "Golfscore"],
  },
  { name: "Get a score of -2 or better on Resort B (Golf)", types: ["Golf3"] },
  {
    name: "Get a score of -3 or better on Resort 9 Hole (Golf)",
    types: ["Golf9"],
  },
  {
    name: "Score 750+ points (Baseball Pitch Perfect)",
    types: ["Geschenke", "Baseballpunkte"],
  },
  {
    name: "Score 600+ points (Boxing Plate Smasher)",
    types: ["Boxenpkt", "Scheibenschlag"],
  },
  {
    name: "Counter Puncher/Cruel Counter (Boxing Stamp)",
    types: ["Boxenstempel"],
  },
];
bingoList[6] = [
  { name: "30-Shot Rally (Tennis Stamp)", types: ["Tennisstempel"] },
  {
    name: "No Pin Standing (Bowling Stamp)",
    types: ["Bowlingstempel", "Allesmussweg", "Perfekt"],
  },
  { name: "Score 220+ points (Bowling 10-Pin Game)", types: ["Bowling10"] },
  {
    name: "Get a score of -1 or better on Lakeside C (Golf)",
    types: ["Golf3"],
  },
  { name: "Get a score of -2 or better on Classic C (Golf)", types: ["Golf3"] },
  {
    name: "Score 315+ points (Boxing Fowl Dodgeball)",
    types: ["Boxenpkt", "Beschuss"],
  },
  {
    name: "Closely Guarded/Guard Master (Boxing Stamp)",
    types: ["Boxenstempel"],
  },
  { name: "Win a match (Boxing)", types: ["Boxenmatch"] },
];
bingoList[7] = [
  {
    name: "Win a Single-Game, Two-Game and Three Game Match (Tennis)",
    types: ["Tennismatch", "Allemodi"],
  },
  { name: "Reach Level 5 (Bowling)", types: ["Bowlinglevel", "Level45"] },
  {
    name: "Score 95+ points (Golf Chip-In Bingo)",
    types: ["Bingo", "Golfscore"],
  },
  { name: "Get a score of -2 or better on Resort C (Golf)", types: ["Golf3"] },
  {
    name: "Get a score of -1 or better on Classic/Resort 18 Hole (Golf)",
    types: ["Golf18"],
  },
  {
    name: "The Hat Trick/Strikeout Stringer (Baseball Stamp)",
    types: ["Baseballstempel"],
  },
  {
    name: "Score 650+ points (Boxing Plate Smasher)",
    types: ["Boxenpkt", "Scheibenschlag"],
  },
  {
    name: "Lightning Round/Fast-Fists KO (Boxing Stamp)",
    types: ["Boxenstempel"],
  },
  {
    name: "Dazed and Contused/Opporzunist (Boxing Stamp)",
    types: ["Boxenstempel"],
  },
];
bingoList[8] = [
  {
    name: "Score 160+ points (Tennis Ring Master)",
    types: ["Ringe", "Tennispunkte"],
  },
  {
    name: "Score 190+ points (Tennis Tennis Moles)",
    types: ["Maulwurf", "Tennispunkte"],
  },
  { name: "Pro Bowler (Bowling Stamp)", types: ["Bowlingstempel", "Perfekt"] },
  { name: "Score 2400+ points (Bowling 100-Pin Game)", types: ["Bowling100"] },
  {
    name: "Get a score of -2 or better on Lakeside A (Golf)",
    types: ["Golf3"],
  },
  {
    name: "Get a score of -3 or better on Lakeside 9 Hole (Golf)",
    types: ["Golf9"],
  },
  {
    name: "Get a score of -1 or better on Resort/Lakeside 18 Hole (Golf)",
    types: ["Golf18"],
  },
  {
    name: "Get a score of -1 or better on Lakeside/Classic 18 Hole (Golf)",
    types: ["Golf18"],
  },
  { name: "Play all 3 Hole A courses (Golf)", types: ["Golf3ABC"] },
  {
    name: "Score 2600m/8530ft.+ (Baseball Homer Hero)",
    types: ["Home", "Baseballpunkte"],
  },
  {
    name: "Pitch Perfect/Strike Stringer (Baseball Stamp)",
    types: ["Baseballstempel"],
  },
  { name: "Upper Deck/Uppercutter (Boxing Stamp)", types: ["Boxenstempel"] },
  { name: "On the Ropes/Close Call (Boxing Stamp)", types: ["Boxenstempel"] },
];
bingoList[9] = [
  {
    name: "Tennis Pro/Tennis Ace (Tennis Stamp)",
    types: ["Tennisstempel", "Ohnepunkt"],
  },
  { name: "Reach Level 3 (Tennis)", types: ["Tennislevel", "Level3"] },
  {
    name: "Score 1750+ points (Bowling Spare Pickups)",
    types: ["Spare", "Bowlingpunkte"],
  },
  {
    name: "Get 5+ strikes in a row in every mode (Bowling)",
    types: ["Bowling", "Turkey"],
  },
  {
    name: "Fairway to Go!/Fairway or Bust (Golf Stamp)",
    types: ["Golfstempel"],
  },
  {
    name: "Score 1300m/4265ft.+ without any mistakes (Baseball Homer Hero)",
    types: ["Home", "Baseballusw"],
  },
];
bingoList[10] = [
  {
    name: "Score 2400+ points (Bowling 100-Pin Pro)",
    types: ["Dreiwurf", "Bowlingpunkte"],
  },
  { name: "Split-Frame-Spare (Bowling Stamp)", types: ["Bowlingstempel"] },
  {
    name: "Hit 8+ pins in every frame (Bowling Spin Control)",
    types: ["Bowlingausweichen"],
  },
  {
    name: "Score 51.0m/167.3ft.+ (Golf Pro Putter)",
    types: ["Putt", "Golfscore"],
  },
  {
    name: "Score 320.0+ points (Golf Driver Challenge)",
    types: ["Scheibe", "Golfscore"],
  },
  {
    name: "Score 10.0+ points with every ball (Golf Driver Challenge)",
    types: ["Scheibe", "Golfetc"],
  },
  {
    name: "Get a score of -5 or better on Classic 9 Hole (Golf)",
    types: ["Golf9"],
  },
  {
    name: "Get a score of -5 or better on Classic/Resort 18 Hole (Golf)",
    types: ["Golf18"],
  },
  { name: "Play all 3 Hole B courses (Golf)", types: ["Golf3ABC"] },
  { name: "Win a game (Baseball)", types: ["Baseballspiel"] },
  { name: "Reach Level 3 (Boxing)", types: ["Boxenlevel", "Level3"] },
];
bingoList[11] = [
  { name: "Reach Level 4 (Tennis)", types: ["Tennislevel", "Level45"] },
  {
    name: "Score 750+ points without hitting the red button (Bowling 100-Pin Pro)",
    types: ["Dreiwurf", "Bowlingsonstiges"],
  },
  { name: "Flag it Down (Golf Stamp)", types: ["Golfstempel"] },
  { name: "The Secret Shot (Golf Stamp)", types: ["Golfstempel"] },
  {
    name: "Get a score of -2 or better on Lakeside B (Golf)",
    types: ["Golf3"],
  },
  {
    name: "Get a score of -2 or better on Lakeside C (Golf)",
    types: ["Golf3"],
  },
  {
    name: "Get a score of -5 or better on Resort 9 Hole (Golf)",
    types: ["Golf9"],
  },
  {
    name: "Get a score of -5 or better on Lakeside/Classic 18 Hole (Golf)",
    types: ["Golf18"],
  },
  {
    name: "Score 900+ points (Baseball Wall Breaker)",
    types: ["Wand", "Baseballpunkte"],
  },
  { name: "Score 1000+ points (Baseball Pitch Perfect", types: [] },
  {
    name: "Three and Out/Three for All (Baseball Stamp)",
    types: ["Baseballstempel"],
  },
  {
    name: "Score 450+ points (Boxing Picky Puncher)",
    types: ["Boxenpkt", "Sandsack"],
  },
  {
    name: "Totally Hookes/Stone Fists (Boxing Stamp)",
    types: ["Boxenstempel"],
  },
];
bingoList[12] = [
  {
    name: "Get the ball through 12+ red rings (Tennis Ring Master)",
    types: ["Ringe", "Tennisweiteres"],
  },
  { name: "Back-and-Forth Battler/Nail Biter (Tennis Stamp)", types: [] },
  {
    name: "Run Them Ragged/3K Runner (Tennis Stamp)",
    types: ["Tennisstempel"],
  },
  {
    name: "Perfect Game (Bowling Stamp)",
    types: ["Bowlingstempel", "Perfekt"],
  },
  { name: "Score 2600+ points (Bowling 100-Pin Game)", types: ["Bowling100"] },
  {
    name: "Score 180+ points (Bowling Spin Control)",
    types: ["Bowlingausweichen"],
  },
  { name: "Get a score of -3 or better on Classic A (Golf)", types: ["Golf3"] },
  { name: "Get a score of -3 or better on Classic C (Golf)", types: ["Golf3"] },
  { name: "Get a score of -3 or better on Resort A (Golf)", types: ["Golf3"] },
  {
    name: "Get a score of -3 or better on Lakeside A (Golf)",
    types: ["Golf3"],
  },
  {
    name: "Get a score of -5 or better on Resort/Lakeside 18 Hole (Golf)",
    types: ["Golf18"],
  },
  { name: "Reach Level 3 (Golf)", types: ["Golflevel", "Level3"] },
  { name: "Play all 3 Hole C courses (Golf)", types: ["Golf3ABC"] },
  {
    name: "Score 325+ points (Boxing Fowl Dodgeball)",
    types: ["Boxenpkt", "Beschuss"],
  },
  { name: "Reach Level 4 (Boxing)", types: ["Boxenlevel", "Level45"] },
];
bingoList[13] = [
  {
    name: "Score 225m/110yd.+ (Tennis Runner Ducky)",
    types: ["Ente", "Tennispunkte"],
  },
  { name: "Reach Level 5 (Tennis)", types: ["Tennislevel", "Level45"] },
  {
    name: "Clear stage 12 with 4+ balls left (Bowling Spare Pickups)",
    types: ["Spare", "Bowlingsonstiges"],
  },
  {
    name: "Score 160+ points without getting any strikes (Bowling 10-Pin Game)",
    types: ["Bowling10weiteres"],
  },
  {
    name: "Score 2200+ points without hittinh the red button  (Bowling 100-Pin Game)",
    types: ["Bowling100"],
  },
  {
    name: "Get 7+ balls into a hole (Golf Pro Putter)",
    types: ["Putt", "Golfetc"],
  },
  {
    name: "Score points with every ball (Golf Chip-In Bingo)",
    types: ["Bingo", "Golfetc"],
  },
  {
    name: "Score 420.0+ points (Golf Driver Challenge)",
    types: ["Scheibe", "Golfscore"],
  },
  { name: "Get a score of -3 or better on Classic B (Golf)", types: ["Golf3"] },
  { name: "Reach Level 4 (Golf)", types: ["Golflevel", "Level45"] },
];
bingoList[14] = [
  {
    name: "Score 120+ points without hittling any blue/+1 moles (Tennis Tennis Moles)",
    types: ["Maulwurf", "Tennisweiteres"],
  },
  { name: "Score 250+ points (Bowling 10-Pin Game)", types: ["Bowling10"] },
  {
    name: "Get a strike or spare every frame (Bowling Spin Control)",
    types: ["Bowlingausweichen", "Allesmussweg"],
  },
  {
    name: "King of Clubs/Birdie Watcher (Golf Stamp)",
    types: ["Golfstempel", "Minus9"],
  },
  { name: "Reach Level 5 (Golf)", types: ["Golflevel", "Level45"] },
  {
    name: "Safe Hands/Critical Catcher (Baseball Stamp)",
    types: ["Baseballstempel"],
  },
  {
    name: "Hit 3+ Home Runs in a game (Baseball)",
    types: ["Baseballspiel", "Homerundoppel"],
  },
  { name: "Reach Level 5 (Boxing)", types: ["Level45"] },
];
bingoList[15] = [
  { name: "Forehand Master (Tennis Stamp)", types: ["Tennisstempel"] },
  {
    name: "Clear all stages in levels 1 and 2 without any mistakes (Bowling Tricky Pins)",
    types: ["Kunstwurf", "Bowlingsonstiges"],
  },
  {
    name: "Score 85.0m/278.8ft.+ (Golf Pro Putter)",
    types: ["Putt", "Golfscore"],
  },
  {
    name: "Get a ball into a hole (Golf Chip-In Bingo)",
    types: ["Bingo", "Golfetc"],
  },
  { name: "Get a score of -3 or better on Resort B (Golf)", types: ["Golf3"] },
  {
    name: "Get a score of -9 or better on Classic/Resort 18 Hole (Golf)",
    types: ["Golf18", "Minus9"],
  },
  {
    name: "Score 1050+ points (Baseball Wall Breaker)",
    types: ["Wand", "Baseballpunkte"],
  },
  {
    name: "Score 525+ points (Boxing Picky Puncher)",
    types: ["Boxenpkt", "Sandsack"],
  },
  {
    name: "Comeback Kid/Comeback Champ (Boxing Stamp)",
    types: ["Boxenstempel"],
  },
];
bingoList[16] = [
  {
    name: "Score 270+ points (Tennis Ring Master)",
    types: ["Ringe", "Tennispunkte"],
  },
  {
    name: "Score 346m/170yd.+ (Tennis Runner Ducky)",
    types: ["Ente", "Tennispunkte"],
  },
  {
    name: "Score 500+ points without touching any star (Bowling Spare Pickups)",
    types: ["Spare", "Bowlingsonstiges"],
  },
  {
    name: "Standstill Shooter/Straight Shooter (Bowling Stamp)",
    types: ["Bowlingstempel"],
  },
  {
    name: "Bowl a perfect game (100-Pin Bowling)",
    types: ["Bowling100", "Perfekt"],
  },
  {
    name: "Score 155+ points (Golf Chip-In Bingo)",
    types: ["Bingo", "Golfscore"],
  },
  { name: "Score 520.0+ points (Golf Driver Challenge)", types: [] },
  {
    name: "Get a score of -3 or better on Lakeside B (Golf)",
    types: ["Golf3"],
  },
  {
    name: "Get a score of -9 or better on Lakeside/Classic 18 Hole (Golf)",
    types: ["Golf18"],
  },
  {
    name: "Hit a duck 2+ times in a 3 Hole game (Golf)",
    types: ["Golfweiteres"],
  },
  {
    name: "Get 12 home runs in a row (Baseball Homer Hero)",
    types: ["Home", "Baseballusw"],
  },
  {
    name: "Score 1400+ points (Baseball Wall Breaker",
    types: ["Wand", "Baseballpunkte"],
  },
  {
    name: "Score 1250+ points (Baseball Pitch Perfect)",
    types: ["Geschenke", "Baseballpunkte"],
  },
  { name: "Get a 30+ combo (Boxing Picky Puncher)", types: [] },
  {
    name: "A Straight Fight/Straight Fight (Boxing Stamp)",
    types: ["Boxenstempel"],
  },
];
bingoList[17] = [
  {
    name: "Score 80+ points without hitting any ring (sound) (Tennis Ring Master)",
    types: ["Ringe", "Tennisweiteres"],
  },
  {
    name: "Score 550m/270yd.+ (Tennis Runner Ducky)",
    types: ["Ente", "Tennispunkte"],
  },
  {
    name: "Clear 13+ stages with 3+ balls left (Bowling Tricky Pins)",
    types: ["Kunstwurf", "Bowlingsonstiges"],
  },
  {
    name: "Score 820+ points without hitting the red button (Bowling 100-Pin Pro)",
    types: [],
  },
  {
    name: "Score 2500+ points without hittinh the red button (Bowling 100-Pin Game)",
    types: ["Bowling100"],
  },
  {
    name: "Score 210+ points (Bowling Spin Control)",
    types: ["Bowlingausweichen"],
  },
  {
    name: "Get a score of -8 or better on Classic 9 Hole (Golf)",
    types: ["Golf9", "Minus9"],
  },
  {
    name: "Get a score of -5 or better on Lakeside 9 Hole (Golf)",
    types: ["Golf9"],
  },
  {
    name: "Get a score of -9 or better on Resort/Lakeside 18 Hole (Golf)",
    types: ["Golf18"],
  },
  {
    name: "Catch 7+ objects (Baseball Pitch Perfect)",
    types: ["Geschenke", "Baseballusw"],
  },
  {
    name: "Hit all 9 boxes (Baseball Pitch Perfect)",
    types: ["Geschenke", "Baseballusw"],
  },
  { name: "Reach Level 3 (Baseball)", types: ["Baseballlevel", "Level3"] },
  {
    name: "Score 600+ points (Boxing Picky Puncher)",
    types: ["Boxenwtrs", "Sandsack"],
  },
  {
    name: "Score 340+ points (Boxing Fowl Dodgeball)",
    types: ["Boxenpkt", "Beschuss"],
  },
];
bingoList[18] = [
  {
    name: "Hit 7+ big moles (Tennis Tennis Moles",
    types: ["Maulwurf", "Tennisweiteres"],
  },
  { name: "Get a score of -3 or better on Resort C (Golf)", types: ["Golf3"] },
  {
    name: "Get a score of -7 or better on Resort 9 Hole (Golf)",
    types: ["Golf9", "Minus9"],
  },
  {
    name: "Score 900+ points without breaking any light blue wall (Baseball Wall Breaker)",
    types: ["Wand", "Baseballusw"],
  },
  {
    name: "Win a game with the Mercy Rule (Baseball)",
    types: ["Baseballspiel"],
  },
  {
    name: "Win a game without the Mercy Rule (Baseball)",
    types: ["Baseballspiel"],
  },
];
bingoList[19] = [
  {
    name: "Score 270+ points (Tennis Tennis Moles)",
    types: ["Maulwurf", "Tennispunkte"],
  },
  {
    name: "Score 250+ points (Bowling Tricky Pins)",
    types: ["Kunstwurf", "Bowlingpunkte"],
  },
  {
    name: "Get a score of -3 or better on Lakeside C (Golf)",
    types: ["Golf3"],
  },
  {
    name: "Score 1800+ points (Baseball Wall Breaker)",
    types: ["Wand", "Baseballpunkte"],
  },
  { name: "Hit for the Cycle (Baseball Stamp)", types: ["Baseballstempel"] },
];
bingoList[20] = [
  {
    name: "Collect 5+ clocks (Tennis Runner Ducky)",
    types: ["Ente", "Tennisweiteres"],
  },
  { name: "Score 280+ points (Bowling 10-Pin Game)", types: ["Bowling10"] },
  { name: "Get a bingo (Golf Chip-In Bingo)", types: ["Bingo", "Golfetc"] },
  { name: "Get 3+ Chip-Ins in a 9 Hole game (Golf)", types: ["Golfweiteres"] },
  {
    name: "Score 47.0+ points without using the glass wall (Golf Driver Challenge)",
    types: ["Scheibe", "Golfetc"],
  },
  {
    name: "Score 4450m/14928ft.+ (Baseball Homer Hero)",
    types: ["Home", "Baseballpunkte"],
  },
  { name: "Victory Lap (Baseball Stamp)", types: ["Baseballstempel"] },
  { name: "Reach Level 4 (Baseball)", types: ["Baseballlevel", "Level45"] },
];
bingoList[21] = [
  {
    name: "Score 240+ points (Bowling Spin Control)",
    types: ["Bowlingausweichen"],
  },
  { name: "Hole-in-One (Golf Stamp)", types: ["Golfstempel"] },
  {
    name: "Shutout Game/Shutout King (Baseball Stamp)",
    types: ["Baseballstempel"],
  },
  { name: "Score 8+ points in a game (Baseball)", types: ["Baseballspiel"] },
  {
    name: "Get a 50+ combo (Boxing Picky Puncher)",
    types: ["Boxenwtrs", "Sandsack"],
  },
  {
    name: "Win a match without knocking your opponent down (Boxing)",
    types: ["Boxenmatch"],
  },
];
bingoList[22] = [
  {
    name: "Hit the duck 3+ times (quack sound) (Tennis Runner Ducky)",
    types: ["Ente", "Tennisweiteres"],
  },
  { name: "Clear all stages (Bowling Spare Pickups)", types: [] },
  {
    name: "Get all 100 pins in 2+ stages without hitting the red button (Bowling 100-Pin Pro)",
    types: ["Dreiwurf", "Bowlingsonstiges"],
  },
  {
    name: "Get a score of -13 or better on Classic/Resort 18 Hole (Golf)",
    types: ["Golf18", "Minus9"],
  },
  {
    name: "Get a score of -4 or better in a 3 Hole game (Golf)",
    types: ["Golfweiteres"],
  },
];
bingoList[23] = [
  {
    name: "Smash Shot Slammer/Smash Shooter (Tennis Stamp)",
    types: ["Tennisstempel"],
  },
  {
    name: "Bowl a perfect game (Bowling 10-Pin Game)",
    types: ["Bowling10", "Perfekt"],
  },
  {
    name: "Get 9+ balls into a hole (Golf Pro Putter)",
    types: ["Putt", "Golfetc"],
  },
  {
    name: "Long-Range Putter/Power Putter (Golf Stamp)",
    types: ["Golfstempel"],
  },
  {
    name: "Get a score of -12 or better on Lakeside/Classic 18 Hole (Golf)",
    types: ["Golf18", "Minus9"],
  },
  { name: "Reach Level 5 (Baseball)", types: ["Baseballlevel", "Level45"] },
];
bingoList[24] = [
  {
    name: "Clear 14 stages (Bowling Tricky Pins)",
    types: ["Kunstwurf", "Bowlingsonstiges"],
  },
  { name: "Ace of Clubs/Birdie of Prey (Golf Stamp)", types: ["Golfstempel"] },
  {
    name: "Get a score of -6 or better on Lakeside 9 Hole (Golf)",
    types: ["Golf9", "Minus9"],
  },
  {
    name: "Get a score of -11 or better on Resort/Lakeside 18 Hole (Golf)",
    types: ["Golf18", "Minus9"],
  },
  {
    name: "Score 400+ points without getting hit (Boxing Fowl Dodgeball)",
    types: ["Boxenwtrs", "Beschuss"],
  },
];
bingoList[25] = [
  {
    name: "Hitting the Wall/Barrier Teaser (Bowling Stamp)",
    types: ["Bowlingstempel"],
  },
  {
    name: "Score 245+ points (Bowling Spin Control)",
    types: ["Bowlingausweichen", "Perfekt"],
  },
  {
    name: "The Albatross/Soaring with the Albatross (Golf Stamp)",
    types: ["Golfstempel"],
  },
  { name: "Get 3 Chip-Ins in a 3 Hole game (Golf)", types: ["Golfweiteres"] },
];
