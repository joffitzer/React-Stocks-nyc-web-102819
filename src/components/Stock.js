import React from 'react'

class Stock extends React.Component {

  render() {

    return(
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.stock.name}</h5>
            <p className="card-text">{this.props.stock.price}</p>
            <button onClick={() => this.props.handleBuyClick(this.props.stock.id)}>{this.props.stock.inPortfolio ? "Sell Stock" : "Buy Stock"}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stock
