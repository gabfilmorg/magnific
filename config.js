// Configuração para diferentes ambientes
const config = {
    // Detectar se estamos em localhost ou produção
    isLocalhost: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
    
    // Configurações de caminho
    getImageBasePath: function() {
        if (this.isLocalhost) {
            return ''; // Caminho relativo para localhost
        } else {
            // Para produção, tentar diferentes caminhos
            return window.location.pathname.includes('/') ? 
                window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/' : 
                '';
        }
    },
    
    // Função para gerar caminhos de imagem
    getImagePath: function(folder, imageName) {
        const basePath = this.getImageBasePath();
        const paths = [
            `${basePath}imagens/${folder}/${imageName}`,
            `${basePath}./imagens/${folder}/${imageName}`,
            `${basePath}/imagens/${folder}/${imageName}`,
            `${basePath}imagens/${folder}/${imageName}`.replace(/\s+/g, '%20'),
            `${basePath}./imagens/${folder}/${imageName}`.replace(/\s+/g, '%20'),
            `imagens/${folder}/${imageName}`,
            `./imagens/${folder}/${imageName}`,
            `/imagens/${folder}/${imageName}`
        ];
        
        // Remover duplicatas
        return [...new Set(paths)];
    },
    
    // Log de debug
    debug: function(message) {
        if (this.isLocalhost) {
            console.log(`🔧 [CONFIG] ${message}`);
        }
    }
};

// Log da configuração atual
config.debug(`Ambiente: ${config.isLocalhost ? 'Localhost' : 'Produção'}`);
config.debug(`Base Path: ${config.getImageBasePath()}`);
config.debug(`URL atual: ${window.location.href}`);
