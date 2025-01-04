# MM Movie App
 MM Movie App är en webbaserad applikation som låter användare utforska populära och topprankade filmer, söka efter filmer, tv-serier och personer, samt filtrera filmer efter årtal med hjälp av TMDb.

 ## Funktioner
 - **Topprankade filmer**: Hämta och visa en lista med de mest topprankade filmerna.
- **Populära filmer**: Visa de mest populära filmerna just nu.
- **Sökfunktion**: Sök efter filmer, TV-serier eller personer med hjälp av TMDb:s sökfunktion.
- **Sök efter årtal**: Filtrera filmer baserat på deras släppår.

## Teknologier
- **HTML, CSS och JavaScript**: Grundläggande webbteknologier för gränssnitt och funktionalitet.
- **The Movie Database (TMDb) API**: För att hämta filmdata.
- **Anime.js**: För animeringar på sidan.
- **Modulärt projekt**: Separata moduler för API-anrop och UI-rendering.

## Mappstruktur
- **Index**: Utgångssida för HTML.
- **Search**: HTML för att söka på personer eller film.
- **Year**: HTML för att söka på filmer utefter år.
- **JS**: Separata moduler för Javascript.
    - **main.js**: Hanterar javascripten från ui.js och api.js.
    - **ui.js**: Hanterar funktioner för gränsnittet på hemsidan.
    - **api.js**: Hanterar api förfrågningar till TMDb.
- **css**: Styling för HTML.
- **anime**: Animeringar på hemsidan.