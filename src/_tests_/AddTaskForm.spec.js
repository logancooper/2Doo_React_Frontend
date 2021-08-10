import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTaskForm from '../components/AddTaskForm';

describe("<AddTaskForm />", () => {
    let getByTestId;
    let show = false;

    describe("clicking the add task button", () => {
        beforeEach(async () => {
            ({ getByTestId } = render(<AddTaskForm />));

            //action
            userEvent.click(getByTestId('addTaskModalOpenButton'));
        });
        //expected results
        it('opens the modal', () => {
            expect(getByTestId('addTaskModal').show).toEqual(true);
        });
    });

    // describe("inputing task description", () => {
    //     beforeEach(async () => {
    //         ({ getByTestId } = render(<AddTaskForm />));

    //         //action
    //         await userEvent.type(getByTestId('addTaskDescriptionText'), 'Test Task');

    //         //expected results
    //         it('inputs the text', () => {
    //             expect(getByTestId('addTaskDescriptionText').show).toEqual('Test Task');
    //         });
    //     });

    // });
})