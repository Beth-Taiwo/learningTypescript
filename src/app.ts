const form = document.querySelector("form")!;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
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
  client: string;
  details: string;
  amount: number;

  constructor(n: string, d: string, a: number) {
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

let newInvoices: Invoice[] = [];
newInvoices.push(firstInvoice);
newInvoices.push(secondInvoice);
console.log(newInvoices);

firstInvoice.client = "Sunday";
console.log(firstInvoice);
