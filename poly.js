class shape{
    draw(){
        console.log("drawing shape");
    }
}

class circle extends shape{
    draw(){
        console.log("drawing circle");
    }
}

class rectangle extends shape{
    draw(){
        console.log("drawing rectangle");
    }
}

const shapes = [new circle(), new rectangle()];
shapes.forEach(s => s.draw());

