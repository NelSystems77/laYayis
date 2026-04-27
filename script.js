// Datos del menú basados en las imágenes proporcionadas
const menuData = [
    // Pollo Frito
    {
        id: 'pf1',
        name: 'Pollo Frito Muslo y Cadera',
        category: 'pollo-frito',
        price: 1500,
        description: 'Delicioso pollo frito crujiente con muslo y cadera',
        image: 'images/pollo-caribeno.jpg',
        customizations: ['sauces', 'sides']
    },
    {
        id: 'pf2',
        name: 'Pollo Frito Muslo y Cadera Arreglado',
        category: 'pollo-frito',
        price: 2200,
        description: 'Pollo frito completo con arroz, ensalada y papas',
        image: 'images/pollo-caribeno-arreglado.jpg',
        customizations: ['sauces', 'preferences']
    },
    {
        id: 'pf3',
        name: 'Pollo Frito Pechuga y Ala',
        category: 'pollo-frito',
        price: 2000,
        description: 'Pechuga y ala de pollo frito crujiente',
        image: 'images/pollo-patacones.jpg',
        customizations: ['sauces', 'sides']
    },
    {
        id: 'pf4',
        name: 'Pollo Frito Pechuga y Ala Arreglado',
        category: 'pollo-frito',
        price: 2800,
        description: 'Combo completo de pollo frito con acompañamientos',
        image: 'images/combo-caribeno.jpg',
        customizations: ['sauces', 'preferences']
    },
    // Pollo Caribeño
    {
        id: 'pc1',
        name: 'Pollo Caribeño Muslo y Cadera',
        category: 'pollo-caribeno',
        price: 1800,
        description: 'Pollo con sabor caribeño especial',
        image: 'images/pollo-caribeno.jpg',
        customizations: ['sauces', 'sides']
    },
    {
        id: 'pc2',
        name: 'Pollo Caribeño Pechuga y Ala',
        category: 'pollo-caribeno',
        price: 2500,
        description: 'Pechuga y ala con sazón del Caribe',
        image: 'images/pollo-caribeno-arreglado.jpg',
        customizations: ['sauces', 'sides']
    },
    // Papas Nacho
    {
        id: 'pp1',
        name: 'Papa Nacho Pequeña',
        category: 'otros',
        price: 2200,
        description: 'Papas estilo nacho con queso y salsas',
        image: null,
        customizations: ['sauces', 'toppings']
    },
    {
        id: 'pp2',
        name: 'Papa Nacho Grande',
        category: 'otros',
        price: 3500,
        description: 'Porción grande de papas nacho',
        image: null,
        customizations: ['sauces', 'toppings']
    },
    // Salchipapa
    {
        id: 'sp1',
        name: 'Salchipapa Pequeña',
        category: 'otros',
        price: 1800,
        description: 'Papas fritas con salchicha',
        image: null,
        customizations: ['sauces']
    },
    {
        id: 'sp2',
        name: 'Salchipapa Grande',
        category: 'otros',
        price: 3000,
        description: 'Porción grande de salchipapa',
        image: null,
        customizations: ['sauces']
    },
    // Patacones
    {
        id: 'pt1',
        name: 'Patacón Sencillo',
        category: 'otros',
        price: 2000,
        description: 'Patacones fritos crujientes',
        image: null,
        customizations: ['toppings']
    },
    {
        id: 'pt2',
        name: 'Patacón Supremo',
        category: 'otros',
        price: 3500,
        description: 'Patacones con todos los toppings',
        image: null,
        customizations: ['toppings', 'sauces']
    },
    {
        id: 'pt3',
        name: 'Patacón con Salchichón',
        category: 'otros',
        price: 2500,
        description: 'Patacones con salchichón',
        image: null,
        customizations: ['toppings', 'sauces']
    },
    // Empanadas
    {
        id: 'em1',
        name: 'Empanada Sencilla',
        category: 'otros',
        price: 1300,
        description: 'Empanada frita tradicional',
        image: null,
        customizations: ['sauces']
    },
    {
        id: 'em2',
        name: 'Empanada Arreglada',
        category: 'otros',
        price: 1600,
        description: 'Empanada con ensalada',
        image: null,
        customizations: ['sauces', 'preferences']
    },
    {
        id: 'em3',
        name: 'Empanada con Papas',
        category: 'otros',
        price: 2000,
        description: 'Empanada acompañada de papas fritas',
        image: null,
        customizations: ['sauces']
    },
    // Papas Fritas
    {
        id: 'pap1',
        name: 'Papas Pequeñas',
        category: 'otros',
        price: 1200,
        description: 'Porción pequeña de papas fritas',
        image: null,
        customizations: ['sauces']
    },
    {
        id: 'pap2',
        name: 'Papas Medianas',
        category: 'otros',
        price: 2000,
        description: 'Porción mediana de papas fritas',
        image: null,
        customizations: ['sauces']
    },
    {
        id: 'pap3',
        name: 'Papas Grandes',
        category: 'otros',
        price: 3000,
        description: 'Porción grande de papas fritas',
        image: null,
        customizations: ['sauces']
    },
    // Chalupas
    {
        id: 'ch1',
        name: 'Chalupas Pequeñas',
        category: 'otros',
        price: 2000,
        description: 'Chalupas tradicionales',
        image: null,
        customizations: ['toppings']
    },
    {
        id: 'ch2',
        name: 'Chalupas Grandes',
        category: 'otros',
        price: 3200,
        description: 'Porción grande de chalupas',
        image: null,
        customizations: ['toppings']
    },
    {
        id: 'ch3',
        name: 'Chalupas Mixtas',
        category: 'otros',
        price: 3500,
        description: 'Chalupas con variedad de ingredientes',
        image: null,
        customizations: ['toppings', 'preferences']
    },
    // Perros Calientes
    {
        id: 'hot1',
        name: 'Perro Caliente Sencillo',
        category: 'otros',
        price: 1000,
        description: 'Hot dog tradicional',
        image: null,
        customizations: ['sauces', 'toppings']
    },
    {
        id: 'hot2',
        name: 'Perro Caliente Arreglado',
        category: 'otros',
        price: 2500,
        description: 'Hot dog con todos los toppings',
        image: null,
        customizations: ['sauces', 'toppings']
    },
    // Plátano y Gallo
    {
        id: 'pg1',
        name: 'Plátano Maduro con Queso',
        category: 'otros',
        price: 1500,
        description: 'Plátano maduro frito con queso',
        image: null,
        customizations: []
    },
    {
        id: 'pg2',
        name: 'Gallo de Salchichón',
        category: 'otros',
        price: 1700,
        description: 'Gallo tradicional de salchichón',
        image: null,
        customizations: ['preferences']
    },
    // Tacos
    {
        id: 'tc1',
        name: 'Taco Pequeño',
        category: 'otros',
        price: 1000,
        description: 'Taco individual',
        image: null,
        customizations: ['sauces', 'preferences']
    },
    {
        id: 'tc2',
        name: 'Taco Grande',
        category: 'otros',
        price: 1500,
        description: 'Taco grande',
        image: null,
        customizations: ['sauces', 'preferences']
    },
    {
        id: 'tc3',
        name: 'Taco Supremo',
        category: 'otros',
        price: 2000,
        description: 'Taco con todos los ingredientes',
        image: null,
        customizations: ['sauces', 'preferences']
    },
    // Burritos
    {
        id: 'br1',
        name: 'Burrito Sencillo',
        category: 'otros',
        price: 2500,
        description: 'Burrito tradicional',
        image: null,
        customizations: ['preferences']
    },
    {
        id: 'br2',
        name: 'Burrito Arreglado',
        category: 'otros',
        price: 3500,
        description: 'Burrito completo',
        image: null,
        customizations: ['preferences', 'sauces']
    },
    // Hamburguesas
    {
        id: 'hb1',
        name: 'Hamburguesa Sencilla',
        category: 'otros',
        price: 1500,
        description: 'Hamburguesa clásica',
        image: null,
        customizations: ['preferences', 'sauces']
    },
    {
        id: 'hb2',
        name: 'Hamburguesa Jamón y Queso',
        category: 'otros',
        price: 2000,
        description: 'Hamburguesa con jamón y queso',
        image: null,
        customizations: ['preferences', 'sauces']
    },
    {
        id: 'hb3',
        name: 'Hamburguesa Doble Torta',
        category: 'otros',
        price: 2500,
        description: 'Hamburguesa doble carne',
        image: null,
        customizations: ['preferences', 'sauces']
    },
    {
        id: 'hb4',
        name: 'Hamburguesa Doble',
        category: 'otros',
        price: 3000,
        description: 'Doble hamburguesa completa',
        image: null,
        customizations: ['preferences', 'sauces']
    },
    {
        id: 'hb5',
        name: 'Hamburguesa Triple',
        category: 'otros',
        price: 3500,
        description: 'Triple hamburguesa',
        image: null,
        customizations: ['preferences', 'sauces']
    },
    {
        id: 'hb6',
        name: 'Hamburguesa de Pollo',
        category: 'otros',
        price: 2500,
        description: 'Hamburguesa de pechuga de pollo',
        image: null,
        customizations: ['preferences', 'sauces']
    },
    {
        id: 'hb7',
        name: 'Hamburguesa de Costilla',
        category: 'otros',
        price: 3500,
        description: 'Hamburguesa de costilla',
        image: null,
        customizations: ['preferences', 'sauces']
    },
    // Mogambos y Nuggets
    {
        id: 'mg1',
        name: 'Mogambos 150 g',
        category: 'otros',
        price: 2500,
        description: 'Porción de 150 gramos',
        image: 'images/mogambos.png',
        customizations: ['sauces']
    },
    {
        id: 'mg2',
        name: 'Mogambos 300 g',
        category: 'otros',
        price: 4500,
        description: 'Porción de 300 gramos',
        image: 'images/mogambos.png',
        customizations: ['sauces']
    },
    {
        id: 'ng1',
        name: 'Nuggets',
        category: 'otros',
        price: 2000,
        description: 'Nuggets de pollo crujientes',
        image: null,
        customizations: ['sauces']
    },
    // Bebidas
    {
        id: 'beb1',
        name: 'Refresco Gaseoso 355ml',
        category: 'bebidas',
        price: 550,
        description: 'Refresco en lata',
        image: null,
        customizations: []
    },
    {
        id: 'beb2',
        name: 'Refresco Gaseoso 600ml',
        category: 'bebidas',
        price: 1000,
        description: 'Refresco en botella',
        image: null,
        customizations: []
    },
    {
        id: 'beb3',
        name: 'Fuse Tea',
        category: 'bebidas',
        price: 750,
        description: 'Té helado Fuse Tea',
        image: null,
        customizations: []
    }
];

