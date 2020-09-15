import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import List from './List';
library.add(faTrash)

 class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
   deleteItem(key){
const filteredItems = this.state.items.filter(item=>
  
  item.key!==key);
  this.setState({

    items:filteredItems,
  })

   }
   setUpdate(text,key){
     const items=this.state.items;
     items.map(item=>{
     if (item.key===key) {
       item.text=text}
     })
     this.setState({
       items:items
     })



   }
  render() {
  
  return (
    <div className="App">
      <header>
<form id="to-do-form" onSubmit={this.addItem}>
                   <input type="text" placeholder="ENTER TEXT"
                   value={this.state.currentItem.text} onChange={this.handleInput}></input>
                   <button type="submit">ADD</button>
                   </form> 
                   <List setUpdate={this.setUpdate} deleteItem={this.deleteItem} items={this.state.items}></List>
                   </header>
    </div>
  );
}}

export default App;
