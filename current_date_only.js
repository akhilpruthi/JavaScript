let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

const fullDate = `${day}/${month}/${year}`;

console.log("Full Date is : " + fullDate);