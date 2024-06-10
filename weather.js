let data = {
    "coord": {
      "lon": 116.3972,
      "lat": 39.9075
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "曇りがち",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 9.94,
      "feels_like": 8.65,
      "temp_min": 9.94,
      "temp_max": 9.94,
      "pressure": 1022,
      "humidity": 14,
      "sea_level": 1022,
      "grnd_level": 1016
    },
    "visibility": 10000,
    "wind": {
      "speed": 2.65,
      "deg": 197,
      "gust": 4.84
    },
    "clouds": {
      "all": 53
    },
    "dt": 1646542386,
    "sys": {
      "type": 1,
      "id": 9609,
      "country": "CN",
      "sunrise": 1646520066,
      "sunset": 1646561447
    },
    "timezone": 28800,
    "id": 1816670,
    "name": "北京市",
    "cod": 200
  };
  
  ////////// 課題3-2 ここからプログラムを書こう
  
let lon=document.querySelector('#lon');
let lat=document.querySelector('#lat');
let description=document.querySelector('#descrption');
let temp_min=document.querySelector('#temp_min');
let temp_max=document.querySelector('#temp_max');
let humidity=document.querySelector('#humidity');
let speed=document.querySelector('#speed');
let deg=document.querySelector('#deg');
let name=document.querySelector('#name');

let button=document.querySelector('#btn');
button.addEventListener('click',sendRequest);

function sendRequest(){
    let s=document.querySelector('select#country');
    let idx=s.selectedIndex;

let os=s.querySelectorAll('option');
let o=os.item(idx);
let countryid=o.getAttribute('value');
console.log('value='+o.getAttribute('value'));

let url='https://www.nishita-lab.org/web-contents/josns/openweather/'+countryid+'.json';
//通信開始
axios.get(url)
.then(showResult)//通信成功
.catch(showError)//通信失敗
.then(finish);//通信の最後の処理

}
function showResult(resp){
  //サバーから送られてきたデータを出力
  let data =resp.data;

  //dataが文字列型なら 、オブジェクトに変換する。
  if (typeof data ==='string'){
    data =JSON.parse(data);
  }
  //dataをコンソールに出力
  console.log(data);
  //data.xを出力
  console.log(data.x);

  lon.textContent="緯度"+data.coord.lon;
  lat.textContent="経度"+data.coord.lat;
  description.textContent="天気"+data.weather[0].description;
  temp_max.textContent="最高気温"+data.main.temp_max;
  temp_min.textContent="最低気温"+data.main.temp_min;
  humidity.textContent="湿度"+data.mainhumidity;
  speed.textContent="風速"+data.wind.speed;
  deg.textContent="風向"+data.wind.deg;
  name.textContent="都市名"+data.name;

}
//通信エラーが発生した時の処理
function showError(err){
  console.log(err);
}

//通信の最後にいつも実行する処理
function finish(){
  console.log('Ajax通信が終わりました。')
}

