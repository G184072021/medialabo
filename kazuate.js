// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

    let b = document.querySelector('#kaito');
    b.addEventListener('click', hantei);
// 2. イベントハンドラの定義
function hantei() {
	let i = document.querySelector('input[name="seisu"]');
	let yoso = i.value;     
    
    let span_kaisu = document.querySelector('span#kaisu');
    span_kaisu.textContent=kaisu+1;

    let span_answer = document.querySelector('span#answer');
    span_answer.textContent=yoso;

    let p_result=document.querySelector('p#result');

  
  
  
//        ページに表示する方法はまだ習っていないので
//        判定結果はコンソールに出力すること

  
  // 課題3-1: 正解判定する
console.log(kaisu+1+"回の予想:"+yoso);

  if(kaisu>=3){
   p_result.textContent="答えは"+kotae+"でした。すでにゲームは終わっています。";
}
else if(yoso==kotae){
  p_result.textContent = "正解です。おめでとう！";
    
}
else if(kaisu==2){
  p_result.textContent ="間違い。残念でした答えは"+kotae+"でした。";
    
}
else if(yoso<kotae){
  p_result.textContent ="間違い。答えはもっと大きいです。";
    
}
else{
  p_result.textContent="間違い。答えはもっと小さいです。";
}
kaisu=kaisu+1;
}


  