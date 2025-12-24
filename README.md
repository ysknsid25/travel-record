# Travel Record

自分だけの旅行記録を地図上にマッピングし、思い出を管理できるWebアプリケーションです。
訪れた場所を日本地図上にピン留めしたり、都道府県別の訪問達成率を確認したりすることができます。

このプロジェクトをForkして、あなたの旅行記録を作成・公開してみてください！

## ✨ 特徴

- **Map View**: 日本地図上に訪問先をピン表示。クリックで詳細を確認できます。
- **List View**: 訪問先をリスト形式で閲覧。評価順や都道府県順で並び替えが可能。
- **Archives**: 都道府県ごとの訪問達成状況を可視化。全47都道府県制覇を目指しましょう！

## 🚀 使い方

### 1. リポジトリをForkする

まず、GitHub上でこのリポジトリを自分のアカウントにForkしてください。

### 2. ローカルにCloneする

Forkしたリポジトリをローカル環境にCloneします。

```bash
git clone https://github.com/YOUR_USERNAME/travel-record.git
cd travel-record
```

### 3. 依存パッケージのインストール

```bash
npm install
```

### 4. 開発サーバーの起動

```bash
npm run dev
```
ブラウザで `http://localhost:5173` (ポートは環境により異なる場合があります) を開き、動作を確認してください。

## 📝 データの編集

自分の旅行記録に入れ替えるには、以下のファイルを編集します。

### 旅行データの更新 (`src/data.ts`)

`src/data.ts` ファイルにある `travelRecords` 配列を書き換えてください。

```typescript
export const travelRecords: TravelRecord[] = [
    {
        year: 2024,
        prefecture: "北海道",
        name: "函館山",
        coords: [41.7516585, 140.6869788], // [緯度, 経度]
        rating: 5, // 1~5の5段階評価
        memo: "夜景が綺麗だった！",
    },
    // ... 他のデータを追加
];
```

※ 緯度・経度はGoogle Maps等で場所を右クリックすると簡単に取得できます。

### タイトルの変更 (`index.html`)

`index.html` の `<title>` タグを自分の名前に変更しましょう。

```html
<title>My Travel Record</title>
```

## 🌍 デプロイ

このアプリケーションは静的なWebサイトとしてビルドされます。GitHub Pages, Cloudflare Pages, Vercel, Netlify など、お好きなホスティングサービスに無料でデプロイ可能です。

### ビルドコマンド

```bash
npm run build
```

`dist` ディレクトリに公開用のファイルが生成されます。
