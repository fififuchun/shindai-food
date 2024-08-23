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

function changeTime(time: number) {
  const hour: number = Math.floor(time / 100);
  const minute: number = time - Math.floor(time / 100) * 100;

  let minute_string: string = "?";

  if (minute > 59 || minute < 0) minute_string = "?";
  else if (minute < 10) minute_string = "0" + minute;
  else minute_string = minute.toString();

  return hour + ":" + minute_string;
}

// Name:      店名、市内に2店舗以上ある場合支店名(地域名)も書く
// Id:        パス
// Genre:     ご飯物、麺、そば、パン [rice, noodle, soba, pan]
// Score:     [味,量,値段]
// 味:         1:まずい 2:家庭的・生協 3:外食にしては普通 4:チェーン店レベル 5:毎日食べたい 6:最上級
// 量:         1000円でどれくらいの腹を満たせるか、1:50-60 2:60-70 3:70-80 4:80-90 5:90-120
// 値段:       1:2000円以上 2:1500円-2000円 3:1000円-1500円 4:700円-1000円 5:700円以下
//
// Cycle:     自転車で何分か
// Opened:    開店時間(ラストオーダーを閉店時間とする)
// OpenedDay: [月,火,水,木,金,土,日]
// Map:       GoogleMapの検索ワード
// Pay:       [PayPay,クレカ,電子マネー]
// Parking:   [駐車場,駐輪場]
// Coupon:    Twiterへのリンク？？

