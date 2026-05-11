let transactions =
  JSON.parse(localStorage.getItem("transactions")) || [];

function saveTransactions() {
  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
}

function renderTransactions() {

  const transactionList =
    document.getElementById("transactionList");

  transactionList.innerHTML = "";

  let balance = 0;
  let income = 0;
  let expense = 0;

  transactions.forEach((transaction, index) => {

    const li = document.createElement("li");

    li.classList.add(transaction.type);

    li.innerHTML = `
      <div>
        <strong>${transaction.description}</strong>
        <br>
        ₹${transaction.amount}
      </div>

      <div>
        ${transaction.type}
        <button onclick="deleteTransaction(${index})">
          X
        </button>
      </div>
    `;

    transactionList.appendChild(li);

    if(transaction.type === "income"){
      balance += transaction.amount;
      income += transaction.amount;
    }else{
      balance -= transaction.amount;
      expense += transaction.amount;
    }

  });

  document.getElementById("balance").innerText =
    `₹${balance}`;

  document.getElementById("income").innerText =
    `₹${income}`;

  document.getElementById("expense").innerText =
    `₹${expense}`;

  saveTransactions();
}

function addTransaction() {

  const description =
    document.getElementById("description").value;

  const amount =
    parseFloat(document.getElementById("amount").value);

  const type =
    document.getElementById("type").value;

  if(description === "" || isNaN(amount)){
    alert("Please fill all fields");
    return;
  }

  transactions.push({
    description,
    amount,
    type
  });

  renderTransactions();

  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
}

function deleteTransaction(index){
  transactions.splice(index, 1);
  renderTransactions();
}

renderTransactions();