export type Quiz = {
  id: string; // ユニークな識別子
  question: string; // 質問文
  options: string[]; // 選択肢
  correctAnswerIndex: number; // 正解の選択肢インデックス
  explanation: string; // 説明文
};

export const reactQuizData: Quiz[] = [
  {
    id: "react1",
    question: "Reactの主な用途は何ですか？",
    options: [
      "バックエンドロジックの構築",
      "モバイルアプリの開発",
      "ユーザーインターフェースの構築",
      "データベースの管理",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Reactは主にユーザーインターフェース（UI）を構築するためのJavaScriptライブラリです。",
  },
  {
    id: "react2",
    question:
      "Reactでコンポーネントを作成するために使用される方法はどれですか？",
    options: ["HTMLテンプレート", "JavaScript関数", "CSSファイル", "SQLクエリ"],
    correctAnswerIndex: 1,
    explanation:
      "Reactではコンポーネントは通常JavaScriptの関数またはクラスとして作成されます。",
  },
  {
    id: "react3",
    question: "ReactのJSXはどのようなものですか？",
    options: [
      "JavaScriptの文法",
      "JavaScriptを拡張したテンプレート構文",
      "CSSの拡張機能",
      "HTMLを圧縮したフォーマット",
    ],
    correctAnswerIndex: 1,
    explanation:
      "JSXはJavaScriptの拡張構文で、HTMLのようなコードをReactで使用できます。",
  },
  {
    id: "react4",
    question: "Reactの状態（State）は何のために使用されますか？",
    options: [
      "CSSの管理",
      "ユーザー入力やデータの追跡",
      "サーバーとの通信",
      "ルーティングの管理",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Stateはコンポーネントが動的なデータを管理し、UIの再描画を行うために使用されます。",
  },
  {
    id: "react5",
    question: "Reactのpropsは何のために使用されますか？",
    options: [
      "データを親コンポーネントから子コンポーネントに渡すため",
      "状態を管理するため",
      "スタイルを適用するため",
      "サーバーと通信するため",
    ],
    correctAnswerIndex: 0,
    explanation:
      "Propsはコンポーネント間でデータを渡すための仕組みで、読み取り専用です。",
  },
  {
    id: "react6",
    question: "useStateフックは何を提供しますか？",
    options: [
      "CSSのスタイルを設定する",
      "コンポーネントの状態を管理する",
      "非同期操作を処理する",
      "DOM要素にアクセスする",
    ],
    correctAnswerIndex: 1,
    explanation:
      "useStateはReactフックで、関数コンポーネントに状態を追加します。",
  },
  {
    id: "react7",
    question: "Reactで状態が更新されたときに何が起こりますか？",
    options: [
      "ブラウザがリロードされる",
      "コンポーネントが再レンダリングされる",
      "状態がリセットされる",
      "イベントリスナーが削除される",
    ],
    correctAnswerIndex: 1,
    explanation:
      "状態が更新されるとReactは仮想DOMを更新し、必要な部分だけを再レンダリングします。",
  },
  {
    id: "react8",
    question: "Reactフックの1つであるuseEffectの用途は？",
    options: [
      "状態の初期化",
      "副作用の処理",
      "スタイルの適用",
      "データのキャッシュ",
    ],
    correctAnswerIndex: 1,
    explanation:
      "useEffectはデータの取得やDOMの操作などの副作用を処理するために使用されます。",
  },
  {
    id: "react9",
    question: "Reactのキー（key）の主な目的は何ですか？",
    options: [
      "イベントの処理",
      "コンポーネントのスタイルを設定する",
      "リスト内の要素を一意に識別する",
      "状態を保存する",
    ],
    correctAnswerIndex: 2,
    explanation:
      "キーはリスト内の要素を一意に識別し、効率的な再レンダリングを実現します。",
  },
  {
    id: "react10",
    question: "React Routerは何のために使用されますか？",
    options: [
      "サーバーと通信するため",
      "アプリケーションのルーティングを管理するため",
      "スタイルを適用するため",
      "状態を管理するため",
    ],
    correctAnswerIndex: 1,
    explanation:
      "React Routerはシングルページアプリケーション（SPA）でのルーティングを管理します。",
  },

  {
    id: "react11",
    question: "Reactの仮想DOMとは何ですか？",
    options: [
      "ブラウザのDOMに直接アクセスする仕組み",
      "Reactの内部で管理される軽量なDOMのコピー",
      "HTMLファイルを自動生成する仕組み",
      "サーバーサイドレンダリングの一部",
    ],
    correctAnswerIndex: 1,
    explanation:
      "仮想DOMは軽量なDOMのコピーで、実際のDOMの変更を効率的に行うために使用されます。",
  },
  {
    id: "react12",
    question:
      "コンポーネントのライフサイクルメソッドを使えるのはどのコンポーネントですか？",
    options: [
      "関数コンポーネント",
      "クラスコンポーネント",
      "どちらも使える",
      "どちらも使えない",
    ],
    correctAnswerIndex: 1,
    explanation:
      "ライフサイクルメソッドはクラスコンポーネントでのみ使用可能です。ただし、関数コンポーネントではフック（useEffectなど）を使用して同様の処理が可能です。",
  },
  {
    id: "react13",
    question: "Reactで非同期データを扱う際によく使用されるフックはどれですか？",
    options: ["useState", "useEffect", "useMemo", "useReducer"],
    correctAnswerIndex: 1,
    explanation:
      "非同期データの取得などの副作用を処理するために、useEffectが使用されます。",
  },
  {
    id: "react14",
    question:
      "Reactコンポーネントが再レンダリングされる原因として正しいものはどれですか？",
    options: [
      "状態（State）の変更",
      "親コンポーネントの再レンダリング",
      "渡されたプロパティ（Props）の変更",
      "すべて正しい",
    ],
    correctAnswerIndex: 3,
    explanation:
      "状態、プロパティ、親コンポーネントのレンダリングなどが原因で再レンダリングされます。",
  },
  {
    id: "react15",
    question: "Reactでフォーム入力を管理するための正しい方法はどれですか？",
    options: [
      "イベントリスナーを直接DOMに追加する",
      "状態を使用して入力値を管理する",
      "HTMLで直接JavaScriptコードを書く",
      "フォーム入力はReactでは管理できない",
    ],
    correctAnswerIndex: 1,
    explanation:
      "ReactではuseStateなどを使用して状態を管理し、フォーム入力を制御します。",
  },
  {
    id: "react16",
    question: "Reactで高階コンポーネント（HOC）の主な目的は何ですか？",
    options: [
      "複数のコンポーネントを結合する",
      "再利用可能なロジックを共有する",
      "コンポーネントのスタイルを変更する",
      "アニメーションを追加する",
    ],
    correctAnswerIndex: 1,
    explanation:
      "高階コンポーネント（HOC）は、再利用可能なロジックを他のコンポーネントに渡すためのパターンです。",
  },
  {
    id: "react17",
    question: "Reactコンポーネントを遅延ロードする方法はどれですか？",
    options: ["useState", "React.lazy", "useEffect", "React.memo"],
    correctAnswerIndex: 1,
    explanation:
      "React.lazyを使用することで、コンポーネントを遅延ロードできます。",
  },
  {
    id: "react18",
    question: "React.memoの主な用途は何ですか？",
    options: [
      "関数の結果をキャッシュする",
      "コンポーネントの再レンダリングを防ぐ",
      "非同期操作を処理する",
      "ライフサイクルメソッドを追加する",
    ],
    correctAnswerIndex: 1,
    explanation:
      "React.memoはプロパティが変更されない限り、コンポーネントの再レンダリングを防ぎます。",
  },
  {
    id: "react19",
    question: "Reactでフラグメントを使用する理由は？",
    options: [
      "コンポーネントにCSSを適用するため",
      "余計なDOM要素を追加せずに複数の子要素をグループ化するため",
      "APIデータを取得するため",
      "ブラウザ互換性を向上させるため",
    ],
    correctAnswerIndex: 1,
    explanation:
      "フラグメント（<React.Fragment>または<>）を使用すると、不要なDOM要素を追加せずに複数の子要素をグループ化できます。",
  },
  {
    id: "react20",
    question: "Context APIは何のために使用されますか？",
    options: [
      "非同期処理の管理",
      "スタイルの適用",
      "プロパティのバケツリレーを解消する",
      "ルーティングの管理",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Context APIを使用すると、プロパティのバケツリレーを解消し、複数のコンポーネント間でデータを共有できます。",
  },
  {
    id: "react21",
    question: "ReactでStrictModeを使用する目的は何ですか？",
    options: [
      "Reactアプリを高速化する",
      "潜在的な問題を検出する",
      "状態を管理する",
      "ブラウザの互換性を向上させる",
    ],
    correctAnswerIndex: 1,
    explanation:
      "StrictModeはReactの開発ツールで、潜在的なバグや非推奨のコードを検出するのに役立ちます。",
  },
  {
    id: "react22",
    question: "useReducerフックは通常どのような場面で使用されますか？",
    options: [
      "複雑な状態ロジックを管理する",
      "非同期操作を処理する",
      "DOM要素を操作する",
      "リストをフィルタリングする",
    ],
    correctAnswerIndex: 0,
    explanation:
      "useReducerは複雑な状態管理や、複数の状態を持つ場合に適しています。",
  },
  {
    id: "react23",
    question: "ReactでCSSを適用する最も簡単な方法はどれですか？",
    options: [
      "CSSファイルをインポートする",
      "インラインスタイルを使用する",
      "CSS-in-JSライブラリを使用する",
      "スタイルコンポーネントを作成する",
    ],
    correctAnswerIndex: 0,
    explanation:
      "ReactではCSSファイルをインポートしてクラス名を指定することで簡単にスタイルを適用できます。",
  },
  {
    id: "react24",
    question: "Reactで子コンポーネントに値を渡すための正しい方法はどれですか？",
    options: ["useState", "Props", "Context", "useEffect"],
    correctAnswerIndex: 1,
    explanation:
      "Propsを使用すると、親コンポーネントから子コンポーネントに値を渡せます。",
  },
  {
    id: "react25",
    question: "useRefフックの用途として正しいものはどれですか？",
    options: [
      "DOM要素への参照を保持する",
      "状態を管理する",
      "非同期操作を処理する",
      "コンポーネントをレンダリングする",
    ],
    correctAnswerIndex: 0,
    explanation:
      "useRefを使用すると、DOM要素やミューテーブルな値への参照を保持できます。",
  },
  {
    id: "react26",
    question: "Reactアプリケーションでエラーバウンダリを使用する目的は？",
    options: [
      "アプリ全体を初期化する",
      "子コンポーネントのエラーをキャッチしてUIを保護する",
      "データをキャッシュする",
      "非同期操作をキャンセルする",
    ],
    correctAnswerIndex: 1,
    explanation:
      "エラーバウンダリはReactコンポーネントツリー内のエラーをキャッチし、UI全体が壊れないようにします。",
  },
  {
    id: "react27",
    question: "ReactでLazy Loadingを有効にするために必要なコンポーネントは？",
    options: ["Suspense", "Fragment", "StrictMode", "ErrorBoundary"],
    correctAnswerIndex: 0,
    explanation: "React.lazyとSuspenseを組み合わせてLazy Loadingを実現します。",
  },
  {
    id: "react28",
    question: "Reactの状態を永続化するために適している方法は？",
    options: [
      "Context API",
      "ReduxやZustandなどの状態管理ライブラリ",
      "useEffectフック",
      "DOM API",
    ],
    correctAnswerIndex: 1,
    explanation:
      "ReduxやZustandなどの状態管理ライブラリを使用すると、状態を永続化できます。",
  },
  {
    id: "react29",
    question:
      "Reactでの非同期データの取得に使用される一般的なライブラリはどれですか？",
    options: ["Redux", "Axios", "Lodash", "Moment.js"],
    correctAnswerIndex: 1,
    explanation:
      "Axiosは非同期データの取得に広く使用されているHTTPクライアントライブラリです。",
  },
  {
    id: "react30",
    question: "Reactでポータルを使用する主な理由は何ですか？",
    options: [
      "データの永続化",
      "DOMツリーの外にUI要素をレンダリングする",
      "CSSスタイルを適用する",
      "コンポーネント間で状態を共有する",
    ],
    correctAnswerIndex: 1,
    explanation:
      "ポータルを使用すると、モーダルやツールチップのようなUI要素を現在のDOMツリーの外側にレンダリングできます。",
  },
];
