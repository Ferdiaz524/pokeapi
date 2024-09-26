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
            document.getElementById('pokemonName').textContent = data.name.toUpperCase();
            document.getElementById('pokemonImage').src = data.sprites.front_default;
            document.getElementById('pokemonHeight').textContent = data.height;
            document.getElementById('pokemonWeight').textContent = data.weight;

            const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            document.getElementById('pokemonType').textContent = types;

            document.getElementById('pokemonData').classList.remove('hidden');
        })
        .catch(error => console.log(error));
});
