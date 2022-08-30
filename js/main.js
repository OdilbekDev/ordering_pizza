let elSelect = document.querySelector('.select')
let elSizeLabel = document.querySelectorAll('.label-size')
let elThickness = document.querySelector('#thickness')
let elValueSize = document.querySelector('#size')
let elProduct = document.querySelectorAll('.products-input')
let elProducts = document.querySelector('#products')

elSelect.addEventListener('change', (e)=>{
    elThickness.textContent = e.target.value
    console.log(e.target.value);
})


const arrLabel = []
for (let i of elSizeLabel) {
    i.addEventListener('click', (e)=>{
        elValueSize.textContent = i.textContent
    })
}

for (let i of elProduct) {
    i.addEventListener('click', (e)=>{
        console.log(i);
        if(e.target.checked == true){
            elProducts.textContent = i.value
            console.log(i.value);
        }
    })
    console.log(i);
}