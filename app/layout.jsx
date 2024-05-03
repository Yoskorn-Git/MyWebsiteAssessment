'use client'
import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Head from 'next/head';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <div className='main'>
          <main className='app h-full'>
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout