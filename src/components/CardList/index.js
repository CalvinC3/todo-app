import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MainWrapper } from './styles'
import { useStoreState, useStoreActions } from 'easy-peasy';

import { CardItem } from './CardItem';

const CardList = () => {
    const todos = useStoreState((state) => state.todos);

    useEffect(() => {
        console.log('watch todos', todos)
    }, [todos])


    return (
        <MainWrapper>
            {todos.status !== "FULFILLED" && "No items"}
            {todos.status === "PENDING" && "Fetching items"}
            {
                todos.status === "FULFILLED"
                && todos.data.length > 0
                && todos.data.map((todo) => <CardItem item={todo} key={todo.id} />)
            }

        </MainWrapper>
    )
}

export default CardList