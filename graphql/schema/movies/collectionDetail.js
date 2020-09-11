exports.collectionSchema = `
"""
    Collection fetch data from the API for Collection of movies
        One parameter Optional
            language => String
                default value: en-EN
                possible value: any ISO 639-1
        One parameter require
            CollectionId => Int
                default value: no default
                possible value: any collection Id
"""
    type CollectionDetail {
        id: Int!
        name: String!
        overview: String!
        poster_path: String
        backdrop_path: String!
        parts: [Parts!]!
    }

    type Parts {
        adult: Boolean
        backdrop_path: String
        genre_ids: [Genre]
        id: Int!
        original_language: String!
        original_title: String!
        overview: String!
        release_date: String!
        poster_path: String!
        popularity: Float!
        title: String!
        video: Boolean
        vote_average: Float!
        vote_count: Int!
    }
`;
