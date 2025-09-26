import { useState } from 'react';
import Button from '../components/Button';


const SignIn = ({ onSignUpClick }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    console.log('Sign in data:', formData);
  };


  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
  };


  return (
    <div className="min-h-screen blue-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-base-2 font-poppins font-semibold text-52 leading-tight mb-5">
            Sign in to your account
          </h1>
        </div>


        {/* Form Container */}
        <div className="bg-white rounded-5xl shadow-custom p-8">
          {/* Google Sign In Button */}
          <div className="mb-8">
            <Button
              variant="google"
              size="lg"
              withIcon={true}
              className="w-full h-16 text-base font-poppins font-semibold"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
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


            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-5 h-5 border border-blue-gray-400 rounded"
                />
                <span className="text-base-2 font-poppins text-sm">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                className="text-base-2 font-poppins text-sm hover:underline"
              >
                Forgot password?
              </button>
            </div>


            {/* Sign In Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full h-16 text-base font-poppins font-semibold"
            >
              Sign In
            </Button>
          </form>


          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-gray-500 font-poppins text-sm">
              Don't have an account?{' '}
              <button 
                className="text-primary-50 hover:underline"
                onClick={onSignUpClick}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignIn;