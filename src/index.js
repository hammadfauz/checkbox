import React from 'react';
import palette from './palette';

class CheckBox extends React.Component{
  constructor (props) {
    super (props);
    this.handleToggle =  this.handleToggle.bind(this);
  }
  handleToggle () {
    if (typeof this.props.onToggle === 'function') {
      this.props.onToggle(this.props.value);
    }
  }
  render () {
    var mainColor = this.props.blue?palette.blue:palette.yellow;
    var styles ={
      main : {
        textAlign : 'left',
        fontSize : this.props.small?'11pt':'14pt'
      },
      option : {
        position : 'relative',
        marginLeft : '30px',
        cursor : 'pointer'
      },
      check : {
        position : 'absolute',
        left : '-25px',
        top : this.props.small?'3px':'5px',
        width : this.props.small?'10px':'15px',
        height : this.props.small?'10px':'15px',
        transform : this.props.value?'rotate(45deg) scaleX(0.5)':'rotate(0deg) scaleX(1)',
        borderTop : this.props.value?'none':'2px solid '+mainColor,
        borderRight : this.props.value?'4px solid '+mainColor:'2px solid '+mainColor,
        borderBottom : '2px solid '+mainColor,
        borderLeft : this.props.value?'none':'2px solid '+mainColor,
        transition : 'all 300ms ease-in-out'
      }
    };
    return (<div style={styles.main}>
      <div style={styles.option} onClick={this.handleToggle}>
        <div style={styles.check}></div>
        {this.props.label}
      </div>
    </div>);
  }
};

module.exports = CheckBox;
