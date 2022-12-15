import { Component } from 'react'

export default class navbar extends Component{
  state = {
    color:"black",
    backgroundColor:"white",
    text:"Dark-Mode"
  }

  handleDarkMode = () => {
   this.componentDidMount();
  }

  componentDidMount = () => {
    if(this.state.color === "black"){
      this.setState({
        color:"white",
        backgroundColor:"black",
        text:"Dark-Mode"
      });
      document.body.style.color = this.state.color;
      document.body.style.backgroundColor = this.state.backgroundColor;
    }
    if(this.state.color === "white"){
      this.setState({
        color:"black",
        backgroundColor:"white",
        text:"Light-Mode"
      });
      document.body.style.color = this.state.color;
      document.body.style.backgroundColor = this.state.backgroundColor;
    }
  }

  render(){
    return(
      // navbar
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Top-Headlines</a>
            <button onClick={this.handleDarkMode} className='dark-mode-button-navbar news-btn-primary'>{this.state.text}</button>
          </div>
        </nav>
      </div>
    );
  }
}