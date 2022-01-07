import React from "react"
import './App.css';
import List from "./list";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:"",
        key:""
      }
    }
      this.handleInput=this.handleInput.bind(this);
      this.addItem=this.addItem.bind(this);
      this.deleteItem=this.deleteItem.bind(this);

  }


  handleInput(e){

    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })

  }

  addItem(e){
    e.preventDefault();
    const newItem =this.state.currentItem;
    if(newItem.text!==""){
      const newItems=[...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:"",
          key:""
        }
      })
    }
  }



deleteItem(key){
  const filterItem=this.state.items.filter(item=>item.key!==key);
  this.setState({
    items:filterItem
  })
}






  render(){
    return(
      <div className="App">
        <h1>TODO-LIST </h1>
      <header>
        <form onSubmit={this.addItem}>
          <input className="text" type="text" placeholder="Enter text" value={this.state.currentItem.text} onChange={this.handleInput}/>
          <button className="btn" type="submit">ADD</button>
        </form>
      </header>
      <List items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}
export default App;
