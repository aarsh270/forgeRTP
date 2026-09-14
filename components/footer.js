import { Box, Container, Grid, Text, Link as A, Flex } from 'theme-ui'

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        bg: 'sunken',
        color: 'muted',
        py: [4, 5],
        mt: [5, 6],
        borderTop: '1px solid',
        borderColor: 'border'
      }}
    >
      <Container>
        <Grid columns={[1, '2fr 1fr 1fr']} gap={[3, 4]} sx={{ mb: 4 }}>
          <Box>
            <Text
              as="p"
              sx={{
                fontSize: 2,
                fontWeight: 'bold',
                color: 'text',
                mb: 1
              }}
            >
              RTP Hack Club
            </Text>
            <Text as="p" sx={{ fontSize: 1, mb: 2, maxWidth: '400px' }}>
              A high school coding club meeting at Eva Perry Regional Library in Apex, NC. Part of the global{' '}
              <A
                href="https://hackclub.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'primary' }}
              >
                Hack Club
              </A>{' '}
              community.
            </Text>
          </Box>

          <Box>
            <Text
              as="p"
              sx={{
                fontSize: 1,
                fontWeight: 'bold',
                color: 'text',
                textTransform: 'uppercase',
                letterSpacing: 'headline',
                mb: 2
              }}
            >
              Links
            </Text>
            <Flex sx={{ flexDirection: 'column', gap: 1, fontSize: 1 }}>
              <A href="#about" sx={{ color: 'muted', '&:hover': { color: 'primary' } }}>
                About
              </A>
              <A href="#meetings" sx={{ color: 'muted', '&:hover': { color: 'primary' } }}>
                Meetings
              </A>
              <A href="#faq" sx={{ color: 'muted', '&:hover': { color: 'primary' } }}>
                FAQ
              </A>
              <A href="#join" sx={{ color: 'muted', '&:hover': { color: 'primary' } }}>
                Join Us
              </A>
            </Flex>
          </Box>

          <Box>
            <Text
              as="p"
              sx={{
                fontSize: 1,
                fontWeight: 'bold',
                color: 'text',
                textTransform: 'uppercase',
                letterSpacing: 'headline',
                mb: 2
              }}
            >
              Hack Club
            </Text>
            <Flex sx={{ flexDirection: 'column', gap: 1, fontSize: 1 }}>
              <A
                href="https://hackclub.com/conduct"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'muted', '&:hover': { color: 'primary' } }}
              >
                Code of Conduct
              </A>
              <A
                href="https://hackclub.com/slack"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'muted', '&:hover': { color: 'primary' } }}
              >
                Hack Club Slack
              </A>
              <A
                href="https://github.com/hackclub"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'muted', '&:hover': { color: 'primary' } }}
              >
                GitHub
              </A>
            </Flex>
          </Box>
        </Grid>

        <Box
          sx={{
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'border',
            display: 'flex',
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 0
          }}
        >
          <Text>© {new Date().getFullYear()} RTP Hack Club. 100% free and open source.</Text>
          <Text sx={{ mt: [1, 0] }}>By high schoolers, for high schoolers.</Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
