import React from 'react'

class EditItemInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      itemData: this.props.item
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(event) {
    this.setState({
      itemData: {
        id: this.props.item.id,
        text: event.target.value,
        completed: this.props.item.completed
      }
    })
  }

  render(){
    return(
      <div className="EditItemDiv">
        <input type="checkbox" checked={false} onChange={()=>{}}/>
        <input className="EditItemInput"
          autoFocus
          type="text"
          value={this.state.itemData.text}
          onChange={this.handleEdit}
          onKeyUp={event => {
            if (event.keyCode === 13) {
              this.props.saveEdit(this.state.itemData);
            }
          }}
          />
          <button className="SaveItemButton"
            onClick={() => {this.props.saveEdit(this.state.itemData)}}>
            s
          </button>
      </div>
    )
  }
}

export default EditItemInput;
