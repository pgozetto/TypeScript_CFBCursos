namespace Globais {
        export abstract class Math {
                public static readonly PI: number = 3.141592653589793; // APROX
                public static readonly E: number = 2.7182818284559045; // APROX

                static Sum(first: number, second: number): number {
                        return first + second;
                }

                static Subtraction(first: number, second: number): number {
                        return first - second;
                }

                static Multiplication(first: number, second: number): number {
                        return first * second;
                }       

                static Division(first: number, second: number): number {
                        if (second == 0) { throw new Error("Cannot divide by zero"); }
                        return first / second;
                }
                
                static Power(first: number, second: number): number {
                        return first ** second;
                }
        }
}

export default Globais;