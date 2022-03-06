import React, { Component } from "react";
import Even from "./Even";
import Odd from "./Odd";
class Groups extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        var groups = this.props.groups;
        return (
            <>
            {groups.map((grp,idx) => {
                idx+1===groups.length? grp.end = true : grp.end=false;
               return idx%2 === 1? <Even grp={grp}/> : <Odd grp={grp}/>
            })
            }
            </>
        )
    }
}

export default Groups;