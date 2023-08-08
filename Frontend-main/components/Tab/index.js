// Tab Functionality on Vault Details

import { useState } from 'react';
import Tab_About from '../Tab_About';
import Tab_Stratigies from '../Tab_Stratigies';
import Tab_Historical from '../Tab_Historical';
import { FcAbout } from 'react-icons/fc';
import { SiMicrostrategy } from 'react-icons/si';
import { TbHeartRateMonitor } from 'react-icons/tb';

export default function Tab() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="mt-10 rounded-lg bg-[#1E1E1E] p-6">
      <div className="flex mb-4 text-white font-exo2">
        <div
          className={`cursor-pointer flex items-center p-2 ${activeTab === 'about' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          <FcAbout className='mr-1' />
          About
        </div>
        <div
          className={`cursor-pointer flex items-center p-2 ml-2 ${activeTab === 'strategies' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('strategies')}
        >
          <SiMicrostrategy className='mr-1 text-blue-400' />
          Strategies
        </div>
        <div
          className={`cursor-pointer flex items-center p-2 ml-2 ${activeTab === 'historical' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('historical')}
        >
          <TbHeartRateMonitor className='mr-1 text-blue-400' />
          Historical rates
        </div>
    </div>
    {
        activeTab === 'about' && 
        <div>
            <Tab_About />
        </div>
    }

    {
        activeTab === 'strategies' && 
        <div>
            <Tab_Stratigies />
        </div>
    }
    {
        activeTab === 'historical' && 
        <div>
            <Tab_Historical />
        </div>
    }
    </div>
  );
}