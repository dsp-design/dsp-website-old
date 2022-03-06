import React, { Component } from "react";
import { Link } from "react-router-dom";
import SlantTop from "../../components/SlantTop";
import { v4 as uuid } from 'uuid';

import "./css/blog.css";
import "./css/mediaBlog.css";

class Blog extends Component {

    state = {
        categories: ["design", "service", "virtual-office", "events"]
    }

    render() {
        return (
            <div id="blogPageWrapper">

                <SlantTop
                    color="orange-background"
                    title="dsp.blog"
                />

                <div id="blogContainer">
                    <div id="blogCategoryWrapper" className="slateWhite-background">
                        <div id="blogCategoryTitle">
                            <div>topics</div>
                            {/* to={{ pathname: "/about", sectionProps: "whoweare", key: uuid() }} */}
                            {/* <Link to="/blog" id="blogHomeButton" className="link">blog home</Link> */}
                            <a id="blogHomeButton" className="link" onClick={() => {window.location.href="/blog"}}>blog home</a>
                        </div>
                        <div id="topicsWrapper">
                            {this.state.categories.map(cat =>
                                <a className="link blogTopic" onClick={() => {window.location.href=`/blog?c=${cat}`}}>{cat}</a>
                            )}
                        </div>
                    </div>

                    <div id="blogPostsWrapper">
                        <div id="dib-posts"></div>
                    </div>


                </div>

            </div>
        )
    };
};

export default Blog;