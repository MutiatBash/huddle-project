import { termsData } from "../data";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
// import { faRotate } from "@fortawesome/free-solid-svg-icons";

const TermsOfService = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-5 md:gap-8 py-4 md:py-14 lg:py-16 ">
        <div className="flex flex-col gap-3 text-center md:text-left px-4 md:px-10 lg:px-16 py-1">
          <h1 className="font-semibold text-4xl">Privacy Policy </h1>
          <p className="">
            Welcome to Huddle! We are committed to safeguarding your privacy and
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and protect your data when you visit our
            website or use our services. By accessing or using our website and
            services, you consent to the practices described in this policy.
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-[#fafafa] px-4 md:px-10 lg:px-16 py-10">
          <h3 className="font-semibold text-2xl text-center md:text-left">
            Information We Collect
          </h3>
          <p>
            We may collect various types of information, including but not
            limited to:
          </p>
          <p>
            <span className="font-semibold">Personal Information:</span> This
            may include your name, email address, postal address, phone number,
            and other information you provide to us directly.
          </p>
          <p>
            <span className="font-semibold">Device Information:</span> We may
            collect information about your device, including its type, operating
            system, browser, and IP address.
          </p>
          <p className="mb-3">
            <span className="font-semibold">Usage Information:</span> We may
            collect data about how you use our website and services, including
            pages visited, actions taken, and interaction with content.
          </p>
        </div>
        <div className="flex flex-col gap-3 px-4 md:px-10 lg:px-16 ">
          <h3 className="font-semibold text-2xl text-center md:text-left">
            How we collect your information
          </h3>
          <p>We collect information in the following ways:</p>
          <p>
            <span className="font-semibold">Directly from You:</span> We collect
            information when you voluntarily provide it, such as when you fill
            out forms or contact us.
          </p>
          <p className="mb-3">
            <span className="font-semibold">Automatically:</span> We use cookies
            and similar tracking technologies to collect data about your
            interaction with our website. You can manage your cookie preferences
            in your browser settings.
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-[#fafafa] px-4 md:px-10 lg:px-16 py-10">
          <h3 className="font-semibold text-2xl text-center md:text-left">
            How We Use Your Information
          </h3>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="mb-3">
            <li>Providing and improving our products and services.</li>
            <li>Personalizing your experience on our website.</li>
            <li>
              Communicating with you, including responding to your inquiries.
            </li>
            <li>
              Analyzing user behavior and trends to enhance our offerings.
            </li>
            <li>Complying with legal obligations and protecting our rights.</li>
          </ul>
        </div>
        {/* GRID VIEW */}
        <div className="grid py-10 md:grid-cols-2 md:gap-12 gap-8 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10 text-center md:text-left px-4 md:px-10 lg:px-16 ">
          {termsData.map((terms) => (
            <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
              <div className="bg-[#faf0eaef] rounded-full px-4 py-3 text-center">
                <FontAwesomeIcon
                  icon={terms.Icon}
                  style={{ color: "#ff7518" }}
                />
              </div>
              <h3 className="font-semibold text-2xl md:text-xl lg:text-2xl">{terms.title}</h3>
              <p className="mb-2">{terms.details}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
