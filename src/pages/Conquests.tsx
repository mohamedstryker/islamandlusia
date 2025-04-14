import React from 'react';
import { Flag } from 'lucide-react';

export function Conquests() {
  return (
    <div className="min-h-screen bg-[#f8f4e8] pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-[#2c1810] font-arabic text-center">
          الفتوحات الإسلامية في الأندلس
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for conquests content */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Flag className="h-12 w-12 text-[#2c1810] mb-4" />
            <h3 className="text-xl font-bold mb-2 font-arabic">الفتوحات</h3>
            <p className="text-gray-600 font-arabic">قيد الإنشاء...</p>
          </div>
        </div>
      </div>
    </div>
  );
}