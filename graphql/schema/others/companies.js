exports.companiesSchema = `
"""
    Companies fetch data from the API for companies
        One parameter Required
            companyId => Int
"""
    type Companies {
        description: String!
        headquarters: String!
        homepage: String!
        id: Int!
        logo_path: String!
        name: String!
        origin_country: String!
    }
`;
