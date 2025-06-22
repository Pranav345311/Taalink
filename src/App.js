import React from "react";

function Card({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-orange-200">
      <h2 className="text-xl font-semibold text-orange-500">{title}</h2>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-orange-50 text-gray-900 p-6 space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-orange-600">TaalLink</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Bridging cultures through rhythm. Empowering youth with the art of tabla.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl">
            Join Us
          </button>
          <a href="https://example.com/donate" target="_blank" rel="noopener noreferrer">
            <button className="border border-orange-500 px-4 py-2 rounded-xl text-orange-600">
              Donate
            </button>
          </a>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white rounded-2xl p-8 shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-4">Our Mission & Vision</h2>
        <p className="text-gray-700 mb-4">
          <strong>Mission:</strong> TaalLink is a student-led nonprofit that makes tabla education accessible to underrepresented youth in Karnataka and beyond. We use rhythm as a tool for expression, confidence, and cultural preservation.
        </p>
        <p className="text-gray-700">
          <strong>Vision:</strong> We envision a world where every child—regardless of income or geography—has access to the healing, empowering, and identity-affirming power of Indian percussion.
        </p>
      </section>

      {/* Programs */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card
          title="Free Workshops"
          description="We offer free tabla workshops for schools and community centers, led by passionate volunteers."
        />
        <Card
          title="Tabla Kits for All"
          description="We donate beginner tabla kits to underprivileged youth in India and abroad to ensure access to music education."
        />
        <Card
          title="Online Learning"
          description="Access beginner-friendly video tutorials, PDF resources, and theory modules to learn tabla at your own pace."
        />
      </section>

      {/* Volunteer Form */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-orange-600">Volunteer or Partner with Us</h2>
        <p className="mt-2 max-w-xl mx-auto">
          Want to teach, help with logistics, or bring our program to your school or community? Fill out the form below.
        </p>
        <form className="mt-6 max-w-md mx-auto space-y-4">
          <input className="w-full p-3 border rounded-xl" type="text" placeholder="Your Name" />
          <input className="w-full p-3 border rounded-xl" type="email" placeholder="Your Email" />
          <input className="w-full p-3 border rounded-xl" type="text" placeholder="How would you like to help?" />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 w-full rounded-xl">
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-6 border-t border-orange-200">
        © 2025 TaalLink. Empowering youth through rhythm.
      </footer>
    </main>
  );
}
