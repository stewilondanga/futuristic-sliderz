var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();


const main = document.querySelector('main');
const rangeInput = document.querySelector('input[type="range"]');
const outputValue = document.querySelector('output[data-value]');

const getRangeValue = () => {
  const value = rangeInput.value;
  outputValue.textContent = value;
  outputValue.dataset.value = value;
  document.body.style.setProperty('--value', value)
}
window.addEventListener('DOMContentLoaded', getRangeValue)
rangeInput.addEventListener('input', getRangeValue);
