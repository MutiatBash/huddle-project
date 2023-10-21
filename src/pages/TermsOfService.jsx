import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <div>
      <Navbar />
      <div className="terms-container py-4 px-4 md:px-14">
      <h1 className="font-semibold text-4xl">Privacy Policy </h1>
        <p className="mb-3">
            Welcome to Huddle! We are committed to safeguarding your privacy and protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you visit our website or use our services. By accessing or using our website and services, you consent to the practices described in this policy.
        </p>
        
        <h3 className="font-semibold text-2xl">Information We Collect</h3>
        <p>We may collect various types of information, including but not limited to:</p>
        <p>
            <span className="font-semibold">Personal Information:</span> This may include your name, email address, postal address, phone number, and other information you provide to us directly.
        </p>
        <p>
            <span className="font-semibold">Device Information:</span> We may collect information about your device, including its type, operating system, browser, and IP address.
        </p>
        <p className="mb-3"> 
            <span className="font-semibold">Usage Information:</span> We may collect data about how you use our website and services, including pages visited, actions taken, and interaction with content.
        </p>
            
        <h3 className="font-semibold text-2xl">How we collect your information</h3>
        <p>We collect information in the following ways:</p>
        <p>
            <span className="font-semibold">Directly from You:</span> We collect information when you voluntarily provide it, such as when you fill out forms or contact us.
        </p> 
        <p className="mb-3">
            <span className="font-semibold">Automatically:</span> We use cookies and similar tracking technologies to collect data about your interaction with our website. You can manage your cookie preferences in your browser settings.
        </p>

        <h3 className="font-semibold text-2xl">How We Use Your Information</h3>
        <p >We use the information we collect for various purposes, including:</p>

        <ul className="mb-3">
            <li>Providing and improving our products and services.</li>
            <li>Personalizing your experience on our website.</li>
            <li>Communicating with you, including responding to your inquiries.</li>
            <li>Analyzing user behavior and trends to enhance our offerings.</li>
            <li>Complying with legal obligations and protecting our rights.</li>
        </ul>

        <h3 className="font-semibold text-2xl">Data Protection and Security</h3>
        <p className="mb-2">
            We take the security of your data seriously and implement appropriate measures to protect it. These measures include encryption, access controls, regular security assessments, and employee training.
        </p>

        <h3 className="font-semibold text-2xl">Your Data Rights</h3>
        <p className="mb-3">
            You have certain rights regarding your personal data, including the right to access, rectify, delete, or object to the processing of your data. You can exercise these rights by contacting us using the information provided below.
        </p>

        <h3 className="font-semibold text-2xl">Cookies and Tracking</h3>
        <p className="mb-3">
            We use cookies and similar technologies for various purposes, including analytics and personalization. You can manage your cookie preferences in your browser settings.
        </p>

        <h3 className="font-semibold text-2xl">Third-Party Links and Services</h3>
        <p className="mb-3">
            Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review their privacy policies before using their services.
        </p>

        <h3 className="font-semibold text-2xl">Data Retention</h3>
        <p className="mb-3">
            We retain your data for as long as necessary to fulfill the purposes outlined in this Privacy Policy. When data is no longer needed, it will be securely deleted.
        </p>

        <h3 className="font-semibold text-2xl">Updates to this Privacy Policy</h3>
        <p className="mb-3">
            We may update this Privacy Policy periodically to reflect changes in our practices. The Last Updated date at the top of the policy will indicate the latest revision.
        </p>

        <h3 className="font-semibold text-2xl">Contact Us</h3>
        <p className="mb-3">
            If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
