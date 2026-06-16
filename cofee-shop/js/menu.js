const menuData = [
    { id: 1, name: "Эспрессо", price: 150, category: "coffee", description: "Классический чёрный кофе", image: "https://via.placeholder.com/300x200?text=Эспрессо" },
    { id: 2, name: "Американо", price: 180, category: "coffee", description: "Эспрессо с добавлением воды", image: "https://via.placeholder.com/300x200?text=Американо" },
    { id: 3, name: "Капучино", price: 220, category: "coffee", description: "Эспрессо с нежной молочной пеной", image: "https://via.placeholder.com/300x200?text=Капучино" },
    { id: 4, name: "Латте", price: 240, category: "coffee", description: "Кофе с большим количеством молока", image: "https://via.placeholder.com/300x200?text=Латте" },
    { id: 5, name: "Раф", price: 260, category: "coffee", description: "Кофе со сливками и ванилью", image: "https://via.placeholder.com/300x200?text=Раф" },
    { id: 6, name: "Чёрный чай", price: 120, category: "tea", description: "Цейлонский чёрный чай", image: "https://via.placeholder.com/300x200?text=Чёрный+чай" },
    { id: 7, name: "Зелёный чай", price: 120, category: "tea", description: "Японский сенча", image: "https://via.placeholder.com/300x200?text=Зелёный+чай" },
    { id: 8, name: "Чизкейк", price: 320, category: "dessert", description: "Нежный чизкейк с ванилью", image: "https://via.placeholder.com/300x200?text=Чизкейк" },
    { id: 9, name: "Брауни", price: 250, category: "dessert", description: "Шоколадное пирожное", image: "https://via.placeholder.com/300x200?text=Брауни" },
    { id: 10, name: "Круассан", price: 180, category: "sandwich", description: "Сливочный круассан", image: "https://via.placeholder.com/300x200?text=Круассан" },
    { id: 11, name: "Сэндвич с курицей", price: 350, category: "sandwich", description: "Цельнозерновой хлеб, курица, овощи", image: "https://via.placeholder.com/300x200?text=Сэндвич" }
];

let currentCategory = "all";
function renderMenu(category) {
    const container = document.getElementById('menu-container');
    if (!container) return;
    const filtered = category === "all" ? menuData : menuData.filter(item => item.category === category);
    container.innerHTML = filtered.map(item => `<div class="menu-item"><img src="${item.image}" alt="${item.name}"><h3>${item.name}</h3><div class="price">${item.price} ₽</div><div class="description">${item.description}</div><button class="btn btn-primary add-to-cart" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">В корзину</button></div>`).join('');
    document.querySelectorAll('.add-to-cart').forEach(btn => { btn.addEventListener('click', () => { addToCart({ id: parseInt(btn.dataset.id), name: btn.dataset.name, price: parseInt(btn.dataset.price) }); }); });
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => { btn.addEventListener('click', () => { filterBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentCategory = btn.dataset.category; renderMenu(currentCategory); }); });
}

function renderHits() {
    const hitsContainer = document.getElementById('hits-container');
    if (hitsContainer) {
        const hits = menuData.slice(0, 4);
        hitsContainer.innerHTML = hits.map(item => `<div class="menu-item"><img src="${item.image}" alt="${item.name}"><h3>${item.name}</h3><div class="price">${item.price} ₽</div><button class="btn btn-primary add-to-cart" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">В корзину</button></div>`).join('');
        document.querySelectorAll('.add-to-cart').forEach(btn => { btn.addEventListener('click', () => { addToCart({ id: parseInt(btn.dataset.id), name: btn.dataset.name, price: parseInt(btn.dataset.price) }); }); });
    }
}

if (document.getElementById('menu-container')) { renderMenu('all'); initFilters(); }
if (document.getElementById('hits-container')) { renderHits(); }