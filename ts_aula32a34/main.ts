namespace Veiculos 
{
        export abstract class Veiculo {
                public nome: string;
                
                protected ligado: boolean; 
                
                protected motor: number;
                protected velocidade_max: number;
                protected total_rodas: number;
        
                constructor(nome: string, motor: number) {
                        this.nome = nome;
                        this.motor = motor;
                        this.ligado = false;
                }
        
        
                ligar(): void {
                        this.ligado = true;
                }
        
                desligar(): void {
                        this.ligado = false;
                }
        }
        
        
        
        export class Carro extends Veiculo {
                protected peso;
        
                constructor(nome: string, motor: number) {
                        super(nome, motor);
                        this.velocidade_max = 90; // KMh
                        this.total_rodas = 4;
                }
        }
        
        export class Moto extends Veiculo {
                protected peso;        
        
                constructor(nome: string, motor: number) {
                        super(nome, motor);
                        this.velocidade_max = 235; // KMh
                        this.total_rodas = 2;
                }
        }

        

}


const newCar = new Veiculos.Carro("Kwid", 500);