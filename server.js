const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 8000;
const DIRECTORY = __dirname;

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain'
};

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return mimeTypes[ext] || 'application/octet-stream';
}

function serveFile(req, res, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Arquivo não encontrado');
            return;
        }

        const mimeType = getMimeType(filePath);
        res.writeHead(200, {
            'Content-Type': mimeType,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
        });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    let filePath = path.join(DIRECTORY, req.url === '/' ? 'index.html' : req.url);
    
    // Verificar se o arquivo existe
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Arquivo não encontrado');
            return;
        }
        
        serveFile(req, res, filePath);
    });
});

server.listen(PORT, () => {
    console.log('🚀 Servidor Node.js iniciado em http://localhost:' + PORT);
    console.log('📁 Servindo arquivos de: ' + DIRECTORY);
    console.log('📄 PDFs disponíveis:');
    
    // Listar PDFs disponíveis
    const pdfsDir = path.join(DIRECTORY, 'pdfs');
    if (fs.existsSync(pdfsDir)) {
        const files = fs.readdirSync(pdfsDir);
        files.forEach(file => {
            if (file.endsWith('.pdf')) {
                console.log('   - ' + file);
            }
        });
    }
    
    console.log('\n🌐 Abrindo navegador...');
    
    // Abrir navegador automaticamente
    const start = process.platform === 'darwin' ? 'open' : 
                  process.platform === 'win32' ? 'start' : 'xdg-open';
    exec(`${start} http://localhost:${PORT}`);
    
    console.log('\n⏹️  Pressione Ctrl+C para parar o servidor');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('❌ Porta ' + PORT + ' já está em uso. Tente fechar outros servidores.');
    } else {
        console.log('❌ Erro ao iniciar servidor: ' + err.message);
    }
});

process.on('SIGINT', () => {
    console.log('\n✅ Servidor parado');
    process.exit(0);
});
