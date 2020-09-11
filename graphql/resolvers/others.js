const axios = require('axios');

const API_KEY = process.env.TMDB_API_KEY;

exports.genre = async (parents, args, context, info) => {
  if (args.language === undefined) {
    args.language = 'en-US';
  }
  if (args.movieOrTv === undefined) {
    args.movieOrTv = 'movie';
  }
  //   console.log(args.movieOrTv);
  try {
    const genreMoviesAndSeries = await axios.get(
      `https://api.themoviedb.org/3/genre/${args.movieOrTv}/list?api_key=${API_KEY}&language=${args.language}`,
    );
    return genreMoviesAndSeries.data;
  } catch (error) {
    throw error;
  }
};

exports.certificationsMovies = async () => {
  try {
    const certifs = await axios.get(
      `https://api.themoviedb.org/3/certification/movie/list?api_key=${API_KEY}`,
    );
    // console.log(certifs.data);
    return certifs.data.certifications;
  } catch (error) {
    throw error;
  }
};

exports.certificationsSeries = async () => {
  try {
    const certifs = await axios.get(
      `https://api.themoviedb.org/3/certification/tv/list?api_key=${API_KEY}`,
    );
    // console.log(certifs.data.certifications);
    return certifs.data.certifications;
  } catch (error) {
    throw error;
  }
};

exports.companies = async (parents, args, context, info) => {
  try {
    const company = await axios.get(
      `https://api.themoviedb.org/3/company/${args.companyId}?api_key=${API_KEY}`,
    );
    return company.data;
  } catch (error) {
    throw error;
  }
};

exports.networks = async (parents, args, context, info) => {
  try {
    const network = await axios.get(
      `https://api.themoviedb.org/3/network/${args.networksId}?api_key=${API_KEY}`,
    );
    return network.data;
  } catch (error) {
    throw error;
  }
};

exports.trendings = async (parents, args, context, info) => {
  if (args.mediaType === undefined) {
    args.mediaType = 'all';
  }
  if (args.timeWindow === undefined) {
    args.timeWindow = 'day';
  }
  try {
    const trending = await axios.get(
      `https://api.themoviedb.org/3/trending/${args.mediaType}/${args.timeWindow}?api_key=${API_KEY}`,
    );
    // console.log(trending.data);
    return trending.data;
  } catch (error) {
    throw error;
  }
};

exports.people = async (parents, args, context, info) => {
  if (args.language === undefined) {
    args.mediaType = 'en-US';
  }
  try {
    const people = await axios.get(
      `https://api.themoviedb.org/3/person/${args.peopleId}?api_key=${API_KEY}&language=${args.language}`,
    );
    // console.log(people.data);
    return people.data;
  } catch (error) {
    throw error;
  }
};

exports.peopleMovieCredit = async (parents, args, context, info) => {
  if (args.language === undefined) {
    args.mediaType = 'en-US';
  }
  try {
    const peopleMovieCredit = await axios.get(
      `https://api.themoviedb.org/3/person/${args.peopleId}/movie_credits?api_key=${API_KEY}&language=${args.language}`,
    );
    // console.log(people.data);
    return peopleMovieCredit.data;
  } catch (error) {
    throw error;
  }
};

exports.peopleSerieCredit = async (parents, args, context, info) => {
  if (args.language === undefined) {
    args.mediaType = 'en-US';
  }
  try {
    const peopleSerieCredit = await axios.get(
      `https://api.themoviedb.org/3/person/${args.peopleId}/tv_credits?api_key=${API_KEY}&language=${args.language}`,
    );
    // console.log(peopleSerieCredit.data);
    return peopleSerieCredit.data;
  } catch (error) {
    throw error;
  }
};
