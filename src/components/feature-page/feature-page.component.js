import React from "react";

import FeatureGoodbye from "../feature-goodbye/feature-goodbye.component";
import FeatureHello from "../feature-hello/feature-hello.component";

import { instantiate, isActive } from "../unleash/unleash.component";

import "./feature-page.style.scss";

class FeaturePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            FeatureGoodbye: false,
            FeatureHello: false,
            FeatureX: false,
        };

        this.checkFeatures = this.checkFeatures.bind(this)
        setInterval(this.checkFeatures, 3000);
    }

    checkFeatures() {
        instantiate().then(data => {
            this.setState(() => {
                return {
                    FeatureGoodbye: isActive("FeatureGoodbye")
                }
            });
            this.setState(() => {
                return {
                    FeatureHello: isActive("FeatureHello")
                }
            });
            this.setState(() => {
                return {
                    FeatureX: isActive("FeatureX")
                }
            });
        });
    }

    render() {

        return (
            <div>

                <div>
                    {
                        this.state.FeatureX ? (<h1>Feature X</h1>) : "toggle off x"
                    }
                </div>
                
                <div>
                    { 
                        this.state.FeatureGoodbye ? <FeatureGoodbye /> : "toggleoff"
                    }
                </div>

                <div>
                    { 
                        this.state.FeatureHello ? <FeatureHello /> : "toggleoff"
                    }
                </div>
                
            </div>
        )
    }
};

export default FeaturePage;