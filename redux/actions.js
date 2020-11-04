/**
 * Copyright (c) 2020, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

export const DARK_THEME = 'Dark';
export const LIGHT_THEME = 'Light';

export const SELECT_THEME = 'SELECT_THEME';
export function selectTheme(theme) {
    return { type: SELECT_THEME, theme: theme };
}

export const UPDATE_HIDDEN = 'UPDATE_HIDDEN';
export function updateHidden(hidden) {
    return { type: UPDATE_HIDDEN, hidden: hidden };
}

export const CHOSEN_POINT = 'CHOSEN_POINT';
export function chosenPoint(point) {
    console.log(point);
    return { type: CHOSEN_POINT, point: point };
}

export const COLOR = 'COLOR';
export function color(color) {
    console.log(color);
    return { type: COLOR, color: color };
}
