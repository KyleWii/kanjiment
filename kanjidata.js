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
    id: "11", kanji: "日", meaning: "sun",
    vocab: [
        { word: "日", meaning: "sun", reading: "ひ", kanjiReading: "ひ" },
        { word: "二日", meaning: "second day", reading: "ふつか", kanjiReading: "か" },
        { word: "三日", meaning: "third day", reading: "みっか", kanjiReading: "か" }
    ]
},
{
    id: "12", kanji: "月", meaning: "moon",
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
    id: "15", kanji: "上", meaning: "top, above",
    vocab: [
        { word: "上", meaning: "above", reading: "うえ", kanjiReading: "うえ" },
        { word: "上る", meaning: "to climb", reading: "のぼる", kanjiReading: "のぼ" },
        { word: "上手", meaning: "good at", reading: "じょうず", kanjiReading: "じょう" }
    ]
},
{
    id: "16", kanji: "下", meaning: "bottom, below",
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
    id: "19", kanji: "中", meaning: "inside, middle",
    vocab: [
        { word: "中", meaning: "inside", reading: "なか", kanjiReading: "なか" },
        { word: "中々", meaning: "rather", reading: "なかなか", kanjiReading: "なか" },
        { word: "水中", meaning: "underwater", reading: "すいちゅう", kanjiReading: "ちゅう" }
    ]
},
{
    id: "20", kanji: "大", meaning: "large",
    vocab: [
        { word: "大きい", meaning: "big", reading: "おおきい", kanjiReading: "おお" },
        { word: "大人", meaning: "adult", reading: "おとな", kanjiReading: "おとな" },
        { word: "大切", meaning: "important", reading: "たいせつ", kanjiReading: "たい" }
    ]
},
{
    id: "21", kanji: "小", meaning: "small",
    vocab: [
        { word: "小さい", meaning: "small", reading: "ちいさい", kanjiReading: "ちい" },
        { word: "小皿", meaning: "small plate", reading: "こざら", kanjiReading: "こ" },
        { word: "小学生", meaning: "elementary school student", reading: "しょうがくせい", kanjiReading: "しょう" }
    ]
}
];
