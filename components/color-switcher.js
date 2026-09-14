import { IconButton, useColorMode } from 'theme-ui'

const ColorSwitcher = (props) => {
  const [mode, setMode] = useColorMode()
  return (
    <IconButton
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      aria-label="Toggle color mode"
      sx={{
        color: 'primary',
        cursor: 'pointer',
        borderRadius: 'circle',
        transition: 'box-shadow .125s ease-in-out, transform .125s ease-in-out',
        ':hover,:focus': {
          boxShadow: '0 0 0 2px',
          outline: 'none'
        }
      }}
      {...props}
    >
      <svg viewBox="0 0 32 32" width={24} height={24} fill="currentColor">
        <circle
          cx={16}
          cy={16}
          r={14}
          fill="none"
          stroke="currentColor"
          strokeWidth={4}
        />
        <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
      </svg>
    </IconButton>
  )
}

export default ColorSwitcher
