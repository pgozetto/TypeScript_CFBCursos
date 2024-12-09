abstract class Account {
        protected readonly accid: number;
        public accnumber: number;
        public acctitle: string;

        protected balance: number;
        
        constructor(accnumber: number, acctitle: string) {
                this.accnumber = accnumber;
                this.acctitle = acctitle;
                this.balance = 0;

                this.accid = Math.floor(Math.random() * 1000000000);
        }

        getAccountInfo(): string {
                return `Account ID: ${this.accid}, Account Number: ${this.accnumber}, Account Title: ${this.acctitle}`;
        }

        deposityInBallance(quantity: number): void {
                this.balance + quantity;
        }

        withdrawFromBalance(quantity: number): void {
                if (this.balance < quantity) { throw new Error("You cannot withdraw more than your balance"); }
                else { this.balance - quantity }
        }

        protected deleteAccount(id: string): void {
                this.deleteAccount(id);
        }
}

class FPAccount extends Account implements Tax {
        public CPF: number;
        private tax: number;
        private interestRate: number;

        constructor(accnumber: number, acctitle: string, interestRate: number, cpf: number) {
                super(accnumber, acctitle);
                this.interestRate = interestRate;
                this.CPF = cpf;
        }

        getAccountInfo(): string {
                return super.getAccountInfo() + `, CPF: ${this.CPF}, interestRate: ${this.interestRate}`;
        }

        CalculateTaxes(amount: number): number {
                return amount * this.tax;
        }
}

class JPAccount extends Account implements Tax{
        public CNPJ: number;
        public tax: number;

        constructor(accnumber: number, acctitle: string, cnpj: number, tax: number) {
                super(accnumber, acctitle);
                this.CNPJ = cnpj;
                this.tax = tax;
        }

        getAccountInfo(): string {
                return super.getAccountInfo() + `, CNPJ: ${this.CNPJ}, tax: ${this.tax}`;
        }

        CalculateTaxes(amount: number): number {
                return amount * this.tax
        }
        
}

interface Tax {
        CalculateTaxes?(amount: number): number;
}

let Pedro = new FPAccount(555, "Pedro Gozetto", 999, 1921681932456);
