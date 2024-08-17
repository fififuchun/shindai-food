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

const GENRE_COLLECTION = [
  /* 0 */ { label: "rice", value: "ご飯", checked: true },
  /* 1 */ { label: "ramen", value: "ラーメン", checked: true },
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
    Genre: [0, 1],
    Score: [4, 5, 4],
    Cycle: 6,
    Opened: [1130, 1430, 1730, 2200],
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
    Map: "満月や",
    Pay: [true, false, false],
    Parking: [true, true],
  },
  {
    Name: "すき家",
    Id: "sukiya",
    Genre: [0],
    Score: [5, 5, 4],
    Cycle: 7,
    Opened: [0, 2400],
    Map: "満月や",
    Pay: [true, false, false],
    Parking: [true, true],
  },
];

export { List, GENRE_COLLECTION, PRICE_COLLECTION, TIME_COLLECTION };
