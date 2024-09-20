import React from 'react';
import {AbstractShape, LayersLogo, QuotientLogo, CircoolesLogo, HourglassLogo, CommandRLogo} from '../assets/icons/Logo';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center p-4 overflow-hidden relative">
      <AbstractShape />
      <div className="text-center z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-[#b9fd4f]">Boost</span> Your Brand With
          <br />
          Innovative <span className="text-[#b9fd4f]">Digital Marketing</span>
        </h1>
        <p className="text-lg md:text-md mb-8 text-gray-300">
          Drive Engagement and Conversions with Advanced Digital
          <br />
          Marketing Strategies.
        </p>
        <button type="button" className="focus:outline-none text-black focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" style={{background:'#b9fd4f'}}>Start Now</button>
      </div>
      <div className="mt-16 z-10">
        <p className="text-sm uppercase tracking-wider mb-4 text-center">Trusted by thousand companies</p>
        <div className="flex flex-wrap justify-center items-center gap-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <span style={{display:'flex'}}><LayersLogo/> <span style={{'padding-left':'10px'}}>Layers</span></span>
          <span style={{display:'flex'}}><QuotientLogo/> <span style={{'padding-left':'10px'}}>Quotient</span></span>
          <span style={{display:'flex'}}><CircoolesLogo/> <span style={{'padding-left':'10px'}}>Circooles</span></span>
          <span style={{display:'flex'}}><HourglassLogo/> <span style={{'padding-left':'10px'}}>Hourglass</span></span>
          <span style={{display:'flex'}}><CommandRLogo/> <span style={{'padding-left':'10px'}}>Command+R</span></span>
        </div>
      </div>
    </div>
  )
}