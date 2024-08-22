// type GenreCollection = {
//   [key: string]: string;
//   rice: string;
//   ramen: string;
//   soba: string;
//   pan: string;
// };
// const GENRE_COLLECTION: GenreCollection = {
//   rice: "ご飯",
//   ramen: "ラーメン",
//   soba: "そば",
//   pan: "パン",
// };
// const [rice, ramen, soba, pasta, pan] = ["ご飯物", "ラーメン", "そば", "パン"];

//Scoreは「味」「量」「値段」の順

const GENRE_COLLECTION = [
  /* 0 */ { label: "rice", value: "ご飯", checked: true },
  /* 1 */ { label: "noodle", value: "麺", checked: true },
  /* 2 */ { label: "soba", value: "そば", checked: false },
  /* 3 */ { label: "pan", value: "パン", checked: false },
];

const PRICE_COLLECTION = [
  /* 0 */ { label: "reasonable", value: "リーズナブル", checked: true },
  /* 1 */ { label: "luxury", value: "特別な時に", checked: false },
];

const TIME_COLLECTION = [
  /* 0 */ { label: "currently", value: "現在営業中", checked: true },
  /* 1 */ { label: "lunch", value: "ランチ", checked: false },
  /* 2 */ { label: "dinner", value: "ディナー", checked: false },
];

