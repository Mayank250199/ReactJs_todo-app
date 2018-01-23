var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('./css/index.css');

//react-router
import{Router, Route, browserHistory,Link} from 'react-router';

//Module require
var TodoItem = require('./todoitem');
var AddItem = require('./additem');
var About = require('./about');


var App = createReactClass({
  render:function(){
    return(
      <Router history={browserHistory}>
      <Route path={'/'} component={TodoComponent}></Route>
      <Route path={'/about'} component={About}></Route>
      </Router>
    );
  }
});

//create component
var TodoComponent = createReactClass({
  getInitialState:function(){
    return{
      todos:['Naruto','Erased','Death Note','Ajin','One piece','Fullmetal Alchemist','Attack on Titan']
    }
  },
  render: function(){
   /*var ager = setTimeout(function(){
     this.setState({
      // rank:2
     });
   }.bind(this),5000);*/
var todos = this.state.todos;
   todos = todos.map(function(item,index){
     return(
       <TodoItem item={item} key={index} onDelete={this.onDelete} />
     );
   }.bind(this));

    return(
     <div id="todo-list">
     <Link to={'/about'}>About</Link>
<h1>Anime List</h1>
<ul>{todos}</ul>
<AddItem onAdd={this.onAdd} />

      </div>
    );
  },// render

onDelete: function(item){
  var updatedtodos = this.state.todos.filter(function(val,index){
    return item !== val;
  });
  this.setState({
    todos:updatedtodos
  });
},
onAdd:function(item){
var updatedtodos = this.state.todos;
updatedtodos.push(item);
this.setState({
  todos:updatedtodos
});
},
componentWillMount:function(){
  console.log('componetWillMount');
},

componentDidMount:function(){
  console.log('componetDidMount');
},

componentWillMount:function(){
  console.log('componetWillMount');
}
});



//put component into html page
ReactDOM.render(<App />,document.getElementById('todo-wrapper'));
