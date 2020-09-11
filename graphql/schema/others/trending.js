exports.trendingSchema = `
"""
    Trending fetch data from the API for trending
        Two parameter Optional
            mediaType => String
                default value: all
                possible value: all / movie / tv / person
            timeWindow => String
                default value: day
                possible value: day / week
"""

    type Trending {
        page: Int!
        results : [TrendingResponse]
        total_pages: Int!
        total_results: Int!
    }

    type TrendingResponse {
        poster_path: String
        adult: Boolean
        overview: String
        release_date: String
        genre_ids: [Int]
        id: Int
        original_title: String
        original_language: String
        title: String
        backdrop_path: String
        popularity: Float
        vote_count: Int
        video: Boolean
        vote_average: Float
    }
`;
