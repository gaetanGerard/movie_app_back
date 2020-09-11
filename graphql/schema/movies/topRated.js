const { moviesCommon } = require('./moviesCommon');

exports.topRatedSchema = `
    type TopRated {
        page: Int!
        results: [TopRatedMovies!]!
        total_results: Int!
        total_pages: Int!
    }

    type TopRatedMovies {
        ${moviesCommon}
    }
`;
