export type Quiz = {
  id: string; // ユニークな識別子
  question: string; // 質問文
  options: string[]; // 選択肢
  correctAnswerIndex: number; // 正解の選択肢インデックス
  explanation: string; // 説明文
};

export const nextQuizData: Quiz[] = [
  {
    id: "next1",
    question: "Next.jsでページを作成するために必要なファイル名は？",
    options: ["index.html", "index.tsx", "[page].tsx", "_app.tsx"],
    correctAnswerIndex: 1,
    explanation:
      "Next.jsでは、`pages`ディレクトリ内の`index.tsx`ファイルがルートページとして使用されます。",
  },
  {
    id: "next2",
    question: "Next.jsでの静的生成（SSG）を有効にする関数はどれですか？",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "useStaticProps",
    ],
    correctAnswerIndex: 1,
    explanation:
      "`getStaticProps`を使用すると、ビルド時にデータを取得して静的ページを生成できます。",
  },
  {
    id: "next3",
    question: "Next.jsのデフォルトのサーバーランタイムは何ですか？",
    options: ["Node.js", "Deno", "Vercel Edge", "Cloudflare Workers"],
    correctAnswerIndex: 0,
    explanation:
      "Next.jsはデフォルトでNode.jsをサーバーランタイムとして使用します。ただし、Vercelのようなプラットフォーム上ではEdge Functionsも利用可能です。",
  },
  {
    id: "next4",
    question: "Next.jsで動的ルートを作成するために使用するファイル名の形式は？",
    options: ["[id].tsx", "id.tsx", "(id).tsx", "{id}.tsx"],
    correctAnswerIndex: 0,
    explanation:
      "`[id].tsx`の形式を使用すると、`/pages/[id].tsx`が動的ルートとして解釈されます。",
  },
  {
    id: "next5",
    question:
      "Next.jsでクライアントサイドのナビゲーションに使用されるコンポーネントは？",
    options: ["a", "Link", "Navigate", "Router"],
    correctAnswerIndex: 1,
    explanation:
      "`Link`コンポーネントは、クライアントサイドのナビゲーションを効率的に実行します。",
  },
  {
    id: "next6",
    question:
      "Next.jsでのサーバーサイドレンダリング（SSR）を有効にする関数はどれですか？",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "useServerSideProps",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`getServerSideProps`を使用すると、リクエスト時にデータを取得してページを生成できます。",
  },
  {
    id: "next7",
    question: "Next.jsの_app.tsxファイルの主な役割は？",
    options: [
      "ページ全体のグローバルレイアウトや状態を管理する",
      "動的ルートを設定する",
      "APIエンドポイントを作成する",
      "CSSファイルをインポートする",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`_app.tsx`ファイルはアプリ全体のエントリーポイントとして使用され、グローバルな状態やレイアウトを設定できます。",
  },
  {
    id: "next8",
    question:
      "Next.jsでデフォルトでサポートされているCSSモジュールのファイル拡張子は？",
    options: [".module.css", ".css", ".scss", ".styled.css"],
    correctAnswerIndex: 0,
    explanation:
      "Next.jsでは`.module.css`ファイルがデフォルトでCSSモジュールとしてサポートされています。",
  },
  {
    id: "next9",
    question:
      "Next.jsでAPIルートを作成するために使用するディレクトリはどれですか？",
    options: ["api", "server", "routes", "endpoints"],
    correctAnswerIndex: 0,
    explanation:
      "`pages/api`ディレクトリ内に配置したファイルがAPIルートとして動作します。",
  },
  {
    id: "next10",
    question: "Next.jsで画像の最適化に使用されるコンポーネントは？",
    options: ["img", "Image", "Picture", "OptimizedImage"],
    correctAnswerIndex: 1,
    explanation:
      "Next.jsの`Image`コンポーネントは、自動的な画像の最適化をサポートします。",
  },
  {
    id: "next11",
    question:
      "Next.jsでISR（インクリメンタル静的再生成）を有効にするために使用するプロパティは？",
    options: ["revalidate", "cacheTime", "refreshInterval", "staticUpdate"],
    correctAnswerIndex: 0,
    explanation:
      "`revalidate`プロパティを`getStaticProps`の戻り値に追加すると、ISRを設定できます。",
  },
  {
    id: "next12",
    question:
      "Next.jsで404エラーページをカスタマイズするために作成するファイル名は？",
    options: ["404.html", "404.js", "_404.tsx", "error.tsx"],
    correctAnswerIndex: 1,
    explanation:
      "`pages/404.js`または`pages/404.tsx`を作成することでカスタム404ページを設定できます。",
  },
  {
    id: "next13",
    question: "Next.jsで動的インポートを実現するための関数は？",
    options: ["import()", "dynamic()", "useDynamicImport()", "importDynamic()"],
    correctAnswerIndex: 1,
    explanation:
      "`next/dynamic`の`dynamic()`関数を使用して、コンポーネントを遅延ロードできます。",
  },
  {
    id: "next14",
    question:
      "Next.jsでApp Router（新しいルーティングシステム）を有効にするディレクトリは？",
    options: ["pages", "src", "app", "routes"],
    correctAnswerIndex: 2,
    explanation:
      "Next.js 13以降では、`app`ディレクトリを使用してApp Routerを有効にします。",
  },
  {
    id: "next15",
    question: "Next.jsのMiddlewareでリクエストを処理するファイルの名前は？",
    options: [
      "_middleware.js",
      "middleware.ts",
      "requestHandler.js",
      "router.js",
    ],
    correctAnswerIndex: 1,
    explanation:
      "`middleware.ts`または`middleware.js`を使用して、リクエストを処理できます。",
  },
  {
    id: "next16",
    question: "Next.jsでビルドサイズを削減するために最も効果的な方法は？",
    options: [
      "画像を圧縮する",
      "動的インポートを使用する",
      "CSSを最小化する",
      "ブラウザキャッシュを増やす",
    ],
    correctAnswerIndex: 1,
    explanation:
      "動的インポートを使用すると、必要なコードだけをロードすることでビルドサイズを削減できます。",
  },
  {
    id: "next17",
    question: "Next.jsで環境変数を設定するためのファイル名は？",
    options: [".env", ".env.local", ".env.production", ".next.env"],
    correctAnswerIndex: 1,
    explanation:
      "Next.jsでは、`.env.local`がデフォルトで読み込まれる環境変数ファイルです。",
  },
  {
    id: "next18",
    question:
      "Next.jsでヘッドメタデータを設定するために使用するコンポーネントは？",
    options: ["Header", "Head", "Meta", "Helmet"],
    correctAnswerIndex: 1,
    explanation:
      "`next/head`の`Head`コンポーネントを使用すると、ページのヘッド要素を管理できます。",
  },
  {
    id: "next19",
    question:
      "Next.jsでプリフェッチされるリンクを無効にするためのプロパティは？",
    options: ["prefetch", "lazy", "eager", "disablePrefetch"],
    correctAnswerIndex: 0,
    explanation:
      "`<Link>`コンポーネントに`prefetch={false}`を指定すると、プリフェッチを無効にできます。",
  },
  {
    id: "next20",
    question: "Next.jsでカスタムエラーハンドリングを実装するための推奨方法は？",
    options: ["Middleware", "Error Boundary", "API Route", "SSR"],
    correctAnswerIndex: 1,
    explanation:
      "ReactのError Boundaryを使用すると、アプリケーションで発生したエラーを適切に処理できます。",
  },
  {
    id: "next21",
    question: "Next.jsで静的HTMLエクスポートを有効にするコマンドは？",
    options: ["next build", "next export", "next generate", "next static"],
    correctAnswerIndex: 1,
    explanation:
      "`next export`コマンドを使用すると、静的HTMLファイルを生成できます。",
  },
  {
    id: "next22",
    question: "Next.jsでレイアウトを実装する最も推奨される方法は？",
    options: [
      "_app.tsxでラップする",
      "レイアウトコンポーネントを使用する",
      "getStaticPropsで設定する",
      "Middlewareを使用する",
    ],
    correctAnswerIndex: 1,
    explanation:
      "レイアウトコンポーネントを作成し、必要なページで使用するのが推奨される方法です。",
  },
  {
    id: "next23",
    question: "Next.jsのEdge Middlewareの主な使用目的は？",
    options: [
      "静的サイトを構築する",
      "リクエストを事前に処理する",
      "グローバルな状態を管理する",
      "動的インポートを有効にする",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Edge Middlewareを使用すると、リクエストをサーバーで処理する前にインターセプトできます。",
  },
  {
    id: "next24",
    question:
      "Next.jsでCSR（クライアントサイドレンダリング）を実装するための最も簡単な方法は？",
    options: ["getStaticProps", "getServerSideProps", "useEffect", "useSSR"],
    correctAnswerIndex: 2,
    explanation:
      "`useEffect`を使用すると、クライアントサイドで非同期データの取得が可能です。",
  },
  {
    id: "next25",
    question:
      "Next.jsのAPIルートがエッジで実行されるかどうかを決定するプロパティは？",
    options: ["runtime", "edge", "executionMode", "edgeRuntime"],
    correctAnswerIndex: 0,
    explanation:
      "`runtime`プロパティに`edge`を指定すると、APIルートをエッジで実行できます。",
  },
  {
    id: "next26",
    question:
      "Next.jsでページトランジションを管理するライブラリとして適しているものは？",
    options: ["Framer Motion", "Redux", "Axios", "Lodash"],
    correctAnswerIndex: 0,
    explanation:
      "Framer Motionはアニメーションライブラリで、Next.jsのページトランジションを管理するのに適しています。",
  },
  {
    id: "next27",
    question: "Next.jsで動的ページ生成を実現する場合に使用するメソッドは？",
    options: [
      "getStaticPaths",
      "getServerSidePaths",
      "getDynamicPaths",
      "useDynamicRoutes",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`getStaticPaths`を使用して、動的ページの静的生成を実現します。",
  },
  {
    id: "next28",
    question: "Next.jsでブラウザ互換性を高めるための推奨方法は？",
    options: [
      "バベルやポリフィルを使用する",
      "APIルートを使用する",
      "クライアントサイドレンダリングに依存する",
      "Next.jsの設定を変更する",
    ],
    correctAnswerIndex: 0,
    explanation:
      "バベルやポリフィルを使用することで、古いブラウザでもNext.jsアプリケーションを実行できます。",
  },
  {
    id: "next29",
    question: "Next.jsで環境変数を公開するために使用する接頭辞は？",
    options: ["NEXT_", "PUBLIC_", "REACT_", "ENV_"],
    correctAnswerIndex: 1,
    explanation:
      "`PUBLIC_`を付けると、その環境変数がクライアントサイドでも使用可能になります。",
  },
  {
    id: "next30",
    question: "Next.jsでカスタムヘッダーを設定するためのメソッドは？",
    options: [
      "next.config.jsのheaders()",
      "getServerSideProps",
      "useHeaders",
      "Middleware",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`next.config.js`の`headers()`メソッドを使用してカスタムヘッダーを設定できます。",
  },
];
