import React from 'react';

class FileNode extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <text>{this.props.node.name}</text>
    );
  }
}

export default FileNode;
