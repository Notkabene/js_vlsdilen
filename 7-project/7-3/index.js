const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
let salaryWithTax = 0;
console.log(totalJuniorDevelopersSalary);
                
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
  
  totalJuniorDevelopersSalary += salaryWithTax;
  console.log(salaryWithTax);
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);

console.log(salaryWithTax);