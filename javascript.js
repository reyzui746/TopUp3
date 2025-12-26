// ============================
// DATA PRODUK ROBLOX
// ============================

// Data produk Robux
const robuxProducts = [
    {
        id: 1,
        name: '80 Robux',
        price: 16000,
        category: 'reguler',
        image: 'image/robux/robux.jpg',
        description: 'Paket standar untuk starter',
        type: 'robux',
        isPremium: false,
        badge: 'HOT'
    },
    {
        id: 2,
        name: '500 Robux',
        price: 80000,
        category: 'reguler',
        image: 'image/robux/robux.jpg',
        description: 'Pilihan terbaik untuk pemain aktif',
        type: 'robux',
        isPremium: false,
        badge: 'POPULER'
    },
    {
        id: 3,
        name: '1000 Robux',
        price: 160000,
        category: 'reguler',
        image: 'image/robux/robux.jpg',
        description: 'Paket besar untuk kolektor item',
        type: 'robux',
        isPremium: false,
        badge: 'BESAR'
    },
    {
        id: 4,
        name: '450 Robux Premium',
        price: 80000,
        category: 'premium',
        image: 'image/robux/robux.jpg',
        description: 'Bonus akses premium + 450 Robux',
        type: 'robux',
        isPremium: true,
        badge: 'PREMIUM'
    },
    {
        id: 5,
        name: '1000 Robux Premium',
        price: 160000,
        category: 'premium',
        image: 'image/robux/robux.jpg',
        description: 'Bonus besar + akses premium 1 bulan',
        type: 'robux',
        isPremium: true,
        badge: 'PREMIUM'
    },
    {
        id: 6,
        name: '2000 Robux Premium',
        price: 330000,
        category: 'premium',
        image: 'image/robux/robux.jpg',
        description: 'Paket premium terlengkap',
        type: 'robux',
        isPremium: true,
        badge: 'PREMIUM'
    }
];

