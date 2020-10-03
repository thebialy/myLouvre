const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { art, index } = this.props;
    return (
      <Layout title={art.title}>
        <div>
          <div className="container text-center"><h2 className="index-title text-center show-title">{art.title}</h2></div>
            <br/>
            <div className="show-div">
              
              <div className="art-info">

                <h5>-Artist-</h5><p>{art.artist}</p>
                <hr/>
                <h5>-Year-</h5><p>{art.year}</p>
                <hr/>
                <h5>-Technique-</h5><p>{art.technique}</p>
                <hr/>
                <h5>-Size-</h5><p>{art.size}</p>
                <hr/>
                <h5>-Value-</h5><p>{art.value}</p>
                <hr/>
                <h5>-Info-</h5><p className="text-center">{art.info}</p> 
                <br/>
                <div className="art-buttons">
              <form action={`/art/edit/${art._id}`} method="GET">
                <input className="btn btn-info" type="submit" value="Edit"/>
              </form>
              <form action={`/art/${index}?_method=DELETE`} method="POST">
                  <input className="btn btn-danger" type="submit" value="Delete"/>
              </form>

            </div>               
              </div>
              <div className="show-img">
                <img src={art.img}/> 
                <div className="art-buttons frame-it">
                <button className="btn btn-dark"><span className="glyphicon glyphicon-picture"></span><a href={`/art/frame/${art._id}`}>   Frame It!</a></button>  
                </div>
              </div>

                
            <br/>
          </div>       
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
