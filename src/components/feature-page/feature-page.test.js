import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FeaturePage from "./feature-page.component";

configure({ adapter: new Adapter()});

describe("tets for <FeaturePage />", () => {
    let component = shallow(<FeaturePage />);
    it ("should initiate the <FeaturePage /> component", () => {
        expect(component).toBeDefined();
    });

    it("should have a FeatureGoodbye component", () => {
        let el = component.find('FeatureGoodbye');
        expect(el.length).toBe(1);
    });

    it("should have a FeatureHello component", () => {
        let el = component.find('FeatureHello');
        expect(el.length).toBe(1);
    });
});