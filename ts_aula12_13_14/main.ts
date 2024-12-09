//
// Functions
//


function Sum(number1: number, number2: number): number {
        return number1 + number2;
}

function Fatorial(number: number): number {
        if (number <= 0) { return 1; }
        return number * Fatorial(number-1);
}


function CreateUser(username: string, password: string, name?: string): object {
        if (typeof(name) == undefined) {
                name = username;
                return { username, password, name}; 
        }
        return { username, password, name };
}

function Login(username: string, password: string): boolean {
        if (username === username  || password === password) { return true; }
        return false;
}

function HTTPrest(...args: string[]): string {
        for (let i = 0; i < args.length; i++) {
                return args[i];
        } return "";
}