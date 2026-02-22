# Landing Page

## Deploy no GitHub Pages

O projeto está configurado para deploy automático via GitHub Actions.

### O que já está configurado

- **next.config.mjs**: export estático (`output: 'export'`), `basePath` e `assetPrefix` para o nome do repositório, imagens não otimizadas (compatível com hospedagem estática).
- **.github/workflows/deploy.yml**: workflow que roda a cada push nas branches `develop` e `main`, faz o build e publica no GitHub Pages.

### Como ativar o deploy

1. **Faça commit e push** do workflow e do `next.config.mjs`:
   ```bash
   git add .github/workflows/deploy.yml next.config.mjs .gitignore
   git commit -m "chore: config deploy GitHub Pages"
   git push origin main
   ```

2. **Ative o GitHub Pages no repositório**:
   - No GitHub: **Settings** → **Pages**
   - Em **Source**, escolha **GitHub Actions**
   - Salve (não é preciso escolher branch nem pasta)

3. Após o primeiro push em `develop` ou `main`, o workflow vai rodar. O site ficará em:
   - `https://<seu-usuario>.github.io/landing-page-tech-skills/`

**Se usar outras branches**: edite `.github/workflows/deploy.yml` e ajuste a lista em `branches: [develop, main]`.