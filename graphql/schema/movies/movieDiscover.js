exports.movieDiscoverSchema = `
"""
    At least one argument is required for perform search even an empty string
    DiscoverMovie fetch data from the API for discover movie can take alot of parameter !!!!
        One parameter Optional
            language => String
                default: "en-EN"
                posible value: could be any ISO 639-1
        One parameter Required
            peopleId => Int
"""

    type DiscoverMovies {
        page: Int!
        results: [DiscoverMovie!]!
        total_results: Int!
        total_pages: Int!
    }

    type DiscoverMovie {
        poster_path: String
        adult: Boolean
        overview: String!
        release_date: String
        genre_ids: [Int!]!
        id: Int!
        original_title: String!
        original_language: String!
        title: String!
        backdrop_path: String
        popularity: Float!
        video: Boolean
        vote_average: Float!
    }
`;
