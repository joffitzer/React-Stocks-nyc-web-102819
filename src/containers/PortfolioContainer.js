import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    let portfolioStocks = this.props.allStocks.filter(stock => (stock.inPortfolio === true))

    let portfolioStocksArray = portfolioStocks.map(stock => 
      < Stock key={stock.id} 
      stock={stock} 
      handleBuyClick={this.props.handleBuyClick}
      />)

    return (
      <div>
        <h2>My Portfolio</h2>
          {portfolioStocksArray}
      </div>
    );
  }

}

export default PortfolioContainer;
