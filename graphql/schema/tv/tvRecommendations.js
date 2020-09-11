exports.tvRecommendationsSchema = `
"""
    TvRecommendations fetch data from the API for tv recommendations
        One parameter Optional
            language => String
                default value: en-EN
                possible value: any ISO 639-1
        One parameter require
            tvId => Int
                default value: no value
                possible value: any tv id
"""

    type TvRecommendations {
        page: Int!
        results: [TvRecomm!]!
        total_pages: Int!
        total_results: Int!
    }

    type TvRecomm {
        poster_path: String!
        popularity: Float!
        id: Int!
        backdrop_path: String
        vote_average: Float
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
