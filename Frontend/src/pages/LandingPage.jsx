import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen primary-200 relative overflow-hidden">
      {" "}
      {/* Background Image */}{" "}
      <div
        className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
        }}
      />{" "}
      {/* Header */}{" "}
      <header className="relative z-10 px-8 py-8">
        {" "}
        <div className="flex items-center justify-between">
          {" "}
          {/* Logo */}{" "}
          <div className="text-gray-900 font-plus-jakarta font-bold text-base tracking-wider uppercase">
            {" "}
            Easy my trip{" "}
          </div>{" "}
          {/* Navigation */}{" "}
          <div className="flex items-center gap-8">
            {" "}
            <Button
              onClick={() => navigate("/signin")}
              variant="primary"
              size="md"
              className="!bg-[#FFFBDE] !text-[#4682A9]"
            >
              Sign in
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              variant="primary"
              size="md"
            >
              {" "}
              Create free account{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      {/* Main Content */}{" "}
      <main className="relative z-10 px-8 py-16">
        {" "}
        <div className="max-w-7xl mx-auto">
          {" "}
          <div className="max-w-2xl">
            {" "}
            {/* Hero Text */}{" "}
            <h1 className="text-primary-300 font-plus-jakarta font-extrabold text-58 leading-tight mb-6">
              {" "}
              Discover, Plan & Explore — Smarter Travel Starts Here{" "}
            </h1>{" "}
            <p className="text-gray-600 font-inter text-base leading-relaxed mb-12">
              {" "}
              Find destinations based on your budget, mood, and time. Get the
              best stays, food spots, shopping hubs, and create memories — all
              in one place.{" "}
            </p>{" "}
            {/* CTA Button */}{" "}
            <Button
              onClick={() => navigate("/signin")}
              variant="primary"
              size="lg"
              className="w-52 h-16 text-lg font-plus-jakarta font-bold"
            >
              {" "}
              Plan my Trip{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
      </main>{" "}
      {/* Decorative Elements */}{" "}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-4">
        {" "}
        <svg className="w-full h-full" viewBox="0 0 1600 965" fill="none">
          {" "}
          <path
            d="M68.55 63.02L697.67 438.94"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M95.09 103.93L928.75 477.64"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M127.15 223.34L848.04 517.44"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M166.95 409.09L887.84 545.09"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M181.33 516.34L1034.9 574.94"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M196.81 590.42L843.62 683.3"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M220.03 626.91L757.99 913"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M232.19 663.39L478.75 933.17"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M229.98 699.88L346.07 969.66"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M216.71 719.78L242.14 1006.14"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M121.62 745.21L192.38 1035.99"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M0 766.22L159.21 1006.15"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M47.54 18.8L487.59 395.83"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M33.17 0L299.63 360.44"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
          <path
            d="M11.06 24.32L145.95 312.9"
            stroke="#4682A9"
            strokeWidth="10"
            strokeLinecap="round"
          />{" "}
        </svg>{" "}
      </div>{" "}
      {/* Gradient Card Shadow */}{" "}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-gradient-3 rounded-full blur-3xl opacity-20"></div>{" "}
    </div>
  );
};
export default LandingPage;
