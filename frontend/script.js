document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-select');
    const dealerSelect = document.getElementById('dealer-select');
    const dealerContainer = document.getElementById('dealer-container');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');

    // Mock data based on the screenshots (Headphones costs $20)
    const pricingData = {
        'Headphones': {
            'DXC Electronics': 20,
            'Global Tech': 25,
            'Prime Solutions': 22
        },
        'Laptop': {
            'DXC Electronics': 800,
            'Global Tech': 750,
            'Prime Solutions': 780
        },
        'Mouse': {
            'DXC Electronics': 15,
            'Global Tech': 12,
            'Prime Solutions': 18
        },
        'Printer': {
            'DXC Electronics': 150,
            'Global Tech': 160,
            'Prime Solutions': 145
        }
    };

    productSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            dealerContainer.classList.remove('hidden');
            dealerContainer.style.display = 'block';
            dealerContainer.style.opacity = '1';
        } else {
            dealerContainer.classList.add('hidden');
            dealerContainer.style.display = 'none';
            resultContainer.classList.add('hidden');
            resultContainer.style.display = 'none';
        }
    });

    dealerSelect.addEventListener('change', (e) => {
        const product = productSelect.value;
        const dealer = e.target.value;

        if (product && dealer) {
            const price = pricingData[product][dealer];
            resultText.innerText = `${product} costs $${price} at ${dealer}`;
            resultContainer.classList.remove('hidden');
            resultContainer.style.display = 'block';
        } else {
            resultContainer.classList.add('hidden');
            resultContainer.style.display = 'none';
        }
    });
});
