// work on percentage(%) change from 0-100
// image change from blurry to clear as it loads

const loadPercent = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let interval = setInterval(blurring, 30)

//we want this function to run in intervals of evert 30ms
function blurring() {
  load++
  if (load > 99) {
    clearInterval(interval)
  }
  //display load%
  loadPercent.innerText = `${load}%`
  // can't be the load value because opacity goes from 0 to 1
  // number of times it needs to happen, from 0-100, we want to map opacity from 1 to 0
  //if we were starting invisible to opaque then it would be 0 to 1
  loadPercent.style.opacity = scale(load, 0, 100, 1, 0)
  //  now we have to do the same thing for the blur
  //  In this project I need to use 30 as the max pixels for blur
  // template literal = `` and variable or expression syntax
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
