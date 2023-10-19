function sendSport(sport) {
        var chatContainer = document.getElementById("chat-container");
        var chatMessageSport = document.createElement("div");
        chatMessageSport.classList.add("chat-message");
        chatMessageSport.textContent = "Vous avez choisi " + sport + ". Posez votre question sur ce sport.";
        chatContainer.appendChild(chatMessageSport);
      }

      function sendMessage() {
        var question = document.getElementById("question-input").value;
        var chatContainer = document.getElementById("chat-container");
        var chatMessage = document.createElement("div");
        chatMessage.classList.add("chat-message");
        chatMessage.textContent = question;
        chatContainer.appendChild(chatMessage);
        document.getElementById("question-input").value = "";
        var responseMessage = document.createElement("div");
        responseMessage.classList.add("chat-message");
        responseMessage.textContent = "Voici la réponse à votre question.";
        chatContainer.appendChild(responseMessage);
      }
