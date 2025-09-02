# 🚀 Guia de Deploy - Magnific Decor

## 📋 Checklist para Deploy

### ✅ Arquivos Necessários
- [ ] `index.html`
- [ ] `styles.css`
- [ ] `script.js`
- [ ] `config.js`
- [ ] Pasta `imagens/` com todas as subpastas
- [ ] Todas as imagens nas pastas corretas

### 📁 Estrutura de Pastas no Servidor
```
/
├── index.html
├── styles.css
├── script.js
├── config.js
└── imagens/
    ├── VELAS/
    ├── ILUMINAÇÃO/
    ├── SOLDADOS/
    ├── LAMPARINAS/
    ├── MESA POSTA/
    │   ├── 1.png
    │   ├── 2.png
    │   └── ... (até 14.png)
    ├── CAIXAS/
    ├── ARVORES/
    ├── CAPAS/
    ├── BOLAS/
    ├── FITAS/
    ├── ACABAMENTOS/
    ├── URSOS/
    ├── PAPAI NOEL/
    └── DECORAÇÃO/
```

## 🔧 Soluções para Problemas de Deploy

### ❌ Problema: Imagens não carregam
**Soluções implementadas:**
1. **Sistema de Fallback**: Tenta múltiplos caminhos automaticamente
2. **URL Encoding**: Trata espaços em nomes de pastas
3. **Detecção de Ambiente**: Diferencia localhost de produção
4. **Logs de Debug**: Mostra qual caminho funcionou

### 🔍 Como Testar
1. **Local**: `http://localhost:8000`
2. **Teste de Imagens**: `http://localhost:8000/test-images.html`
3. **Console do Navegador**: Verifique os logs de debug

### 📱 Compatibilidade
- ✅ **Desktop**: Chrome, Firefox, Safari, Edge
- ✅ **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- ✅ **Responsivo**: Funciona em todas as telas

## 🎯 Caminhos Testados Automaticamente

O sistema tenta estes caminhos em ordem:
1. `imagens/MESA POSTA/1.png`
2. `./imagens/MESA POSTA/1.png`
3. `/imagens/MESA POSTA/1.png`
4. `imagens/MESA%20POSTA/1.png` (URL encoded)
5. `./imagens/MESA%20POSTA/1.png` (URL encoded)

## 🚨 Troubleshooting

### Se as imagens ainda não carregarem:
1. **Verifique o Console**: F12 → Console
2. **Teste Manual**: Acesse `seu-site.com/imagens/MESA POSTA/1.png`
3. **Verifique Permissões**: Pasta `imagens/` deve ser acessível
4. **Case Sensitivity**: Nomes de pastas devem ser exatos

### Logs Importantes:
- `✅ Imagem carregada com sucesso: [caminho]`
- `❌ Erro ao carregar: [caminho]`
- `🔧 [CONFIG] Ambiente: Produção`

## 📞 Suporte
Se ainda houver problemas, verifique:
1. Estrutura de pastas no servidor
2. Permissões de arquivo
3. Configuração do servidor web
4. Logs do console do navegador
