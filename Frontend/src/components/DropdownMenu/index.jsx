import { useState, useRef, useEffect } from 'react';
import Avatar from '../Avatar';

const DropdownMenu = ({ 
  user = { name: 'Olivia Rhye', email: 'olivia@untitledui.com', avatar: null },
  isOpen,
  onClose,
  className = ''
}) => {
  const menuRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  const menuItems = [
    { label: 'View profile', divider: false },
    { label: 'Settings', divider: false },
    { label: 'Keyboard shortcuts', divider: true },
    { label: 'Company profile', divider: false },
    { label: 'Team', divider: false },
    { label: 'Invite colleagues', divider: true },
    { label: 'Changelog', divider: false },
    { label: 'Slack Community', divider: false },
    { label: 'Support', divider: false },
    { label: 'API', divider: true },
    { label: 'Log out', divider: false }
  ];
  
  return (
    <div 
      ref={menuRef}
      className={`absolute right-0 top-full mt-2 w-60 bg-white border border-gray-100 rounded-lg shadow-dropdown z-50 ${className}`}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Avatar 
            src={user.avatar} 
            alt={user.name}
            size="md"
            showOnlineIndicator={true}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-700 truncate">
              {user.name}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {user.email}
            </p>
          </div>
        </div>
      </div>
      
      {/* Menu Items */}
      <div className="py-1">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item.divider && index > 0 && (
              <div className="h-px bg-gray-100 my-1"></div>
            )}
            <button
              className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => {
                console.log(`Clicked: ${item.label}`);
                onClose();
              }}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;

