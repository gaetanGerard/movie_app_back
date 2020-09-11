const axios = require('axios');

const API_KEY = process.env.TMDB_API_KEY;

exports.popMovies = async (parents, args, context, info) => {
  if (args.page === undefined) {
    args.page = 1;
  }
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  // console.log(args);
  try {
    const popularMovies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${args.language}&page=${args.page}`,
    );
    // console.log(popularMovies.data);
    return popularMovies.data;
  } catch (error) {
    throw error;
  }
};

exports.similarMovies = async (parents, args, context, info) => {
  if (args.page === undefined) {
    args.page = 1;
  }
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const similarMovies = await axios.get(
      `https://api.themoviedb.org/3/movie/${args.movieId}/similar?api_key=${API_KEY}&language=${args.language}&page=${args.page}`,
    );
    return similarMovies.data;
  } catch (error) {
    throw error;
  }
};

exports.recommendationMovies = async (parents, args, context, info) => {
  if (args.page === undefined) {
    args.page = 1;
  }
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const recomm = await axios.get(
      `https://api.themoviedb.org/3/movie/${args.movieId}/recommendations?api_key=${API_KEY}&language=${args.language}&page=${args.page}`,
    );
    return recomm.data;
  } catch (error) {
    throw error;
  }
};

exports.nowPlayMovies = async (parents, args, context, info) => {
  if (args.page === undefined) {
    args.page = 1;
  }
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const nowPlayingMovies = await axios.get(`
    https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=${args.language}&page=${args.page}`);

    return nowPlayingMovies.data;
  } catch (error) {
    throw error;
  }
};

exports.upComingMovies = async (parents, args, context, info) => {
  if (args.page === undefined) {
    args.page = 1;
  }
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const upcomingMovies = await axios.get(`
    https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=${args.language}&page=${args.page}`);

    return upcomingMovies.data;
  } catch (error) {
    throw error;
  }
};

exports.topRatedMovies = async (parents, args, context, info) => {
  if (args.page === undefined) {
    args.page = 1;
  }
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const topRatedMovies = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=${args.language}&page=${args.page}`,
    );

    return topRatedMovies.data;
  } catch (error) {
    throw error;
  }
};

exports.latestMovies = async (parents, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const latestMovies = await axios.get(
      `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=${args.language}`,
    );

    return latestMovies.data;
  } catch (error) {
    throw error;
  }
};

exports.moviesDetail = async (parents, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const moviesDetail = await axios.get(
      `https://api.themoviedb.org/3/movie/${args.movieId}?api_key=${API_KEY}&language=${args.language}`,
    );

    return moviesDetail.data;
  } catch (error) {
    throw error;
  }
};

exports.moviesCredit = async (parents, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const moviesCredit = await axios.get(
      `https://api.themoviedb.org/3/${args.movieOrTv}/${args.movieOrTvId}/credits?api_key=${API_KEY}&language=${args.language}`,
    );
    // console.log(moviesCredit.data);
    return moviesCredit.data;
  } catch (error) {
    throw error;
  }
};

exports.collectionDetails = async (parents, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const collection = await axios.get(
      `https://api.themoviedb.org/3/collection/${args.collectionId}?api_key=${API_KEY}&language=${args.language}`,
    );

    return collection.data;
  } catch (error) {
    throw error;
  }
};

exports.discoverMovie = async (parent, args, context, info) => {
  if (args.input.language === undefined) {
    args.input.language = 'en-US';
  }
  if (args.input.page === undefined) {
    args.input.page = 1;
  }
  const params = {
    language: args.input.language,
    region: args.input.region,
    sort_by: args.input.sort_by,
    certification_country: args.input.certification_country,
    certification: args.input.certification,
    'certification.lte': args.input.certificationLte,
    'certification.gte': args.input.certificationGte,
    include_adult: args.input.include_adult,
    include_video: args.input.include_video,
    page: args.input.page,
    primary_release_year: args.input.primary_release_year,
    'primary_release_date.gte': args.input.primary_release_dateGte,
    'primary_release_date.lte': args.input.primary_release_dateLte,
    'release_date.gte': args.input.release_dateGte,
    'release_date.lte': args.input.release_dateLte,
    with_release_type: args.input.with_release_type,
    year: args.input.year,
    'vote_count.gte': args.input.vote_countGte,
    'vote_count.lte': args.input.vote_countLte,
    'vote_average.gte': args.input.vote_averageGte,
    'vote_average.lte': args.input.vote_averageLte,
    with_cast: args.input.with_cast,
    with_crew: args.input.with_crew,
    with_people: args.input.with_people,
    with_companies: args.input.with_companies,
    with_genres: args.input.with_genres,
    without_genres: args.input.without_genres,
    'with_runtime.gte': args.input.with_runtimeGte,
    'with_runtime.lte': args.input.with_runtimeLte,
    with_original_language: args.input.with_original_language,
  };
  try {
    const discoverMovie = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
      {
        params,
      },
    );
    // console.log(args.input);
    // console.log(discoverMovie.config.params);
    // console.log(discoverMovie.request.res.responseUrl);
    return discoverMovie.data;
  } catch (error) {
    throw error;
  }
};
