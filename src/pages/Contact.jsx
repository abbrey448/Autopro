export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <h2 className="mb-4 text-2xl font-bold">
            Auto<span className="text-[#c90062]">Pro</span>
          </h2>

          <p className="max-w-xs leading-7 text-gray-400">
            Your trusted destination for quality car spare parts
            and automotive accessories.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="/" className="hover:text-[#c90062]">Home</a></li>
            <li><a href="#products" className="hover:text-[#c90062]">Products</a></li>
            <li><a href="/contact" className="hover:text-[#c90062]">Contact Us</a></li>
            <li><a href="/login" className="hover:text-[#c90062]">Login</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">Customer Service</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Help Center</li>
            <li>Delivery Information</li>
            <li>Returns and Refunds</li>
            <li>Frequently Asked Questions</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold">Follow AutoPro</h3>
          <p className="mb-4 text-gray-400">
            Connect with us on social media.
          </p>

          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-gray-800 px-4 py-2 hover:bg-[#c90062]"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-gray-800 px-4 py-2 hover:bg-[#c90062]"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-gray-800 px-4 py-2 hover:bg-[#c90062]"
            >
              TikTok
            </a>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AutoPro. All rights reserved.
      </div>
    </footer>
  );
}
