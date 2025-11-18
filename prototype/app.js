// ============================================
// FOOD DATA
// ============================================

const foodItems = [
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic pizza with fresh mozzarella and basil",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
        category: "veg",
        rating: 4.5,
        deliveryTime: 25
    },
    {
        id: 2,
        name: "Cheeseburger Deluxe",
        description: "Juicy beef patty with premium cheese and fixings",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
        category: "non-veg",
        rating: 4.7,
        deliveryTime: 20
    },
    {
        id: 3,
        name: "California Roll",
        description: "Fresh sushi roll with avocado and crab",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop",
        category: "non-veg",
        rating: 4.8,
        deliveryTime: 30
    },
    {
        id: 4,
        name: "Pad Thai Noodles",
        description: "Authentic Thai stir-fried noodles with vegetables",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop",
        category: "veg",
        rating: 4.6,
        deliveryTime: 28
    },
    {
        id: 5,
        name: "Grilled Salmon",
        description: "Premium Atlantic salmon with lemon butter sauce",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop",
        category: "non-veg",
        rating: 4.9,
        deliveryTime: 35
    },
    {
        id: 6,
        name: "Caesar Salad",
        description: "Crisp romaine with classic Caesar dressing",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop",
        category: "veg",
        rating: 4.3,
        deliveryTime: 15
    }
];

// ============================================
// APP STATE
// ============================================

let currentFoodIndex = 0;
let currentQuantity = 1;
let cart = [];
let favorites = new Set();

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    
    if (totalItems > 0) {
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// ============================================
// FOOD DISPLAY
// ============================================

function displayFood(index) {
    const food = foodItems[index];
    const foodImage = document.getElementById('foodImage');
    const foodName = document.getElementById('foodName');
    const foodDescription = document.getElementById('foodDescription');
    const priceBadge = document.getElementById('priceBadge');
    const favoriteBtn = document.getElementById('favoriteBtn');
    
    // Animate card transition
    const foodCard = document.getElementById('foodCard');
    foodCard.style.opacity = '0';
    foodCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        foodImage.src = food.image;
        foodName.textContent = food.name;
        foodDescription.textContent = food.description;
        priceBadge.textContent = formatPrice(food.price);
        
        // Update favorite state
        if (favorites.has(food.id)) {
            favoriteBtn.classList.add('active');
        } else {
            favoriteBtn.classList.remove('active');
        }
        
        foodCard.style.opacity = '1';
        foodCard.style.transform = 'scale(1)';
    }, 150);
    
    // Reset quantity
    currentQuantity = 1;
    document.getElementById('quantityValue').textContent = currentQuantity;
}

function navigateFood(direction) {
    if (direction === 'next') {
        currentFoodIndex = (currentFoodIndex + 1) % foodItems.length;
    } else {
        currentFoodIndex = (currentFoodIndex - 1 + foodItems.length) % foodItems.length;
    }
    displayFood(currentFoodIndex);
}

// ============================================
// SWIPE GESTURE HANDLING
// ============================================

let touchStartX = 0;
let touchEndX = 0;
let isDragging = false;

const foodCard = document.getElementById('foodCard');

foodCard.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isDragging = true;
    foodCard.classList.add('swiping');
});

foodCard.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    foodCard.style.transform = `translateX(${diff}px) rotate(${diff * 0.05}deg)`;
});

foodCard.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    foodCard.classList.remove('swiping');
    
    const swipeThreshold = 100;
    const diff = touchEndX - touchStartX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            navigateFood('prev');
        } else {
            navigateFood('next');
        }
    }
    
    foodCard.style.transform = '';
});

// Double tap to favorite
let lastTap = 0;
const foodImage = document.getElementById('foodImage');

foodImage.addEventListener('touchend', () => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 300 && tapLength > 0) {
        // Double tap detected
        toggleFavorite();
    }
    
    lastTap = currentTime;
});

// ============================================
// QUANTITY CONTROLS
// ============================================

document.getElementById('decreaseBtn').addEventListener('click', () => {
    if (currentQuantity > 1) {
        currentQuantity--;
        const quantityValue = document.getElementById('quantityValue');
        quantityValue.textContent = currentQuantity;
        quantityValue.classList.add('quantity-change');
        setTimeout(() => quantityValue.classList.remove('quantity-change'), 300);
    }
});

