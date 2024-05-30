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
console.log('value'+o.getAttribute('value'));

let url="http://wwww.nishita-lab.org/web-contents"
}