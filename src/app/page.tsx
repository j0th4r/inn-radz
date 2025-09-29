import Image from 'next/image'
import CurvedLoop from './components/CurvedLoop/CurvedLoop'

// Mock images using Unsplash for high quality hotel/interior photos
const images = {
  // Hero room image - luxury hotel room
  heroRoom:
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1860&h=781&fit=crop&crop=center',

  // About section images - elegant interiors
  aboutMain:
    '/images/about.jpg',

  // Rooms section images
  roomSuperior:
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=286&h=429&fit=crop&crop=center',
  roomLarge:
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=757&h=1000&fit=crop&crop=center',

  // Gallery images - various hotel spaces
  galleryRoom1:
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=312&h=468&fit=crop&crop=center',
  galleryRoom2:
    'https://images.unsplash.com/photo-1578662996946-8f093994f3fa?w=443&h=664&fit=crop&crop=center',
  galleryRoom3:
    'https://images.unsplash.com/photo-1578662996441-48f60103fc96?w=950&h=1424&fit=crop&crop=center',
  galleryRoom4:
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=316&h=394&fit=crop&crop=center',
  galleryRoom5:
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=654&h=436&fit=crop&crop=center',

  // Contact section image
  contactImage:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=449&h=677&fit=crop&crop=center',
}

// Star icon component
function StarIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <svg
        width='35'
        height='35'
        viewBox='0 0 35 35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
      >
        <path
          d='M17.5 0L18.8519 13.3391L27.7862 3.3422L21.0394 14.9284L34.1435 12.0922L21.875 17.5L34.1435 22.9078L21.0394 20.0716L27.7862 31.6578L18.8519 21.6609L17.5 35L16.148 21.6609L7.21376 31.6578L13.9605 20.0716L0.85651 22.9078L13.125 17.5L0.85651 12.0922L13.9605 14.9284L7.21376 3.3422L16.148 13.3391L17.5 0Z'
          fill='#FCD043'
        />
      </svg>
    </div>
  )
}

// Arrow icon component
function ArrowIcon({
  className = '',
  direction = 'right',
}: {
  className?: string
  direction?: 'left' | 'right' | 'up' | 'down'
}) {
  const rotation = {
    right: 'rotate-0',
    left: 'rotate-180',
    up: 'rotate-270',
    down: 'rotate-90',
  }

  return (
    <div className={`${className} ${rotation[direction]}`}>
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
        <path d='M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z' />
      </svg>
    </div>
  )
}

// Email icon component
function EmailIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
        <path d='M20,8L12,13L4,8V6L12,11L20,6V8Z' />
        <path
          d='M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z'
          fill='none'
          stroke='currentColor'
          strokeWidth='1'
        />
      </svg>
    </div>
  )
}

// Input component
function InputDefault() {
  return (
    <div className='relative w-full h-16 bg-white/10 backdrop-blur-sm border border-[#313f38]/50 rounded'>
      <div className='absolute font-helvetica text-[16px] text-[#162f2b]/50 uppercase left-5 top-1/2 -translate-y-1/2 pointer-events-none'>
        Email
      </div>
      <div className='absolute right-5 top-1/2 -translate-y-1/2'>
        <EmailIcon className='w-8 h-4 text-[#313f38]' />
      </div>
      <input
        type='email'
        className='w-full h-full bg-transparent border-none outline-none px-5 text-[#162f2b] font-helvetica'
        placeholder=''
      />
    </div>
  )
}

