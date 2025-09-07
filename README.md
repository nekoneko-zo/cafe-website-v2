# ☕ Iguo Coffee 公式ウェブサイト

![Iguo Coffee](https://nekoneko-zo.github.io/cafe-website-v2/)

自家焙煎コーヒーの香りをあなたに - Iguo Coffeeの公式ウェブサイトです。地域に愛されるカフェを目指し、こだわりのコーヒーとスイーツを提供しています。

## 🌟 特徴

- **レスポンシブデザイン**: スマートフォン、タブレット、デスクトップに対応
- **モダンUI**: Tailwind CSSを使用した美しいデザイン
- **高速パフォーマンス**: Reactベースの最適化されたウェブサイト
- **SEOフレンドリー**: 検索エンジン最適化済み

## 📱 サイト内容

### 🏠 トップページ
- ヒーローセクション（自家焙煎コーヒーの魅力的なビジュアル）
- ナビゲーションメニュー（レスポンシブ対応）

### 📖 About Us
- 自家焙煎コーヒー豆へのこだわり
- 地域に愛されるカフェの紹介

### 🍽️ Menu
- **自家焙煎コーヒー** ¥450 - シングルオリジン豆を使用したこだわりの一杯
- **季節のデザート** ¥550 - 旬の素材を使用した自家製スイーツ
- **軽食** ¥650〜 - サンドイッチやサラダなどの軽食メニュー
- **テイクアウト** ¥200 - お家で楽しめるドリップバッグ

### 📖 Our Story
- カフェの雰囲気（木の温もりを感じる落ち着いた空間）
- カフェオレへのこだわり（厳選ミルクと自家焙煎コーヒーの絶妙ブレンド）
- Iguoさんのコーヒーへの想いとストーリー

### ℹ️ Info
- **営業時間**: 平日 9:00-19:00 / 土日祝 10:00-20:00 / 定休日: 火曜日
- **アクセス**: 東京都渋谷区、JR渋谷駅から徒歩5分

## 🛠️ 使用技術

- **Frontend Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Build Tool**: Create React App
- **Package Manager**: npm
- **Deployment**: GitHub Pages

## 🚀 ローカル開発環境のセットアップ

### 前提条件

- Node.js (バージョン 16 以上)
- npm または yarn

### インストール手順

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/nekoneko-zo/cafe-website-v2.git
   cd cafe-website-v2
   ```

2. **依存関係のインストール**
   ```bash
   npm install
   ```

3. **開発サーバーの起動**
   ```bash
   npm start
   ```

4. **ブラウザで確認**
   - http://localhost:3000 でアクセス可能

## 📦 ビルドとデプロイ

### プロダクションビルド

```bash
npm run build
```

ビルドされたファイルは `build/` フォルダに生成されます。

### GitHub Pagesへのデプロイ

1. **ビルドファイルの準備**
   ```bash
   npm run build
   cp -r build docs
   ```

2. **変更をコミット**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **GitHub Pages設定**
   - GitHubリポジトリの Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs
   - Save をクリック

## 📁 プロジェクト構造

```
cafe-website-v2/
├── public/                 # 静的ファイル
│   ├── index.html         # HTMLテンプレート
│   └── images/            # 公開用画像
├── src/                   # ソースコード
│   ├── images/            # コンポーネント用画像
│   ├── App.js            # メインコンポーネント
│   └── index.js          # エントリーポイント
├── docs/                  # GitHub Pages用ビルドファイル
├── build/                 # ローカルビルドファイル
├── package.json           # プロジェクト設定
├── tailwind.config.js     # Tailwind CSS設定
└── README.md             # このファイル
```

## 🎨 カスタマイズ

### スタイルのカスタマイズ

`tailwind.config.js` を編集して、ブランドカラーやフォントを変更できます。

### コンテンツの変更

`src/App.js` を編集して、メニュー内容や営業時間などの情報を更新してください。

### 画像の変更

`src/images/` フォルダ内の画像を差し替えて、サイトの雰囲気を変更できます。

## 🤝 貢献

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. Pull Requestを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 📞 お問い合わせ

- **ウェブサイト**: https://nekoneko-zo.github.io/cafe-website-v2/
- **GitHub**: https://github.com/nekoneko-zo/cafe-website-v2

---

## 💡 開発Tips

### レスポンシブデザインの確認

- Chrome DevToolsのデバイスエミュレーションを使用
- モバイル、タブレット、デスクトップでの表示を確認

### パフォーマンス最適化

- 画像は適切なサイズに最適化
- Tailwind CSSのPurge機能で未使用CSSを削除

### SEO対策

- メタタグの適切な設定
- 構造化データの追加（今後実装予定）

---

**Iguo Coffee** - 自家焙煎コーヒーの香りを、あなたに。
