const axios = require('axios');

const API_KEY = process.env.TMDB_API_KEY;

exports.searchCompanies = async (parents, args, context, info) => {
  if (args.input.language === undefined) {
    args.input.language = 'en-US';
  }
  if (args.input.page === undefined) {
    args.input.page = 1;
  }
  const params = {
    language: args.input.language,
    query: args.input.query,
    page: args.input.page,
    include_adult: args.input.include_adult,
    region: args.input.region,
  };
  try {
    const searchCompanies = await axios.get(
      `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}`,
      {
        params,
      },
    );
    // console.log(args.input);
    // console.log(discoverMovie.config.params);
    // console.log(searchCompanies.data);
    return searchCompanies.data;
  } catch (error) {
    throw error;
  }
};

exports.searchCollections = async (parents, args, context, info) => {
  if (args.input.language === undefined) {
    args.input.language = 'en-US';
  }
  if (args.input.page === undefined) {
    args.input.page = 1;
  }
  const params = {
    language: args.input.language,
    query: args.input.query,
    page: args.input.page,
    include_adult: args.input.include_adult,
    region: args.input.region,
  };
  try {
    const searchCollections = await axios.get(
      `https://api.themoviedb.org/3/search/collection?api_key=${API_KEY}`,
      {
        params,
      },
    );
    // console.log(args.input);
    // console.log(searchCollections.config.params);
    // console.log(searchCollections.data);
    return searchCollections.data;
  } catch (error) {
    throw error;
  }
};

exports.searchMovies = async (parents, args, context, info) => {
  if (args.input.language === undefined) {
    args.input.language = 'en-US';
  }
  if (args.input.page === undefined) {
    args.input.page = 1;
  }
  const params = {
    language: args.input.language,
    query: args.input.query,
    page: args.input.page,
    include_adult: args.input.include_adult,
    region: args.input.region,
  };
  try {
    const searchMovies = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`,
      {
        params,
      },
    );
    // console.log(args.input);
    // console.log(searchMovies.config.params);
    // console.log(searchMovies.data);
    return searchMovies.data;
  } catch (error) {
    throw error;
  }
};

exports.searchTv = async (parents, args, context, info) => {
  if (args.input.language === undefined) {
    args.input.language = 'en-US';
  }
  if (args.input.page === undefined) {
    args.input.page = 1;
  }
  const params = {
    language: args.input.language,
    query: args.input.query,
    page: args.input.page,
    include_adult: args.input.include_adult,
    region: args.input.region,
  };
  try {
    const searchTv = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}`,
      {
        params,
      },
    );
    // console.log(args.input);
    // console.log(discoverMovie.config.params);
    //   console.log(searchTv.data);
    return searchTv.data;
  } catch (error) {
    throw error;
  }
};

exports.searchPeople = async (parents, args, context, info) => {
  if (args.input.language === undefined) {
    args.input.language = 'en-US';
  }
  if (args.input.page === undefined) {
    args.input.page = 1;
  }
  const params = {
    language: args.input.language,
    query: args.input.query,
    page: args.input.page,
    include_adult: args.input.include_adult,
    region: args.input.region,
  };
  try {
    const discoverMovie = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}`,
      {
        params,
      },
    );
    // console.log(args.input);
    // console.log(discoverMovie.config.params);
    // console.log(discoverMovie.data.known_for);
    return discoverMovie.data;
  } catch (error) {
    throw error;
  }
};
