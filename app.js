const billInput = document.querySelector('.bill input');
const btnReset = document.querySelector('.btnReset');
const numOfPeople = document.querySelector('.numOfPeop input');
const tipInput = document.querySelector('.tipInput');
const buttons = document.querySelectorAll('.selectTip button');
const cantBeZero = document.querySelector('.cantBeZero');
const aPrice = document.querySelector('.aPrice');
const tPrice = document.querySelector('.tPrice');
let tip;

numOfPeople.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (numOfPeople.value == 0) {
      cantBeZero.style.display = 'inline';
      numOfPeople.style.border = ' 2px solid hsl(18, 71%, 34%)';
    } else {
      cantBeZero.style.visibility = 'hidden';
      numOfPeople.style.border = 'none';
    }
    if (numOfPeople.value != 0) {
      aPrice.innerHTML = `$${(tip / numOfPeople.value).toFixed(2)}`;
    }
  }
});

buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    tip = +billInput.value * (+button.id / 100);
    tPrice.innerHTML = `$${(+billInput.value + tip).toFixed(2)}`;
    console.log(button);
  });
});

tipInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    tip = +billInput.value * (+tipInput.value / 100);
    tPrice.innerHTML = `$${(+billInput.value + tip).toFixed(2)}`;
  }
});

btnReset.addEventListener('click', () => {
  aPrice.innerHTML = '$0.00';
  tPrice.innerHTML = '$0.00';
  billInput.value = '';
  numOfPeople.value = '';
  tipInput.value = '';
});
