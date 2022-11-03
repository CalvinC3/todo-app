import styled from "styled-components";

export const MainWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    min-height: 63vh;
    overflow-x: hidden;
    width: 100%;
    padding: 10px;

    >* {
        margin: 10px 0px;
    }

    ::-webkit-scrollbar {
        display: none;
      }
`

export const CardItemWrapper = styled.div`
    min-height: 120px;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: white;
   
    color: black;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    transition: all .2s;

    :hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    &.completed {
      border: 1px solid #2ad146;
      box-shadow: 0 4px 8px 0 rgb(103 226 33 / 20%);

      -webkit-transition: box-shadow 0.5s ease-in-out;
      transition: box-shadow 0.5s ease-in-out;

      -webkit-transition: border 0.5s ease-in-out;
      transition: border 0.5s ease-in-out;
    }
`

export const LeftSection = styled.div`
    flex-grow: 1;
    text-align: start;
    padding: 0px 24px;

    .task-title {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .task-description {
      font-size: 15px;
      color: #646060;
      font-family: sans-serif;
    }

    p.task-status.completed {
      color: green;
      text-transform: uppercase;
      -webkit-transition: color 0.5s ease-in-out;
      transition: color 0.5s ease-in-out;
      -webkit-transition: text-transform 0.5s ease-in-out;
      transition: text-transform 0.5s ease-in-out;
    }
    
`

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    margin: 10px;

    >* {
      margin: 4px 0px;
    }
`

export const MarkCompleteButton = styled.button`
align-items: center;
appearance: none;
backface-visibility: hidden;
background-color: #27ae60;
border-radius: 8px;
border-style: none;
box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
box-sizing: border-box;
color: #fff;
cursor: pointer;
display: inline-flex;
font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
font-size: 16px;
font-weight: 600;
letter-spacing: normal;
line-height: 1.5;
outline: none;
overflow: hidden;
padding: 13px 20px;
position: relative;
text-align: center;
text-decoration: none;
transform: translate3d(0, 0, 0);
transition: all .3s;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
vertical-align: top;
white-space: nowrap;

:hover {
  background-color: #1e8449;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
box-shadow: rgba(39, 174, 96, .2) 0 6px 12px;

}

:active {
  transform: translateY(2px);
  transition-duration: .35s;
}

span {
    margin-left: 8px;
}


`
export const DeleteButton = styled.button`
display: inline-flex;
align-items: center;
appearance: none;
backface-visibility: hidden;
background-color: #ae2732;
border-radius: 8px;
border-style: none;
box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
box-sizing: border-box;
color: #fff;
cursor: pointer;
font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
font-size: 16px;
font-weight: 600;
letter-spacing: normal;
line-height: 1.5;
outline: none;
overflow: hidden;
padding: 13px 20px;
position: relative;
text-align: center;
text-decoration: none;
transform: translate3d(0, 0, 0);
transition: all .3s;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
vertical-align: top;
white-space: nowrap;

:hover {
  background-color: #841e1e;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
box-shadow: rgba(39, 174, 96, .2) 0 6px 12px;

}

:active {
  transform: translateY(2px);
  transition-duration: .35s;
}
span {
    margin-left: 8px;
}
`