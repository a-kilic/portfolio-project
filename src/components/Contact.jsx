const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
      <section className="p-4 mt-5 bg-gray-800 border rounded-lg bg-opacity-70">
        <p className="mb-4 text-xl text-white">Contact Me:</p>
        <form
          action="https://formsubmit.co/30a0e979ad3d5687f8fb29bfcd504cff"
          method="POST"
        >
          <div className="flex flex-col space-y-4">
            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 mt-1 text-gray-900 border rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 mt-1 text-gray-900 border rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Message Input */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="p-2 mt-1 text-gray-900 border rounded-lg"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div>
              <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
