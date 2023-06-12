var min = document.querySelector("#min")
var sec = document.querySelector("#sec")
var mSec = document.querySelector("#mSec")

var interval;
var getMin;
var getSec;
var getMSec
function getValue(){
    getMin = parseInt(min.value)
    getSec = parseInt(sec.value)
    getMSec = parseInt(mSec.value)
}
function play(){
    
      getMSec++
      mSec.value = getMSec
      if(getMSec == 100){
        getSec--
        sec.value = getSec
        getMSec = "00"
      }else if(getSec <= 0){
        getMin--
        min.value = getMin
        getSec = 60
      }
      if(getMin == 0 && getSec == 0){
            var buttons = document.querySelector(".btns")
            clearInterval(interval)
            getMin = "00"
            getSec = "00"
            getMSec = "00"
            min.value = getMin
            sec.value = getSec
            mSec.value = getMSec
            buttons.firstElementChild.innerHTML = "<i class='fa-solid fa-play'></i>"
            buttons.firstElementChild.setAttribute("onclick","start(this)")
      }
    
}


function start(ele){
    if(min.value == "" || sec.value == "" || min.value == "00" && sec.value == "00" ){
        alert("Please Enter a Value")
        return
    }
    
    ele.innerHTML = "<i class='fa-solid fa-pause'></i>"
    ele.setAttribute("onclick","stop(this)")
   interval = setInterval(play,10)
}


function stop(ele){
    clearInterval(interval)
    ele.innerHTML = "<i class='fa-solid fa-play'></i>"
    ele.setAttribute("onclick","start(this)")
}
function reset(ele){
    clearInterval(interval)
    getMin = "00"
    getSec = "00"
    getMSec = "00"
    min.value = getMin
    sec.value = getSec
    mSec.value = getMSec
    ele.previousElementSibling.innerHTML = "<i class='fa-solid fa-play'></i>"
    ele.previousElementSibling.setAttribute("onclick","start(this)")
}