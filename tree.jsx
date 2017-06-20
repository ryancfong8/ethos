import React from 'react';
import FileNode from './file_node';
import classNames from 'classnames';

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility(){
    this.setState({visible: !this.state.visible});
  }

  toggle(){
    if (this.state.visible){
      return "open";
    }
    else {
      return "close";
    }
  }

  folder() {
    if (this.props.node.private) {
      return "private";
    }
    else {
      return "folder";
    }
  }

  truncate() {
    if (this.props.node.name.length > 30) {
      return `${this.props.node.name.slice(0,30)}` + "...";
    }
    else {
      return this.props.node.name;
    }
  }


  render(){
    let children;
    let style;

    if (this.props.node.children) {
      children = this.props.node.children.map((child, idx) => {
        if (child.type === "folder") {
          return <li key={idx}><Tree node={child} /></li>;
          }
        else {
          return <li key={idx}><FileNode node={child} /></li>;
        }
      });
    }

    if (!this.state.visible) {
      style = {display: "none"};
    }

    return (
      <div>
        <div onClick={this.toggleVisibility} className = "folderName">
          <div className={this.toggle()}></div>
          <div className={this.folder()}></div>
          <text>
            {this.truncate()}
          </text>
        </div>
        <ul style={style}>
          {children}
        </ul>
      </div>
    );
  }
}

// childNodes() {
//   if (this.props.node.children) {
//     this.props.node.children.map((child, idx) => {
//       if (child.type === "folder") {
//         return <li key = {idx}><Tree node = {child} /></li>;
//       }
//       else {
//         return <li key = {idx}><FileNode node = {child} /></li>;
//       }
//     });
//   }
// }
//
// display() {
//   if (!this.state.visible) {
//     return {display: "none"};
//   }
// }
export default Tree;

// return(
//   <div>
//     <h3 onClick={this.toggleVisibility} className={classNames(classObj)}>{this.props.node.name}</h3>
//     <ul style = {style}>
//       {this.childNodes()}
//     </ul>
//   </div>
// );
