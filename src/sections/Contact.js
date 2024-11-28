import React from "react";
import FadeIn from "../components/FadeIn";

const Contact = () => {
  return (
    <section
      className="pt-16 pb-36 bg-chillmint  relative  mb-[-110px] z-[-120]"
      id="contact"
    >
      <div className="container-max-w-5xl">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-wrap -mx-4">
            {/* Contact Form */}
            {/* <div className="w-full md:w-2/3 px-4 mb-8">
            <form className="bg-cream p-8 rounded-xl border border-choco shadow-solid">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg h-32"
                  id="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-mint border border-mint text-cream px-6 py-3 rounded-lg font-semibold hover:bg-cream hover:text-mint transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div> */}

            {/* Contact Information */}
            <div className="w-full px-4 mb-8">
              <div className="bg-cream p-8 rounded-md border border-choco h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <p className="mb-4">
                  Feel free to reach out to us via email. We look forward to
                  hearing from you!&#10084;&#65039;
                </p>
                <ul>
                  {/* {/* <li className="mb-2">
                    /* <strong>Email:</strong> cmidiapaga@gmail.com
                  </li> */ }
                  <li className="mb-2">
                  <strong>Phone:</strong> +383 44 987 898
                </li>
                  <li className="mb-2">
                    <strong>Address:</strong> Xhavit Haziri 10, 10000 Pristina, Kosovo
                  </li>
                  {/* <li>
                  <strong>Social Media:</strong> Links to your social media profiles
                </li> */}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;

// import React from 'react';

// const Contact = () => {
//   return (
//     <section className="py-20 bg-gray-100" id="contact">
//       <div className="container mx-auto max-w-4xl">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
//         <p className="text-center mb-8 text-gray-600">
//           We’d love to hear from you! Please fill out the form below.
//         </p>
//         <form className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               type="text"
//               id="name"
//               placeholder="Your Name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               type="email"
//               id="email"
//               placeholder="Your Email"
//               required
//             />
//           </div>
//           <div className="mb-4 md:col-span-2">
//             <label className="block text-gray-700 mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 h-32"
//               id="message"
//               placeholder="Your Message"
//               required
//             ></textarea>
//           </div>
//           <div className="flex justify-center md:col-span-2">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
