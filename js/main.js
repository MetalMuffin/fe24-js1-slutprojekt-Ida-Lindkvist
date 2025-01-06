// Jag använde mig utav ChatGPT för den första sökfunktionen och arbetade utifrån den i resterande funktioner. Jag har även använt mig utav ChatGPT vid felsökning.

import { fetchTopRated, fetchPopular, searchMulti, fetchMoviesByYear } from './api.js';
import { renderMovies, renderError, renderSearchResults, renderMoviesByYear } from './ui.js';
import anime from '../anime/anime.es.js';


    const topRatedBtn = document.getElementById('top-rated-btn');
    const popularBtn = document.getElementById('popular-btn');
    const searchForm = document.getElementById('search-form');
    const yearInput = document.getElementById('year-input');
    const searchYearBtn = document.getElementById('year-search-btn');    

    topRatedBtn.addEventListener('click', async () => {
        renderError('')
        try {
            const movies = await fetchTopRated();
            renderMovies(movies);
            animateMovies();
        } 
        catch (error) {
            renderError('Filmerna med högst betyg kunde tyvärr inte laddas, prova igen');
        }
    });

    popularBtn.addEventListener('click', async () => {
        renderError('')
        try {
            const movies = await fetchPopular();
            renderMovies(movies);
            animateMovies();
        } 
        catch (error) {
            renderError('De mest populära filmerna kunde tyvärr inte laddas, prova igen');
        }
    });

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = document.querySelector('#search-input').value.trim();
        renderError('')
        
        try {
            const results = await searchMulti(query);
            renderSearchResults(results);
            animateMovies();
        } 
        catch (error) {
            renderError('Hoppsan, något blev fel. Försök igen!');
        }
    });

    searchYearBtn.addEventListener('click', async () => {
        const year = parseInt(yearInput.value);
        renderError('')

        if (year >= 1900 && year <= 2024) {
            try {
                const movies = await fetchMoviesByYear(year);
                renderMoviesByYear(movies);
                animateMovies();
            } 
            catch (error) {
                renderError('Filmerna som släpptes detta år kunde tyvärr inte laddas, försök igen');
            }
        } 
        else {
            renderError('Hoppsan, ange ett giltigt år mellan 1900 och 2024');
        }
    });


// Animering för resultaten
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