import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/showProducts';

const styleCardTitle = {
  display: 'block',
  with: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)'
}
class Main extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }
  render() {  
    const products = this.props.products;
    return (
        products.map(product => (
        <div className="col s4" key={product.id} style={{height: '600px', marginBottom: '30px'}}>
          <div className="card">
            <div className="card-image">
              <img src={product.images[0].url} alt={product.images[0].alt}/>
              <span className="card-title" style={styleCardTitle}>{product.name}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red" href="#!"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <p>{product.description}</p>
              <p className="item-flex"><i className="material-icons" >cloud</i>Price: {product.price}</p>
              <p className="item-flex"><i className="material-icons">cloud</i>Rating: {product.rating}</p>
            </div>
          </div>
        </div>
      ))
    )
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  }
};

export default connect(mapStateToProps, { fetchProducts })(Main);
