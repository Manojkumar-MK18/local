import moment from 'moment'
import { ReactElement } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { CalendarWrapper } from './subcomponent'
import { CalendarProps } from './typings'

const CustomeCalendar = ({ onClick, events }: CalendarProps): ReactElement => {
  const localizer = momentLocalizer(moment)
  return (
    <CalendarWrapper>
      <Calendar
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={onClick}
      />
    </CalendarWrapper>
  )
}

export default CustomeCalendar
