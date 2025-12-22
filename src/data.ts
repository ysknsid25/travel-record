export const PREFECTURE_ORDER = [
    "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
    "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
    "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
    "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
    "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
    "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
    "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
] as const;

export type Prefecture = typeof PREFECTURE_ORDER[number];

export interface TravelRecord {
    year: number;
    prefecture: Prefecture;
    name: string;
    coords: [number, number]; // [lat, lng]
    rating: 1 | 2 | 3 | 4 | 5;
    memo: string;
}

export const travelRecords: TravelRecord[] = [
    {
        year: 2025,
        prefecture: "石川県",
        name: "兼六園",
        coords: [36.562083, 136.662722],
        rating: 5,
        memo: "雪吊りが美しかった。日本三名園の一つ。",
    },
    {
        year: 2025,
        prefecture: "東京都",
        name: "浅草寺",
        coords: [35.714765, 139.796655],
        rating: 4,
        memo: "仲見世通りで食べ歩き。外国からの観光客が多かった。",
    },
    {
        year: 2024,
        prefecture: "北海道",
        name: "函館山",
        coords: [41.760833, 140.706111],
        rating: 5,
        memo: "夜景が絶景。ロープウェイが混んでいた。",
    },
    {
        year: 2024,
        prefecture: "大阪府",
        name: "大阪城",
        coords: [34.687315, 135.526201],
        rating: 3,
        memo: "天守閣からの眺めが良い。公園が広くて散歩に最適。",
    },
    {
        year: 2024,
        prefecture: "福岡県",
        name: "太宰府天満宮",
        coords: [33.5215, 130.5349],
        rating: 4,
        memo: "梅ヶ枝餅が美味しかった。学問の神様にお参り。",
    },
    {
        year: 2024,
        prefecture: "香川県",
        name: "栗林公園",
        coords: [34.3305, 134.0435],
        rating: 5,
        memo: "松の手入れが素晴らしい。早朝の散歩が気持ちよかった。",
    },
    {
        year: 2024,
        prefecture: "京都府",
        name: "清水寺",
        coords: [34.994856, 135.785046],
        rating: 4,
        memo: "舞台からの景色は圧巻。紅葉の季節に行きたい。",
    },
    {
        year: 2023,
        prefecture: "沖縄県",
        name: "美ら海水族館",
        coords: [26.694167, 127.877917],
        rating: 5,
        memo: "ジンベエザメの迫力がすごい。一日中楽しめる。",
    },
    {
        year: 2023,
        prefecture: "長野県",
        name: "松本城",
        coords: [36.238833, 137.9695],
        rating: 5,
        memo: "黒い城郭がかっこいい。国宝。",
    },
    {
        year: 2023,
        prefecture: "広島県",
        name: "厳島神社",
        coords: [34.295833, 132.319722],
        rating: 5,
        memo: "海に浮かぶ鳥居が神秘的。鹿が可愛かった。",
    }
];
