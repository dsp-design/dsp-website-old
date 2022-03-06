import React, { Component } from "react";

var myHTML = '<iframe className="embedly-embed" src="https://vidhyav656.github.io/files/" style="border: 0; height: 100%; left: 0;position: absolute; top: 0; width: 100%;" scrolling="no" frameborder="0" allowfullscreen ></iframe>';

class Org extends Component {
    render() {
    	return (
            <div><div dangerouslySetInnerHTML={ {__html: myHTML}}/></div>
        )
    }
}

export default Org;