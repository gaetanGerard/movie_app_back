exports.networksSchema = `
"""
    Networks fetch data from the API for networks
        One parameter Required
            networksId => Int
"""
    type Network {
        headquarters: String!
        homepage: String!
        id: Int!
        name: String!
        origin_country: String!
    }
`;
