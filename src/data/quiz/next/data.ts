export type Quiz = {
  id: string; // ユニークな識別子
  question: string; // 質問文
  options: string[]; // 選択肢
  correctAnswerIndex: number; // 正解の選択肢インデックス
  explanation: string; // 説明文
};

export const next14QuizData: Quiz[] = [
  {
    id: "next14_1",
    question:
      "Next.js 14での新機能として導入されたデフォルトのキャッシュ方式は何ですか？",
    options: [
      "Cache-Control",
      "React Cache",
      "Incremental Cache",
      "Automatic Cache",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Next.js 14では、`React Cache` がデフォルトで利用可能となり、より効率的なキャッシュが提供されます。",
  },
  {
    id: "next14_2",
    question: "Next.js 14で新たにサポートされたReactのバージョンは？",
    options: ["18.2", "19.0", "18.3", "19.1"],
    correctAnswerIndex: 1,
    explanation:
      "Next.js 14はReact 19に対応し、新しい機能とパフォーマンス向上が含まれています。",
  },
  {
    id: "next14_3",
    question: "Next.js 14で強化された`turbo`機能の主な目的は何ですか？",
    options: [
      "アプリケーションの構築速度を向上させる",
      "SSRの処理速度を向上させる",
      "新しいAPIルートを追加する",
      "クライアントサイドレンダリングを高速化する",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`turbo`はNext.js 14でビルドと開発速度を劇的に改善するために強化されました。",
  },
  {
    id: "next14_4",
    question: "Next.js 14で`next dev`のパフォーマンスが向上した理由は？",
    options: [
      "Webpackのアップグレード",
      "Rustベースのツールへの移行",
      "React Server Componentsの完全採用",
      "キャッシュの自動管理",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Rustベースのビルドツールを導入することで、`next dev`のパフォーマンスが向上しました。",
  },
  {
    id: "next14_5",
    question: "Next.js 14で新たに導入されたEdge Functionの改善点は？",
    options: [
      "レスポンス速度の向上",
      "デプロイ時間の短縮",
      "地域ごとのカスタムキャッシュ",
      "バンドルサイズの最適化",
    ],
    correctAnswerIndex: 3,
    explanation:
      "Edge Functionのバンドルサイズが最適化され、パフォーマンスが向上しました。",
  },
  {
    id: "next14_6",
    question:
      "Next.js 14の新しいルーティングシステムでは、デフォルトで使用されるディレクトリはどれですか？",
    options: ["pages", "routes", "src", "app"],
    correctAnswerIndex: 3,
    explanation:
      "`app`ディレクトリがデフォルトのルーティングシステムとして採用されています。",
  },
  {
    id: "next14_7",
    question: "Next.js 14で導入された`turbo`バンドラの特徴は？",
    options: [
      "JavaScriptベースである",
      "プラグインベースの構造を持つ",
      "Rustで構築され、高速である",
      "独自のスタイル処理エンジンを持つ",
    ],
    correctAnswerIndex: 2,
    explanation:
      "`turbo`はRustで構築された新しいバンドラで、従来のビルドツールに比べて非常に高速です。",
  },
  {
    id: "next14_8",
    question: "Next.js 14で`React Server Components`が推奨される理由は？",
    options: [
      "クライアントサイドレンダリングを省略する",
      "SSRのコード量を削減する",
      "データのフェッチとUIを統合する",
      "サーバーレスポンスの遅延を減らす",
    ],
    correctAnswerIndex: 2,
    explanation:
      "`React Server Components`はデータフェッチとUIのロジックを統合し、アプリケーションの構造を簡素化します。",
  },
  {
    id: "next14_9",
    question: "Next.js 14で改善された`next/image`の新しいデフォルト動作は？",
    options: [
      "すべての画像をプリフェッチする",
      "静的画像最適化を有効化",
      "レイジーローディングを無効化",
      "エッジキャッシュでの画像配信",
    ],
    correctAnswerIndex: 1,
    explanation:
      "`next/image`の新しいデフォルトでは、すべての画像が静的に最適化されます。",
  },
  {
    id: "next14_10",
    question: "Next.js 14で導入された新しい`Route Groups`機能の目的は？",
    options: [
      "動的ルーティングを簡略化する",
      "URL構造を維持しつつ、ディレクトリを整理する",
      "ルート間でデータを共有する",
      "APIルートを自動生成する",
    ],
    correctAnswerIndex: 1,
    explanation:
      "`Route Groups`を使用すると、URL構造を変更せずにディレクトリを整理できます。",
  },
  {
    id: "next14_11",
    question: "Next.js 14の`incremental cache`の最大の利点は何ですか？",
    options: [
      "キャッシュが永続化される",
      "SSRのパフォーマンスが向上する",
      "クライアントの状態を維持する",
      "キャッシュの有効期限を指定可能",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Next.js 14の`incremental cache`は、キャッシュを永続化して再利用可能にします。",
  },
  {
    id: "next14_12",
    question: "Next.js 14で新たに強化された開発ツールは何ですか？",
    options: [
      "React DevTools",
      "Next.js DevOverlay",
      "Turbo DevTools",
      "Edge Inspector",
    ],
    correctAnswerIndex: 2,
    explanation:
      "`Turbo DevTools`がNext.js 14で強化され、開発者体験が向上しました。",
  },
  {
    id: "next14_13",
    question: "Next.js 14でのビルドエラー時に改善されたフィードバックは？",
    options: [
      "詳細なエラーメッセージ",
      "エラー発生箇所の即時補正",
      "Rustによるエラーログの最適化",
      "自動リカバリ機能",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Next.js 14では、ビルドエラーの詳細なメッセージが提供され、問題を特定しやすくなりました。",
  },
  {
    id: "next14_14",
    question: "Next.js 14で`Server Actions`が導入された主な理由は？",
    options: [
      "サーバーサイドでのロジック分離",
      "クライアントサイドの負担軽減",
      "ステートレスAPIの簡素化",
      "サーバーレスポンスの最適化",
    ],
    correctAnswerIndex: 2,
    explanation:
      "`Server Actions`はサーバーサイドでの処理を簡略化し、APIルートの作成を不要にします。",
  },
  {
    id: "next14_15",
    question: "Next.js 14でのページ間トランジションの新しい機能は？",
    options: [
      "アニメーションの自動適用",
      "キャッシュの保持",
      "トランジション状態の追跡",
      "トランジションごとのエラー表示",
    ],
    correctAnswerIndex: 0,
    explanation:
      "ページ間のトランジションにアニメーションが自動的に適用される新しい機能が追加されました。",
  },
  {
    id: "next14_16",
    question: "Next.js 14での`Static Export`の主な改善点は何ですか？",
    options: [
      "エクスポート速度の向上",
      "エクスポート時のエラーチェックの強化",
      "非同期データの自動キャッシュ",
      "エクスポートされたHTMLのサイズ最適化",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Next.js 14では、非同期データが自動的にキャッシュされ、エクスポート時の効率が向上しました。",
  },
  {
    id: "next14_17",
    question:
      "Next.js 14でサポートされる新しい環境変数の管理ツールは何ですか？",
    options: ["dotenv", "next/env", "Environment API", "Turbo Env"],
    correctAnswerIndex: 1,
    explanation:
      "Next.js 14では、新しい環境変数管理ツールとして`next/env`が導入されました。",
  },
  {
    id: "next14_18",
    question: "Next.js 14で強化された`Image Optimization`の新機能は？",
    options: [
      "WebPのデフォルトサポート",
      "ローカルファイルの優先最適化",
      "エッジキャッシュ対応の画像配信",
      "GIFアニメーションの最適化",
    ],
    correctAnswerIndex: 2,
    explanation:
      "`next/image`の画像最適化がエッジキャッシュに対応し、配信速度が向上しました。",
  },
  {
    id: "next14_19",
    question: "Next.js 14で導入された`Middleware`の改善点は何ですか？",
    options: [
      "リクエストの処理速度が向上",
      "ミドルウェアの構文が簡素化",
      "APIルートと完全統合",
      "ネストされたミドルウェアのサポート",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Next.js 14の`Middleware`は、処理速度が大幅に改善され、より効率的になりました。",
  },
  {
    id: "next14_20",
    question: "Next.js 14で`Dynamic Imports`の新しい挙動は？",
    options: [
      "デフォルトでコード分割を無効化",
      "遅延読み込みのパフォーマンス向上",
      "インポートエラー時の自動リカバリ",
      "静的コンテンツのプリロード",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Next.js 14では、`Dynamic Imports`の遅延読み込みがより効率的になり、パフォーマンスが向上しました。",
  },
  {
    id: "next14_21",
    question: "Next.js 14での`Edge Runtime`の新機能は？",
    options: [
      "AWS Lambdaとの統合",
      "Node.jsベースのランタイム",
      "Rustベースのランタイム",
      "地域ごとのデプロイ最適化",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Next.js 14では、Rustベースの`Edge Runtime`が導入され、高速な処理を可能にしました。",
  },
  {
    id: "next14_22",
    question: "Next.js 14での`API Routes`に追加された主な機能は？",
    options: [
      "GraphQLのデフォルトサポート",
      "動的なパスの強化",
      "エラー処理の改善",
      "バッチリクエストのサポート",
    ],
    correctAnswerIndex: 3,
    explanation:
      "Next.js 14では、APIルートでバッチリクエストをサポートし、複数のリクエストを効率的に処理できます。",
  },
  {
    id: "next14_23",
    question: "Next.js 14での新しい`Static Site Generation (SSG)`の改善点は？",
    options: [
      "非同期データ取得の最適化",
      "リアルタイムデータのサポート",
      "SSGのバッチ処理の追加",
      "SSRとの自動切り替え",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Next.js 14では、非同期データ取得が最適化され、SSGの生成がさらに効率的になりました。",
  },
  {
    id: "next14_24",
    question: "Next.js 14での`App Router`の主な改良点は？",
    options: [
      "リアルタイムのパス更新",
      "階層構造の簡素化",
      "動的データフェッチの強化",
      "React Routerとの統合",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Next.js 14では、`App Router`が強化され、動的データフェッチがよりスムーズになりました。",
  },
  {
    id: "next14_25",
    question: "Next.js 14で新たにサポートされた認証フレームワークは？",
    options: ["NextAuth.js", "Clerk", "Auth0", "Supabase Auth"],
    correctAnswerIndex: 1,
    explanation:
      "Next.js 14では、`Clerk`が公式にサポートされ、認証がより簡単になりました。",
  },
  {
    id: "next14_26",
    question:
      "Next.js 14での`ISR (Incremental Static Regeneration)`の改善点は？",
    options: [
      "キャッシュの自動無効化",
      "データ更新速度の向上",
      "静的ページのプリフェッチ",
      "リアルタイムビルドモード",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Next.js 14では、`ISR`が強化され、データ更新速度がさらに向上しました。",
  },
  {
    id: "next14_27",
    question: "Next.js 14での`Error Overlay`の改善点は？",
    options: [
      "詳細なエラーログの表示",
      "エラー発生箇所の自動修正",
      "リアルタイムデバッグのサポート",
      "エラーメッセージの翻訳対応",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`Error Overlay`が改善され、詳細なエラーログを表示できるようになりました。",
  },
  {
    id: "next14_28",
    question: "Next.js 14での`middleware`の新しい制約は何ですか？",
    options: [
      "Node.js固有のモジュールが使用できない",
      "ルート間で共有が禁止された",
      "最大ファイルサイズが5MB",
      "サーバーサイド専用のAPIが必須",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Next.js 14では、`middleware`が`Node.js`固有のモジュールを使用できなくなりました。",
  },
  {
    id: "next14_29",
    question: "Next.js 14で新たにサポートされた`Streaming`の特徴は？",
    options: [
      "リアルタイムでの部分的なデータ表示",
      "SSRとCSRの統一",
      "リアルタイムデータ更新",
      "クライアントキャッシュの向上",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Next.js 14では、`Streaming`を利用してリアルタイムで部分的なデータをレンダリングできます。",
  },
  {
    id: "next14_30",
    question: "Next.js 14でのCSSサポートの改善点は？",
    options: [
      "Tailwind CSSの統合",
      "CSS Modulesのキャッシュ最適化",
      "グローバルCSSの自動スコープ化",
      "PostCSSプラグインの完全サポート",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Next.js 14では、CSS Modulesのキャッシュ最適化が行われ、パフォーマンスが向上しました。",
  },
];

// Next.js 13に関するクイズデータ
export const next13QuizData: Quiz[] = [
  {
    id: "next13_1",
    question:
      "Next.js 13で導入された新しいデフォルトのディレクトリ構造は何ですか？",
    options: ["src", "app", "pages", "routes"],
    correctAnswerIndex: 1, // "app"
    explanation:
      "Next.js 13では、新しいディレクトリ構造として`app`ディレクトリが導入されました。これにより、ルーティングやレイアウトの管理が簡素化されました。",
  },
  {
    id: "next13_2",
    question: "Next.js 13の`app`ディレクトリで利用可能な新機能はどれですか？",
    options: [
      "Server Components",
      "Incremental Static Regeneration",
      "API Routes",
      "Image Optimization",
    ],
    correctAnswerIndex: 0, // "Server Components"
    explanation:
      "`app`ディレクトリでは、`React Server Components`がデフォルトで利用可能になり、サーバーサイドでの効率的なレンダリングが可能です。",
  },
  {
    id: "next13_3",
    question: "Next.js 13の新しいデフォルトレンダリング方式は何ですか？",
    options: [
      "Server Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Client-Side Rendering (CSR)",
      "React Server Components",
    ],
    correctAnswerIndex: 3, // "React Server Components"
    explanation:
      "Next.js 13では、`React Server Components`がデフォルトで採用され、効率的なレンダリングが可能になりました。",
  },
  {
    id: "next13_4",
    question:
      "Next.js 13で導入された新しい`Link`コンポーネントの主な改善点は？",
    options: [
      "`prefetch`プロパティの削除",
      "`a`タグが不要になった",
      "クリックイベントの最適化",
      "CSSモジュールとの統合",
    ],
    correctAnswerIndex: 1, // "`a`タグが不要になった"
    explanation:
      "Next.js 13の`Link`コンポーネントでは、`a`タグを明示的に使用する必要がなくなりました。",
  },
  {
    id: "next13_5",
    question: "Next.js 13でのデータフェッチに推奨されるメソッドは？",
    options: ["getStaticProps", "getServerSideProps", "fetch()", "async/await"],
    correctAnswerIndex: 2, // "fetch()"
    explanation:
      "Next.js 13では、標準の`fetch()`メソッドを使用してデータフェッチを行うことが推奨されます。",
  },
  {
    id: "next13_6",
    question: "Next.js 13で廃止されたディレクトリはどれですか？",
    options: ["src", "pages", "public", "routes"],
    correctAnswerIndex: 1, // "pages"
    explanation:
      "`app`ディレクトリが導入されたため、`pages`ディレクトリの使用が非推奨となりました。",
  },
  {
    id: "next13_7",
    question:
      "Next.js 13の新しいレイアウトシステムで使用するコンポーネントはどれですか？",
    options: ["_app.js", "layout.tsx", "index.js", "template.tsx"],
    correctAnswerIndex: 1, // "layout.tsx"
    explanation:
      "Next.js 13では、新しいレイアウトシステムで`layout.tsx`コンポーネントを使用してページ全体のレイアウトを定義します。",
  },
  {
    id: "next13_8",
    question: "Next.js 13での`Streaming`の主な目的は何ですか？",
    options: [
      "データベースとの接続を最適化する",
      "リアルタイム通信を実現する",
      "ページの部分的なレンダリングを許可する",
      "静的ファイルの配信を加速する",
    ],
    correctAnswerIndex: 2, // "ページの部分的なレンダリングを許可する"
    explanation:
      "Next.js 13では`Streaming`が導入され、サーバーサイドで部分的なレンダリングを可能にし、ユーザー体験を向上させます。",
  },
  {
    id: "next13_9",
    question: "Next.js 13の`Server Actions`の主な特徴は？",
    options: [
      "クライアントで直接実行される",
      "サーバーで実行される関数を定義",
      "非同期処理を禁止",
      "APIルートを不要にする",
    ],
    correctAnswerIndex: 1, // "サーバーで実行される関数を定義"
    explanation:
      "Next.js 13の`Server Actions`は、サーバーで実行される関数を直接定義する新機能です。",
  },
  {
    id: "next13_10",
    question: "Next.js 13の新しい`Image`コンポーネントで改善された点は？",
    options: [
      "レスポンシブデザインのサポート",
      "外部画像の動的最適化",
      "CSSカスタマイズの追加",
      "画像のキャッシュ機能の削除",
    ],
    correctAnswerIndex: 1, // "外部画像の動的最適化"
    explanation:
      "Next.js 13の`Image`コンポーネントでは、外部画像の動的最適化がサポートされました。",
  },
  {
    id: "next13_11",
    question:
      "Next.js 13で新たに導入された`Template`コンポーネントの主な用途は？",
    options: [
      "データベース接続の設定",
      "エラーハンドリング",
      "特定のルートでのカスタムレンダリング",
      "サーバーサイドの状態管理",
    ],
    correctAnswerIndex: 2, // "特定のルートでのカスタムレンダリング"
    explanation:
      "`Template`コンポーネントは、特定のルートでカスタムレンダリングを行うために使用されます。",
  },
  {
    id: "next13_12",
    question: "Next.js 13での`Middleware`の主要な変更点は何ですか？",
    options: [
      "Node.jsベースのコードが許可されなくなった",
      "SSRとの統合が改善された",
      "地域ごとのリクエスト処理が可能になった",
      "APIルートと完全統合された",
    ],
    correctAnswerIndex: 2, // "地域ごとのリクエスト処理が可能になった"
    explanation:
      "Next.js 13では、`Middleware`が地域ごとのリクエスト処理をサポートするようになりました。",
  },
  {
    id: "next13_13",
    question: "Next.js 13で`getServerSideProps`が推奨されない理由は？",
    options: [
      "データフェッチが非同期的ではない",
      "サーバーの負荷が高い",
      "`fetch()`で置き換えられた",
      "バンドルサイズが増加する",
    ],
    correctAnswerIndex: 2, // "`fetch()`で置き換えられた"
    explanation:
      "`getServerSideProps`は`fetch()`に置き換えられ、サーバーサイドのデータフェッチが簡素化されました。",
  },
  {
    id: "next13_14",
    question: "Next.js 13でのCSSサポートの主な変更点は？",
    options: [
      "CSS-in-JSが非推奨になった",
      "PostCSSが削除された",
      "CSS Modulesのパフォーマンス向上",
      "グローバルCSSの使用禁止",
    ],
    correctAnswerIndex: 2, // "CSS Modulesのパフォーマンス向上"
    explanation:
      "Next.js 13では、CSS Modulesのパフォーマンスが大幅に向上しました。",
  },
  {
    id: "next13_15",
    question:
      "Next.js 13で導入された新しいデータ取得メソッド`use`の主な特徴は？",
    options: [
      "クライアントサイドでのみ使用可能",
      "非同期関数を簡潔に扱える",
      "Promiseをサポートしない",
      "Reduxとの統合専用",
    ],
    correctAnswerIndex: 1, // "非同期関数を簡潔に扱える"
    explanation:
      "`use`メソッドは非同期関数を簡潔に扱うために導入され、Promiseを直接扱うことができます。",
  },
  {
    id: "next13_16",
    question:
      "Next.js 13での`Dynamic Segments`の使用方法における新機能はどれですか？",
    options: [
      "動的セグメントのキャッシュ機能",
      "非同期的なページ生成",
      "パラメータの型定義",
      "サーバーコンポーネントでの自動解決",
    ],
    correctAnswerIndex: 3, // "サーバーコンポーネントでの自動解決"
    explanation:
      "動的セグメントはサーバーコンポーネントと統合され、自動的に適切なデータが解決されます。",
  },
  {
    id: "next13_17",
    question: "Next.js 13で`Edge Runtime`がサポートする主なユースケースは？",
    options: [
      "クライアントサイドでのデータ保存",
      "エッジでのサーバーレンダリング",
      "リアルタイムAPI構築",
      "静的ファイルの最適化",
    ],
    correctAnswerIndex: 1, // "エッジでのサーバーレンダリング"
    explanation:
      "`Edge Runtime`は、エッジネットワークでのサーバーレンダリングに最適化されています。",
  },
  {
    id: "next13_18",
    question: "Next.js 13で`Static Rendering`に追加された新機能は？",
    options: [
      "オンデマンド生成",
      "プリフェッチの廃止",
      "動的再生成の削除",
      "サーバーファイルのキャッシュ",
    ],
    correctAnswerIndex: 0, // "オンデマンド生成"
    explanation:
      "Next.js 13では、オンデマンドで静的レンダリングを生成する機能が追加されました。",
  },
  {
    id: "next13_19",
    question:
      "`next.config.js`で新しい`experimental`オプションを有効にすると得られる利点は？",
    options: [
      "パフォーマンスの自動最適化",
      "新機能の事前アクセス",
      "エラーの自動解決",
      "プラグインの互換性向上",
    ],
    correctAnswerIndex: 1, // "新機能の事前アクセス"
    explanation:
      "`experimental`オプションを有効にすることで、Next.jsの新機能を早期に試すことができます。",
  },
  {
    id: "next13_20",
    question:
      "Next.js 13で`Incremental Static Regeneration (ISR)`の更新間隔を設定するためのオプションは？",
    options: [
      "revalidate",
      "staleWhileRevalidate",
      "updateInterval",
      "fetchInterval",
    ],
    correctAnswerIndex: 0, // "revalidate"
    explanation:
      "`revalidate`プロパティを使用して、ISRの更新間隔を秒単位で設定します。",
  },
  {
    id: "next13_21",
    question: "Next.js 13の新しいエラーハンドリングメカニズムは？",
    options: [
      "エラーページの自動生成",
      "エラーの部分的レンダリング",
      "エラーを`Error Boundary`でキャッチ",
      "エラーをサーバーサイドで無視",
    ],
    correctAnswerIndex: 2, // "エラーを`Error Boundary`でキャッチ"
    explanation:
      "Next.js 13では、`Error Boundary`がデフォルトでサポートされ、エラーを効率的にキャッチできます。",
  },
  {
    id: "next13_22",
    question: "Next.js 13での`Route Handlers`の主な目的は何ですか？",
    options: [
      "APIルートを置き換える",
      "クライアントサイドの状態管理",
      "スタイルの自動適用",
      "グローバルなエラーハンドリング",
    ],
    correctAnswerIndex: 0, // "APIルートを置き換える"
    explanation:
      "Next.js 13では、`Route Handlers`が導入され、カスタムAPIロジックを直接定義できるようになりました。",
  },
  {
    id: "next13_23",
    question: "Next.js 13での新しい画像最適化エンジンの名前は？",
    options: ["Sharp", "Squoosh", "Imagemin", "ImageSharp"],
    correctAnswerIndex: 0, // "Sharp"
    explanation:
      "Next.js 13では、`Sharp`が新しい画像最適化エンジンとして採用されました。",
  },
  {
    id: "next13_24",
    question: "Next.js 13のレイアウト分離機能の利点は？",
    options: [
      "異なるページ間でのコード共有",
      "クライアントサイドの状態管理",
      "レイアウトキャッシュの最適化",
      "ページの分割レンダリング",
    ],
    correctAnswerIndex: 2, // "レイアウトキャッシュの最適化"
    explanation:
      "レイアウトキャッシュの最適化により、再レンダリングを最小限に抑えます。",
  },
  {
    id: "next13_25",
    question: "Next.js 13でデフォルトで無効になった機能はどれですか？",
    options: [
      "グローバルCSS",
      "クライアントサイドのAPIルート",
      "自動画像最適化",
      "サーバーコンポーネントのキャッシュ",
    ],
    correctAnswerIndex: 0, // "グローバルCSS"
    explanation:
      "グローバルCSSは推奨されなくなり、CSS ModulesやCSS-in-JSの使用が推奨されます。",
  },
  {
    id: "next13_26",
    question: "Next.js 13の`Server Components`に関連する制約は？",
    options: [
      "クライアント側でのみ使用可能",
      "非同期関数が使用できない",
      "フロントエンドライブラリとの互換性",
      "サーバー専用のデータフェッチ",
    ],
    correctAnswerIndex: 3, // "サーバー専用のデータフェッチ"
    explanation:
      "`Server Components`はサーバーサイドでのデータフェッチ専用で設計されています。",
  },
  {
    id: "next13_27",
    question: "Next.js 13でのデフォルトのフォント最適化メソッドは何ですか？",
    options: [
      "Google Fonts API",
      "Font Display API",
      "Dynamic Font Loading",
      "next/font",
    ],
    correctAnswerIndex: 3, // "next/font"
    explanation:
      "`next/font`を使用することで、フォントの最適化が簡素化されました。",
  },
  {
    id: "next13_28",
    question: "Next.js 13で導入された`Metadata API`の主な用途は？",
    options: [
      "メタデータの静的生成",
      "SEOの動的管理",
      "クライアントサイドでのデータ保存",
      "SSRのパフォーマンス向上",
    ],
    correctAnswerIndex: 1, // "SEOの動的管理"
    explanation:
      "`Metadata API`を使用すると、SEOに関連するメタデータを動的に管理できます。",
  },
  {
    id: "next13_29",
    question: "Next.js 13で廃止予定の機能は？",
    options: [
      "Custom Server",
      "Static Exports",
      "Dynamic Imports",
      "API Routes",
    ],
    correctAnswerIndex: 0, // "Custom Server"
    explanation:
      "`Custom Server`は非推奨となり、Next.js標準のサーバーが推奨されます。",
  },
  {
    id: "next13_30",
    question:
      "Next.js 13で`Server Components`を有効にするには何を設定すべきですか？",
    options: [
      "`server: true`を設定",
      "`use client`を削除",
      "`use server`を追加",
      "`use`メソッドを使用",
    ],
    correctAnswerIndex: 2, // "`use server`を追加"
    explanation:
      "`use server`を追加することで、コンポーネントがサーバー側で動作するようになります。",
  },
];
