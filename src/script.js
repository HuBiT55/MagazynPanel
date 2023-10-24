// Inicjalizacja listy produktów
const productList = document.getElementById('product-list');

// Dodawanie produktu
function addProduct(name, category, quantity) {
    const product = document.createElement('div');
    product.classList.add('product');
    product.innerHTML = `
        <h3>${name}</h3>
        <p>Kategoria: ${category}</p>
        <p>Ilość: ${quantity}</p>
        <button class="order">Zamów</button>
        <button class="sell">Sprzedaj</button>
    `;
    productList.appendChild(product);
}

// Przykładowe produkty
addProduct('Laptop', 'Elektronika', 5);
addProduct('Telefon', 'Elektronika', 10);
addProduct('Buty', 'Moda', 20);

// Obsługa przycisku Dodaj Produkt
const addProductButton = document.getElementById('add-product');
addProductButton.addEventListener('click', () => {
    const name = prompt('Podaj nazwę produktu:');
    const category = prompt('Podaj kategorię produktu:');
    const quantity = parseInt(prompt('Podaj ilość produktu:'), 10);

    if (name && category && !isNaN(quantity)) {
        addProduct(name, category, quantity);
    } else {
        alert('Nieprawidłowe dane. Spróbuj ponownie.');
    }
});

// Obsługa przycisków Zamów i Sprzedaj
productList.addEventListener('click', (event) => {
    const target = event.target;
    const product = target.parentElement;

    if (target.classList.contains('order')) {
        const quantity = parseInt(prompt('Podaj ilość do zamówienia:'), 10);

        if (!isNaN(quantity) && quantity > 0) {
            const currentQuantity = parseInt(product.querySelector('p:nth-child(3)').textContent.split(' ')[1], 10);
            product.querySelector('p:nth-child(3)').textContent = `Ilość: ${currentQuantity + quantity}`;
        } else {
            alert('Nieprawidłowa ilość. Spróbuj ponownie.');
        }
    } else if (target.classList.contains('sell')) {
        const quantity = parseInt(prompt('Podaj ilość do sprzedaży:'), 10);

        if (!isNaN(quantity) && quantity > 0) {
            const currentQuantity = parseInt(product.querySelector('p:nth-child(3)').textContent.split(' ')[1], 10);
            if (currentQuantity >= quantity) {
                product.querySelector('p:nth-child(3)').textContent = `Ilość: ${currentQuantity - quantity}`;
            } else {
                alert('Brak wystarczającej ilości produktu.');
            }
        } else {
            alert('Nieprawidłowa ilość. Spróbuj ponownie.');
        }
    }
});

// Obsługa przycisku Zaloguj
const loginButton = document.getElementById('login');
loginButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        // Ukryj formularz logowania
        const loginContainer = document.getElementById('login-container');
        loginContainer.style.display = 'none';

        // Wyświetl resztę aplikacji
        const productSection = document.getElementById('product-list');
        productSection.style.display = 'block';

        const addProductButton = document.getElementById('add-product');
        addProductButton.style.display = 'block';

        const orderProductButton = document.getElementById('order-product');
        orderProductButton.style.display = 'block';

        const sellProductButton = document.getElementById('sell-product');
        sellProductButton.style.display = 'block';

        const logoutButton = document.getElementById('logout');
        logoutButton.style.display = 'block';
    } else {
        alert('Nieprawidłowa nazwa użytkownika lub hasło.');
    }
});

// Obsługa przycisku Wyloguj
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    // Odśwież stronę, aby wrócić do formularza logowania
    location.reload();
});
