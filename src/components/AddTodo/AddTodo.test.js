import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import  AddTodo  from './AddTodo'

it("renders correctly", () => {
    const {queryByTestId, queryByPlaceholderText} = render(<AddTodo/>)

    expect(queryByTestId('todoInput')).toBeTruthy()
    expect(queryByPlaceholderText('Add todo')).toBeTruthy()
})

describe("Input value", () => {
    it('updates on change', () => {
        const {queryByPlaceholderText} = render(<AddTodo/>)

        const addInput = queryByPlaceholderText('Add todo')

        fireEvent.change(addInput, {target: {value: 'test'}})

        expect(addInput.value).toBe('test')
    })
})

describe("Add todo button", () => {
    describe("with empty query", () => {
        it("does not trigger addTodo function", () => {
            const addTodo = jest.fn();

            const {queryByTestId} = render(<AddTodo addTodo={addTodo}/>)
            fireEvent.click(queryByTestId('addTodo'))
            expect(addTodo).not.toHaveBeenCalled()
        } )
    })

    describe("with data inside query", () => {
        it('triggers addTodo function', () => {
            const addTodo = jest.fn();

            const {queryByTestId, queryByPlaceholderText} = render(<AddTodo addTodo={addTodo}/>)
            const addInput = queryByPlaceholderText('Add todo')
            fireEvent.change(addInput, {target: {value: 'test'}})
            
            fireEvent.click(queryByTestId('addTodo'))
            expect(addTodo).toHaveBeenCalled()
        })
    })
})