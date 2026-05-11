let balance = 0;

function addTransaction(){

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

  const transactionList =
    document.getElementById("transactionList");

  const li = document.createElement("li");

  li.innerHTML =
    `${description} : ₹${amount} (${type})`;

  transactionList.appendChild(li);

  if(type === "income"){
    balance += amount;
  }else{
    balance -= amount;
  }

  document.getElementById("balance").innerText =
    `₹${balance}`;

  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
}