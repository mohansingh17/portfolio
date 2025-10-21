import React from "react";

export default function Contact() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto text-white py-10 px-5">
        <h2 className="font-jost text-center font-semibold text-4xl my-10 py-2 text-baseColor relative heading w-fit mx-auto">
          Contact Me
        </h2>

        <div className="flex gap-10 justify-between max-md:flex-col">
          {/* Left Side: Contact Info */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold mb-5">Contact Info</h4>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-baseColor font-semibold">Name</span>
                <span>Mohan Singh</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-baseColor font-semibold">
                  Contact No.
                </span>
                <span>+91-9720125830</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-baseColor font-semibold">Email</span>
                <span>workformohan17@gmail.com</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-baseColor font-semibold">Address</span>
                <span>Hathras, UP 204216</span>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold mb-5">Message Me</h4>
            <form className="flex flex-col gap-5 rounded-2xl shadow-lg">
              <div className="flex gap-5 max-md:flex-col">
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-baseColor transition-all"
                  required
                />
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-baseColor transition-all"
                  required
                />
              </div>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-baseColor transition-all"
                required
              />

              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:border-baseColor transition-all resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-baseColor text-white py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all w-fit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-white py-2.5 text-center text-sm tracking-wide">
        Design By Mohan Singh | Copyright © {new Date().getFullYear()}
      </div>
    </>
  );
}
