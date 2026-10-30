
const products = [
  {
    id: 1,
    name: "Fuel Pump",
    description: "Compatible model",
    price: 1200,
    image: "/pump.jpg",
    category: "Fuel System",
  },
  {
    id: 2,
    name: "Ball Joint",
    description: "Compatible model",
    price: 1500,
    image: "/balljoints.jpg",
    category: "Suspension",
  },
  {
    id: 3,
    name: "Arm Bush",
    description: "Compatible model",
    price: 1200,
    image: "/bushes.jpg",
    category: "Suspension",
  },
  {
    id: 4,
    name: "Brake Pads",
    description: "Reliable braking performance.",
    price: 1100,
    image: "/brakepad.jpg",
    category: "Braking System",
  },
  {
    id: 5,
    name: "LED Headlight",
    description: "Bright and dependable lighting.",
    price: 2000,
    image: "/bulbs.jpg",
    category: "Lighting",
  },
  {
    id: 6,
    name: "Air Filter",
    description: "Helps keep engine air clean.",
    price: 1800,
    image: "/filters.jpg",
    category: "Filters",
  },
  {
    id: 7,
    name: "Spray Paints",
    description: "For vehicle touch-ups and finishing.",
    price: 250,
    image: "/paints.jpg",
    category: "Accessories",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-semibold uppercase tracking-widest text-[#c90062]">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold text-black md:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 text-gray-600">
              Explore some of our popular car spare parts.
            </p>
          </div>

          <span className="font-semibold text-[#c90062]">
            {products.length} Products
          </span>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <p className="mb-2 text-sm text-[#c90062]">
                  {product.category}
                </p>

                <h3 className="mb-2 text-lg font-bold text-black">
                  {product.name}
                </h3>

                <p className="mb-3 text-sm text-gray-600">
                  {product.description}
                </p>

                <p className="text-xl font-bold text-black">
                  KSh {product.price.toLocaleString("en-KE")}
                </p>

                <button
                  type="button"
                  className="mt-4 w-full rounded-lg bg-[#c90062] px-4 py-3 font-semibold text-white transition hover:bg-black"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
