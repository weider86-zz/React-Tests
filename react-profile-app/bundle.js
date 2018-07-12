'use strict';

console.log('ProfileApp');


var DATA = {    
  name: 'John Smith',
  imgURL: 'http://lorempixel.com/200/200/',
  hobbyList: ['coding', 'writing', 'skiing']
}

console.log('DATA: ' + DATA);

const UserInfo = React.createClass({
  render: function(){
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.imgURL} />
      </div>
    );
  }
});

const Hobbies = React.createClass({
  render: function(){
    console.log('HobbyList: ' + this.props.hobbyList);

    var hobbyArray = this.props.hobbyList;

    var hobbies = hobbyArray.map(function(hobby, index){
      return (<li key={index}>{hobby}</li>);
    });
    
    return (
      <div>
        <h5>My Hobbies</h5>
        <ul>
          {hobbies}
        </ul>
      </div>
    )
  }
})

const ProfileApp = React.createClass({
    render: function(){
      console.log('this.props: ' + this.props.profileData);
      return (
        <div>
          <UserInfo name={this.props.profileData.name} imgURL={this.props.profileData.imgURL} />
          <Hobbies hobbyList={this.props.profileData.hobbyList} />
        </div>
      );
    }
});

React.render(<ProfileApp profileData={DATA} />,  document.getElementById("app"));
