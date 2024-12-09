export class Person {
        name: string;
        date_of_birth: number;
        alive: boolean;

        constructor(name: string, date_of_birth: number) {
                this.name = name;
                this.date_of_birth = date_of_birth;
                this.alive = true;
        }

        die(): void {
                this.alive = false;
        }

        revive(): void {
                this.alive = true;
        }

        get age(): number {
                const current_year = new Date().getFullYear();
                return current_year - this.date_of_birth;
        }
}

