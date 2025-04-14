import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sword, Clock, Users, Swords, Home, MenuIcon, Map, Flag } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2c1810] text-[#e4d5b7] p-4 fixed w-full z-50">
      <div className="container mx-auto flex flex-row-reverse justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-reverse space-x-2">
          <Link to="/" className="flex items-center space-x-reverse space-x-2">
            <span className="text-xl font-arabic">الفتح الأندلسي</span>
            <Sword className="h-6 w-6" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-reverse space-x-6">
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/" className="flex items-center space-x-reverse space-x-1">
              <Home size={18} />
              <span>الرئيسية</span>
            </Link>
          </li>
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/timeline" className="flex items-center space-x-reverse space-x-1">
              <Clock size={18} />
              <span>الجدول الزمني</span>
            </Link>
          </li>
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/characters" className="flex items-center space-x-reverse space-x-1">
              <Users size={18} />
              <span>الشخصيات</span>
            </Link>
          </li>
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/battles" className="flex items-center space-x-reverse space-x-1">
              <Swords size={18} />
              <span>المعارك</span>
            </Link>
          </li>
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/conquests" className="flex items-center space-x-reverse space-x-1">
              <Flag size={18} />
              <span>الفتوحات</span>
            </Link>
          </li>
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/battle-map" className="flex items-center space-x-reverse space-x-1">
              <Map size={18} />
              <span>خريطة المعارك</span>
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="pt-4 space-y-4">
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/" className="flex items-center space-x-reverse space-x-2">
              <Home size={18} />
              <span>الرئيسية</span>
            </Link>
          </li>
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/timeline" className="flex items-center space-x-reverse space-x-2">
              <Clock size={18} />
              <span>الجدول الزمني</span>
            </Link>
          </li>
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/characters" className="flex items-center space-x-reverse space-x-2">
              <Users size={18} />
              <span>الشخصيات</span>
            </Link>
          </li>
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/battles" className="flex items-center space-x-reverse space-x-2">
              <Swords size={18} />
              <span>المعارك</span>
            </Link>
          </li>
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/conquests" className="flex items-center space-x-reverse space-x-2">
              <Flag size={18} />
              <span>الفتوحات</span>
            </Link>
          </li>
          <li className="hover:text-[#c4a484] transition-colors">
            <Link to="/battle-map" className="flex items-center space-x-reverse space-x-2">
              <Map size={18} />
              <span>خريطة المعارك</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}