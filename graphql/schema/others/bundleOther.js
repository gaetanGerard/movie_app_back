const { genreMoviesAndSeriesSchema } = require('./genreMoviesAndSeries.js');
const { certificationsSchema } = require('./certifications.js');
const { companiesSchema } = require('./companies.js');
const { networksSchema } = require('./networks.js');
const { trendingSchema } = require('./trending.js');
const { peopleSchema } = require('./people.js');

exports.bundleOtherSchema = `
    ${genreMoviesAndSeriesSchema}
    ${certificationsSchema}
    ${companiesSchema}
    ${networksSchema}
    ${trendingSchema}
    ${peopleSchema}
`;
