exports.genreMoviesAndSeriesSchema = `
"""
    Genres fetch data from the API for genre movies OR Series
        One parameter Optional
            language => String
                default value: en-EN
                possible value: any ISO 639-1
        One parameter require
            movieOrTV => String
                default value: movie
                possible value: movie / tv
"""
    type GenreMoviesAndSeries {
        genres: [GenreType!]!
    }

    type GenreType {
        id: Int!
        name: String!
    }
`;
