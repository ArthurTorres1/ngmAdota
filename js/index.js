$(document).ready(function() {
    // Função para buscar os dados dos cachorros e montar os cards
    function fetchDogs() {
        $.ajax({
            url: "https://localhost:44384/Animais",
            type: "GET",
            success: function(data) {
                renderCards(data);
            },
            error: function(xhr, status, error) {
                console.error("Erro ao buscar os dados dos cachorros:", error);
            }
        });
    }

    // Função para renderizar os cards dos cachorros
    function renderCards(dogs) {
        var cardContainer = $("#cardContainer");
        cardContainer.empty(); // Limpa o conteúdo atual

        $.each(dogs, function(index, dog) {
            var cardHtml = `
                <div class="cardAnimal">
                    <img src="${dog.foto}" class="card-img-top" alt="${dog.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${dog.nome}</h5>
                        <button class="btn-card">Adotar</button>
                        <!-- Mais informações sobre o cachorro aqui, se necessário -->
                    </div>
                </div>
            `;
            cardContainer.append(cardHtml);
        });
    }

    // Chama a função para buscar os dados dos cachorros quando a página carregar
    fetchDogs();
});