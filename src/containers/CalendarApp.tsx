import Header from '../component/Header'
import MenuDivider from '../component/ui/MenuDivider'

const styles = {
  Container: {
    padding: '20px'
  },
  HeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px'

  },
  MidContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  Calendar: {
    width: '20%'
  },
  DateDayTimelineContainer: {
    width: '60%'
  },
  AllDayEventsContainer: {
    width: '20%'
  }
} as const
const CalendarApp = () => {
  return (
    <div
      style={styles.Container}
    >
      <div
        style={styles.HeaderContainer}
      >
        <Header />
      </div>
      <MenuDivider />
      <div
        style={styles.MidContainer}
      >
        <div
          style={styles.Calendar}
        >
          Calendar
        </div>
        <div
          style={styles.DateDayTimelineContainer}
        >
          <div>
            Date and day
          </div>
          <div>
            Timeline
          </div>
        </div>
        <div
          style={styles.AllDayEventsContainer}
        >
          All day events
        </div>
      </div>
    </div>
  )
}

export default CalendarApp
