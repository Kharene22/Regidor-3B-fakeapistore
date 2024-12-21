const Features = () => (
    <section id="features" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 leading-snug">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 text-white rounded-full mx-auto mb-6">
              🚀
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fast Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              Get your orders delivered in record time, wherever you are!
            </p>
          </div>
  
  
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 text-white rounded-full mx-auto mb-6">
              🎨
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Stylish Designs</h3>
            <p className="text-gray-600 leading-relaxed">
              Explore trendy, comfortable, and unique styles.
            </p>
          </div>
  
        
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 text-white rounded-full mx-auto mb-6">
              💳
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Secure Payments</h3>
            <p className="text-gray-600 leading-relaxed">
              Pay securely with multiple payment options available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Features;
  