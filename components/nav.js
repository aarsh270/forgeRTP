import { Box, Container, Flex, Link as A, Button } from 'theme-ui'
import ColorSwitcher from './color-switcher'

const Nav = ({ formUrl = 'https://forms.gle/NvaAfaiM31Kk8TKx5' }) => {
  return (
    <Box
      as="header"
      sx={{
        position: 'relative',
        zIndex: 50,
        width: '100%',
        backgroundColor: 'transparent',
        py: 3
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: [3, 4]
        }}
      >
        {/* Hack Club Ribbon Flag Logo */}
        <A
          href="#"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            gap: 2
          }}
        >
          <Box
            as="img"
            src="https://assets.hackclub.com/flag-standalone.svg"
            alt="Hack Club logo"
            sx={{
              height: ['36px', '44px'],
              width: 'auto'
            }}
          />
        </A>

        {/* Navigation items */}
        <Flex sx={{ alignItems: 'center', gap: [3, 4] }}>
          <A
            href="#about"
            sx={{
              display: ['none', 'inline-block'],
              color: 'text',
              fontWeight: 600,
              fontSize: 2,
              textDecoration: 'none',
              opacity: 0.85,
              transition: 'opacity 0.15s ease-in-out',
              '&:hover': { opacity: 1 }
            }}
          >
            About
          </A>
          <A
            href="#meetings"
            sx={{
              display: ['none', 'inline-block'],
              color: 'text',
              fontWeight: 600,
              fontSize: 2,
              textDecoration: 'none',
              opacity: 0.85,
              transition: 'opacity 0.15s ease-in-out',
              '&:hover': { opacity: 1 }
            }}
          >
            Meetings
          </A>
          <A
            href="#projects"
            sx={{
              display: ['none', 'inline-block'],
              color: 'text',
              fontWeight: 600,
              fontSize: 2,
              textDecoration: 'none',
              opacity: 0.85,
              transition: 'opacity 0.15s ease-in-out',
              '&:hover': { opacity: 1 }
            }}
          >
            Projects
          </A>
          <A
            href="#faq"
            sx={{
              display: ['none', 'inline-block'],
              color: 'text',
              fontWeight: 600,
              fontSize: 2,
              textDecoration: 'none',
              opacity: 0.85,
              transition: 'opacity 0.15s ease-in-out',
              '&:hover': { opacity: 1 }
            }}
          >
            FAQ
          </A>

          <ColorSwitcher />

          <Button
            as="a"
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bg: 'elevated',
              color: 'text',
              borderRadius: 'circle',
              px: [3, 4],
              py: '10px',
              fontSize: [1, 2],
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: 'card',
              border: '1px solid',
              borderColor: 'border',
              cursor: 'pointer',
              transition: 'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
              '&:hover': {
                transform: 'scale(1.04)',
                boxShadow: 'elevated'
              }
            }}
          >
            Join the community
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav
