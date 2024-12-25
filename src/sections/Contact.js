import React from "react";
import FadeIn from "../components/FadeIn";

const Contact = () => {
  return (
    <section
      className="pt-16 pb-36 relative  mb-[-110px] z-[-120]"
      id="contact"
    >
      <div className="container-max-w-5xl">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        </FadeIn>
          <div className="flex flex-wrap mx-4">
            <div className="bg-lightcream p-8 rounded-md border border-choco shadow-xl h-full flex flex-col md:flex-row md:space-x-8">
              {/* Left Column: Contact Info */}
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <p className="mb-4">
                  We look forward to welcoming you. For reservations, inquiries,
                  or assistance, please contact us.
                </p>
                <ul>
                  {/* Uncomment if you need to add email */}
                  {/* <li className="mb-2"><strong>Email:</strong> cmidiapaga@gmail.com</li> */}
                  <li className="mb-2">
                    <strong>Phone:</strong> +383 44 987 898
                  </li>
                  <li className="mb-2">
                    <strong>Address:</strong> Luan Qelaj 5, 10000 Pristina,
                    Kosovo
                  </li>
                  {/* Uncomment if you need to add social media */}
                  {/* <li><strong>Social Media:</strong> Links to your social media profiles</li> */}
                </ul>
              </div>

              {/* Right Column: Map */}
              <div className="md:w-1/2 mt-6 md:mt-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5412067782463!2d21.16671347538548!3d42.67107687116565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f66848260c9%3A0x2fa3c6eab4e609c7!2sUrban%20Boutique%20Hotel%20Prishtina!5e0!3m2!1sen!2s!4v1733426960984!5m2!1sen!2s"
                  className="w-full h-60 lg:h-80"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing the location of Urban Boutique Hotel in Prishtina"
                ></iframe>
              </div>
            </div>

            {/* Contact Information */}
            {/* <div className="w-full px-4 mb-8">
              <div className="bg-cream p-8 rounded-md border border-choco shadow-xl h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <p className="mb-4">
                  We look forward to welcoming you. For reservations, inquiries,
                  or assistance, please contact us.
                </p>
                <ul>
                  <li className="mb-2">
                    <strong>Phone:</strong> +383 44 987 898
                  </li>
                  <li className="mb-2">
                    <strong>Address:</strong> Luan Qelaj 5, 10000 Pristina,
                    Kosovo
                  </li>
                </ul>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5412067782463!2d21.16671347538548!3d42.67107687116565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f66848260c9%3A0x2fa3c6eab4e609c7!2sUrban%20Boutique%20Hotel%20Prishtina!5e0!3m2!1sen!2s!4v1733426960984!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Map showing the location of Urban Boutique Hotel in Prishtina"
                ></iframe>
              </div>
              </div> */}
          </div>
      </div>
    </section>
  );
};

export default Contact;
