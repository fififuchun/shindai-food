const GENRE_COLLECTION = {
  rice: "ご飯物",
  ramen: "ラーメン",
  soba: "そば",
  pasta: "パスタ",
  pan: "パン",
} as const;
type GENRE_COLLECTION =
  (typeof GENRE_COLLECTION)[keyof typeof GENRE_COLLECTION];

const List = [
  {
    Name: "でんでん",
    Id: "denden",
    Genre: GENRE_COLLECTION.rice,
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
    Genre: GENRE_COLLECTION.rice,
    Score: [5, 3, 3],
    Cycle: 7,
    Opened: [1130, 1500, 1700, 2200],
    Map: "満月や",
    Pay: [true, false, false],
    Parking: [true, true],
  },
];

export default List;
