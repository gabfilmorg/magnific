# Script para criar todas as pastas das categorias
$categorias = @(
    "iluminacao",
    "soldados", 
    "lamparinas",
    "mesa-posta",
    "caixas",
    "arvores",
    "capas",
    "bolas",
    "fitas",
    "acabamentos",
    "ursos",
    "papai-noel",
    "decoracao"
)

Write-Host "Criando pastas das categorias..." -ForegroundColor Green

foreach ($categoria in $categorias) {
    if (!(Test-Path $categoria)) {
        New-Item -ItemType Directory -Name $categoria | Out-Null
        Write-Host "✅ Pasta criada: $categoria" -ForegroundColor Yellow
    } else {
        Write-Host "⚠️  Pasta já existe: $categoria" -ForegroundColor Cyan
    }
}

Write-Host "`n🎉 Todas as pastas foram criadas com sucesso!" -ForegroundColor Green
Write-Host "📁 Estrutura criada em: $(Get-Location)" -ForegroundColor Blue
