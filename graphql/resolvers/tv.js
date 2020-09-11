const axios = require('axios');

const API_KEY = process.env.TMDB_API_KEY;

exports.discoverTv = async (parent, args, context, info) => {
  try {
    const discoverSerie = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`,
      {
        language: args.input.language,
        sort_by: args.input.sort_by,
        'air_date.gte': args.input.air_dateGte,
        'air_date.lte': args.input.air_dateLte,
        'first_air_date.gte': args.input.first_air_dateGte,
        'first_air_date.lte': args.input.first_air_dateLte,
        first_air_date_year: args.input.first_air_date_year,
        page: args.input.page,
        timezone: args.input.timezone,
        'vote_average.gte': args.input.vote_averageGte,
        'vote_count.gte': args.input.vote_countGte,
        with_genres: args.input.with_genres,
        with_networks: args.input.with_networks,
        without_genres: args.input.without_genres,
        'with_runtime.gte': args.input.with_runtimeGte,
        'with_runtime.lte': args.input.with_runtimeLte,
        include_null_first_air_dates: args.input.include_null_first_air_dates,
        with_original_language: args.input.with_original_language,
        screened_theatrically: args.input.screened_theatrically,
        with_companies: args.input.with_companies,
      },
    );
    // console.log(args.input);
    // console.log(discoverSerie);
    // console.log(discoverSerie.request.res.responseUrl);
    return discoverSerie.data;
  } catch (error) {
    throw error;
  }
};

exports.tvDetail = async (parent, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const tvDetail = await axios.get(
      `https://api.themoviedb.org/3/tv/${args.tvId}?api_key=${API_KEY}&language=${args.language}`,
    );
    // console.log(args.input);
    // console.log(tvDetail);
    // console.log(tvDetail.request.res.responseUrl);
    return tvDetail.data;
  } catch (error) {
    throw error;
  }
};

exports.tvRecommendation = async (parent, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  if (args.page === undefined) {
    args.page = 1;
  }
  try {
    const tvRecommendation = await axios.get(
      `https://api.themoviedb.org/3/tv/${args.tvId}/recommendations?api_key=${API_KEY}&language=${args.language}&page=${args.page}`,
    );
    // console.log(args.input);
    // console.log(tvRecommendation);
    // console.log(tvRecommendation.request.res.responseUrl);
    return tvRecommendation.data;
  } catch (error) {
    throw error;
  }
};

exports.tvSimilar = async (parent, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  if (args.page === undefined) {
    args.page = 1;
  }
  try {
    const tvSimilar = await axios.get(
      `https://api.themoviedb.org/3/tv/${args.tvId}/similar?api_key=${API_KEY}&language=${args.language}&page=${args.page}`,
    );
    // console.log(args.input);
    // console.log(tvSimilar);
    // console.log(tvSimilar.request.res.responseUrl);
    return tvSimilar.data;
  } catch (error) {
    throw error;
  }
};

exports.tvLatest = async (parent, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const tvLatest = await axios.get(
      `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=${args.language}`,
    );
    // console.log(args.input);
    // console.log(tvLatest);
    // console.log(tvLatest.request.res.responseUrl);
    return tvLatest.data;
  } catch (error) {
    throw error;
  }
};

exports.tvAiringToday = async (parent, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  if (args.page === undefined) {
    args.page = 1;
  }
  try {
    const tvAiringToday = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=${args.language}&page=${args.page}`,
    );
    // console.log(args.input);
    // console.log(tvAiringToday);
    // console.log(tvAiringToday.request.res.responseUrl);
    return tvAiringToday.data;
  } catch (error) {
    throw error;
  }
};

exports.tvOnTheAir = async (parent, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  if (args.page === undefined) {
    args.page = 1;
  }
  try {
    const tvOnTheAir = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=${args.language}&page=${args.page}`,
    );
    // console.log(args.input);
    // console.log(tvOnTheAir);
    // console.log(tvOnTheAir.request.res.responseUrl);
    return tvOnTheAir.data;
  } catch (error) {
    throw error;
  }
};

exports.tvPopular = async (parent, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  if (args.page === undefined) {
    args.page = 1;
  }
  try {
    const tvPopular = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${args.language}&page=${args.page}`,
    );
    // console.log(args.input);
    // console.log(tvPopular);
    // console.log(tvPopular.request.res.responseUrl);
    return tvPopular.data;
  } catch (error) {
    throw error;
  }
};

exports.tvTopRated = async (parent, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  if (args.page === undefined) {
    args.page = 1;
  }
  try {
    const tvTopRated = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=${args.language}&page=${args.page}`,
    );
    // console.log(args.input);
    // console.log(tvTopRated);
    // console.log(tvTopRated.request.res.responseUrl);
    return tvTopRated.data;
  } catch (error) {
    throw error;
  }
};

exports.tvSeasonsDetail = async (parent, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const tvSeasonsDetail = await axios.get(
      `https://api.themoviedb.org/3/tv/${args.input.tvId}/season/${args.input.seasonNumber}?api_key=${API_KEY}&language=${args.language}`,
    );
    // console.log(args.input);
    // console.log(tvSeasonsDetail);
    // console.log(tvSeasonsDetail.request.res.responseUrl);
    return tvSeasonsDetail.data;
  } catch (error) {
    throw error;
  }
};

exports.tvEpisodesDetail = async (parent, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  try {
    const tvEpisodesDetail = await axios.get(
      `https://api.themoviedb.org/3/tv/${args.input.tvId}/season/${args.input.seasonNumber}/episode/${args.input.episodeNumber}?api_key=${API_KEY}&language=${args.language}`,
    );
    // console.log(args.input);
    // console.log(tvEpisodesDetail);
    // console.log(tvEpisodesDetail.request.res.responseUrl);
    return tvEpisodesDetail.data;
  } catch (error) {
    throw error;
  }
};
