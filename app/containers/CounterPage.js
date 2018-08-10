import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';
import * as StockActions from '../actions/stock';

function mapStateToProps(state) {
	console.log('new STATE', state)
  return {
    counter: state.counter,
    stocks: state.stocks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...StockActions, ...CounterActions }, dispatch);

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
