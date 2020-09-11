exports.searchCollectionsSchema = `
    type SearchCollections {
        page: Int!
        results: [ResultsCollections!]!
        total_pages: Int!
        total_results: Int!
    }

    type ResultsCollections {
        id: Int!
        backdrop_path: String
        name: String
        poster_path: String
    }
`;
