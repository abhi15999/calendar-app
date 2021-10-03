import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
const Header = () => {
  return (
    <>
      <div>
        <h2
          style={{ color: 'var(--primaryFont)' }}
        >
          Calendar
        </h2>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <h3
            style={{ color: 'var(--secondaryFont)' }}
          >
            Filter
          </h3>
          <KeyboardArrowDownIcon style={{ fill: 'var(--secondaryFont)' }} />
        </div>
      </div>
    </>
  )
}

export default Header
