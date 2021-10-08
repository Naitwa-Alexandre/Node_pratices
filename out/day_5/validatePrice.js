const validatePrice = (price) => {
  if (!price) return 'A price must be added';
  if (typeof price !== 'number') return 'The price must be a number';
  if (price <= 0) return 'The price must be greater than 0';
}

module.exports = validatePrice;