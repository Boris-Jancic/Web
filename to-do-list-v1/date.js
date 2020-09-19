
exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  // Generates a string from the current date
  return today.toLocaleDateString("en-US", options)
}

exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  // Generates a string from the current date
  return today.toLocaleDateString("en-US", options);
}
