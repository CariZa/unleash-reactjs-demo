import React from "react";
import axios from "axios";

let data = [];

export const instantiate = () => {
    return axios.get("http://localhost:4242/api/features").then(response => {
        data = response.data.features;
    });
}

export const isActive = (feature) => {
    let d = data.find((row) => {
        return row.name == feature;
    });
    return d ? d.enabled || false : false;
};

