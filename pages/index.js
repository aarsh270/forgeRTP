import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  Button,
  Badge,
  Flex,
  Image,
  Link as A
} from 'theme-ui'
import Nav from '../components/nav'
import Footer from '../components/footer'

const EMAIL_FORM_URL = 'https://forms.gle/NvaAfaiM31Kk8TKx5'

// Side sticker decoration component (no pictures of people)
const SideSticker = ({ src, alt = 'Hack Club sticker', top, left, right, bottom, width = '90px', rotate = '0deg', sx = {} }) => (
  <Box
    sx={{
      display: ['none', 'none', 'none', 'none', 'block'],
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      zIndex: 2,
      pointerEvents: 'auto',
      cursor: 'pointer',
      filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.22))',
      transform: `rotate(${rotate})`,
      transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '&:hover': {
        transform: 'scale(1.15) rotate(0deg)',
        zIndex: 10
      },
      ...sx
    }}
  >
    <Image src={src} alt={alt} sx={{ width: '100%', height: 'auto', display: 'block' }} />
  </Box>
)

export default function Home() {
  const [email, setEmail] = useState('')

  const handleJoinSubmit = (e) => {
    e.preventDefault()
    window.open(EMAIL_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bg: 'background' }}>
      <Nav formUrl={EMAIL_FORM_URL} />

      <Box as="main" sx={{ flex: 1 }}>
        {/* HERO SECTION WITH SIDE COLLAGES */}
        <Box
          id="hero"
          sx={{
            position: 'relative',
            pt: [3, 4],
            pb: [6, 7],
            minHeight: ['auto', 'auto', '820px', '980px'],
            overflow: 'hidden',
            textAlign: 'center',
            backgroundImage: [
              'radial-gradient(ellipse at 50% 25%, rgba(236, 55, 80, 0.12), transparent 70%)'
            ]
          }}
        >
          {/* Background Doodle Blueprint Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              pointerEvents: 'none',
              zIndex: 0,
              opacity: 0.25
            }}
          >
            <Box
              as="img"
              src="https://hackclub.com/assets/background.webp"
              alt=""
              sx={{
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                minWidth: '1000px',
                width: '100%',
                transform: 'translateX(-50%)',
                maskImage: 'linear-gradient(to top, black 40%, transparent 85%)',
                WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 85%)'
              }}
            />
          </Box>

          {/* LEFT SIDE PHOTO & STICKER STACK */}
          <Box
            className="hero-side-photos"
            sx={{
              display: ['none', 'none', 'none', 'block'],
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: ['-60px', '-30px', '10px', '20px'],
              width: '260px',
              pointerEvents: 'none',
              zIndex: 3
            }}
          >
            {/* Left Photo 1 */}
            <Box
              sx={{
                position: 'absolute',
                top: '30px',
                left: '10px',
                width: '210px',
                border: '4px solid #ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'rotate(-8deg)',
                transition: 'transform 0.25s ease-in-out',
                pointerEvents: 'auto',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06) rotate(0deg)', zIndex: 15 }
              }}
            >
              <Image src="https://hackclub.com/assets/hero_photo1.webp" alt="Hack Club workshop" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Sticker 1 (Hack Club Logo Badge) */}
            <Box
              sx={{
                position: 'absolute',
                top: '125px',
                left: '135px',
                width: '95px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))',
                zIndex: 6,
                transform: 'rotate(12deg)'
              }}
            >
              <Image src="https://hackclub.com/assets/hero_sticker1.webp" alt="Hack Club Sticker" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Left Photo 2 */}
            <Box
              sx={{
                position: 'absolute',
                top: '230px',
                left: '-15px',
                width: '220px',
                border: '4px solid #ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'rotate(6deg)',
                transition: 'transform 0.25s ease-in-out',
                pointerEvents: 'auto',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06) rotate(0deg)', zIndex: 15 }
              }}
            >
              <Image src="https://hackclub.com/assets/hero_photo2.webp" alt="Hack Club event" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Left Photo 3 */}
            <Box
              sx={{
                position: 'absolute',
                top: '430px',
                left: '20px',
                width: '210px',
                border: '4px solid #ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'rotate(-5deg)',
                transition: 'transform 0.25s ease-in-out',
                pointerEvents: 'auto',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06) rotate(0deg)', zIndex: 15 }
              }}
            >
              <Image src="https://hackclub.com/assets/hero_photo3.webp" alt="Hack Club hackers" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Sticker 3 (Red 'h' sticker) */}
            <Box
              sx={{
                position: 'absolute',
                top: '410px',
                left: '160px',
                width: '55px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))',
                zIndex: 6,
                transform: 'rotate(-10deg)'
              }}
            >
              <Image src="https://hackclub.com/assets/hero_sticker3.webp" alt="Hack Club 'h' Sticker" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Left Photo 4 */}
            <Box
              sx={{
                position: 'absolute',
                top: '620px',
                left: '-10px',
                width: '220px',
                border: '4px solid #ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'rotate(7deg)',
                transition: 'transform 0.25s ease-in-out',
                pointerEvents: 'auto',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06) rotate(0deg)', zIndex: 15 }
              }}
            >
              <Image src="https://hackclub.com/assets/hero_photo4.webp" alt="Hack Club project session" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Left Photo 5 */}
            <Box
              sx={{
                position: 'absolute',
                top: '800px',
                left: '15px',
                width: '210px',
                border: '4px solid #ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'rotate(-6deg)',
                transition: 'transform 0.25s ease-in-out',
                pointerEvents: 'auto',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06) rotate(0deg)', zIndex: 15 }
              }}
            >
              <Image src="https://hackclub.com/assets/hero_photo5.webp" alt="Hack Club hardware session" sx={{ width: '100%', display: 'block' }} />
            </Box>
          </Box>

          {/* RIGHT SIDE PHOTO, STICKER & ORPHEUS STACK */}
          <Box
            className="hero-side-photos"
            sx={{
              display: ['none', 'none', 'none', 'block'],
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: ['-60px', '-30px', '10px', '20px'],
              width: '260px',
              pointerEvents: 'none',
              zIndex: 3
            }}
          >
            {/* Right Photo 1 */}
            <Box
              sx={{
                position: 'absolute',
                top: '30px',
                right: '10px',
                width: '210px',
                border: '4px solid #ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'rotate(9deg)',
                transition: 'transform 0.25s ease-in-out',
                pointerEvents: 'auto',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06) rotate(0deg)', zIndex: 15 }
              }}
            >
              <Image src="https://hackclub.com/assets/hero_photo8.webp" alt="Hack Club coding" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Sticker 7 (Boba Drink) */}
            <Box
              sx={{
                position: 'absolute',
                top: '125px',
                right: '135px',
                width: '80px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))',
                zIndex: 6,
                transform: 'rotate(-8deg)'
              }}
            >
              <Image src="https://hackclub.com/assets/hero_sticker7.webp" alt="Boba Sticker" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Right Photo 2 */}
            <Box
              sx={{
                position: 'absolute',
                top: '230px',
                right: '-15px',
                width: '220px',
                border: '4px solid #ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'rotate(-7deg)',
                transition: 'transform 0.25s ease-in-out',
                pointerEvents: 'auto',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06) rotate(0deg)', zIndex: 15 }
              }}
            >
              <Image src="https://hackclub.com/assets/hero_photo9.webp" alt="Hack Club hackathon" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Sticker 4 (Retro Mac with 'hack' screen) */}
            <Box
              sx={{
                position: 'absolute',
                top: '350px',
                right: '130px',
                width: '90px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))',
                zIndex: 6,
                transform: 'rotate(12deg)'
              }}
            >
              <Image src="https://hackclub.com/assets/hero_sticker4.webp" alt="Retro Mac Sticker" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Right Photo 3 */}
            <Box
              sx={{
                position: 'absolute',
                top: '440px',
                right: '15px',
                width: '210px',
                border: '4px solid #ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'rotate(8deg)',
                transition: 'transform 0.25s ease-in-out',
                pointerEvents: 'auto',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06) rotate(0deg)', zIndex: 15 }
              }}
            >
              <Image src="https://hackclub.com/assets/hero_photo10.webp" alt="Hack Club teens" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Sticker 5 (Red microchip sticker) */}
            <Box
              sx={{
                position: 'absolute',
                top: '550px',
                right: '150px',
                width: '55px',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))',
                zIndex: 6,
                transform: 'rotate(-14deg)'
              }}
            >
              <Image src="https://hackclub.com/assets/hero_sticker5.webp" alt="Chip Sticker" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Right Photo 4 */}
            <Box
              sx={{
                position: 'absolute',
                top: '630px',
                right: '-10px',
                width: '220px',
                border: '4px solid #ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'rotate(-5deg)',
                transition: 'transform 0.25s ease-in-out',
                pointerEvents: 'auto',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06) rotate(0deg)', zIndex: 15 }
              }}
            >
              <Image src="https://hackclub.com/assets/hero_photo11.webp" alt="Hack Club building" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* Right Photo 5 */}
            <Box
              sx={{
                position: 'absolute',
                top: '800px',
                right: '15px',
                width: '210px',
                border: '4px solid #ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transform: 'rotate(7deg)',
                transition: 'transform 0.25s ease-in-out',
                pointerEvents: 'auto',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.06) rotate(0deg)', zIndex: 15 }
              }}
            >
              <Image src="https://hackclub.com/assets/hero_photo12.webp" alt="Hack Club hardware workshop" sx={{ width: '100%', display: 'block' }} />
            </Box>

            {/* ORPHEUS CREATURE PEAKING BOTTOM RIGHT */}
            <Box
              sx={{
                position: 'absolute',
                bottom: '10px',
                right: '-10px',
                width: ['160px', '190px', '220px'],
                filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.3))',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            >
              <Image src="https://hackclub.com/assets/creature1.webp" alt="Orpheus Mascot" sx={{ width: '100%', display: 'block' }} />
            </Box>
          </Box>

          {/* TOP ANNOUNCEMENT BANNER */}
          <Flex sx={{ justifyContent: 'center', mb: [3, 4], px: 3, position: 'relative', zIndex: 4 }}>
            <A
              href="#meetings"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
                px: 3,
                py: 1,
                borderRadius: 'circle',
                fontSize: [1, 2],
                fontWeight: 600,
                color: 'text',
                bg: 'sheet',
                border: '1px solid',
                borderColor: 'border',
                textDecoration: 'none',
                boxShadow: 'card',
                transition: 'transform 0.15s ease-in-out, border-color 0.15s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  borderColor: 'primary'
                }
              }}
            >
              <span>✨</span>
              <span>Check out our upcoming monthly meetups at Eva Perry Library</span>
              <span>→</span>
            </A>
          </Flex>

          {/* CENTER CONTENT */}
          <Container sx={{ maxWidth: '800px', px: 3, position: 'relative', zIndex: 4 }}>
            {/* Iconic Hack Club Heading */}
            <Heading
              as="h1"
              sx={{
                fontFamily: 'Georgia, serif, "Phantom Sans"',
                fontSize: ['46px', '68px', '84px'],
                fontWeight: 'normal',
                lineHeight: 0.95,
                color: 'text',
                margin: 0,
                mb: 3,
                letterSpacing: '-0.02em'
              }}
            >
              Where{' '}
              <Text
                as="span"
                sx={{
                  fontFamily: 'heading',
                  fontWeight: 'bold',
                  background:
                    'repeating-linear-gradient(105deg, #ec3750 0%, #ff8c37 16%, #f1c40f 32%, #33d6a6 48%, #338eda 64%, #a633d6 80%, #ec3750 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'teens-gradient 6s linear infinite'
                }}
              >
                teens
              </Text>
              <br />
              make cool stuff.
            </Heading>

            {/* Subtitle */}
            <Text
              as="p"
              sx={{
                fontSize: [2, 3],
                color: 'muted',
                lineHeight: 'caption',
                maxWidth: '600px',
                mx: 'auto',
                mb: [4, 4]
              }}
            >
              Hack Club RTP is a student-led community of teenagers making games, websites, hardware, and cool projects at Eva Perry Regional Library.
            </Text>

            {/* Email Signup Capsule Bar */}
            <Box
              as="form"
              onSubmit={handleJoinSubmit}
              sx={{
                maxWidth: '480px',
                mx: 'auto',
                mb: 2,
                position: 'relative'
              }}
            >
              <Flex
                sx={{
                  alignItems: 'center',
                  bg: 'elevated',
                  borderRadius: 'circle',
                  p: '6px',
                  border: '1px solid',
                  borderColor: 'border',
                  boxShadow: 'card',
                  transition: 'border-color 0.15s ease-in-out',
                  '&:focus-within': {
                    borderColor: 'primary'
                  }
                }}
              >
                <Box
                  as="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="orpheus@example.com"
                  sx={{
                    flex: 1,
                    bg: 'transparent',
                    border: 'none',
                    outline: 'none',
                    px: 3,
                    py: 2,
                    fontSize: 2,
                    color: 'text',
                    fontFamily: 'inherit',
                    '&::placeholder': {
                      color: 'muted'
                    }
                  }}
                />
                <Button
                  type="submit"
                  sx={{
                    bg: 'text',
                    color: 'background',
                    fontWeight: 'bold',
                    fontSize: 2,
                    borderRadius: 'circle',
                    px: [3, 4],
                    py: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.15s ease-in-out, opacity 0.15s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      opacity: 0.9
                    }
                  }}
                >
                  Join!
                </Button>
              </Flex>
            </Box>

            <Text sx={{ fontSize: 1, color: 'muted', display: 'block', mb: [4, 5] }}>
              For all teens aged 13–18. By continuing, you agree to our{' '}
              <A
                href="https://hackclub.com/conduct"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'primary' }}
              >
                code of conduct
              </A>
              .
            </Text>

            {/* Airmail Postcard Component */}
            <Box
              sx={{
                maxWidth: '440px',
                mx: 'auto',
                p: '10px',
                borderRadius: '16px',
                background:
                  'repeating-linear-gradient(135deg, #ec3750 0, #ec3750 14px, #ffffff 14px, #ffffff 28px, #338eda 28px, #338eda 42px, #ffffff 42px, #ffffff 56px)',
                boxShadow: 'elevated',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-3px)'
                }
              }}
            >
              <Card
                sx={{
                  bg: 'elevated',
                  p: [3, 4],
                  borderRadius: '12px',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <Flex sx={{ justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                  <Box>
                    <Text
                      sx={{
                        fontSize: 0,
                        fontWeight: 'bold',
                        letterSpacing: 'headline',
                        textTransform: 'uppercase',
                        color: 'primary',
                        display: 'block'
                      }}
                    >
                      HACK CLUB RTP
                    </Text>
                    <Text sx={{ fontSize: 0, color: 'muted' }}>APEX, NC</Text>
                  </Box>

                  {/* Stamp */}
                  <Box
                    sx={{
                      width: '42px',
                      height: '52px',
                      border: '2px dashed',
                      borderColor: 'primary',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 3
                    }}
                  >
                    📮
                  </Box>
                </Flex>

                <Text
                  as="p"
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: 1,
                    color: 'text',
                    mb: 1
                  }}
                >
                  TO: <em>you, a teenager</em>
                </Text>
                <Text
                  as="p"
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: 1,
                    color: 'muted',
                    borderBottom: '1px solid',
                    borderColor: 'border',
                    pb: 2,
                    mb: 3
                  }}
                >
                  <u>anywhere in the Triangle</u>
                </Text>

                <Button
                  as="a"
                  href={EMAIL_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: '100%',
                    bg: 'primary',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 2,
                    borderRadius: 'circle',
                    py: 2,
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'block',
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 0.92
                    }
                  }}
                >
                  Join the email list →
                </Button>
              </Card>
            </Box>
          </Container>

          {/* Bottom Red Splash Doodles from hackclub.com */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: ['90px', '140px', '180px'],
              backgroundImage:
                'url(https://cdn.hackclub.com/019db4df-dc7a-7270-94b5-df621a60c7ca/splash.png)',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'bottom center',
              backgroundSize: 'contain',
              pointerEvents: 'none',
              opacity: 0.85
            }}
          />
        </Box>

        {/* ABOUT SECTION (DECORATED WITH SIDE STICKERS) */}
        <Box
          id="about"
          sx={{
            position: 'relative',
            py: [5, 6],
            bg: 'sheet',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'border',
            overflow: 'hidden'
          }}
        >
          {/* Side Sticker Decorations */}
          <SideSticker
            src="https://hackclub.com/assets/hero_sticker2.webp"
            alt="Retro Tamagotchi Sticker"
            top="40px"
            left={['0', '0', '0', '0', '40px', '70px']}
            width="90px"
            rotate="-14deg"
          />
          <SideSticker
            src="https://hackclub.com/assets/hero_sticker6.webp"
            alt="Retro Player Sticker"
            top="50px"
            right={['0', '0', '0', '0', '40px', '70px']}
            width="95px"
            rotate="12deg"
          />

          <Container sx={{ maxWidth: '800px', position: 'relative', zIndex: 3 }}>
            <Heading as="h2" sx={{ fontSize: [3, 4], mb: 3 }}>
              What is Hack Club?
            </Heading>
            <Text as="p" sx={{ fontSize: [2, 3], color: 'slate', lineHeight: 'body', mb: 3 }}>
              Hack Club is a global nonprofit network of student-led high school coding clubs. At our chapter, we don’t do boring PowerPoint lectures or rigid curriculums.
            </Text>
            <Text as="p" sx={{ fontSize: [2, 3], color: 'slate', lineHeight: 'body' }}>
              Instead, you bring your ideas (or pick up a starter workshop), and we build real projects side-by-side. Whether you want to make your first website, write a Discord bot, code a retro game on Sprig, or build something with an Arduino—everyone is welcome.
            </Text>
          </Container>
        </Box>

        {/* MEETINGS & SCHEDULE SECTION (DECORATED WITH SIDE STICKERS) */}
        <Box
          id="meetings"
          sx={{
            position: 'relative',
            py: [5, 6],
            overflow: 'hidden'
          }}
        >
          {/* Side Sticker Decorations */}
          <SideSticker
            src="https://hackclub.com/assets/hero_sticker9.webp"
            alt="Hack Club Sticker"
            top="70px"
            left={['0', '0', '0', '0', '35px', '65px']}
            width="105px"
            rotate="9deg"
          />
          <SideSticker
            src="https://hackclub.com/assets/hero_sticker10.webp"
            alt="Hack Club Sticker"
            top="90px"
            right={['0', '0', '0', '0', '35px', '65px']}
            width="110px"
            rotate="-11deg"
          />

          <Container sx={{ maxWidth: '800px', position: 'relative', zIndex: 3 }}>
            <Heading as="h2" sx={{ fontSize: [4, 5], mb: 4 }}>
              When & Where We Meet
            </Heading>

            <Grid columns={[1, '1fr 1fr']} gap={3} sx={{ mb: 4 }}>
              {/* In-Person Card */}
              <Card
                sx={{
                  p: [3, 4],
                  bg: 'elevated',
                  borderRadius: 'extra',
                  border: '1px solid',
                  borderColor: 'border',
                  boxShadow: 'card'
                }}
              >
                <Badge
                  sx={{
                    bg: 'primary',
                    color: 'white',
                    borderRadius: 'circle',
                    px: 2,
                    py: 1,
                    fontSize: 0,
                    textTransform: 'uppercase',
                    letterSpacing: 'headline',
                    mb: 2
                  }}
                >
                  Monthly In-Person
                </Badge>
                <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>
                  Eva Perry Regional Library
                </Heading>
                <Text sx={{ color: 'muted', fontSize: 2, mb: 3 }}>
                  2100 Shepherd’s Vineyard Dr<br />
                  Apex, NC 27502
                </Text>
                <Text sx={{ fontSize: 2, color: 'slate' }}>
                  We meet in-person once a month for hands-on maker sprints, hardware tinkering, and project demos.
                </Text>
              </Card>

              {/* Weekly Online Card */}
              <Card
                sx={{
                  p: [3, 4],
                  bg: 'elevated',
                  borderRadius: 'extra',
                  border: '1px solid',
                  borderColor: 'border',
                  boxShadow: 'card'
                }}
              >
                <Badge
                  sx={{
                    bg: 'cyan',
                    color: 'white',
                    borderRadius: 'circle',
                    px: 2,
                    py: 1,
                    fontSize: 0,
                    textTransform: 'uppercase',
                    letterSpacing: 'headline',
                    mb: 2
                  }}
                >
                  Weekly Online
                </Badge>
                <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>
                  Weekly Online Meetups
                </Heading>
                <Text sx={{ color: 'muted', fontSize: 2, mb: 3 }}>
                  Virtual hack sessions & workshops
                </Text>
                <Text sx={{ fontSize: 2, color: 'slate' }}>
                  Every week, we jump online to share progress, ask questions, debug code, and build together between in-person meetups.
                </Text>
              </Card>
            </Grid>

            <Card
              sx={{
                p: 3,
                bg: 'sunken',
                borderRadius: 'large',
                border: '1px solid',
                borderColor: 'border'
              }}
            >
              <Text sx={{ fontSize: 2, color: 'slate' }}>
                💡 <strong>We’re currently organizing our upcoming dates!</strong> Sign up for our email list below so we can notify you as soon as our exact schedule and kickoff meeting are locked in.
              </Text>
            </Card>
          </Container>
        </Box>

        {/* PROJECTS SECTION (DECORATED WITH SIDE STICKERS) */}
        <Box
          id="projects"
          sx={{
            position: 'relative',
            py: [5, 6],
            bg: 'sheet',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'border',
            overflow: 'hidden'
          }}
        >
          {/* Side Sticker & Mascot Decorations */}
          <SideSticker
            src="https://hackclub.com/assets/hero_sticker4.webp"
            alt="Retro Mac 'hack' computer"
            top="60px"
            left={['0', '0', '0', '0', '35px', '65px']}
            width="100px"
            rotate="-8deg"
          />
          <SideSticker
            src="https://hackclub.com/assets/hero_sticker5.webp"
            alt="Microchip circuit sticker"
            bottom="60px"
            left={['0', '0', '0', '0', '45px', '75px']}
            width="65px"
            rotate="14deg"
          />
          <SideSticker
            src="https://hackclub.com/assets/hero_sticker7.webp"
            alt="Boba drink sticker"
            top="70px"
            right={['0', '0', '0', '0', '35px', '65px']}
            width="85px"
            rotate="12deg"
          />
          <SideSticker
            src="https://hackclub.com/assets/creature2.webp"
            alt="Orpheus mascot celebrating"
            bottom="40px"
            right={['0', '0', '0', '0', '30px', '55px']}
            width="130px"
            rotate="-4deg"
          />

          <Container sx={{ maxWidth: '800px', position: 'relative', zIndex: 3 }}>
            <Heading as="h2" sx={{ fontSize: [3, 4], mb: 4 }}>
              What you can build
            </Heading>

            <Grid columns={[1, 2]} gap={3} sx={{ mb: 4 }}>
              <Card sx={{ p: 3, bg: 'elevated', borderRadius: 'large', border: '1px solid', borderColor: 'border' }}>
                <Heading as="h3" sx={{ fontSize: 2, mb: 1, color: 'primary' }}>
                  Websites & Apps
                </Heading>
                <Text sx={{ color: 'muted', fontSize: 2 }}>
                  Create personal websites, portfolio pages, interactive web games, or full-stack web applications with HTML/CSS, React, and Next.js.
                </Text>
              </Card>

              <Card sx={{ p: 3, bg: 'elevated', borderRadius: 'large', border: '1px solid', borderColor: 'border' }}>
                <Heading as="h3" sx={{ fontSize: 2, mb: 1, color: 'primary' }}>
                  Hack Club Sprig & Games
                </Heading>
                <Text sx={{ color: 'muted', fontSize: 2 }}>
                  Build a custom tile-based game on Hack Club’s open-source Sprig engine and get an actual handheld console shipped to your door for free.
                </Text>
              </Card>

              <Card sx={{ p: 3, bg: 'elevated', borderRadius: 'large', border: '1px solid', borderColor: 'border' }}>
                <Heading as="h3" sx={{ fontSize: 2, mb: 1, color: 'primary' }}>
                  Hardware & Electronics
                </Heading>
                <Text sx={{ color: 'muted', fontSize: 2 }}>
                  Tinker with microcontrollers, LEDs, sensors, and micro-computers like Raspberry Pi and Arduino.
                </Text>
              </Card>

              <Card sx={{ p: 3, bg: 'elevated', borderRadius: 'large', border: '1px solid', borderColor: 'border' }}>
                <Heading as="h3" sx={{ fontSize: 2, mb: 1, color: 'primary' }}>
                  Hackathons & Grants
                </Heading>
                <Text sx={{ color: 'muted', fontSize: 2 }}>
                  Team up for high school hackathons, apply for Hack Club grants, score free stickers, and tap into a global community of 40,000+ makers.
                </Text>
              </Card>
            </Grid>

            {/* Official Hack Club Stickers Graphic */}
            <Card
              sx={{
                p: [3, 4],
                bg: 'elevated',
                borderRadius: 'extra',
                border: '1px solid',
                borderColor: 'border',
                display: 'flex',
                flexDirection: ['column', 'row'],
                alignItems: 'center',
                gap: [3, 4]
              }}
            >
              <Box sx={{ flex: '0 0 auto', width: ['100%', '160px'], textAlign: 'center' }}>
                <Image
                  src="https://cdn.hackclub.com/019db857-80eb-77db-82ae-2b49f5bdd4bc/sticker.webp"
                  alt="Official Hack Club stickers"
                  sx={{
                    maxWidth: '140px',
                    height: 'auto',
                    mx: 'auto'
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Heading as="h4" sx={{ fontSize: 3, mb: 1 }}>
                  Free Stickers & Open-Source Tools
                </Heading>
                <Text sx={{ color: 'muted', fontSize: 2 }}>
                  Every Hack Clubber gets access to custom stickers, open-source workshops, free development tools, and Hack Club grant programs for hardware and software projects.
                </Text>
              </Box>
            </Card>
          </Container>
        </Box>

        {/* FAQ SECTION (DECORATED WITH SIDE STICKERS) */}
        <Box
          id="faq"
          sx={{
            position: 'relative',
            py: [5, 6],
            overflow: 'hidden'
          }}
        >
          {/* Side Sticker Decorations */}
          <SideSticker
            src="https://hackclub.com/assets/hero_sticker3.webp"
            alt="Red 'h' badge sticker"
            top="50px"
            left={['0', '0', '0', '0', '45px', '75px']}
            width="65px"
            rotate="-12deg"
          />
          <SideSticker
            src="https://hackclub.com/assets/hero_sticker8.webp"
            alt="Hack Club sticker"
            top="60px"
            right={['0', '0', '0', '0', '40px', '70px']}
            width="105px"
            rotate="14deg"
          />

          <Container sx={{ maxWidth: '800px', position: 'relative', zIndex: 3 }}>
            <Heading as="h2" sx={{ fontSize: [4, 5], mb: 4 }}>
              Frequently Asked Questions
            </Heading>

            <Grid columns={1} gap={3}>
              <Card sx={{ p: 3, bg: 'elevated', borderRadius: 'large', border: '1px solid', borderColor: 'border' }}>
                <Heading as="h3" sx={{ fontSize: 2, mb: 1 }}>
                  Do I need any prior coding experience?
                </Heading>
                <Text sx={{ color: 'muted', fontSize: 2 }}>
                  Not at all! Complete beginners are 100% welcome. We have starter workshops and experienced members to help you get started from square one.
                </Text>
              </Card>

              <Card sx={{ p: 3, bg: 'elevated', borderRadius: 'large', border: '1px solid', borderColor: 'border' }}>
                <Heading as="h3" sx={{ fontSize: 2, mb: 1 }}>
                  Who can join?
                </Heading>
                <Text sx={{ color: 'muted', fontSize: 2 }}>
                  Any high school (or middle school) student in the Triangle area (Apex, Cary, Morrisville, Raleigh, Durham, Chapel Hill, etc.).
                </Text>
              </Card>

              <Card sx={{ p: 3, bg: 'elevated', borderRadius: 'large', border: '1px solid', borderColor: 'border' }}>
                <Heading as="h3" sx={{ fontSize: 2, mb: 1 }}>
                  Does it cost anything?
                </Heading>
                <Text sx={{ color: 'muted', fontSize: 2 }}>
                  Nope. Hack Club is completely free, always.
                </Text>
              </Card>
            </Grid>
          </Container>
        </Box>

        {/* JOIN SECTION (DECORATED WITH SIDE STICKERS) */}
        <Box
          id="join"
          sx={{
            position: 'relative',
            py: [5, 6],
            bg: 'sheet',
            borderTop: '1px solid',
            borderColor: 'border',
            overflow: 'hidden'
          }}
        >
          {/* Side Sticker Decorations */}
          <SideSticker
            src="https://hackclub.com/assets/hero_sticker11.webp"
            alt="Hack Club sticker"
            top="40px"
            left={['0', '0', '0', '0', '40px', '75px']}
            width="110px"
            rotate="-9deg"
          />
          <SideSticker
            src="https://hackclub.com/assets/creature1.webp"
            alt="Orpheus mascot sitting"
            bottom="30px"
            right={['0', '0', '0', '0', '35px', '65px']}
            width="130px"
            rotate="6deg"
          />

          <Container sx={{ maxWidth: '700px', textAlign: 'center', position: 'relative', zIndex: 3 }}>
            <Badge
              variant="pill"
              sx={{
                mb: 3,
                fontSize: 1,
                px: 3,
                py: 1,
                bg: 'smoke',
                color: 'slate'
              }}
            >
              Get Updates
            </Badge>

            <Heading as="h2" sx={{ fontSize: [4, 5], mb: 2 }}>
              Stay in the loop
            </Heading>
            <Text sx={{ fontSize: [2, 3], color: 'muted', mb: 4 }}>
              We’re currently finalizing our meeting dates, library room bookings, and initial workshop plans. Drop your email in the interest form and we’ll reach out with all the details!
            </Text>

            <Flex sx={{ justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Button
                as="a"
                href={EMAIL_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="cta"
                sx={{
                  bg: 'primary',
                  color: 'white',
                  borderRadius: 'circle',
                  px: 4,
                  py: 3,
                  fontSize: 2,
                  fontWeight: 'bold',
                  textDecoration: 'none'
                }}
              >
                Join our Email Interest List ✉️
              </Button>
              <Button
                as="a"
                href="https://hackclub.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                sx={{
                  color: 'primary',
                  borderRadius: 'circle',
                  px: 4,
                  py: 3,
                  fontSize: 2,
                  fontWeight: 'bold',
                  textDecoration: 'none'
                }}
              >
                Explore Hack Club
              </Button>
            </Flex>
          </Container>
        </Box>
      </Box>

      <Footer formUrl={EMAIL_FORM_URL} />
    </Box>
  )
}
