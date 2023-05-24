let count = prompt('Введите число')

let g = 0;

for(let i = 0; i < count; i++){
switch(g){
    case 0:{
        document.write("<div class='block_red'></div>");
        g++
        break
    }
    case 1:{
        document.write("<div class='block_yellow'></div>");
        g++
        break
    }
    default:{
        document.write("<div class='block_green'></div>");
        g = 0
        break
    }
}
}
