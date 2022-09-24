"use strict";
const form = document.querySelector("form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const expense = {
        type: type.value,
        tofrom: tofrom.value,
        details: details.value,
        amount: amount.valueAsNumber,
    };
    console.log(expense);
});
// class decalaration
class Invoice {
    constructor(n, d, a) {
        this.client = n;
        this.details = d;
        this.amount = a;
    }
    formSentence() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const firstInvoice = new Invoice("Segun", "Beth specialty cooperation", 400);
const secondInvoice = new Invoice("Samson", "Beth specialty cooperation", 1000);
console.log(firstInvoice.formSentence(), secondInvoice);
let newInvoices = [];
newInvoices.push(firstInvoice);
newInvoices.push(secondInvoice);
console.log(newInvoices);
firstInvoice.client = "Sunday";
console.log(firstInvoice);
