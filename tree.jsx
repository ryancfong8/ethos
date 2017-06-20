import React from 'react';
import FileNode from './file_node';

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.childNodes = this.childNodes.bind(this);
    this.display = this.display.bind(this);
  }

  toggleVisibility(){
    this.setState({visible: !this.state.visible});
  }

  childNodes() {
    if (this.props.node.children) {
      this.props.node.children.map((child) => {
        if (child.type === "folder") {
          return <Tree node = {child} />;
        }
        else {
          return <File node = {child} />;
        }
      });
    }
  }

  display() {
    if (!this.state.visible) {
      return {display: "none"};
    }
  }

  render(){
    return(
      <div>
        <text>this.props.node.name</text>
        <ul style = {this.display()}>
          {this.childNodes()}
        </ul>
      </div>
    );
  }
}

export default Tree;
