import { useState } from 'react';
import Button from '../components/Button';

const SignUp = ({ onSignInClick }) => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    agreeTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up data:', formData);
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
  };

  return (
    <div className="min-h-screen blue-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-base-2 font-poppins font-semibold text-52 leading-tight mb-5">
            Create Free Account
          </h1>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-5xl shadow-custom p-8">
          {/* Google Sign Up Button */}
          <div className="mb-8">
            <Button
              variant="google"
              size="lg"
              withIcon={true}
              className="w-full h-16 text-base font-poppins font-semibold"
              onClick={handleGoogleSignUp}
            >
              Sign up with Google
            </Button>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full h-16 px-4 border border-gray-200 rounded-lg text-gray-600 font-poppins text-base placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                required
              />
            </div>

            {/* Full Name Field */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="First & Last Name"
                className="w-full h-16 px-4 border border-gray-200 rounded-lg text-gray-600 font-poppins text-base placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create Password"
                className="w-full h-16 px-4 border border-gray-200 rounded-lg text-gray-600 font-poppins text-base placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                required
              />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="w-5 h-5 border border-blue-gray-400 rounded mt-0.5"
                required
              />
              <span className="text-base-2 font-poppins text-sm leading-relaxed">
                I agree with the Terms & Conditions of Clarity
              </span>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full h-16 text-base font-poppins font-semibold"
            >
              Sign Up
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-8">
            <p className="text-gray-500 font-poppins text-sm">
              Have an account?{' '}
              <button 
                className="text-primary-50 hover:underline"
                onClick={onSignInClick}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;