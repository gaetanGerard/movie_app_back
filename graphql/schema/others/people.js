exports.peopleSchema = `
"""
    People fetch data from the API for people
        One parameter Optional
            language => String
                default: "en-EN"
                posible value: could be any ISO 639-1
        One parameter Required
            peopleId => Int
"""
    type People {
        birthday: String
        known_for_departmenent: String!
        deathday: String
        id: Int!
        name: String!
        also_known_as: [String]
        gender: Int!
        biography: String!
        popularity: Float!
        place_of_birth: String
        profile_path: String
        adult: Boolean
        imdb_id: String!
        homepage: String
    }

"""
    PeopleMovieCredit fetch data from the API for people in movie
        One parameter Optional
            language => String
                default: "en-EN"
                posible value: could be any ISO 639-1
        One parameter Required
            peopleId => Int
"""

    type PeopleMovieCredit {
        cast: [CastMovie!]!
        crew: [CrewMovie!]!
        id: Int!
    }

"""
    PeopleSerieCredit fetch data from the API for people in Serie
        One parameter Optional
            language => String
                default: "en-EN"
                posible value: could be any ISO 639-1
        One parameter Required
            peopleId => Int
"""

    type PeopleSerieCredit {
        cast: [CastSerie!]!
        crew: [CrewSerie!]!
        id: Int!
    }

    type CastMovie {
        character: String!
        credit_id: String!
        release_date: String!
        vote_count: Int!
        video: Boolean
        adult: Boolean
        vote_average: Float!
        title: String!
        genre_ids: [Int!]!
        original_language: String!
        original_title: String!
        popularity: Float!
        id: Int!
        backdrop_path: String
        overview: String!
        poster_path: String
    }

    type CrewMovie {
        id: Int!
        department: String!
        original_language: String!
        original_title: String!
        job: String!
        overview: String!
        vote_count: String!
        video: Boolean
        poster_path: String
        backdrop_path: String
        title: String
        popularity: Float
        genre_ids: [Int!]!
        vote_average: Float!
        adult: Boolean
        release_date: String!
        credit_id: String!
    }

    type CastSerie {
        credit_id: Int!
        original_name: String!
        id: Int!
        genre_ids: [Int!]!
        character: String!
        name: String!
        poster_path: String
        vote_count: Int!
        vote_average: Float!
        popularity: Float!
        episode_count: Int!
        original_language: String!
        first_air_date: String!
        backdrop_path: String
        overview: String!
        origin_country: [String!]!
    }

    type CrewSerie {
        id: Int!
        department: String!
        original_language: String!
        episode_count: Int!
        job: String!
        overview: String!
        origin_country: [String!]!
        original_name: String!
        genre_ids: [Int!]!
        name: String!
        first_air_date: String!
        backdrop_path: String
        popularity: Float!
        vote_count: Int!
        vote_average: Float!
        poster_path: String
        credit_id: String!
    }
`;
