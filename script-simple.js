// Sistema simples e direto para carregar imagens
const categories = {
    'mesa-posta': {
        folder: 'MESA POSTA', // Pasta na raiz do GitHub Pages
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png']
    }
};

let currentCategory = 'home';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎄 Magnific Decor iniciado!');
    setupNavigation();
    setupHomeCards();
});

// Configurar navegação
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            navigateToCategory(category);
        });
    });
}

// Configurar cards da home
function setupHomeCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            navigateToCategory(category);
        });
    });
}

// Navegar para categoria
function navigateToCategory(category) {
    console.log(`🎯 Navegando para: ${category}`);
    currentCategory = category;
    updateActiveNavigation(category);
    showSection(category);
    
    if (category !== 'home') {
        loadCategoryImages(category);
    }
}

// Atualizar navegação ativa
function updateActiveNavigation(activeCategory) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        const category = button.getAttribute('data-category');
        if (category === activeCategory) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Mostrar seção
function showSection(category) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const activeSection = document.getElementById(category);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// Carregar imagens da categoria
function loadCategoryImages(category) {
    const categoryData = categories[category];
    if (!categoryData) {
        console.log(`❌ Categoria não encontrada: ${category}`);
        return;
    }
    
    const gallery = document.getElementById(`${category}-gallery`);
    if (!gallery) {
        console.log(`❌ Gallery não encontrada: ${category}-gallery`);
        return;
    }
    
    gallery.innerHTML = '';
    
    if (categoryData.images.length === 0) {
        showEmptyState(gallery, category);
        return;
    }
    
    // Carregar imagens com caminho para GitHub Pages
    categoryData.images.forEach((imageName, index) => {
        const imagePath = `${categoryData.folder}/${imageName}`; // Caminho direto para GitHub Pages
        createImageItem(gallery, imagePath, index + 1);
    });
    
    console.log(`✅ ${categoryData.images.length} imagens carregadas para ${category}`);
}

// Criar item de imagem
function createImageItem(gallery, imagePath, number) {
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item';
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = `Imagem ${number}`;
    img.loading = 'lazy';
    
    // Tratar erro de carregamento
    img.onerror = function() {
        console.log(`❌ Erro ao carregar: ${imagePath}`);
        // Tentar com caminho absoluto
        this.src = `/${imagePath}`;
    };
    
    img.onload = function() {
        console.log(`✅ Imagem carregada: ${imagePath}`);
    };
    
    imageItem.appendChild(img);
    gallery.appendChild(imageItem);
}

// Mostrar estado vazio
function showEmptyState(gallery, category) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = `
        <i class="fas fa-image"></i>
        <h3>Em breve...</h3>
        <p>Novos produtos da categoria ${category} serão adicionados em breve!</p>
    `;
    gallery.appendChild(emptyState);
}