document.getElementById('increaseBtn').addEventListener('click', () => {
    if (currentQuantity < 99) {
        currentQuantity++;
        const quantityValue = document.getElementById('quantityValue');
        quantityValue.textContent = currentQuantity;
        quantityValue.classList.add('quantity-change');
        setTimeout(() => quantityValue.classList.remove('quantity-change'), 300);
    }
});

// ============================================
// FAVORITE FUNCTIONALITY
// ============================================

function toggleFavorite() {
    const food = foodItems[currentFoodIndex];
    const favoriteBtn = document.getElementById('favoriteBtn');
    
    if (favorites.has(food.id)) {
        favorites.delete(food.id);
        favoriteBtn.classList.remove('active');
        showToast('Removed from favorites');
    } else {
        favorites.add(food.id);
        favoriteBtn.classList.add('active');
        showToast('❤️ Added to favorites!');
    }
}

document.getElementById('favoriteBtn').addEventListener('click', toggleFavorite);

// ============================================
// ADD TO CART
// ============================================

document.getElementById('addToCartBtn').addEventListener('click', () => {
    const food = foodItems[currentFoodIndex];
    
    // Check if item already in cart
    const existingItem = cart.find(item => item.id === food.id);
    
    if (existingItem) {
        existingItem.quantity += currentQuantity;
    } else {
        cart.push({
            ...food,
            quantity: currentQuantity
        });
    }
    
    updateCartBadge();
    showToast(`${currentQuantity}x ${food.name} added to cart!`);
    
    // Reset quantity
    currentQuantity = 1;
    document.getElementById('quantityValue').textContent = currentQuantity;
});

// ============================================
// NAVIGATION OVERLAYS
// ============================================

document.getElementById('prevBtn').addEventListener('click', () => {
    navigateFood('prev');
});

document.getElementById('nextBtn').addEventListener('click', () => {
    navigateFood('next');
});

// ============================================
// CART MODAL
// ============================================

function openCart() {
    const cartSheet = document.getElementById('cartSheet');
    const cartItems = document.getElementById('cartItems');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Your cart is empty</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-controls">
                        <div class="item-quantity">
                            <button onclick="updateCartItemQuantity(${index}, -1)">−</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateCartItemQuantity(${index}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeCartItem(${index})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }
    
    updateCartSummary();
    cartSheet.classList.add('active');
}

function closeCart() {
    document.getElementById('cartSheet').classList.remove('active');
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = cart.length > 0 ? 2.99 : 0;
    const total = subtotal + delivery;
    
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('delivery').textContent = formatPrice(delivery);
    document.getElementById('total').textContent = formatPrice(total);
    document.getElementById('checkoutTotal').textContent = formatPrice(total);
}

function updateCartItemQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        removeCartItem(index);
    } else {
        openCart(); // Refresh display
        updateCartBadge();
    }
}

function removeCartItem(index) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    openCart(); // Refresh display
    updateCartBadge();
    showToast(`${itemName} removed from cart`);
}

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('closeCartBtn').addEventListener('click', closeCart);

// Close on backdrop click
document.querySelector('#cartSheet .bottom-sheet-backdrop').addEventListener('click', closeCart);

// ============================================
// CHECKOUT FLOW
// ============================================

document.getElementById('checkoutBtn').addEventListener('click', () => {
    closeCart();
    setTimeout(() => {
        document.getElementById('checkoutSheet').classList.add('active');
    }, 300);
});

document.getElementById('backFromCheckout').addEventListener('click', () => {
    document.getElementById('checkoutSheet').classList.remove('active');
    setTimeout(() => {
        openCart();
    }, 300);
});

// Address selection
document.querySelectorAll('.address-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.address-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

// Payment selection
document.querySelectorAll('.payment-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});

// Delivery time chips
document.querySelectorAll('[data-time]').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('[data-time]').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
    });
});

// Coupon application
document.getElementById('applyCouponBtn').addEventListener('click', () => {
    const couponInput = document.getElementById('couponInput');
    const code = couponInput.value.trim().toUpperCase();
    
    if (code === 'SAVE10') {
        showToast('✨ Coupon applied! $5 discount');
        couponInput.value = '';
    } else if (code) {
        showToast('❌ Invalid coupon code');
    }
});

