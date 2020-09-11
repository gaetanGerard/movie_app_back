exports.tvEpisodesDetailSchema = `
"""
    TvDetail fetch data from the API for tv detail
        One parameter Optional
            language => String
                default value: en-EN
                possible value: any ISO 639-1
        Three parameter require
            tvId => Int
                default value: no value
                possible value: any tv id
            seasonNumber => Int
                default value: no value
                possible value: Int
            episodeNumber => Int
                default value: no value
                possible value: Int
"""

    type TvEpisodesDetail {
        air_date: String
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
`;
