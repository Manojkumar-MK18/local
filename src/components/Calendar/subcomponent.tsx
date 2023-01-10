import styled from 'styled-components'

export const CalendarWrapper = styled.div`
  width: 90%;
  overflow: hidden;
  .rbc-event,
  .rbc-day-slot .rbc-background-event {
    background-color: #69296f;
    color: white;
  }
  .rbc-today {
    background-color: #eaf6ff;
    border: 1px solid #b9e0fd;
  }
  .rbc-day-bg:hover {
    background-color: #eec7f1;
    color: white;
  }
`
