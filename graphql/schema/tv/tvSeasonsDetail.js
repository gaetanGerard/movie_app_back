exports.tvSeasonsDetailSchema = `
"""
    TvDetail fetch data from the API for tv detail
        One parameter Optional
            language => String
                default value: en-EN
                possible value: any ISO 639-1
        Two parameter require
            tvId => Int
                default value: no value
                possible value: any tv id
            seasonNumber => Int
                default value: no value
                possible value: Int
"""

    type TvSeasonsDetail {
        _id: String!
        air_date: String!
        episodes: [Episodes!]!
        name: String!
        overview: String!
        id: Int!
        poster_path: String
        season_number: Int!
    }

    type Episodes {
        air_date: String!
        crew: [TvSeasonsCrew!]!
        episode_number: Int!
        guest_stars: [GuestStars!]!
        name: String!
        overview: String!
        id: Int!
        production_code: String
        season_number: Int!
        still_path: String
        vote_average: Float!
        vote_count: Int!
    }

    type GuestStars {
        id: Int!
        name: String!
        credit_id: String!
        character: String
        order: Int
        profile_path: String
    }

    type TvSeasonsCrew {
        id: Int!
        credit_id: String!
        name: String!
        department: String!
        job: String!
        profile_path: String
    }

`;
