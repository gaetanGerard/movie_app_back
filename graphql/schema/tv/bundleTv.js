const { discoverTvSchema } = require('./discoverTv.js');
const { tvDetailSchema } = require('./tvDetail.js');
const { tvRecommendationsSchema } = require('./tvRecommendations.js');
const { tvSeasonsDetailSchema } = require('./tvSeasonsDetail');
const { tvEpisodesDetailSchema } = require('./tvEpisodesDetail.js');

exports.bundleTvSchema = `
    input DiscoverTvInput {
        language: String
        sort_by: String
        air_dateGte: String
        air_dateLte: String
        first_air_dateGte: String
        first_air_dateLte: String
        first_air_date_year: Int
        page: Int
        timezone: String
        vote_averageGte: Float
        vote_countGte: Int
        with_genres: String
        with_networks: String
        without_genres: String
        with_runtimeGte: Int
        with_runtimeLte: Int
        include_null_first_air_dates: Boolean
        with_original_language: String
        screened_theatrically: Boolean
        with_companies: String
    }

    input TvSeasons {
        tvId: Int
        seasonNumber: Int
    }

    input TvEpisodes {
        tvId: Int
        seasonNumber: Int
        episodeNumber: Int
    }

    ${discoverTvSchema}
    ${tvDetailSchema}
    ${tvRecommendationsSchema}
    ${tvSeasonsDetailSchema}
    ${tvEpisodesDetailSchema}
`;
