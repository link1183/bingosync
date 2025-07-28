bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Crossing'de Theo ile konuşun", types: ["earlygame", "cutscene"] },
  { name: "1A zıplamadan", types: ["earlygame", "task"] },
  { name: "1A Start'taki bütün çilekler (6)", types: ["checkpoint_berries"] },
  { name: "Chasm'daki bütün çilekler (5)", types: ["checkpoint_berries"] },
  { name: "1A'da 1-Up alın", types: ["1up", "earlygame"] },
  { name: "Forsaken City Mavi Kalp", types: ["hearts", "earlygame"] },
  { name: "Chasm dash atmadan", types: ["earlygame", "task"] },
  { name: "1A dash atmadan", types: ["earlygame", "task"] },
  { name: "Forsaken City Kaset", types: ["1b", "earlygame"] },
  { name: "Old Site Mavi Kalp", types: ["hearts", "earlygame"] },
];
bingoList[2] = [
  { name: "İki 1-Up alın", types: ["1up"] },
  { name: "1A'da 10 çilek", types: ["amount_berries"] },
  { name: "Awake'de Theo ile konuşun", types: ["earlygame", "awake"] },
  { name: "Cliff Face'den önceki gizli yoldan gidin", types: ["task"] },
  { name: "Awake'deki bütün çilekler (1)", types: ["checkpoint_berries"] },
  {
    name: "Intervention'daki bütün çilekler (8)",
    types: ["checkpoint_berries"],
  },
  { name: "Awake zıplamadan", types: ["earlygame", "awake"] },
  { name: "Awake dash atmadan", types: ["earlygame", "awake"] },
  { name: "2A Start'taki bütün çilekler (9)", types: ["checkpoint_berries"] },
  { name: "2 Kalp", types: ["amount_hearts"] },
];
bingoList[3] = [
  { name: "3 bölümde 5 çilek", types: ["amount_berries"] },
  { name: "1 B-Side tamamlayın", types: ["amount_chapters"] },
  { name: "2A'daki şiiri okuyun", types: ["earlygame", "awake"] },
  {
    name: "Elevator Shaft'ta Theo ile konuşun",
    types: ["resort_cutscene", "cutscene"],
  },
  { name: "Intervention zıplamadan", types: ["earlygame", "task"] },
  { name: "Crossing'deki bütün çilekler (9)", types: ["checkpoint_berries"] },
  { name: "2A'da 10 çilek", types: ["amount_berries"] },
  {
    name: "Huge Mess'de not ve PICO-8'i bulun",
    types: ["resort_cutscene", "cutscene"],
  },
  { name: "2 bölümde 1-Up alın", types: ["1up", "challenge"] },
  { name: "3A Start tutunmadan", types: ["grabless"] },
];
bingoList[4] = [
  { name: "2A'da 1-Up alın", types: ["1up"] },
  { name: "PICO-8'de Old Site'a ulaşın", types: ["pico-8"] },
  { name: "Forsaken City B-Side", types: ["1b"] },
  { name: "1A'daki bütün toplanabilir eşyalar", types: ["amount_berries"] },
  { name: "Crossing dash atmadan", types: ["challenge", "task"] },
  { name: "Old Site Kaset", types: ["2b", "earlygame"] },
  { name: "Shrine dash atmadan", types: ["task"] },
  { name: "4A Start tutunmadan", types: ["grabless"] },
  { name: "4A'da 1-Up alın", types: ["1up", "challenge"] },
  { name: "2 Kaset", types: ["amount_cassettes"] },
];
bingoList[5] = [
  { name: "20 Çilek", types: ["amount_berries"] },
  { name: "PICO-8'de 5 çilek toplayın", types: ["pico-8"] },
  { name: "Old Site B-Side", types: ["2b"] },
  { name: "1A tutunmadan", types: ["grabless"] },
  { name: "2A tutunmadan", types: ["grabless"] },
  { name: "Üç 1-Up alın", types: ["1up", "challenge"] },
  { name: "5A'da 1-Up alın", types: ["1up", "challenge"] },
  {
    name: "Elevator Shaft'daki bütün çilekler (4)",
    types: ["checkpoint_berries"],
  },
  { name: "4 Bölümde 5 çilek", types: ["amount_berries"] },
  { name: "Bir Kevin Block'a 4 tarafından da vurun", types: ["task"] },
];
bingoList[6] = [
  { name: "Huge Mess'deki bütün çilekler (7)", types: ["checkpoint_berries"] },
  {
    name: "B-Side'larda 3 dürbün kullanın",
    types: ["binoculars", "earlygame"],
  },
  { name: "Forsaken City'de Mavi ve Kırmızı Kalp", types: ["1b"] },
  { name: "Old Site'da Mavi ve Kırmızı Kalp", types: ["2b"] },
  { name: "2A'daki bütün toplanabilir eşyalar", types: ["amount_berries"] },
  { name: "Celestial Resort Mavi Kalp", types: ["hearts"] },
  {
    name: "Presidential Suite'deki bütün çilekler (3)",
    types: ["checkpoint_berries"],
  },
  { name: "Mirror Temple Kaset", types: ["5b"] },
  {
    name: "Huge Mess: Kutular -> Kitaplar -> Havlular",
    types: ["huge_mess_pathing"],
  },
  {
    name: "Huge Mess: Kutular -> Havlular -> Kitaplar",
    types: ["huge_mess_pathing"],
  },
];
bingoList[7] = [
  { name: "2 Kalp ve 2 Kaset", types: ["amount_hearts", "amount_cassettes"] },
  {
    name: "1 Mavi ve 1 Kırmızı Kalp",
    types: ["amount_hearts", "amount_chapters"],
  },
  { name: "2 opsiyonel Theo sahnesi", types: ["cutscene"] },
  { name: "3 Bölümde 1-Up alın", types: ["1up", "challenge"] },
  { name: "Huge Mess tutunmadan", types: ["grabless"] },
  {
    name: "Elevator Shaft'daki günlüğü okuyun",
    types: ["resort_cutscene", "cutscene"],
  },
  { name: "Elevator Shaft tutunmadan", types: ["grabless"] },
  { name: "4A Start'daki bütün çilekler (8)", types: ["checkpoint_berries"] },
  {
    name: "4A'daki bütün dürbünleri kullanın (3)",
    types: ["binoculars", "task"],
  },
  { name: "Cliff Face tutunmadan", types: ["grabless"] },
];
bingoList[8] = [
  { name: "Old Trail'deki bütün çilekler (7)", types: ["checkpoint_berries"] },
  { name: "3 tane A-Side tamamlayın", types: ["amount_chapters"] },
  { name: "3 Kanatlı Çilek", types: ["special_berries", "earlygame"] },
  { name: "B-Side'larda 4 dürbün kullanın", types: ["binoculars"] },
  { name: "B-Side'larda 5 dürbün kullanın", types: ["binoculars"] },
  { name: "5 Berries in 5 Chapters", types: ["amount_berries"] },
  {
    name: "Huge Mess: Havlular-> Kitaplar-> Kutular",
    types: ["huge_mess_pathing"],
  },
  {
    name: "Huge Mess: Kitaplar-> Kutular-> Havlular",
    types: ["huge_mess_pathing"],
  },
  { name: "10 kartopu üstünde zıplayın", types: ["snowballs"] },
  { name: "15 kartopu üstünde zıplayın", types: ["snowballs"] },
];
bingoList[9] = [
  { name: "Presidential Suite tutunmadan", types: ["grabless"] },
  { name: "2 Tohumlu Çilek", types: ["special_berries"] },
  { name: "3 Kaset", types: ["amount_cassettes"] },
  { name: "25 Çilek", types: ["amount_berries"] },
  { name: "30 Çilek", types: ["amount_berries"] },
  { name: "2 Bölümde 2 dürbün kullanın", types: ["binoculars"] },
  { name: "Celestial Resort Kaset", types: ["3b"] },
  { name: "Golden Ridge Mavi Kalp", types: ["hearts"] },
  { name: "5 dürbün kullanın", types: ["binoculars"] },
  { name: "6 dürbün kullanın", types: ["binoculars"] },
];
bingoList[10] = [
  { name: "5B'de 2 anahtar alın", types: ["5b", "task"] },
  { name: "Golden Ridge Kaset", types: ["4b"] },
  {
    name: "Huge Mess: Kitaplar -> Havlular -> Kutular",
    types: ["huge_mess_pathing"],
  },
  {
    name: "Huge Mess: Havlular -> Kutular -> Kitaplar",
    types: ["huge_mess_pathing"],
  },
  { name: "Search tutunmadan", types: ["grabless"] },
  { name: "4 Kanatlı Çilek", types: ["special_berries"] },
  { name: "5 Kanatlı Çilek", types: ["special_berries"] },
  { name: "5A Start zıplamadan", types: ["task"] },
  { name: "Search'de Theo ile konuşun", types: ["cutscene", "search"] },
  { name: "Cliff Face'deki bütün çilekler (5)", types: ["checkpoint_berries"] },
];
bingoList[11] = [
  { name: "3 Kalp", types: ["amount_hearts"] },
  { name: "4 Kalp", types: ["amount_hearts"] },
  { name: "B-Side'larda 6 dürbün kullanın", types: ["binoculars"] },
  { name: "PICO-8'de 10 çilek toplayın", types: ["pico-8"] },
  { name: "Oshiro'yu 10 kere sersemletin", types: ["oshiro_stun"] },
  { name: "Oshiro'yu 15 kere sersemletin", types: ["oshiro_stun"] },
  { name: "3 bölümde 1 dürbün kullanın", types: ["binoculars"] },
  { name: "Golden Ridge B-Side", types: ["4b"] },
  { name: "Kanatlı Altın Çilek", types: ["challenge"] },
  { name: "Rescue tutunmadan", types: ["grabless"] },
];
bingoList[12] = [
  { name: "2 B-Side tamamlayın", types: ["amount_chapters"] },
  { name: "3 Kalp ve 3 Kaset", types: ["amount_hearts", "amount_cassettes"] },
  { name: "Depths tutunmadan", types: ["grabless"] },
  { name: "Unraveling tutunmadan", types: ["grabless"] },
  { name: "Depths'deki anahtarı alın", types: ["task"] },
  { name: "Rescue'deki bütün çilekler (1)", types: ["checkpoint_berries"] },
  { name: "Mirror Temple Mavi Kalp", types: ["hearts"] },
  { name: "5A Start'daki bütün çilekler (12)", types: ["checkpoint_berries"] },
  { name: "3A Start'daki bütün çilekler (11)", types: ["checkpoint_berries"] },
  { name: "Shrine'daki bütün çilekler (9)", types: ["checkpoint_berries"] },
];
bingoList[13] = [
  { name: "Unraveling'deki bütün çilekler (1)", types: ["checkpoint_berries"] },
  { name: "Search'deki bütün çilekler (6)", types: ["checkpoint_berries"] },
  { name: "4 Kaset", types: ["amount_cassettes"] },
  {
    name: "2 Mavi ve 2 Kırmızı Kalp",
    types: ["amount_hearts", "amount_chapters"],
  },
  { name: "PICO-8'deki Orb'u alın", types: ["pico-8"] },
  { name: "Power Source'da 1 anahtar alın", types: ["ch9", "binoculars"] },
  { name: "Library'ye ulaşın (3B Checkpoint)", types: ["3b"] },
  {
    name: "Into the Core'daki bütün çilekler (1)",
    types: ["checkpoint_berries", "core"],
  },
  { name: "Hollows'daki Reflection sahnesi", types: ["cutscene"] },
  { name: "Lake tutunmadan", types: ["grabless"] },
];
bingoList[14] = [
  { name: "35 Çilek", types: ["amount_berries"] },
  { name: "40 Çilek", types: ["amount_berries"] },
  { name: "PICO-8'i bitirin", types: ["pico-8"] },
  { name: "3 opsiyonel Theo sahnesi", types: ["cutscene"] },
  { name: "Seeker öldürün", types: ["seeker", "task"] },
  { name: "4 bölümde 1 dürbün kullanın", types: ["binoculars"] },
  { name: "Hollows'da sadece üst rota", types: ["task", "reflection_pathing"] },
  { name: "Search'de 1 anahtar alın", types: ["task", "search"] },
  { name: "Reflection Kaset", types: ["6b"] },
  { name: "Reflection Mavi Kalp", types: ["hearts"] },
];
bingoList[15] = [
  { name: "3 Tohumlu Çilek", types: ["special_berries"] },
  { name: "2 A-Side ve 2 B-Side tamamlayın", types: ["amount_chapters"] },
  { name: "4 Kalp ve 4 Kaset", types: ["amount_hearts", "amount_cassettes"] },
  { name: "5 Kaset", types: ["amount_cassettes"] },
  { name: "Seekerları 10 kere sersemletin", types: ["seeker", "task"] },
  { name: "Seekerları 15 kere sersemletin", types: ["seeker", "task"] },
  { name: "Power Source'da 2 anahtar alın", types: ["ch9", "binoculars"] },
  { name: "Farewell'de 5 dürbün kullanın", types: ["ch9", "binoculars"] },
  { name: "Depths'deki bütün çilekler (11)", types: ["checkpoint_berries"] },
  { name: "Mirror Temple B-Side", types: ["5b"] },
];
bingoList[16] = [
  { name: "5 Kalp", types: ["amount_hearts"] },
  { name: "5A'da 15 çilek", types: ["amount_berries"] },
  { name: "5A'da 20 çilek", types: ["amount_berries"] },
  { name: "7 dürbün kullanın", types: ["binoculars"] },
  { name: "8 dürbün kullanın", types: ["binoculars"] },
  { name: "PICO-8'de 15 çilek toplayın", types: ["pico-8", "challenge"] },
  { name: "Celestial Resort B-Side", types: ["3b"] },
  { name: "Hollows'da sadece alt rota", types: ["task", "reflection_pathing"] },
  { name: "Search'de 2 anahtar alın", types: ["task", "search"] },
  { name: "Search'de 3 anahtar alın", types: ["task", "search"] },
];
bingoList[17] = [
  { name: "4A final sahnesini geçmeyin", types: ["cutscene", "task"] },
  { name: "6 Kanatlı Çilek", types: ["special_berries"] },
  { name: "7 Kanatlı Çilek", types: ["special_berries"] },
  { name: "Bütün 4 opsiyonel Theo sahnesi", types: ["cutscene"] },
  { name: "2 farklı Seeker öldürün", types: ["seeker", "task"] },
  { name: "Power Source'da 3 anahtar alın", types: ["ch9", "binoculars"] },
  { name: "Power Source'da 4 anahtar alın", types: ["ch9", "binoculars"] },
  { name: "5 bölümde 1 dürbün kullanın", types: ["binoculars"] },
  { name: "3 bölümde 10 çilek", types: ["amount_berries"] },
  {
    name: "Into the Core'un sağ tarafında bölümü buza çevirin",
    types: ["core"],
  },
];
bingoList[18] = [
  { name: "3 B-Side tamamlayın", types: ["amount_chapters"] },
  {
    name: "3 Mavi ve 3 Kırmızı Kalp",
    types: ["amount_hearts", "amount_chapters"],
  },
  { name: "2 bölümü tutunmadan tamamlayın", types: ["grabless", "challenge"] },
  { name: "Seekerları 20 kere sersemletin", types: ["seeker", "task"] },
  { name: "3 farklı Seeker öldürün", types: ["seeker", "task"] },
  { name: "2 bölümde 3 dürbün kullanın", types: ["binoculars"] },
  { name: "Golden Ridge Mavi ve Kırmızı Kalp", types: ["4b"] },
  { name: "Grabless Hollows", types: ["grabless", "challenge"] },
  { name: "2 bölümde 15 çilek", types: ["amount_berries"] },
  { name: "3A'da 15 çilek", types: ["amount_berries"] },
];
bingoList[19] = [
  { name: "5 A-Side tamamlayın", types: ["amount_chapters"] },
  { name: "45 Çilek", types: ["amount_berries"] },
  { name: "50 Çilek", types: ["amount_berries"] },
  { name: "Rock Bottom'a ulaşın (6B Checkpoint)", types: ["6b", "lategame"] },
  { name: "3 bölümde 2 dürbün kullanın", types: ["binoculars"] },
  { name: "Mirror Temple Mavi ve Kırmızı Kalp", types: ["5b"] },
  {
    name: "Heart of the Mountain'daki bütün çilekler (1)",
    types: ["checkpoint_berries", "core"],
  },
  {
    name: "500M'deki bütün dürbünleri kullanın (3)",
    types: ["binoculars", "lategame"],
  },
  { name: "0M'deki bütün çilekler (4)", types: ["lategame"] },
  { name: "Resolution'u zıplamadan tamamlayın", types: ["lategame", "task"] },
];
bingoList[20] = [
  { name: "8 Kanatlı Çilek", types: ["special_berries"] },
  { name: "9 Kanatlı Çilek", types: ["special_berries"] },
  { name: "3 A-Side ve 3 B-Side tamamlayın", types: ["amount_chapters"] },
  { name: "The Summit'de 3 cevher", types: ["lategame", "gems"] },
  { name: "0M ve 500M cevherleri", types: ["lategame", "gems", "task"] },
  { name: "3A tutunmadan", types: ["grabless"] },
  { name: "4 bölümde 10 çilek", types: ["amount_berries"] },
  { name: "3A'daki bütün toplanabilir eşyalar", types: ["amount_berries"] },
  { name: "Rock Bottom tutunmadan", types: ["lategame", "grabless"] },
  { name: "Reflection'daki gizli(Easteregg) odasına gidin", types: ["task"] },
];
bingoList[21] = [
  { name: "6 Kalp", types: ["amount_hearts"] },
  { name: "7 Kalp", types: ["amount_hearts"] },
  { name: "7A'da 20 çilek", types: ["lategame"] },
  { name: "9 dürbün kullanın", types: ["binoculars"] },
  { name: "10 dürbün kullanın", types: ["binoculars"] },
  { name: "4A'da 15 çilek", types: ["amount_berries"] },
  { name: "4A'da 20 çilek", types: ["amount_berries"] },
  { name: "5A tutunmadan", types: ["grabless"] },
  { name: "500M'deki bütün çilekler (6)", types: ["lategame"] },
  { name: "1000M'deki bütün çilekler (6)", types: ["lategame"] },
];
bingoList[22] = [
  { name: "The Summit Kaset", types: ["7b"] },
  { name: "65 Çilek", types: ["amount_berries", "big_berries"] },
  { name: "75 Çilek", types: ["amount_berries", "big_berries"] },
  { name: "Epilogue'daki kuş yuvasına gidin", types: ["task", "lategame"] },
  { name: "The Summit'de 4 cevher", types: ["lategame", "gems"] },
  { name: "1000M ve 1500M cevherleri", types: ["lategame", "gems", "task"] },
  { name: "Celestial Resort Mavi ve Kırmızı Kalp", types: ["3b"] },
  { name: "5 bölümde 10 çilek", types: ["amount_berries"] },
  {
    name: "The Summit'de 5 dürbün kullanın",
    types: ["binoculars", "lategame"],
  },
  {
    name: "1000M'deki bütün dürbünleri kullanın (4)",
    types: ["binoculars", "lategame"],
  },
];
bingoList[23] = [
  { name: "4 B-Side tamamlayın", types: ["amount_chapters"] },
  { name: "Reflection B-Side", types: ["6b"] },
  {
    name: "Remembered'daki Intro Car'a (arabaya) ulaşın",
    types: ["ch9", "task", "challenge"],
  },
  { name: "The Summit'de 5 cevher", types: ["lategame", "gems"] },
  { name: "2000M ve 2500M cevherleri", types: ["lategame", "gems", "task"] },
  { name: "4A'daki bütün toplanabilir eşyalar", types: ["amount_berries"] },
  { name: "3 bölümde 15 çilek", types: ["amount_berries", "big_berries"] },
  { name: "6A tutunmadan", types: ["lategame", "grabless", "challenge"] },
  { name: "1500M'deki bütün çilekler (8)", types: ["lategame"] },
  { name: "2000M'deki bütün çilekler (8)", types: ["lategame"] },
];
bingoList[24] = [
  { name: "7A'da 35 çilek", types: ["lategame"] },
  { name: "Reflection'da Mavi ve Kırmızı Kalp", types: ["6b"] },
  { name: "3000M'daki bütün bayraklar", types: ["task", "lategame"] },
  { name: "5A'daki bütün toplanabilir eşyalar", types: ["amount_berries"] },
  { name: "2500M'deki bütün çilekler (8)", types: ["lategame"] },
  { name: "3000M'deki bütün çilekler (7)", types: ["lategame"] },
  {
    name: "Hot and Cold'daki bütün çilekler (3)",
    types: ["checkpoint_berries", "core"],
  },
  { name: "4 bölümde 2 dürbün kullanın", types: ["binoculars"] },
  { name: "Core Mavi Kalp", types: ["core"] },
  { name: "Power Source'da 5 anahtar alın", types: ["ch9", "binoculars"] },
];
bingoList[25] = [
  { name: "The Summit B-Side", types: ["7b"] },
  { name: "The Summit Mavi ve Kırmızı Kalp", types: ["7b"] },
  { name: "100 Çilek", types: ["amount_berries", "big_berries"] },
  { name: "4 Tohumlu Çilek", types: ["special_berries", "lategame"] },
  { name: "5 B-Side tamamlayın", types: ["amount_chapters"] },
  { name: "4 bölümde 15 çilek", types: ["amount_berries", "big_berries"] },
  { name: "7A'daki bütün toplanabilir eşyalar", types: ["lategame"] },
  { name: "Event Horizon'a ulaşın (9 Checkpoint)", types: ["ch9"] },
  {
    name: "8A'daki bütün toplanabilir eşyalar",
    types: ["checkpoint_berries", "core"],
  },
  { name: "The Summit Mavi Kalp", types: ["gems", "hearts"] },
];
