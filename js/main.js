import { fetchTopRated, fetchPopular, searchMulti, fetchMoviesByYear } from './api.js';
import { renderMovies, renderError, renderSearchResults, renderMoviesByYear } from './ui.js';
import anime from '../anime/anime.es.js';


document.addEventListener('DOMContentLoaded', () => {
    const topRatedBtn = document.getElementById('top-rated-btn');
    const popularBtn = document.querySelector('#popular-btn');
    const searchForm = document.querySelector('#search-form');
    const yearInput = document.getElementById('year-input');
    const searchYearBtn = document.getElementById('fetch-year-movies');


    topRatedBtn.addEventListener('click', async () => {
        try {
            const movies = await fetchTopRated();
            renderMovies(movies);
            animateMovies();
        } catch (error) {
            renderError('Could not load top-rated movies.');
        }
    });

    popularBtn.addEventListener('click', async () => {
        try {
            const movies = await fetchPopular();
            renderMovies(movies);
            animateMovies();
        } catch (error) {
            renderError('Could not load popular movies.');
        }
    });

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = document.querySelector('#search-input').value.trim();
        
        try {
            const results = await searchMulti(query);
            renderSearchResults(results);
            animateMovies();
        } catch (error) {
            renderError('An error occurred while searching. Please try again later');
        }
    });

    searchYearBtn.addEventListener('click', async () => {
        const year = parseInt(yearInput.value, 10);
        if (year >= 1900 && year <= 2024) {
            try {
                const movies = await fetchMoviesByYear(year);
                renderMoviesByYear(movies);
                animateMovies();
            } catch (error) {
                renderError('Could not load movies for the selected year.');
            }
        } else {
            alert('Ange ett giltigt år mellan 1900 och 2024.');
        }
    });
    
});

function animateMovies() {
    anime({
        targets: '#movie-container div, #movie-card, .movie-item',
        opacity: [0, 1],
        translateY: [-50, 0],
        delay: anime.stagger(200),
        duration: 1000,
        easing: 'easeOutQuad'
    });
}