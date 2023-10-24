document.addEventListener("DOMContentLoaded", function() {
    start();
});

function start() {
    handleCalculateSalary();
}

function handleCalculateSalary() {
    var calculateButton = document.querySelector('button');
    var salaryInput = document.querySelector('input[type="text"]');
    var coefficientInput = document.querySelector('input[type="number"]');
    var salaryMonth = document.querySelector('div');

    calculateButton.addEventListener('click', function() {
        var salary = parseFloat(salaryInput.value); // chuyển thành dạng số
        var coefficient = parseFloat(coefficientInput.value);
// kiểm tra xem 2 giá trị đều có phải số không
        if (!isNaN(salary) && !isNaN(coefficient)) { 
            var monthlySalary = salary * coefficient;
            salaryMonth.textContent = monthlySalary;
        }
    });
}
