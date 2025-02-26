# Built with React + Vite


 * The App component is a currency converter application built with React.
 * It allows users to convert an amount from one currency to another.
   
 * State Variables:
    - from: The currency code of the currency to convert from.
    - to: The currency code of the currency to convert to.
    - amount: The amount of currency to convert.
    - convertedAmount: The result of the currency conversion.
  
 * Functions:
     - convert: Converts the amount from the 'from' currency to the 'to' currency using the exchange rate from currencyInfo.
    - swap: Swaps the 'from' and 'to' currencies and resets the amount and convertedAmount to 0.
  
 * Hooks:
    - useCurrencyInfo: Custom hook to fetch currency information for the 'from' currency.
  
 * Returns:
    - JSX to render the currency converter form with input fields for the 'from' and 'to' currencies, a swap button, and a convert button.
 
