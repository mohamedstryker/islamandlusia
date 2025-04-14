import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { battlesByPeriod } from '../data/battles';

export function Battles() {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const periods = Object.keys(battlesByPeriod);

  return (
    <div className="min-h-screen bg-[#f8f4e8] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#2c1810] font-arabic text-center">
          معارك الأندلس
        </h1>

        {/* Period Selection */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-6 py-2 rounded-full font-arabic transition-colors ${
                selectedPeriod === period
                  ? 'bg-[#2c1810] text-white'
                  : 'bg-white text-[#2c1810] hover:bg-[#c4a484] hover:text-white'
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Battle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(selectedPeriod ? battlesByPeriod[selectedPeriod] : []).map((battle) => (
            <div key={battle.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={battle.image}
                alt={battle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1 font-arabic">{battle.name}</h3>
                {battle.date && (
                  <p className="text-[#c4a484] mb-2 font-arabic">{battle.date}</p>
                )}
                <p className="text-gray-600 mb-4 text-sm font-arabic">{battle.description}</p>
                {battle.location && (
                  <p className="text-gray-500 text-sm mb-2 font-arabic">
                    الموقع: {battle.location}
                  </p>
                )}
                {battle.result && (
                  <p className="text-gray-500 text-sm mb-4 font-arabic">
                    النتيجة: {battle.result}
                  </p>
                )}
                <button className="flex items-center justify-center w-full bg-[#2c1810] text-white py-2 px-4 rounded hover:bg-[#3d2419] transition-colors font-arabic">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}