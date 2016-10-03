import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Button,ButtonGroup,
    Form,FormGroup,ControlLabel,FormControl,
    HelpBlock,Checkbox,Radio,Grid,Row,Col
        } from 'react-bootstrap';

class App extends Component {
  
  state = {
    name:"",
    Family:"",
    color:"",
    movies:[],
    gender:"",
    Shoes:[],
    Status:"",
    
  };
  
  
  onChange = (fieldName)=>{
    return(event)=>{
      var state=this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
    var targetArray = this.state[fieldName];
    if(targetArray.indexOf(event.target.value)>=0)
    targetArray.splice(
      targetArray.indexOf(event.target.value),1
    );
    else
    targetArray.push(event.target.value);
    var state = this.state;
    state[fieldName]=targetArray;
    this.setState(state);
  }
};


  
  render() {
    return (
      <div className="container">
        <div className="page-header">    
          <h2>Student Survey!!!</h2>
        </div>
        <p className="jumbotron">
        
        <Grid>
        <Row>
          <Col md={6}>
        
        <Form>
        <FormGroup>
        <ControlLabel> Name please....</ControlLabel>
        <FormControl type="text"
                       placeholder="Name"
                       value={this.state.name}
                       onChange={this.onChange('name')}
                       />
        <HelpBlock>use to identify you</HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Family Name</ControlLabel>
        <FormControl type="text"
                       placeholder="Family Name"
                       value={this.state.Family}
                       onChange={this.onChange('Family')}
                       />
        
        </FormGroup>
        <FormGroup>
        <ControlLabel> Choose Favorite Color</ControlLabel>
        <FormControl componentClass="select" 
                      placeholder="Name here..."
                      value={this.state.color}
                       onChange={this.onChange('color')} >                  
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
        
        </FormControl>
        <HelpBlock>use to identify you</HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite Movie</ControlLabel>
        <Checkbox value="Karate Kid"
       checked={this.state.movies.indexOf('Karate Kid')>=0 ? true:false}  
                  onChange={this.checkboxChange('movies')}>
                  Karate Kid
        </Checkbox>        
        <Checkbox value="Journey in the Center Of The Earth"
        checked={this.state.movies.indexOf('Journey in the Center Of The Earth')>=0 ? true:false}  
                    onChange={this.checkboxChange('movies')}>
                  Journey in the Center Of The Earth
         </Checkbox>     
        <Checkbox value = "Resident Evil"
        checked={this.state.movies.indexOf('Resident Evil')>=0 ? true:false}  
                  onChange={this.checkboxChange('movies')}>
                 Resident Evil
         </Checkbox>            
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Gender </ControlLabel>
        <Radio name="gender" value="Male"
          onChange={this.onChange('gender')}>Male</Radio>
        <Radio name="gender" value="Female"
         onChange={this.onChange('gender')}>Female</Radio>
        </FormGroup>
        
        <FormGroup>
        
        <ControlLabel>Favorite Shoes</ControlLabel>
        <Checkbox value="Nike"
       checked={this.state.Shoes.indexOf('Nike')>=0 ? true:false}  
                  onChange={this.checkboxChange('Shoes')}>
                  Nike
        </Checkbox>        
        <Checkbox value="Fila"
        checked={this.state.Shoes.indexOf('Fila')>=0 ? true:false}  
                    onChange={this.checkboxChange('Shoes')}>
                 Fila
         </Checkbox>     
        <Checkbox value = "World Balance"
        checked={this.state.Shoes.indexOf('World Balance')>=0 ? true:false}  
                  onChange={this.checkboxChange('Shoes')}>
                 World Balance
         </Checkbox>  
         
          <Checkbox value = "Under Armour"
        checked={this.state.Shoes.indexOf('Under Armour')>=0 ? true:false}  
                  onChange={this.checkboxChange('Shoes')}>
                Under Armor
         </Checkbox>                      
        </FormGroup>
       
       <FormGroup>
        <ControlLabel>Status</ControlLabel>
        <Radio name="Status" value="Single"
          onChange={this.onChange('Status')}>Single</Radio>
        <Radio name="Status" value="Married"
         onChange={this.onChange('Status')}>Married</Radio>
         <Radio name="Status" value="Complacated"
          onChange={this.onChange('Status')}>Male</Radio>
        </FormGroup>
      
         <ButtonGroup>
          <Button bsStyle="info"><span className="glyphicon glyphicon-info-sign"></span>  Info Button  </Button>        
           <Button bsStyle="primary"> Primary Button </Button>
           <Button bsStyle="warning"> Warning Button </Button>
           <Button bsStyle="danger"> Error Button </Button>
           </ButtonGroup>
           
           
           </Form>
           </Col>
           <Col md={6}>
           <strong>Name:  {this.state.name}</strong><br/>
           <strong>Family Name : {this.state.Family}</strong><br/>
           <strong>Color  :{this.state.color}</strong><br/>
           <strong>Movies  {
             this.state.movies.map((item,i)=>{
               return <div>
               <span className="label label-info">{item}</span>
                      </div>
             })}
             
          </strong><br/>
           <strong>Gender : {this.state.gender}</strong><br/>
           <strong>shoes :{
             this.state.Shoes.map((item,i)=>{
               return <div>
               <span className="label label-info">{item}</span>
               </div>
               
             })}</strong><br/>
            
           <strong>Status : {this.state.Status}</strong><br/>
           
           </Col>
           </Row>
           </Grid>
        </p>
      </div>
    );
  }
}

export default App;