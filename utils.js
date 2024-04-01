const Utils = {
  handleInputValidation: (strings) => {
    let result = true;
    strings.forEach((i) => {
      if (isNaN(parseInt(i).toFixed(0))) {
        result = false;
      }
    });
    return result;
  },
};

module.exports = Utils;