// Data produk Item
const itemsData = [
    // Limited Items
    {
        id: 7,
        name: 'Frozen Krampus Scythe',
        price: 90000,
        category: 'limited',
        image: 'image/skin limited/skin1.png',
        description: 'Skin Rod Limited Edition - Item eksklusif dengan efek es',
        type: 'item',
        badge: 'LIMITED'
    },
    {
        id: 8,
        name: 'Frozen Krampus Scythe V2',
        price: 45000,
        category: 'limited',
        image: 'image/skin limited/skin2.png',
        description: 'Versi 2 dari skin rod limited dengan efek yang lebih keren',
        type: 'item',
        badge: 'POPULER'
    },
    
    // Creates Skin Items
    {
        id: 9,
        name: 'Ceates Skin Christmas',
        price: 25000,
        category: 'creates',
        image: 'image/creates rod/skin1.png',
        description: 'Skin dengan tema natal yang cantik dan unik',
        type: 'item',
        badge: 'NEW'
    },
    {
        id: 10,
        name: 'Ceates Skin Elderwood',
        price: 10000,
        category: 'creates',
        image: 'image/creates rod/skin2.png',
        description: 'Skin dengan tema hutan tua yang magis',
        type: 'item',
        badge: ''
    },
    {
        id: 11,
        name: 'Ceates Skin Enchanted',
        price: 10000,
        category: 'creates',
        image: 'image/creates rod/skin3.png',
        description: 'Skin dengan tema sihir dan pesona yang memukau',
        type: 'item',
        badge: ''
    },
    {
        id: 12,
        name: 'Ceates Skin Ocean',
        price: 10000,
        category: 'creates',
        image: 'image/creates rod/skin4.png',
        description: 'Skin dengan tema lautan yang dalam dan misterius',
        type: 'item',
        badge: ''
    },
    {
        id: 13,
        name: 'Ceates Skin Ocean V2',
        price: 9000,
        category: 'creates',
        image: 'image/creates rod/skin5.png',
        description: 'Versi 2 dari skin ocean dengan tampilan lebih baik',
        type: 'item',
        badge: 'DISKON'
    },
    
    // Gamepass Items
    {
        id: 14,
        name: 'Premium Gamepass 1',
        price: 45000,
        category: 'gamepass',
        image: 'image/gamepass/gamepass1.png',
        description: 'Gamepass premium dengan fitur eksklusif pertama',
        type: 'item',
        badge: 'GAMEPASS'
    },
    {
        id: 15,
        name: 'Premium Gamepass 2',
        price: 45000,
        category: 'gamepass',
        image: 'image/gamepass/gamepass2.png',
        description: 'Gamepass premium dengan fitur eksklusif kedua',
        type: 'item',
        badge: 'GAMEPASS'
    },
    {
        id: 16,
        name: 'Premium Gamepass 3',
        price: 45000,
        category: 'gamepass',
        image: 'image/gamepass/gamepass3.png',
        description: 'Gamepass premium dengan fitur eksklusif ketiga',
        type: 'item',
        badge: 'GAMEPASS'
    },
    {
        id: 17,
        name: 'Premium Gamepass 4',
        price: 45000,
        category: 'gamepass',
        image: 'image/gamepass/gamepass4.png',
        description: 'Gamepass premium dengan fitur eksklusif keempat',
        type: 'item',
        badge: 'GAMEPASS'
    },
    {
        id: 18,
        name: 'Premium Gamepass 5',
        price: 45000,
        category: 'gamepass',
        image: 'image/gamepass/gamepass5.png',
        description: 'Gamepass premium dengan fitur eksklusif kelima',
        type: 'item',
        badge: 'GAMEPASS'
    },
    {
        id: 19,
        name: 'Premium Gamepass 6',
        price: 45000,
        category: 'gamepass',
        image: 'image/gamepass/gamepass6.png',
        description: 'Gamepass premium dengan fitur eksklusif keenam',
        type: 'item',
        badge: 'GAMEPASS'
    },
    {
        id: 20,
        name: 'VIP Gamepass',
        price: 101000,
        category: 'gamepass',
        image: 'image/gamepass/gamepass7.png',
        description: 'Gamepass VIP dengan semua fitur premium',
        type: 'item',
        badge: 'VIP'
    },
    
    // Coin Items
    {
        id: 21,
        name: 'Basic Coin Pack 1',
        price: 45000,
        category: 'coin',
        image: 'image/buy coin/buycoin1.png',
        description: 'Paket koin dasar pertama untuk permainan',
        type: 'item',
        badge: 'COIN'
    },
    {
        id: 22,
        name: 'Basic Coin Pack 2',
        price: 45000,
        category: 'coin',
        image: 'image/buy coin/buycoin2.png',
        description: 'Paket koin dasar kedua untuk permainan',
        type: 'item',
        badge: 'COIN'
    },
    {
        id: 23,
        name: 'Standard Coin Pack 1',
        price: 45000,
        category: 'coin',
        image: 'image/buy coin/buycoin1.png',
        description: 'Paket koin standar pertama',
        type: 'item',
        badge: 'BEST VALUE'
    },
    {
        id: 24,
        name: 'Standard Coin Pack 2',
        price: 45000,
        category: 'coin',
        image: 'image/buy coin/buycoin2.png',
        description: 'Paket koin standar kedua',
        type: 'item',
        badge: 'BEST VALUE'
    },
    {
        id: 25,
        name: 'Pro Coin Pack',
        price: 100000,
        category: 'coin',
        image: 'image/buy coin/buycoin5.png',
        description: 'Paket koin profesional untuk pemain serius',
        type: 'item',
        badge: 'PRO'
    },
    {
        id: 26,
        name: 'Pro Coin Pack V2',
        price: 100000,
        category: 'coin',
        image: 'image/buy coin/buycoin6.png',
        description: 'Versi 2 dari paket koin profesional',
        type: 'item',
        badge: 'PRO'
    }
];

// ============================
// VARIABEL GLOBAL
// ============================
let cart = [];
let appliedCoupon = null;
let cartCount = 0;
let currentUser = null;

// Kupon yang tersedia
const coupons = {
    'ROBLOX20': { 
        discount: 0.2, 
        name: 'Diskon 20%',
        description: 'Diskon 20% untuk pembelian pertama'
    },
    'WELCOME10': { 
        discount: 0.1, 
        name: 'Diskon 10% Welcome',
        description: 'Diskon 10% untuk member baru'
    },
    'GAMING5': { 
        discount: 0.05, 
        name: 'Diskon 5% Gaming',
        description: 'Diskon 5% untuk semua pembelian game'
    }
};

// ============================
// FUNGSI UTILITAS
// ============================

