// sun
const $sun = document.querySelector(".intro_sun");
const $sunIntro = document.querySelector(".intro_sun .sun");
const $sunExplain = document.querySelector(".intro_sun .sun_explain");

// galaxy
const $galaxy = document.querySelector(".intro_galaxy");
const $galaxyIntro = document.querySelector(".intro_galaxy .galaxy");
const $galaxyExplain = document.querySelector(".intro_galaxy .galaxy_explain");

const FADEIN = ' fade-in';

let sunFadeCount = 0;
let galaxyFadeCount = 0;

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

