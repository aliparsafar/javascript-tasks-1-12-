function generateCard() {
    
    const cardContainer = document.getElementById("cardContainer");

    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Card Title"; 

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    cardContent.textContent = "This is the card content."; 

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        cardContainer.removeChild(card); 
    };

    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    card.appendChild(deleteButton);

    cardContainer.appendChild(card);
}