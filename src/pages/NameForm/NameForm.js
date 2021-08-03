import './NameForm.css'
import React from 'react';
import {Button} from 'reactstrap'
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange;
      this.handleSubmit = this.handleSubmit;
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
  
    render() {
      return (
        <form className="form" onSubmit={this.handleSubmit}>
        
            <Button classNam="btn btn-secondary" value={this.state.value} onChange={this.handleChange} >Submit</Button>
         
        </form>
      );
    }
  }
  
  export default NameForm