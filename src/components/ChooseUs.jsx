import React from 'react';
import Tailored from '../assets/images/Tailored.jpg';
import Creative from '../assets/images/creative.jpg';
import Client from '../assets/images/client-satisfaction.jpeg';


const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
    <path d="M12 5.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM5.5 9a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM1.5 19.5c0-3.59 2.91-6.5 6.5-6.5h7c3.59 0 6.5 2.91 6.5 6.5V22h-3v-2.5c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93 0-3.5 1.57-3.5 3.5V22h-3v-2.5z" />
  </svg>
)

const ProcessIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
    <path d="M4 15V9h8V4.16L19.84 12 12 19.84V15H4z" />
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)


function Stat({ icon, number, text }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-[#9eff00] text-[#1a1a1a] rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-xl">{text}</p>
    </div>
  )
}

const Button = ({ children }) => (
  <button
    style={{
      backgroundColor: '#b9fd4f',
      color: 'black',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
    }}
  >
    {children}
  </button>
);

export default function Component() {
  const sectionStyle = {
    backgroundColor: '#1F2937',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    padding: '10% 5% 10% 5%',
  };

  const flexContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
  };

  const flexItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '100px',
  };

  const imageStyle = {
    width: '450px',
    height: '450px',
    borderRadius: '30px',
    objectFit: 'cover',
  };

  const contentStyle = {
    flex: 1,
    // whiteSpace: 'pre-wrap', 
    // overflowWrap: 'break-word'
  };

  return (
    <>
      <div>
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '32px' }}>Why Choose Us?</h2>

          <div style={flexContainerStyle}>
            <div style={flexItemStyle}>
              <img
                src={Tailored}
                alt="Business professionals looking at a tablet"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px' }}>Solutions Tailored Specifically to Your Business Needs</h1>
                <p style={{ marginBottom: '16px' }}>We provide customized solutions for your business needs, ensuring relevance and success.</p>
                <Button>Read More</Button>
              </div>
            </div>

            <div style={{ ...flexItemStyle, flexDirection: 'row-reverse' }}>
              <img
                src={Creative}
                alt="Team collaborating on a project"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px' }}>Creative Excellence Elevates Every Project</h1>
                <p style={{ marginBottom: '16px' }}>Creative excellence drives our work. From concept to execution, we aim for exceptional results.</p>
                <Button>Read More</Button>
              </div>
            </div>

            <div style={flexItemStyle}>
              <img
                src={Client}
                alt="Business professionals shaking hands"
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px' }}>Client Satisfaction is Our Main Focus</h1>
                <p style={{ marginBottom: '16px' }}>Our main goal is your satisfaction, and we work tirelessly to ensure that you are pleased with the results we achieve together.</p>
                <Button>Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Work with Click it new Tech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Stat icon={<PeopleIcon />} number="10,000+" text="Happy Customers" />
            <Stat icon={<ProcessIcon />} number="20,000+" text="Success Processes" />
            <Stat icon={<StarIcon />} number="10+ Years" text="of Experience" />
          </div>
        </div>
      </section>
    </>

  );
}
