import React from 'react';
import ProductCard from './ProductCard';

class TeaGallery extends React.Component {
  render() {
    return (
      <div id="tea-gallery">
        <div className="content-warp">
          <div className="table-responsive">
            <h2 id="milkTea">Milk Tea</h2>
            <h5 style={{ display: "inline" }}><span className="badge bg-info">cold</span> /<span className="badge bg-warning text-dark">hot</span></h5>
            
            <table className="table table-hover table-borderless " style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ProductCard productType="milkTea" productId="bubbleTea" />
                  </td>
                  <td>
                    <ProductCard productType="milkTea" productId="redBeanTea" />
                  </td>
                  <td>
                    <ProductCard productType="milkTea" productId="cheeseTea" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 id="fruitTea">Fruit Tea</h2>
            <h5 style={{ display: "inline" }}><span className="badge bg-info">cold</span></h5>
              
            
            <table className="table table-hover table-borderless">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ProductCard productType="fruitTea" productId="mangoTea" />
                  </td>
                  <td>
                    <ProductCard productType="fruitTea" productId="berryTea" />
                  </td>
                  <td>
                    <ProductCard productType="fruitTea" productId="passionFruitTea" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 id="specialty">Specialty Drinks</h2>
            <h5 style={{ display: "inline" }}><span className="badge bg-info">cold</span></h5>
            
            <table className="table table-hover table-borderless">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ProductCard productType="specialtyDrinks" productId="matchaTea" />
                  </td>
                  <td>
                    <ProductCard productType="specialtyDrinks" productId="thaiTea" />
                  </td>
                  <td>
                    <ProductCard productType="specialtyDrinks" productId="smoothie" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TeaGallery;