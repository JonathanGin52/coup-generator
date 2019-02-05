const SEED_LENGTH = 5;
const RANGE_MINIMUM = 0;
const RANGE_MAXIMUM = 4;

const RANGE_ERROR = `First three digits of seed must be less than ${RANGE_MAXIMUM}.`;
const PARSE_ERROR = `Seed must contain only digits.`;
const LENGTH_ERROR = `Seed must be ${SEED_LENGTH} digits long.`;
const DUPLICATION_ERROR = `Last two digits of seed cannot be the same.`;

module.exports = { SEED_LENGTH, RANGE_MINIMUM, RANGE_MAXIMUM, RANGE_ERROR, PARSE_ERROR, LENGTH_ERROR, DUPLICATION_ERROR };
