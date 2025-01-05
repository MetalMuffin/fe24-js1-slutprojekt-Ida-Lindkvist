export function renderMovies(movies) {
    const container = document.querySelector('#movie-container');
    container.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = 
            `<div class="movie-card">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Release date: ${movie.release_date}</p>
            </div>`;

        container.innerHTML += movieCard;
    });
}

export function renderError(message) {
    const container = document.querySelector('#error-container');
    container.innerHTML = `<p class="error">${message}</p>`;
}

export function renderSearchResults(results) {
    const container = document.querySelector('#movie-container');
    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = `<p class="error">Vi hittade inte det du sökte efter, prova igen med något annat</p>`;
        return;
    }

    results.forEach(item => {
        if (item.media_type === 'movie') {
            container.innerHTML += 
                `<div class="movie-card">
                    <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>Release date: ${item.release_date || 'N/A'}</p>
                    <p>${item.overview || 'No description available.'}</p>
                </div>`;
        }

        else if (item.media_type === 'person') {
            const knownFor = item.known_for.map(work => {
                return work.media_type === 'movie' ? `Movie: ${work.title}` : `TV: ${work.name}`;
            }).join('<br>');

            container.innerHTML += 
                `<div class="movie-card">
                    <img src="https://image.tmdb.org/t/p/w500/${item.profile_path}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>Known for: ${item.known_for_department || 'N/A'}</p>
                    <p>${knownFor}</p>
                </div>`;
        }
    });
}

export function renderMoviesByYear(movies){
    const movieList = document.getElementById('year-movie-list');
    movieList.innerHTML = '';

        if (movies.length === 0) {
            movieList.innerHTML = `<p class="error">${year} var ett dåligt år för filmer, vi hittade inga resultat.</p>`;
            return;
        }

        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            movieItem.innerHTML = 
                `<img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Release Date: ${movie.release_date}</p>
                <p>${movie.overview}</p>`;

            movieList.appendChild(movieItem);
        });
}