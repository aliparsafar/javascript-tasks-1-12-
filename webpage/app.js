fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const userCardsContainer = document.getElementById('user-cards');
    
    users.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      const userName = document.createElement('h2');
      userName.textContent = user.name;

      const userEmail = document.createElement('p');
      userEmail.textContent = user.email;

      card.appendChild(userName);
      card.appendChild(userEmail);

      userCardsContainer.appendChild(card);
    });
  })
  .catch(error => console.log('Error fetching data:', error));
