import React from 'react'

class Menu extends React.Component{
  constructor() {
    super();
    this.state = {
      dropdownActive: false
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu(){
    this.setState(prevState => {
      return{
        dropdownActive: !prevState.dropdownActive
      }
    })
  }

  closeMenu(){
    this.setState({
      dropdownActive: false
    })
  }

  render(){

    const dropdown = <div id="myDropdown" class="dropdown-content">
      <a href="#">Nova lista</a>
      <hr/>
      <a href="#">Apagar lista</a>
      <hr/>
      <a href="#">Apagar todas</a>
    </div>

    return(
      <div>
        <button className="MenuButton"
          onClick={this.openMenu}
          onBlur={this.closeMenu} >
          {String.fromCharCode(0x2630)}
        </button>
        {this.state.dropdownActive && dropdown}
      </div>
    )
  }
}

export default Menu;
