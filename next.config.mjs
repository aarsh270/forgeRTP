import createMDX from '@next/mdx'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'mdx']
}

export default withMDX(nextConfig)
