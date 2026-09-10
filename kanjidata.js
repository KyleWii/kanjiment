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
},
{
    id: "46", kanji: "足", meaning: "leg, foot, be sufficient",
    vocab: [
        { word: "足", meaning: "foot", reading: "あし", kanjiReading: "あし" },
        { word: "不足", meaning: "shortage", reading: "ふそく", kanjiReading: "そく" },
        { word: "足りる", meaning: "to be enough", reading: "たりる", kanjiReading: "た" }
    ]
},
{
    id: "47", kanji: "見", meaning: "see, hopes, chances",
    vocab: [
        { word: "月見", meaning: "moon viewing", reading: "つきみ", kanjiReading: "み" },
        { word: "見る", meaning: "to see", reading: "みる", kanjiReading: "み" },
        { word: "意見", meaning: "opinion", reading: "いけん", kanjiReading: "けん" }
    ]
},
{
    id: "48", kanji: "音", meaning: "sound, noise",
    vocab: [
        { word: "音楽", meaning: "music", reading: "おんがく", kanjiReading: "おん" },
        { word: "発音", meaning: "pronounciation", reading: "はつおん", kanjiReading: "おん" },
        { word: "録音", meaning: "sound recording", reading: "ろくおん", kanjiReading: "おん" }
    ]
},
{
    id: "49", kanji: "力", meaning: "power, strength, strong",
    vocab: [
        { word: "力", meaning: "power", reading: "ちから", kanjiReading: "ちから" },
        { word: "入力", meaning: "input", reading: "にゅうりょく", kanjiReading: "りょく" },
        { word: "体力", meaning: "physical strength", reading: "たいりょく", kanjiReading: "りょく" }
    ]
},
{
    id: "50", kanji: "気", meaning: "spirit, mind, air",
    vocab: [
        { word: "元気", meaning: "energy", reading: "げんき", kanjiReading: "き" },
        { word: "気分", meaning: "mood", reading: "きぶん", kanjiReading: "き" },
        { word: "空気", meaning: "air", reading: "くうき", kanjiReading: "き" }
    ]
},
{
    id: "51", kanji: "円", meaning: "circle, yen, round",
    vocab: [
        { word: "円い", meaning: "round", reading: "まるい", kanjiReading: "まる" },
        { word: "千円", meaning: "one thousand yen", reading: "せんえん", kanjiReading: "えん" },
        { word: "円滑", meaning: "effortless", reading: "えんかつ", kanjiReading: "えん" }
    ]
},
{
    id: "52", kanji: "入", meaning: "enter, insert",
    vocab: [
        { word: "入り口", meaning: "entrance", reading: "いりぐち", kanjiReading: "い" },
        { word: "入る", meaning: "to enter", reading: "はいる", kanjiReading: "はい" },
        { word: "入社", meaning: "joining a company", reading: "にゅうしゃ", kanjiReading: "にゅう" }
    ]
},
{
    id: "53", kanji: "出", meaning: "exit, leave, go out",
    vocab: [
        { word: "出口", meaning: "exit", reading: "でぐち", kanjiReading: "で" },
        { word: "出る", meaning: "to exit", reading: "でる", kanjiReading: "で" },
        { word: "出血", meaning: "bleeding", reading: "しゅっけつ", kanjiReading: "しゅっ" }
    ]
},
{
    id: "54", kanji: "立", meaning: "stand up, rise, set up",
    vocab: [
        { word: "立つ", meaning: "to stand", reading: "たつ", kanjiReading: "た" },
        { word: "市立", meaning: "municipal", reading: "しりつ", kanjiReading: "りつ" },
        { word: "自立", meaning: "independence", reading: "じりつ", kanjiReading: "りつ" }
    ]
},
{
    id: "55", kanji: "休", meaning: "rest, day off, retire",
    vocab: [
        { word: "休日", meaning: "day off", reading: "きゅうじつ", kanjiReading: "きゅう" },
        { word: "休む", meaning: "to rest", reading: "やすむ", kanjiReading: "やす" },
        { word: "休学", meaning: "absence from school", reading: "きゅうがく", kanjiReading: "きゅう" }
    ]
},
{
    id: "56", kanji: "先", meaning: "before, ahead, previous",
    vocab: [
        { word: "先ず", meaning: "first of all", reading: "まず", kanjiReading: "ま" },
        { word: "先月", meaning: "last month", reading: "せんげつ", kanjiReading: "せん" },
        { word: "先生", meaning: "teacher", reading: "せんせい", kanjiReading: "せん" }
    ]
},
{
    id: "57", kanji: "夕", meaning: "evening",
    vocab: [
        { word: "夕べ", meaning: "last night", reading: "ゆうべ", kanjiReading: "ゆう" },
        { word: "夕方", meaning: "early evening", reading: "ゆうがた", kanjiReading: "ゆう" },
        { word: "夕焼け", meaning: "sunset", reading: "ゆうやけ", kanjiReading: "ゆう" }
    ]
},
{
    id: "58", kanji: "本", meaning: "book, present, main",
    vocab: [
        { word: "本", meaning: "book", reading: "ほん", kanjiReading: "ほん" },
        { word: "日本", meaning: "Japan", reading: "にほん", kanjiReading: "ほん" },
        { word: "本当に", meaning: "really", reading: "ほんとうに", kanjiReading: "ほん" }
    ]
},
{
    id: "59", kanji: "文", meaning: "sentence, literature, style",
    vocab: [
        { word: "文字", meaning: "letter of the alphabet", reading: "もじ", kanjiReading: "も" },
        { word: "文学", meaning: "literature", reading: "ぶんがく", kanjiReading: "ぶん" },
        { word: "文化", meaning: "culture", reading: "ぶんか", kanjiReading: "ぶん" }
    ]
},
{
    id: "60", kanji: "字", meaning: "character, letter, word",
    vocab: [
        { word: "名字", meaning: "surname", reading: "みょうじ", kanjiReading: "じ" },
        { word: "小文字", meaning: "lowercase letters", reading: "こもじ", kanjiReading: "じ" },
        { word: "大文字", meaning: "uppercase letters", reading: "おおもじ", kanjiReading: "じ" }
    ]
},
{
    id: "61", kanji: "学", meaning: "study, learning, science",
    vocab: [
        { word: "工学", meaning: "engineering", reading: "こうがく", kanjiReading: "がく" },
        { word: "入学", meaning: "school admission", reading: "にゅうがく", kanjiReading: "がく" },
        { word: "学ぶ", meaning: "to learn", reading: "まなぶ", kanjiReading: "まな" }
    ]
},
{
    id: "62", kanji: "校", meaning: "exam, school, printing",
    vocab: [
        { word: "学校", meaning: "school", reading: "がっこう", kanjiReading: "こう" },
        { word: "高校", meaning: "high school", reading: "こうこう", kanjiReading: "こう" },
        { word: "小学校", meaning: "elementary school", reading: "しょうがっこう", kanjiReading: "こう" }
    ]
},
{
    id: "63", kanji: "村", meaning: "village, town",
    vocab: [
        { word: "村", meaning: "village", reading: "むら", kanjiReading: "むら" },
        { word: "村人", meaning: "villager", reading: "むらびと", kanjiReading: "むら" },
        { word: "農村", meaning: "agricultural community", reading: "のうそん", kanjiReading: "そん" }
    ]
},
{
    id: "64", kanji: "町", meaning: "town, village, block",
    vocab: [
        { word: "町", meaning: "town", reading: "まち", kanjiReading: "まち" },
        { word: "下町", meaning: "downtown", reading: "したまち", kanjiReading: "まち" },
        { word: "町民", meaning: "townspeople", reading: "ちょうみん", kanjiReading: "ちょう" }
    ]
},
{
    id: "65", kanji: "森", meaning: "forest, woods",
    vocab: [
        { word: "森", meaning: "woods", reading: "もり", kanjiReading: "もり" },
        { word: "森林", meaning: "forest, woods", reading: "しんりん", kanjiReading: "しん" },
        { word: "森閑", meaning: "silent, still, quiet, hushed", reading: "しんかん", kanjiReading: "しん" }
    ]
},
{
    id: "66", kanji: "正", meaning: "corect, justice, righteous",
    vocab: [
        { word: "正しい", meaning: "correct", reading: "ただしい", kanjiReading: "ただ" },
        { word: "不正", meaning: "misconduct", reading: "ふせい", kanjiReading: "せい" },
        { word: "正直", meaning: "honest", reading: "しょうじき", kanjiReading: "しょう" }
    ]
},
{
    id: "67", kanji: "水", meaning: "water",
    vocab: [
        { word: "水", meaning: "water", reading: "みず", kanjiReading: "みず" },
        { word: "水中", meaning: "underwater", reading: "すいちゅう", kanjiReading: "すい" },
        { word: "水星", meaning: "Mercury", reading: "すいせい", kanjiReading: "すい" }
    ]
},
{
    id: "68", kanji: "火", meaning: "fire",
    vocab: [
        { word: "火", meaning: "fire", reading: "ひ", kanjiReading: "ひ" },
        { word: "火山", meaning: "volcano", reading: "かざん", kanjiReading: "か" },
        { word: "火曜日", meaning: "Tuesday", reading: "かようび", kanjiReading: "か" }
    ]
},
{
    id: "69", kanji: "玉", meaning: "jewel, ball",
    vocab: [
        { word: "玉", meaning: "ball", reading: "たま", kanjiReading: "たま" },
        { word: "目玉", meaning: "eyeball", reading: "めだま", kanjiReading: "だま" },
        { word: "玉ねぎ", meaning: "onion", reading: "たまねぎ", kanjiReading: "たま" }
    ]
},
{
    id: "70", kanji: "王", meaning: "king, rule, magnate",
    vocab: [
        { word: "王", meaning: "king", reading: "おう", kanjiReading: "おう" },
        { word: "王女", meaning: "princess", reading: "おうじょ", kanjiReading: "おう" },
        { word: "国王", meaning: "king", reading: "こくおう", kanjiReading: "おう" }
    ]
},
{
    id: "71", kanji: "石", meaning: "stone",
    vocab: [
        { word: "石", meaning: "stone", reading: "いし", kanjiReading: "いし" },
        { word: "宝石", meaning: "jewel", reading: "ほうせき", kanjiReading: "せき" },
        { word: "磁石", meaning: "magnet", reading: "じしゃく", kanjiReading: "しゃく" }
    ]
},
{
    id: "72", kanji: "竹", meaning: "bamboo",
    vocab: [
        { word: "竹", meaning: "bamboo", reading: "たけ", kanjiReading: "たけ" },
        { word: "竹の子", meaning: "bamboo shoot", reading: "たけのこ", kanjiReading: "たけ" },
        { word: "爆竹", meaning: "firecracker", reading: "ばくちく", kanjiReading: "ちく" }
    ]
},
{
    id: "73", kanji: "糸", meaning: "thread",
    vocab: [
        { word: "糸", meaning: "thread", reading: "いと", kanjiReading: "いと" },
        { word: "毛糸", meaning: "wool yarn", reading: "けいと", kanjiReading: "いと" },
        { word: "絹糸", meaning: "silk thread", reading: "けんし", kanjiReading: "し" }
    ]
},
{
    id: "74", kanji: "貝", meaning: "shellfish",
    vocab: [
        { word: "貝", meaning: "shell", reading: "かい", kanjiReading: "かい" },
        { word: "貝殻", meaning: "seashell, shell", reading: "かいがら", kanjiReading: "かい" }
    ]
},
{
    id: "75", kanji: "車", meaning: "car",
    vocab: [
        { word: "車", meaning: "car", reading: "くるま", kanjiReading: "くるま" },
        { word: "空車", meaning: "open taxi", reading: "くうしゃ", kanjiReading: "しゃ" },
        { word: "電車", meaning: "train", reading: "でんしゃ", kanjiReading: "しゃ" }
    ]
},
{
    id: "76", kanji: "金", meaning: "gold",
    vocab: [
        { word: "お金", meaning: "money", reading: "おかね", kanjiReading: "かね" },
        { word: "金持ち", meaning: "rich person", reading: "かねもち", kanjiReading: "かね" },
        { word: "賞金", meaning: "cash prize", reading: "しょうきん", kanjiReading: "きん" }
    ]
},
{
    id: "77", kanji: "雨", meaning: "rain",
    vocab: [
        { word: "雨", meaning: "rain", reading: "あめ", kanjiReading: "あめ" },
        { word: "雨戸", meaning: "shutter", reading: "あまど", kanjiReading: "あま" },
        { word: "雨天", meaning: "rainy weather", reading: "うてん", kanjiReading: "う" }
    ]
},
{
    id: "78", kanji: "赤", meaning: "red",
    vocab: [
        { word: "赤", meaning: "red", reading: "あか", kanjiReading: "あか" },
        { word: "赤ちゃん", meaning: "baby", reading: "あかちゃん", kanjiReading: "あか" },
        { word: "赤痢", meaning: "dysentery", reading: "せきり", kanjiReading: "せき" }
    ]
},
{
    id: "79", kanji: "青", meaning: "blue, green",
    vocab: [
        { word: "青い", meaning: "blue", reading: "あおい", kanjiReading: "あお" },
        { word: "青年", meaning: "youth", reading: "せいねん", kanjiReading: "せい" },
        { word: "青空", meaning: "blue sky", reading: "あおぞら", kanjiReading: "あお" }
    ]
},
{
    id: "80", kanji: "白", meaning: "white",
    vocab: [
        { word: "白", meaning: "white", reading: "しろ", kanjiReading: "しろ" },
        { word: "白人", meaning: "white person", reading: "はくじん", kanjiReading: "はく" },
        { word: "面白い", meaning: "interesting", reading: "おもしろい", kanjiReading: "しろ" }
    ]
},
{
    id: "81", kanji: "数", meaning: "number, strength, fate",
    vocab: [
        { word: "数", meaning: "number", reading: "かず", kanjiReading: "かず" },
        { word: "数学", meaning: "mathematics", reading: "すうがく", kanjiReading: "すう" },
        { word: "数字", meaning: "numeral", reading: "すうじ", kanjiReading: "すう" }
    ]
},
{
    id: "82", kanji: "多", meaning: "many, frequent, much",
    vocab: [
        { word: "多い", meaning: "many", reading: "おおい", kanjiReading: "おお" },
        { word: "多分", meaning: "maybe", reading: "たぶん", kanjiReading: "た" },
        { word: "多忙", meaning: "busy", reading: "たぼう", kanjiReading: "た" }
    ]
},
{
    id: "83", kanji: "少", meaning: "few, little",
    vocab: [
        { word: "少し", meaning: "a little", reading: "すこし", kanjiReading: "すこ" },
        { word: "少女", meaning: "girl", reading: "しょうじょ", kanjiReading: "しょう" },
        { word: "少年", meaning: "boy", reading: "しょうねん", kanjiReading: "しょう" }
    ]
},
{
    id: "84", kanji: "万", meaning: "ten thousand, 10,000",
    vocab: [
        { word: "十万", meaning: "one hundred thousand", reading: "じゅうまん", kanjiReading: "まん" },
        { word: "一万", meaning: "ten thousand", reading: "いちまん", kanjiReading: "まん" },
        { word: "百万", meaning: "million", reading: "ひゃくまん", kanjiReading: "まん" }
    ]
},
{
    id: "85", kanji: "半", meaning: "half, middle, semi-",
    vocab: [
        { word: "半分", meaning: "half", reading: "はんぶん", kanjiReading: "はん" },
        { word: "二時半", meaning: "two thirty", reading: "にじはんん", kanjiReading: "はん" },
        { word: "半額", meaning: "half price", reading: "はんがく", kanjiReading: "はん" }
    ]
},
{
    id: "86", kanji: "形", meaning: "shape, form, style",
    vocab: [
        { word: "形", meaning: "shape", reading: "かたち", kanjiReading: "かたち" },
        { word: "人形", meaning: "doll", reading: "にんぎょう", kanjiReading: "ぎょう" },
        { word: "活用形", meaning: "conjugated form", reading: "かつようけい", kanjiReading: "けい" }
    ]
},
{
    id: "87", kanji: "太", meaning: "plump, thick, big around",
    vocab: [
        { word: "太い", meaning: "fat", reading: "ふとい", kanjiReading: "ふと" },
        { word: "太陽", meaning: "sun", reading: "たいよう", kanjiReading: "たい" },
        { word: "太鼓", meaning: "drum", reading: "たいこ", kanjiReading: "たい" }
    ]
},
{
    id: "88", kanji: "細", meaning: "dainty, get thin, taper",
    vocab: [
        { word: "詳細", meaning: "details", reading: "しょうさい", kanjiReading: "さい" },
        { word: "細い", meaning: "thin", reading: "ほそい", kanjiReading: "ほそ" },
        { word: "細かい", meaning: "detailed", reading: "こまかい", kanjiReading: "こま" }
    ]
},
{
    id: "89", kanji: "広", meaning: "wide, broad, spacious",
    vocab: [
        { word: "広い", meaning: "wide", reading: "ひろい", kanjiReading: "ひろ" },
        { word: "広げる", meaning: "to spread something", reading: "ひろげる", kanjiReading: "ひろ" },
        { word: "広告", meaning: "advertisement", reading: "こうこく", kanjiReading: "こう" }
    ]
},
{
    id: "90", kanji: "長", meaning: "long, leader, superior",
    vocab: [
        { word: "長い", meaning: "long", reading: "ながい", kanjiReading: "なが" },
        { word: "社長", meaning: "company president", reading: "しゃちょう", kanjiReading: "ちょう" },
        { word: "長靴", meaning: "rain boots", reading: "ながぐつ", kanjiReading: "なが" }
    ]
},
{
    id: "91", kanji: "点", meaning: "spot, point, mark",
    vocab: [
        { word: "点", meaning: "point", reading: "てん", kanjiReading: "てん" },
        { word: "欠点", meaning: "shortcoming", reading: "けってん", kanjiReading: "てん" },
        { word: "点ける", meaning: "to turn something on", reading: "つける", kanjiReading: "つ" }
    ]
},
{
    id: "92", kanji: "丸", meaning: "round, full (month), perfection",
    vocab: [
        { word: "丸", meaning: "circle", reading: "まる", kanjiReading: "まる" },
        { word: "丸い", meaning: "circular", reading: "まるい", kanjiReading: "まる" },
        { word: "弾丸", meaning: "bullet", reading: "だんがん", kanjiReading: "がん" }
    ]
},
{
    id: "93", kanji: "交", meaning: "mingle, mixing, association",
    vocab: [
        { word: "交ぜる", meaning: "to mix something", reading: "まぜる", kanjiReading: "ま" },
        { word: "外交", meaning: "diplomacy", reading: "がいこう", kanjiReading: "こう" },
        { word: "交通", meaning: "traffic", reading: "こうつう", kanjiReading: "こう" }
    ]
},
{
    id: "94", kanji: "光", meaning: "ray, light",
    vocab: [
        { word: "光", meaning: "light", reading: "ひかり", kanjiReading: "ひかり" },
        { word: "にっこう", meaning: "sunlight", reading: "にっこう", kanjiReading: "こう" },
        { word: "光る", meaning: "to shine", reading: "ひかる", kanjiReading: "ひか" }
    ]
},
{
    id: "95", kanji: "角", meaning: "angle, corner, square",
    vocab: [
        { word: "角", meaning: "corner", reading: "かど", kanjiReading: "かど" },
        { word: "四角", meaning: "square", reading: "しかく", kanjiReading: "かく" },
        { word: "三角", meaning: "triangle", reading: "さんかく", kanjiReading: "かっく" }
    ]
},
{
    id: "96", kanji: "計", meaning: "plot, plan, scheme",
    vocab: [
        { word: "計算", meaning: "calculation", reading: "けいさん", kanjiReading: "けい" },
        { word: "計画", meaning: "plan", reading: "けいかく", kanjiReading: "けい" },
        { word: "合計", meaning: "total", reading: "ごうけい", kanjiReading: "けい" }
    ]
},
{
    id: "97", kanji: "直", meaning: "straightaway, honesty, frankness",
    vocab: [
        { word: "直進", meaning: "going straight ahead", reading: "ちょくしん", kanjiReading: "ちょく" },
        { word: "正直", meaning: "honest", reading: "しょうじき", kanjiReading: "じき" },
        { word: "直す", meaning: "to fix", reading: "なおす", kanjiReading: "なお" }
    ]
},
{
    id: "98", kanji: "線", meaning: "line, track",
    vocab: [
        { word: "曲線", meaning: "curve", reading: "きょくせん", kanjiReading: "せん" },
        { word: "線路", meaning: "railroad track", reading: "せんろ", kanjiReading: "せん" },
        { word: "新幹線", meaning: "bullet train", reading: "しんかんせん", kanjiReading: "せん" }
    ]
},
{
    id: "99", kanji: "矢", meaning: "dart, arrow",
    vocab: [
        { word: "矢", meaning: "arrow", reading: "や", kanjiReading: "や" },
        { word: "弓矢", meaning: "bow and arrow", reading: "ゆみや", kanjiReading: "や" },
        { word: "矢印", meaning: "arrow", reading: "やじるし", kanjiReading: "や" }
    ]
},
{
    id: "100", kanji: "弱", meaning: "weak, frail",
    vocab: [
        { word: "弱い", meaning: "weak", reading: "よわい", kanjiReading: "よわ" },
        { word: "弱点", meaning: "weak point", reading: "じゃくてん", kanjiReading: "じゃく" },
        { word: "弱虫", meaning: "weakling", reading: "よわむし", kanjiReading: "よわ" }
    ]
},
{
    id: "101", kanji: "強", meaning: "strong",
    vocab: [
        { word: "強い", meaning: "strong", reading: "つよい", kanjiReading: "つよ" },
        { word: "協力", meaning: "strong", reading: "きょうりょく", kanjiReading: "きょう" },
        { word: "強調", meaning: "emphasis", reading: "きょうちょう", kanjiReading: "きょう" }
    ]
},
{
    id: "102", kanji: "高", meaning: "tall, high, expensive",
    vocab: [
        { word: "高い", meaning: "tall", reading: "たかい", kanjiReading: "たか" },
        { word: "高校", meaning: "high school", reading: "こうこう", kanjiReading: "こう" },
        { word: "高度", meaning: "altitude", reading: "こうど", kanjiReading: "こう" }
    ]
},
{
    id: "103", kanji: "同", meaning: "same, agree, equal",
    vocab: [
        { word: "同じ", meaning: "same", reading: "おなじ", kanjiReading: "おな" },
        { word: "同日", meaning: "same day", reading: "どうじつ", kanjiReading: "どう" },
        { word: "同時", meaning: "same time", reading: "どうじ", kanjiReading: "どう" }
    ]
},
{
    id: "194", kanji: "親", meaning: "parent, intimacy, relative",
    vocab: [
        { word: "親しい", meaning: "intimate", reading: "したしい", kanjiReading: "した" },
        { word: "親友", meaning: "close friend", reading: "しんゆう", kanjiReading: "しん" },
        { word: "親切", meaning: "kind", reading: "しんせつ", kanjiReading: "しん" }
    ]
},
{
    id: "195", kanji: "母", meaning: "mother",
    vocab: [
        { word: "母", meaning: "mother", reading: "はは", kanjiReading: "はは" },
        { word: "お母さん", meaning: "mother", reading: "おかあさん", kanjiReading: "かあ" },
        { word: "祖母", meaning: "grandmother", reading: "そぼ", kanjiReading: "ぼ" }
    ]
},
{
    id: "106", kanji: "父", meaning: "father",
    vocab: [
        { word: "父", meaning: "father", reading: "ちち", kanjiReading: "ちち" },
        { word: "お父さん", meaning: "father", reading: "おとうさん", kanjiReading: "とう" },
        { word: "祖父", meaning: "grandfather", reading: "そふ", kanjiReading: "ふ" }
    ]
},
{
    id: "107", kanji: "姉", meaning: "elder sister",
    vocab: [
        { word: "姉", meaning: "older sister", reading: "あね", kanjiReading: "あね" },
        { word: "お姉さん", meaning: "older sister", reading: "おねえさん", kanjiReading: "ねえ" },
        { word: "姉妹", meaning: "sisters", reading: "しまい", kanjiReading: "しまい" }
    ]
},
{
    id: "108", kanji: "兄", meaning: "elder brother, big brother",
    vocab: [
        { word: "兄", meaning: "older brother", reading: "あに", kanjiReading: "あに" },
        { word: "お兄さん", meaning: "older brother", reading: "おにいさん", kanjiReading: "にい" },
        { word: "従兄弟", meaning: "cousin", reading: "いとこ", kanjiReading: "いとこ" }
    ]
},
{
    id: "109", kanji: "弟", meaning: "younger brother, faithful service to elders",
    vocab: [
        { word: "弟", meaning: "younger brother", reading: "おとうと", kanjiReading: "おとうと" },
        { word: "兄弟", meaning: "brothers", reading: "きょうだい", kanjiReading: "だい" },
        { word: "弟子", meaning: "pupil", reading: "でし", kanjiReading: "で" }
    ]
},
{
    id: "110", kanji: "妹", meaning: "younger sister",
    vocab: [
        { word: "妹", meaning: "younger sister", reading: "いもうと", kanjiReading: "いもうと" },
        { word: "姉妹", meaning: "sisters", reading: "しまい", kanjiReading: "まい" },
        { word: "義妹", meaning: "sister-in-law", reading: "ぎまい", kanjiReading: "まい" }
    ]
},
{
    id: "111", kanji: "自", meaning: "oneself",
    vocab: [
        { word: "自立", meaning: "independence", reading: "じりつ", kanjiReading: "じ" },
        { word: "自分", meaning: "oneself", reading: "じぶん", kanjiReading: "じ" },
        { word: "自由", meaning: "freedom", reading: "じゆう", kanjiReading: "じ" }
    ]
},
{
    id: "112", kanji: "友", meaning: "friend",
    vocab: [
        { word: "友人", meaning: "friend", reading: "ゆうじん", kanjiReading: "ゆう" },
        { word: "親友", meaning: "close friend", reading: "しんゆう", kanjiReading: "ゆう" },
        { word: "友達", meaning: "friend", reading: "ともだち", kanjiReading: "とも" }
    ]
},
{
    id: "113", kanji: "体", meaning: "body, substance, object",
    vocab: [
        { word: "体", meaning: "body", reading: "からだ", kanjiReading: "からだ" },
        { word: "大体", meaning: "generally", reading: "だいたい", kanjiReading: "たい" },
        { word: "体内", meaning: "inside the body", reading: "たいない", kanjiReading: "たい" }
    ]
},
{
    id: "114", kanji: "毛", meaning: "fur, hair, feather",
    vocab: [
        { word: "毛", meaning: "hair, fur", reading: "け", kanjiReading: "け" },
        { word: "毛虫", meaning: "caterpillar", reading: "けむし", kanjiReading: "け" },
        { word: "羊毛", meaning: "wool", reading: "ようもう", kanjiReading: "もう" }
    ]
},
{
    id: "115", kanji: "頭", meaning: "head, counter for large animals",
    vocab: [
        { word: "頭", meaning: "head", reading: "あたま", kanjiReading: "あたま" },
        { word: "頭部", meaning: "head", reading: "とうぶ", kanjiReading: "とう" },
        { word: "頭痛", meaning: "headache", reading: "ずつう", kanjiReading: "ず" }
    ]
},
{
    id: "116", kanji: "顔", meaning: "face, expression",
    vocab: [
        { word: "顔", meaning: "face", reading: "かお", kanjiReading: "かお" },
        { word: "笑顔", meaning: "smile", reading: "えがお", kanjiReading: "がお" },
        { word: "顔面", meaning: "face of a person", reading: "がんめん", kanjiReading: "がん" }
    ]
},
{
    id: "117", kanji: "首", meaning: "neck, counter for songs and poems",
    vocab: [
        { word: "首", meaning: "neck", reading: "くび", kanjiReading: "くび" },
        { word: "足首", meaning: "ankle", reading: "あしくび", kanjiReading: "くび" },
        { word: "手首", meaning: "wrist", reading: "てくび", kanjiReading: "くび" }
    ]
},
{
    id: "118", kanji: "心", meaning: "heart, mind, spirit",
    vocab: [
        { word: "心", meaning: "heart", reading: "こころ", kanjiReading: "こころ" },
        { word: "安心", meaning: "relief", reading: "あんしん", kanjiReading: "しん" },
        { word: "心理", meaning: "mental state", reading: "しんり", kanjiReading: "しん" }
    ]
},
{
    id: "119", kanji: "時", meaning: "time, hour",
    vocab: [
        { word: "一時", meaning: "one o'clock", reading: "いちじ", kanjiReading: "じ" },
        { word: "時代", meaning: "period", reading: "じだい", kanjiReading: "じ" },
        { word: "時間", meaning: "time", reading: "じかん", kanjiReading: "じ" }
    ]
},
{
    id: "120", kanji: "曜", meaning: "weekday",
    vocab: [
        { word: "金曜日", meaning: "Friday", reading: "きんようび", kanjiReading: "よう" },
        { word: "月曜日", meaning: "Monday", reading: "げつようび", kanjiReading: "よう" },
        { word: "土曜日", meaning: "Saturday", reading: "どようび", kanjiReading: "よう" }
    ]
},
{
    id: "121", kanji: "朝", meaning: "morning, dynasty, regime",
    vocab: [
        { word: "朝ごはん", meaning: "breakfast", reading: "あさごはん", kanjiReading: "あさ" },
        { word: "毎朝", meaning: "every morning", reading: "まいあさ", kanjiReading: "あさ" },
        { word: "今朝", meaning: "this morning", reading: "けさ", kanjiReading: "さ" }
    ]
},
{
    id: "122", kanji: "昼", meaning: "daytime, noon",
    vocab: [
        { word: "昼ご飯", meaning: "lunch", reading: "ひるごはん", kanjiReading: "ひる" },
        { word: "昼休み", meaning: "lunch break", reading: "ひるやすみ", kanjiReading: "ひる" },
        { word: "昼寝", meaning: "nap", reading: "ひるね", kanjiReading: "ひる" }
    ]
},
{
    id: "123", kanji: "夜", meaning: "night, evening",
    vocab: [
        { word: "夜", meaning: "night", reading: "よる", kanjiReading: "よる" },
        { word: "今夜", meaning: "tonight", reading: "こんや", kanjiReading: "や" },
        { word: "夜中", meaning: "middle of the night", reading: "よなか", kanjiReading: "よ" }
    ]
},
{
    id: "124", kanji: "分", meaning: "part, minute of time, segment",
    vocab: [
        { word: "半分", meaning: "half", reading: "はんぶん", kanjiReading: "ぶん" },
        { word: "気分", meaning: "mood", reading: "きぶん", kanjiReading: "ぶん" },
        { word: "多分", meaning: "maybe", reading: "たぶん", kanjiReading: "ぶん" }
    ]
},
{
    id: "125", kanji: "週", meaning: "week",
    vocab: [
        { word: "先週", meaning: "last week", reading: "せんしゅう", kanjiReading: "しゅう" },
        { word: "来週", meaning: "next week", reading: "らいしゅう", kanjiReading: "しゅう" },
        { word: "今週", meaning: "this week", reading: "こんしゅう", kanjiReading: "しゅう" }
    ]
},
{
    id: "126", kanji: "春", meaning: "springtime, spring (season)",
    vocab: [
        { word: "春", meaning: "spring", reading: "はる", kanjiReading: "はる" },
        { word: "春休み", meaning: "spring break", reading: "はるやすみ", kanjiReading: "はる" },
        { word: "青春", meaning: "youth", reading: "せいしゅん", kanjiReading: "しゅん" }
    ]
},
{
    id: "127", kanji: "夏", meaning: "summer",
    vocab: [
        { word: "夏", meaning: "summer", reading: "なつ", kanjiReading: "なつ" },
        { word: "夏休み", meaning: "summer vacation", reading: "なつやすみ", kanjiReading: "なつ" },
        { word: "夏至", meaning: "summer solstice", reading: "げし", kanjiReading: "げ" }
    ]
},
{
    id: "128", kanji: "秋", meaning: "autumn",
    vocab: [
        { word: "秋", meaning: "autumn", reading: "あき", kanjiReading: "あき" },
        { word: "秋風", meaning: "autumn breeze", reading: "あきかぜ", kanjiReading: "あき" },
        { word: "今秋", meaning: "this autumn", reading: "こんしゅう", kanjiReading: "しゅう" }
    ]
},
{
    id: "129", kanji: "冬", meaning: "winter",
    vocab: [
        { word: "冬", meaning: "winter", reading: "ふゆ", kanjiReading: "ふゆ" },
        { word: "冬休み", meaning: "winter holiday", reading: "ふゆやすみ", kanjiReading: "ふゆ" },
        { word: "冬至", meaning: "winter solstice", reading: "とうじ", kanjiReading: "とう" }
    ]
},
{
    id: "130", kanji: "今", meaning: "now",
    vocab: [
        { word: "今", meaning: "now", reading: "いま", kanjiReading: "いま" },
        { word: "今月", meaning: "this month", reading: "こんげつ", kanjiReading: "こん" },
        { word: "今日", meaning: "today", reading: "きょう", kanjiReading: "きょう" }
    ]
},
{
    id: "131", kanji: "新", meaning: "new",
    vocab: [
        { word: "新しい", meaning: "new", reading: "あたらしい", kanjiReading: "あたら" },
        { word: "新年", meaning: "new year", reading: "しんねん", kanjiReading: "しん" },
        { word: "新聞", meaning: "newspaper", reading: "しんぶん", kanjiReading: "しん" }
    ]
},
{
    id: "132", kanji: "古", meaning: "old",
    vocab: [
        { word: "古い", meaning: "old", reading: "ふるい", kanjiReading: "ふる" },
        { word: "中古", meaning: "secondhand", reading: "ちゅうこ", kanjiReading: "こ" },
        { word: "古来", meaning: "from ancient times", reading: "こらい", kanjiReading: "こ" }
    ]
},
{
    id: "133", kanji: "間", meaning: "interval, spcae",
    vocab: [
        { word: "間もなく", meaning: "soon", reading: "まもなく", kanjiReading: "ま" },
        { word: "人間", meaning: "human being", reading: "にんげん", kanjiReading: "げん" },
        { word: "時間", meaning: "time", reading: "じかん", kanjiReading: "かん" }
    ]
},
{
    id: "134", kanji: "方", meaning: "direction, person, alternative",
    vocab: [
        { word: "仕方", meaning: "method", reading: "しかた", kanjiReading: "かた" },
        { word: "見方", meaning: "way of seeing", reading: "みかた", kanjiReading: "かた" },
        { word: "夕方", meaning: "early evening", reading: "ゆうがた", kanjiReading: "がた" }
    ]
},
{
    id: "135", kanji: "北", meaning: "north",
    vocab: [
        { word: "北", meaning: "north", reading: "きた", kanjiReading: "きた" },
        { word: "北口", meaning: "north exit", reading: "きたぐち", kanjiReading: "きた" },
        { word: "北アメリカ", meaning: "North America", reading: "きたあめりか", kanjiReading: "きた" }
    ]
},
{
    id: "136", kanji: "南", meaning: "south",
    vocab: [
        { word: "南", meaning: "south", reading: "みなみ", kanjiReading: "みなみ" },
        { word: "南口", meaning: "south exit", reading: "みなみぐち", kanjiReading: "みなみ" },
        { word: "南アフリカ", meaning: "South Africa", reading: "みなみあふりか", kanjiReading: "みなみ" }
    ]
},
{
    id: "137", kanji: "東", meaning: "east",
    vocab: [
        { word: "東", meaning: "east", reading: "ひがし", kanjiReading: "ひがし" },
        { word: "東口", meaning: "east exit", reading: "ひがしぐち", kanjiReading: "ひがし" },
        { word: "東アジア", meaning: "East Asia", reading: "ひがしあじあ", kanjiReading: "ひがし" }
    ]
},
{
    id: "138", kanji: "西", meaning: "west, Spain",
    vocab: [
        { word: "西", meaning: "west", reading: "にし", kanjiReading: "にし" },
        { word: "西口", meaning: "west exit", reading: "にしぐち", kanjiReading: "にし" },
        { word: "西ヨーロッパ", meaning: "Western Europe", reading: "にしよーろっぱ", kanjiReading: "にし" }
    ]
},
{
    id: "139", kanji: "遠", meaning: "distant, far",
    vocab: [
        { word: "遠い", meaning: "far", reading: "とおい", kanjiReading: "とお" },
        { word: "遠足", meaning: "excursion", reading: "えんそく", kanjiReading: "えん" },
        { word: "遠視", meaning: "farsightedness", reading: "えんし", kanjiReading: "えん" }
    ]
},
{
    id: "140", kanji: "近", meaning: "near, early, akin",
    vocab: [
        { word: "近い", meaning: "close", reading: "ちかい", kanjiReading: "ちか" },
        { word: "近年", meaning: "recent years", reading: "きんねん", kanjiReading: "きん" },
        { word: "近日", meaning: "soon", reading: "きんじつ", kanjiReading: "きん" }
    ]
},
{
    id: "141", kanji: "前", meaning: "in front, before",
    vocab: [
        { word: "前", meaning: "front", reading: "まえ", kanjiReading: "まえ" },
        { word: "お前", meaning: "you (rude)", reading: "おまえ", kanjiReading: "まえ" },
        { word: "午前", meaning: "AM", reading: "ごぜん", kanjiReading: "ぜん" }
    ]
},
{
    id: "142", kanji: "後", meaning: "behind, back, later",
    vocab: [
        { word: "後で", meaning: "after", reading: "あとで", kanjiReading: "あと" },
        { word: "後ろ", meaning: "behind", reading: "うしろ", kanjiReading: "うし" },
        { word: "午後", meaning: "PM", reading: "ごご", kanjiReading: "ご" }
    ]
},
{
    id: "143", kanji: "内", meaning: "inside, within, between",
    vocab: [
        { word: "内", meaning: "inside", reading: "うち", kanjiReading: "うち" },
        { word: "年内", meaning: "by the end of the year", reading: "ねんない", kanjiReading: "ない" },
        { word: "車内", meaning: "inside the car", reading: "しゃない", kanjiReading: "ない" }
    ]
},
{
    id: "144", kanji: "外", meaning: "outside",
    vocab: [
        { word: "外", meaning: "outside", reading: "そと", kanjiReading: "そと" },
        { word: "外人", meaning: "foreigner", reading: "がいじん", kanjiReading: "がい" },
        { word: "外交", meaning: "diplomacy", reading: "がいこう", kanjiReading: "がい" }
    ]
},
{
    id: "145", kanji: "場", meaning: "location, place",
    vocab: [
        { word: "入場", meaning: "entrance", reading: "にゅうじょう", kanjiReading: "じょう" },
        { word: "場所", meaning: "place", reading: "ばしょ", kanjiReading: "ば" },
        { word: "立場", meaning: "standpoint", reading: "たちば", kanjiReading: "ば" }
    ]
},
{
    id: "146", kanji: "地", meaning: "ground, earth",
    vocab: [
        { word: "土地", meaning: "land", reading: "とち", kanjiReading: "ち" },
        { word: "地図", meaning: "map", reading: "ちず", kanjiReading: "ち" },
        { word: "地下", meaning: "underground", reading: "ちか", kanjiReading: "ち" }
    ]
},
{
    id: "147", kanji: "国", meaning: "country",
    vocab: [
        { word: "中国", meaning: "China", reading: "ちゅうごく", kanjiReading: "ごく" },
        { word: "外国", meaning: "foreign country", reading: "がいこく", kanjiReading: "こく" },
        { word: "外国人", meaning: "foreign person", reading: "がいこくじん", kanjiReading: "こく" }
    ]
},
{
    id: "148", kanji: "園", meaning: "park, garden, yard",
    vocab: [
        { word: "公園", meaning: "public park", reading: "こうえん", kanjiReading: "えん" },
        { word: "動物園", meaning: "zoo", reading: "どうぶつえん", kanjiReading: "えん" },
        { word: "遊園地", meaning: "amusement park", reading: "ゆうえんち", kanjiReading: "えん" }
    ]
},
{
    id: "149", kanji: "谷", meaning: "valley",
    vocab: [
        { word: "谷", meaning: "valley", reading: "たに", kanjiReading: "たに" },
        { word: "峡谷", meaning: "ravine", reading: "きょうこく", kanjiReading: "こく" },
        { word: "渓谷", meaning: "valley", reading: "けいこく", kanjiReading: "こく" }
    ]
},
{
    id: "150", kanji: "野", meaning: "plains, field, rustic",
    vocab: [
        { word: "野菜", meaning: "vegetable", reading: "やさい", kanjiReading: "や" },
        { word: "野球", meaning: "baseball", reading: "やきゅう", kanjiReading: "や" },
        { word: "野獣", meaning: "wild beast", reading: "やじゅう", kanjiReading: "や" }
    ]
},
{
    id: "151", kanji: "原", meaning: "meadow, original, primitive",
    vocab: [
        { word: "原子", meaning: "atom", reading: "げんし", kanjiReading: "げん" },
        { word: "原因", meaning: "cause", reading: "げんいん", kanjiReading: "げん" },
        { word: "原型", meaning: "prototype", reading: "げんけい", kanjiReading: "げん" }
    ]
},
{
    id: "152", kanji: "里", meaning: "ri, village, parent's home",
    vocab: [
        { word: "里", meaning: "hometown", reading: "さと", kanjiReading: "さと" },
        { word: "人里", meaning: "human habitation", reading: "ひとざと", kanjiReading: "ざと" },
        { word: "郷里", meaning: "hometown", reading: "きょうり", kanjiReading: "り" }
    ]
},
{
    id: "153", kanji: "市", meaning: "market, city, town",
    vocab: [
        { word: "市", meaning: "city", reading: "し", kanjiReading: "し" },
        { word: "市立", meaning: "municipal", reading: "しりつ", kanjiReading: "し" },
        { word: "都市", meaning: "city", reading: "とし", kanjiReading: "し" }
    ]
},
{
    id: "154", kanji: "京", meaning: "capital",
    vocab: [
        { word: "東京", meaning: "Tokyo", reading: "とうきょう", kanjiReading: "きょう" },
        { word: "京都", meaning: "Kyoto", reading: "きょうと", kanjiReading: "きょう" },
        { word: "東京弁", meaning: "Tokyo Dialect", reading: "とうきょうべん", kanjiReading: "きょう" }
    ]
},
{
    id: "155", kanji: "風", meaning: "wind, air, style",
    vocab: [
        { word: "風", meaning: "wind", reading: "かぜ", kanjiReading: "かぜ" },
        { word: "風船", meaning: "balloon", reading: "ふうせん", kanjiReading: "ふう" },
        { word: "台風", meaning: "typhoon", reading: "たいふう", kanjiReading: "ふう" }
    ]
},
{
    id: "156", kanji: "雪", meaning: "snow",
    vocab: [
        { word: "雪", meaning: "snow", reading: "ゆき", kanjiReading: "ゆき" },
        { word: "雪国", meaning: "snow country, snowy region", reading: "ゆきぐに", kanjiReading: "ゆき" },
        { word: "雪上", meaning: "on the snow", reading: "せつじょう", kanjiReading: "せつ" }
    ]
},
{
    id: "157", kanji: "雲", meaning: "cloud",
    vocab: [
        { word: "雲", meaning: "cloud", reading: "くも", kanjiReading: "くも" },
        { word: "白雲", meaning: "white clouds", reading: "しらくも", kanjiReading: "くも" },
        { word: "星雲", meaning: "nebula, galaxy", reading: "せいうん", kanjiReading: "うん" }
    ]
},
{
    id: "158", kanji: "池", meaning: "pond, cistern, pool",
    vocab: [
        { word: "池", meaning: "pond", reading: "いけ", kanjiReading: "いけ" },
        { word: "電池", meaning: "battery", reading: "でんち", kanjiReading: "ち" },
        { word: "人工池", meaning: "artificial pool", reading: "じんこういけ", kanjiReading: "いけ" }
    ]
},
{
    id: "159", kanji: "海", meaning: "sea, ocean",
    vocab: [
        { word: "海", meaning: "ocean", reading: "うみ", kanjiReading: "うみ" },
        { word: "海外", meaning: "overseas", reading: "かいがい", kanjiReading: "かい" },
        { word: "海岸", meaning: "seashore", reading: "かいがん", kanjiReading: "かい" }
    ]
},
{
    id: "160", kanji: "岩", meaning: "boulder, rock, cliff",
    vocab: [
        { word: "岩", meaning: "boulder", reading: "いわ", kanjiReading: "いわ" },
        { word: "溶岩", meaning: "lava", reading: "ようがん", kanjiReading: "がん" },
        { word: "岩礁", meaning: "reef", reading: "がんしょう", kanjiReading: "がん" }
    ]
},
{
    id: "161", kanji: "星", meaning: "star, spot, dot",
    vocab: [
        { word: "水星", meaning: "Mercury", reading: "すいせい", kanjiReading: "せい" },
        { word: "土星", meaning: "Saturn", reading: "どせい", kanjiReading: "せい" },
        { word: "金星", meaning: "Venus", reading: "きんせい", kanjiReading: "せい" }
    ]
},
{
    id: "162", kanji: "室", meaning: "room, apartment, chamber",
    vocab: [
        { word: "教室", meaning: "classroom", reading: "きょうしつ", kanjiReading: "しつ" },
        { word: "客室", meaning: "guest room", reading: "きゃくしつ", kanjiReading: "しつ" },
        { word: "和室", meaning: "Japanese style room", reading: "わしつ", kanjiReading: "しつ" }
    ]
},
{
    id: "163", kanji: "戸", meaning: "door, counter for houses",
    vocab: [
        { word: "戸", meaning: "door", reading: "と", kanjiReading: "と" },
        { word: "戸口", meaning: "doorway", reading: "どぐち", kanjiReading: "ど" },
        { word: "井戸", meaning: "well", reading: "いど", kanjiReading: "ど" }
    ]
},
{
    id: "164", kanji: "家", meaning: "house, home, family",
    vocab: [
        { word: "家", meaning: "house", reading: "いえ", kanjiReading: "いえ" },
        { word: "家具", meaning: "furniture", reading: "かぐ", kanjiReading: "か" },
        { word: "家族", meaning: "family", reading: "かぞく", kanjiReading: "か" }
    ]
},
{
    id: "165", kanji: "寺", meaning: "Buddhist temple",
    vocab: [
        { word: "寺", meaning: "temple", reading: "てら", kanjiReading: "てら" },
        { word: "禅寺", meaning: "zen temple", reading: "ぜんでら", kanjiReading: "でら" },
        { word: "古寺", meaning: "old temple", reading: "こじ", kanjiReading: "じ" }
    ]
},
{
    id: "166", kanji: "通", meaning: "traffic, pass through, avenue",
    vocab: [
        { word: "交通", meaning: "traffic", reading: "こうつう", kanjiReading: "つう" },
        { word: "通る", meaning: "to pass through", reading: "とおる", kanjiReading: "とお" },
        { word: "通り", meaning: "avenue", reading: "とおり", kanjiReading: "とお" }
    ]
},
{
    id: "167", kanji: "門", meaning: "gate, counter for cannons",
    vocab: [
        { word: "門", meaning: "gate", reading: "もん", kanjiReading: "もん" },
        { word: "入門", meaning: "admission", reading: "にゅうもん", kanjiReading: "もん" },
        { word: "専門", meaning: "specialty", reading: "せんもん", kanjiReading: "もん" }
    ]
},
{
    id: "168", kanji: "道", meaning: "road-way, street, district",
    vocab: [
        { word: "道", meaning: "road", reading: "みち", kanjiReading: "みち" },
        { word: "歩道", meaning: "sidewalk", reading: "ほどう", kanjiReading: "どう" },
        { word: "水道", meaning: "water supply", reading: "すいどう", kanjiReading: "どう" }
    ]
},
{
    id: "169", kanji: "話", meaning: "tale, talk",
    vocab: [
        { word: "会話", meaning: "conversation", reading: "かいわ", kanjiReading: "わ" },
        { word: "電話", meaning: "telephone", reading: "でんわ", kanjiReading: "わ" },
        { word: "話す", meaning: "to speak", reading: "はなす", kanjiReading: "はな" }
    ]
},
{
    id: "170", kanji: "言", meaning: "say, word",
    vocab: [
        { word: "言う", meaning: "to say", reading: "いう", kanjiReading: "い" },
        { word: "方言", meaning: "dialect", reading: "ほうげん", kanjiReading: "げん" },
        { word: "助言", meaning: "advice", reading: "じょげん", kanjiReading: "げん" }
    ]
},
{
    id: "171", kanji: "答", meaning: "solution, answer",
    vocab: [
        { word: "答え", meaning: "answer", reading: "こたえ", kanjiReading: "こた" },
        { word: "答える", meaning: "to answer", reading: "こたえる", kanjiReading: "こた" },
        { word: "回答", meaning: "solving", reading: "かいとう", kanjiReading: "とう" }
    ]
},
{
    id: "172", kanji: "声", meaning: "voice",
    vocab: [
        { word: "声", meaning: "voice", reading: "こえ", kanjiReading: "こえ" },
        { word: "大声", meaning: "loud voice", reading: "おおごえ", kanjiReading: "ごえ" },
        { word: "鳴き声", meaning: "animal cry", reading: "なきごえ", kanjiReading: "ごえ" }
    ]
},
{
    id: "173", kanji: "聞", meaning: "hear, ask, listen",
    vocab: [
        { word: "聞く", meaning: "to hear", reading: "きく", kanjiReading: "き" },
        { word: "新聞", meaning: "newspaper", reading: "しんぶん", kanjiReading: "ぶん" },
        { word: "醜聞", meaning: "scandal", reading: "しゅうぶん", kanjiReading: "ぶん" }
    ]
},
{
    id: "174", kanji: "語", meaning: "word, speech, language",
    vocab: [
        { word: "日本語", meaning: "Japanese language", reading: "にほんご", kanjiReading: "ご" },
        { word: "言語", meaning: "language", reading: "げんご", kanjiReading: "ご" },
        { word: "物語", meaning: "tale", reading: "ものがたり", kanjiReading: "がたり" }
    ]
},
{
    id: "175", kanji: "読", meaning: "read",
    vocab: [
        { word: "読む", meaning: "to read", reading: "よむ", kanjiReading: "よ" },
        { word: "読者", meaning: "reader", reading: "どくしゃ", kanjiReading: "どく" },
        { word: "購読", meaning: "subscription", reading: "こうどく", kanjiReading: "どく" }
    ]
},
{
    id: "176", kanji: "書", meaning: "write",
    vocab: [
        { word: "辞書", meaning: "dictionary", reading: "じしょ", kanjiReading: "しょ" },
        { word: "図書館", meaning: "library", reading: "としょかん", kanjiReading: "しょ" },
        { word: "教科書", meaning: "textbook", reading: "きょうかしょ", kanjiReading: "しょ" }
    ]
},
{
    id: "177", kanji: "記", meaning: "scribe, account, narrative",
    vocab: [
        { word: "日記", meaning: "diary", reading: "にっき", kanjiReading: "き" },
        { word: "記事", meaning: "article", reading: "きじ", kanjiReading: "き" },
        { word: "暗記", meaning: "memorization", reading: "あんき", kanjiReading: "き" }
    ]
},
{
    id: "178", kanji: "紙", meaning: "paper",
    vocab: [
        { word: "紙", meaning: "paper", reading: "かみ", kanjiReading: "かみ" },
        { word: "手紙", meaning: "letter", reading: "てがみ", kanjiReading: "がみ" },
        { word: "壁紙", meaning: "wallpaper", reading: "かべがみ", kanjiReading: "がみ" }
    ]
},
{
    id: "179", kanji: "画", meaning: "brush-stroke, picture",
    vocab: [
        { word: "映画", meaning: "movie", reading: "えいが", kanjiReading: "が" },
        { word: "画像", meaning: "image", reading: "がぞう", kanjiReading: "が" },
        { word: "計画", meaning: "plan", reading: "けいかく", kanjiReading: "かく" }
    ]
},
{
    id: "180", kanji: "絵", meaning: "picture, drawing, painting",
    vocab: [
        { word: "絵", meaning: "picture", reading: "え", kanjiReading: "え" },
        { word: "絵文字", meaning: "emoji", reading: "えもじ", kanjiReading: "え" },
        { word: "墨絵", meaning: "ink painting", reading: "すみえ", kanjiReading: "え" }
    ]
},
{
    id: "181", kanji: "図", meaning: "map, drawing, plan",
    vocab: [
        { word: "地図", meaning: "map", reading: "ちず", kanjiReading: "ず" },
        { word: "図書館", meaning: "library", reading: "としょかん", kanjiReading: "と" },
        { word: "図説", meaning: "illustration", reading: "ずせつ", kanjiReading: "ず" }
    ]
},
{
    id: "182", kanji: "工", meaning: "craft, construction, katakana e radical (no. 48)",
    vocab: [
        { word: "人工", meaning: "artificial", reading: "じんこう", kanjiReading: "こう" },
        { word: "工学", meaning: "engineering", reading: "こうがく", kanjiReading: "こう" },
        { word: "工作", meaning: "handicraft", reading: "こうさく", kanjiReading: "こう" }
    ]
},
{
    id: "183", kanji: "教", meaning: "teach, faith, doctrine",
    vocab: [
        { word: "教える", meaning: "to teach", reading: "おしえる", kanjiReading: "おし" },
        { word: "教室", meaning: "classroom", reading: "きょうしつ", kanjiReading: "きょう" },
        { word: "教育", meaning: "education", reading: "きょういく", kanjiReading: "きょう" }
    ]
}
];
