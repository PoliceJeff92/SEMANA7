// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Array inicial de productos basado en el PDF "VerdeTech Quito"
    const products = [
        {
            name: "Sistema VerdeTech Pro",
            price: 249.99,
            [cite_start]description: "Kit modular de huerto urbano inteligente. Incluye estructura vertical, riego automatizado, sensores y acceso a la app. [cite: 223, 224, 225]"
        },
        {
            name: "Servicio de Instalación y Capacitación",
            price: 49.99,
            [cite_start]description: "Instalación profesional del sistema y capacitación personalizada sobre el uso del equipo y la aplicación móvil. [cite: 227]"
        },
        {
            name: "Paquete de Semillas Orgánicas",
            price: 15.50,
            [cite_start]description: "Paquete inicial con una selección de semillas orgánicas y nutrientes para comenzar tu cultivo. [cite: 226]"
        }
    ];

    // 2. Referencias a los elementos del DOM
    const productListContainer = document.getElementById('product-list');
    const addProductBtn = document.getElementById('add-product-btn');

    // 3. Función para renderizar (dibujar) los productos en la lista
    const renderProducts = () => {
        // Limpiamos la lista para evitar duplicados al re-renderizar
        productListContainer.innerHTML = '';

        // Iteramos sobre el arreglo de productos
        products.forEach(product => {
            // Creamos un elemento <li> para cada producto
            const listItem = document.createElement('li');

            // Usamos una plantilla de texto (template literal) para crear el HTML interno
            listItem.innerHTML = `
                <h3>${product.name}</h3>
                <p><strong>Precio:</strong> $${product.price.toFixed(2)}</p>
                <p>${product.description}</p>
            `;

            // Añadimos el nuevo <li> a la lista <ul>
            productListContainer.appendChild(listItem);
        });
    };

    // 4. Función para agregar un nuevo producto
    const addNewProduct = () => {
        // Definimos un nuevo producto de ejemplo
        const newProduct = {
            name: "Soporte Técnico Anual",
            price: 75.00,
            [cite_start]description: "Servicio de soporte técnico post-venta para garantizar la satisfacción y el funcionamiento continuo. [cite: 227]"
        };

        // Agregamos el nuevo producto al final del arreglo
        products.push(newProduct);

        // Volvemos a renderizar la lista completa para que aparezca el nuevo producto
        renderProducts();
    };

    // 5. Asignamos la función addNewProduct al evento 'click' del botón
    addProductBtn.addEventListener('click', addNewProduct);

    // 6. Renderizamos la lista inicial de productos cuando la página carga por primera vez
    renderProducts();
});