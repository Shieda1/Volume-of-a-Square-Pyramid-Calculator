// https://calculator.swiftutors.com/volume-of-a-square-pyramid-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const volumeofSquarePyramidRadio = document.getElementById('volumeofSquarePyramidRadio');
const baseLengthofSquarePyramidRadio = document.getElementById('baseLengthofSquarePyramidRadio');
const verticalHeightofSquarePyramidRadio = document.getElementById('verticalHeightofSquarePyramidRadio');

let volumeofSquarePyramid;
const three = 3;
let baseLengthofSquarePyramid = v1;
let verticalHeightofSquarePyramid = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

volumeofSquarePyramidRadio.addEventListener('click', function() {
  variable1.textContent = 'Base Length of Square Pyramid';
  variable2.textContent = 'Vertical Height of Square Pyramid';
  baseLengthofSquarePyramid = v1;
  verticalHeightofSquarePyramid = v2;
  result.textContent = '';
});

baseLengthofSquarePyramidRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Square Pyramid';
  variable2.textContent = 'Vertical Height of Square Pyramid';
  volumeofSquarePyramid = v1;
  verticalHeightofSquarePyramid = v2;
  result.textContent = '';
});

verticalHeightofSquarePyramidRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Square Pyramid';
  variable2.textContent = 'Base Length of Square Pyramid';
  volumeofSquarePyramid = v1;
  baseLengthofSquarePyramid = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(volumeofSquarePyramidRadio.checked)
    result.textContent = `Volume of Square Pyramid = ${computeVolumeofSquarePyramid().toFixed(2)}`;

  else if(baseLengthofSquarePyramidRadio.checked)
    result.textContent = `Base Length of Square Pyramid = ${computeBaseLengthofSquarePyramid().toFixed(2)}`;

  else if(verticalHeightofSquarePyramidRadio.checked)
    result.textContent = `Vertical Height of Square Pyramid = ${computeVerticalHeightofSquarePyramid().toFixed(2)}`;
})

// calculation

function computeVolumeofSquarePyramid() {
  return (1 / three) * Math.pow(Number(baseLengthofSquarePyramid.value), 2) * Number(verticalHeightofSquarePyramid.value);
}

function computeBaseLengthofSquarePyramid() {
  return Math.sqrt((Number(volumeofSquarePyramid.value) * three) / Number(verticalHeightofSquarePyramid.value));
}

function computeVerticalHeightofSquarePyramid() {
  return (Number(volumeofSquarePyramid.value) * three) / Math.pow(Number(baseLengthofSquarePyramid.value), 2);
}