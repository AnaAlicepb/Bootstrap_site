// Seleciona os elementos do DOM para o chatbot
const chatbotIcon = document.querySelector('.chatbot-icon');
const chatbotWindow = document.querySelector('.chatbot-window');
const chatbotClose = document.querySelector('.chatbot-close');
const chatbotInput = document.querySelector('.chatbot-input-area input[type="text"]');
const chatbotSendButton = document.querySelector('.chatbot-input-area button');
const chatbotMessages = document.querySelector('.chatbot-messages');

// Adiciona um ouvinte de evento para mostrar/ocultar a janela do chatbot ao clicar no ícone
chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
});

// Adiciona um ouvinte de evento para fechar a janela do chatbot ao clicar no botão de fechar
chatbotClose.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});

// Adiciona um ouvinte de evento para enviar mensagens ao clicar no botão de enviar
chatbotSendButton.addEventListener('click', () => {
    sendMessage();
});

// Adiciona um ouvinte de evento para enviar mensagens ao pressionar a tecla Enter no campo de entrada
chatbotInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Função para enviar uma mensagem do usuário e exibir uma resposta do bot (simulada)
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        // Cria um elemento div para a mensagem do usuário
        const userDiv = document.createElement('div');
        userDiv.classList.add('chatbot-message', 'user-message');
        userDiv.textContent = message;
        chatbotMessages.appendChild(userDiv);

        // Limpa o campo de entrada
        chatbotInput.value = '';

        // Simula a resposta do bot com um atraso
        setTimeout(() => {
            // Simula o "digitando..."
            const typingDiv = document.createElement('div');
            typingDiv.classList.add('chatbot-message', 'bot-message', 'typing');
            typingDiv.textContent = 'Digitando...';
            chatbotMessages.appendChild(typingDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

            setTimeout(() => {
                chatbotMessages.removeChild(typingDiv); // Remove o "digitando..."

                const botResponse = getBotResponse(message); // Obtém a resposta do bot
                const botDiv = document.createElement('div');
                botDiv.classList.add('chatbot-message', 'bot-message');
                botDiv.innerHTML = `<div class="text">${botResponse}</div>`;
                chatbotMessages.appendChild(botDiv);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }, 1500); // Tempo para simular a digitação
        }, 500); // Pequeno atraso antes de mostrar o "digitando..."
    }
}

// Função para obter uma resposta do bot com base na mensagem do usuário (simulação)
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    const greetings = ['olá', 'oi', 'bom dia', 'boa tarde', 'boa noite'];
    const currentTime = new Date();
    const hour = currentTime.getHours();
    let greeting = 'Olá! Bem-vindo ao Chatbot Fazenda Kastor.';

    if (greetings.some(g => userMessage.includes(g))) {
        if (hour >= 6 && hour < 12) {
            greeting = 'Bom dia! Bem-vindo ao Chatbot Fazenda Kastor.';
        } else if (hour >= 12 && hour < 18) {
            greeting = 'Boa tarde! Bem-vindo ao Chatbot Fazenda Kastor.';
        } else {
            greeting = 'Boa noite! Bem-vindo ao Chatbot Fazenda Kastor.';
        }
        return `${greeting} Como posso ajudar você hoje?`;
    } else if (userMessage.includes('reserva') || userMessage.includes('reservar') || userMessage.includes('diária') || userMessage.includes('preço')) {
        return 'Para informações sobre reservas e preços, por favor, visite a nossa seção de "Reservas" ou entre em contato conosco por telefone.';
    } else if (userMessage.includes('localização') || userMessage.includes('endereço') || userMessage.includes('onde fica')) {
        return 'Estamos localizados em Blumenau, Santa Catarina. Você pode ver o mapa de localização na seção "Entre em Contato".';
    } else if (userMessage.includes('contato') || userMessage.includes('telefone') || userMessage.includes('email')) {
        return 'Você pode entrar em contato conosco através do formulário na seção "Entre em Contato" ou pelo telefone [Número de Telefone Fictício].';
    } else if (userMessage.includes('serviços') || userMessage.includes('o que oferecem') || userMessage.includes('atividades')) {
        return 'Oferecemos diversas atividades como trilhas, passeios a cavalo, piscina e restaurante com comida típica da região. Consulte a seção "Serviços" do nosso site para mais detalhes.';
    } else if (userMessage.includes('limpar') || userMessage.includes('histórico') || userMessage.includes('apagar chat')) {
        chatbotMessages.innerHTML = ''; // Limpa todas as mensagens
        return 'Histórico de chat limpo.';
    } else {
        return 'Obrigado pela sua mensagem! Entraremos em contato em breve.';
    }
}