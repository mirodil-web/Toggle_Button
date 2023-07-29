const elBtn = document.querySelector('.btn')
const elSlinder = document.querySelector('.slinder')
const elOnOf = document.querySelector('.on-of')
const elBody = document.querySelector('.body')
const elX = document.querySelector('.x')
const elY = document.querySelector('.y')
const elImg1 = document.querySelector('.img-1')
const elImg2 = document.querySelector('.img-2')




elBtn.addEventListener('click', function () {
   elSlinder.classList.toggle('slinderx')
   elX.classList.toggle('hidden')
   elY.classList.toggle('hidden')

})
elBtn.addEventListener('click', function () {
   elBody.classList.toggle('bgw');
   elBtn.classList.toggle('bgw');
   elBtn.classList.toggle('box');
   elSlinder.classList.toggle('bgw');
   elY.classList.toggle('col');
   elSlinder.classList.toggle('boxx');
   elImg1.classList.toggle('hidden');
   elImg2.classList.toggle('hidden');


})



