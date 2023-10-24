const quantityInputs = document.querySelectorAll('.quantity');
        const priceInputs = document.querySelectorAll('.price');
        const subtotalElements = document.querySelectorAll('.subtotal');
        const deleteButtons = document.querySelectorAll('.delete');
        const totalElement = document.getElementById('total');

        function updateSubtotal(row) {
            const quantity = parseFloat(row.querySelector('.quantity').value);
            const price = parseFloat(row.querySelector('.price').value);
            const subtotal = quantity * price;
            row.querySelector('.subtotal').textContent = subtotal;
            return subtotal;
        }

        function updateTotal() {
            let total = 0;
            subtotalElements.forEach(subtotalElement => {
                total += parseFloat(subtotalElement.textContent);
            });
            totalElement.textContent = total;
        }

        quantityInputs.forEach(input => {
            input.addEventListener('input', () => {
                const row = input.closest('tr');
                const subtotal = updateSubtotal(row);
                updateTotal();
            });
        });

        priceInputs.forEach(input => {
            input.addEventListener('input', () => {
                const row = input.closest('tr');
                const subtotal = updateSubtotal(row);
                updateTotal();
            });
        });

        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const row = button.closest('tr');
                row.remove();
                updateTotal();
            });
        });