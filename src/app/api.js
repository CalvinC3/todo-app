

export const InitializeStorage = () => {
    const currentStorage = JSON.parse(localStorage.getItem('todo'))

    if (!currentStorage) {
        localStorage.setItem("todo",
            JSON.stringify([])
        )
    }

    return InitializeStorage
}

export const AddItem = ({data}) => {

    const currentStorage = InitializeStorage();
    currentStorage.push({...data})

}

export const getList = () => JSON.parse(localStorage.getItem("todo") || [])