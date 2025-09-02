#!/usr/bin/env python3
"""
Servidor local simples para servir os arquivos do Magnific Decor
Resolve o problema de carregamento de PDFs no navegador
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Configurações
PORT = 8000
DIRECTORY = Path(__file__).parent

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # Adicionar headers para permitir carregamento de PDFs
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()
    
    def guess_type(self, path):
        # Forçar tipo MIME correto para PDFs
        if path.endswith('.pdf'):
            return 'application/pdf'
        return super().guess_type(path)

def start_server():
    """Inicia o servidor local"""
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print(f"🚀 Servidor iniciado em http://localhost:{PORT}")
            print(f"📁 Servindo arquivos de: {DIRECTORY}")
            print(f"📄 PDFs disponíveis:")
            
            # Listar PDFs disponíveis
            pdfs_dir = DIRECTORY / "pdfs"
            if pdfs_dir.exists():
                for pdf_file in pdfs_dir.glob("*.pdf"):
                    print(f"   - {pdf_file.name}")
            
            print(f"\n🌐 Abrindo navegador...")
            webbrowser.open(f'http://localhost:{PORT}')
            
            print(f"\n⏹️  Pressione Ctrl+C para parar o servidor")
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print(f"\n✅ Servidor parado")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Porta {PORT} já está em uso. Tente fechar outros servidores.")
        else:
            print(f"❌ Erro ao iniciar servidor: {e}")

if __name__ == "__main__":
    start_server()
