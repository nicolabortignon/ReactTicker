import fetch from 'cross-fetch'

export const STOCK_UPDATE = 'STOCK_UPDATE';



export function getStock(stockSymbol = 'MSFT'){
	console.log('got')
	 return (dispatch) => {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+stockSymbol+'&apikey=demo')
      .then(response => response.json())
      .then(json => dispatch(updateStock(json)))
  }
}

export function updateStock(json) {
  return {
    type: STOCK_UPDATE,
    data: json
  };
}
