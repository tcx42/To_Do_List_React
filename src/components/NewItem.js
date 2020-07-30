import React from 'react'

class NewItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemData: [{
        id: props.itemId,
        text: "",
        completed: false
      }],
      inputValue: "",
      buttonVisible: false
    }
    this.addNew = this.addNew.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      itemData: {
        id: this.props.itemId,
        text: event.target.value,
        completed: false
      },
      inputValue: event.target.value,
      buttonVisible: (event.target.value !== "")
    })
  }

  addNew(){
    this.setState(prevState => {
      return {
        itemData: {
          id: prevState.itemData.id + 1,
          text: "",
          completed: prevState.itemData.completed
        },
        inputValue: "",
        buttonVisible: false
      }
    })
    this.props.newItem(this.state.itemData);
  }

  render() {
    return(
      <div className="NewItem">
        <input type="checkbox" checked={false} onChange={()=>{}}/>
        <input className="NewItemInput"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyUp={event => {
            if (event.keyCode === 13 && event.target.value !== "") {
              this.addNew();
            }
          }}
        />
        {this.state.buttonVisible && <button
          className="NewItemButton"
          onClick={this.addNew}>+</button>}
      </div>
    )
  }
}

export default NewItem;
