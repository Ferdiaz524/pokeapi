document.getElementById('searchBtn').addEventListener('click', function() {
    const pokemonNameOrId = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;
    
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert('Pokémon no encontrado');
                throw new Error('Pokémon no encontrado');
            }
        })
        .then(data => {
            const alturaEnMetros = data.height / 10;
            const pesoEnKg = data.weight / 10;   

            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');
            
            pokemonCard.innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Altura:</strong> ${alturaEnMetros} m</p>
                <p><strong>Peso:</strong> ${pesoEnKg} kg</p>
                <p><strong>Tipo:</strong> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
            `;

            const pokemonResults = document.getElementById('pokemonResults');
            pokemonResults.insertBefore(pokemonCard, pokemonResults.firstChild);
        })
        .catch(error => console.log(error));
});
