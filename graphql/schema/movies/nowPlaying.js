const { moviesCommon } = require('./moviesCommon.js');

exports.nowPlayMovSchema = `
    type NowPlaying {
        page: Int!
        results: [NowPlayingMovies!]!
        dates: Dates!
        total_pages: Int!
        total_results: Int!
    }

    type Dates {
        maximum: String!
        minimum: String!
    }

    type NowPlayingMovies {
        ${moviesCommon}
    }
`;
