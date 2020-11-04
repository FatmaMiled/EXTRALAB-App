/**
 * Copyright (c) 2020, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const PREFIX_BACK_QUERIES = process.env.REACT_APP_API_BACK;

function backendFetch(url, init) {
    if (!(typeof init == 'undefined' || typeof init == 'object')) {
        throw new TypeError(
            'Argument 2 of backendFetch is not an object' + typeof init
        );
    }
    const initCopy = Object.assign({}, init);
    initCopy.headers = new Headers(initCopy.headers || {});
    return fetch(url, initCopy);
}

export function fetchObservatoires() {
    console.info('Fetching observatoires...');
    const fetchObservatoiresUrl = PREFIX_BACK_QUERIES + '/observatoires';
    return backendFetch(fetchObservatoiresUrl).then((response) =>
        response.json()
    );
}
