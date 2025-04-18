<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Documentação do Website do Hotel Fazenda Kastor, construído com HTML, Bootstrap e outras tecnologias.">
    <meta name="keywords" content="HTML, Bootstrap, Hotel Fazenda Kastor, website, responsivo">
    <meta name="author" content="Ana Alice Rodrigues">
</head>
<body>

<header>
    <h1>Website Hotel Fazenda Kastor</h1>
    <p>Documentação do website desenvolvido para o Hotel Fazenda Kastor, utilizando HTML, Bootstrap e outras tecnologias para criar uma experiência online informativa e atraente.</p>
    <img src="./img/01.png" alt="capa 01" width="300" height="auto">
    <img src="./img/02.png" alt="capa 02" width="300" height="auto">
    <img src="./img/03.png" alt="capa 02" width="300" height="auto">
</header>

<details>
    <summary>Índice</summary>
    <ol>
        <li><a href="#conteudo">Conteúdo do Website</a></li>
        <li><a href="#estrutura-codigo">Estrutura do Código HTML</a></li>
        <li><a href="#css">CSS</a></li>
        <li><a href="#javascript">JavaScript</a></li>
        <li><a href="#uso">Uso</a></li>
        <li><a href="#recursos">Recursos Utilizados</a></li>
        <li><a href="#proximos-passos">Próximos Passos</a></li>
        <li><a href="#contribuicao">Contribuição</a></li>
        <li><a href="#licenca">Licença</a></li>
        <li><a href="#contato">Contato</a></li>
    </ol>
</details>

<section id="conteudo">
    <h2>Conteúdo do Website</h2>
    <ul>
        <li><strong>Barra de Navegação:</strong> Uma barra de navegação responsiva que permite aos usuários acessar as principais seções do site (Home, Acomodações, Lazer, Gastronomia, Reservas, Contato).</li>
        <li><strong>Carousel de Imagens (Header):</strong> Um carrossel na seção de cabeçalho exibindo imagens do hotel e chamadas para ação (reservas, conhecer acomodações, etc.).</li>
        <li><strong>Seção de Acomodações:</strong> Cartões apresentando os diferentes tipos de acomodações disponíveis com imagens, descrições e detalhes.</li>
        <li><strong>Seção de Lazer:</strong> Cartões ou blocos destacando as atividades de lazer oferecidas pelo hotel (piscina, cavalgada, trilhas, etc.).</li>
        <li><strong>Seção de Gastronomia:</strong> Um carrossel ou galeria apresentando as opções de alimentação e destaques da culinária do hotel.</li>
        <li><strong>Seção de Reservas:</strong> Um formulário interativo para os usuários verificarem a disponibilidade e fazerem reservas.</li>
        <li><strong>Seção de Contato:</strong> Informações de contato do hotel, incluindo um mapa de localização e um formulário de contato.</li>
        <li><strong>Chatbot (Seção):</strong> Uma seção dedicada à funcionalidade do chatbot para assistência aos usuários.</li>
        <li><strong>Rodapé:</strong> Informações de rodapé contendo a logo, informações de contato, links de navegação, newsletter e direitos autorais.</li>
    </ul>
</section>

<section id="estrutura-codigo">
    <h2>Estrutura do Código HTML</h2>
    <p>O arquivo <code>index.html</code> contém a estrutura semântica do website, utilizando divs, sections e outras tags HTML5 para organizar o conteúdo de forma lógica.</p>
    <p>O Bootstrap é utilizado para o sistema de grid (organização em colunas) e para diversos componentes da interface, como a barra de navegação, o carrossel e os cartões.</p>
    </section>

<section id="css">
    <h2>CSS</h2>
    <p>O estilo principal é fornecido pelo Bootstrap, através de um link CDN no `<head>` do arquivo HTML.</p>
    <p>Um arquivo CSS personalizado (`style.css`) é utilizado para adicionar estilos específicos do tema do Hotel Fazenda e para sobrepor estilos do Bootstrap quando necessário.</p>
    </section>

<section id="javascript">
    <h2>JavaScript</h2>
    <p>O Bootstrap utiliza JavaScript para algumas de suas funcionalidades interativas, como o carrossel e o menu responsivo. Estes scripts são incluídos através de links CDN no final do `<body>`.</p>
    <p>Um arquivo JavaScript personalizado (`chatbot.js`) é utilizado para a lógica e o comportamento do chatbot (se implementado).</p>
    <p>jQuery e Popper.js são incluídos, pois são dependências do Bootstrap.</p>
    </section>

<section id="uso">
    <h2>Uso</h2>
    <p>Para visualizar o website, basta acessar o seguinte link:</p>
    <ul>
        <li><a href="https://bootstrap-site-2tpdgt5a9-anaalicepb.vercel.app/" target="_blank"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Hospedado na Vercel"></a></li>
    </ul>
    
</section>

<section id="recursos">
    <h2>Recursos Utilizados</h2>
    <ul>
        <li><img src="https://img.shields.io/badge/Bootstrap-4.5.2-563D7C?style=for-the-badge&logo=bootstrap" alt="Bootstrap 4.5.2"> Framework de código aberto para design responsivo.</li>
        <li><img src="https://img.shields.io/badge/Font_Awesome-5.15.4-339AF0?style=for-the-badge&logo=font-awesome" alt="Font Awesome"> Biblioteca de ícones para elementos visuais.</li>
        <li><img src="https://img.shields.io/badge/Google_Fonts-4688F1?style=for-the-badge&logo=google-fonts" alt="Google Fonts"> Serviço para importar as fontes Merriweather e Open Sans.</li>
        <li>Imagens: Utilizadas para ilustrar as acomodações, o lazer, a gastronomia e a paisagem do hotel (localizadas na pasta <code>img/</code>). <strong>Você pode adicionar uma breve descrição de algumas imagens importantes aqui, se desejar.</strong></li>
        <li>(Possivelmente outras bibliotecas ou recursos que foram utilizados).</li>
    </ul>
</section>

<section id="proximos-passos">
    <h2>Próximos Passos</h2>
    <ul>
        <li>Implementar a lógica completa do formulário de reserva.</li>
        <li>Desenvolver e integrar a funcionalidade do chatbot.</li>
        <li>Adicionar mais detalhes e informações nas seções de acomodações, lazer e gastronomia.</li>
        <li>Otimizar as imagens para melhor desempenho do site.</li>
        <li>Testar a responsividade em diferentes dispositivos e tamanhos de tela.</li>
        <li>(Outros passos específicos do seu projeto).</li>
    </ul>
</section>

<section id="contribuicao">
    <h2>Contribuição</h2>
    <p>Contribuições para o desenvolvimento e melhorias do website são bem-vindas. Sinta-se à vontade para sugerir alterações e melhorias.</p>
</section>

<section id="licenca">
    <h2>Licença</h2>
    <p>O projeto do website do Hotel Fazenda Kastor pode estar sob uma licença específica. Consulte o arquivo de LICENÇA (se existente) para mais detalhes.</p>
</section>

<section id="contato">
    <h2>Contato</h2>
    <ul>
        <li><a href="https://linktr.ee/anaeanali5" target="_blank"><img src="https://img.shields.io/badge/Ana_Alice_Rodrigues-blue?style=for-the-badge" alt="Perfil de Ana Alice Rodrigues"></a></li><br>
    </ul>
</section>

</body>
</html>