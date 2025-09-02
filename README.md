# 👑 Magnific Decor - Navidad Magnifica

Um site responsivo e elegante para visualização de catálogos de decorações natalinas de alto padrão, com navegação intuitiva entre categorias especializadas.

## ✨ Características

- **Design Elegante**: Visual natalino sofisticado com paleta de cores premium
- **Totalmente Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Navegação Intuitiva**: Menu com botões Home, Anterior e Próximo
- **Visualização de PDF**: Suporte a visualização de PDFs em alta qualidade
- **Categorização Automática**: Sistema inteligente que categoriza PDFs automaticamente
- **14 Categorias Especializadas**: Organização profissional por tipo de produto
- **Acessibilidade**: Suporte a navegação por teclado e alto contraste

## 🚀 Como Usar

### 1. Estrutura de Arquivos

```
NATALL/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── README.md           # Este arquivo
└── pdfs/               # Pasta para os PDFs
    ├── velas-colecao-2024.pdf
    ├── arvores-natal-premium.pdf
    ├── iluminacao-led-natal.pdf
    └── ...
```

### 2. Adicionando PDFs

O sistema **categoriza automaticamente** os PDFs baseado no nome do arquivo:

1. **Adicione seus PDFs** na pasta `pdfs/`
2. **Use nomes descritivos** que contenham palavras-chave das categorias
3. **O sistema detecta automaticamente** e organiza por categoria

**Exemplos de nomenclatura:**
- `velas-colecao-2024.pdf` → Categoria: **Velas**
- `arvores-natal-premium.pdf` → Categoria: **Árvores**
- `iluminacao-led-natal.pdf` → Categoria: **Iluminação**
- `soldados-chumbo-vintage.pdf` → Categoria: **Soldados**

**Palavras-chave por categoria:**
- **Velas**: vela, candle, velas
- **Iluminação**: luz, light, iluminacao, luminaria
- **Soldados**: soldado, soldier, soldados
- **Lamparinas**: lamparina, candelabro, candleholder
- **Mesa Posta**: mesa, table, louca, utensilio, prato
- **Caixas**: caixa, box, organizador, container
- **Árvores**: arvore, tree, pinheiro, christmas
- **Capas**: capa, cover, revestimento, protecao
- **Bolas**: bola, ball, ornamento, ornament
- **Fitas**: fita, ribbon, laco, bow
- **Acabamentos**: acabamento, finishing, detalhe, detail
- **Ursos**: urso, bear, pelucia, teddy
- **Papai Noel**: papai, noel, santa, claus, natal
- **Decoração**: decoracao, decoration, enfeite, ornament

### 3. Executando o Site

1. **Abra o arquivo `index.html`** em qualquer navegador moderno
2. **Ou use um servidor local** para melhor experiência:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server

# PHP
php -S localhost:8000
```

3. **Acesse** `http://localhost:8000` no navegador

## 🎨 Personalização

### Cores e Tema

As cores podem ser personalizadas no arquivo `styles.css`:

```css
/* Cores principais */
:root {
    --primary-red: #c41e3a;
    --primary-blue: #2a5298;
    --gold: #ffd700;
    --white: #ffffff;
}
```

### Categorias

Para adicionar novas categorias:

1. **Adicione o botão** no HTML (`index.html`)
2. **Crie a seção** correspondente
3. **Atualize o JavaScript** (`script.js`)

### Logos e Ícones

- **Logo**: Substitua o ícone no header
- **Ícones**: Use Font Awesome (já incluído)
- **Fontes**: Google Fonts (Mountains of Christmas + Open Sans)

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## ⌨️ Atalhos de Teclado

- **Seta Esquerda**: PDF anterior
- **Seta Direita**: Próximo PDF
- **F11**: Tela cheia (navegador)

## 🔧 Funcionalidades Avançadas

### API JavaScript

O site expõe uma API global `MagnificDecor`:

```javascript
// Navegar para categoria
MagnificDecor.navigateToCategory('velas');

// Adicionar PDF dinamicamente
MagnificDecor.addPdfToCategory('velas', 'novo-pdf.pdf');

// Categorizar PDF automaticamente
const category = MagnificDecor.categorizePdfByFilename('velas-colecao-2024.pdf');

// Escanear pasta de PDFs
MagnificDecor.scanPdfFolder();

// Obter estatísticas
const stats = MagnificDecor.getStats();

// Exportar/Importar configuração
const config = MagnificDecor.exportConfig();
MagnificDecor.importConfig(config);
```

### Drag & Drop

Arraste PDFs diretamente para o visualizador para visualização rápida.

## 🎯 Categorias Disponíveis

1. **🏠 Home**: Página inicial com visão geral
2. **🕯️ Velas**: Velas aromáticas e decorativas
3. **💡 Iluminação**: Luzes e luminárias especiais
4. **🎖️ Soldados**: Soldadinhos de chumbo decorativos
5. **🕯️ Lamparinas**: Lamparinas e candelabros
6. **🍽️ Mesa Posta**: Louças e utensílios para mesa
7. **📦 Caixas**: Caixas decorativas e organizadores
8. **🎄 Árvores**: Árvores de Natal e acessórios
9. **👕 Capas**: Capas e revestimentos
10. **🔴 Bolas**: Bolas e ornamentos
11. **🎀 Fitas**: Fitas e laços decorativos
12. **💎 Acabamentos**: Detalhes e acabamentos luxuosos
13. **🧸 Ursos**: Ursos e bichinhos de pelúcia
14. **🎅 Papai Noel**: Figuras do Papai Noel
15. **⭐ Decoração**: Itens decorativos diversos

## 🌐 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, tablet, mobile
- **PDFs**: Suporte nativo + PDF.js para compatibilidade

## 📝 Notas Técnicas

- **Sem dependências externas** (exceto Font Awesome e Google Fonts)
- **Vanilla JavaScript** (sem frameworks)
- **CSS Grid e Flexbox** para layout
- **Progressive Enhancement** para funcionalidades avançadas

## 🐛 Solução de Problemas

### PDFs não carregam
- Verifique se os caminhos estão corretos
- Use servidor local para evitar problemas de CORS
- Verifique se os arquivos existem

### Layout quebrado
- Verifique se o CSS está carregando
- Teste em navegador moderno
- Verifique console para erros JavaScript

### Performance lenta
- Otimize tamanho dos PDFs
- Use PDFs com resolução adequada
- Considere lazy loading para muitos PDFs

## 📄 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Adicionar novas funcionalidades
- Melhorar a documentação

---

**Desenvolvido com ❤️ para a Magnific Decor - Navidad Magnifica!** 👑🎄✨
