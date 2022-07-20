// sun
const $sun = document.querySelector(".intro_sun");
const $sunIntro = document.querySelector(".intro_sun .sun");
const $sunExplain = document.querySelector(".intro_sun .sun_explain");

// galaxy
const $galaxy = document.querySelector(".intro_galaxy");
const $galaxyIntro = document.querySelector(".intro_galaxy .galaxy");
const $galaxyExplain = document.querySelector(".intro_galaxy .galaxy_explain");

// station
const $station = document.querySelector(".intro_station");
const $stationIntro = document.querySelector(".intro_station .station");
const $stationExplain = document.querySelector(".intro_station .station_explain");



const FADEIN = ' fade-in';

let sunFadeCount = 0;
let galaxyFadeCount = 0;
let stationFadeCount = 0;

// 태양계 소개 fade-in
$sun.addEventListener("mouseover",function(){
  if(sunFadeCount === 0){
  $sunIntro.className += FADEIN;
  $sunExplain.className += FADEIN;
  sunFadeCount++;
  }
});

$sun.addEventListener("mouseout", function(){
  if(sunFadeCount == 1){
    $sunIntro.className = 'sun';
    $sunExplain.className = 'sun_explain';
    sunFadeCount--;  
  }
});

//galaxy Fade-in

$galaxy.addEventListener("mouseover",function(){
  if(galaxyFadeCount === 0){
  $galaxyIntro.className += FADEIN;
  $galaxyExplain.className += FADEIN;
  galaxyFadeCount++;
  }
});

$galaxy.addEventListener("mouseout", function(){
  if(galaxyFadeCount == 1){
    $galaxyIntro.className = 'galaxy';
    $galaxyExplain.className = 'galaxy_explain';
    galaxyFadeCount--; 
  }
});

// Station Fade-in

$station.addEventListener("mouseover",function(){
  if(stationFadeCount === 0){
  $stationIntro.className += FADEIN;
  $stationExplain.className += FADEIN;
  stationFadeCount++;
  }
});

$station.addEventListener("mouseout", function(){
  if(stationFadeCount == 1){
    $stationIntro.className = 'station';
    $stationExplain.className = 'station_explain';
    stationFadeCount--; 
  }
});
