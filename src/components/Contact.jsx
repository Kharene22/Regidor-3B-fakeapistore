const Contact = () => {
  return (
    <section id="contact" className="py-8 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
     
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Leave a Comment</h2>

 
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
          <form className="space-y-4">
     
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

        
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            
            <div>
              <textarea
                placeholder="Add a comment..."
                rows="3"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

           
            <div className="text-right">
              <button
                type="submit"
                className="px-5 py-2 bg-yellow-400 text-gray-900 font-medium rounded-md shadow hover:bg-yellow-300 transition duration-300"
              >
                Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
