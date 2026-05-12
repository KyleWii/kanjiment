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
}
];
