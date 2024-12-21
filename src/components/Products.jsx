import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const menClothingResponse = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
        const womenClothingResponse = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");

        const menClothing = await menClothingResponse.json();
        const womenClothing = await womenClothingResponse.json();

        const allProducts = [...menClothing, ...womenClothing];
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  if (loading) {
    return <div className="text-center mt-10">Loading products...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Our Products</h1>

      {cartOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>{item.title}</span>
                  <span className="text-yellow-500">${item.price}</span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button
                onClick={handleCloseCart}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
              >
                Close Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center justify-center bg-gray-100 h-48">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-auto object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h2>
              <p className="text-gray-700 text-sm mb-4">
                {product.description.slice(0, 100)}...
              </p>
              <p className="text-yellow-500 font-semibold mb-4">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
