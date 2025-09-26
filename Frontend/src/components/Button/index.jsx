import ArrowRight from '../Icons/ArrowRight';
import GoogleIcon from '../Icons/GoogleIcon';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  withIcon = false, 
  iconPosition = 'right',
  children, 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseClasses = 'flex items-center justify-center gap-2.5 font-poppins font-semibold rounded-lg transition-all duration-200';
  
  const variantClasses = {
    primary: 'primary-50 text-white hover:bg-primary-100',
    secondary: 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50',
    google: 'blue-gray-50 text-blue-gray-800 hover:bg-blue-gray-100',
    outline: 'bg-white text-primary-50 border border-primary-50 hover:bg-primary-50 hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-4 py-4 text-base',
    lg: 'px-6 py-4 text-lg'
  };
  
  const iconClasses = withIcon ? 'gap-2.5' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${iconClasses} ${className}`;
  
  const renderIcon = () => {
    if (!withIcon) return null;
    
    if (variant === 'google') {
      return <GoogleIcon className="w-6 h-6" />;
    }
    
    return <ArrowRight className="w-6 h-6" />;
  };
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {withIcon && iconPosition === 'left' && renderIcon()}
      <span className="flex-1 text-center">{children}</span>
      {withIcon && iconPosition === 'right' && renderIcon()}
    </button>
  );
};

export default Button;