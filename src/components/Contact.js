import React from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleCollapse() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <>
        <Button onClick={() => this.toggleCollapse()} aria-expanded="false" aria-controls="collapseExample" className="btn-default">
          Contact us
        </Button>
        <Collapse in={this.state.open} id="collapseExample">
          <div className="card card-body">
            Phone: 555-234-6456
          </div>
        </Collapse>
      </>
    );
  }
}

export default Contact;

