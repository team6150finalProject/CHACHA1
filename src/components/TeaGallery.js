import React from 'react';
import { Link } from 'react-router-dom'

class TeaGallery extends React.Component {
  render() {
    return (
      <div id="tea-gallery">
        <div className="content-warp">
          <div className="table-responsive">
            <h2 id="milkTea">Milk Tea
                    <h5 style={{ display: "inline" }}>
                <span className="badge bg-info">cold</span> /
                      <span className="badge bg-warning text-dark">hot</span>
              </h5>
            </h2>
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
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Bubble Milk Tea</h4>
                      </div>

                      <Link to='/bubbleTea' title="click to order">
                        <img className="tea" src={process.env.PUBLIC_URL + "/img/Bubble.png"} alt="#" />
                      </Link>

                    </div>
                  </td>
                  <td>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Red Bean Milk Tea</h4>
                      </div>

                      <a href="./menu/redBeanTea.html" title="click to order">
                        <img className="tea" src={process.env.PUBLIC_URL + "/img/Red%20Bean.png"} alt="#" />
                      </a>

                    </div>
                  </td>
                  <td>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Cheese Milk Tea</h4>
                      </div>

                      <a href="./menu/cheeseTea.html" title="click to order">
                        <img className="tea" src={process.env.PUBLIC_URL + "/img/Cheese.png"} alt="#" />
                      </a>

                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 id="fruitTea">Fruit Tea
                    <h5 style={{ display: "inline" }}>
                <span className="badge bg-info">cold</span>
              </h5>
            </h2>
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
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Mango Green Tea</h4>
                      </div>

                      <a href="./menu/mangoTea.html" title="click to order">
                        <img className="tea" src={process.env.PUBLIC_URL + "/img/Mango.png"} alt="#" />
                      </a>

                    </div>
                  </td>
                  <td>
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">Berry Red Tea</h4>

                      </div>

                      <a href="./menu/berryTea.html" title="click to order">
                        <img className="tea" src={process.env.PUBLIC_URL + "/img/Berry.png"} alt="#" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Passion Fruit QQ</h4>
                      </div>

                      <a href="./menu/passionFruitTea.html" title="click to order">
                        <img className="tea" src={process.env.PUBLIC_URL + "/img/Passion.png"} alt="#" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 id="specialty">Specialty Drinks
                    <h5 style={{ display: "inline" }}>
                <span className="badge bg-info">cold</span>
              </h5>
            </h2>
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
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">Matcha Creme</h4>
                      </div>

                      <a href="./menu/matchaTea.html" title="click to order">
                        <img className="tea" src={process.env.PUBLIC_URL + "/img/Matcha.png"} alt="#" />
                      </a>

                    </div>
                  </td>
                  <td>
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">Thai Tea</h4>
                      </div>

                      <a href="./menu/thaiTea.html" title="click to order">
                        <img className="tea" src={process.env.PUBLIC_URL + "/img/Thai.png"} alt="#" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="card">

                      <div className="card-body">
                        <h4 className="card-title">Smoothie</h4>
                      </div>
                      <a href="./menu/smoothie.thml" title="click to order">
                        <img className="tea" src={process.env.PUBLIC_URL + "/img/Smoothie.png"} alt="#" />
                      </a>
                    </div>
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