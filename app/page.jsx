'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Bubble from '@components/BubbleChart';

const Home = () => {
  return (
    <>
      <title>Yoskorn | Home</title>
      <section className='page_container w-full justify-center items-center'>
        <div className='flex flex-col md:flex-row w-screen h-[85vh] justify-center items-center bg-[white] p-2.5`'>
          <div className='text-left text-3xl flex flex-col content-left px-4' >
            Hi! My Name is Tang
            <div className={`font-normal w-[400px] text-4xl mb-6 `} >
              I am a
              <TypeAnimation
                className='mx-4 text-6xl text-[#6C0345]'
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                deletionSpeed={{ type: "keyStrokeDelayInMs", value: 40 }}
                sequence={[
                  'Coder.',
                  1500,
                  'Learner.',
                  1500,
                  'Designer.',
                  1500,
                  'Gamer.',
                  1500,
                  () => {
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </div>
            <p className={`text-lg font-base text-black `}>
              A computer science graduate with a passion for
              <br />coding, learning, and gaming.
            </p>
          </div>
          <div>
            <Bubble className="justify-center items-center" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home