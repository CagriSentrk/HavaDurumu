const url='https://api.openweathermap.org/data/2.5/'
const key='90e8c977632b3de426b3d61c7b5bddea'
const setQuery=(e)=>{
    if(e.keyCode=='13')
    getResult(searchBar.value)

}

const getResult =(cityName)=>{
let query=`${url}weather?q=${cityName} &appid=${key}&units=metric&lang=tr`
fetch(query)
.then(weather=>{
    return weather.json()
})
.then(displayResult)

}


const displayResult=(result)=>
{let City=document.querySelector('.city') //city  CSS'ine ulaştım.  
    City.innerText=`${result.name},${result.sys.country}` //innertext ile city'de ki texti api den aldığım değerlerle değiştirdim.
 
    let temp=document.querySelector('.temp')
 temp.innerText=`${Math.round(result.main.temp)}°C` //math.round virgüllü değeri aşağı yuvarlıyor.

 let desc=document.querySelector('.desc')
 desc.innerText=result.weather[0].description

 let minmax=document.querySelector('.minmax')
 minmax.innerText=`${Math.round(result.main.temp_min)}°C /
 ${Math.round(result.main.temp_max)}°C`
}
function resimsec(){

    var a=["paris.jpg","ankara.jpg"]
    text=a[`${searchBar.value}.jpg`]


}

setInterval(function(){
    resimsec();
    document.getElementById("arka").style.backgroundImage=text;
   
 })





const searchBar=document.getElementById('searchBar') 
searchBar.addEventListener('keypress',setQuery) //searchbara değer girildiğinde çalışması için event ekledim.
