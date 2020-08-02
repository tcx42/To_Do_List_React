import React from 'react'
import EditItemInput from './EditItemInput'

class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false
    }
    this.saveEdit = this.saveEdit.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  startEdit(text) {
    this.setState({
      editMode: true,
      text: text
    })
  }

  saveEdit(itemData) {
    this.setState({
      editMode: false
    })
    this.props.handleChange(itemData)
  }

  render() {
    const itemData = {
      id: this.props.item.id,
      text: this.props.item.text,
      completed: !this.props.item.completed
    };

    const toDoItem =
    <label
      className={this.props.item.completed ? 'completedItem' : null}
      >
      <input className="ToDoItemCheckbox"
        type="checkbox"
        checked={this.props.item.completed}
        onChange={() => {this.props.handleChange(itemData)}}
        />
      {this.props.item.text}
    </label>

    const editItem = <EditItemInput
        item={this.props.item}
        saveEdit={this.saveEdit}
      />

    const deleteButton =
    <button className="DeleteItemButton"
      onClick={() => {this.props.deleteItem(this.props.item)}}>
      X
    </button>

    const editButton = !this.state.editMode &&
    <button className="EditItemButton"
      onClick={() => {this.startEdit(this.props.item.text)}}>
      /
    </button>


    return(
      <div className="ToDoItem">
        {this.state.editMode ? editItem : toDoItem}
        {this.props.item.completed ? deleteButton : editButton}
      </div>
    )
  }
}

export default ToDoItem;
