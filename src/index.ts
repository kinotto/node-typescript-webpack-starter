interface IHomer {
    name(): String;
}


class Homer implements IHomer {
    name(){
        return 'Homer Simpson';
    }
}

const instance = new Homer();
console.log(instance.name());

let a = {b: 4, c: 6};
let cc = {...a};
console.log(cc); //testing ES6 spread operator