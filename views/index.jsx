const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <div className="container">
          <h1 className="welcome-h1">Welcome to <span className="logo-my">my</span>Louvre!</h1>
          <br/>
          <h3>Simply click signup or login at the top right of the screen</h3>
          <ul className="features">
            <h2><span className="new-span">New</span> <span className="logo-my">my</span>Louvre <span className="new-span">Features!</span></h2>
            <br/>
            <h4><span class="glyphicon glyphicon-star"></span>Total collection value - keeps a running total of the total value of your entire art collection</h4>
            <h4><span class="glyphicon glyphicon-star"></span>Frame It! - allows you to see what each piece of art looks like in a standard frame with matting</h4>
          </ul>
        </div>
        
      </Layout>
    );
  }
}

module.exports = Index;
