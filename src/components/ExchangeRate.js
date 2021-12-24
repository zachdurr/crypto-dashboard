const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    return (
      <div className="exchange-rate">
        <h3>Exchange Rate:</h3>
        <h2>{exchangeRate}</h2>
        <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
      </div>
    )
  }
  
  export default ExchangeRate;
  