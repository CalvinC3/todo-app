import styled from "styled-components"
import { MdCheckCircleOutline, MdDeleteForever } from "react-icons/md";
import { useStoreActions } from "easy-peasy";


import { CardItemWrapper, LeftSection, RightSection, MarkCompleteButton, DeleteButton } from "./styles"

export const CardItem = ({ item }) => {

  const markComplete = useStoreActions(actions => actions.markComplete)
  const deleteItem = useStoreActions(actions => actions.deleteItem)


  const handleMarkComplete = () => {
    markComplete({ id: item.id })
  }

  const handleDeleteItem = () => {
    deleteItem({ id: item.id })
  }

  return (
    <CardItemWrapper
      className={item.status === 'Completed' ? "completed" : ""}
    >
      <LeftSection>
        <p className="task-title">{item.title}</p>
        <p className="task-description">{item.description}</p>
        <p className={`task-status ${item.status === 'Completed' ? "completed": ""}`}>
          {item.status}
        </p>
      </LeftSection>
      <RightSection>
        <MarkCompleteButton onClick={handleMarkComplete} disabled={item.status === 'Completed'}>
          <MdCheckCircleOutline />
          <span>Complete</span>
        </MarkCompleteButton>
        <DeleteButton onClick={handleDeleteItem}>
          <MdDeleteForever />
          <span>Delete</span>
        </DeleteButton>
        {/* <StyledButton>Hover me</StyledButton> */}
      </RightSection>

    </CardItemWrapper>
  )
}