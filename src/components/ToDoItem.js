import React from 'react'

class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  startEdit(text) {
    this.setState({
      editMode: true,
      text: text
    })
  }

  handleEdit(event) {
    this.setState({
      editMode: true,
      text: event.target.value
    })
  }

  saveEdit() {
    const itemData = {
      id: this.props.item.id,
      text: this.state.text,
      completed: this.props.item.completed
    };
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

    const editItem =
    <div className="EditItemDiv">
      <input type="checkbox" checked={false} onChange={()=>{}}/>
      <input className="EditItemInput"
        type="text"
        value={this.state.text}
        onChange={this.handleEdit}
        onKeyUp={event => {
          if (event.keyCode === 13) {
            this.saveEdit();
          }
        }}
        />
    </div>

    const deleteButton =
    <button className="DeleteItemButton"
      onClick={() => {this.props.deleteItem(this.props.item)}}>
      X
    </button>

    const editButton = this.state.editMode ?
    <button className="SaveItemButton"
      onClick={() => {this.saveEdit()}}>
      s
    </button>
    :
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
