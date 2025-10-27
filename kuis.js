class Employee {
    constructor(name){
        this.SalaryPermanent = 8000000;
        this.SalaryContract = 6000000;
        this.name = name
    }

    calculateBonus(){

    }
}

class PermanentEmployee extends Employee {
    calculateSalary(){
        this.bonus1 = this.SalaryPermanent * 0.10;
        this.totalSalary1 = this.bonus1 + this.SalaryPermanent;
        console.log(`${this.name}, Gaji karyawan(tetap) adalah ${this.SalaryPermanent} dengan bonus gaji ${this.bonus1} yang totalnya menjadi ${this.totalSalary1} `)
    }
}

class ContractEmployee extends Employee {
    calculateSalary(){
        this.bonus2 = this.SalaryContract * 0.05;
        this.totalSalary2 = this.bonus2 + this.SalaryContract;
        console.log(`${this.name}, Gaji karyawan (kontrak) adalah ${this.SalaryContract} dengan bonus gaji ${this.bonus2} yang totalnya menjadi ${this.totalSalary2}`);
    }
}

const permanentemployee = new PermanentEmployee("Budi");
permanentemployee.calculateSalary();
const contractemployee = new ContractEmployee("Siti");
contractemployee.calculateSalary();
