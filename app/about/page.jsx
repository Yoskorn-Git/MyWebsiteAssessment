'use client'
import Weather from '@components/Weather';
import SelfTimeline from '@components/Timeline';

function About() {

  const skillDev = ["JavaScript", "Python", "SQL", "ReactJs", "NextJS", "React Native", "MongoDB", "MySQL", "Git/GitHub", "AWS", "Linux", "Figma"];

  const arrayDevItems = skillDev.map((badge) =>
    <span className="inline-flex items-center gap-x-1.5 mr-2 mb-2 py-1 px-3 rounded-md body_text text-sm border border-gray-200 bg-white text-gray-800 shadow-sm" key={badge}>
      {badge}
    </span>);

  return (
    <>
      <title>Yoskorn | About Me</title>
      <div className='page_container'>
        
        <div className='max-w-7xl flex flex-col md:flex-row mt-20 px-16'>
            <div className='text-center flex md:flex-col content-center sticky-div h-fit'>
              <div className='flex-col'>
                <div className='flex-1 px-1 mr-5'>
                  <p className="mb-5 head_text text-left">Hi, Yoskorn Lertratanakham</p>
                  <p className="mb-5 body_text text-left">I am a computer science graduate with a focus on data and machine learning, as well as a strong enjoyment of web development and software development. </p>
                  <p className="mb-5 body_text text-left">My professional ambition is to excel as a proficient full-stack developer.</p>

                </div>
                <div className='flex-1 text-left px-1 body_text my-8'>
                  <h2 className="head_text">Capabilities</h2>
                  <h2 className="sub_head_text mb-4">Skill & Tools</h2>
                  {arrayDevItems}
                </div>
                <Weather />
              </div>
            </div>
            <div>
              <div className='mb-6 text-center head_text'>My Timeline</div>
              <SelfTimeline />
            </div>
          </div>
        </div>
      </>

      );
}

      export default About;
