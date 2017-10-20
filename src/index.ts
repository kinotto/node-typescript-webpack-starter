interface IHomer {
    name(): String;
}


class Homer implements IHomer {
    name(){
        return 'Homer Simpson';
    }
}

let a = {b: 4, c: 6};
let cc = {...a};
console.log(cc);

const instance = new Homer();
console.log(instance.name());
console.log('ciasss')