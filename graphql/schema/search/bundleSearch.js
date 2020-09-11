const { searchCompaniesSchema } = require('./searchCompanies.js');
const { searchCollectionsSchema } = require('./searchCollections.js');
const { searchMoviesSchema } = require('./searchMovies.js');
const { searchPeopleSchema } = require('./searchPeople.js');
const { searchTvSchema } = require('./searchTv.js');

exports.bundleSearchSchema = `
    input Search {
        language: String
        query: String
        page: Int
        include_adult: Boolean
        region: String
    }

    ${searchCompaniesSchema}
    ${searchCollectionsSchema}
    ${searchMoviesSchema}
    ${searchPeopleSchema}
    ${searchTvSchema}
`;
