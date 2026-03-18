// ===== Data: Restaurants and Menus =====

const restaurants = [
    {
        id: 1,
        name: "Burgers Palace",
        cuisine: "American, Burgers",
        rating: 4.3,
        deliveryTime: "25-35 mins",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=200&fit=crop",
        menu: [
            { id: 101, name: "Whopper Burger", price: 199, type: "nonveg", desc: "Flame-grilled beef patty", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
            { id: 102, name: "Veg Burger", price: 149, type: "veg", desc: "Crispy veg patty with fresh veggies", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
            { id: 103, name: "French Fries", price: 99, type: "veg", desc: "Crispy golden fries with ketchup", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=200&fit=crop" },
            { id: 104, name: "Chocolate Shake", price: 129, type: "veg", desc: "Thick and creamy chocolate milkshake", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop" },
        ]
    },
    {
        id: 2,
        name: "Pizza Hut",
        cuisine: "Italian, Pizza",
        rating: 4.5,
        deliveryTime: "30-40 mins",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=200&fit=crop",
        menu: [
            { id: 201, name: "Margherita Pizza", price: 249, type: "veg", desc: "Classic tomato sauce and mozzarella", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop" },
            { id: 202, name: "Pepperoni Pizza", price: 329, type: "nonveg", desc: "Loaded with pepperoni slices", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop" },
            { id: 203, name: "Garlic Bread", price: 119, type: "veg", desc: "Toasted bread with garlic butter", img: "images/garlic_bread.png" },
            { id: 204, name: "Pasta Arrabbiata", price: 199, type: "veg", desc: "Spicy tomato pasta with herbs", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=200&fit=crop" },
        ]
    },
    {
        id: 3,
        name: "Indian Classics",
        cuisine: "Indian, Biryani",
        rating: 4.1,
        deliveryTime: "40-50 mins",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop",
        menu: [
            { id: 301, name: "Chicken Biryani", price: 279, type: "nonveg", desc: "Aromatic basmati rice with chicken", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop" },
            { id: 302, name: "Paneer Butter Masala", price: 229, type: "veg", desc: "Creamy paneer in rich tomato gravy", img: "images/paneer_butter_masala.png" },
            { id: 303, name: "Dal Tadka", price: 149, type: "veg", desc: "Yellow lentils tempered with spices", img: "images/dal_tadka.png" },
            { id: 304, name: "Naan Bread", price: 49, type: "veg", desc: "Soft and fluffy tandoor naan", img: "images/naan_bread.png" },
        ]
    },
    {
        id: 4,
        name: "Chinese Wok",
        cuisine: "Chinese, Asian",
        rating: 4.0,
        deliveryTime: "25-35 mins",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=200&fit=crop",
        menu: [
            { id: 401, name: "Veg Fried Rice", price: 169, type: "veg", desc: "Wok-tossed rice with fresh veggies", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
            { id: 402, name: "Chicken Manchurian", price: 219, type: "nonveg", desc: "Crispy chicken in spicy manchurian sauce", img: "images/chicken_manchurian.png" },
            { id: 403, name: "Spring Rolls", price: 139, type: "veg", desc: "Crispy rolls with vegetable filling", img: "images/spring_rolls.png" },
            { id: 404, name: "Hakka Noodles", price: 179, type: "veg", desc: "Stir-fried noodles with mixed veggies", img: "images/hakka_noodles.png" },
        ]
    },
    {
        id: 5,
        name: "The Sandwich hub",
        cuisine: "Sandwiches, Wraps",
        rating: 3.9,
        deliveryTime: "15-25 mins",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=200&fit=crop",
        menu: [
            { id: 501, name: "Club Sandwich", price: 159, type: "nonveg", desc: "Triple-decker with chicken and cheese", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop" },
            { id: 502, name: "Veg Grilled Sandwich", price: 119, type: "veg", desc: "Grilled sandwich with veggies and cheese", img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=300&h=200&fit=crop" },
            { id: 503, name: "Cold Coffee", price: 99, type: "veg", desc: "Chilled coffee with a hint of sweetness", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop" },
        ]
    },
    {
        id: 6,
        name: "South Indian Tiffins",
        cuisine: "South Indian",
        rating: 4.4,
        deliveryTime: "20-30 mins",
        img: "images/masala_dosa.png",
        menu: [
            { id: 601, name: "Masala Dosa", price: 129, type: "veg", desc: "Crispy dosa with spiced potato filling", img: "images/masala_dosa.png" },
            { id: 602, name: "Idli Sambar", price: 89, type: "veg", desc: "Steamed idlis served with sambar", img: "images/idli_sambar.png" },
            { id: 603, name: "Medu Vada", price: 79, type: "veg", desc: "Crispy lentil donuts with coconut chutney", img: "images/medu_vada.png" },
            { id: 604, name: "Filter Coffee", price: 59, type: "veg", desc: "Authentic South Indian filter coffee", img: "images/filter_coffee.png" },
        ]
    },
    {
        id: 7,
        name: "Tandoori Express",
        cuisine: "North Indian, Punjabi",
        rating: 4.6,
        deliveryTime: "35-45 mins",
        img: "images/tandoori_chicken.png",
        menu: [
            { id: 701, name: "Tandoori Chicken", price: 349, type: "nonveg", desc: "Classic char-grilled spicy chicken", img: "images/tandoori_chicken.png" },
            { id: 702, name: "Butter Chicken", price: 299, type: "nonveg", desc: "Tender chicken chunks in rich butter gravy", img: "images/butter_chicken.png" },
            { id: 703, name: "Palak Paneer", price: 249, type: "veg", desc: "Fresh cottage cheese in creamy spinach sauce", img: "images/palak_paneer.png" },
            { id: 704, name: "Garlic Naan", price: 59, type: "veg", desc: "Fluffy flatbread topped with garlic and butter", img: "images/naan_bread.png" }
        ]
    },
    {
        id: 8,
        name: "sweet delights",
        cuisine: "Desserts, Bakery",
        rating: 4.8,
        deliveryTime: "15-25 mins",
        img: "images/chocolate_brownie.png",
        menu: [
            { id: 801, name: "Gulab Jamun", price: 99, type: "veg", desc: "Classic Indian sweet soaked in sugar syrup", img: "images/gulab_jamun.png" },
            { id: 802, name: "Chocolate Brownie", price: 129, type: "veg", desc: "Warm gooey brownie with chocolate sauce", img: "images/chocolate_brownie.png" },
            { id: 803, name: "Red Velvet Cake", price: 149, type: "veg", desc: "Slice of rich red velvet cake with cream cheese frosting", img: "images/red_velvet.png" },
            { id: 804, name: "Rasgulla", price: 89, type: "veg", desc: "Soft and spongy milk solids in light syrup", img: "images/rasgulla.png" }
        ]
    },
    {
        id: 9,
        name: "Juices",
        cuisine: "Beverages, Healthy",
        rating: 4.2,
        deliveryTime: "10-20 mins",
        img: "images/juice_cover.jpg",
        menu: [
            { id: 901, name: "Mango Smoothie", price: 119, type: "veg", desc: "Fresh alphonso mango blended with yogurt", img: "images/mango_smoothie.png" },
            { id: 902, name: "Watermelon Juice", price: 79, type: "veg", desc: "Chilled pure watermelon juice", img: "images/watermelon.png" },
            { id: 903, name: "Mixed Fruit Bowl", price: 159, type: "veg", desc: "Freshly cut seasonal fruits", img: "images/fruit_bowl.jpg" },
            { id: 904, name: "Orange Juice", price: 99, type: "veg", desc: "100% fresh squeezed orange juice", img: "images/orange_juice.jpg" }
        ]
    }
];

// ===== Cart State =====
let cart = []; // array of { item, qty }

// ===== On Page Load =====
window.onload = function () {
    const grid = document.getElementById("restaurant-grid");
    if (grid) {
        renderRestaurants(restaurants);
    }
};

// ===== Render Restaurants =====
function renderRestaurants(list) {
    const grid = document.getElementById("restaurant-grid");
    if (!grid) return;
    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = "<p style='color:#888;'>No restaurants found.</p>";
        return;
    }

    list.forEach(function (r) {
        const stars = getStars(r.rating);
        const card = document.createElement("div");
        card.className = "restaurant-card";
        card.onclick = function () { showMenu(r.id); };
        card.innerHTML = `
            <img src="${r.img}" alt="${r.name}" onerror="this.src='https://via.placeholder.com/230x140?text=Restaurant'">
            <div class="restaurant-info">
                <h3>${r.name}</h3>
                <p>${r.cuisine}</p>
                <p class="rating">${stars} ${r.rating}</p>
                <p>${r.deliveryTime}</p>
                <span class="open-badge">OPEN</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ===== Show Menu of Selected Restaurant =====
function showMenu(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;

    document.getElementById("restaurants").style.display = "none";
    document.getElementById("menu-section").style.display = "block";
    document.getElementById("menu-restaurant-name").textContent = restaurant.name + " - Menu";

    const menuGrid = document.getElementById("menu-grid");
    menuGrid.innerHTML = "";

    restaurant.menu.forEach(function (item) {
        const badge = item.type === "veg"
            ? `<span class="veg-badge">VEG</span>`
            : `<span class="nonveg-badge">NON-VEG</span>`;

        const card = document.createElement("div");
        card.className = "menu-item";
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/210x130?text=Food'">
            <div class="menu-item-info">
                ${badge}
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
                <span class="item-price">₹${item.price}</span>
                <div id="btn-container-${item.id}">
                    <button class="add-btn" onclick="addToCart(${restaurantId}, ${item.id})">Add to Cart +</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });

    document.getElementById("menu-section").scrollIntoView({ behavior: "smooth" });
}

// ===== Go Back to Restaurant List =====
function goBack() {
    document.getElementById("restaurants").style.display = "block";
    document.getElementById("menu-section").style.display = "none";
    document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" });
}

// ===== Add Item to Cart =====
function addToCart(restaurantId, itemId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    const item = restaurant.menu.find(m => m.id === itemId);

    const existing = cart.find(c => c.item.id === itemId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ item: item, qty: 1 });
    }

    updateCartUI();
    updateMenuButton(itemId);
    showCartNotification(item.name);
}

// ===== Remove Item from Cart =====
function removeFromCart(itemId) {
    cart = cart.filter(c => c.item.id !== itemId);
    updateCartUI();
    updateMenuButton(itemId);
}

// ===== Change Quantity =====
function changeQty(itemId, change) {
    const cartItem = cart.find(c => c.item.id === itemId);
    if (!cartItem) return;

    cartItem.qty += change;
    if (cartItem.qty <= 0) {
        removeFromCart(itemId);
        return;
    }
    updateCartUI();
    updateMenuButton(itemId);
}

// ===== Update the Add button to a stepper or restore it =====
function updateMenuButton(itemId) {
    const container = document.getElementById("btn-container-" + itemId);
    if (!container) return; // menu not open

    const cartItem = cart.find(c => c.item.id === itemId);

    // Find which restaurant this item belongs to (for the add-btn restore)
    let restaurantId = null;
    for (const r of restaurants) {
        if (r.menu.find(m => m.id === itemId)) { restaurantId = r.id; break; }
    }

    if (cartItem && cartItem.qty > 0) {
        container.innerHTML = `
            <div class="menu-stepper">
                <button class="stepper-btn" onclick="changeQty(${itemId}, -1)">−</button>
                <span class="stepper-count">${cartItem.qty}</span>
                <button class="stepper-btn" onclick="changeQty(${itemId}, 1)">+</button>
            </div>
        `;
    } else {
        container.innerHTML = `<button class="add-btn" onclick="addToCart(${restaurantId}, ${itemId})">Add to Cart +</button>`;
    }
}

// ===== Update Cart UI =====
function updateCartUI() {
    const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);
    document.getElementById("cart-count").textContent = totalItems;

    const cartList = document.getElementById("cart-items-list");
    const cartSummary = document.getElementById("cart-summary");

    if (cart.length === 0) {
        cartList.innerHTML = '<p class="empty-cart-msg">Your cart is empty!</p>';
        cartSummary.style.display = "none";
        return;
    }

    cartList.innerHTML = "";
    cart.forEach(function (c) {
        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
            <span>${c.item.name}</span>
            <div class="qty-controls">
                <button onclick="changeQty(${c.item.id}, -1)">-</button>
                <span>${c.qty}</span>
                <button onclick="changeQty(${c.item.id}, 1)">+</button>
            </div>
            <span>₹${c.item.price * c.qty}</span>
            <button class="remove-btn" onclick="removeFromCart(${c.item.id})">X</button>
        `;
        cartList.appendChild(row);
    });

    // Update bill table
    cartSummary.style.display = "block";
    const tbody = document.getElementById("bill-tbody");
    tbody.innerHTML = "";

    let subtotal = 0;
    cart.forEach(function (c) {
        const total = c.item.price * c.qty;
        subtotal += total;
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${c.item.name}</td><td>${c.qty}</td><td>₹${total}</td>`;
        tbody.appendChild(tr);
    });

    const gst = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + gst + 30;

    document.getElementById("subtotal").textContent = "₹" + subtotal;
    document.getElementById("gst-amt").textContent = "₹" + gst;
    document.getElementById("total-amt").innerHTML = "<strong>₹" + grandTotal + "</strong>";
}

// ===== Toggle Cart Sidebar =====
function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    const overlay = document.getElementById("cart-overlay");

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        overlay.style.display = "none";
    } else {
        sidebar.classList.add("open");
        overlay.style.display = "block";
    }
}

// ===== Place Order =====
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const totalEl = document.getElementById("total-amt");
    const total = totalEl.textContent.replace("<strong>", "").replace("</strong>", "");

    // Close cart
    document.getElementById("cart-sidebar").classList.remove("open");
    document.getElementById("cart-overlay").style.display = "none";

    // Show modal
    document.getElementById("modal-total").textContent = "Total Paid: " + total;
    document.getElementById("modal-overlay").style.display = "flex";

    // Clear cart
    cart = [];
    updateCartUI();
}

// ===== Close Modal =====
function closeModal() {
    document.getElementById("modal-overlay").style.display = "none";
}

// ===== Search Restaurants =====
function searchRestaurants() {
    const grid = document.getElementById("restaurant-grid");
    if (!grid) return;

    const query = document.getElementById("search-input").value.toLowerCase();

    if (document.getElementById("menu-section") && document.getElementById("menu-section").style.display === "block") {
        goBack();
    }

    const filtered = restaurants.filter(r =>
        r.name.toLowerCase().includes(query) ||
        r.cuisine.toLowerCase().includes(query)
    );

    renderRestaurants(filtered);
}

// ===== Star Rating Display =====
function getStars(rating) {
    const full = Math.floor(rating);
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < full ? "★" : "☆";
    }
    return stars;
}

// ===== Show Cart Notification =====
function showCartNotification(itemName) {
    // Create a small toast
    const toast = document.createElement("div");
    toast.textContent = itemName + " added to cart!";
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 10px 22px;
        border-radius: 20px;
        font-size: 14px;
        z-index: 999;
        opacity: 1;
        transition: opacity 0.4s ease;
    `;
    document.body.appendChild(toast);

    setTimeout(function () {
        toast.style.opacity = "0";
        setTimeout(function () { toast.remove(); }, 400);
    }, 1800);
}

// ===== Toggle Contact Section =====
function toggleContact() {
    const section = document.getElementById("contact");
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        section.style.display = "none";
    }
}

// ===== Contact Form =====
function submitContact(event) {
    event.preventDefault();
    const name = document.getElementById("fname").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (!name || !email || !msg) {
        alert("Please fill all the fields!");
        return;
    }

    document.getElementById("contact-success").style.display = "block";
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    setTimeout(function () {
        document.getElementById("contact-success").style.display = "none";
    }, 3000);
}