/**
 * Format harga ke format Rupiah
 */
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

/**
 * Menampilkan notifikasi
 */
function showNotification(message, type = 'success', duration = 3000) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');
    
    if (!notification || !notificationMessage) {
        console.log('Notification element not found');
        return;
    }
    
    notificationMessage.textContent = message;
    
    // Set warna berdasarkan type
    switch(type) {
        case 'error':
            notification.style.background = '#e74c3c';
            break;
        case 'warning':
            notification.style.background = '#f39c12';
            break;
        case 'info':
            notification.style.background = '#3498db';
            break;
        case 'success':
        default:
            notification.style.background = '#2ecc71';
            break;
    }
    
    notification.style.display = 'flex';
    
    // Sembunyikan setelah durasi tertentu
    setTimeout(() => {
        notification.style.display = 'none';
    }, duration);
}

/**
 * Menyimpan data ke localStorage
 */
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

/**
 * Memuat data dari localStorage
 */
function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return null;
    }
}

/**
 * Mendapatkan kategori dari nama produk
 */
function getCategoryFromName(name) {
    if (name.includes('Robux')) return 'robux';
    if (name.includes('Gamepass')) return 'gamepass';
    if (name.includes('Coin')) return 'coin';
    if (name.includes('Skin')) return 'skin';
    return 'other';
}

// ============================
// FUNGSI MANAJEMEN KERANJANG
// ============================

/**
 * Menambahkan item ke keranjang
 */
function addToCart(name, price, category, image, productId = null) {
    // Alihkan fungsi 'Beli' ke WhatsApp seller
    try {
        const phone = '6285961521565';
        const message = encodeURIComponent(`Halo, saya ingin membeli "${name}" seharga ${formatPrice(price)}. Mohon info selanjutnya.`);
        const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
        window.open(waUrl, '_blank');
        showNotification(`${name} — Mengarahkan ke WhatsApp...`, 'info', 2500);
    } catch (err) {
        console.error('Gagal membuka WhatsApp:', err);
        showNotification('Gagal mengarahkan ke WhatsApp. Silakan coba lagi.', 'error');
    }
    return true;
}

/**
 * Menghapus item dari keranjang
 */
function removeFromCart(itemId) {
    const initialLength = cart.length;
    cart = cart.filter(item => item.id !== itemId);
    
    if (cart.length < initialLength) {
        updateCartCount();
        updateCartDisplay();
        showNotification('Item telah dihapus dari keranjang!');
        return true;
    }
    return false;
}

/**
 * Memperbarui jumlah item di keranjang
 */
function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    
    if (!item) return false;
    
    item.quantity += change;
    
    // Jika quantity kurang dari 1, hapus item
    if (item.quantity < 1) {
        removeFromCart(itemId);
        return true;
    }
    
    updateCartCount();
    updateCartDisplay();
    return true;
}

/**
 * Memperbarui jumlah item di header
 */
function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    
    // Simpan keranjang ke localStorage
    saveToLocalStorage('robloxCart', cart);
    
    // Update summary jika di halaman keranjang
    if (document.getElementById('keranjang').classList.contains('active')) {
        updateCartSummary();
    }
}

/**
 * Mengosongkan keranjang
 */
function clearCart() {
    cart = [];
    updateCartCount();
    updateCartDisplay();
    appliedCoupon = null;
    showNotification('Keranjang telah dikosongkan!');
}

// ============================
// FUNGSI TAMPILAN KERANJANG
// ============================

