import React from 'react'
import { Button, Icon, Container, Divider } from 'semantic-ui-react'



class BreweryDetails extends React.Component {

  render() {
    return (
      <div>

      <Container textAlign="center">
      <br/>
      <font size="8">
        <b>{this.props.brewery.name}</b>
      </font>
        <Divider/>
        <font size='5'>
        <b><u>Location</u></b>
        <br/>
        <br/>
        </font>
        <font size="4">

        <b className="subject">Street:</b> {this.props.brewery.street}
        <br/>
        <b className="subject">City:</b> {this.props.brewery.city}
        <br/>
        <b className="subject">State:</b> {this.props.brewery.state}
        <br/>
        <b className="subject">Zipcode:</b> {this.props.brewery.postal_code}
        <br/>
        </font>


<br/>
<br/>
        <Button onClick={this.props.pageHandler} color="black" icon>
        <Icon name="list"/>   Back To Breweries
        </Button>
        </Container>
      </div>
    );
  }

}

export default BreweryDetails ;
