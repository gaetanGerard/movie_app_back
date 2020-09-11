exports.latestSchema = `
    type LatestMovies {
        adult: Boolean
        backdrop_path: String
        belongs_to_collection: String
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

    type Genre {
        id: Int!
        name: String!
    }

    type ProductionCompanies {
        id: Int!
        logo_path: String
        name: String!
        origin_country: String!
    }

    type ProductionCountries {
        iso_3166_1: String!
        name: String!
    }

    type SpokenLanguages {
        iso_639_1: String!
        name: String!
    }
`;