/**
 * Memperbarui tampilan keranjang
 */
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartElement = document.getElementById('emptyCart');
    const cartSummaryElement = document.getElementById('cartSummary');
    const cartTotalItemsElement = document.getElementById('cartTotalItems');
    
    if (!cartItemsContainer || !emptyCartElement) return;
    
    // Update jumlah item
    if (cartTotalItemsElement) {
        cartTotalItemsElement.textContent = `${cartCount} Item${cartCount !== 1 ? 's' : ''}`;
    }
    
    // Jika keranjang kosong
    if (cart.length === 0) {
        emptyCartElement.style.display = 'block';
        if (cartSummaryElement) {
            cartSummaryElement.style.display = 'none';
        }
        
        // Kosongkan kontainer item
        cartItemsContainer.innerHTML = '';
        return;
    }
    
    // Sembunyikan pesan keranjang kosong
    emptyCartElement.style.display = 'none';
    if (cartSummaryElement) {
        cartSummaryElement.style.display = 'block';
    }
    
    // Kosongkan kontainer item
    cartItemsContainer.innerHTML = '';
    
    // Tambahkan setiap item ke keranjang
    cart.forEach(item => {
        const cartItem = createCartItemElement(item);
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Update ringkasan
    updateCartSummary();
    
    // Tampilkan rekomendasi
    showCartRecommendations();
}

/**
 * Membuat elemen item keranjang
 */
function createCartItemElement(item) {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.setAttribute('data-item-id', item.id);
    
    const itemTotal = item.price * item.quantity;
    
    itemElement.innerHTML = `
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/80x80/1a1a2e/ffffff?text=Item'">
        </div>
        <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-category">${item.category}</div>
            <div class="cart-item-price">${formatPrice(item.price)}</div>
        </div>
        <div class="cart-item-quantity">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                <i class="fas fa-minus"></i>
            </button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                <i class="fas fa-plus"></i>
            </button>
        </div>
        <div class="cart-item-total">
            ${formatPrice(itemTotal)}
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Hapus item">
            <i class="fas fa-trash"></i>
        </button>
    `;
    
    return itemElement;
}

/**
 * Memperbarui ringkasan keranjang
 */
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
    const total = subtotal - discount;
    
    // Update elemen ringkasan
    const subtotalElement = document.getElementById('summarySubtotal');
    const discountElement = document.getElementById('summaryDiscount');
    const totalElement = document.getElementById('summaryTotal');
    const totalItemsElement = document.getElementById('summaryTotalItems');
    const appliedCouponElement = document.getElementById('appliedCoupon');
    const couponMessageElement = document.getElementById('couponMessage');
    
    if (subtotalElement) subtotalElement.textContent = formatPrice(subtotal);
    if (totalElement) totalElement.textContent = formatPrice(total);
    if (totalItemsElement) totalItemsElement.textContent = cartCount;
    
    if (discountElement) {
        if (discount > 0) {
            discountElement.textContent = `- ${formatPrice(discount)}`;
            discountElement.style.display = 'block';
        } else {
            discountElement.style.display = 'none';
        }
    }
    
    // Update tampilan kupon yang diterapkan
    if (appliedCouponElement && couponMessageElement) {
        if (appliedCoupon) {
            appliedCouponElement.style.display = 'flex';
            couponMessageElement.textContent = `Kupon "${appliedCoupon.name}" diterapkan (${appliedCoupon.discount * 100}%)`;
        } else {
            appliedCouponElement.style.display = 'none';
        }
    }
}

/**
 * Menerapkan kupon diskon
 */
function applyCoupon() {
    const couponInput = document.getElementById('couponCode');
    if (!couponInput) return;
    
    const couponCode = couponInput.value.trim().toUpperCase();
    
    if (!couponCode) {
        showNotification('Masukkan kode kupon!', 'warning');
        return;
    }
    
    if (coupons[couponCode]) {
        appliedCoupon = coupons[couponCode];
        showNotification(`Kupon "${appliedCoupon.name}" berhasil diterapkan!`);
        updateCartDisplay();
    } else {
        appliedCoupon = null;
        showNotification('Kupon tidak valid atau sudah kadaluarsa!', 'error');
    }
}

/**
 * Menghapus kupon yang diterapkan
 */
function removeCoupon() {
    appliedCoupon = null;
    showNotification('Kupon telah dihapus!');
    updateCartDisplay();
}

/**
 * Menampilkan rekomendasi produk di halaman keranjang
 */
