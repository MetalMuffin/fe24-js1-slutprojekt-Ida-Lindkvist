const API_KEY = '1cf3deeabaa2b64293b78ab56413663e';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTopRated() {
    try {
        const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=sv-SE&page=1`);
        const data = await response.json();
        return data.results.slice(0, 10);
    } 
    catch (error) {
        console.error('Error fetching top-rated movies:', error);
        throw error;
    }
}

export async function fetchPopular() {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=sv-SE&page=1`)
        const data = await response.json();
        return data.results.slice(0, 10);
    } 
    catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
    }
}

// Sök efter film eller person //
export async function searchMulti(query) {
    try {
        const response = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&page=1&query=${encodeURIComponent(query)}&include_adult=false`);
        const data = await response.json();
        return data.results;
    } 
    catch (error) {
        console.error('Error fetching searched movie:', error);
        throw error;
    }
}

export async function fetchMoviesByYear(year) {
    console.log("fetchMoviesByYear", year || 0);
    
    try {
        const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=${year}&page=1`);
        const data = await response.json();
        console.log("fetchMoviesByYear, data:", data);
        
        return data.results;
    } 
    catch (error) {
        console.error("Error fetching movies by year:", error);
        throw error;
    }
}
