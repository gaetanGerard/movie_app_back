exports.discoverTvSchema = `
"""
    At least one argument is required for perform search even an empty string
"""
    type DiscoverTv {
        page: Int!
        results: [DiscoverTvResult!]!
        total_results: Int
        total_pages: Int!
    }

    type DiscoverTvResult {
        poster_path: String
        popularity: Float!
        id: Int
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
