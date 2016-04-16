var React = require('react'),
  HelloComponent = require('./hello_component');

var FallenHeroGallery = React.createClass({
  getInitialState : function(){
  	return {data : this.props.data};
  },
  render: function() {
  	onDragOverTemp = this.props.onDragOver;
  	onDragEndTemp = this.props.onDragEnd;
  	onDragStartTemp = this.props.onDragStart;
    var baseURL = 'https://www.google.com.pe/search?q=img&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjpxN-uioLMAhXL1B4KHWxiCFEQ_AUIBygB&biw=1440&bih=778#tbm=isch&q=';
    return (
		<section onDragOver={onDragOverTemp} className="fallen-heroes-gallery">
	      
	      {this.state.data.map(function(data, index) {
	        return <HelloComponent 
	        			data-id={index} 
	        			key={index}
	        			theKey={index}
	        			draggable = "true"
	        			onDragEnd={onDragEndTemp}
						onDragStart={onDragStartTemp}
	        			name={data.name} 
	        			url={data.url} 
	        			fails={data.fails} 
	        		/>;
	      	}, this)}
      </section>
    );
  }
});

//ReactDOM.render(<FallenHeroGallery falle_heroes={falle_heroes} />, document.querySelector("#example5"));

module.exports = FallenHeroGallery;



