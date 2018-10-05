import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FeatureHello from "./feature-hello.component";

configure({adapter: new Adapter() });

describe("<FeatureHello />", () => {

    let component = shallow(<FeatureHello />);

    it("should render the FeatreHello component", () => {
        expect(component).toBeDefined();
    });

    it("should have a h1 heading", () => {
        let h1 = component.find('h1');
        // expect(component).toBeDefined();
        expect(h1.length).toEqual(1);
    });

    it("should have a h1 heading with 'hello world'", () => {
        let h1 = component.find('h1');
        let findWords = "Hello World";
        let index = h1.text().indexOf(findWords);
        expect(index).toBe(0);
    });
});