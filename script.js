const boxes=document.querySelectorAll('.box');
const totalPriceDisplay=document.getElementById('total-price');
const prices={
    1: 10.00,
    2: 18.00,
    3: 24.00
};
boxes.forEach (box=>{
const radio =box.querySelector('input[type="radio"]');
radio.addEventListener('change',()=>{
boxes.forEach(b=>b.classList.remove('active'));
box.classList.add('active');
updateTotal(box.dataset.id);

});
box.querySelector('.box-header').addEventListener('click',()=>{
    radio.checked=true;
    boxes.forEach(b=>b.classList.remove('active'));
    box.classList.add('active');
updateTotal(box.dataset.id);
});


});
function updateTotal(id){
    const price=prices[id];
    totalPriceDisplay.textContent=`$${price.tofixed(2)}USD`;
}