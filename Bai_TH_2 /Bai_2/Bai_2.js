const menuItemElements = document.querySelectorAll('.menuItem');
const nightModeRadio = document.getElementById('nightModeRadio');
const calculateBillButton = document.getElementById('calculateBill');
const billTable = document.getElementById('billTable');
const billItems = document.getElementById('billItems');
const totalPrice = document.getElementById('totalPrice');

let selectedItems = [];
let isNightMode = false;

nightModeRadio.addEventListener('change', () => {
    isNightMode = nightModeRadio.checked;
});

calculateBillButton.addEventListener('click', () => {
    let totalBill = 0;

    billItems.innerHTML = '';

    selectedItems.forEach((item) => {
        const name = item.getAttribute('data-name');
        let price = parseFloat(item.getAttribute('data-price'));

        if (isNightMode) {
            price += price * 0.1; // Tăng giá 10% vào ban đêm
        }

        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');

        nameCell.textContent = name;
        priceCell.textContent = price.toLocaleString() + ' VNĐ';

        row.appendChild(nameCell);
        row.appendChild(priceCell);

        billItems.appendChild(row);

        totalBill += price;
    });

    totalPrice.textContent = totalBill.toLocaleString() + ' VNĐ';
    billTable.style.display = 'table';
});

menuItemElements.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        if (!selectedItems.includes(menuItem)) {
            selectedItems.push(menuItem);
            menuItem.classList.add('selected');
        } else {
            selectedItems = selectedItems.filter((item) => item !== menuItem);
            menuItem.classList.remove('selected');
        }
    });
});