import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisbleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisbleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })

const expense1 = store.dispatch(addExpense({ description: 'Water Bill', amount: 600 }))
const expense2 = store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt: 1000 }))
const expense3 = store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 5000 }))
store.dispatch(setTextFilter(''))

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
