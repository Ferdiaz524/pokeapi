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
            // Crear un nuevo contenedor para el Pokémon encontrado
            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');
            
            // Insertar el contenido del Pokémon
            pokemonCard.innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Altura:</strong> ${data.height}</p>
                <p><strong>Peso:</strong> ${data.weight}</p>
                <p><strong>Tipo:</strong> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
            `;

            // Insertar la tarjeta del Pokémon al principio del contenedor de resultados
            const pokemonResults = document.getElementById('pokemonResults');
            pokemonResults.insertBefore(pokemonCard, pokemonResults.firstChild);
        })
        .catch(error => console.log(error));
});
