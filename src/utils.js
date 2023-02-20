export const formatCurrency = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

// The Intl.NumberFormat object helps to format the currency. Learn about it https://docs.w3cub.com/javascript/global_objects/intl/numberformat
