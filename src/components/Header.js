import React from 'react'
import EditItemInput from './EditItemInput'

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Minha Lista de tarefas',
      editMode: false
    }
    this.startEdit = this.startEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  componentDidMount(){
    const lsTitle = localStorage.getItem('title');
    if((lsTitle !== null) && (this.state.title !== lsTitle)){
      this.setState({
        title: lsTitle,
        editMode: false
      })
    }
  }

  startEdit(){
    this.setState(prevState => {
      return {
        title: prevState.title,
        editMode: true
      }
    })
  }

  saveEdit(itemData){
    this.setState({
      title: itemData.text,
      editMode: false
    })
    localStorage.setItem('title', this.state.title)
  }

  render(){

    return(
      <header>
        {this.state.editMode ?
          <div style={{
              padding: '4ch 0ch',
            }}>
          <EditItemInput
            item={{text: this.state.title}}
            saveEdit={this.saveEdit} />
          </div>
          :
          <h2 onClick={this.startEdit}>
            {this.state.title}
          </h2>}
      </header>
    )
  }
}

export default Header
