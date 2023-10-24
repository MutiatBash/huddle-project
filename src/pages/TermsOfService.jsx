import { termsData } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
// import { faRotate } from "@fortawesome/free-solid-svg-icons";

const TermsOfService = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-5 md:gap-8 py-4 px-4 md:px-16 md:py-14 lg:py-16">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-4xl">Privacy Policy </h1>
          <p className="">
            Welcome to Huddle! We are committed to safeguarding your privacy and
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and protect your data when you visit our
            website or use our services. By accessing or using our website and
            services, you consent to the practices described in this policy.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl">Information We Collect</h3>
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
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl">
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

        <h3 className="font-semibold text-2xl">How We Use Your Information</h3>
        <p>
          We use the information we collect for various purposes, including:
        </p>

        <ul className="mb-3">
          <li>Providing and improving our products and services.</li>
          <li>Personalizing your experience on our website.</li>
          <li>
            Communicating with you, including responding to your inquiries.
          </li>
          <li>Analyzing user behavior and trends to enhance our offerings.</li>
          <li>Complying with legal obligations and protecting our rights.</li>
        </ul>
        {/* GRID VIEW */}
        <div className="grid md:grid-col-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
          {termsData.map((terms) => (
            <div className="flex flex-col gap-3 items-center md:items-start">
              <div className="bg-[#faf0eaef] rounded-full px-4 py-3 text-center">
                <FontAwesomeIcon
                  icon={terms.Icon}
                  style={{ color: "#ff7518" }}
                />
              </div>
              <h3 className="font-semibold text-2xl">{terms.title}</h3>
              <p className="mb-2">{terms.details}</p>
            </div>
          ))}
        </div>
        <h3 className="font-semibold text-2xl">Contact Us</h3>
        <p className="mb-3">
          If you have any questions or concerns about this Privacy Policy or
          your data, please contact us at:
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
