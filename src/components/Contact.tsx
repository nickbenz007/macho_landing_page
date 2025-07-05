export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-40 text-center bg-[#0d0d0d]"
    >
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
          Let’s Build Your Vision
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Whether it’s a wellness app, a real-time dashboard, or a mind-blowing
          3D experience — I’ve got the code and creativity to make it real.
        </p>

        <a
          href="mailto:nickbenz007@gmail.com"
          className="inline-block px-8 py-4 rounded-full bg-green-600 text-black font-bold text-lg shadow-lg hover:bg-green-500 transition duration-300"
        >
          Contact Me 📩
        </a>

        <div className="mt-10 text-sm text-gray-500">
          Based in Qatar — Available Worldwide 🌍
        </div>
      </div>
    </section>
  );
};
