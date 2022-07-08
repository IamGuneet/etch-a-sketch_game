const boxBorder = document.querySelector('.box-border');

for(let i=0;i<256 ;i++){
        const subBox = document.createElement('div');
        subBox.classList.add('sub-box');
        boxBorder.appendChild(subBox);
        subBox.addEventListener('mouseover', changeColor)
        function changeColor(){
            subBox.style.backgroundColor = "black";
        }
        
        const btn = document.querySelector('.reset');
        btn.addEventListener('click', function changeBack(){
        subBox.style.backgroundColor = "bisque" ;              
        })
        
        
        
    }