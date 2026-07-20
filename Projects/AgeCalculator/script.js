
// function calculateAge() {
//     const birthDateStr = dateInput.value;

//     if (!birthDateStr) {
//         display.style.color = "red";
//         display.innerHTML = "Please select your birth date";
//         return;
//     }

//     const birth = new Date(birthDateStr);
//     const today = new Date();

//     if (birth > today) {
//         display.style.color = "red";
//         display.innerHTML = "Birth date cannot be in the future!";
//         return;
//     }

//     let years = today.getFullYear() - birth.getFullYear();
//     let months = today.getMonth() - birth.getMonth();
//     let days = today.getDate() - birth.getDate();

//     if (days < 0) {
//         months--;
//         days += 30;   // Simple approximation
//     }
//     if (months < 0) {
//         years--;
//         months += 12;
//     }

//     display.innerHTML = `
//         <p>🎉 Your Age is:</p> 
//         <p>${years} Years</p>
//         <p>${months} Months</p>
//         <p>${days} Days</p>
//        `
// }

// btn.addEventListener('click', calculateAge);

// dateInput.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         calculateAge();
//     }
// });

// const dateInput = document.getElementById('date');
// const btn = document.getElementById('btns');
// const display = document.getElementById('display');



// function calculateAge() {
//     const date = dateInput.value;

//     if (!date) {
//         display.innerHTML = 'Please enter a valid date';
//         display.style.color = 'red';
//     }

//     const birthDate = new Date(date);
//     const today = new Date();

//     if (birthDate > today) {
//         display.innerHTML = "You can't be born in future";
//         display.style.color = 'red';
//     }

//     let years = today.getFullYear() - birthDate.getFullYear(); 
//     let months = today.getMonth() - birthDate.getMonth();
//     let days = today.getDate() - birthDate.getDate();

//     if (days < 0) {
//         months--;
//         days += 30;
//     }
//     if (months < 0) {
//         years--;
//         months += 12;
//     }

//     let text = `You are ${years}, ${months} and ${days}  old`;

//     display.innerHTML = text;
// }

// btn.addEventListener('click', calculateAge );

// dateInput.addEventListener('keydown', (e)=>{
//     if(e.key=== 'Enter'){
//         btn.click();
//     }
// })



function isPrime(num) {
    if (isNaN(num) || num < 2) {
        if (num === 1) return `${num} is not a prime number`;
        if (num < 0) return 'Please enter a positive number';
        return 'Please enter a valid number ';
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {  // Much faster for large numbers
        if (num % i === 0) {
            return `${num} is not a prime number`;
        }
    }
    return `${num} is a prime number`;
}

// Usage
const input = prompt('Enter your number?');
const num = Number(input);
console.log(isPrime(num));