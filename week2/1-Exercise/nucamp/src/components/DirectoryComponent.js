import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// creating child class using "extends" (Component - class provided by React library)
class DirectoryComponent extends Component {
 /*
    A constructor method is required in two cases: 
       - when you are storing local state inside this component
       - when you wish to bind methods 

    When a constructor is used, it must take props as an argument. 
    Props is short for properties and allows you to pass data into a component.
 */
    constructor(props) {
        super(props); // sent to the parent class
        this.state = {
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsite) {
        // You never want to update the state directly.
        // https://reactjs.org/docs/faq-state.html#what-does-setstate-do
        this.setState({ selectedCampsite: campsite });
    }
    
    renderSelectedCampsite(campsite) {  
        if (campsite != null) {
            return (
                <Card className="selected">
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        // return empty <div> if campsite is null
        return (
            <div></div>
        );
    }

    // render() must have a return statement (and return a single React element)
    // note: rendering a list of elements, add a unique key attribute to each element
    render() {
        const directory = this.props.campsites.map((campsite) => {
            return (
                <div key = {campsite.id} className = "col-md-5 m-1">
                    { /*  event handler added onClick, passing in campsite object */ }
                    <Card onClick= {() => this.onCampsiteSelect(campsite)}>
                       <CardImg width = "100%" src={campsite.image} alt={campsite.name} />
                       <CardImgOverlay>
                         <CardTitle>{campsite.name}</CardTitle>
                       </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className ="container">
               <div className="row">
                   {directory}
               </div>
               <div className="row">
                    <div className ="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
               </div>
            </div>
        );
    }
}

export default DirectoryComponent;