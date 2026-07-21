# Galeleo - Technology Consulting Landing Page

Uma landing page multilíngue (Português, Inglês, Espanhol) para a empresa de consultoria em tecnologia Galeleo, fundada em 1983, especializada em Vibe Coding, Agentes de IA e Integrações Multi-plataformas.

## 🌟 Características Principais

- **Multilíngue**: Suporte completo para Português (Brasil), Inglês e Espanhol
- **Design Responsivo**: Interface moderna adaptável a diferentes dispositivos
- **SEO Otimizado**: Meta tags e estrutura otimizada para motores de busca
- **Animações Suaves**: Efeitos de scroll com biblioteca AOS
- **Performance**: Carregamento rápido com lazy loading de imagens

## 🚀 Tecnologias Utilizadas

### Backend
- **Flask (Python)**: Framework web minimalista
- **Jinja2**: Engine de templates
- **Gunicorn**: Servidor WSGI para produção

### Frontend
- **Bootstrap 5.3.0**: Framework CSS para design responsivo
- **Font Awesome 6.4.0**: Biblioteca de ícones
- **AOS (Animate On Scroll)**: Animações baseadas em scroll
- **Google Fonts (Inter)**: Tipografia moderna

### Infraestrutura
- **JSON**: Sistema de gestão de conteúdo multilíngue
- **Static Assets**: CSS, JavaScript e imagens organizados
- **Session Management**: Flask sessions para flash messages

## 📁 Estrutura do Projeto

```
├── app.py                 # Aplicação Flask principal
├── main.py               # Ponto de entrada
├── static/
│   ├── css/
│   │   └── style.css     # Estilos customizados
│   ├── js/
│   │   └── script.js     # JavaScript principal
│   ├── images/           # Assets de imagem
│   └── data/
│       └── content.json  # Conteúdo multilíngue
├── templates/
│   ├── base.html         # Template base
│   ├── index.html        # Página inicial
│   ├── blog.html         # Lista de casos
│   ├── case_veredas.html # Caso Protocolo Veredas
│   ├── case_veras.html   # Caso Plataforma Veras
│   ├── case_hydroapp.html# Caso HidroApp
│   └── contact.html      # Formulário de contato
└── README.md             # Este arquivo
```

## 🎯 Páginas e Funcionalidades

### Página Principal (`/`)
- Hero section com logo da Galeleo
- Apresentação dos serviços (Vibe Coding, IA, Integrações)
- Seção de experiência (40+ anos)
- Casos de sucesso em destaque
- Call-to-action para contato

### Blog de Casos (`/blog`)
- Listagem dos 3 principais casos de estudo
- Cards com categoria, título, descrição e tempo de leitura
- Links para páginas detalhadas de cada caso

### Casos de Estudo Detalhados
1. **Protocolo Veredas** (`/case/veredas`)
   - Plataforma para tratamento de Parkinson
   - 30+ anos de desenvolvimento
   - IA para insights médicos
   
2. **Plataforma Veras** (`/case/veras`)
   - Assistente virtual para saúde mental
   - Suporte emocional 24/7
   - IA terapêutica
   
3. **HidroApp** (`/case/hydroapp`)
   - Gestão inteligente de água/gás
   - IoT e leituras fotométricas
   - Sustentabilidade ambiental

### Formulário de Contato (`/contact`)
- Campos validados (nome, email, assunto, mensagem)
- Categorias de assunto específicas
- FAQ com perguntas frequentes
- Informações de contato

## 🌍 Internacionalização

### Idiomas Suportados
- **Português (pt)**: Idioma padrão
- **Inglês (en)**: Versão internacional
- **Espanhol (es)**: Mercado hispânico

### Sistema de Tradução
- Conteúdo centralizado em `static/data/content.json`
- Detecção de idioma via parâmetro URL (`?lang=pt|en|es`)
- Fallback automático para português
- Templates dinâmicos com Jinja2

## 🎨 Design e UX

### Esquema de Cores
- **Primário**: Laranja/Amarelo (#ff6b35, #ffa500)
- **Secundário**: Verde (#28a745)
- **Neutros**: Cinzas e brancos
- **Acentos**: Azuis e vermelhos para status

### Componentes Principais
- **Cards responsivos** para serviços e casos
- **Hero section** com logo e call-to-actions
- **Animações AOS** para entrada suave
- **Botão back-to-top** flutuante
- **Footer minimalista** com links

## 🔧 Configuração e Deploy

### Requisitos
- Python 3.8+
- Flask
- Gunicorn (para produção)

### Variáveis de Ambiente
- `SESSION_SECRET`: Chave secreta para sessões Flask

### Executar Localmente
```bash
# Instalar dependências
pip install flask gunicorn

# Executar aplicação
python main.py
```

### Deploy em Produção
```bash
# Usando Gunicorn
gunicorn --bind 0.0.0.0:5000 --reuse-port --reload main:app
```

## 📊 SEO e Performance

### Otimizações SEO
- Meta descriptions específicas por página
- Keywords relevantes para cada caso
- Robots.txt otimizado
- Estrutura semântica HTML5
- URLs amigáveis

### Performance
- Lazy loading de imagens
- CSS e JS otimizados
- Compressão de assets
- Cache de recursos estáticos

## 🏢 Sobre a Galeleo

**Fundada**: 1983 (40+ anos de experiência)  
**Especialidades**:
- **Vibe Coding**: Desenvolvimento revolucionário centrado na intenção
- **Agentes de IA**: Automação inteligente personalizada  
- **Integrações Multi-plataformas**: Soluções escaláveis

**Projetos Destacados**:
- Protocolo Veredas (Saúde neurológica)
- Plataforma Veras (Bem-estar mental)
- HidroApp (Gestão sustentável)

## 📝 Licença

© 2026-2028 Galeleo. Todos os direitos reservados.

---

**Desenvolvido com dedicação pela equipe Galeleo**