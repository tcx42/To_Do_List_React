import React from 'react'

class NewItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: "",
      buttonVisible: false
    }
    this.addNew = this.addNew.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      text: event.target.value,
      buttonVisible: (event.target.value !== "")
    })
  }

  addNew(){
    this.setState(prevState => {
      return {
        text: "",
        buttonVisible: false
      }
    })
    this.props.newItem(this.state.text);
  }

  render() {
    return(
      <div className="NewItem">
        <input type="checkbox" checked={false} onChange={()=>{}}/>
        <input className="NewItemInput"
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyUp={event => {
            if (event.keyCode === 13 && event.target.value !== "") {
              this.addNew();
            }
          }}
          onBlur={(() => {
            if(this.state.text !== ""){
              this.addNew();
            }
          })}
        />
        {this.state.buttonVisible && <button
          className="NewItemButton"
          onClick={this.addNew}>+</button>}
      </div>
    )
  }
}

export default NewItem;
