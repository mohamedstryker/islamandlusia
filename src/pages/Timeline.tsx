import React from 'react';
import { Clock } from 'lucide-react';

export function Timeline() {
  return (
    <div className="min-h-screen bg-[#f8f4e8] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#2c1810] font-arabic text-center">
          الجدول الزمني للأندلس
        </h1>
        <div className="relative">
          <div className="absolute right-1/2 h-full w-0.5 bg-[#2c1810]"></div>
          <div className="space-y-12">
            {/* Placeholder for timeline content */}
            <div className="relative">
              <div className="absolute right-1/2 w-6 h-6 rounded-full bg-[#2c1810] -mr-3 flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <div className="mr-12 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2 font-arabic">فتح الأندلس</h3>
                <p className="text-gray-600 font-arabic">قيد الإنشاء...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}