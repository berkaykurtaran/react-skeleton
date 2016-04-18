var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  onChange: function (e) {
    this.setState({ newItemText: e.target.value })
  },
  getInitialState: function () {
    return {
      items: [],
      newItemText: ''
    };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    if (this.state.newItemText != '') {
      var currentItems = this.state.items;
      currentItems.push(this.state.newItemText);
      this.setState({ items: currentItems, newItemText: '' });
    }
  },

  render: function () {

    var divStyle = {
      marginTop: 10
    };

    var headingStyle = {
      
    };
    
    if (this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
    }

    return (
      <div style={divStyle} className="col-sm-4">
        <div className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
            <h5>{this.props.title}</h5>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit} className="form-inline">
              <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
              <button className="form-control btn btn-primary">Add</button>
              <List items={this.state.items}/>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ListManager;
