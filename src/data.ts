export type ConferenceType =
    | "PHP"
    | "Kotlin"
    | "JavaScript"
    | "TypeScript"
    | "Google"
    | "SoftSkills"
    | "Other";

export interface Conference {
    date: string;
    venue: string;
    coords?: [number, number]; // [lat, lng] - Optional for online events
    name: string;
    url: string;
    theme: string;
    slidesUrl: string;
    proposalUrl?: string; // Add Proposal URL
    isBest: boolean;
    type: ConferenceType;
}

export const conferences: Conference[] = [
    // {
    //   date: '2025-02-15',
    //   venue: '浅草橋ヒューリックホール',
    //   coords: [35.6974, 139.7860],
    //   name: 'JSConf JP 2025',
    //   url: 'https://jsconf.jp/2025/',
    //   theme: 'Modern Frontend Architecture',
    //   slidesUrl: 'https://speakerdeck.com/dummy/jsconf2025',
    //   proposalUrl: 'https://event.jsconf.jp/2025/proposals/hono-islands-architecture',
    //   isBest: false,
    //   type: 'JavaScript',
    // },
    // // オンライン開催のテストデータ
    // {
    //   date: '2025-05-20',
    //   venue: 'Online',
    //   // coords is omitted
    //   name: 'Global Tech Online 2025',
    //   url: 'https://globaltech.example.com/',
    //   theme: 'Remote Work Best Practices',
    //   slidesUrl: 'https://speakerdeck.com/dummy/globaltech2025',
    //   isBest: false,
    //   type: 'Other',
    // },
    {
        date: "2025-11-23",
        venue: "ホテル金沢",
        coords: [36.578581, 136.650471],
        name: "TSKaigi Hokuriku 2025",
        url: "https://hokuriku.tskaigi.org/",
        theme: "TDMaCのススメ - cittyを使ってテストデータ作成を効率化する",
        slidesUrl: "https://blog.inorinrinrin.com/entry/2025/11/23/160951",
        proposalUrl: "https://tskaigi.hatenablog.com/entry/2025/10/14/140147",
        isBest: false,
        type: "TypeScript",
    },
    {
        date: "2025-11-01",
        venue: "東京コンファレンスセンター・品川",
        coords: [35.6301239, 139.7386845],
        name: "Kotlin Fest 2025",
        url: "https://qiita.com/tech-festa/2025/tech-spark",
        theme: "Ktorを使う時に設定しておきたいこと",
        slidesUrl: "https://blog.inorinrinrin.com/entry/2025/11/01/140458",
        proposalUrl:
            "https://fortee.jp/kotlin-fest-2025/proposal/e5c35932-b0ba-44f5-9da7-e0653e0c2655",
        isBest: false,
        type: "Kotlin",
    },
    {
        date: "2025-10-18",
        venue: "docomo R&D OPEN LAB ODAIBA",
        coords: [35.6286719, 139.775193],
        name: "Hono Conference 2025",
        url: "https://honoconf.dev/2025",
        theme: "25.7kステップのレガシーJavaスタブサーバーをHonoへ移行する - 開発体験向上までの道",
        slidesUrl: "https://blog.inorinrinrin.com/entry/2025/10/18/162046",
        proposalUrl:
            "https://fortee.jp/honoconf-2025/proposal/e03ef3a3-0f9f-4c1a-9b0c-e628f38b9f5c",
        isBest: true,
        type: "TypeScript",
    },
    {
        date: "2025-07-25",
        venue: "オンライン",
        coords: [35.6974, 139.786],
        name: "Qiita Tech Spark 2025",
        url: "https://qiita.com/tech-festa/2025/tech-spark",
        theme: "TypeScript 上達の道",
        slidesUrl:
            "https://speakerdeck.com/ysknsid25/typescript-shang-da-nodao",
        isBest: false,
        type: "TypeScript",
    },
    {
        date: "2025-06-14",
        venue: "中野セントラルパーク",
        coords: [35.707006, 139.661695],
        name: "関数型まつり 2025",
        url: "https://2025.fp-matsuri.org/",
        theme: "Kotlinで学ぶ代数的データ型",
        slidesUrl:
            "https://speakerdeck.com/ysknsid25/kotlindexue-bu-dai-shu-de-detaxing",
        proposalUrl:
            "https://fortee.jp/2025fp-matsuri/proposal/e436393d-c322-477d-b8cb-0e6ac8ce8cc6",
        isBest: false,
        type: "Kotlin",
    },
    {
        date: "2025-06-07",
        venue: "ベルサール新宿グランド",
        coords: [35.6961107, 139.6881636],
        name: "JJUG CCC 2025 Spring",
        url: "https://ccc2025spring.java-users.jp/",
        theme: "Javaで学ぶ代数的データ型",
        slidesUrl:
            "https://speakerdeck.com/ysknsid25/java-dexue-bu-dai-shu-de-detaxing",
        isBest: false,
        type: "Kotlin",
    },
    {
        date: "2025-05-23",
        venue: "ベルサール神田",
        coords: [35.693182, 139.765607],
        name: "TSKaigi 2025",
        url: "https://2025.tskaigi.org/",
        theme: "Type ChallengesにPRを出して新しい問題を追加した話",
        slidesUrl:
            "https://speakerdeck.com/ysknsid25/type-challengesnixin-siiwen-ti-wozhui-jia-site-type-challengesnomaintainerninatutahua-0fd730df-ec2b-4445-bdc8-e4febe5127b7",
        proposalUrl: "https://2025.tskaigi.org/talks/ysknsid25",
        isBest: false,
        type: "TypeScript",
    },
    {
        date: "2024-11-30",
        venue: "東京モード学園",
        coords: [35.691587, 139.696945],
        name: "GDG DevFest Tokyo 2024",
        url: "https://gdg-tokyo.connpass.com/event/335192/",
        theme: "GAS × Discord bot × Geminiで作ったさいきょーの情報収集ツール",
        slidesUrl:
            "https://speakerdeck.com/ysknsid25/gas-x-discord-bot-x-gemini-dezuo-tutasaikiyonoqing-bao-shou-ji-turu",
        isBest: false,
        type: "Google",
    },
    {
        date: "2024-11-16",
        venue: "みやこめっせ",
        coords: [35.012936, 135.7783859],
        name: "TSKaigi Kansai 2024",
        url: "https://kansai.tskaigi.org/",
        theme: "テストコード品質を高めるためにMutation Testingライブラリ・Strykerを実戦導入してみた",
        slidesUrl:
            "https://speakerdeck.com/ysknsid25/tesutokodopin-zhi-wogao-merutamenimutation-testingraiburaristrykerwoshi-zhan-dao-ru-sitemita",
        proposalUrl: "https://kansai.tskaigi.org/talks/ysknsid25",
        isBest: true,
        type: "TypeScript",
    },
    {
        date: "2024-10-05",
        venue: "公立はこだて未来大学",
        coords: [41.8418174, 140.7643938],
        name: "YAPC::Hakodate 2024",
        url: "https://yapcjapan.org/2024hakodate/",
        theme: "テストコードの品質を客観的な数値で担保しよう 〜Mutation Testingのすすめ〜",
        slidesUrl:
            "https://speakerdeck.com/ysknsid25/tesutokodonopin-zhi-woke-guan-de-nashu-zhi-dedan-bao-siyou-mutation-testnosusume",
        proposalUrl:
            "https://fortee.jp/yapc-hakodate-2024/proposal/a91375cf-5d1c-4abf-bedf-b291c685e056",
        isBest: false,
        type: "TypeScript",
    },
    {
        date: "2024-09-18",
        venue: "サンライズビル大阪",
        coords: [34.6850001, 135.5014927],
        name: "Developers Summit Kansai 2024",
        url: "https://event.shoeisha.jp/devsumi/20240918",
        theme: "変な先入観を捨てて、明日から勉強会・カンファレンス登壇してみない？",
        slidesUrl:
            "https://docs.google.com/presentation/d/1VrNm-OL5NhDmUlRvZIAL5Zpfhn_8PsFasCANEGCrZcE/edit?slide=id.p#slide=id.p",
        isBest: false,
        type: "SoftSkills",
    },
    {
        date: "2024-06-22",
        venue: "福岡ファッションビル",
        coords: [33.5921752, 130.4124787],
        name: "PHP Conference Fukuoka 2024",
        url: "https://phpcon.fukuoka.jp/2024/",
        theme: "WebサーバーとPHP実行方式をきちんと理解して、PHPランタイムを適切に使い分ける",
        slidesUrl:
            "https://docs.google.com/presentation/d/1nUWA53x-j3r8T6IWBq0qAx9l-Was0vLfsLlV7_KLOys/edit?slide=id.p#slide=id.p",
        proposalUrl:
            "https://fortee.jp/phpcon-fukuoka-2024/proposal/a41337a4-002e-4306-915a-06ee424054d3",
        isBest: false,
        type: "PHP",
    },
    {
        date: "2024-05-11",
        venue: "玉藻公園 披雲閣",
        coords: [34.3504459, 134.0489219],
        name: "PHP Conference Kagawa 2024",
        url: "https://phpcon-odawara.jp/2024/",
        theme: "令和版ソフトウェアエンジニアの情報収集術",
        slidesUrl:
            "https://docs.google.com/presentation/d/1ZYcfpgAvn9zQWXdrRYQryGNMsj0CMYkY1Sqj2Th6On0/edit?slide=id.p#slide=id.p",
        proposalUrl:
            "https://fortee.jp/phpconkagawa-2024/proposal/d9f74b93-9991-4932-afaf-ada75c330094",
        isBest: false,
        type: "SoftSkills",
    },
    {
        date: "2024-02-11",
        venue: "グランフロント大阪",
        coords: [34.7038664, 135.4923456],
        name: "PHP Conference Kansai 2024",
        url: "https://2024.kphpug.jp/",
        theme: "Mutation Testingとはなにか？ 〜Laravel(Pest)でInfectionを利用したライブデモ〜",
        slidesUrl:
            "https://docs.google.com/presentation/d/11OB7eFvLQNn1SoemhUOiV25jxBiVG4UwPaaY7c6BZmM/edit?slide=id.p#slide=id.p",
        proposalUrl:
            "https://fortee.jp/phpcon-kansai2024/proposal/8daa1c68-69b1-458a-9f3a-0c9a86e7843e",
        isBest: false,
        type: "PHP",
    },
    {
        date: "2023-11-17",
        venue: "オンライン",
        coords: [35.6974, 139.786],
        name: "Qiita Night～エンジニア×非エンジニアのコミュニケーション～",
        url: "https://increments.connpass.com/event/297115/",
        theme: "要件を理解するために、非エンジニアと一緒に業務をこなした話",
        slidesUrl:
            "https://docs.google.com/presentation/d/1Vycv8CJg_XnX8aM3Xs04kB2JhYdFsIhZG57-iVOR4W4/edit?slide=id.p#slide=id.p",
        isBest: false,
        type: "SoftSkills",
    },
    {
        date: "2023-06-21",
        venue: "オンライン",
        coords: [35.6974, 139.786],
        name: "若手エンジニアが語る技術への挑戦とキャリア戦略 CodeZine Night #2",
        url: "https://codezine.connpass.com/event/285100/",
        theme: "自作Webサービスのソースコードを公開してみたら色んな刺激を受けた件",
        slidesUrl:
            "https://speakerdeck.com/toranoana/codezine-night-number-2-ruo-shou-enziniagayu-ruji-shu-henotiao-zhan-tokiyariazhan-lue-9a3918b0-a756-4e71-ac8c-0c2a7e29fb7e",
        isBest: false,
        type: "TypeScript",
    },
];
