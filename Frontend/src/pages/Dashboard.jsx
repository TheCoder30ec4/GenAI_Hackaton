import { useState } from 'react';
import Avatar from '../components/Avatar';
import AttachIcon from '../components/Icons/AttachIcon';
import MicIcon from '../components/Icons/MicIcon';
import PencilIcon from '../components/Icons/PencilIcon';

const Dashboard = ({ onMessageSubmit }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      console.log('Sending message:', chatMessage);
      setChatMessage('');
      if (onMessageSubmit) {
        onMessageSubmit();
      }
    }
  };

  const handleMicClick = () => {
    console.log('Mic clicked');
  };

  const handleAttachClick = () => {
    console.log('Attach clicked');
  };

  return (
    <div className="min-h-screen primary-200 relative">
      {/* Right Side Background */}
      <div className="absolute right-0 top-0 w-1/2 h-full primary-200 rounded-l-3xl"></div>
      
      {/* Main Content */}
      <div className="relative z-10 px-16 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="text-primary-300 font-plus-jakarta font-bold text-58 leading-tight">
            Where do you want to go or what's your travel mood?
          </div>
          
          {/* User Avatar with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="focus:outline-none"
            >
              <Avatar
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="Olivia Rhye"
                size="lg"
                showOnlineIndicator={true}
              />
            </button>
            
            {/* Simple dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-60 bg-white border border-gray-100 rounded-lg shadow-dropdown z-50">
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-700">Olivia Rhye</p>
                  <p className="text-sm text-gray-500">olivia@untitledui.com</p>
                </div>
                <div className="border-t border-gray-100">
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                    View profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                    Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl">
          {/* Chat Box */}
          <div className="bg-white rounded-3xl shadow-chat p-8 mb-8">
            {/* Chat Message */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-6 h-6 text-primary-200">
                <PencilIcon className="w-full h-full" />
              </div>
              <div className="flex-1">
                <p className="text-primary-200 font-plus-jakarta font-bold text-xl leading-tight">
                  Let's Get started!
                </p>
              </div>
            </div>

            {/* Input Area */}
            <div className="flex items-center gap-4">
              {/* Attach Button */}
              <button
                onClick={handleAttachClick}
                className="w-10 h-10 border-2 border-primary-200 rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors"
              >
                <AttachIcon className="w-5 h-5 text-primary-200" />
              </button>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="flex-1 flex items-center gap-4">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 h-12 px-4 border border-gray-200 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                />
                
                {/* Mic Button */}
                <button
                  type="button"
                  onClick={handleMicClick}
                  className="w-12 h-12 primary-200 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
                >
                  <MicIcon className="w-6 h-6 text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;