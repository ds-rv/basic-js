const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  // trying to apply toJSON() method to the date in order
  // to check whether it's fake
  try {
    let json = date.toJSON();
  } catch (e) {
    throw new Error("Invalid date!");
  }

  if (
    Object.prototype.toString.call(date) === "[object Date]" &&
    typeof date.setDate === "function"
  ) {
    let seasons = [
      "winter",
      "winter",
      "spring",
      "spring",
      "spring",
      "summer",
      "summer",
      "summer",
      "autumn",
      "autumn",
      "autumn",
      "winter",
    ];
    return seasons[date.getMonth()];
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
