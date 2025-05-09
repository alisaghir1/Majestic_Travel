'use client';

export default function Newsletter() {
  return (
    <section className="w-full py-28 bg-[#f2f2f7] text-center">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl text-[#1c355e] font-bold mb-8">Newsletter Sign-up</h2>
        <p className="md:text-xl text-lg text-[#8b7866] mb-5">
          Want travel ideas and hidden deals delivered? Subscribe to our monthly travel inspiration.
        </p>

        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-xl px-8 py-5 text-xl rounded-full bg-white border border-[#1c355e] focus:outline-none focus:ring-2 focus:ring-[#1c355e] transition-all"
          />
          <button className="ml-6 px-8 py-5 bg-[#1c355e] text-white text-xl rounded-full hover:bg-[#8b7866] transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
