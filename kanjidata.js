const KANJI_BANK = [
{
    id: "1", kanji: "一", meaning: "one",
    vocab: [
        { word: "一", meaning: "one", reading: "いち", kanjiReading: "いち" },
        { word: "一人", meaning: "alone", reading: "ひとり", kanjiReading: "ひと" },
        { word: "一つ", meaning: "one thing", reading: "ひとつ", kanjiReading: "ひと" }
    ]
},
{
    id: "2", kanji: "二", meaning: "two",
    vocab: [
        { word: "二", meaning: "two", reading: "に", kanjiReading: "に" },
        { word: "二人", meaning: "two people", reading: "ふたり", kanjiReading: "ふた" },
        { word: "二つ", meaning: "two things", reading: "ふたつ", kanjiReading: "ふた" }
    ]
},
{
    id: "3", kanji: "三", meaning: "three",
    vocab: [
        { word: "三", meaning: "three", reading: "さん", kanjiReading: "さん" },
        { word: "三人", meaning: "three people", reading: "さんにん", kanjiReading: "さん" },
        { word: "三つ", meaning: "three things", reading: "みっつ", kanjiReading: "みっ" }
    ]
},
{
    id: "4", kanji: "四", meaning: "four",
    vocab: [
        { word: "四", meaning: "four", reading: "よん", kanjiReading: "よん" },
        { word: "四日", meaning: "fourth day", reading: "よっか", kanjiReading: "よっ" },
        { word: "四月", meaning: "April", reading: "しがつ", kanjiReading: "し" }
    ]
},
{
    id: "5", kanji: "五", meaning: "five",
    vocab: [
        { word: "五", meaning: "five", reading: "ご", kanjiReading: "ご" },
        { word: "五日", meaning: "fifth day", reading: "いつか", kanjiReading: "いつ" },
        { word: "五月", meaning: "May", reading: "ごがつ", kanjiReading: "ご" }
    ]
},
{
    id: "6", kanji: "六", meaning: "six",
    vocab: [
        { word: "六", meaning: "six", reading: "ろく", kanjiReading: "ろく" },
        { word: "六日", meaning: "sixth day", reading: "むいか", kanjiReading: "むい" },
        { word: "六月", meaning: "June", reading: "ろくがつ", kanjiReading: "ろく" }
    ]
},
{
    id: "7", kanji: "七", meaning: "seven",
    vocab: [
        { word: "七", meaning: "seven", reading: "なな", kanjiReading: "なな" },
        { word: "七つ", meaning: "seven things", reading: "ななつ", kanjiReading: "なな" },
        { word: "七日", meaning: "seventh day", reading: "なのか", kanjiReading: "なの" }
    ]
},
{
    id: "8", kanji: "八", meaning: "eight",
    vocab: [
        { word: "八", meaning: "eight", reading: "はち", kanjiReading: "はち" },
        { word: "八つ", meaning: "eight things", reading: "やっ", kanjiReading: "やっ" },
        { word: "八日", meaning: "eighth day", reading: "ようか", kanjiReading: "よう" }
    ]
},
{
    id: "9", kanji: "九", meaning: "nine",
    vocab: [
        { word: "九", meaning: "nine", reading: "きゅう", kanjiReading: "きゅう" },
        { word: "九つ", meaning: "nine things", reading: "ここのつ", kanjiReading: "ここの" },
        { word: "九日", meaning: "ninth days", reading: "ここのか", kanjiReading: "ここの" }
    ]
},
{
    id: "10", kanji: "十", meaning: "ten",
    vocab: [
        { word: "十", meaning: "ten", reading: "じゅう", kanjiReading: "じゅう" },
        { word: "十日", meaning: "tenth day", reading: "とおか", kanjiReading: "とお" },
        { word: "四十", meaning: "fourty", reading: "よんじゅう", kanjiReading: "じゅう" }
    ]
},
{
    id: "11", kanji: "日", meaning: "day, sun, Japan",
    vocab: [
        { word: "日", meaning: "sun", reading: "ひ", kanjiReading: "ひ" },
        { word: "二日", meaning: "second day", reading: "ふつか", kanjiReading: "か" },
        { word: "三日", meaning: "third day", reading: "みっか", kanjiReading: "か" }
    ]
},
{
    id: "12", kanji: "月", meaning: "month, moon",
    vocab: [
        { word: "月", meaning: "moon", reading: "つき", kanjiReading: "つき" },
        { word: "一月", meaning: "January", reading: "いちがつ", kanjiReading: "がつ" },
        { word: "二月", meaning: "February", reading: "にがつ", kanjiReading: "がつ" }
    ]
},
{
    id: "13", kanji: "百", meaning: "hundred",
    vocab: [
        { word: "百", meaning: "hundred", reading: "ひゃく", kanjiReading: "ひゃく" },
        { word: "三百", meaning: "three hundred", reading: "さんびゃく", kanjiReading: "びゃく" },
        { word: "二百", meaning: "two hundred", reading: "にひゃく", kanjiReading: "ひゃく" }
    ]
},
{
    id: "1４", kanji: "千", meaning: "thousand",
    vocab: [
        { word: "千", meaning: "thousand", reading: "せん", kanjiReading: "せん" },
        { word: "一千", meaning: "one thousand", reading: "いっせん", kanjiReading: "せん" },
        { word: "四千", meaning: "four thousand", reading: "よんせん", kanjiReading: "せん" }
    ]
},
{
    id: "15", kanji: "上", meaning: "above, up",
    vocab: [
        { word: "上", meaning: "above", reading: "うえ", kanjiReading: "うえ" },
        { word: "上る", meaning: "to climb", reading: "のぼる", kanjiReading: "のぼ" },
        { word: "上手", meaning: "good at", reading: "じょうず", kanjiReading: "じょう" }
    ]
},
{
    id: "16", kanji: "下", meaning: "below, down, descend",
    vocab: [
        { word: "下", meaning: "below", reading: "した", kanjiReading: "した" },
        { word: "下る", meaning: "to descend", reading: "くだる", kanjiReading: "くだ" },
        { word: "下手", meaning: "unskillful", reading: "へた", kanjiReading: "へ" }
    ]
},
{
    id: "17", kanji: "左", meaning: "left",
    vocab: [
        { word: "左", meaning: "left direction", reading: "ひだり", kanjiReading: "ひだり" },
        { word: "左手", meaning: "left hand", reading: "ひだりて", kanjiReading: "ひだり" },
        { word: "左右", meaning: "left and right", reading: "さゆう", kanjiReading: "さ" }
    ]
},
{
    id: "18", kanji: "右", meaning: "right",
    vocab: [
        { word: "右", meaning: "right", reading: "みぎ", kanjiReading: "みぎ" },
        { word: "右手", meaning: "right hand", reading: "みぎて", kanjiReading: "みぎて" },
        { word: "左右", meaning: "left and right", reading: "さゆう", kanjiReading: "ゆう" }
    ]
},
{
    id: "19", kanji: "中", meaning: "in, inside, middle",
    vocab: [
        { word: "中", meaning: "inside", reading: "なか", kanjiReading: "なか" },
        { word: "中々", meaning: "rather", reading: "なかなか", kanjiReading: "なか" },
        { word: "水中", meaning: "underwater", reading: "すいちゅう", kanjiReading: "ちゅう" }
    ]
},
{
    id: "20", kanji: "大", meaning: "large, big",
    vocab: [
        { word: "大きい", meaning: "big", reading: "おおきい", kanjiReading: "おお" },
        { word: "大人", meaning: "adult", reading: "おとな", kanjiReading: "おとな" },
        { word: "大切", meaning: "important", reading: "たいせつ", kanjiReading: "たい" }
    ]
},
{
    id: "21", kanji: "小", meaning: "little, small",
    vocab: [
        { word: "小さい", meaning: "small", reading: "ちいさい", kanjiReading: "ちい" },
        { word: "小皿", meaning: "small plate", reading: "こざら", kanjiReading: "こ" },
        { word: "小学生", meaning: "elementary school student", reading: "しょうがくせい", kanjiReading: "しょう" }
    ]
},
{
    id: "22", kanji: "年", meaning: "year, counter for years",
    vocab: [
        { word: "毎年", meaning: "every year", reading: "まいとし", kanjiReading: "とし" },
        { word: "年中", meaning: "year round", reading: "ねんじゅう", kanjiReading: "ねん" },
        { word: "来年", meaning: "next year", reading: "らいねん", kanjiReading: "ねん" }
    ]
},
{
    id: "23", kanji: "早", meaning: "early, fast",
    vocab: [
        { word: "早々", meaning: "as soon as", reading: "そうそう", kanjiReading: "そう" },
        { word: "早い", meaning: "early", reading: "はやい", kanjiReading: "はや" },
        { word: "早口", meaning: "fast talker", reading: "はやくち", kanjiReading: "はや" }
    ]
},
{
    id: "24", kanji: "木", meaning: "tree, wood",
    vocab: [
        { word: "木", meaning: "tree", reading: "き", kanjiReading: "き" },
        { word: "木曜日", meaning: "Thursday", reading: "もくようび", kanjiReading: "もく" },
        { word: "木星", meaning: "Jupiter", reading: "もくせい", kanjiReading: "もく" }
    ]
},
{
    id: "25", kanji: "林", meaning: "grove, forest",
    vocab: [
        { word: "林", meaning: "forest", reading: "はやし", kanjiReading: "はやし" },
        { word: "林道", meaning: "woodland path", reading: "りんどう", kanjiReading: "りん" },
        { word: "林業", meaning: "forestry", reading: "りんぎょう", kanjiReading: "りん" }
    ]
},
{
    id: "26", kanji: "山", meaning: "mountain",
    vocab: [
        { word: "山", meaning: "mountain", reading: "やま", kanjiReading: "やま" },
        { word: "火山", meaning: "volcano", reading: "かざん", kanjiReading: "ざん" },
        { word: "山道", meaning: "mountain road", reading: "やまみち", kanjiReading: "やま" }
    ]
},
{
    id: "27", kanji: "川", meaning: "stream, river",
    vocab: [
        { word: "川", meaning: "river", reading: "かわ", kanjiReading: "かわ" },
        { word: "山川", meaning: "mountains and rivers", reading: "さんせん", kanjiReading: "せん" },
        { word: "堀川", meaning: "canal", reading: "ほりかわ", kanjiReading: "かわ" }
    ]
},
{
    id: "28", kanji: "土", meaning: "soil, earth, ground",
    vocab: [
        { word: "土", meaning: "dirt", reading: "つち", kanjiReading: "つち" },
        { word: "土曜日", meaning: "Saturday", reading: "どようび", kanjiReading: "ど" },
        { word: "土星", meaning: "Saturn", reading: "どせい", kanjiReading: "ど" }
    ]
},
{
    id: "29", kanji: "空", meaning: "empty, sky, void",
    vocab: [
        { word: "空", meaning: "sky", reading: "そら", kanjiReading: "そら" },
        { word: "空気", meaning: "air", reading: "くうき", kanjiReading: "くう" },
        { word: "空車", meaning: "open taxi", reading: "くうしゃ", kanjiReading: "くう" }
    ]
},
{
    id: "30", kanji: "田", meaning: "rice field, rice paddy",
    vocab: [
        { word: "田", meaning: "rice paddy", reading: "た", kanjiReading: "た" },
        { word: "田舎", meaning: "countryside", reading: "いなか", kanjiReading: "いなか" },
        { word: "油田", meaning: "oil field", reading: "ゆでん", kanjiReading: "でん" }
    ]
},
{
    id: "31", kanji: "天", meaning: "heavens, sky, imperial",
    vocab: [
        { word: "天気", meaning: "weather", reading: "てんき", kanjiReading: "てん" },
        { word: "天国", meaning: "heaven", reading: "てんごく", kanjiReading: "てん" },
        { word: "天の川", meaning: "Milky Way", reading: "あまのがわ", kanjiReading: "あま" }
    ]
},
{
    id: "32", kanji: "生", meaning: "life, genuine, birth",
    vocab: [
        { word: "人生", meaning: "one's life", reading: "じんせい", kanjiReading: "せい" },
        { word: "生まれる", meaning: "to be born", reading: "うまれる", kanjiReading: "う" },
        { word: "一年生", meaning: "first year student", reading: "いちねんせい", kanjiReading: "せい" }
    ]
},
{
    id: "33", kanji: "花", meaning: "flower",
    vocab: [
        { word: "花", meaning: "flower", reading: "はな", kanjiReading: "はな" },
        { word: "花火", meaning: "fireworks", reading: "はなび", kanjiReading: "はな" },
        { word: "花瓶", meaning: "vase", reading: "かびん", kanjiReading: "か" }
    ]
},
{
    id: "34", kanji: "草", meaning: "grass, weeds, herbs",
    vocab: [
        { word: "草", meaning: "grass", reading: "くさ", kanjiReading: "くさ" },
        { word: "芝草", meaning: "lawn", reading: "しばくさ", kanjiReading: "くさ" },
        { word: "草稿", meaning: "notes", reading: "そうこう", kanjiReading: "そう" },
    ]
},
{
    id: "35", kanji: "虫", meaning: "insect, bug, temper",
    vocab: [
        { word: "虫", meaning: "bug", reading: "むし", kanjiReading: "むし" },
        { word: "毛虫", meaning: "caterpillar", reading: "けむし", kanjiReading: "むし" },
        { word: "昆虫", meaning: "insect", reading: "こんちゅう", kanjiReading: "ちゅう" },
    ]
},
{
    id: "36", kanji: "犬", meaning: "dog",
    vocab: [
        { word: "犬", meaning: "dog", reading: "いぬ", kanjiReading: "いぬ" },
        { word: "子犬", meaning: "puppy", reading: "こいぬ", kanjiReading: "いぬ" },
        { word: "猟犬", meaning: "hunting dog", reading: "りょうけん", kanjiReading: "けん" },
    ]
},
{
    id: "37", kanji: "人", meaning: "person",
    vocab: [
        { word: "人", meaning: "person", reading: "ひと", kanjiReading: "ひと" },
        { word: "人口", meaning: "population", reading: "じんこう", kanjiReading: "じん" },
        { word: "白人", meaning: "white person", reading: "はくじん", kanjiReading: "じん" }
    ]
},
{
    id: "38", kanji: "名", meaning: "name, noted, distinguished",
    vocab: [
        { word: "名人", meaning: "expert", reading: "めいじん", kanjiReading: "めい" },
        { word: "名字", meaning: "surname", reading: "みょうじ", kanjiReading: "みょう" },
        { word: "名前", meaning: "name", reading: "なまえ", kanjiReading: "な" }
    ]
},
{
    id: "39", kanji: "女", meaning: "woman, female",
    vocab: [
        { word: "女", meaning: "woman", reading: "おんな", kanjiReading: "おんな" },
        { word: "女の子", meaning: "girl", reading: "おんなのこ", kanjiReading: "おんな" },
        { word: "彼女", meaning: "she", reading: "かのじょ", kanjiReading: "じょ" }
    ]
},
{
    id: "40", kanji: "男", meaning: "male",
    vocab: [
        { word: "男", meaning: "male", reading: "おとこ", kanjiReading: "おとこ" },
        { word: "男の子", meaning: "boy", reading: "おとこのこ", kanjiReading: "おとこ" },
        { word: "男性", meaning: "male", reading: "だんせい", kanjiReading: "だん" }
    ]
},
{
    id: "41", kanji: "子", meaning: "child, sign of the rat, 11PM-1AM",
    vocab: [
        { word: "子", meaning: "child", reading: "こ", kanjiReading: "こ" },
        { word: "子犬", meaning: "puppy", reading: "こいぬ", kanjiReading: "こ" },
        { word: "辛子", meaning: "mustard", reading: "からし", kanjiReading: "し" }
    ]
},
{
    id: "42", kanji: "目", meaning: "eye, class, look",
    vocab: [
        { word: "目", meaning: "eye", reading: "め", kanjiReading: "め" },
        { word: "目玉", meaning: "eyeball", reading: "めだま", kanjiReading: "め" },
        { word: "目次", meaning: "table of contents", reading: "もくじ", kanjiReading: "もく" }
    ]
},
{
    id: "43", kanji: "耳", meaning: "ear",
    vocab: [
        { word: "耳", meaning: "ear", reading: "みみ", kanjiReading: "みみ" },
        { word: "耳打ち", meaning: "whisper in ear", reading: "みみうち", kanjiReading: "みみ" },
        { word: "外耳", meaning: "external ear", reading: "がいじ", kanjiReading: "じ" }
    ]
},
{
    id: "44", kanji: "口", meaning: "mouth",
    vocab: [
        { word: "口", meaning: "mouth", reading: "くち", kanjiReading: "くち" },
        { word: "人口", meaning: "population", reading: "じんこう", kanjiReading: "こう" },
        { word: "出口", meaning: "exit", reading: "でぐち", kanjiReading: "ぐち" }
    ]
},
{
    id: "45", kanji: "手", meaning: "hand",
    vocab: [
        { word: "手", meaning: "hand", reading: "て", kanjiReading: "て" },
        { word: "切手", meaning: "postage stamp", reading: "きって", kanjiReading: "て" },
        { word: "投手", meaning: "pitcher", reading: "とうしゅ", kanjiReading: "しゅ" }
    ]
}
];
