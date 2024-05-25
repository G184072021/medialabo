// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
//let s= 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義

    let b = document.querySelector('#kaito');
    b.addEventListener('click', hantei);

// 2. イベントハンドラの定義
function hantei() {
	let i = document.querySelector('input[name="seisuu"]');
	let yoso = i.value;
	//let yoso = seisuu;       
    
    let span_kaisu = document.querySelector('span#kaisuu');
    span_kaisuu.textContent=kaisuu+1;

    let span_answer = document.querySelector('span#answer');
    span_answer.textContent=yoso;
    let p_result=document.querySelector('p#result');

  
  
  
//        ページに表示する方法はまだ習っていないので
//        判定結果はコンソールに出力すること

  
  // 課題3-1: 正解判定する
console.log(kaisuu+1+"回の予想:"+yoso);

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

  