// Place Order
document.getElementById('placeOrderBtn').addEventListener('click', () => {
    document.getElementById('checkoutSheet').classList.remove('active');
    
    setTimeout(() => {
        // Generate random order number
        const orderNumber = Math.floor(10000 + Math.random() * 90000);
        document.getElementById('orderNumber').textContent = orderNumber;
        
        document.getElementById('orderTrackingModal').classList.add('active');
        
        // Simulate order progress
        setTimeout(() => {
            animateOrderProgress();
        }, 2000);
    }, 300);
    
    // Clear cart
    cart = [];
    updateCartBadge();
});

function animateOrderProgress() {
    const timeline = document.querySelectorAll('.timeline-item');
    
    // After 2 seconds, move to "Out for Delivery"
    setTimeout(() => {
        timeline[1].classList.remove('active');
        timeline[1].classList.add('completed');
        timeline[2].classList.add('active');
        timeline[2].querySelector('.timeline-time').textContent = 'ETA 15 min';
    }, 3000);
    
    // After 5 more seconds, mark as delivered
    setTimeout(() => {
        timeline[2].classList.remove('active');
        timeline[2].classList.add('completed');
        timeline[3].classList.add('completed');
        timeline[3].querySelector('.timeline-time').textContent = 'Just now';
        showToast('🎉 Order delivered! Enjoy your meal!');
    }, 8000);
}

document.getElementById('closeTrackingBtn').addEventListener('click', () => {
    document.getElementById('orderTrackingModal').classList.remove('active');
});

document.getElementById('closeTrackingBtnAlt').addEventListener('click', () => {
    showToast('Opening map...');
});

document.querySelector('#orderTrackingModal .modal-backdrop').addEventListener('click', () => {
    document.getElementById('orderTrackingModal').classList.remove('active');
});

// ============================================
// LOCATION MODAL
// ============================================

document.getElementById('locationBtn').addEventListener('click', () => {
    document.getElementById('locationModal').classList.add('active');
});

document.getElementById('closeLocationBtn').addEventListener('click', () => {
    document.getElementById('locationModal').classList.remove('active');
});

document.getElementById('useCurrentLocation').addEventListener('click', () => {
    showToast('📍 Using your current location...');
    document.getElementById('locationModal').classList.remove('active');
});

document.querySelector('#locationModal .modal-backdrop').addEventListener('click', () => {
    document.getElementById('locationModal').classList.remove('active');
});

// ============================================
// PROFILE MODAL
// ============================================

document.getElementById('avatarBtn').addEventListener('click', () => {
    document.getElementById('profileModal').classList.add('active');
});

document.getElementById('closeProfileBtn').addEventListener('click', () => {
    document.getElementById('profileModal').classList.remove('active');
});

document.getElementById('orderHistoryBtn').addEventListener('click', () => {
    document.getElementById('profileModal').classList.remove('active');
    setTimeout(() => {
        document.getElementById('orderTrackingModal').classList.add('active');
    }, 300);
});

document.querySelector('#profileModal .modal-backdrop').addEventListener('click', () => {
    document.getElementById('profileModal').classList.remove('active');
});

// ============================================
// SEARCH & FILTERS MODAL
// ============================================

document.getElementById('searchBtn').addEventListener('click', () => {
    document.getElementById('searchModal').classList.add('active');
    setTimeout(() => {
        document.getElementById('searchInput').focus();
    }, 300);
});

document.getElementById('backFromSearch').addEventListener('click', () => {
    document.getElementById('searchModal').classList.remove('active');
});

document.querySelector('#searchModal .modal-backdrop').addEventListener('click', () => {
    document.getElementById('searchModal').classList.remove('active');
});

// Filter chips functionality
document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const group = chip.closest('.filter-group');
        group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        
        showToast('Filter applied');
    });
});

// Search input
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 2) {
        console.log('Searching for:', query);
        // In a real app, filter results here
    }
});

// ============================================
// INITIALIZATION
// ============================================

function init() {
    displayFood(currentFoodIndex);
    updateCartBadge();
    
    // Show welcome toast
    setTimeout(() => {
        showToast('👋 Welcome to FoodApp!');
    }, 500);
}

// Start the app
init();

// ============================================
// KEYBOARD SHORTCUTS (for desktop testing)
// ============================================

document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            navigateFood('prev');
            break;
        case 'ArrowRight':
            navigateFood('next');
            break;
        case 'f':
            toggleFavorite();
            break;
        case 'c':
            openCart();
            break;
        case 'Escape':
            // Close all modals
            document.querySelectorAll('.bottom-sheet, .modal').forEach(modal => {
                modal.classList.remove('active');
            });
            break;
    }
});
