//DOM Elements
const boxes = document.querySelectorAll('.box'),
    image = document.querySelector('.image');

//Loop Through each boxes element
//Recorrer cada elemento de cajasb
boxes.forEach(box =>{

    //when a draggable element is dragged over a box element
    //cuando un elemento arrastrable se arrastra sobre un elemento de cuadro
    box.addEventListener('dragover',e =>{

        e.preventDefault();//prevenir el comportamiento predeterminado
        console.log('dragging');
        box.classList.add('hovered');
        
    });

    //when a dragganble element leaves box element
    //cuando un elemento arrastrable sale del elemento del cuadro
    box.addEventListener('dragleave',() =>{
        box.classList.remove('hovered');
    });

    //when a dragganble element is dropped on a box element
    //cuando un elemento arrastrable se suelta en un elemento de cuadro
    box.addEventListener('drop',()=>{
        box.appendChild(image);
        box.classList.remove('hovered');
    });
});