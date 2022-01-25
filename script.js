let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
function changeMode(){
    var mybody = document.body;
    mybody.classList.toggle("mydark")
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

}

let countDate = new Date('jan 1, 2022 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    CountDown();
},1000)

var x = document.getElementById("out")
var y = document.getElementById("address")
var z =  document.getElementById('icon')
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText="Geo Not Supported"
    }
}

function showPosition(data){
    
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude
    var url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)                 
        data.list.map((item) => {
            y.innerText=`${item.temp.day}°C and ${item.weather[0].description}`
            z.innerHTML=`<img class='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
        })
        
    })
}



function coupon(){
    document.getElementById('coupon').style.visibility="visible"
}

function closeDiv(){
    document.getElementById('coupon').style.visibility="hidden"
}
    

let catUrl="http://localhost:3000/category";


function getCategory(data){
    var x=document.getElementsByClassName("name");
    console.log(x);
    
    var innerName;
    fetch(catUrl)
.then((res)=>res.json())
.then((data) => {
    console.log(data);
    data.map((item)=>{
        for(i=0;i<(item.name).length;i++){
             innerName=`<h3>${item.name}</h3>`   
             x.innerHTML=innerName
        }
        console.log(innerName)
       
        console.log(x.innerHtml)
       
    })
//     x.innerHTML=`<h3>${innerName}</h3>`
//    console.log(x)
//    console.log("data",data)

})


}
