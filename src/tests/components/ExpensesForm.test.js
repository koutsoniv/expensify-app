import React from 'react'
import { shallow } from 'enzyme'
import ExpenseFrom from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseFrom correctly', () => {
	const wrapper = shallow(<ExpenseFrom />)
	expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm correctly with Expense data', () => {
	const wrapper = shallow(<ExpenseFrom expense={expenses[1]} />)
	expect(wrapper).toMatchSnapshot()
})

test('should render error for inalid form submission', () => {
	const wrapper = shallow(<ExpenseFrom />)
	expect(wrapper).toMatchSnapshot()
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	})
	expect(wrapper.state('error').length).toBeGreaterThan(0)
	expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
	const value = 'New description'
	const wrapper = shallow(<ExpenseFrom />)
	wrapper
		.find('input')
		.at(0)
		.simulate('change', {
			target: { value }
		})
	expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
	const value = 'This is a new note'
	const wrapper = shallow(<ExpenseFrom />)
	wrapper
		.find('textarea')
		.at(0)
		.simulate('change', {
			target: { value }
		})
	expect(wrapper.state('note')).toBe(value)
})

//should set amount fi valid input 23.5
//should not set amount if invalid input 12.122
test('should set amount if valid input 23.5', () => {
	const value = '23.5'
	const wrapper = shallow(<ExpenseFrom />)
	wrapper
		.find('input')
		.at(1)
		.simulate('change', {
			target: { value }
		})
	expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount if valid input 12.122', () => {
	const value = '12.122'
	const wrapper = shallow(<ExpenseFrom />)
	wrapper
		.find('input')
		.at(1)
		.simulate('change', {
			target: { value }
		})
	expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn()
	const wrapper = shallow(<ExpenseFrom expense={expenses[0]} onSubmit={onSubmitSpy} />)
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	})
	expect(wrapper.state('error')).toBe('')
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt
	})
})

test('should set new date on date change', () => {
	const now = moment()
	const wrapper = shallow(<ExpenseFrom />)
	wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
	expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
	const focused = true
	const wrapper = shallow(<ExpenseFrom />)
	wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
	expect(wrapper.state('calendarFocused')).toEqual(focused)
})