// Opciones de personalización
const customizationOptions = {
    sauces: {
        title: 'Salsas',
        options: [
            { id: 'mayonesa', label: 'Mayonesa' },
            { id: 'ketchup', label: 'Ketchup' },
            { id: 'mostaza', label: 'Mostaza' },
            { id: 'picante', label: 'Salsa picante' },
            { id: 'salsa-rosada', label: 'Salsa rosada' },
            { id: 'salsas-aparte', label: 'Todas las salsas aparte' }
        ]
    },
    preferences: {
        title: 'Preferencias',
        options: [
            { id: 'sin-cebolla', label: 'Sin cebolla' },
            { id: 'sin-tomate', label: 'Sin tomate' },
            { id: 'sin-lechuga', label: 'Sin lechuga' },
            { id: 'sin-pepino', label: 'Sin pepino' },
            { id: 'sin-chile', label: 'Sin chile' }
        ]
    },
    toppings: {
        title: 'Toppings',
        options: [
            { id: 'queso', label: 'Queso extra' },
            { id: 'carne-molida', label: 'Carne molida' },
            { id: 'pico-gallo', label: 'Pico de gallo' },
            { id: 'guacamole', label: 'Guacamole' }
        ]
    },
    sides: {
        title: 'Acompañamientos',
        options: [
            { id: 'arroz', label: 'Con arroz' },
            { id: 'ensalada', label: 'Con ensalada' },
            { id: 'papas', label: 'Con papas' }
        ]
    }
};

