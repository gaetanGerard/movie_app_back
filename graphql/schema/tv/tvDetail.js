exports.tvDetailSchema = `
"""
    TvDetail fetch data from the API for tv detail
        One parameter Optional
            language => String
                default value: en-EN
                possible value: any ISO 639-1
        One parameter require
            tvId => Int
                default value: no value
                possible value: any tv id
"""

    type TvDetail {
        backdrop_path: String
        created_by: [CreatedBy!]!
        episode_run_time: [Int!]!
        first_air_date: String!
        genres: [TvGenre!]!
        homepage: String!
        id: Int!
        in_production: Boolean
        languages: [String!]!
        last_air_date: String!
        last_episode_to_air: LastEpisodeToAir
        name: String!
        next_episode_to_air: String
        networks: [tvNetworks!]!
        number_of_episodes: Int!
        number_of_seasons: Int!
        origin_country: [String!]!
        original_language: String!
        original_name: String!
        overview: String
        popularity: Float
        poster_path: String
        production_companies: [ProductionCompaniesForTV!]!
        seasons: [Seasons!]!
        status: String!
        type: String!
        vote_average: Float!
        vote_count: Int!
    }

    type CreatedBy {
        id: Int!
        credit_id: String!
        name: String!
        gender: Int!
        profile_path: String!
    }

    type TvGenre {
        id: Int!
        name: String!
    }

    type LastEpisodeToAir {
        air_date: String!
        episode_number: Int!
        id: Int!
        name: String!
        overview: String!
        production_code: String!
        season_number: Int!
        show_id: Int!
        still_path: String!
        vote_average: Float!
        vote_count: Int!
    }

    type tvNetworks {
        name: String!
        id: Int!
        logo_path: String!
        origin_country: String!
    }

    type ProductionCompaniesForTV {
        id: Int!
        logo_path: String
        name: String!
        origin_country: String!
    }

    type Seasons {
        air_date: String!
        episode_count: Int!
        id: Int!
        name: String!
        overview: String!
        poster_path: String!
        season_number: Int!
    }
`;
