const SEED_LENGTH = 5;
const RANGE_MINIMUM = 0;
const RANGE_MAXIMUM = 4;

const ERROR = {
  RANGE: `First three digits of seed must be less than ${RANGE_MAXIMUM}.`,
  PARSE: `Seed must contain only digits.`,
  LENGTH: `Seed must be ${SEED_LENGTH} digits long.`,
  DUPLICATION: `Last two digits of seed cannot be the same.`,
}

module.exports = { SEED_LENGTH, RANGE_MINIMUM, RANGE_MAXIMUM, ERROR };
