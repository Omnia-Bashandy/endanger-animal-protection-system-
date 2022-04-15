import React, { Component } from "react";
import Checkbox from "./Checkbox";
import ProductList from "./ProductsList";
import { productsList } from "./data.json";
import "./styles.css";

export default class Monitoring extends Component {
  state = {
    products: productsList,
    categories: {
      s: false,
      a: false,
      b: false,
      c: false,
      d: false,
      z: false,
      f: false
    }
  };

  handleChange = e => {
    const { name } = e.target;

    this.setState(prevState => {
      return {
        categories: {
          ...prevState.categories,
          [name]: !prevState.categories[name]
        }
      };
    });
  };

  render() {
    const checkedProducts = Object.entries(this.state.categories)
      .filter(category => category[1])
      .map(category => category[0]);
    const filteredProducts = this.state.products.filter(({ category }) =>
      checkedProducts.includes(category)
    );

    return (
      <div className="Monitoring">

        <div id="all">

          <div id="contenar_titel_first">
            <i class="fas fa-bars" id="burger"></i>
            <div id="triangle"></div>
            <h2 id="title">CHECKBOX</h2>
          </div>
          <div id="ch_list">

            <Checkbox
              id="0"
              title="STREAM VIDEO"
              name="s"
              handleChange={this.handleChange}
              checked={this.state.categories.s}
            />

            <Checkbox
              id="1"
              title="Temperature"
              name="a"
              checked={this.state.categories.a}
              handleChange={this.handleChange}
            />
            <Checkbox
              id="2"
              title="Air Purity"
              name="b"
              handleChange={this.handleChange}
              checked={this.state.categories.b}
            />
            <Checkbox
              id="3"
              title="Air Humidity"
              name="c"
              handleChange={this.handleChange}
              checked={this.state.categories.c}
            />

            <Checkbox
              id="4"
              title="Heart Rate"
              name="d"
              handleChange={this.handleChange}
              checked={this.state.categories.d}
            />
            <Checkbox
              id="5"
              title="Animal Temperature"
              name="z"
              handleChange={this.handleChange}
              checked={this.state.categories.z}
            />

            <Checkbox
              id="6"
              title="Oximeter"
              name="f"
              handleChange={this.handleChange}
              checked={this.state.categories.f}
            />

          </div>
        </div>

        <ProductList
          products={
            filteredProducts.length === 8
              ? this.state.products
              : filteredProducts
          }
        />
      </div>
    );
  }
}