function showCartRecommendations() {
    const recommendationsElement = document.getElementById('cartRecommendations');
    const recommendationGrid = document.querySelector('.recommendation-grid');
    
    if (!recommendationsElement || !recommendationGrid) return;
    
    // Jika keranjang kosong, sembunyikan rekomendasi
    if (cart.length === 0) {
        recommendationsElement.style.display = 'none';
        return;
    }
    
    // Tampilkan rekomendasi
    recommendationsElement.style.display = 'block';
    
    // Kosongkan grid rekomendasi
    recommendationGrid.innerHTML = '';
    
    // Ambil kategori dari item di keranjang
    const cartCategories = [...new Set(cart.map(item => item.category))];
    
    // Filter produk berdasarkan kategori yang ada di keranjang
    const allProducts = [...robuxProducts, ...itemsData];
    const recommendations = allProducts
        .filter(product => 
            cartCategories.includes(product.category) && 
            !cart.some(item => item.name === product.name)
        )
        .slice(0, 4); // Ambil maksimal 4 rekomendasi
    
    if (recommendations.length === 0) {
        recommendationGrid.innerHTML = `
            <div class="no-recommendations">
                <i class="fas fa-info-circle"></i>
                <p>Tidak ada rekomendasi untuk saat ini</p>
            </div>
        `;
        return;
    }
    
    // Tambahkan setiap rekomendasi ke grid
    recommendations.forEach(product => {
        const recommendationItem = document.createElement('div');
        recommendationItem.className = 'recommendation-item';
        
        recommendationItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/200x120/1a1a2e/ffffff?text=Produk'">
            <h4>${product.name}</h4>
            <div class="recommendation-price">${formatPrice(product.price)}</div>
            <button class="btn-add-recommendation" onclick="addToCart('${product.name}', ${product.price}, '${product.category}', '${product.image}', ${product.id})">
                <i class="fas fa-cart-plus"></i> Tambah
            </button>
        `;
        
        recommendationGrid.appendChild(recommendationItem);
    });
}

// ============================
// FUNGSI MANAJEMEN HALAMAN
// ============================

/**
 * Menampilkan halaman tertentu
 */
function showPage(pageId) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan halaman yang dipilih
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Tutup menu mobile jika terbuka
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }

    // Update cart count di header
    updateCartCount();

    // Jika halaman keranjang ditampilkan, update isi keranjang
    if (pageId === 'keranjang') {
        updateCartDisplay();
    }

    // Scroll ke atas halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Filter produk Robux berdasarkan kategori
 */
function filterRobux(category) {
    // Update active tab
    const tabs = document.querySelectorAll('#robux .category-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Dapatkan semua product card di halaman robux
    const products = document.querySelectorAll('#robux .product-card');
    
    products.forEach(product => {
        const isPremium = product.classList.contains('premium');
        
        switch(category) {
            case 'semua':
                product.style.display = 'block';
                break;
            case 'reguler':
                product.style.display = isPremium ? 'none' : 'block';
                break;
            case 'premium':
                product.style.display = isPremium ? 'block' : 'none';
                break;
            default:
                product.style.display = 'block';
        }
    });
}

/**
 * Filter produk Item berdasarkan kategori
 */
function filterItems(category) {
    // Update active tab
    const tabs = document.querySelectorAll('#item .category-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Get all item sections
    const sections = document.querySelectorAll('.item-section');
    
    if (category === 'semua') {
        // Show all sections
        sections.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        // Hide all sections first
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show only sections with matching category
        const targetSections = document.querySelectorAll(`[data-category="${category}"]`);
        targetSections.forEach(section => {
            section.style.display = 'block';
        });
    }
}

// ============================
// FUNGSI MODAL
// ============================

/**
 * Menampilkan modal detail item
 */
function viewItemDetail(name, description, price, image, productId = null) {
    const modalBody = document.getElementById('modalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <button class="btn-back" onclick="closeModal()">
            <i class="fas fa-arrow-left"></i> Kembali
        </button>
        <img src="${image}" alt="${name}" class="modal-image"
             onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300/1a1a2e/ffffff?text=Gambar+Tidak+Tersedia'">
        <h3 class="modal-title">${name}</h3>
        <div class="modal-price">${formatPrice(price)}</div>
        <p class="modal-description">${description}</p>
    `;

    document.getElementById('itemModal').style.display = 'flex';
}

/**
 * Menutup modal
 */
function closeModal() {
    document.getElementById('itemModal').style.display = 'none';
}

/**
 * Menampilkan modal checkout
 */
function showCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Keranjang belanja kosong!', 'error');
        return;
    }
    
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutBody = document.querySelector('.checkout-body');
    
    if (!checkoutModal || !checkoutBody) return;
    
    // Hitung total
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
    const total = subtotal - discount;
    
    // Tampilkan ringkasan pesanan terlebih dahulu
    checkoutBody.innerHTML = `
        <div class="order-summary-view">
            <h3><i class="fas fa-receipt"></i> Ringkasan Pesanan</h3>
            <div class="order-items" id="orderItems"></div>
            <div class="order-totals">
                <div class="total-row">
                    <span>Subtotal</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                ${appliedCoupon ? `
                <div class="total-row discount">
                    <span>Diskon (${appliedCoupon.name})</span>
                    <span>- ${formatPrice(discount)}</span>
                </div>
                ` : ''}
                <div class="total-row total-price">
                    <span>Total Pembayaran</span>
                    <span>${formatPrice(total)}</span>
                </div>
            </div>
            <button class="btn-pay-large" onclick="showPaymentForm()">
                <i class="fas fa-credit-card"></i> Lanjut ke Pembayaran
            </button>
        </div>
    `;
    
    // Isi order items
    const orderItemsContainer = document.getElementById('orderItems');
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const itemRow = document.createElement('div');
        itemRow.className = 'order-item-row';
        itemRow.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-qty">${item.quantity}x</span>
            <span class="item-price">${formatPrice(itemTotal)}</span>
        `;
        orderItemsContainer.appendChild(itemRow);
    });
    
    // Tampilkan modal
    checkoutModal.style.display = 'flex';
}

/**
 * Tampilkan form pembayaran
 */
function showPaymentForm() {
    const checkoutBody = document.querySelector('.checkout-body');
    
    if (!checkoutBody) return;
    
    // Hitung total untuk ditampilkan di summary
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
    const total = subtotal - discount;
    
    checkoutBody.innerHTML = `
        <form id="checkoutForm" onsubmit="processPayment(event)">
            <!-- Data Akun Roblox -->
            <div class="form-section">
                <h4><i class="fas fa-user-circle"></i> Data Akun Roblox</h4>
                
                <div class="form-group">
                    <label for="username">Username Roblox <span class="required">*</span></label>
                    <input type="text" id="username" placeholder="Masukkan username Roblox Anda" 
                           onchange="onUsernameChange()" oninput="onUsernameChange()" required>
                    <small class="form-help"><i class="fas fa-info-circle"></i> Contoh: PlayerName123</small>
                </div>
            </div>

            <!-- Data Pembeli -->
            <div class="form-section">
                <h4><i class="fas fa-user-tag"></i> Data Pembeli</h4>
                <!-- Email field removed -->
                
                <div class="form-group">
                    <label for="phone">Nomor Telepon <span class="required">*</span></label>
                    <input type="tel" id="phone" placeholder="Contoh: 08123456789" 
                           pattern="^[0-9]{10,13}$" required>
                    <small class="form-help"><i class="fas fa-phone"></i> Nomor WhatsApp aktif untuk konfirmasi</small>
                </div>
            </div>

            <!-- Metode Pembayaran -->
            <div class="form-section">
                <h4><i class="fas fa-wallet"></i> Metode Pembayaran</h4>
                
                <div class="form-group">
                    <label for="payment">Pilih Metode <span class="required">*</span></label>
                    <select id="payment" onchange="showPaymentInstructions()" required>
                        <option value="">-- Pilih Metode Pembayaran --</option>
                        <option value="dana">💳 DANA</option>
                        <option value="gopay">💚 GoPay</option>
                        <option value="ovo">🔵 OVO</option>
                        <option value="bank_transfer">🏦 Transfer Bank</option>
                    </select>
                </div>
            </div>

            <!-- Ringkasan Pesanan -->
            <div class="form-section">
                <h4><i class="fas fa-receipt"></i> Ringkasan Pesanan</h4>
                <div class="order-summary" id="orderSummary">
                    <!-- Ringkasan pesanan akan diisi oleh JavaScript -->
                </div>
            </div>

            <!-- Checkbox Persetujuan -->
            <div class="form-group checkbox-group">
                <input type="checkbox" id="agreeTerms" required>
                <label for="agreeTerms" class="checkbox-label">
                    Saya setuju dengan <a href="#" onclick="return false;">Syarat & Ketentuan</a> dan <a href="#" onclick="return false;">Kebijakan Privasi</a>
                </label>
            </div>

            <!-- Tombol Pembayaran -->
            <div class="form-actions">
                <button type="button" class="btn-back" onclick="showCheckoutModal()">
                    <i class="fas fa-arrow-left"></i> Kembali
                </button>
                <button type="submit" class="btn-pay btn-pay-large">
                    <i class="fas fa-check-circle"></i> Bayar Sekarang
                </button>
            </div>
            
            <div class="payment-security">
                <p><i class="fas fa-lock"></i> Pembayaran 100% Aman & Terenkripsi</p>
            </div>
        </form>
    `;
    
    // Update order summary di form
    const orderSummary = document.getElementById('orderSummary');
    if (orderSummary) {
        orderSummary.innerHTML = '';
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            const row = document.createElement('div');
            row.className = 'summary-row';
            row.innerHTML = `
                <span>${item.name} (${item.quantity}x)</span>
                <span>${formatPrice(itemTotal)}</span>
            `;
            orderSummary.appendChild(row);
        });
        
        const subtotalRow = document.createElement('div');
        subtotalRow.className = 'summary-row';
        subtotalRow.innerHTML = `<span>Subtotal</span><span>${formatPrice(subtotal)}</span>`;
        orderSummary.appendChild(subtotalRow);
        
        if (appliedCoupon) {
            const discountRow = document.createElement('div');
            discountRow.className = 'summary-row';
            discountRow.innerHTML = `<span>Diskon (${appliedCoupon.name})</span><span>- ${formatPrice(discount)}</span>`;
            orderSummary.appendChild(discountRow);
        }
        
        const totalRow = document.createElement('div');
        totalRow.className = 'summary-row total';
        totalRow.innerHTML = `<span>Total</span><span>${formatPrice(total)}</span>`;
        orderSummary.appendChild(totalRow);
    }
}

/**
 * Proses pembayaran (update)
 */
function processPayment(event) {
    if (event) {
        event.preventDefault();
    }
    
    const checkoutForm = document.getElementById('checkoutForm');
    if (!checkoutForm) return;
    
    // Validasi form
    const username = document.getElementById('username').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const paymentMethod = document.getElementById('payment').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    if (!username) {
        showNotification('Masukkan username Roblox!', 'error');
        return;
    }
    
    if (!phone) {
        showNotification('Masukkan nomor telepon!', 'error');
        return;
    }
    
    if (!paymentMethod) {
        showNotification('Pilih metode pembayaran!', 'error');
        return;
    }
    
    if (!agreeTerms) {
        showNotification('Anda harus setuju dengan Syarat & Ketentuan!', 'error');
        return;
    }
    
    // Validasi nomor telepon
    const phoneRegex = /^[0-9]{10,13}$/;
    if (!phoneRegex.test(phone)) {
        showNotification('Nomor telepon tidak valid! Gunakan format: 08123456789', 'error');
        return;
    }
    
    // Simpan data user
    currentUser = { username, phone, paymentMethod };
    
    // Hitung total
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
    const total = subtotal - discount;
    
    // Simulasi proses pembayaran
    showNotification('Memproses pembayaran...', 'info');
    
    // Tampilkan pesan sukses setelah delay
    setTimeout(() => {
        // Simpan transaksi ke localStorage
        const transaction = {
            id: Date.now(),
            user: currentUser,
            items: [...cart],
            subtotal,
            discount,
            total,
            coupon: appliedCoupon,
            date: new Date().toISOString(),
            status: 'pending'
        };
        
        // Simpan transaksi
        let transactions = loadFromLocalStorage('robloxTransactions') || [];
        transactions.push(transaction);
        saveToLocalStorage('robloxTransactions', transactions);
        
        // **KIRIM NOTIFIKASI EMAIL KE ADMIN**
        const emailMessage = `
Pelanggan baru melakukan transaksi:

Username Roblox: ${currentUser.username}
<!-- Email removed from notification -->
Nomor Telepon: ${currentUser.phone}
Metode Pembayaran: ${currentUser.paymentMethod}
Total Pembelian: Rp ${total.toLocaleString('id-ID')}
ID Transaksi: ${transaction.id}

Item yang dibeli:
${cart.map(item => `- ${item.name} (${item.quantity}x) = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`).join('\n')}

Waktu: ${new Date().toLocaleString('id-ID')}
        `;
        
        sendEmailNotification('Notifikasi Transaksi Pelanggan Baru', emailMessage, currentUser);
        
        // Reset keranjang
        clearCart();
        
        // Tutup modal
        closeCheckoutModal();
        
        // Tampilkan notifikasi sukses
        showNotification(`Pembayaran berhasil! Total: ${formatPrice(total)}. Cek email untuk instruksi lebih lanjut.`, 'success', 5000);
        
        // Kembali ke halaman beranda
        setTimeout(() => showPage('beranda'), 1000);
        
    }, 2000);
}

// ============================
// FUNGSI PENCARIAN
// ============================





// ============================
// INISIALISASI & EVENT LISTENERS
// ============================

/**
 * Force desktop view on mobile devices adjusted to screen resolution
 */
function forceDesktopOnMobile() {
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const screenWidth = window.innerWidth;
        const scale = screenWidth / 1200;
        viewport.setAttribute('content', `width=1200, initial-scale=${scale}, user-scalable=no`);
    }
}

/**
 * Inisialisasi aplikasi
 */
function initApp() {
    console.log('Initializing Roblox Store...');

    // Force desktop view on mobile
    forceDesktopOnMobile();

    // Load cart dari localStorage
    const savedCart = loadFromLocalStorage('robloxCart');
    if (savedCart && Array.isArray(savedCart)) {
        cart = savedCart;
    }

    // Update cart count
    updateCartCount();

    // Setup event listeners
    setupEventListeners();

    // Setup default page
    showPage('beranda');

    // Cek dan tampilkan promo aktif
    checkActivePromo();

    console.log('App initialized successfully');
}

/**
 * Toggle menu mobile
 */
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

/**
 * Cek dan tampilkan promo aktif
 */
function checkActivePromo() {
    // Fungsi untuk mengecek promo yang sedang aktif
    // Dapat dikembangkan sesuai kebutuhan
    console.log('Checking active promotions...');
}


/**
 * Setup semua event listeners
 */
function setupEventListeners() {
    // Menu toggle untuk mobile
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

}

// Toggle Password Visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.btn-toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

/**
 * Shortcut function untuk tombol checkout pada ringkasan keranjang
 */
function checkout() {
    showCheckoutModal();
}

/**
 * Menutup modal checkout
 */
function closeCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) checkoutModal.style.display = 'none';
}

/**
 * Placeholder untuk mengirim notifikasi email ke admin.
 * Menyimpan pesan ke localStorage ('robloxEmailOutbox') dan mencatat ke console.
 */
function sendEmailNotification(subject, body, user) {
    try {
        const outbox = loadFromLocalStorage('robloxEmailOutbox') || [];
        const message = {
            id: Date.now(),
            subject,
            body,
            user,
            date: new Date().toISOString()
        };
        outbox.push(message);
        saveToLocalStorage('robloxEmailOutbox', outbox);
        console.log('Email notification saved to outbox:', message);
        showNotification('Notifikasi email dikirim ke admin (simulasi).', 'info', 3000);
        return true;
    } catch (err) {
        console.error('Gagal menyimpan notifikasi email:', err);
        return false;
    }
}

/**
 * Auto-fill email berdasarkan username (sederhana, hanya simulasi)
 */
function onUsernameChange() {
    const usernameInput = document.getElementById('username');
    if (!usernameInput) return;
    // Email autofill removed
}

/**
 * Menampilkan modal cara pembelian
 */
function showHowToBuyModal() {
    const modal = document.getElementById('howToBuyModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

/**
 * Menutup modal cara pembelian
 */
function closeHowToBuyModal() {
    const modal = document.getElementById('howToBuyModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

/**
 * Menampilkan instruksi singkat untuk metode pembayaran yang dipilih (simulasi)
 */
function showPaymentInstructions() {
    const paymentSelect = document.getElementById('payment');
    if (!paymentSelect) return;
    const method = paymentSelect.value;
    if (!method) return;
    let msg = '';
    switch (method) {
        case 'dana': msg = 'Instruksi: Buka aplikasi DANA, pilih "Kirim", dan transfer ke nomor merchant.'; break;
        case 'gopay': msg = 'Instruksi: Buka GoPay, pilih Bayar, scan kode atau transfer ke merchant.'; break;
        case 'ovo': msg = 'Instruksi: Buka OVO, pilih Bayar, dan ikuti langkah untuk transfer.'; break;
        case 'bank_transfer': msg = 'Instruksi: Transfer melalui ATM/Internet Banking ke rekening merchant.'; break;
        default: msg = '';
    }
    if (msg) showNotification(msg, 'info', 5000);
}
