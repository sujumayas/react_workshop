var React = require('react'),
  ReactDOM = require('react-dom'),
  HelloComponent = require('./hello_component'),
  FailedAttempts = require('./failed_attempts'),
  InstallNode = require('./install_node'),
  FallenHeroGallery = require('./fallen_heroes');

var fallen_heroes = [
  {
    name: "Esen",
    url: "https://uploads.teamtreehouse.com/production/profile-photos/303862/thumb_foto_perfil.jpg",
    fails: 32
  },
  {
    name: "Renato",
    url: "https://lh3.googleusercontent.com/-dKptqK6grGw/AAAAAAAAAAI/AAAAAAAAAFU/HbgySmtgZ3c/s120-c/photo.jpg",
    fails: 7
  },
  {
    name: "Martin",
    url: "https://pbs.twimg.com/profile_images/344513261576229009/a6f23617e6ed0a6f4fff389a29bacf89.png",
    fails: 13
  }
];

var BundleComponent = React.createClass({
  getInitialState: function() {
    return { failed: false, fails: 0 }
  },
  onClickButton: function() {
    var nfails = this.state.failed === false ? this.state.fails + 1 : this.state.fails;
    this.setState({ failed: !this.state.failed, fails : nfails });
  },
  render:function(){
    return (
    <div className="BundleComponent">
      <HelloComponent name={"Esen"} url="#" fails={1} />
      <FailedAttempts fails={this.state.fails}/>
      <InstallNode onClick={this.onClickButton} failed={this.state.failed}/>
      <span>{this.state.fails}</span>
      <FallenHeroGallery fallen_heroes={fallen_heroes} />
    </div>
    );
  }
});

ReactDOM.render(<BundleComponent name="Ninja Parent Name Here" fails="0"/>, document.querySelector("#example4"));

