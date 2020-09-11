exports.moviesSchema = `
"""
    Movies fetch data from the API for movies detail
        One parameter Optional
            language => String
                default value: en-EN
                possible value: any ISO 639-1
        One parameter require
            movieId => Int
                default value: no value
                possible value: any movie
"""
    type MoviesDetail {
        adult: Boolean
        backdrop_path: String
        belongs_to_collection: Collection
        budget: Int!
        genres: [Genre!]!
        homepage: String
        id: Int!
        imdb_id: String
        original_language: String!
        original_title: String!
        overview: String
        popularity: Int!
        poster_path: String
        production_companies: [ProductionCompanies!]
        production_countries: [ProductionCountries!]
        release_date: String!
        revenue: Int!
        runtime: Int
        spoken_languages: [SpokenLanguages!]
        status: String!
        tagline: String
        title: String!
        video: Boolean
        vote_average: Float!
        vote_count: Int!
    }

    type Collection {
        id: Int!
        name: String!
        poster_path: String
        backdrop_path: String
    }
`;
