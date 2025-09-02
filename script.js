// Configuração das categorias e suas imagens
const categories = {
    'velas': {
        folder: 'VELAS',
        images: []
    },
    'iluminacao': {
        folder: 'ILUMINAÇÃO',
        images: []
    },
    'soldados': {
        folder: 'SOLDADOS',
        images: []
    },
    'lamparinas': {
        folder: 'LAMPARINAS',
        images: []
    },
    'mesa-posta': {
        folder: 'MESA POSTA',
        images: [
            '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png',
            '9.png', '10.png', '11.png', '12.png', '13.png', '14.png'
        ]
    },
    'caixas': {
        folder: 'CAIXAS',
        images: []
    },
    'arvores': {
        folder: 'ARVORES',
        images: []
    },
    'capas': {
        folder: 'CAPAS',
        images: []
    },
    'bolas': {
        folder: 'BOLAS',
        images: []
    },
    'fitas': {
        folder: 'FITAS',
        images: []
    },
    'acabamentos': {
        folder: 'ACABAMENTOS',
        images: []
    },
    'ursos': {
        folder: 'URSOS',
        images: []
    },
    'papai-noel': {
        folder: 'PAPAI NOEL',
        images: []
    },
    'decoracao': {
        folder: 'DECORAÇÃO',
        images: []
    }
};

// Estado da aplicação
let currentCategory = 'home';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎄 Magnific Decor - Navidad Magnifica iniciado!');
    
    // Configurar navegação
    setupNavigation();
    
    // Configurar cards da home
    setupHomeCards();
    
    // Carregar imagens da categoria mesa-posta (que já tem imagens)
    loadCategoryImages('mesa-posta');
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
    
    // Atualizar estado
    currentCategory = category;
    
    // Atualizar navegação ativa
    updateActiveNavigation(category);
    
    // Mostrar seção correspondente
    showSection(category);
    
    // Carregar imagens se não for home
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
    // Esconder todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar seção ativa
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
    
    // Limpar gallery
    gallery.innerHTML = '';
    
    // Se não há imagens, mostrar estado vazio
    if (categoryData.images.length === 0) {
        showEmptyState(gallery, category);
        return;
    }
    
    // Carregar imagens com diferentes caminhos possíveis
    categoryData.images.forEach((imageName, index) => {
        const possiblePaths = config.getImagePath(categoryData.folder, imageName);
        config.debug(`Caminhos para ${imageName}: ${possiblePaths.join(', ')}`);
        
        createImageItemWithFallback(gallery, possiblePaths, imageName, index + 1);
    });
    
    console.log(`✅ ${categoryData.images.length} imagens carregadas para ${category}`);
}

// Criar item de imagem com fallback
function createImageItemWithFallback(gallery, possiblePaths, imageName, number) {
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item';
    
    const img = document.createElement('img');
    img.alt = `Imagem ${number}`;
    img.loading = 'lazy';
    
    let currentPathIndex = 0;
    
    function tryNextPath() {
        if (currentPathIndex < possiblePaths.length) {
            const currentPath = possiblePaths[currentPathIndex];
            console.log(`🔄 Tentando carregar: ${currentPath}`);
            img.src = currentPath;
            currentPathIndex++;
        } else {
            console.log(`❌ Todas as tentativas falharam para: ${imageName}`);
            img.style.display = 'none';
            // Adicionar mensagem de erro
            const errorDiv = document.createElement('div');
            errorDiv.style.padding = '20px';
            errorDiv.style.textAlign = 'center';
            errorDiv.style.color = '#751102';
            errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i><br>Erro ao carregar imagem ${number}`;
            imageItem.appendChild(errorDiv);
        }
    }
    
    // Tratar erro de carregamento
    img.onerror = function() {
        console.log(`❌ Erro ao carregar: ${img.src}`);
        tryNextPath();
    };
    
    // Tratar sucesso no carregamento
    img.onload = function() {
        console.log(`✅ Imagem carregada com sucesso: ${img.src}`);
    };
    
    // Apenas a imagem, sem informações extras
    imageItem.appendChild(img);
    
    // Tentar o primeiro caminho
    tryNextPath();
    
    gallery.appendChild(imageItem);
}

// Função original mantida para compatibilidade
function createImageItem(gallery, imagePath, imageName, number) {
    createImageItemWithFallback(gallery, [imagePath], imageName, number);
}

// Mostrar estado vazio
function showEmptyState(gallery, category) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-image';
    
    const title = document.createElement('h3');
    title.textContent = 'Em breve...';
    
    const description = document.createElement('p');
    description.textContent = `Novos produtos da categoria ${category} serão adicionados em breve!`;
    
    emptyState.appendChild(icon);
    emptyState.appendChild(title);
    emptyState.appendChild(description);
    
    gallery.appendChild(emptyState);
}

// Função para adicionar imagens dinamicamente (para uso futuro)
function addImageToCategory(category, imageName) {
    if (categories[category]) {
        categories[category].images.push(imageName);
        console.log(`✅ Imagem ${imageName} adicionada à categoria ${category}`);
        
        // Recarregar se a categoria estiver ativa
        if (currentCategory === category) {
            loadCategoryImages(category);
        }
    }
}

// Função para remover imagem (para uso futuro)
function removeImageFromCategory(category, imageName) {
    if (categories[category]) {
        const index = categories[category].images.indexOf(imageName);
        if (index > -1) {
            categories[category].images.splice(index, 1);
            console.log(`✅ Imagem ${imageName} removida da categoria ${category}`);
            
            // Recarregar se a categoria estiver ativa
            if (currentCategory === category) {
                loadCategoryImages(category);
            }
        }
    }
}

// Função para listar todas as imagens de uma categoria
function getCategoryImages(category) {
    return categories[category] ? categories[category].images : [];
}

// Função para obter estatísticas
function getStats() {
    const stats = {
        totalCategories: Object.keys(categories).length,
        categoriesWithImages: 0,
        totalImages: 0
    };
    
    Object.values(categories).forEach(category => {
        if (category.images.length > 0) {
            stats.categoriesWithImages++;
            stats.totalImages += category.images.length;
        }
    });
    
    return stats;
}

// Log das estatísticas no console
console.log('📊 Estatísticas:', getStats());