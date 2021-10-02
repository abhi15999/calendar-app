const styles = {
  MidContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  Calendar: {
    width: '20%'
  },
  DateDayTimelineContainer: {
    width: '60%'
  }
} as const
const CalendarApp = () => {
  return (
    <>
      <div>
        Header
      </div>
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
        <div>
          All day events
        </div>
      </div>
    </>
  )
}

export default CalendarApp