const List = [
  {
    Name: "でんでん",
    Id: "denden",
    Genre: [0],
    Score: [4, 5, 4],
    Cycle: 6,
    Opened: [1130, 1430, 1730, 2200],
    OpenedDay: [true, true, true, true, true, true, false],
    Map: "でんでん",
    Pay: [true, false, false],
    Parking: [true, true],
  },
  {
    Name: "満月や",
    Id: "mangetsuya",
    Genre: [0],
    Score: [5, 3, 3],
    Cycle: 7,
    Opened: [1130, 1500, 1700, 2200],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "満月や",
    Pay: [true, false, false],
    Parking: [true, true],
  },
  {
    Name: "メーヤウ桐",
    Id: "kirime-yau",
    Genre: [0],
    Score: [4, 5, 3],
    Cycle: 3,
    Opened: [1130, 2100],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "メーヤウ 桐店",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "メーヤウ信大前",
    Id: "shindaime-yau",
    Genre: [0],
    Score: [4, 4, 3],
    Cycle: 1,
    Opened: [1130, 2100],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "メーヤウ 信大前店",
    Pay: [false, false, false],
    Parking: [false, false],
  },
  {
    Name: "麺匠佐蔵",
    Id: "menshosakura",
    Genre: [1],
    Score: [5, 4, 3],
    Cycle: 13,
    Opened: [1130, 1500, 1730, 2200],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "麺匠佐蔵",
    Pay: [true, false, false],
    Parking: [true, false],
  },
  {
    Name: "がったぼうず",
    Id: "gattabozu",
    Genre: [1],
    Score: [5, 4, 3],
    Cycle: 7,
    Opened: [1100, 1500, 1730, 2300],
    OpenedDay: [true, true, true, false, true, true, true],
    Map: "がったぼうず",
    Pay: [true, false, false],
    Parking: [true, true],
  },
  {
    Name: "そらや",
    Id: "soraya",
    Genre: [1],
    Score: [5, 4, 3],
    Cycle: 5,
    Opened: [1100, 1430, 1700, 2100],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "札幌らーめん そらや",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "がねいしゃ",
    Id: "ganeisha",
    Genre: [0],
    Score: [5, 3, 4],
    Cycle: 8,
    Opened: [1130, 1400, 1800, 2200],
    OpenedDay: [false, true, true, true, true, true, false],
    Map: "がねいしゃ",
    Pay: [true, false, false],
    Parking: [false, false],
  },
  {
    Name: "龍華楼",
    Id: "ryukaro",
    Genre: [0, 1],
    Score: [3, 5, 4],
    Cycle: 2,
    Opened: [1100, 1430, 1700, 2300],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "龍華楼",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "麺51",
    Id: "menkoi",
    Genre: [1],
    Score: [4, 5, 4],
    Cycle: 3,
    Opened: [1130, 1430, 1730, 2130],
    OpenedDay: [true, false, true, true, true, true, true],
    Map: "麺51",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "おおぼし桐",
    Id: "kiriooboshi",
    Genre: [1],
    Score: [4, 4, 4],
    Cycle: 3,
    Opened: [1100, 1500, 1730, 2100],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "おおぼし 松本桐店",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "Ecru",
    Id: "ecru",
    Genre: [3],
    Score: [5, 3, 5],
    Cycle: 4,
    Opened: [730, 1800],
    OpenedDay: [false, true, true, true, true, true, false],
    Map: "パン焼き工房エクリュ",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "紅葉",
    Id: "koyo",
    Genre: [0, 1],
    Score: [4, 5, 5],
    Cycle: 8,
    Opened: [1100, 1430, 1700, 2300],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "紅葉",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "潮騒",
    Id: "shiosai",
    Genre: [0],
    Score: [4, 5, 5],
    Cycle: 15,
    Opened: [1130, 1400, 1800, 2130],
    OpenedDay: [true, true, true, true, true, true, false],
    Map: "潮騒",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "どん八",
    Id: "dompachi",
    Genre: [0],
    Score: [5, 4, 4],
    Cycle: 16,
    Opened: [1115, 1500, 1700, 2000],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "海鮮丼どん八 松本駅前本店",
    Pay: [true, true, true],
    Parking: [true, true],
  },
  {
    Name: "河昌",
    Id: "kawasho",
    Genre: [0],
    Score: [5, 4, 4],
    Cycle: 7,
    Opened: [1130, 1330],
    OpenedDay: [true, false, true, true, true, true, true],
    Map: "河昌",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "楽座",
    Id: "rakuza",
    Genre: [3],
    Score: [5, 4, 4],
    Cycle: 8,
    Opened: [1100, 1900],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "らくざ",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "ピカドン",
    Id: "pikadon",
    Genre: [0],
    Score: [5, 4, 4],
    Cycle: 1,
    Opened: [1130, 1400, 1730, 2100],
    OpenedDay: [true, true, true, true, true, true, false],
    Map: "ピカドン",
    Pay: [false, false, false],
    Parking: [true, false],
  },
  {
    Name: "テンホウ",
    Id: "tenho",
    Genre: [0, 1],
    Score: [5, 4, 4],
    Cycle: 2,
    Opened: [1100, 2130],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "テンホウ松本追分店",
    Pay: [true, true, true],
    Parking: [true, true],
  },
  {
    Name: "まんま",
    Id: "mamma",
    Genre: [0],
    Score: [5, 4, 4],
    Cycle: 7,
    Opened: [1100, 1400],
    OpenedDay: [true, true, true, true, true, true, false],
    Map: "まんま 女鳥羽",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "まんぷく亭",
    Id: "mampukutei",
    Genre: [0],
    Score: [4, 3, 3],
    Cycle: 9,
    Opened: [1130, 1430],
    OpenedDay: [false, false, true, true, true, true, true],
    Map: "まんぷく亭 松本",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "ビストロ鬼平",
    Id: "onihei",
    Genre: [1],
    Score: [5, 4, 4],
    Cycle: 8,
    Opened: [1200, 1400, 1800, 2045],
    OpenedDay: [true, false, true, true, true, true, true],
    Map: "ビストロ鬼平",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "鎌倉パスタ",
    Id: "kamakurapasuta",
    Genre: [1],
    Score: [5, 4, 4],
    Cycle: 12,
    Opened: [1100, 2100],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "鎌倉パスタ イオンモール松本店",
    Pay: [false, false, false],
    Parking: [true, true],
  },
  {
    Name: "DOLCE/かつ富",
    Id: "dolce",
    Genre: [0],
    Score: [5, 4, 4],
    Cycle: 7,
    Opened: [1130, 1400, 1800, 2030],
    OpenedDay: [false, false, true, true, true, true, true],
    Map: "DOLCE かつ富",
    Pay: [true, false, false],
    Parking: [true, true],
  },
];

export { List, GENRE_COLLECTION, PRICE_COLLECTION, TIME_COLLECTION };
