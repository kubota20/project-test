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
  {
    id: "js9",
    question:
      "次のうち、JavaScriptの `==` 演算子と `===` 演算子の違いは何ですか？",
    options: [
      "`==` は型変換を行い、`===` は型変換を行わない",
      "`==` は厳密な比較を行い、`===` は緩やかな比較を行う",
      "`==` と `===` は同じ動作をする",
      "`==` は比較を行わず、`===` だけが比較を行う",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`==` は型変換を行って比較を行いますが、`===` は型変換を行わず、厳密な比較を行います。",
  },

  {
    id: "js10",
    question: "JavaScriptの `null` と `undefined` の違いは何ですか？",
    options: [
      "`null` はオブジェクトで、`undefined` は値が未定義",
      "`null` は値が未定義で、`undefined` はオブジェクト",
      "`null` と `undefined` は同じ",
      "`null` は誤った値で、`undefined` は未使用の変数",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`null` は意図的に「値がない」ことを表現するために使用され、`undefined` は変数が宣言されたが値が代入されていない場合に自動的に割り当てられます。",
  },
  {
    id: "js11",
    question: "JavaScriptで配列の長さを取得するプロパティは何ですか？",
    options: ["length", "size", "count", "total"],
    correctAnswerIndex: 0,
    explanation:
      "配列の長さを取得するには、`length` プロパティを使用します。例えば、`arr.length` のように記述します。",
  },
  {
    id: "js12",
    question: "JavaScriptの `forEach` メソッドは何を返しますか？",
    options: ["配列", "undefined", "新しい配列", "エラー"],
    correctAnswerIndex: 1,
    explanation:
      "`forEach` メソッドは配列の各要素に対してコールバック関数を実行しますが、戻り値としては `undefined` を返します。",
  },
  {
    id: "js13",
    question:
      "JavaScriptのオブジェクトにプロパティを追加する方法として正しいのはどれですか？",
    options: [
      "object.property = value;",
      "object.addProperty(value);",
      "object.push(value);",
      "object.append(value);",
    ],
    correctAnswerIndex: 0,
    explanation:
      "オブジェクトにプロパティを追加するには、`object.property = value;` のように書きます。",
  },
  {
    id: "js14",
    question: "JavaScriptで `this` が指すものは何ですか？",
    options: [
      "関数内で `this` が指すのはその関数の呼び出し元のオブジェクト",
      "常にグローバルオブジェクトを指す",
      "常に現在の関数を指す",
      "`this` は常に `null`",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`this` は関数の呼び出し元のオブジェクトを指しますが、`this` が指す対象はコンテキストによって異なります。",
  },
  {
    id: "js15",
    question:
      "次のうち、JavaScriptで配列に要素を追加するメソッドはどれですか？",
    options: ["push()", "add()", "insert()", "append()"],
    correctAnswerIndex: 0,
    explanation: "`push()` メソッドを使って、配列の末尾に要素を追加できます。",
  },
  {
    id: "js16",
    question: "JavaScriptの `map()` メソッドは何を返しますか？",
    options: ["新しい配列", "undefined", "元の配列", "エラー"],
    correctAnswerIndex: 0,
    explanation:
      "`map()` メソッドは新しい配列を返します。元の配列は変更されません。",
  },
  {
    id: "js17",
    question: "次のうち、JavaScriptの関数宣言として正しいものはどれですか？",
    options: [
      "function = myFunc() {}",
      "function myFunc() {}",
      "myFunc() function {}",
      "func myFunc() {}",
    ],
    correctAnswerIndex: 1,
    explanation:
      "関数を定義するには、`function` キーワードを使用します。例えば、`function myFunc() {}` のように記述します。",
  },
  {
    id: "js18",
    question: "JavaScriptで変数を定義する際、正しいキーワードはどれですか？",
    options: ["let", "var", "const", "すべての選択肢"],
    correctAnswerIndex: 3,
    explanation:
      "JavaScriptでは、`let`、`var`、`const` のいずれかのキーワードを使って変数を定義できます。",
  },
  {
    id: "js19",
    question: "次のうち、JavaScriptで無限ループを作成する方法はどれですか？",
    options: [
      "while(true) {}",
      "for(;;) {}",
      "do {} while(true);",
      "すべての選択肢",
    ],
    correctAnswerIndex: 3,
    explanation:
      "無限ループを作成するには、`while(true)`、`for(;;)`、または `do {} while(true);` のいずれも使用できます。",
  },
  {
    id: "js20",
    question: "JavaScriptの `parseInt()` メソッドは何を行いますか？",
    options: [
      "文字列を整数に変換する",
      "文字列を浮動小数点数に変換する",
      "整数を文字列に変換する",
      "浮動小数点数を整数に変換する",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`parseInt()` メソッドは、文字列を整数に変換します。例えば、`parseInt('123')` は `123` を返します。",
  },
  {
    id: "js21",
    question: "JavaScriptでイベントリスナーを追加する方法はどれですか？",
    options: [
      "element.addEventListener('click', function);",
      "element.on('click', function);",
      "element.addListener('click', function);",
      "element.addEvent('click', function);",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`addEventListener()` メソッドを使用して、指定されたイベントのリスナーを追加します。",
  },
  {
    id: "js22",
    question: "JavaScriptで文字列を結合する方法はどれですか？",
    options: [
      "str.concat(str2);",
      "str + str2;",
      "str.append(str2);",
      "str.combine(str2);",
    ],
    correctAnswerIndex: 1,
    explanation:
      "文字列を結合するには、`+` 演算子を使用します。例えば、`'Hello ' + 'World'` のように記述します。",
  },
  {
    id: "js23",
    question:
      "次のうち、JavaScriptで非同期処理を行う方法として正しいのはどれですか？",
    options: ["setTimeout()", "setInterval()", "Promise", "すべての選択肢"],
    correctAnswerIndex: 3,
    explanation:
      "非同期処理は `setTimeout()`、`setInterval()`、および `Promise` を使用して行うことができます。",
  },
  {
    id: "js24",
    question: "JavaScriptの `slice()` メソッドは何を行いますか？",
    options: [
      "配列の一部を新しい配列として返す",
      "配列の全要素を削除する",
      "配列を並べ替える",
      "配列の要素を追加する",
    ],
    correctAnswerIndex: 0,
    explanation:
      "`slice()` メソッドは配列の一部を新しい配列として返します。元の配列は変更されません。",
  },
  {
    id: "js25",
    question:
      "次のうち、JavaScriptでオブジェクトをコピーする方法として正しいのはどれですか？",
    options: ["Object.copy()", "Object.assign()", "object.copy()", "コピー()"],
    correctAnswerIndex: 1,
    explanation:
      "`Object.assign()` メソッドを使用すると、オブジェクトをシャローコピーできます。",
  },
  {
    id: "js26",
    question: "JavaScriptでクラスを定義するためのキーワードはどれですか？",
    options: ["class", "function", "object", "constructor"],
    correctAnswerIndex: 0,
    explanation:
      "`class` キーワードを使用して、JavaScriptでクラスを定義できます。",
  },
  {
    id: "js27",
    question: "JavaScriptの `filter()` メソッドは何を返しますか？",
    options: ["新しい配列", "undefined", "元の配列", "エラー"],
    correctAnswerIndex: 0,
    explanation:
      "`filter()` メソッドは条件に一致する要素だけを新しい配列として返します。",
  },
  {
    id: "js28",
    question:
      "次のうち、JavaScriptで変数を再代入できないようにする方法はどれですか？",
    options: ["const", "let", "var", "不可変"],
    correctAnswerIndex: 0,
    explanation: "`const` を使って定義された変数は再代入できません。",
  },
  {
    id: "js29",
    question: "JavaScriptで文字列を小文字に変換するメソッドはどれですか？",
    options: ["toLowerCase()", "toUpperCase()", "toString()", "charAt()"],
    correctAnswerIndex: 0,
    explanation:
      "`toLowerCase()` メソッドを使用すると、文字列を小文字に変換できます。",
  },
  {
    id: "js30",
    question: "JavaScriptで日付を表示するメソッドはどれですか？",
    options: ["getDate()", "getDay()", "toLocaleDateString()", "getTime()"],
    correctAnswerIndex: 2,
    explanation:
      "`toLocaleDateString()` メソッドを使って、日付をローカライズされた文字列として表示できます。",
  },
];
