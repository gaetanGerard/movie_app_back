exports.moviesCreditSchema = `
"""
    Credit fetch data from the API for credit movies OR Series
        One parameter Optional
            language => String
                default value: en-EN
                possible value: any ISO 639-1
        Two parameter require
            movieOrTv => String
                default value: movie
                possible value: movie / tv
            movieOrTvId => Int
                default value: no value
                possible value: any movie or series Id
"""
    type MoviesCredit {
        id: Int!
        cast: [Cast!]!
        crew: [Crew!]!
    }

    type Cast {
        cast_id: Int
        character: String!
        credit_id: String!
        gender: Int
        id: Int!
        name: String!
        order: Int!
        profile_path: String
    }

    type Crew {
        credit_id: String!
        department: String!
        gender: Int
        id: Int!
        job: String!
        name: String!
        profile_path: String
    }
`;
