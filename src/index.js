import React from 'react' ;
import ReactDOM from 'react-dom';
import './css/stylesheet.css';
import App from './App';
import Logo from './components/Logo'; 
import Subbutton from './components/Subbutton';
import { SocialIcon } from 'react-social-icons';




class MainArticle extends React.Component {
  constructor(props){
  super(props); 
  this.state = {
    grow: false
  }; 
  this.HoverGrow = this.HoverGrow.bind(this); 
}
  HoverGrow()  {
    if(this.state.grow ===false) {
      this.setState({grow:true});
    } else {
      this.setState({grow:false}); 
    }
  }
  render(){
    return(
      <div className={this.state.grow ? 'grow-main-article' : 'main-article'}onMouseEnter={this.HoverGrow} onMouseLeave={this.HoverGrow}>
      </div>
    )
  }
}

class Article extends React.Component {
  constructor(props) {
  super(props); 
  this.state = {
    grow: false
  }; 
  this.HoverGrow = this.HoverGrow.bind(this); 
  }
  HoverGrow()  {
    if(this.state.grow ===false) {
      this.setState({grow:true});
    } else {
      this.setState({grow:false}); 
    }
  }
  render() {
    return(
      <div className={this.state.grow ? 'grow-article' : 'article'} onMouseEnter={this.HoverGrow} onMouseLeave={this.HoverGrow}>
      </div>
    )
  }
}
export const ArticleList = () => {
  return (
    <div>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  )
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state={isOpen:false};
    this.OpenNav = this.OpenNav.bind(this);
    this.NavButton = this.NavButton.bind(this);
    this.NavList = this.NavList.bind(this); 
  }
  OpenNav() {
    if(this.state.isOpen===false) {
      this.setState({isOpen:true});
    } else {
      this.setState({isOpen:false});
    }
  }
    NavButton(){
      return(
        <div id='navbutton-container' onClick={this.OpenNav}>
        <div className={this.state.isOpen ?  'open-bar1' : 'bar' }>
        </div>
        <div className={this.state.isOpen ? 'open-bar2' : 'bar' }>
        </div>
        <div className={this.state.isOpen ? 'open-bar3':'bar'}>
        </div>
      </div>
      )
    }
    NavList() {
      return(
        <div>
            <this.NavButton onClick={this.OpenNav} />
            <div id="nav-list-items">
            <ul>
            <li><label for='search'>Search Articles</label>
            <input type='text' id='search'></input></li>
            <li><button type='submit' id='search'>SEARCH</button></li>
            <li><a href='#'>Contact Us</a></li>
          </ul>
          </div>
        </div>
      )
    }
    render() {
    return(
      <div className={this.state.isOpen ? 'opened-nav':'closed-nav'}>
        <this.NavList />
      </div>
    )
  }
}
class Footer extends React.Component {
  constructor(params) {
    super(params);
    this.state={grow:false};
    this.HoverGrow = this.HoverGrow.bind(this);
    this.LogoTitle = this.LogoTitle.bind(this);
  }
  HoverGrow() {
    if(this.state.grow===false) {
      this.setState({grow:true});
    } else {
      this.setState({grow:false});
    }
  }
  LogoTitle() {
    return(
      <div id='footer-logo-title'>
        <Logo id='footer-logo'/>
        <h1>Backshed Bloggin'</h1>
      </div>
    )
  }
  Copyright() {
    return(
      <div id='copyright'>
        <p>Copyright © 2021 JK Web Dev</p>
      </div>
    )
  }
  Socials() {
    return(
    <div id='social-icons'>
      <SocialIcon fgColor='#ffffff' className='icon' url='https://www.instagram.com' />
      <SocialIcon fgColor='#ffffff' className='icon' url='https://www.facebook.com' />
      <SocialIcon fgColor='#ffffff' className='icon' url='https://www.twitter.com' />
    </div>
    )

  }
  render(){
    return(
      <div id='footer-container'>
        <this.LogoTitle />
        <this.Copyright />
        <this.Socials />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('subbutton'));
ReactDOM.render(<Subbutton />, document.getElementById('titleBanner'));
ReactDOM.render(<Logo />, document.getElementById('logo'));
ReactDOM.render(<Navbar />, document.getElementById('navButton'));
ReactDOM.render(<MainArticle/>, document.getElementById('mainArticle'));
ReactDOM.render(<ArticleList/>, document.getElementById('articleList'));
ReactDOM.render(<Footer />, document.getElementById('footer'));