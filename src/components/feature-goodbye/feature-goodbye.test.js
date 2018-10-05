import React from "react";
import { shallow, configure } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import FeatureGoodbye from "./feature-goodbye.component";

configure({ adapter: new Adapter() });

describe("tests for <FeatureGoodbye />", () => {
    let component = shallow(<FeatureGoodbye />);
    it("shoud initiate the component FeatureGoodbye ", () => {
        expect(component).toBeDefined();
    });

    it("should have an h1 element", () => {
        let h1 = component.find('h1');
        expect(h1.length).toBe(1);
    });

    it("should have the text goodbye world", () => {
        let h1 = component.find('h1');
        let expected_text = "Goodbye World";
        let index = h1.text().indexOf(expected_text);
        expect(index).toBe(0);
    });
});