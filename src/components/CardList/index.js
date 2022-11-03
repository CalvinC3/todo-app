import { MainWrapper } from './styles'
import { useStoreState } from 'easy-peasy';

import { CardItem } from './CardItem';

const CardList = () => {
    const todos = useStoreState((state) => state.todos);

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