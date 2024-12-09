var PC = /** @class */ (function () {
    function PC(marca, cpu) {
        this.marca = marca;
        this.cpu = cpu;
        this.ram = 1024;
        this.ligado = true;
    }
    PC.prototype.info = function () {
        console.log("Marca: ".concat(this.marca, ", Ligado: ").concat(this.ligado, ", RAM: ").concat(this.ram, " MB"));
    };
    PC.prototype.desligar = function () {
        this.ligado = false;
    };
    PC.prototype.ligar = function () {
        this.ligado = true;
    };
    PC.prototype.mudarRam = function (quantidade) {
        if (quantidade <= 0) {
            this.ram = 1024;
        }
        else {
            this.ram = Math.pow(2, quantidade);
        }
    };
    return PC;
}());
var computer = new PC("Intel", 24);
console.log(computer.info());
computer.mudarRam(15);
console.log(computer.info());
