import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set defaul state', () => {
	const state = expensesReducer(undefined, { type: '@@INTI' })
	expect(state).toEqual([])
})

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual(expenses)
})

//add
test('should add an expense', () => {
	const expense = {
		id: '100',
		description: 'New Expense',
		note: '',
		amount: 195,
		createdAt: 0
	}
	const action = {
		type: 'ADD_EXPENSE',
		expense
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
	const updates = {
		id: '2',
		description: 'Edited Expense',
		note: 'This was edited',
		amount: 777,
		createdAt: 0
	}
	const action = {
		type: 'EDIT_EXPENSE',
		id: updates.id,
		updates
	}
	const state = expensesReducer(expenses, action)
	expect(state[1]).toEqual(action.updates)
})

test('should not edit an expense if ID not found', () => {
	const updates = {
		id: '-1',
		description: 'Edited Expense',
		note: 'This was edited',
		amount: 777,
		createdAt: 0
	}
	const action = {
		type: 'EDIT_EXPENSE',
		id: updates.id,
		updates
	}
	const state = expensesReducer(expenses, action)
	expect(state).toEqual(expenses)
})
