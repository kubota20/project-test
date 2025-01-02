// data.ts

// クイズの型定義
export type Quiz = {
  id: string; // ユニークな識別子
  question: string; // 質問文
  options: string[]; // 選択肢
  correctAnswerIndex: number; // 正解の選択肢インデックス
  explanation: string; // 説明文
};

// JavaScriptに関するクイズデータ
export const quizData: Quiz[] = [
  {
    id: "js1",
    question: "`console.log(typeof null)` の結果は何ですか？",
    options: ["object", "null", "undefined", "function"],
    correctAnswerIndex: 0, // 'object'
    explanation:
      "これはJavaScriptの仕様で、`typeof null` の結果は歴史的な理由で 'object' です。",
  },
  {
    id: "js2",
    question: "JSON文字列をオブジェクトに変換するメソッドはどれですか？",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.objectify()",
      "JSON.toObject()",
    ],
    correctAnswerIndex: 1, // JSON.parse()
    explanation:
      "JSON文字列をオブジェクトに変換する場合は、`JSON.parse()` を使用します。",
  },
  {
    id: "js3",
    question: "JavaScriptで `NaN` は何を意味しますか？",
    options: [
      "数値ではない (Not a Number)",
      "負の数とNULL (Negative and Null)",
      "新規および次 (New and Next)",
      "オブジェクトではない (Not an Object)",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`NaN` は「数値ではない」を意味し、通常、無効な数値演算の結果として生成されます。",
  },
  {
    id: "js4",
    question: "次のうち、JavaScriptのデータ型ではないものはどれですか？",
    options: ["Boolean", "Undefined", "Number", "Float"],
    correctAnswerIndex: 3,
    explanation:
      "`Float` はJavaScriptの正式なデータ型ではありません。JavaScriptでは浮動小数点数も `Number` 型として扱われます。",
  },
  {
    id: "js5",
    question: "JavaScriptで定数を定義する正しい方法はどれですか？",
    options: ["let", "var", "const", "constant"],
    correctAnswerIndex: 2,
    explanation:
      "`const` キーワードを使用すると、再代入できない定数を定義できます。ただし、オブジェクトや配列の場合、内容を変更することは可能です。",
  },
  {
    id: "js6",
    question: "JavaScriptの `use strict` の目的は何ですか？",
    options: [
      "厳格モードを有効にする",
      "定数を定義する",
      "新しいスコープを作成する",
      "厳格なデータ型を定義する",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`use strict` を使用すると、厳格モードが有効になり、エラーを防ぐための追加のチェックが行われます。例えば、暗黙的なグローバル変数の使用を禁止します。",
  },
  {
    id: "js7",
    question: "JavaScriptで1行コメントを書くための正しい記号はどれですか？",
    options: ["//", "/* */", "#", "<!-- -->"],
    correctAnswerIndex: 0,
    explanation:
      "`//` を使用すると1行コメントを書けます。一方、`/* */` は複数行コメントに使用されます。",
  },
  {
    id: "js8",
    question: "JavaScript配列を正しく宣言する方法はどれですか？",
    options: [
      "let colors = 'red', 'green', 'blue';",
      "let colors = ['赤', '緑', '青'];",
      "let colors = (1:'赤', 2:'緑', 3:'青');",
      "let colors = {1='赤', 2='緑', 3='青'};",
    ],
    correctAnswerIndex: 1,
    explanation:
      "JavaScriptでは、配列を宣言する際に角括弧 `[]` を使用します。例えば、`let colors = ['赤', '緑', '青'];` のように記述します。",
  },
];
