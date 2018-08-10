// @flow
import {STOCK_UPDATE} from '../actions/stock';

type actionType = {
  +type: string,
  data: object
};

export default function stocks(state: object = [], action: actionType) {
	console.log('Received action')
  switch (action.type) {
    case STOCK_UPDATE:
    	//action.data['Meta Data']['2. Symbol'])
    	let currentDate = new Date().toISOString().slice(0,10);
    	console.log(action.data['Time Series (Daily)'],action.data['Time Series (Daily)'][currentDate]['4. close'])
      return Object.assign({}, state, {
          [action.data['Meta Data']['2. Symbol']]: action.data['Time Series (Daily)'][currentDate]['4. close']
        })
    default:
      return state;
  }
}
