import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }
  componentWillMount() {
    const query = `query categories {
      categories {
        id
        name       
      }
    }`;

    fetch('https://nordic-shop-api.herokuapp.com/', {
    credentials: 'omit',
    headers: {
      authorization: 'TAI',
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      variables: {},
      query: query,
    }),
    method: 'POST',
    mode: 'cors',
  })
    .then((response) => response.json())
    .then(data => this.setState({
      categories: data.data.categories
    }))
    .catch(err => {
      console.log(err);
    })

  }
  render() {
    const { categories } = this.state;
    return (
      <aside>
        <ul className="collection with-header">
          <li className="collection-header center"><h4>Categories</h4></li>
          {
            categories.map((cat) => (
              <Link to={cat.name} className="collection-item" key={cat.id} onClick={this.renderCat}>
                {cat.name}
                <i className="material-icons right">add</i>
              </Link>
            ))
          }
        </ul>
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </aside>
    )
  }
}
export default Sidebar;
