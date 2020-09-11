exports.searchPeopleSchema = `

    type SearchPeople {
        page: Int!
        results: [ResultsPeople!]!
        total_pages: Int!
        total_results: Int!
    }

    type ResultsPeople {
        profile_path: String
        adult: Boolean
        id: Int!
        known_for : [MoviesOrSeries!]!
        name: String!
        popularity: Float!
    }

    type MoviesOrSeries {
        poster_path: String
        adult: Boolean
        overview: String
        release_date: String
        original_title: String
        genre_ids: [Int]
        id: Int
        media_type: String
        original_language: String
        title: String
        backdrop_path: String
        popularity: Float
        vote_count: Int
        video: Boolean
        vote_average: Float
        first_air_date: String
        origin_country: [String]
        name: String
    }
`;
