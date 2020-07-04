let counter = document.querySelector(".counter");
const decreaseCount = document.querySelector("#countButton");
const resetCount = document.querySelector("#resetButton");

// أكمل
// const athkar =
let athkar = [
  {thekr:"سبحان الله وبحمده سبحان الله "},
  {thekr:" الله لا اله الا هو"},
  {thekr:"رضينا بالله ربا وبالاسلام ديناً و بمحمدٍ رسولاً"},
  {thekr:"الحمدلله رب العالمين "},
  {thekr:"لا حول ولا قوه الا بالله  "},
 
];
const randomThekr = document.querySelector("#thekr");
randomThekr.addEventListener("click", changeDisplayedThekr);

// count عرف متغير
let count = 10 
decreaseCount.addEventListener("click", decrementCounter);
resetCount.addEventListener("click", resetCounter);

function decrementCounter() {
  // أكمل
  if(count >"0" ){
    count--;
  }
  counter.innerHTML = count;
  // أضف خواص للقيمة داخل زر العداد حتى لا تظهر فجأة ولكن بالتدريج

counter.animate([{opacity: "0.2 "},{opacity: "1.0"}],
{duration:500, fill:"forwards",})
}
// Hide
function resetCounter() {
  // أكمل
  count =10;
  counter.innerHTML = count;
}

// Hide
function changeDisplayedThekr() {
  // أكمل
  let number = Math.floor(Math.random()*athkar.length);
  thekr.innerHTML = athkar[number].thekr;
  console.log(number);
}
