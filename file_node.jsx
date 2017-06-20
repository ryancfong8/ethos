import React from 'react';

class FileNode extends React.Component {
  constructor(props) {
    super(props);
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
    return(
      <div className = "folderName">
        <div className="file"></div>
        <text>
          {this.truncate()}
        </text>
      </div>
    );
  }
}

export default FileNode;
