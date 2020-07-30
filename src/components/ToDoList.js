import React from 'react'
import ToDoItem from './ToDoItem'
import NewItem from './NewItem'
import Header from './Header'
import Footer from './Footer'

class ToDoList extends React.Component{
  constructor() {
    super();
    if (JSON.parse(localStorage.getItem('list')) === null) {
      localStorage.clear();
      const ld = [{
        id: 0,
        text: 'Escrever minha primeira tarefa',
        completed: false
      }];
      localStorage.setItem('list', JSON.stringify(ld));
    }
    this.state = {
      listData: JSON.parse(localStorage.getItem('list')),
      size: JSON.parse(localStorage.getItem('list')).length
    }
    this.handleChange = this.handleChange.bind(this);
    this.newItem = this.newItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(itemData){
    const newList = this.state.listData.map((item, i) => {
      if (item.id === itemData.id) {
        return{
          id: i,
          text: itemData.text,
          completed: itemData.completed
        }
      }else {
        return{
          id: i,
          text: item.text,
          completed: item.completed
        }
      }
    })
    this.setState(prevState => {
      return{
        listData: newList,
        size: prevState.size
      }
    })
    localStorage.setItem('list', JSON.stringify(newList));
  }

  newItem(itemData) {
    let newList = this.state.listData;
    newList.push(itemData);
    this.setState(prevState => {
      return{
        listData: newList,
        size: prevState.size + 1
      }
    })
    localStorage.setItem('list', JSON.stringify(newList));
  }

  deleteItem(itemData) {
    let newList = this.state.listData;
    newList.splice(itemData.id, 1);
    this.setState(prevState => {
      return{
        listData: newList,
        size: prevState.size
      }
    })
    localStorage.setItem('list', JSON.stringify(newList));
  }

  render() {
    const listElements = this.state.listData.map((item, i) => {
      return (
        <div key={'div' + i}>
        <ToDoItem
          key={item.id}
          item={item}
          handleChange={this.handleChange}
          deleteItem={this.deleteItem}
          />
        <hr/>
        </div>
      )
    })

    const blankLines = Array.apply(null, {length: 11 - this.state.size}).map((e, i) => {
      return <div key={'div' + i}>
      <NewItem
        key={'bl' + i}
        itemId={this.state.size}
        newItem={this.newItem}
        />
      <hr/>
      </div>
    });

    return (
      <div className="ToDoList">
        <Header />
        {listElements}
        {blankLines}
        <NewItem
          key={'last'}
          itemId={this.state.size}
          newItem={this.newItem}
          />
        <Footer />
      </div>
    )
  }
}

export default ToDoList;
