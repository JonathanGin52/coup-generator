const SEED_LENGTH = 5;

const RANGE = {
  MINIMUM: 0,
  MAXIMUM: 4,
};

const ERROR = {
  RANGE: `First three digits of seed must be less than ${RANGE.MAXIMUM}.`,
  PARSE: `Seed must contain only digits.`,
  LENGTH: `Seed must be ${SEED_LENGTH} digits long.`,
  DUPLICATION: `Last two digits of seed cannot be the same.`,
};

module.exports = { SEED_LENGTH, RANGE, ERROR };
