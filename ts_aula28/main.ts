// Generics

function teste<T>(param: T): T {
        return param;
}

class Teste<T> {
        public name: T;
        constructor(name: T) {
                this.name = name;
        };
}

console.log(teste<string>("Oi"));
const T = new Teste<string>("ABU");