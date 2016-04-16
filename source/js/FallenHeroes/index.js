var React = require('react'),
  ReactDOM = require('react-dom'),
  HelloComponent = require('./hello_component'),
  FailedAttempts = require('./failed_attempts'),
  InstallNode = require('./install_node'),
  FallenHeroGallery = require('./fallen_heroes');

var data = [
  {
    name: "Esen",
    url: "https://uploads.teamtreehouse.com/production/profile-photos/303862/thumb_foto_perfil.jpg",
    fails: 32,
  },
  {
    name: "Renato",
    url: "https://lh3.googleusercontent.com/-dKptqK6grGw/AAAAAAAAAAI/AAAAAAAAAFU/HbgySmtgZ3c/s120-c/photo.jpg",
    fails: 7,
  },
  {
    name: "Martin",
    url: "https://pbs.twimg.com/profile_images/344513261576229009/a6f23617e6ed0a6f4fff389a29bacf89.png",
    fails: 13,
  }
];

var BundleComponent = React.createClass({
  getInitialState: function() {
    return { 
      failed: false, 
      fails: 0, 
      mousePos: {
        x:0, 
        y:0
      }
    };
  },
  onClickButton: function() {
    var nfails = this.state.failed === false ? this.state.fails + 1 : this.state.fails;
    this.setState({ failed: !this.state.failed, fails : nfails });
  },
  dragStart : function(e){
    //Bind the target as dragged item
    console.log("drag start");
    this.dragged = e.currentTarget;
    console.log(e.currentTarget);
    
    this.dragged.style.backgroundColor = "lightsalmon";
    e.dataTransfer.effectAllowed = 'move';

    // Firefox requires calling dataTransfer.setData
    // for the drag to properly work
    e.dataTransfer.setData("text/html", e.currentTarget);
  },
  dragEnd : function(e){
    console.log("dragEnd");
    console.log(this.dragged);
    this.dragged.style.display = "block";
    this.dragged.style.backgroundColor = "white";
    this.dragged.parentNode.removeChild(placeholder);

    // Update state
    var data = this.state.data;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
  },
  dragOver : function(e){
    e.preventDefault();
    console.log("dragOver");
    console.log(this.dragged);
    this.dragged.style.display = "none";
    console.log("Over Target");
    console.log(e.target);
    if(e.target.className == "placeholder" || e.target.className.indexOf("user-component") == -1) return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);
  },
  render:function(){
    return (
    <div className="BundleComponent">
      <FailedAttempts fails={this.state.fails} />
      <InstallNode onClick={this.onClickButton} failed={this.state.failed}/>
      <span className="number-of-fails">{this.state.fails}</span>
      <FallenHeroGallery 
        onDragOver={this.dragOver}
        draggeable="true"
        onDragEnd={this.dragEnd}
        onDragStart={this.dragStart}
        data={data} 
      />
    </div>
    );
  }
});

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

ReactDOM.render(<BundleComponent name="Ninja Parent Name Here" fails="0"/>, document.querySelector("#app"));

