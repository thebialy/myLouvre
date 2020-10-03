const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { art } = this.props
    return (
      <Layout title="My Gallery">

        <br/>
      
          <div className="frame">
            <div className="mat">
              <div className="art">
                <img className="art-image img-fluid" src={art.img}/>
              </div>
            </div>
          </div>
          <br/>
            <button className="btn btn-dark"><a href={`/art/${art._id}`}>Go back</a></button>
      </Layout>
    );
  }
}

module.exports = Index;