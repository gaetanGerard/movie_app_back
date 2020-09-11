exports.searchCompaniesSchema = `
    type SearchCompanies {
        page: Int!
        results: [ResultsCompanies!]!
        total_pages: Int!
        total_results: Int!
    }

    type ResultsCompanies {
        id: Int!
        logo_path: String
        name: String!
    }
`;
