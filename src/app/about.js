var React = require('react');

var createReactClass = require('create-react-class');
import {Link} from 'react-router';

var About = createReactClass({
  render:function(){
    return(
      <div>
       <Link to={'/'}>Home</Link>
      <center><h2>About me</h2><br/><br/>
      <img  width="304" height="300" src="http://mayanksharma.herokuapp.com/images/mayank.png" /></center><br/><br/>
      <p>I am a Full Stack Developer create Amazing and Responsive Websites.
      I love gadget, music and developing.
      My hobby is watching ANIME and Playing Badminton, Tabble Tennis and Basket Ball.
      </p>

      </div>
);
  }
});

module.exports = About;
