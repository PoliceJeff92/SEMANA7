// Array to hold our product data
let products = [
    {
        name: "Sistema de Riego Automatizado",
        price: "$150.00",
        description: "Controla la humedad del suelo y riega tus plantas automáticamente."
    },
    {
        name: "Sensores de Nutrientes para Suelo",
        price: "$85.00",
        description: "Monitorea los niveles de nutrientes esenciales para optimizar el crecimiento."
    },
    {
        name: "Luces LED de Crecimiento Inteligentes",
        price: "$120.00",
        description: "Ajuste automático de espectro y temporizador para cualquier tipo de planta."
    },
    {
        name: "Monitor de Clima para Invernaderos",
        price: "$200.00",
        description: "Registra temperatura, humedad y CO2 para un ambiente ideal."
    }
];

// Get references to HTML elements
const productList = document.getElementById('productList'); // Usa 'productList'
const addProductButton = document.getElementById('addProductButton'); // Usa 'addProductButton'

// Function to render all products from the 'products' array
function renderProducts() {
    // Clear existing list items to prevent duplicates when re-rendering
    productList.innerHTML = ''; 

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${product.name}</h3>
            <p class="price">Precio: ${product.price}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(listItem);
    });
}

// Function to add a new product (example)
function addNewProduct() {
    // For simplicity, we'll add a hardcoded new product.
    // In a real application, you might use a form to get user input.
    const newProduct = {
        name: `Producto Nuevo ${products.length + 1}`, // Unique name for demonstration
        price: `$${(Math.random() * 50 + 50).toFixed(2)}`, // Random price between 50 and 100
        description: "Este es un nuevo producto genérico añadido dinámicamente."
    };

    products.push(newProduct); // Add the new product to our array
    renderProducts(); // Re-render the entire list to show the new product
}

// --- Event Listeners and Initial Load ---

// 1. Initial product rendering when the page loads
// This ensures products are displayed automatically as per requirements.
document.addEventListener('DOMContentLoaded', renderProducts);

// 2. Attach click event listener to the "Agregar Nuevo Producto" button
addProductButton.addEventListener('click', addNewProduct);