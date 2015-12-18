import React from 'react';

import { DashboardRow } from './src/DashboardRow.jsx';
import BranchesTable  from './src/BranchesTable.jsx';

const repo = 'lowsky/dashboard';

let branchesTable = document.getElementById('branches-table');

let renderOrUpdateBranches = (branches) => {
    React.render(
        <BranchesTable branches={ branches } />,
        branchesTable);
};

let requestAndShowBranches = () => {
    let url = `https://api.github.com/repos/${repo}/branches`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);

            console.log(data);

            let branchNames = data.map(function (item) {
                return item.name;
            });
            console.log(branchNames);

            renderOrUpdateBranches(branchNames);

        } else {
            alert(`Load error, while trying to retrieve data from $url - respond status: `, request.status);
        }
    };
    request.onerror = () => {
        console.error('Error occured', request);
        alert(`Load error, while trying to retrieve data from $url`);
    };
    return request;
};

renderOrUpdateBranches([]);

requestAndShowBranches().send();
