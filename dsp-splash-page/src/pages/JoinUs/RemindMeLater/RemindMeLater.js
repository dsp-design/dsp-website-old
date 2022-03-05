import React, { Component } from "react";
import "./remindmelater.css";

class RemindMeLater extends Component {
    state = {};

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="center">
                <iframe title="contact" id="joinUs" src="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUOFVOQjAxQ0NQTVozRTBZRjNYWktVQjFUNSQlQCN0PWcu&embed=true" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
            </div>
        );
    };
};

export default RemindMeLater;