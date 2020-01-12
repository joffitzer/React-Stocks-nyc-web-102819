import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    
    let stocksArray = this.props.allStocks.map(stockObj => 
      < Stock key={stockObj.id} 
      stock={stockObj} 
      inPortfolio={this.props.inPortfolio}
      handleBuyClick={this.props.handleBuyClick}
      />)

    return (
      <div>
        <h2>Stocks</h2>
        {stocksArray}
      </div>
    );
  }

}

export default StockContainer;
