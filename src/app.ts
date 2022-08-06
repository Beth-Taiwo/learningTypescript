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
