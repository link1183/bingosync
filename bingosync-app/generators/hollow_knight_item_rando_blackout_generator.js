bingoGenerator = require("./generators/generator_bases/synerGen.js");

var bingoList = {
  bingoTypes: {
    Tiebreaker: { Max: 1 },
  },
  maxScore: 9.5,

  //Sorted alphabetically and grouped
  //Bosses. Dream versions grouped instead of alphabetical

  "2DreamBosses": {
    Desc: "Defeat two Dream Bosses",
    Excludes: ["LostKin", "FChamp", "SoulTyrant"],
  },

  BVessel: {
    Desc: "Defeat Broken Vessel",
    Excludes: ["LostKin"],
  },

  LostKin: {
    Desc: "Defeat Lost Kin",
    Excludes: ["BVessel"],
  },

  CG1: {
    Desc: "Defeat Crystal Guardian",
    Excludes: ["CG2"],
  },

  CG2: {
    Desc: "Defeat Enraged Guardian",
    Excludes: ["CG1"],
  },

  Collector: {
    Desc: "Defeat Collector",
    Excludes: ["KEGrubs", "LoveKey", "Vitruvian", "VisitTower"],
    Score: 1.3,
  },

  DDefender: {
    Desc: "Defeat Dung Defender",
    Excludes: ["WhiteDefender"],
  },

  WhiteDefender: {
    Desc: "Defeat White Defender",
    Types: ["Tiebreaker"],
    Excludes: ["DDefender", "MrMushroom1"],
  },

  FChamp: {
    Desc: "Defeat Failed Champion",
    Excludes: ["Maggots", "FKnight_BMawlek"],
  },

  FKnight_BMawlek: {
    Desc: "Defeat False Knight and Brooding Mawlek",
    Excludes: ["Maggots", "FChamp"],
  },

  Flukemarm: {
    Desc: "Defeat Flukemarm",
  },

  /*
  "GPZote": {
    "Desc": "Defeat Grey Prince Zote",
    "Types": ["Tiebreaker"],
    "Excludes": ["ColoZote", "DeepnestZote", "Colo1"]
  },
 */

  HiveKnight: {
    Desc: "Defeat Hive Knight",
    Excludes: ["HiveMask"],
  },

  Hornet2: {
    Desc: "Defeat Hornet Sentinel",
    Excludes: ["VisitQueensShell"],
  },

  MLords: {
    Desc: "Defeat Mantis Lords",
  },

  Nosk: {
    Desc: "Defeat Nosk",
    Excludes: ["PaleOreCheck"],
  },

  /*
  "OroMato": {
    "Desc": "Defeat Oro and Mato",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },
  */

  PaleLurker: {
    Desc: "Defeat Pale Lurker",
  },

  /*
  "PaintmasterSheo": {
    "Desc": "Defeat Paintmaster Sheo",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

  "PVessel": {
    "Desc": "Defeat Pure Vessel",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

*/

  Radiant: {
    Desc: "Defeat any one Radiant Boss",
    Excludes: ["Godhome", "Ordeal20"],
  },

  SoulMaster: {
    Desc: "Defeat Soul Master",
    Excludes: ["SoulTyrant", "LoreSanctum"],
  },

  SoulTyrant: {
    Desc: "Defeat Soul Tyrant",
    Excludes: ["SoulMaster", "LoreSanctum"],
  },

  TLord: {
    Desc: "Defeat Traitor Lord",
    Excludes: ["WhiteLady", "ClothQuest"],
  },

  TMGrimm: {
    Desc: "Defeat Troupe Master Grimm",
    Excludes: ["NKGrimm", "CarefreeMelody", "TMGrimm", "Brumm"],
  },

  NKGrimm: {
    Desc: "Defeat Nightmare King Grimm",
    Types: ["Tiebreaker"],
    Excludes: ["CarefreeMelody", "TMGrimm", "Brumm"],
  },

  Uumuu: {
    Desc: "Defeat Uumuu",
    Excludes: ["Lumafly", "LoreArchives"],
  },

  WK: {
    Desc: "Defeat Watcher Knights",
    Excludes: ["Telescope", "LoreCity"],
  },

  VK_MMC: {
    Desc: "Defeat Vengefly King and Massive Moss Charger",
  },

  //Dream Warriors

  "2DreamWarriors": {
    Desc: "Defeat two dream warriors",
  },

  Galien: {
    Desc: "Defeat Galien",
  },

  Gorb: {
    Desc: "Defeat Gorb",
    Excludes: ["LoreCliffs"],
  },

  Hu: {
    Desc: "Defeat Elder Hu",
  },

  Marmu: {
    Desc: "Defeat Marmu",
  },

  Markoth: {
    Desc: "Defeat Markoth",
  },

  NoEyes: {
    Desc: "Defeat No Eyes",
  },

  Xero: {
    Desc: "Defeat Xero",
  },

  //Enemies

  "2Warriors": {
    Desc: "Kill two Soul Warriors",
    Excludes: ["SSoulCheck"],
  },

  "3Sentries": {
    Desc: "Kill three different Great Husk Sentries",
    Excludes: ["GHusk"],
  },

  /*
  "Aluba": {
    "Desc": "Kill an Aluba"
  },
  */

  Aluba2: {
    Desc: "Kill two different Alubas",
  },

  Colo1: {
    Desc: "Complete Colosseum 1",
    Excludes: ["ColoZote", "GPZote"],
  },

  /*
  "Colo3": {
    "Desc": "Colosseum 3",
    "Types": ["Tiebreaker"]
  },

*/

  ColoZote: {
    Desc: "Defeat Zote in the Colosseum",
    Excludes: ["Colo1", "GPZote"],
  },

  CrystalCrawler: {
    Desc: "Kill a Crystal Crawler",
  },

  Devout: {
    Desc: "Kill 6 different Stalking Devouts",
  },

  /*
  "Durandoo": {
    "Desc": "Kill a Durandoo",
    "Excludes": ["Gulka"]
  },
  */

  GHopper: {
    Desc: "Kill a Great Hopper",
    Excludes: ["HopperHell", "420Rock", "AncientNailsmith"],
  },

  GHusk: {
    Desc: "Kill Gorgeous Husk",
    Excludes: ["3Sentries"],
  },

  /*
  "Gulka": {
    "Desc": "Kill a Gulka with its own projectile",
    "Excludes": ["Durandoo"]
  },
  */

  Kingsmould: {
    Desc: "Kill a Kingsmould",
    Excludes: ["PoP"],
    Score: 0.88,
  },

  Lightseed: {
    Desc: "Kill a Lightseed",
  },

  Maggots: {
    //No more doEsFalSEkNiGhtCoUNtAsaMaGgOT
    Desc: "Kill the two mourning Maggots",
    Excludes: ["FChamp", "FKnight_BMawlek"],
  },

  Marissa: {
    Desc: "Dream Nail Marissa",
    Excludes: ["Springs", "2Keys"],
  },

  Millibelle: {
    Desc: "Slash Millibelle in Pleasure House",
    Excludes: ["Bank"],
  },

  Mimics: {
    Desc: "Check/Kill 4 Mimics",
    Excludes: ["DirtmouthElevator"],
  },

  Myla: {
    Desc: "Kill Myla",
    Score: 1.18,
  },

  //Items. Different types (Dreamers/Skills/Keys/etc) grouped together

  Herrah: {
    Desc: "Obtain Herrah",
    Score: 1.3,
  },

  Lurien: {
    Desc: "Obtain Lurien",
    Score: 1.3,
  },

  Monomon: {
    Desc: "Obtain Monomon",
    Score: 1.3,
  },

  DeepStag: {
    Desc: "Ride the stag to Distant Village",
    Excludes: ["Midwife", "VisitDistantHive"],
    Score: 1.3,
  },

  GardenStag: {
    Desc: "Ride the stag to Queen's Gardens",
    Excludes: ["VisitQueensShell"],
    Score: 1.3,
  },

  HiddenStag: {
    Desc: "Ride the stag to Hidden Station",
    Excludes: ["WPShadeSkip"],
    Score: 1.3,
  },

  KingStag: {
    Desc: "Ride the stag to King's Station",
    Score: 1.3,
  },

  QueensStag: {
    Desc: "Ride the stag to Queen's Station",
    Score: 1.3,
  },

  StagNestStag: {
    Desc: "Ride the stag to Stag Nest",
    Excludes: ["StagVessel"],
    Score: 1.3,
  },

  /*
  "5Charms": {
    "Desc": "Have 5 or more Charms",
    "Score": 0.20
  },
  */

  "5CharmsEquipped": {
    Desc: "Equip 5 Charms at the same time",
  },

  CarefreeMelody: {
    Desc: "Obtain Carefree Melody",
    Excludes: ["NKGrimm", "Brumm", "TMGrimm"],
  },

  CompassSwarm: {
    Desc: "Obtain Wayward Compass or Gathering Swarm",
    Score: 1.06,
  },

  DWielderShield: {
    Desc: "Obtain Dream Wielder or Dreamshield",
    Score: 1.06,
  },

  FCharms: {
    Desc: "Obtain all three Fragile charms",
    Score: 1.0,
  },

  FlukenestFury: {
    Desc: "Obtain Flukenest or Fury of the Fallen",
    Score: 1.06,
  },

  GrubsongElegy: {
    Desc: "Obtain Grubsong or Grubberfly's Elegy",
    Score: 1.06,
  },

  GWombWeavers: {
    Desc: "Obtain Glowing Womb or Weaversong",
    Score: 1.06,
  },

  HeavyBlowSteady: {
    Desc: "Obtain Heavy Blow or Steady Body",
    Score: 1.06,
  },

  HivebloodShadow: {
    Desc: "Obtain Hiveblood or Sharp Shadow",
    Score: 1.06,
  },

  LifebloodCharms: {
    Desc: "Obtain two Lifeblood charms",
    Score: 1.0,
  },

  Longnail: {
    Desc: "Obtain Longnail or Mark of Pride",
    Score: 1.06,
  },

  QSlashGlory: {
    Desc: "Obtain Quick Slash or Nailmaster's Glory",
    Score: 1.06,
  },

  QuickDeepFocus: {
    Desc: "Obtain Quick Focus or Deep Focus",
    Score: 1.06,
  },

  ShamanStoneTwister: {
    Desc: "Obtain Shaman Stone or Spell Twister",
    Score: 1.06,
  },

  SprintmasterDashmaster: {
    Desc: "Obtain Sprintmaster or Dashmaster",
    Score: 1.06,
  },

  SoulTools: {
    Desc: "Obtain Soul Eater or Soul Catcher",
    Score: 1.06,
  },

  ThornsStalwart: {
    Desc: "Obtain Thorns of Agony or Stalwart Shell",
    Score: 1.06,
  },

  UnnShell: {
    Desc: "Obtain Shape of Unn or Baldur Shell",
    Score: 1.06,
  },

  LoveKey: {
    Desc: "Obtain the Love Key",
    Excludes: ["KEGrubs", "Collector", "Vitruvian"],
    Score: 1.3,
  },

  DDark: {
    Desc: "Obtain Descending Dark",
    Score: 1.03,
  },

  DNail: {
    Desc: "Obtain Dream Nail",
    Score: 0.8,
  },

  DGate: {
    Desc: "Obtain Dream Gate",
    Score: 0.95,
  },

  NailArts: {
    Desc: "Obtain 2 Nail Arts",
    Score: 1.0,
  },

  Shriek: {
    Desc: "Obtain Abyss Shriek",
    Score: 1.03,
  },

  SSoul: {
    Desc: "Obtain Shade Soul",
    Score: 1.03,
  },

  Tear: {
    Desc: "Obtain Isma's Tear",
    Excludes: ["UnnSkip", "LoveKeySkip"],
    Score: 1.18,
  },

  VSpirit: {
    Desc: "Obtain Vengeful Spirit",
    Score: 0.96,
  },

  Wraiths: {
    Desc: "Obtain Howling Wraiths",
    Score: 0.96,
  },

  "15Grub": {
    Desc: "Obtain 20 grubs",
    Excludes: ["KEGrubs", "35Grub"],
  },

  /*
  "35Grub": {
    "Desc": "Obtain 35 grubs",
    "Excludes": ["KEGrubs", "15Grub", "DeepnestGrubs", "BasinGrubs", "CrossroadsCanyonGrubs", "PeaksGrub", "QueenGrub", "WaterGrub", "FunGreenGrub"],
    "Types": ["Tiebreaker"]
  },
*/

  "2Ore": {
    Desc: "Obtain 3 Pale Ore",
    Excludes: ["Nail3", "Nail2"],
    Score: 0.8,
  },

  "2Keys": {
    Desc: "Use 2 Simple Keys",
    Excludes: ["Jiji", "Marissa"],
    Score: 0.89,
  },

  "3Maps": {
    Desc: "Have 5 different maps not counting Dirtmouth or Hive",
    Excludes: ["Cornifer3"],
  },

  CollectorMap: {
    Desc: "Obtain Collector's Map",
    Score: 1.3,
  },

  Egg: {
    Desc: "Obtain 1 Arcane Egg",
    Score: 0.73,
  },

  Godtuner: {
    Desc: "Obtain Godtuner",
    Score: 1.3,
  },

  Idols: {
    Desc: "Obtain 3 King's Idols",
    Score: 0.66,
  },

  Journals: {
    Desc: "Obtain 6 Wanderer's Journals",
    Score: 0.51,
  },

  Lantern: {
    Desc: "Obtain Lumafly Lantern",
    Excludes: ["JoniDarkRoom"],
    Score: 1.3,
  },

  Mask1: {
    Desc: "Obtain 2 extra masks",
    Score: 0.43,
  },

  Notches: {
    Desc: "Have 6 Charm Notches total",
    Score: 0.41,
  },

  /*
  "RancidEggs": {
    "Desc": "Obtain 4 Rancid Eggs",
    "Score": 0.36
  },
  */

  Seals: {
    Desc: "Obtain 8 Hallownest Seals",
    Score: 0.44,
  },

  SoulVessel: {
    Desc: "Obtain 1 extra soul vessel",
    Score: 0.61,
  },

  TramPass: {
    Desc: "Obtain Tram Pass",
    Excludes: ["PinsAll", "KEGrubs"],
    Score: 1.3,
  },

  WorldSense: {
    Desc: "Obtain World Sense",
    Score: 1.3,
  },

  //Checks (Grubs are grouped)

  /*
  "Cornifer3": {
    "Desc": "Interact with 3 Cornifer locations",
    "Excludes": ["3Maps"]

  },
  */

  CHeartCheck: {
    Desc: "Check Crystal Heart",
    Excludes: ["CPeaksChest"],
  },

  CPeaksChest: {
    Desc: "Open the Crystal Peak chest",
    Excludes: ["CHeartCheck"],
  },

  DeepFocusCheck: {
    Desc: "Check Deep Focus",
  },

  Dreamers: {
    Desc: "Get 2 Dreamer's checks (Requires Dream Nail)",
  },

  GreenpathRoot: {
    Desc: "Complete the Greenpath Root",
  },

  HallownestCrown: {
    Desc: "Dream Nail the Radiance statue on Hallownest's Crown",
  },

  Fountain: {
    Desc: "Buy the Basin fountain check",
    Excludes: ["3000", "4000", "5000"],
  },

  FungalCoreElder: {
    Desc: "Bow to the Fungal Core Elder",
  },

  GWombSkip: {
    Desc: "Check Glowing Womb",
  },

  HiveMask: {
    Desc: "Check the Hive Mask Shard",
    Excludes: ["HiveKnight", "KEGrubs"],
  },

  JoniDarkRoom: {
    Desc: "Check Joni's Blessing",
    Excludes: ["Lantern"],
  },

  KEdgeRoot: {
    Desc: "Complete the Kingdom's Edge Root",
    Excludes: ["Bardoon"],
  },

  LoveKeySkip: {
    Desc: "Check Love Key",
    Excludes: ["Tear"],
  },

  Nailmasters: {
    Desc: "Check 2 Nailmasters",
  },

  PaleOreCheck: {
    Desc: "Get two Pale Ore checks (Grubs/Essence excluded)",
    Excludes: ["Nosk"],
  },

  SanctuarySkip: {
    Desc: "Check the journal below Stone Sanctuary",
  },

  Sheo: {
    Desc: "Check Sheo",
  },

  Shops: {
    Desc: "Visit all 4 shops (Sly, Iselda, Salubra and Leg Eater)",
    Excludes: ["Cloth"],
  },

  SpellLocations: {
    Desc: "Check three different spell locations",
    Excludes: ["HarderVisitMounds"],
  },

  StagVessel: {
    Desc: "Check the Stag Nest vessel fragment",
    Excludes: ["StagNestStag"],
  },

  SSoulCheck: {
    Desc: "Check Shade Soul",
    Excludes: ["2Warriors"],
    Score: 1.3,
  },

  ShriekCheck: {
    Desc: "Get the Abyss Shriek check",
  },

  TearCheck: {
    Desc: "Check Isma's Tear",
    Excludes: ["WaterwaysArenas"],
  },

  Trees4: {
    Desc: "Complete 4 full whispering roots",
  },

  UnnSkip: {
    Desc: "Check Shape of Unn",
    Excludes: ["Tear"],
  },

  VillageJournal: {
    Desc: "Check the journal above Mantis Village",
    Excludes: ["LoreVillage"],
  },

  VoidHeart: {
    Desc: "Get the Void Heart check",
  },

  BasinGrubs: {
    Desc: "Check/Free all grubs in Ancient Basin (2)",
  },

  NotAwfulKEGrubs: {
    Desc: "Check/Free all grubs in Kingdom's Edge (2) and in Hive (2)",
  },

  CoTGrubs: {
    Desc: "Check/Free all grubs in City of Tears (5)",
  },

  CrossroadsCanyonGrubs: {
    Desc: "Check/Free all grubs in Crossroads (5) and in Fog Canyon (1)",
  },

  DeepnestGrubs: {
    Desc: "Check/Free all grubs in Deepnest (5)",
  },

  FunGreenGrub: {
    Desc: "Check/Free all grubs in Greenpath (4) and in Fungal Wastes (2)",
  },

  /*

  "KEGrubs": {
    "Desc": "Check/Free all grubs in Kingdom's Edge (7)",
    "Excludes": ["3Floors", "15Grub", "TramPass", "HiveMask", "Collector", "LoveKey"],
    "Types": ["Tiebreaker"]
  },

*/

  PeaksGrub: {
    Desc: "Check/Free all grubs in Crystal Peak (7)",
  },

  QueenGrub: {
    Desc: "Check/Free all grubs in Queen's Gardens (3)",
  },

  WaterGrub: {
    Desc: "Check/Free all grubs in Waterways (3)",
  },

  //Misc.
  /*
  "3Floors": {
    "Desc": "Break 3 floors using Dive",
    "Excludes": ["KEGrubs"]

  },
  */

  "420Rock": {
    Desc: "Break the 420 geo rock in Kingdom's Edge",
    Excludes: ["AncientNailsmith", "GHopper", "HopperHell"],
  },

  AncientNailsmith: {
    Desc: "Dream Nail the Ancient Nailsmith in Kingdom's Edge (Quick Slash corpse)",
    Excludes: ["420Rock", "GHopper", "HopperHell"],
  },

  "800Essence": {
    Desc: "Collect 800 essence",
    Excludes: ["Seer"],
  },

  /*
  "3000": {
    "Desc": "Spend 3000 geo",
    "Excludes": ["Fountain", "4000"]
  },
  */

  4000: {
    Desc: "Spend 4000 geo",
    Excludes: ["Fountain", "3000", "5000", "SlyKey", "Salubra"],
  },

  5000: {
    Desc: "Spend 6000 geo",
    Excludes: ["Fountain", "3000", "4000", "SlyKey", "Salubra"],
  },

  Bank: {
    Desc: "Have 1500 geo in the bank",
    Excludes: ["Millibelle"],
  },

  Bardoon: {
    Desc: "Talk to Bardoon",
    Excludes: ["KEdgeRoot"],
  },

  BrettaSly: {
    Desc: "Rescue Bretta and Sly",
  },

  Brumm: {
    Desc: "Get Brumm's flame",
    Excludes: ["CarefreeMelody", "TMGrimm", "NKGrimm"],
  },

  /*
  "Cloth": {
    "Desc": "Talk to Cloth",
    "Excludes": ["Shops"]
  },
  */

  ClothQuest: {
    Desc: "Complete either ending of the Cloth questline",
    Excludes: ["TLord", "WhiteLady"],
  },

  CotQuirrel: {
    Desc: "Sit on the Quirrel bench in City of Tears",
  },

  CrestElevator: {
    Desc: "Use City Crest and ride both large elevators in City of Tears",
    Score: 1.3,
  },

  DamnItGrimmchild: {
    Desc: "Kill 3 Oomas using a minion charm",
    Score: 0.87,
  },

  DeepnestZote: {
    Desc: "Rescue Zote in Deepnest",
    Excludes: ["GPZote"],
  },

  DefenderSign: {
    Desc: "Check/Read the Dung Defender's sign before Isma's Grove",
  },

  DirtmouthElevator: {
    Desc: "Open the Dirtmouth/Crystal Peak elevator",
    Excludes: ["Mimics"],
  },

  ElderFlower: {
    Desc: "Give the Flower to Elderbug",
  },

  Emilitia: {
    Desc: "Talk to Eternal Emilitia",
  },

  FlukeHermit: {
    Desc: "Talk to the Fluke Hermit",
  },

  Godhome: {
    Desc: "Visit Godhome",
    Excludes: ["Ordeal20", "Radiant"],
  },

  GoamGarpede: {
    Desc: "Check the Goam and Garpede Journal Entries",
  },

  Jiji: {
    Desc: "Open Jiji's Hut and buy out Jiji",
  },

  HopperHell: {
    Desc: "Hit the Oro scarecrow up until the hoppers spawn",
    Excludes: ["420Rock", "AncientNailsmith", "GHopper"],
  },

  Lemm: {
    Desc: "Talk to Lemm in his shop with Defender's Crest equipped",
    Score: 1.3,
  },

  LegEater: {
    Desc: "Buy out Leg Eater",
  },

  SlyKey: {
    Desc: "Buy out Sly after giving him his Key",
    Excludes: ["Salubra", "4000", "5000"],
    Score: 1.3,
  },

  Lifeblood: {
    Desc: "10 Lifeblood masks at the same time",
  },

  LifebloodRoom: {
    Desc: "Enter the Lifeblood Core room without wearing any lifeblood charms",
  },

  LoreArchives: {
    Desc: "Check/Read three lore tablets in Teacher's Archives",
    Excludes: ["Uumuu", "Lumafly"],
  },

  LoreBasin: {
    Desc: "Check/Read the lore tablet in Ancient Basin",
  },

  LoreCity: {
    Desc: "Check/Read two lore tablets in City of Tears proper (Entrance and Spire)",
    Excludes: ["WK", "Telescope"],
  },

  LoreCliffs: {
    Desc: "Check/Read the lore tablet in Howling Cliffs",
    Excludes: ["Gorb"],
  },

  LoreGreenpath: {
    Desc: "Check/Read three lore tablets in Greenpath",
  },

  LoreKEdge: {
    Desc: "Check/Read the lore tablet in Kingdom's Edge (requires Spore Shroom)",
    Score: 1.3,
  },

  LorePilgrims: {
    Desc: "Check/Read both Pilgrim's Way lore tablets",
  },

  LoreSanctum: {
    Desc: "Check/Read both lore tablets in Soul Sanctum",
    Excludes: ["SoulMaster", "SoulTyrant"],
  },

  LoreVillage: {
    Desc: "Check/Read both lore tablets in Mantis Village",
    Excludes: ["VillageJournal"],
  },

  Lumafly: {
    Desc: "Check the Charged Lumafly Journal Entry",
    Excludes: ["Uumuu", "LoreArchives"],
  },

  MaskMaker: {
    Desc: "Talk to Mask Maker",
  },

  Midwife: {
    Desc: "Talk to Midwife",
    Excludes: ["DeepStag", "VisitDistantHive"],
  },

  MossProphet: {
    Desc: "Bow to Moss Prophet, dead or alive",
    Excludes: ["Caelif"],
  },

  MrMushroom1: {
    Desc: "Interact with Mr. Mushroom once (Does not require Spore Shroom)",
    Score: 0.88,
  },

  Nail2: {
    Desc: "Buy the Nailsmith's second offer",
    Excludes: ["2Ore", "Nail3TheObtain", "Nail3"],
    Score: 0.55,
  },

  Nail3: {
    Desc: "Buy the Nailsmith's third offer",
    Excludes: ["2Ore", "Nail2", "Nail3TheObtain"],
    Score: 0.78,
  },

  Nail3TheObtain: {
    Desc: "Upgrade your Nail to Coiled Nail (Nail 3)",
    Excludes: ["2Ore", "Nail3", "Nail2"],
    Score: 1.3,
  },

  NailHut: {
    Desc: "Use a Nail Art in its vanilla Nailmaster's Hut",
  },

  Ordeal20: {
    Desc: "Defeat 20 Zotes in the Eternal Ordeal",
    Types: ["Tiebreaker"],
    Excludes: ["Godhome", "Radiant"],
  },

  /*
  "Overcharm": {
    "Desc": "Talk to Salubra while overcharmed"
  },
  */

  PoP: {
    Desc: "Complete Path of Pain",
    Types: ["Tiebreaker"],
    Excludes: ["Kingsmould"],
  },

  /*
  "Pins": {
    "Desc": "Buy 6 map pins from Iselda (All but two)",
    "Excludes": ["PinsAll"],
    "Score": 0.68
  },
  */

  PinsAll: {
    Desc: "Buy all 8 map pins from Iselda",
    Excludes: ["Pins", "TramPass"],
    Score: 1.15,
  },

  Revek: {
    Desc: "Parry Revek 3 times without dying (Spirits' Glade guard)",
    Excludes: ["ShrineOfBelievers"],
  },

  Salubra: {
    Desc: "Buy out Salubra",
    Excludes: ["SlyKey", "4000", "5000"],
  },

  /*
  "ShadeGates": {
    "Desc": "Slash two Shade Gates"
  },
  */

  Springs: {
    Desc: "Take a bath in 4 different Hot Springs",
    Excludes: ["Marissa", "SpringSplash"],
  },

  SpringSplash: {
    Desc: "Splash the NPC in the Colosseum's hot spring",
  },

  ShrineOfBelievers: {
    Desc: "Visit Shrine of Believers",
    Excludes: ["Revek"],
  },

  Telescope: {
    Desc: "Look through Lurien's telescope",
    Excludes: ["WK", "LoreCity"],
  },

  Tendrils: {
    Desc: "Check the Void Tendrils Journal Entry",
    Excludes: ["VoidPool"],
  },

  Tiso: {
    Desc: "Swat Tiso's shield away from his corpse",
  },

  Trilobite: {
    Desc: "Slash the Beast's Den Trilobite",
  },

  Tuk: {
    Desc: "Talk to Tuk",
  },

  VisitDistantHive: {
    Desc: "Visit Distant Village or Hive",
    Excludes: ["TramPass", "DeepStag", "Midwife"],
  },

  /*
  "VisitLakes": {
    "Desc": "Visit Lake of Unn or Blue Lake"
  },
  */

  VisitMounds: {
    Desc: "Visit Overgrown Mound or Crystalised Mound (Crystalised requires dive)",
    Excludes: ["HarderVisitMounds"],
  },

  HarderVisitMounds: {
    Desc: "Visit all 3 mounds (Crystalised requires dive)",
    Excludes: ["VisitMounds", "SpellLocations"],
  },

  VisitQueensShell: {
    Desc: "Visit Queen's Gardens or Cast-Off Shell",
    Excludes: ["Hornet2", "GardenStag"],
  },

  VisitSanctumWaterways: {
    Desc: "Visit Soul Sanctum or Royal Waterways",
  },

  VisitTower: {
    Desc: "Visit Tower of Love (Love Key not required)",
    Excludes: ["Collector", "Vitruvian"],
  },

  VoidPool: {
    Desc: "Swim in a Void Pool",
    Excludes: ["Tendrils"],
  },

  WhiteLady: {
    Desc: "Dream Nail White Lady",
    Excludes: ["TLord", "ClothQuest"],
  },

  Willow: {
    Desc: "Dream Nail Willoh's meal",
  },

  WPShadeSkip: {
    Desc: "Sit down in Hidden Station",
    Excludes: ["HiddenStag", "Wings"],
  },

  Grubfather: {
    Desc: "Get all of the Grubfather's checks",
  },

  Seer: {
    Desc: "Get all of the Seer's checks",
    Excludes: ["800Essence"],
  },

  ElderBaldurs: {
    Desc: "Kill all 4 Elder Baldurs",
  },

  WaterwaysArenas: {
    Desc: "Defeat both arenas in Royal Waterways",
    Excludes: ["TearCheck"],
  },

  CityArenas: {
    Desc: "Defeat both arenas in City of Tears",
  },

  DeepnestRoot: {
    Desc: "Complete the Deepnest Root",
    Excludes: ["WeaverSeal"],
  },

  WeaverSeal: {
    Desc: "Bow to the Seal of Binding in Weavers' Den",
    Excludes: ["DeepnestRoot"],
  },

  SharpShadowCheck: {
    Desc: "Check Sharp Shadow",
  },

  Caelif: {
    Desc: "Dream Nail Caelif & Fera Orthop (Queen's Garden ghost)",
    Excludes: ["MossProphet"],
  },

  Vitruvian: {
    Desc: "Bow to the Vitruvian Grub (Collector's secret)",
    Excludes: ["Collector", "Lovekey", "VisitTower"],
    Score: 1.3,
  },

  /*
  "BadJoke": {
    "Desc": "Kill Menderbug or defeat Colosseum 3"
  }
  */
};
