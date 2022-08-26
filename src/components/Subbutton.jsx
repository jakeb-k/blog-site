import React from 'react'; 

const SubTitle = () => {
      return (
      <h1 id='subTitle'> Subscribe </h1>
      );  
}
class Subbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {grow: false,
                  height: 0,
                  dash: false};
    
    this.ChangeGrow = this.ChangeGrow.bind(this)
    this.FormDropped = this.FormDropped.bind(this)
    this.FormInput = this.FormInput.bind(this)
    this.dashChange = this.dashChange.bind(this)
  } 

  ChangeGrow(e) {
      if(this.state.grow === true){
        this.setState({grow:false});   
      } else {
        this.setState({grow:true});       
      }
      console.log(this.state.grow);
      
  }
  dashChange(e) {
    if(this.state.dash === true){
      this.setState({dash:false});
    } else {
      this.setState({dash:true}); 
    }
  }
  FormDropped(){ 
    return (
      <div className={this.state.grow ? 'big-button' : 'small-button'}  onMouseEnter={this.dashChange} onMouseLeave={this.dashChange}>
        <SubTitle /> 
          <button className={this.state.dash ? 'dash-in' : 'dash-out'} onClick={this.ChangeGrow}  > &#709; </button> 
          <this.FormInput />
    </div>
    ) 
}
  FormInput(){
    return(
       <div id="dropForm">
            <form>
                 <label for="name"> Name</label>
                 <input type="text" id="name"></input>
                 <label for="email"> Email</label>
                 <input type="email" id="email"></input>
                 <button type="button" id="submitButton2">
                     Sign Up Now!
                 </button>
            </form>
         </div>
    )
  }
  render() {
     return (
      <div id='dropForm'>
        <div id='titles'>
          <this.FormDropped />
        </div>
      </div>
    );
  }
}

export default Subbutton ; 