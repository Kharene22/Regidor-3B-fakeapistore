const Home = () => (
  <section
    id="home"
    className="h-screen bg-[url('./BG.jpg')] bg-cover bg-center flex justify-center items-center"
  >
    <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-center max-w-2xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-300 mb-6 leading-tight">
        Welcome to Clothora
      </h1>
      <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-8 leading-relaxed">
        Discover the trendiest styles with unbeatable quality and prices.
      </p>
      <a href="products">
        <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all duration-300">
          Shop Now
        </button>
      </a>
    </div>
  </section>
);

export default Home;
