//Accept user input

let rawOrder = prompt(

    "Please enter a list of comma-separated froyo flavors that you would like:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
    
    );

//Split user input and put it into an obj

let splitInput = rawOrder.split(',');

const froyo = {};

splitInput.forEach((flavor) => {
    froyo[flavor] = (froyo[flavor] || 0) + 1;
});

console.table(froyo);