// Estado de la aplicación
let cart = [];
let orders = JSON.parse(localStorage.getItem('orders') || '[]');
let currentDeliveryType = 'delivery';
let currentFilter = 'all';
let isAdminLoggedIn = false;
let currentOrderNumber = null;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    setupEventListeners();
    updateCartDisplay();
});

// Renderizar menú
function renderMenu(filter = 'all') {
    const menuGrid = document.getElementById('menu-grid');
    const filteredMenu = filter === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === filter);
    
    menuGrid.innerHTML = filteredMenu.map(item => `
        <div class="menu-item" onclick="openProductModal('${item.id}')">
            ${item.image 
                ? `<img src="${item.image}" alt="${item.name}" class="menu-item-image" style="object-fit: cover;">`
                : `<div class="menu-item-image" style="background: linear-gradient(135deg, #00CED1 0%, #0E7C7B 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">🍗</div>`
            }
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">₡${item.price.toLocaleString()}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <button class="btn-add-cart" onclick="event.stopPropagation(); quickAddToCart('${item.id}')">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Agregar
                </button>
            </div>
        </div>
    `).join('');
}

// Abrir modal de producto
function openProductModal(productId) {
    const product = menuData.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const content = document.getElementById('product-modal-content');
    
    const customizationHTML = product.customizations.map(custType => {
        const custData = customizationOptions[custType];
        return `
            <div class="customization-section">
                <h4>${custData.title}</h4>
                <div class="customization-options">
                    ${custData.options.map(opt => `
                        <label class="customization-option">
                            <input type="checkbox" value="${opt.id}" data-type="${custType}">
                            <span>${opt.label}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    content.innerHTML = `
        <div class="product-detail">
            ${product.image 
                ? `<img src="${product.image}" alt="${product.name}" class="product-detail-image" style="object-fit: cover;">`
                : `<div class="product-detail-image" style="background: linear-gradient(135deg, #00CED1 0%, #0E7C7B 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 5rem;">🍗</div>`
            }
            <div class="product-detail-header">
                <h3 class="product-detail-name">${product.name}</h3>
                <span class="product-detail-price">₡${product.price.toLocaleString()}</span>
            </div>
            <p class="product-detail-description">${product.description}</p>
            
            ${customizationHTML}
            
            <div class="quantity-selector">
                <h4>Cantidad:</h4>
                <button class="qty-btn" onclick="decrementProductQty()">−</button>
                <span class="cart-item-qty" id="product-qty">1</span>
                <button class="qty-btn" onclick="incrementProductQty()">+</button>
            </div>
            
            <button class="product-add-btn" onclick="addCustomProductToCart('${product.id}')">
                Agregar al Carrito - ₡<span id="product-total">${product.price.toLocaleString()}</span>
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    updateProductTotal(product.price);
}

function incrementProductQty() {
    const qtyElement = document.getElementById('product-qty');
    const currentQty = parseInt(qtyElement.textContent);
    qtyElement.textContent = currentQty + 1;
    updateProductTotal();
}

function decrementProductQty() {
    const qtyElement = document.getElementById('product-qty');
    const currentQty = parseInt(qtyElement.textContent);
    if (currentQty > 1) {
        qtyElement.textContent = currentQty - 1;
        updateProductTotal();
    }
}

function updateProductTotal(basePrice = null) {
    const modal = document.getElementById('product-modal-content');
    const qtyElement = document.getElementById('product-qty');
    const totalElement = document.getElementById('product-total');
    
    if (!qtyElement || !totalElement) return;
    
    const qty = parseInt(qtyElement.textContent);
    
    if (basePrice === null) {
        const priceText = modal.querySelector('.product-detail-price').textContent;
        basePrice = parseInt(priceText.replace(/[^\d]/g, ''));
    }
    
    const total = basePrice * qty;
    totalElement.textContent = total.toLocaleString();
}

function addCustomProductToCart(productId) {
    const product = menuData.find(p => p.id === productId);
    const qty = parseInt(document.getElementById('product-qty').textContent);
    
    const customizations = {};
    document.querySelectorAll('#product-modal-content input[type="checkbox"]:checked').forEach(checkbox => {
        const type = checkbox.dataset.type;
        if (!customizations[type]) customizations[type] = [];
        customizations[type].push(checkbox.value);
    });
    
    addToCart(product, qty, customizations);
    closeProductModal();
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
}

// Agregar al carrito (rápido)
function quickAddToCart(productId) {
    const product = menuData.find(p => p.id === productId);
    addToCart(product, 1, {});
}

// Agregar al carrito
function addToCart(product, quantity, customizations) {
    const existingItem = cart.find(item => 
        item.product.id === product.id && 
        JSON.stringify(item.customizations) === JSON.stringify(customizations)
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ product, quantity, customizations });
    }
    
    updateCartDisplay();
    showCartNotification();
}

function showCartNotification() {
    const cartFloat = document.getElementById('cart-float');
    cartFloat.style.animation = 'none';
    setTimeout(() => {
        cartFloat.style.animation = 'floatBounce 3s ease-in-out infinite';
    }, 10);
}

// Actualizar visualización del carrito
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
    const checkoutTotal = document.getElementById('checkout-total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    const formattedTotal = `₡${totalPrice.toLocaleString()}`;
    cartTotal.textContent = formattedTotal;
    if (subtotal) subtotal.textContent = formattedTotal;
    if (total) total.textContent = formattedTotal;
    if (checkoutTotal) checkoutTotal.textContent = formattedTotal;
    
    renderCartItems();
}

// Renderizar items del carrito
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-state">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <h4>Tu carrito está vacío</h4>
                <p>Agrega productos del menú</p>
            </div>
        `;
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        const customizationsText = Object.entries(item.customizations)
            .map(([type, values]) => values.map(v => {
                const custType = customizationOptions[type];
                const option = custType.options.find(o => o.id === v);
                return option ? option.label : v;
            }).join(', '))
            .filter(text => text)
            .join(' • ');
        
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.product.name}</div>
                    ${customizationsText ? `<div class="cart-item-customizations">${customizationsText}</div>` : ''}
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)">−</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-price">₡${(item.product.price * item.quantity).toLocaleString()}</div>
            </div>
        `;
    }).join('');
}

// Actualizar cantidad en el carrito
function updateCartQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartDisplay();
}

// Toggle carrito
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
}

// Mostrar checkout
function showCheckout() {
    if (cart.length === 0) return;
    
    document.getElementById('cart-modal').classList.remove('active');
    document.getElementById('checkout-modal').classList.add('active');
    updateDeliverySection();
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('active');
}

// Actualizar sección de entrega según el tipo
function updateDeliverySection() {
    const deliverySection = document.getElementById('delivery-section');
    const paymentSection = document.getElementById('payment-section');
    const deliveryTypeText = document.getElementById('delivery-type-text');
    const addressField = document.getElementById('customer-address');
    
    if (currentDeliveryType === 'delivery') {
        deliverySection.style.display = 'block';
        paymentSection.style.display = 'block';
        deliveryTypeText.textContent = 'Delivery';
        addressField.required = true;
    } else {
        deliverySection.style.display = 'none';
        paymentSection.style.display = 'none';
        deliveryTypeText.textContent = 'Recoger en Local';
        addressField.required = false;
    }
}

// Procesar pedido
document.getElementById('checkout-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const orderNumber = generateOrderNumber();
    const orderData = {
        orderNumber,
        timestamp: new Date().toISOString(),
        customer: {
            name: document.getElementById('customer-name').value,
            phone: document.getElementById('customer-phone').value,
            address: currentDeliveryType === 'delivery' ? document.getElementById('customer-address').value : 'Recoger en local'
        },
        deliveryType: currentDeliveryType,
        paymentMethod: currentDeliveryType === 'delivery' ? document.querySelector('input[name="payment"]:checked').value : 'efectivo',
        specialNotes: document.getElementById('special-notes').value,
        items: cart.map(item => ({
            name: item.product.name,
            quantity: item.quantity,
            price: item.product.price,
            customizations: item.customizations
        })),
        total: cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
        status: 'received'
    };
    
    // Guardar pedido
    orders.unshift(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Enviar por WhatsApp
    sendWhatsAppOrder(orderData);
    
    // Limpiar carrito
    cart = [];
    updateCartDisplay();
    
    // Mostrar confirmación
    document.getElementById('checkout-modal').classList.remove('active');
    document.getElementById('order-number').textContent = orderNumber;
    currentOrderNumber = orderNumber;
    document.getElementById('confirmation-modal').classList.add('active');
});

// Generar número de pedido único
function generateOrderNumber() {
    const date = new Date();
    const dateStr = date.toISOString().slice(2, 10).replace(/-/g, '');
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `SLY${dateStr}${randomNum}`;
}

// Enviar pedido por WhatsApp
function sendWhatsAppOrder(orderData) {
    let message = `🍗 *NUEVO PEDIDO - Soda La Yayis*\n\n`;
    message += `📋 *Pedido:* ${orderData.orderNumber}\n`;
    message += `👤 *Cliente:* ${orderData.customer.name}\n`;
    message += `📱 *Teléfono:* ${orderData.customer.phone}\n`;
    message += `🚚 *Entrega:* ${orderData.deliveryType === 'delivery' ? 'Delivery' : 'Recoger'}\n`;
    
    if (orderData.deliveryType === 'delivery') {
        message += `📍 *Dirección:* ${orderData.customer.address}\n`;
        message += `💳 *Pago:* ${orderData.paymentMethod === 'sinpe' ? 'SINPE' : 'Efectivo'}\n`;
    }
    
    message += `\n📦 *Productos:*\n`;
    orderData.items.forEach(item => {
        message += `• ${item.quantity}x ${item.name} - ₡${(item.price * item.quantity).toLocaleString()}\n`;
        
        // Agregar personalizaciones
        Object.entries(item.customizations).forEach(([type, values]) => {
            if (values.length > 0) {
                const custType = customizationOptions[type];
                const labels = values.map(v => {
                    const option = custType.options.find(o => o.id === v);
                    return option ? option.label : v;
                });
                message += `  - ${labels.join(', ')}\n`;
            }
        });
    });
    
    if (orderData.specialNotes) {
        message += `\n📝 *Notas:* ${orderData.specialNotes}\n`;
    }
    
    message += `\n💰 *Total:* ₡${orderData.total.toLocaleString()}`;
    
    const whatsappUrl = `https://wa.me/50661138819?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Rastrear pedido
function showTrackOrder() {
    document.getElementById('track-modal').classList.add('active');
    document.getElementById('track-result').innerHTML = '';
    document.getElementById('track-order-id').value = '';
}

function closeTrackModal() {
    document.getElementById('track-modal').classList.remove('active');
}

function trackOrder() {
    const orderNumber = document.getElementById('track-order-id').value.trim().toUpperCase();
    const resultContainer = document.getElementById('track-result');
    
    if (!orderNumber) {
        resultContainer.innerHTML = '<p style="color: var(--accent); text-align: center;">Por favor ingresa un número de pedido</p>';
        return;
    }
    
    const order = orders.find(o => o.orderNumber === orderNumber);
    
    if (!order) {
        resultContainer.innerHTML = '<p style="color: var(--accent); text-align: center;">No se encontró el pedido</p>';
        return;
    }
    
    renderOrderTracking(order);
}

function trackCurrentOrder() {
    if (currentOrderNumber) {
        document.getElementById('confirmation-modal').classList.remove('active');
        document.getElementById('track-order-id').value = currentOrderNumber;
        showTrackOrder();
        trackOrder();
    }
}

function renderOrderTracking(order) {
    const statusMap = {
        received: { label: 'Recibido', icon: '📨', completed: true },
        preparing: { label: 'En Preparación', icon: '👨‍🍳', completed: true },
        ready: { label: 'Listo para Entrega', icon: '✅', completed: true },
        completed: { label: 'Completado', icon: '🎉', completed: true }
    };
    
    const statusOrder = ['received', 'preparing', 'ready', 'completed'];
    const currentStatusIndex = statusOrder.indexOf(order.status);
    
    const timelineHTML = statusOrder.map((status, index) => {
        const statusInfo = statusMap[status];
        const isActive = index === currentStatusIndex;
        const isCompleted = index < currentStatusIndex;
        const classNames = ['timeline-item'];
        if (isActive) classNames.push('active');
        if (isCompleted) classNames.push('completed');
        
        return `
            <div class="${classNames.join(' ')}">
                <div class="timeline-status">${statusInfo.icon} ${statusInfo.label}</div>
                ${isActive || isCompleted ? `<div class="timeline-time">${new Date(order.timestamp).toLocaleString('es-CR')}</div>` : ''}
            </div>
        `;
    }).join('');
    
    document.getElementById('track-result').innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <h4 style="color: var(--primary-dark); margin-bottom: 0.5rem;">Pedido: ${order.orderNumber}</h4>
            <p style="color: var(--gray-600);">Cliente: ${order.customer.name}</p>
            <p style="color: var(--gray-600);">Total: ₡${order.total.toLocaleString()}</p>
        </div>
        <div class="order-timeline">
            ${timelineHTML}
        </div>
    `;
}

// Cerrar confirmación
function closeConfirmation() {
    document.getElementById('confirmation-modal').classList.remove('active');
    currentOrderNumber = null;
}

// Admin
function showAdminLogin() {
    document.getElementById('admin-login-modal').classList.add('active');
}

function closeAdminLogin() {
    document.getElementById('admin-login-modal').classList.remove('active');
}

document.getElementById('admin-login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('admin-password').value;
    
    // Contraseña simple para demo (en producción usar autenticación real)
    if (password === 'admin123') {
        isAdminLoggedIn = true;
        closeAdminLogin();
        showAdminPanel();
    } else {
        alert('Contraseña incorrecta');
    }
});

function showAdminPanel() {
    document.getElementById('customer-view').classList.remove('active');
    document.getElementById('admin-view').classList.add('active');
    renderAdminOrders();
    updateAdminStats();
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    document.getElementById('admin-view').classList.remove('active');
    document.getElementById('customer-view').classList.add('active');
}

function renderAdminOrders(filter = 'all') {
    const ordersContainer = document.getElementById('admin-orders');
    const filteredOrders = filter === 'all' 
        ? orders 
        : orders.filter(o => o.status === filter);
    
    if (filteredOrders.length === 0) {
        ordersContainer.innerHTML = `
            <div class="empty-state">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <h4>No hay pedidos</h4>
                <p>Los pedidos aparecerán aquí</p>
            </div>
        `;
        return;
    }
    
    ordersContainer.innerHTML = filteredOrders.map(order => `
        <div class="admin-order-card">
            <div class="order-card-header">
                <span class="order-number-badge">${order.orderNumber}</span>
                <span class="order-status-badge ${order.status}">${getStatusLabel(order.status)}</span>
            </div>
            <div class="order-card-content">
                <div class="order-info-section">
                    <h5>Cliente</h5>
                    <p><strong>${order.customer.name}</strong></p>
                    <p>📱 ${order.customer.phone}</p>
                    ${order.deliveryType === 'delivery' ? `<p>📍 ${order.customer.address}</p>` : '<p>🏪 Recoger en local</p>'}
                </div>
                <div class="order-info-section">
                    <h5>Detalles</h5>
                    <p>🕐 ${new Date(order.timestamp).toLocaleString('es-CR')}</p>
                    <p>💰 Total: ₡${order.total.toLocaleString()}</p>
                    ${order.paymentMethod ? `<p>💳 ${order.paymentMethod === 'sinpe' ? 'SINPE' : 'Efectivo'}</p>` : ''}
                </div>
            </div>
            <div class="order-items-list">
                ${order.items.map(item => `
                    <div class="order-item-row">
                        <span>${item.quantity}x ${item.name}</span>
                        <span>₡${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                `).join('')}
            </div>
            ${order.specialNotes ? `<p style="color: var(--gray-600); margin: 1rem 0;"><strong>Notas:</strong> ${order.specialNotes}</p>` : ''}
            <div class="order-actions">
                ${order.status !== 'completed' ? `
                    ${order.status === 'received' ? `<button class="action-btn action-btn-primary" onclick="updateOrderStatus('${order.orderNumber}', 'preparing')">Iniciar Preparación</button>` : ''}
                    ${order.status === 'preparing' ? `<button class="action-btn action-btn-success" onclick="updateOrderStatus('${order.orderNumber}', 'ready')">Marcar como Listo</button>` : ''}
                    ${order.status === 'ready' ? `<button class="action-btn action-btn-success" onclick="updateOrderStatus('${order.orderNumber}', 'completed')">Marcar como Completado</button>` : ''}
                ` : '<span style="color: var(--success); font-weight: 600;">✓ Pedido completado</span>'}
            </div>
        </div>
    `).join('');
}

function getStatusLabel(status) {
    const labels = {
        received: 'Recibido',
        preparing: 'En Preparación',
        ready: 'Listo',
        completed: 'Completado'
    };
    return labels[status] || status;
}

function updateOrderStatus(orderNumber, newStatus) {
    const order = orders.find(o => o.orderNumber === orderNumber);
    if (order) {
        order.status = newStatus;
        localStorage.setItem('orders', JSON.stringify(orders));
        renderAdminOrders(currentFilter);
        updateAdminStats();
        
        // Notificar al cliente por WhatsApp
        notifyCustomerStatus(order);
    }
}

function notifyCustomerStatus(order) {
    const statusMessages = {
        preparing: '👨‍🍳 Tu pedido está siendo preparado',
        ready: '✅ Tu pedido está listo para entrega/recolección',
        completed: '🎉 Tu pedido ha sido completado'
    };
    
    const message = `🍗 *Soda La Yayis*\n\n${statusMessages[order.status]}\n\n📋 Pedido: ${order.orderNumber}\n👤 ${order.customer.name}`;
    const whatsappUrl = `https://wa.me/${order.customer.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function updateAdminStats() {
    const today = new Date().toDateString();
    const todayOrders = orders.filter(o => new Date(o.timestamp).toDateString() === today);
    
    document.getElementById('stat-today').textContent = todayOrders.length;
    document.getElementById('stat-pending').textContent = orders.filter(o => o.status === 'received').length;
    document.getElementById('stat-preparing').textContent = orders.filter(o => o.status === 'preparing').length;
    
    const todayRevenue = todayOrders.reduce((sum, o) => sum + o.total, 0);
    document.getElementById('stat-revenue').textContent = `₡${todayRevenue.toLocaleString()}`;
}

// Event listeners
function setupEventListeners() {
    // Tipo de entrega
    document.querySelectorAll('.delivery-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.delivery-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDeliveryType = btn.dataset.type;
            updateDeliverySection();
        });
    });
    
    // Filtros de categorías
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            renderMenu(category);
        });
    });
    
    // Filtros admin
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderAdminOrders(currentFilter);
        });
    });
    
    // Cerrar modales al hacer clic fuera
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}
