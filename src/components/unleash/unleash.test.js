import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() })

import { instantiate, isActive } from "./unleash.component";

describe("Unleash wrapper", () => {

    it("should fetch data ", () => {
        let inst = instantiate();
    })

});