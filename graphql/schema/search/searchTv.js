exports.searchTvSchema = `
    type SearchTv {
        page: Int!
        results: [ResultsTv!]!
        total_pages: Int!
        total_results: Int!
    }

    type ResultsTv {
        poster_path: String
        popularity: Float!
        id: Int!
        backdrop_path: String
        vote_average: Float!
        overview: String!
        first_air_date: String!
        origin_country: [String!]!
        genre_ids: [Int!]!
        original_language: String!
        vote_count: Int!
        name: String!
        original_name: String!
    }
`;
