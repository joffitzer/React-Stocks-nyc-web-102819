import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    everyStock: []
  }

  componentDidMount() {
    fetch ('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(allStocks => {
        this.setState({
          allStocks: allStocks,
          everyStock: allStocks
        })
      })
  }

  handleBuyClick = (stockId) => {
    let newStocks = this.state.allStocks.map(stock => {
      if (stock.id === stockId) {
        stock.inPortfolio = !stock.inPortfolio
      }
      return stock
    })

    this.setState({
      allStocks: newStocks
    })
  }

  handleSort = (selectedOption) => {
    if (selectedOption === 'Alphabetically') {
      let alphaStocks = this.state.allStocks.sort(function(a, b) {
        if (a.ticker < b.ticker) return -1;
        else if (a.ticker > b.ticker) return 1;
        return 0;
      })
      this.setState({
        allStocks: alphaStocks
    }) 
  } else if (selectedOption === 'Price') {
    let priceStocks = this.state.allStocks.sort(function(a, b) {
      if (a.price < b.price) return -1;
      else if (a.price > b.price) return 1;
      return 0;
    })
    this.setState({
        allStocks: priceStocks
      })
    }
  }

  handleFilter = (selectedOption) => {

    let everyStockCopy = [...this.state.everyStock]

    if (selectedOption === 'Tech') {
      let techStocks = everyStockCopy.filter(stock => (stock.type === selectedOption)) 
      this.setState({
        allStocks: techStocks
    }) 
    } else if (selectedOption === 'Finance') {
      let financeStocks = everyStockCopy.filter(stock => (stock.type === selectedOption)) 
        this.setState({
          allStocks: financeStocks
      })
    } else if (selectedOption === 'Sportswear') {
      let sportsStocks = everyStockCopy.filter(stock => (stock.type === selectedOption)) 
      this.setState({
        allStocks: sportsStocks
      })
    }
  }

  render() {

    return (
      <div>
        <SearchBar
        handleSort={this.handleSort}
        handleFilter={this.handleFilter}
        />
          <div className="row">
            <div className="col-8">

              <StockContainer 
              allStocks={this.state.allStocks} 
              handleBuyClick={this.handleBuyClick}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
              allStocks={this.state.allStocks}
              handleBuyClick={this.handleBuyClick}
              />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
