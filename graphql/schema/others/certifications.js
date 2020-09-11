exports.certificationsSchema = `
"""
    Certifications fetch data from the API for certifications for Series OR Movies
        No parameter Required
"""
    type Certification {
        certification: String!
        meaning: String!
        order: Int!
    }

    type CertificationsMovies {
        US: [Certification!]!
        CA: [Certification!]!
        AU: [Certification!]!
        DE: [Certification!]!
        FR: [Certification!]!
        NZ: [Certification!]!
        IN: [Certification!]!
        GB: [Certification!]!
        NL: [Certification!]!
        BR: [Certification!]!
        FI: [Certification!]!
        BG: [Certification!]!
        ES: [Certification!]!
        PT: [Certification!]!
        MY: [Certification!]!
        SE: [Certification!]!
        DK: [Certification!]!
        NO: [Certification!]!
        HU: [Certification!]!
        LT: [Certification!]!
        RU: [Certification!]!
        PH: [Certification!]!
        IT: [Certification!]!
    }

    type CertificationsSeries {
        US: [Certification!]!
        CA: [Certification!]!
        AU: [Certification!]!
        FR: [Certification!]!
        RU: [Certification!]!
        DE: [Certification!]!
        TH: [Certification!]!
        KR: [Certification!]!
        GB: [Certification!]!
        BR: [Certification!]!
        NL: [Certification!]!
        PT: [Certification!]!
        HU: [Certification!]!
        LT: [Certification!]!
        PH: [Certification!]!
        ES: [Certification!]!
        SK: [Certification!]!
    }
`;
