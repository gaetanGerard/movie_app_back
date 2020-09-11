const { gql } = require('apollo-server');

const { movieSchemaBundle } = require('./movies/moviesBundle.js');
const { bundleOtherSchema } = require('./others/bundleOther.js');
const { bundleSearchSchema } = require('./search/bundleSearch.js');
const { bundleTvSchema } = require('./tv/bundleTv.js');

exports.typeDefs = gql`
  ${movieSchemaBundle}
  ${bundleOtherSchema}
  ${bundleSearchSchema}
  ${bundleTvSchema}

  type Query {
    popularMovies(page: Int, language: String): Popular
    nowPlayingMovies(page: Int, language: String): NowPlaying
    topRatedMovies(page: Int, language: String): TopRated
    latestMovies(language: String): LatestMovies
    upcomingMovies(page: Int, language: String): NowPlaying
    similarMovies(page: Int, language: String, movieId: Int): Popular
    recommendationMovies(page: Int, language: String, movieId: Int): Popular
    moviesDetail(language: String, movieId: Int): MoviesDetail
    collectionDetail(language: String, collectionId: Int): CollectionDetail
    credit(language: String, movieOrTv: String, movieOrTvId: Int): MoviesCredit
    genre(language: String, movieOrTv: String): GenreMoviesAndSeries
    certificationsMovies: CertificationsMovies
    certificationsSeries: CertificationsSeries
    companies(companyId: Int): Companies
    networks(networksId: Int): Network
    trending(mediaType: String, timeWindow: String): Trending
    people(language: String, peopleId: Int): People
    peopleMovieCredit(language: String, peopleId: Int): PeopleMovieCredit
    peopleSerieCredit(language: String, peopleId: Int): PeopleSerieCredit
    discoverMovie(input: DiscoverMovieInput): DiscoverMovies
    searchCompanies(input: Search): SearchCompanies
    searchCollections(input: Search): SearchCollections
    searchMovies(input: Search): SearchMovies
    searchTv(input: Search): SearchTv
    searchPeople(input: Search): SearchPeople
    discoverTv(input: DiscoverTvInput): DiscoverTv
    tvDetail(language: String, tvId: Int): TvDetail
    tvRecommendation(language: String, page: Int, tvId: Int): TvRecommendations
    tvSimilar(language: String, page: Int, tvId: Int): TvRecommendations
    tvLatest(language: String): TvDetail
    tvAiringToday(language: String, page: Int): TvRecommendations
    tvOnTheAir(language: String, page: Int): TvRecommendations
    tvPopular(language: String, page: Int): TvRecommendations
    tvTopRated(language: String, page: Int): TvRecommendations
    tvSeasonsDetail(input: TvSeasons, language: String): TvSeasonsDetail
    tvEpisodesDetail(input: TvEpisodes, language: String): TvEpisodesDetail
  }
`;
