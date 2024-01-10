//Accept user input

let rawOrder = prompt(

    "Please enter a list of comma-separated froyo flavors that you would like:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
    
    );

//Split user input and put it into an obj

let splitInput = rawOrder.split(',');

const froyo = {};

for(i = 0; i < splitInput.length; i++){
    let flavor = splitInput[i];

    if(froyo.hasOwnProperty(flavor)){
        froyo[flavor]++;
    } else{
        froyo[flavor] = 1;
    }
}

console.table(froyo);

