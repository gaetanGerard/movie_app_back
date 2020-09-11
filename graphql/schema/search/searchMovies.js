exports.searchMoviesSchema = `
    type SearchMovies {
        page: Int!
        results: [ResultsMovies!]!
        total_pages: Int!
        total_results: Int!
    }

    type ResultsMovies {
        poster_path: String
        adult: Boolean
        overview: String!
        release_date: String!
        genre_ids: [Int!]!
        id: Int!
        original_title: String!
        original_language: String!
        title: String!
        backdrop_path: String
        popularity: Float!
        vote_count: Int!
        video: Boolean
        vote_average: Float!
    }
`;
