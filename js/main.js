const $hole = document.querySelector('.post1 .black-hole');
const $letsBlack = document.querySelector(".post1 .lets_hole");

function handleBlackHole() {
  
  $letsBlack.innerHTML = `클릭해서 우주로 가기`
}

function blackHoleOut(){
  $letsBlack.innerHTML = ``;
}

$hole.addEventListener("mouseover",handleBlackHole);
$hole.addEventListener("mouseout", blackHoleOut);