// Button components
function ButtonDefault({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className='relative w-[170px] h-[170px] bg-transparent border-none outline-none cursor-pointer group'
    >
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-[170px] h-[170px] rotate-[270deg] bg-[#313f38] rounded-full' />
      </div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <ArrowIcon
          className='w-6 h-4 text-[#313f38] group-hover:text-[#fcd043] transition-colors'
          direction='right'
        />
      </div>
    </button>
  )
}

function ButtonDefault1({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href='#about'
      onClick={onClick}
      className='relative w-[70px] h-[70px] outline-none cursor-pointer group flex items-center justify-center transition duration-200'
      style={{ padding: 0, display: 'inline-flex' }}
      aria-label='Go to About section'
    >
      <svg
        width='70'
        height='70'
        viewBox='0 0 70 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='block'
      >
        <path
          opacity='0.32'
          d='M59.3662 10.6328L69.458 35L59.3662 59.3662L35 69.458L10.6328 59.3662L0.541016 35L10.6328 10.6328L35 0.541016L59.3662 10.6328Z'
          stroke='#FFFCF6'
          strokeWidth='2'
          className='transition-colors duration-200 group-hover:stroke-[#FCD043]'
        />
        <path
          d='M43 33C43 33 40.6667 33.6667 38.6667 35.6667C36.6667 37.6667 35 41 35 41C35 41 33.3333 37.6667 31.3333 35.6667C29.3333 33.6667 27 33 27 33'
          stroke='#FCD043'
          strokeWidth='2'
        />
      </svg>
    </a>
  )
}

export default function InnRadzHotel() {
  return (
    <div className='bg-[#313f38] min-h-screen w-full overflow-hidden'>
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#313f38]/90 backdrop-blur-sm'>
        <div className='max-w-[1860px] mx-auto flex items-center justify-between'>
          <div className='font-helvetica font-medium text-[#fffcf6] text-xl capitalize'>
            INN-RADZ APARTELLE
          </div>

          <nav className='hidden md:flex items-center gap-[70px]'>
            <a
              href='#home'
              className='font-helvetica text-[#fffcf6] text-sm uppercase hover:text-[#fcd043] transition-colors'
            >
              Home
            </a>
            <a
              href='#about'
              className='font-helvetica text-[#fffcf6] text-sm uppercase hover:text-[#fcd043] transition-colors'
            >
              About
            </a>
            <a
              href='#rooms'
              className='font-helvetica text-[#fffcf6] text-sm uppercase hover:text-[#fcd043] transition-colors'
            >
              Rooms
            </a>
            <a
              href='#contact'
              className='font-helvetica text-[#fffcf6] text-sm uppercase hover:text-[#fcd043] transition-colors'
            >
              Contacts
            </a>
          </nav>

          <div className='font-helvetica text-[#fffcf6] text-base uppercase'>
            +63 976 268 8542
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id='home' className='relative h-screen flex flex-col'>
        <div className='flex-1 flex flex-col justify-center px-8 pt-24'>
          <div className='max-w-[1860px] mx-auto w-full'>
            {/* Main Content Flex Container */}
            <div className='flex flex-col lg:flex-row justify-between items-center mb-8 gap-12'>
              {/* Left Side - Main Title */}
              <div>
                <h1 className='font-miracle text-[min(80px,12vw)] leading-[0.9] text-[#fffcf6] font-normal'>
                  IN-RADZ <span className='text-[#fcd043]'>APARTELLE</span>
                </h1>
              </div>

              {/* Right Side - Hotel Info and Description */}
              <div className='space-y-8'>
                {/* Hotel Info */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4 border-2 border-white/10 backdrop-blur-sm rounded-full px-6 py-3'>
                    <StarIcon className='w-9 h-9 text-[#fcd043]' />
                    <span className='font-helvetica text-[#fffcf6] text-[22px] capitalize'>
                      since 2016
                    </span>
                  </div>
                  <ButtonDefault1 />
                </div>

                {/* Description */}
                <div className='space-y-4'>
                  <p className='font-helvetica text-[#fffcf6]/80 text-lg max-w-[350px] leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms // Apartments Text Above Hero Image */}
        <div className='px-8 mb-4'>
          <div className='max-w-[1860px] mx-auto'>
            <p className='font-helvetica text-[#fcd043] text-[26px] uppercase tracking-wide'>
              rooms // apartments
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className='relative h-[781px] mx-8 overflow-hidden rounded-t-3xl'>
          <Image
            src={images.heroRoom}
            alt='Luxury hotel room'
            fill
            className='object-cover'
            priority
            unoptimized
          />
        </div>

        {/* Room Info and Contact Info - Below Hero Image */}
        <div className='px-8 py-8'>
          <div className='max-w-[1860px] mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16'>
              {/* Contact Info */}
              <div className='space-y-2'>
                <p className='font-helvetica text-[#fcd043] text-[26px] uppercase underline'>
                  +63 976 268 8542
                </p>
                <p className='font-helvetica text-[#fffcf6] text-[26px] uppercase underline'>
                  GAISANO, Butuan City
                </p>
              </div>

              {/* Room Info */}
              <div className='text-center'>
                <p className='font-helvetica text-[#fffcf6] text-[26px] uppercase'>
                  rOOm 01
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='relative bg-[#313f38] py-20'>
        <div className='max-w-[1860px] mx-auto px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Side - Images */}
            <div className='relative'>
              <div className='relative w-full h-[512px] lg:h-[712px] rounded-2xl overflow-hidden'>
                <Image
                  src={images.aboutMain}
                  alt='Elegant hotel interior'
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>

            </div>

            {/* Right Side - Content */}
            <div className='space-y-8'>
              <div>
                <div className='inline-block relative'>
                  <h2 className='font-miracle text-[min(150px,8vw)] leading-[0.9] text-[#fcd043] uppercase mb-0 inline-block'>
                    About
                  </h2>
                  <div className='flex justify-end'>
                    <h2 className='font-miracle text-[min(150px,8vw)] leading-[0.9] text-[#fffcf6] uppercase mt-0 mb-4'>
                      US
                    </h2>
                  </div>
                </div>
              </div>

              <div className='flex flex-col lg:flex-row items-start gap-8'>
                <div className='space-y-6 flex-1 mt-12'>
                  <h3 className='font-miracle text-[min(50px,3vw)] leading-tight text-[#fffcf6] capitalize tracking-wide'>
                    High quality
                  </h3>

                  <p className='font-helvetica text-[#fffcf6]/64 text-lg leading-relaxed max-w-[443px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className='flex-shrink-0'>
                  <a
                    href='#rooms'
                    className='relative w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] bg-transparent border-2 border-[#3f5148] rounded-full overflow-hidden group hover:border-[#fcd043] transition-colors block'
                  >
                    <div className='absolute inset-0 flex flex-col items-center justify-center'>
                      <div className='space-y-2 text-center'>
                        <p className='font-helvetica text-[#fcd043] text-sm italic'>
                          Rooms
                        </p>
                        <p className='font-helvetica text-[#fffcf6] text-sm'>
                          and
                        </p>
                        <p className='font-helvetica text-[#fffcf6] text-sm'>
                          apartments
                        </p>
                      </div>
                    </div>
                    <div className='absolute bottom-8 left-1/2 -translate-x-1/2'>
                      <ArrowIcon
                        className='w-6 h-6 text-[#fffcf6] group-hover:text-[#fcd043] transition-colors'
                        direction='down'
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Apartments Section */}
      <section id='rooms' className='bg-[#fffcf6] py-20'>
        <div className='max-w-[1860px] mx-auto px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Left Side - Content */}
            <div className='space-y-8'>
              <div>
                <h2 className='font-miracle text-[min(150px,8vw)] leading-[0.9] text-[#162f2b] uppercase'>
                  Rooms
                </h2>
                <h2 className='font-miracle text-[min(150px,8vw)] leading-[0.9] text-[#162f2b] uppercase'>
                  & apartments
                </h2>
              </div>

              <p className='font-helvetica text-[#162f2b] text-[26px] uppercase max-w-[440px] leading-normal'>
                All room decoration was made with ecological certified and safe
                materials.
              </p>
            </div>

            {/* Right Side - Large Room Image */}
            <div className='relative'>
              <div className='relative w-full h-[600px] lg:h-[800px] rounded-2xl overflow-hidden'>
                <Image
                  src={images.roomLarge}
                  alt='Spacious hotel suite'
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Room Details */}
          <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Room Image */}
            <div className='relative w-full h-[429px] rounded-2xl overflow-hidden'>
              <Image
                src={images.roomSuperior}
                alt='Superior twin room'
                fill
                className='object-cover'
                unoptimized
              />
            </div>

            {/* Room Info */}
            <div className='space-y-8'>
              <div className='space-y-6'>
                <h3 className='font-miracle text-[50px] leading-normal text-[#162f2b] capitalize tracking-wide'>
                  Superior twin
                </h3>

                <p className='font-helvetica text-[#162f2b]/80 text-lg leading-relaxed max-w-[442px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className='font-helvetica text-[#162f2b] text-[22px]'>
                  <span className='mr-8'>01</span>
                  <span className='text-[#162f2b]/32'>/ 04</span>
                </p>

                <div className='pt-4'>
                  <ButtonDefault />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='bg-[#313f38] py-20'>
        <div className='max-w-[1860px] mx-auto px-8'>
          <div className='text-center'>
            <h2 className='font-miracle text-[min(150px,8vw)] leading-[0.9] text-[#fcd043] uppercase mb-8'>
              our Rooms
            </h2>
            <p className='font-helvetica text-[#fffcf6]/80 text-lg max-w-[450px] mx-auto leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className='mt-8'>
              <p className='font-helvetica text-[#fffcf6]/80 text-[26px] uppercase'>
                Rooms
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
            <div className='relative h-[468px] rounded-2xl overflow-hidden'>
              <Image
                src={images.galleryRoom1}
                alt='Hotel room 1'
                fill
                className='object-cover'
                unoptimized
              />
            </div>

            <div className='relative h-[500px] lg:h-[664px] rounded-2xl overflow-hidden'>
              <Image
                src={images.galleryRoom2}
                alt='Hotel room 2'
                fill
                className='object-cover'
                unoptimized
              />
            </div>

            <div className='relative h-[394px] rounded-2xl overflow-hidden'>
              <Image
                src={images.galleryRoom4}
                alt='Hotel room 4'
                fill
                className='object-cover'
                unoptimized
              />
            </div>

            <div className='md:col-span-2 relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden'>
              <Image
                src={images.galleryRoom3}
                alt='Hotel room 3'
                fill
                className='object-cover'
                unoptimized
              />
            </div>

            <div className='relative h-[436px] rounded-2xl overflow-hidden'>
              <Image
                src={images.galleryRoom5}
                alt='Hotel room 5'
                fill
                className='object-cover'
                unoptimized
              />
            </div>
          </div>

          <CurvedLoop />

          {/* Quote Section */}
          <div className='text-center'>
            <div className='flex items-center justify-center gap-4 mb-8'>
              <div className='w-12 h-12 bg-[#fcd043] rounded-full flex-shrink-0' />
              <p className='font-helvetica text-[#fffcf6]/80 text-[22px] italic max-w-[350px]'>
                It is our pleasure to meet your most unrealistic expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='bg-[#fffcf6] py-20'>
        <div className='max-w-[1860px] mx-auto px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Left Side - Content */}
            <div className='space-y-12'>
              <div>
                <h2 className='font-miracle text-[min(200px,12vw)] leading-[0.9] text-[#162f2b] uppercase mb-4'>
                  Get in
                </h2>
                <h2 className='font-miracle text-[min(200px,12vw)] leading-[0.9] text-[#fcd043] uppercase'>
                  touch
                </h2>

                <div className='relative'>
                  <StarIcon className='absolute -top-8 lg:-top-16 right-0 w-16 lg:w-32 h-16 lg:h-32 text-[#fcd043]' />
                </div>
              </div>

              <div className='space-y-8'>
                <div>
                  <p className='font-helvetica text-[#162f2b] text-[26px] uppercase mb-2'>
                    GAISANO, BUTUAN CITY
                  </p>
                </div>

                <div className='border-b border-[#313f38]/20 pb-4'>
                  <p className='font-helvetica text-[#162f2b] text-[min(60px,4vw)] text-center'>
                    +63 976 268 8542
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className='relative'>
              <div className='relative w-full h-[500px] lg:h-[677px] rounded-2xl overflow-hidden'>
                <Image
                  src={images.contactImage}
                  alt='Hotel exterior'
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className='mt-20 pt-8 border-t border-[#313f38]/20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
              <div>
                <h3 className='font-helvetica text-[#162f2b] text-[26px] uppercase mb-4'>
                  <span className='text-[#fcd043]'>/</span> About us
                </h3>
                <p className='font-helvetica text-[#162f2b]/80 text-base leading-relaxed mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className='font-helvetica text-[#162f2b]/32 text-sm'>
                  ©2025 All rights reserved. IN-RADZ APARTELLE
                </p>
              </div>

              <div>
                <h3 className='font-helvetica text-[#162f2b] text-[26px] uppercase mb-4'>
                  <span className='text-[#fcd043]'>/</span> Social
                </h3>
                <div className='space-y-2'>
                  <p className='font-helvetica font-medium text-[#162f2b] text-base uppercase hover:text-[#fcd043] cursor-pointer transition-colors'>
                    Facebook
                  </p>
                </div>
              </div>

              <div className='md:col-span-1'>
                <InputDefault />
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  )
}
