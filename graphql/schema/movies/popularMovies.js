const { moviesCommon } = require('./moviesCommon');

exports.popMoviesSchema = `
    type Popular {
        page: Int!
        results: [PopularMovies!]!
        total_results: Int!
        total_pages: Int!
    }

    type PopularMovies {
        ${moviesCommon}
    }
`;
