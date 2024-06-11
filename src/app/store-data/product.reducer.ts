import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import { displayAction } from './product.actions';


export interface productState {
    display:boolean
}

const initialState:productState = {
    display: false
}

const getFeatureSelector = createFeatureSelector<productState>('products');

export const productDisplayState = createSelector(getFeatureSelector, (products:productState)=> products.display)


export const productReducer = createReducer<productState>(
initialState,
 on(displayAction, state => {
    return {
        ...state,
        display: !state.display
    };
 })
)