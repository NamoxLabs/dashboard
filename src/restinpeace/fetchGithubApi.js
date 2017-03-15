/* eslint-disable no-console */

import 'whatwg-fetch';

/**
 * Fetch the branches info for given repo directly per 'REST' from GitHub.
 *
 * @param repo <userName>/<repoName>, like lowsky/dashboard
 */
let fetchRepoBranches = (repo) => {
    let url = `https://api.github.com/repos/${repo}/branches`; // eslint-disable-line quotes
    return fetch(url).then(response => response.json());
};

/**
 * Fetch the user info for a given login directly per 'REST' from GitHub.
 *
 * @param login user's login name, e.g lowsky
 */
let fetchUser = (login) => {
    let url = `https://api.github.com/users/${login}`; // eslint-disable-line quotes
    return fetch(url).then(response => response.json());
};

export default {
    fetchUser,
    fetchRepoBranches
};
