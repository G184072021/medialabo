// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let s= 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
  function hantei() {
    let b = document.querySelector('button#print');
    b.addEventListener('click', greeting);

// 2. イベントハンドラの定義
function greeting() {
	let i = document.querySelector('input[name="seisuu"]');
	let seisuu = i.value;
	let yoso = seisuu;       
    kaisu++;
    let presult = document.querySelector('p#result');
    span = document.createElement('span');
    presult.insertAdjacentElement('beforeend',span);


    span.textContent = (kaisu+"回目の予想："+yoso+"  ");

    let presult2 = document.querySelector('p#result2');
    li = document.createElement('li');
    presult2.insertAdjacentElement('afterend',li);

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  
  
//        ページに表示する方法はまだ習っていないので
//        判定結果はコンソールに出力すること

  
  // 課題3-1: 正解判定する
  if(kotae == yoso){
    li.textContent = ("正解です。おめでとう！");
    console.log = ("正解です。おめでとう！");
}
else if(kaisu >= 4){
    li.textContent = ("答えは"+kotae+"でした．すでにゲームは終わっています");
    
}
else if(kotae > yoso){
    li.textContent =("まちがい。答えはもっと大きいですよ");
    
}
else if(kotae < yoso){
    li.textContent =("まちがい。答えはもっと小さいですよ");
    
}
}
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
  