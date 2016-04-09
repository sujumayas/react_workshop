var React = require('react'),
  HelloComponent = require('./hello_component');

var FallenHeroGallery = React.createClass({
  render: function() {
    var baseURL = 'https://www.google.com.pe/search?q=img&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjpxN-uioLMAhXL1B4KHWxiCFEQ_AUIBygB&biw=1440&bih=778#tbm=isch&q=';
    return (
      <section>{this.props.fallen_heroes.map(function(fallen_heroes, index) {
        return <HelloComponent key={index} name={fallen_heroes.name} url={fallen_heroes.url} fails={fallen_heroes.fails} />
      })}</section>
    );
  }
});

//ReactDOM.render(<FallenHeroGallery falle_heroes={falle_heroes} />, document.querySelector("#example5"));

module.exports = FallenHeroGallery;



