/**
 * Copyright (c) 2020, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { createReducer } from '@reduxjs/toolkit';

import { getLocalStorageTheme, saveLocalStorageTheme } from './local-storage';

import {
    CHOSEN_POINT,
    COLOR,
    SELECT_THEME,
    UPDATE_HIDDEN,
} from './actions';

import { removeTime } from '../utils/api';

//my store
const initialState = {
    theme: getLocalStorageTheme(),
    hidden: true,
    point: null,
    color: "#2196f3"
};

export const reducer = createReducer(initialState, {
    [SELECT_THEME]: (state, action) => {
        state.theme = action.theme;
        saveLocalStorageTheme(state.theme);
    },
    [CHOSEN_POINT]: (state, action) => {
        state.point = action.point;
    },
    [UPDATE_HIDDEN]: (state, action) => {
        state.hidden = action.hidden;
    },
    [COLOR]: (state, action) => {
        state.color = action.color;
    },
});
