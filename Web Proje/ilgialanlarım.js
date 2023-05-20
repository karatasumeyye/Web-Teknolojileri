const API_KEY = '7708e720e619b90938d24795ca3fea33';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const main = document.getElementById('movieList');

// Film listesi
const movieList = ['Yüzüklerin Efendisi: Yüzük Kardeşliği (2001)', 'Yüzüklerin Efendisi: İki Kule (2002)','Harry Potter ve Ateş Kadehi (2005)','Yeşil Yol','Forrest Gump','3 Aptal','Rüzgarı Dizginleyen Çocuk','Can Dostum','Akıl Oyunları','Dangal',
'Wednesday','Stranger Things','Annenizle Nasıl Tanıştım(2005)','Brooklyn Nine-Nine','Sherlock','Annenizle Nasıl Tanıştım (2005)'];       

getMovies(movieList);

async function getMovies(movieList) {
  try {
    for (const movieTitle of movieList) {
      const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieTitle}`;
      const response = await fetch(searchURL);
      const data = await response.json();
      if (data.results.length > 0) {
        const movie = data.results[0];
        showMovie(movie);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

function showMovie(movie) {
  const { title, poster_path, vote_average, overview } = movie;

  const movieEl = document.createElement('div');
  movieEl.classList.add('movie');

  movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}" />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>${title} <small>Overview</small></h3>
      <p>${overview}</p>
    </div>
  `;

  main.appendChild(movieEl);
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}
