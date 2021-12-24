const ExchangeRate = ({exchangedData}) => {
  return (
    <div className="exchange-rate">
      <h3>Exchange Rate:</h3>
      <h2>{exchangedData.exchangeRate}</h2>
      <p>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
    </div>
  )
}

export default ExchangeRate;