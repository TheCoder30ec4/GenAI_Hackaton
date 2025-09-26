const Avatar = ({ 
  src, 
  alt = "User avatar", 
  size = 'md', 
  showOnlineIndicator = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-15 h-15'
  };
  
  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden`}>
        {src ? (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full primary-200 flex items-center justify-center">
            <span className="text-primary-50 font-semibold text-sm">
              {alt.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      {showOnlineIndicator && (
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 success-500 border-2 border-white rounded-full"></div>
      )}
    </div>
  );
};

export default Avatar;