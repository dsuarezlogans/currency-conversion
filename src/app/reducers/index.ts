import { Currency } from'./../models/currency';
import * as fromAmount from'./amount';
import * as fromCurrency from'./currency';

export interface State {
    amount: number;
    currencies: Currency[];
}

export const getAmountState = (state: State) => state.amount;

export const getCurrencyRates = (state: State) => state.currencies;

export const reducers = {
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer
};

