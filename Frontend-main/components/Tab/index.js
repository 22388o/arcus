import { useState } from 'react';
import Tab_About from '../Tab_About';
import { BsArrowUpCircleFill } from "react-icons/bs"
import { BsArrowDownCircleFill } from "react-icons/bs"

export default function Tab() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="mt-10 rounded-lg bg-[#1E1E1E] p-6">
      <div className="flex mb-4 text-white font-exo2">
        <div
          className={`cursor-pointer p-2 ${activeTab === 'home' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          About
        </div>
        <div
          className={`cursor-pointer p-2 ml-2 ${activeTab === 'about' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          Strategies
        </div>
        <div
          className={`cursor-pointer p-2 ml-2 ${activeTab === 'contact' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Historical rates
        </div>
      </div>
      {
        activeTab === 'home' && 
        <div>
            <Tab_About />
        </div>
    }
      {activeTab === 'about' && <div>About content...</div>}
      {activeTab === 'contact' && <div>Contact content...</div>}
    </div>
  );
}