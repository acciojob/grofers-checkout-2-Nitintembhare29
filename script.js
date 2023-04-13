//your code here
 let prices = document.querySelectorAll('[data-ns-test="prices"]');
    let total = 0;
    for (let price of prices) {
        total += parseFloat(price.textContent);
    }

    let table = document.getElementById('groceryList');
    let newRow = table.insertRow();
    let newCell = newRow.insertCell();
    newCell.setAttribute('colspan', '2');
    newCell.setAttribute('data-ns-test', 'grandTotal');
    newCell.textContent = `Total: $${total}`;