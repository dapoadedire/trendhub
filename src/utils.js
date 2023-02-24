export const formatCurrency = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

// The Intl.NumberFormat object helps to format the currency. Learn about it https://docs.w3cub.com/javascript/global_objects/intl/numberformat



export function capitalizeSentence(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  // Loop through each word in the array and capitalize the first letter
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back into a sentence and return it
  return capitalizedWords.join(" ");
}
