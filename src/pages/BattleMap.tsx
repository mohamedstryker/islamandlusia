import React from 'react';
import { Map } from 'lucide-react';

export function BattleMap() {
  return (
    <div className="min-h-screen bg-[#f8f4e8] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#2c1810] font-arabic text-center">
          خريطة المعارك
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center">
            <Map className="h-12 w-12 text-[#2c1810]" />
          </div>
          <p className="text-center mt-4 text-gray-600 font-arabic">قيد الإنشاء...</p>
        </div>
      </div>
    </div>
  );
}