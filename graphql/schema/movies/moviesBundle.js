const { popMoviesSchema } = require('./popularMovies.js');
const { nowPlayMovSchema } = require('./nowPlaying.js');
const { topRatedSchema } = require('./topRated.js');
const { latestSchema } = require('./latestMovies.js');
const { moviesSchema } = require('./moviesDetail.js');
const { collectionSchema } = require('./collectionDetail.js');
const { moviesCreditSchema } = require('./moviesCredit.js');
const { movieDiscoverSchema } = require('./movieDiscover.js');

exports.movieSchemaBundle = `
input DiscoverMovieInput {
    language: String
    region: String
    sort_by: String
    certification_country: String
    certification: String
    certificationLte: String
    certificationGte: String
    include_adult: Boolean
    include_video: Boolean
    page: Int
    primary_release_year: Int
    primary_release_dateGte: String
    primary_release_dateLte: String
    release_dateGte: String
    release_dateLte: String
    with_release_type: Int
    year: Int
    vote_countGte: Int
    vote_countLte: Int
    vote_averageGte: Float
    vote_averageLte: Float
    with_cast: String
    with_crew: String
    with_people: String
    with_companies: String
    with_genres: String
    without_genres: String
    with_runtimeGte: Int
    with_runtimeLte: Int
    with_original_language: String
}

    ${popMoviesSchema}
    ${nowPlayMovSchema}
    ${topRatedSchema}
    ${latestSchema}
    ${moviesSchema}
    ${collectionSchema}
    ${moviesCreditSchema}
    ${movieDiscoverSchema}
`;
