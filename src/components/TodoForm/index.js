import { Fragment, useContext, useState } from 'react'
import { MainWrapper, InputWrapper, SubmitButton } from './styles'
import ThemeContext from '../../app/ThemeContext'
import { useStoreActions } from 'easy-peasy'
import { v4 as uuid } from 'uuid';

const TodoForm = () => {
    const addTodo = useStoreActions(actions => actions.addTodo)

    const { theme } = useContext(ThemeContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleAddTask = () => {
        // call redux action
        addTodo({
            id: uuid(),
            title,
            description,
            status: "Open"
        })

        // lastly restart input fields
        setTitle("")
        setDescription("")
    }

    return (
        <MainWrapper theme={theme}>
            <InputWrapper>
                <input type="text" name="name" placeholder="Task Title" onChange={(e) => setTitle(e.target.value)} value={title} /> <br />
                <textarea name="description" placeholder="Task Description" onChange={(e) => setDescription(e.target.value)} value={description} />
                <SubmitButton onClick={handleAddTask}>Add Task</SubmitButton>
            </InputWrapper>
        </MainWrapper>
    )
}

export default TodoForm