const List = [
  {
    Name: "でんでん",
    Id: "denden",
    Genre: [0],
    Score: [4, 5, 3],
    Distance: 1000,
    Opened: [1130, 1430, 1730, 2200],
    OpenedDay: [true, true, true, true, true, true, false],
    Map: "でんでん",
    Pay: [true, false, false],
    Parking: [true, true],
    Coupon: "あり",
  },
  {
    Name: "満月や",
    Id: "mangetsuya",
    Genre: [0],
    Score: [4, 4, 3],
    Distance: 1100,
    Opened: [1130, 1500, 1700, 2200],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "満月や",
    Pay: [true, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "メーヤウ桐",
    Id: "meyau_kiri",
    Genre: [0],
    Score: [4, 5, 3],
    Distance: 900,
    Opened: [1130, 2100],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "メーヤウ 桐店",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "メーヤウ信大前",
    Id: "meyau_shindai",
    Genre: [0],
    Score: [4, 4, 4],
    Distance: 350,
    Opened: [1130, 2100],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "メーヤウ 信大前店",
    Pay: [false, false, false],
    Parking: [false, false],
    Coupon: "",
  },
  {
    Name: "麺匠佐蔵",
    Id: "menshosakura",
    Genre: [1],
    Score: [6, 5, 3],
    Distance: 2800,
    Opened: [1130, 1500, 1730, 2200],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "麺匠佐蔵",
    Pay: [true, false, false],
    Parking: [true, false],
    Coupon: "",
  },
  {
    Name: "がったぼうず",
    Id: "gattabozu",
    Genre: [1],
    Score: [5, 5, 4],
    Distance: 1400,
    Opened: [1100, 1500, 1730, 2300],
    OpenedDay: [true, true, true, false, true, true, true],
    Map: "がったぼうず",
    Pay: [true, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "そらや",
    Id: "soraya",
    Genre: [1],
    Score: [5, 4, 3],
    Distance: 1400,
    Opened: [1100, 1430, 1700, 2100],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "札幌らーめん そらや",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "がねいしゃ",
    Id: "ganeisha",
    Genre: [0],
    Score: [5, 3, 4],
    Distance: 1700,
    Opened: [1130, 1400, 1800, 2200],
    OpenedDay: [false, true, true, true, true, true, false],
    Map: "がねいしゃ",
    Pay: [true, false, false],
    Parking: [false, false],
    Coupon: "",
  },
  {
    Name: "龍華楼",
    Id: "ryukaro",
    Genre: [0, 1],
    Score: [3, 5, 4],
    Distance: 650,
    Opened: [1100, 1430, 1700, 2300],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "龍華楼",
    Pay: [true, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "麺51",
    Id: "menkoi",
    Genre: [1],
    Score: [4, 5, 4],
    Distance: 650,
    Opened: [1130, 1430, 1730, 2130],
    OpenedDay: [true, false, true, true, true, true, true],
    Map: "麺51",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "おおぼし桐",
    Id: "oboshi_kiri",
    Genre: [1],
    Score: [4, 4, 4],
    Distance: 900,
    Opened: [1100, 1500, 1730, 2100],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "おおぼし 松本桐店",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "Ecru",
    Id: "ecru",
    Genre: [3],
    Score: [5, 3, 5],
    Distance: 1100,
    Opened: [730, 1800],
    OpenedDay: [false, true, true, true, true, true, false],
    Map: "パン焼き工房エクリュ",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "紅葉",
    Id: "koyo",
    Genre: [0, 1],
    Score: [4, 4, 4],
    Distance: 1600,
    Opened: [1100, 1430, 1700, 2300],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "紅葉",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "潮騒",
    Id: "shiosai",
    Genre: [0],
    Score: [4, 4, 3],
    Distance: 3200,
    Opened: [1130, 1400, 1800, 2130],
    OpenedDay: [true, true, true, true, true, true, false],
    Map: "潮騒",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "どん八",
    Id: "donpachi",
    Genre: [0],
    Score: [4, 5, 3],
    Distance: 3200,
    Opened: [1115, 1500, 1700, 2000],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "海鮮丼どん八 松本駅前本店",
    Pay: [true, true, true],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "河昌",
    Id: "kawasho",
    Genre: [0],
    Score: [5, 4, 3],
    Distance: 1300,
    Opened: [1130, 1330],
    OpenedDay: [true, false, true, true, true, true, true],
    Map: "河昌",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "楽座",
    Id: "rakuza",
    Genre: [3],
    Score: [5, 4, 4],
    Distance: 1200,
    Opened: [1100, 1900],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "らくざ",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "ピカドン",
    Id: "pikadon",
    Genre: [0],
    Score: [3, 4, 4],
    Distance: 350,
    Opened: [1130, 1400, 1730, 2100],
    OpenedDay: [true, true, true, true, true, true, false],
    Map: "ピカドン",
    Pay: [false, false, false],
    Parking: [true, false],
    Coupon: "",
  },
  {
    Name: "テンホウ",
    Id: "tenho",
    Genre: [0, 1],
    Score: [4, 4, 3],
    Distance: 550,
    Opened: [1100, 2130],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "テンホウ松本追分店",
    Pay: [true, true, true],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "まんま",
    Id: "manma",
    Genre: [0],
    Score: [5, 3, 3],
    Distance: 1500,
    Opened: [1100, 1400],
    OpenedDay: [true, true, true, true, true, true, false],
    Map: "まんま 女鳥羽",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "まんぷく亭",
    Id: "manpukutei",
    Genre: [0],
    Score: [4, 4, 4],
    Distance: 1700,
    Opened: [1130, 1430],
    OpenedDay: [false, false, true, true, true, true, true],
    Map: "まんぷく亭 松本",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "ビストロ鬼平",
    Id: "bisutoroonihei",
    Genre: [1],
    Score: [6, 3, 2],
    Distance: 1500,
    Opened: [1200, 1400, 1800, 2045],
    OpenedDay: [true, false, true, true, true, true, true],
    Map: "ビストロ鬼平",
    Pay: [false, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "鎌倉パスタ",
    Id: "kamakurapasta",
    Genre: [1],
    Score: [4, 4, 2],
    Distance: 2600,
    Opened: [1100, 2100],
    OpenedDay: [true, true, true, true, true, true, true],
    Map: "鎌倉パスタ イオンモール松本店",
    Pay: [false, true, false],
    Parking: [true, true],
    Coupon: "",
  },
  {
    Name: "DOLCE/かつ富",
    Id: "dolce_katsutomi",
    Genre: [0],
    Score: [5, 5, 3],
    Distance: 1200,
    Opened: [1130, 1400, 1800, 2030],
    OpenedDay: [false, false, true, true, true, true, true],
    Map: "DOLCE かつ富",
    Pay: [true, false, false],
    Parking: [true, true],
    Coupon: "",
  },
  // {
  //   Name: "",
  //   Id: "",
  //   Genre: [],
  //   Score: [],
  //   Distance: 00,
  //   Opened: [ , ],
  //   OpenedDay: [true, true, true, true, true, true, true],
  //   Map: "",
  //   Pay: [true, false, false],
  //   Parking: [true, true],
  //   Coupon: "",
  // },
];

export {
  List,
  changeTime,
  GENRE_COLLECTION,
  PRICE_COLLECTION,
  TIME_COLLECTION,
};
