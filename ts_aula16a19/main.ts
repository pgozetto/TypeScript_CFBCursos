class PC {
        public marca: string;
        public cpu: number;
        private ram: number; 
        private ligado: boolean

        constructor(marca: string, cpu: number) {
                this.marca = marca;
                this.cpu = cpu;

                this.ram = 1024;
                this.ligado = true;
        }

        info(): void {
                console.log(`Marca: ${this.marca}, Ligado: ${this.ligado}, RAM: ${this.ram} MB`);
        }

        desligar(): void {
                this.ligado = false;
        }

        ligar(): void {
                this.ligado = true;
        }

        mudarRam(quantidade: number): void {
                if (quantidade <=0) { this.ram = 1024; }
                else { this.ram = 2**quantidade; }
        }
}

let computer: PC = new PC("Intel", 24);

console.log(computer.info());
computer.mudarRam(15);
console.log(computer.info());