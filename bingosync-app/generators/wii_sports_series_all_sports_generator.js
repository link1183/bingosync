bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  {
    name: 'Get your ball through the wall in "Target Practice" (OG Tennis Training)',
    types: ["OGT", "ten"],
  },
  { name: "Win a Best of 3 in Tennis (OG)", types: ["OGN", "ten"] },
  {
    name: 'Punch Matt 35+ times in "Throwing Punches" (OG Bowing Training)',
    types: ["OGT", "bow"],
  },
  { name: "Sure Shot (Resort Archery Stamp)", types: ["RS", "arc"] },
  {
    name: 'Score 200.0+ points on the "Beach" in Power Cruising (Resort)',
    types: ["RN", "pow"],
  },
  {
    name: "Catch 5+ Miis in Air Sports: Skydiving (Resort)",
    types: ["RN", "air"],
  },
  {
    name: 'Break 4+ 20-plates in "Plate Smasher" (Club Boxing Training)',
    types: ["CT", "box"],
  },
];
bingoList[2] = [
  { name: "Win a Best of 5 in Tennis (OG)", types: ["OGN", "ten"] },
  {
    name: 'Score 70+ points in "Dodging" (OG Boxing Training)',
    types: ["OGT", "box"],
  },
  {
    name: "Met Your Match (Resort Swordplay: Duel Stamp)",
    types: ["RS", "swo"],
  },
  { name: "Smooth Landing (Resort Wakeboarding Stamp)", types: ["RS", "wak"] },
  {
    name: "Not a Scratch (Resort Swordplay: Showdown Stamp)",
    types: ["RS", "swo"],
  },
  { name: "Balloon Animal (Resort Frisbee Dog Stamp)", types: ["RS", "fri"] },
  {
    name: "Epic Rally (Resort Table Tennis: Match Stamp)",
    types: ["RN", "tab"],
  },
  {
    name: "Get less then 100 points in Bowling: 100-Pin Game without pointless frames (Resort)",
    types: ["RN", "bow"],
  },
  {
    name: "Island Hopper (Resort Air Sports: Island Flyover Stamp)",
    types: ["RS", "air"],
  },
  { name: "Win a Two-Game-Match of Tennis (Club)", types: ["CN", "ten"] },
  { name: "The Secret Shot (Club Golf Stamp)", types: ["CS", "gol"] },
  { name: "Win a match in Boxing (Club)", types: ["CN", "box"] },
  {
    name: "Win a Single-Game-Match of Tennis in both games (OG and Club)",
    types: ["ten"],
  },
];
bingoList[3] = [
  { name: "Score 250+ points in Bowling (OG)", types: ["OGN", "bow"] },
  {
    name: "Win a match of Boxing in the first round (OG)",
    types: ["OGN", "box"],
  },
  {
    name: "Get all 10 points in a row in Swordplay: Speed Slice (Resort)",
    types: ["RN", "swo"],
  },
  {
    name: "Reach Skill Level 500+ in Wakeboarding (Resort)",
    types: ["RN", "wak"],
  },
  {
    name: "Win a Table Tennis match without giving your opponent any points (Resort)",
    types: ["RN", "tab"],
  },
  {
    name: "Hit the other Mii 30+ times in Table Tennis: Return Challenge (Resort)",
    types: ["RN", "tab"],
  },
  {
    name: "Score 170+ points in Bowling: Standard Game without any strikes (Resort)",
    types: ["RN", "bow"],
  },
  { name: "Play all 3 modes in Bowling (Resort)", types: ["RN", "bow"] },
  { name: "Ducks in a Row (Resort Canoeing Stamp)", types: ["RS", "can"] },
  { name: "Win a Three-Game-Match of Tennis (Club)", types: ["CN", "ten"] },
  {
    name: "Standstill Shooter/Straight Shooter (Club Bowling Stamp)",
    types: ["CS", "bow"],
  },
  { name: "Play all 3 modes in Bowling (Club)", types: ["CN", "bow"] },
  {
    name: "Win a Two-Game-Match of Tennis in both games (OG and Club)",
    types: ["ten"],
  },
];
bingoList[4] = [
  { name: "Win three matches in Tennis in a row (OG)", types: ["OGN", "ten"] },
  {
    name: 'Score 22+ points in "Batting Practice" (OG Baseball Training)',
    types: ["OGT", "bas"],
  },
  {
    name: "Get a score of -3 or better on any 3 Hole course (OG)",
    types: ["OGN", "gol"],
  },
  {
    name: 'Clear 13+ stages in "Picking Up Spares" (OG Bowling Training)',
    types: ["OGT", "bow"],
  },
  {
    name: 'Score 55+ points in "Throwing Punches" (OG Boxing Training)',
    types: ["OGT", "box"],
  },
  { name: "Score 2222+ points in Wakeboarding (Resort)", types: ["RN", "wak"] },
  { name: "Chip In (Resort Golf Stamp)", types: ["RS", "gol"] },
  { name: "Last Gasp (Resort Cycling Stamp)", types: ["RS", "cyc"] },
  { name: "30-Shot Rally (Club Tennis Stamp)", types: ["CS", "ten"] },
  {
    name: "The Secret Strike/Secret Striker (Club Bowling Stamp)",
    types: ["CS", "bow"],
  },
  {
    name: "Score 2400+ points in Bowling: 100-Pin Game (Club)",
    types: ["CN", "bow"],
  },
  { name: "Flag it Down (Club Golf Stamp)", types: ["CS", "gol"] },
  { name: "Hit a duck 2+ times in Golf (Club)", types: ["CN", "gol"] },
  {
    name: "Play 3+ sports in every game (OG, Resort and Club)",
    types: ["mehreresportarten"],
  },
];
bingoList[5] = [
  {
    name: 'Score 8+ Home Runs in "Hitting Home Runs" (OG Baseball Training)',
    types: ["OGT", "bas"],
  },
  {
    name: "Score 170+ points in Bowling without getting any strikes (OG)",
    types: ["OGN", "bow"],
  },
  {
    name: 'Score 28+ points in "Working the Bag" (OG Boxing Training)',
    types: ["OGT", "box"],
  },
  {
    name: "Finish a round of Basketball: 3-Point Contest with 15.0+ seconds left (Resort)",
    types: ["RN", "bas"],
  },
  {
    name: "Secret Strike (Resort Bowling: 100-Pin Game Stamp)",
    types: ["RS", "bow"],
  },
  {
    name: 'Score 800+ points in "100-Pin Pro" (Club Bowling Training)',
    types: ["CT", "bow"],
  },
  {
    name: "Score 260+ points in Bowling: 10-Pin Game (Club)",
    types: ["CN", "bow"],
  },
  {
    name: 'Catch a pineapple, pumpkin and melon in "Pitch Perfect" (Club Baseball Training)',
    types: ["CT", "bas"],
  },
  {
    name: "Win a Three-Game-Match of Tennis in both games (OG and Club)",
    types: ["ten"],
  },
  {
    name: "Win a match of Tennis/Table Tennis in every game (OG, Resort and Club)",
    types: ["ten", "tab"],
  },
];
bingoList[6] = [
  {
    name: 'Score 12+ points in "Target Practice" (OG Tennis Training)',
    types: ["OGT", "ten"],
  },
  {
    name: 'Score 555+ points in "Power Throws" (OG Bowling Training)',
    types: ["OGT", "bow"],
  },
  { name: "Score 800+ points in Frisbee Dog (Resort)", types: ["RN", "fri"] },
  { name: "Ringmaster (Resort Power Cruising Stamp)", types: ["RS", "pow"] },
  {
    name: 'Score 550+ points in "Plate Smasher" (Club Boxing Training)',
    types: ["CT", "box"],
  },
  {
    name: "Get a silver medal in any Golf Training in both games (OG and Club)",
    types: ["gol"],
  },
  {
    name: "Get a silver medal in any Boxing Training in both games (OG and Club)",
    types: ["box"],
  },
  {
    name: "Play Spin Control in all games (OG Training, Resort and Club)",
    types: ["bow"],
  },
];
bingoList[7] = [
  {
    name: 'Score 45+ points in "Swing Control" (OG Baseball Training)',
    types: ["OGT", "bas"],
  },
  {
    name: 'Clear 16+ stages in "Spin Control" (OG Bowling Training)',
    types: ["OGT", "bow"],
  },
  {
    name: 'Clear 8+ stages in "Putting" (OG Golf Training)',
    types: ["OGT", "gol"],
  },
  {
    name: "Pop all 5 balloons in Frisbee Dog, not in practise (Resort)",
    types: ["RN", "fri"],
  },
  {
    name: "Split Spare (Resort Bowling: Standard Game Stamp)",
    types: ["RS", "bow"],
  },
  {
    name: "Fairway to Go!/Fairway or Bust (Club Golf Stamp)",
    types: ["CS", "gol"],
  },
  {
    name: 'Score 1111+ points in "Pitch Perfect" (Club Baseball Training)',
    types: ["CT", "bas"],
  },
  {
    name: 'Score 525+ points in "Picky Puncher" (Club Boxing Training)',
    types: ["CT", "box"],
  },
  {
    name: "Get a silver medal in any Bowling Training in both games (OG and Club)",
    types: ["bow"],
  },
  {
    name: "Get stamps in 7+ sports in total (Resort and Club)",
    types: ["mehreresportarten"],
  },
];
bingoList[8] = [
  {
    name: 'Score 16+ points in "Timing Your Swing" (OG Tennis Training)',
    types: ["OGT", "ten"],
  },
  { name: "Reach Skill Level 600+ in Boxing (OG)", types: ["OGN", "box"] },
  {
    name: "Bonus Plumber (Resort Basketball: 3-Point Contest Stamp)",
    types: ["RS", "bas"],
  },
  {
    name: "Perfect Game (Resort Bowling: Standard Game Stamp)",
    types: ["RS", "bow"],
  },
  {
    name: 'Score 120+ points in "Ring Master" (Club Tennis Training)',
    types: ["CT", "ten"],
  },
  {
    name: 'Score 300+ points in "Fowl Dodgeball" (Club Boxing Training)',
    types: ["CT", "box"],
  },
  {
    name: "Get a silver medal in any Tennis Training in both games (OG and Club)",
    types: ["ten"],
  },
];
bingoList[9] = [
  {
    name: 'Score 55+ points in "Returning Balls" (OG Tennis Training)',
    types: ["OGT", "ten"],
  },
  { name: "Reach Skill Level 600+ in Bowling (OG)", types: ["OGN", "bow"] },
  {
    name: 'Score under 60m/197ft. in "Hitting the Green" (OG Golf Training)',
    types: ["OGT", "gol"],
  },
  {
    name: 'Score 500+ points in "Target Practice" (OG Golf Training)',
    types: ["OGT", "gol"],
  },
  {
    name: "Hot Hand (Resort Basketball: 3-Point Contest Stamp)",
    types: ["RS", "bas"],
  },
  {
    name: "Score 2400+ points in a Bowling: 100-Pin Game Game (Resort)",
    types: ["RN", "bow"],
  },
  {
    name: 'Get 8+ balls into a hole in "Pro Putter" (Club Golf Training)',
    types: ["CT", "gol"],
  },
  {
    name: "Get a silver medal in any Baseball Training in both games (OG and Club)",
    types: ["bas"],
  },
];
bingoList[10] = [
  {
    name: 'Score points with all 10 balls in "Swing Control" (OG Baseball Training)',
    types: ["OGT", "bas"],
  },
  {
    name: "Hit 5+ Home Runs in a game of Baseball (OG)",
    types: ["OGN", "bas"],
  },
  {
    name: 'Get 6+ strikes in "Power Throws" (OG Bowling Training)',
    types: ["OGT", "bow"],
  },
  { name: "On a Roll (Resort Frisbee Golf Stamp)", types: ["RS", "gol"] },
  {
    name: "Win a Basketball: Pick Up Game match (Resort)",
    types: ["RN", "bas"],
  },
  { name: "King of Clubs (Resort Golf Stamp)", types: ["RS", "gol"] },
  {
    name: "English Major (Resort Bowling: Spin Control Stamp)",
    types: ["RS", "bow"],
  },
  {
    name: 'Score 150+ points in "Tennis Moles" (Club Tennis Training)',
    types: ["CT", "ten"],
  },
  {
    name: 'Clear 10+ stages without any mistakes in "Tricky Pins" (Club Bowling Training)',
    types: ["CT", "bow"],
  },
  {
    name: 'Score 51.0m/167.3ft.+ in "Pro Putter" (Club Golf Training)',
    types: ["CT", "gol"],
  },
  {
    name: 'Score 450.0+ points in "Driver Challenge" (Club Golf Training)',
    types: ["CT", "gol"],
  },
  {
    name: "Score -2 or better on Resort A, B or C in both games (Resort and Club)",
    types: ["gol"],
  },
  {
    name: "Get an Eagle in Golf in every game (OG, Resort and Club)",
    types: ["gol"],
  },
];
bingoList[11] = [
  { name: "Reach Skill Level 200+ in Baseball (OG)", types: ["OGN", "bas"] },
  { name: "Master Carver (Resort Wakeboarding Stamp)", types: ["RS", "wak"] },
  { name: "A for Effort (Resort Frisbee Dog Stamp)", types: ["RS", "fri"] },
  {
    name: "Triple Dip (Resort Basketball: Pick Up Game Stamp)",
    types: ["RS", "bas"],
  },
  {
    name: "200-pointer (Resort Table Tennis: Return Challenge Stamp)",
    types: ["RS", "tab"],
  },
  {
    name: "Pin Dropper (Resort Bowling: Spin Control Stamp)",
    types: ["RS", "bow"],
  },
  { name: "First of Many (Resort Cycling Stamp)", types: ["RS", "cyc"] },
  {
    name: 'Hit 5+ big moles in "Tennis Moles" (Club Tennis Training)',
    types: ["CT", "ten"],
  },
  {
    name: 'Score 145+ points in "Chip-In Bingo" (Club Golf Training)',
    types: ["CT", "gol"],
  },
  {
    name: "Get a score of -2 or better on 2+ Classic 3 Hole courses in Golf (Club)",
    types: ["CN", "gol"],
  },
  {
    name: 'Score 1100+ points in "Wall Breaker" (Club Baseball Training)',
    types: ["CT", "bas"],
  },
  {
    name: "Reach Skill Level 200+ in 3+ sports in both games (OG and Resort)",
    types: ["mehreresportarten"],
  },
  {
    name: "Get a gold medal in any Bowling Training in both games (OG and Club)",
    types: ["bow"],
  },
  {
    name: "Get 6+ stamps in Bowling in total, but 1+ in each game (Resort and Club)",
    types: ["bow"],
  },
  {
    name: "Get 12+ stamps in total, but 1+ per game (Resort and Club)",
    types: ["mehreresportarten"],
  },
];
bingoList[12] = [
  { name: "Get 3+ Chip-Ins in a game of Golf (OG)", types: ["OGN", "gol"] },
  { name: 'Receive your "Wii Fitness Age" (OG)', types: ["OGN"] },
  {
    name: "One-Hit Wonder (Resort Swordplay: Duel Stamp)",
    types: ["RS", "swo"],
  },
  {
    name: "Finish 3+ different stages in Swordplay: Showdown (Resort)",
    types: ["RN", "swo"],
  },
  {
    name: "Finish any 9 Hole course under par in Frisbee Golf (Resort)",
    types: ["RN", "fri"],
  },
  {
    name: "Get a Hole in One, Eagle and Birdie in Frisbee Golf (Resort)",
    types: ["RN", "fri"],
  },
  {
    name: "Get a score of -3 or better on 2 different 3 Hole courses in Golf (Resort)",
    types: ["RN", "gol"],
  },
  {
    name: 'Get the ball through 10 red rings in "Ring Master" (Club Tennis Training)',
    types: ["CT", "ten"],
  },
  { name: "Forehand Master (Club Tennis Stamp)", types: ["CS", "ten"] },
  {
    name: 'Score 200+ points in "Tricky Pins" (Club Bowling Training)',
    types: ["CT", "bow"],
  },
  {
    name: "Get a score of -2 or better on 2+ Resort 3 Hole courses in Golf (Club)",
    types: ["CN", "gol"],
  },
  {
    name: 'Get 10+ Home Runs in a row in "Homer Hero" (Club Baseball Training)',
    types: ["CT", "bas"],
  },
  {
    name: "Get a gold medal in any Tennis Training in both games (OG and Club)",
    types: ["ten"],
  },
  {
    name: "Get a gold medal in any Golf Training in both games (OG and Club)",
    types: ["gol"],
  },
  {
    name: "Get 8+ bronze+ medals in total, but 1+ per game (OG and Club)",
    types: ["mehreretraining"],
  },
  {
    name: "Get a Chip-In in Golf in every game (OG, Resort and Club)",
    types: ["gol"],
  },
];
bingoList[13] = [
  {
    name: "Win a game of Baseball with the Mercy rule (OG)",
    types: ["OGN", "bas"],
  },
  {
    name: "Slicing Machine (Resort Swordplay: Speed Slice Stamp)",
    types: ["RS", "swo"],
  },
  {
    name: "Score 230+ points in a Bowling: Spin Control (Resort)",
    types: ["RN", "bow"],
  },
  {
    name: 'Score 225m/110yd. in "Runner Ducky" (Club Tennis Training)',
    types: ["CT", "ten"],
  },
  {
    name: 'Get all 100 pins 2+ times without the red button in "100-Pin Pro" (Club Bowling Training)',
    types: ["CT", "bow"],
  },
  {
    name: "Get a score of -2 or better on 2+ Lakeside 3 Hole courses in Golf (Club)",
    types: ["CN", "gol"],
  },
  {
    name: 'Destroy 6+ pink walls in "Wall Breaker" (Club Baseball Training)',
    types: ["CT", "bas"],
  },
  {
    name: "Play 100-Pin Bowling and Spin Control in both games (Resort and Club)",
    types: ["bow"],
  },
];
bingoList[14] = [
  {
    name: "Double Time (Resort Swordplay: Speed Slice Stamp)",
    types: ["RS", "swo"],
  },
  { name: "Reach Pro Class in Archery (Resort)", types: ["RN", "arc"] },
  {
    name: "Get a score of -7 or better on any 9 Hole course in Golf (Resort)",
    types: ["RN", "gol"],
  },
  {
    name: "Pop 200+ balloons in Air Sports: Island Flyover (Resort)",
    types: ["RN", "air"],
  },
  {
    name: "King of Clubs/Bridie Watcher (Club Golf Stamp)",
    types: ["CS", "air"],
  },
  {
    name: "Win a game of Baseball with the Mercy rule (Club)",
    types: ["CN", "bas"],
  },
  { name: "Reach Level 3 in Boxing (Club)", types: ["CN", "box"] },
  {
    name: "Reach Skill Level 400+ in 2+ sports in both games (OG and Resort)",
    types: ["mehreresportarten"],
  },
  {
    name: "Get a gold medal in any Baseball in both games (OG and Club)",
    types: ["bas"],
  },
  {
    name: "Score 250+ points in every Standard Bowling (OG, Resort and Club)",
    types: ["bow"],
  },
];
bingoList[15] = [
  {
    name: "Perfectly Matched (Resort Table Tennis: Match Stamp)",
    types: ["RS", "tab"],
  },
  {
    name: "Reach the goal 3+ times in Canoeing (Resort)",
    types: ["RN", "can"],
  },
  {
    name: "Fly through 45+ i-points in Air Sports: Island Flyover (Resort)",
    types: ["RN", "air"],
  },
  { name: "Perfect Game (Club Bowling Stamp)", types: ["CS", "bow"] },
  {
    name: "Get a score of -7 or better on Classic 9 Hole in Golf (Club)",
    types: ["CN", "gol"],
  },
  {
    name: 'Score 2600m/8530ft.+ in "Homer Hero" (Club Baseball Training)',
    types: ["CT", "bas"],
  },
  { name: "Win a match in Boxing in both games (OG and Club)", types: ["box"] },
  {
    name: "Play Classic A in Golf in all games (OG, Resort and Club)",
    types: ["gol"],
  },
  {
    name: "Finish Beginner (OG), Resort B (Resort) and Lakeside C (Club) in Golf under par",
    types: ["gol"],
  },
];
bingoList[16] = [
  { name: "Get a score of -5 or better on 9 Hole (OG)", types: ["OGN", "gol"] },
  {
    name: "Score 90+ points in every difficulty in Archery (Resort)",
    types: ["RN", "arc"],
  },
  {
    name: "Reach 100+ points 3+ times in Table Tennis: Return Challenge (Resort)",
    types: ["RN", "tab"],
  },
  {
    name: "Finish a 18 Hole game in Golf under par (Resort)",
    types: ["RN", "gol"],
  },
  {
    name: 'Score 1800+ points in "Spare Pickups" (Club Bowling Training)',
    types: ["CT", "bow"],
  },
  {
    name: "Get a score of -6 or better on Resort 9 Hole in Golf (Club)",
    types: ["CN", "gol"],
  },
  {
    name: 'Get a 40+ combo in "Picky Puncher" (Club Boxing Training)',
    types: ["CT", "box"],
  },
  {
    name: 'Score 400+ points without getting hit in "Fowl Dodgeball" (Club Boxing Training)',
    types: ["CT", "box"],
  },
  {
    name: "Play 2+ 3 Hole courses in Golf in both games (OG and Resort)",
    types: ["gol"],
  },
  {
    name: "Get a gold medal in any Boxing in both games (OG and Club)",
    types: ["box"],
  },
  {
    name: "Get 6+ silver+ medals in total, but 1+ per game (OG and Club)",
    types: ["mehreretraining"],
  },
  {
    name: "Play all 7 Bowling variation (OG, Resort and Club)",
    types: ["bow"],
  },
  {
    name: "Score -2 or better on any 3 Hole course in every game in Golf (OG, Resort and Club)",
    types: ["gol"],
  },
  {
    name: "Play Classic B in Golf in all games (OG, Resort and Club)",
    types: ["gol"],
  },
];
bingoList[17] = [
  { name: "Reach Pro Status in Tennis (OG)", types: ["OGN", "ten"] },
  {
    name: "Finish all 3 Hole courses in Golf under par (OG)",
    types: ["OGN", "gol"],
  },
  {
    name: "Reach Pro Class in Table Tennis: Match (Resort)",
    types: ["RN", "tab"],
  },
  { name: "Finish 3+ 1-Stage Race in Cycling (Resort)", types: ["RN", "cyc"] },
  { name: "Finish any 3-Stage Race in Cycling (Resort)", types: ["RN", "cyc"] },
  { name: "Reach Level 4 in Tennis (Club)", types: ["CN", "ten"] },
  {
    name: 'Score 600+ points without using any stars in "Spare Pickups" (Club Bowling Training)',
    types: ["CT", "bow"],
  },
  {
    name: "Score 225+ points in Bowling: Spin Control (Club)",
    types: ["CN", "bow"],
  },
  {
    name: "Score 1001+ points in Target Training games combined (OG and Club)",
    types: ["gol"],
  },
  {
    name: "Get 16+ stamps in total, but 1+ per game (Resort and Club)",
    types: ["mehreresportarten"],
  },
  {
    name: "Play Classic C in Golf in all games (OG, Resort and Club)",
    types: ["gol"],
  },
];
bingoList[18] = [
  {
    name: "Recycler (Resort Table Tennis: Return Challenge Stamp)",
    types: ["RS", "tab"],
  },
  {
    name: "Run Them Ragged/3K Runner (Club Tennis Stamp)",
    types: ["CT", "ten"],
  },
  { name: "Reach Level 4 in Bowling (Club)", types: ["CN", "bow"] },
  {
    name: 'Get a Bingo in "Chip-In Bingo" (Club Golf Training)',
    types: ["CT", "gol"],
  },
  {
    name: "Get a score of -4 or better on Lakeside 9 Hole in Golf (Club)",
    types: ["CT", "gol"],
  },
  {
    name: "Reach Skill Level 1000+ in any sport in both games (OG and Resort)",
    types: ["mehreresportarten"],
  },
  {
    name: "Score 2500+ points in 100-Pin Bowling in both games (Resort and Club)",
    types: ["bow"],
  },
];
bingoList[19] = [
  {
    name: "Win a game of Baseball without the Mercy rule (OG)",
    types: ["OGN", "bas"],
  },
  { name: "Reach Pro Status in Bowling (OG)", types: ["OGN", "bow"] },
  {
    name: "Reach Pro Class in Bowling: Standard Game (Resort)",
    types: ["RN", "bow"],
  },
  {
    name: 'Score 50.0+ points without using the wall  in "Driver Challenge" (Club Golf Training)',
    types: ["CT", "gol"],
  },
  {
    name: "Win a game of Baseball without the Mercy rule (Club)",
    types: ["CN", "bas"],
  },
  {
    name: "Finish Resort 9 Hole under par in both games (Resort and Club)",
    types: ["gol"],
  },
  { name: "Get 6+ stamps in Golf in total (Resort and Club)", types: ["gol"] },
];
bingoList[20] = [
  {
    name: 'Score 500+ points without the Driver in "Target Practice" (OG Golf Training)',
    types: ["OGT", "gol"],
  },
  {
    name: "Reach Skill Level 750+ in Swordplay: Duel (Resort)",
    types: ["RN", "swo"],
  },
  {
    name: 'Hit 2+ different "secret objects" in Archery (Resort)',
    types: ["RN", "arc"],
  },
  { name: "Beginner License (Resort Canoeing Stamp)", types: ["RS", "can"] },
  {
    name: 'Collect 5+ clocks  in "Runner Ducky" (Club Tennis Training)',
    types: ["CT", "ten"],
  },
  {
    name: "Get 4+ gold+ medals in total, but 1+ per game (OG and Club)",
    types: ["mehreretraining"],
  },
];
bingoList[21] = [
  { name: "Play a perfect game in Bowling (OG)", types: ["OGN", "bow"] },
  {
    name: "Reach Pro Class in Basketball: 3-Point Contest (Resort)",
    types: ["RN", "bas"],
  },
  {
    name: "Finish all courses in Power Cruising (Resort)",
    types: ["RN", "pow"],
  },
  {
    name: "Reach Pro Class in Bowling: 100-Pin Game (Resort)",
    types: ["RN", "bow"],
  },
  {
    name: "Win a game of Baseball with the Mercy rule in both games (OG and Club)",
    types: ["bas"],
  },
  {
    name: "Score 230+ points in Spin Control in both games (Resort and Club)",
    types: ["bow"],
  },
];
bingoList[22] = [
  {
    name: "Reach Pro Class in Swordplay: Speed Slice (Resort)",
    types: ["RN", "swo"],
  },
  {
    name: "Buzzer Beater (Resort Basketball: Pick Up Game Stamp)",
    types: ["RS", "bas"],
  },
  { name: "Snap any red tape in Canoeing (Resort)", types: ["RN", "can"] },
  {
    name: "Long-Range Putter/Power Putter (Club Golf Stamp)",
    types: ["CS", "gol"],
  },
  {
    name: "Score 630+ points total in Spin Control in 3 games in a row (Resort)",
    types: ["RN", "bow"],
  },
];
bingoList[23] = [
  {
    name: "Leisure Cruiser (Resort Power Cruising Stamp)",
    types: ["RS", "pow"],
  },
  { name: "Reach Level 4 in Golf (Club)", types: ["CN", "gol"] },
  {
    name: "Get a score of -11 or better on any 18 Hole course in Golf (Club)",
    types: ["CN", "gol"],
  },
  {
    name: "Reach Pro Class in Bowling: Spin Control (Resort)",
    types: ["RN", "bow"],
  },
  { name: "Play All Sports (OG)", types: ["OGN", "AS"] },
];
bingoList[24] = [
  {
    name: "Win a game of Baseball without the Mercy rule in both games (OG and Club)",
    types: ["bas"],
  },
  {
    name: "Get 2+ platinum medals in total, but 1+ per game (OG and Club)",
    types: ["mehreretraining"],
  },
  { name: "Get a Hole in One in Golf (OG, Resort or Club)", types: ["gol"] },
  {
    name: "Finish Classic 9 Hole under par in all games (OG, Resort and Club)",
    types: ["gol"],
  },
  {
    name: "Reach Skill Level 1000+ (OG and Resort) and Level 5 (Club) in any Bowling variations",
    types: ["bow"],
  },
  { name: "Play All Sports (Club)", types: ["CN", "AS"] },
];
bingoList[25] = [
  {
    name: "Straight and Narrow (Resort Frisbee Golf Stamp)",
    types: ["RS", "fri"],
  },
  {
    name: "Play all unique courses in Golf (OG, Resort and/or Club)",
    types: ["gol"],
  },
  {
    name: "Get a score of -3 or better on 3+ 3 Hole courses in Golf and Frisbee Golf (Resort)",
    types: ["RN", "gol", "fri"],
  },
  { name: "Play All Sports (Resort)", types: ["RN", "AS"] },
];
