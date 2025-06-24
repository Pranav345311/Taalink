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
    <main className="min-h-screen bg-orange-50 text-gray-900 p-6 space-y-12">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-orange-600">TaalLink</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Free Tabla Workshop: Pass On the Rhythm. Empowering youth through Indian percussion.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#volunteer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl"
          >
            Join Us
          </a>
          <a
            href="https://rzp.io/l/sampleDonate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-orange-500 px-4 py-2 rounded-xl text-orange-600">
              Donate
            </button>
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      <section className="text-center py-12" id="volunteer">
        <h2 className="text-3xl font-bold text-orange-600">Volunteer or Partner with Us</h2>
        <p className="mt-2 max-w-xl mx-auto">
          Want to teach, help with logistics, or bring our program to your school or community?
          Fill out the form below.
        </p>
        <div className="mt-6 max-w-2xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe5L5s-Dq3uhKsoUjldyiRWnUVBtjcO2fKqOCZxMQymg_sG9w/viewform?embedded=true"
            width="100%"
            height="640"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Volunteer Form"
          >
            Loading…
          </iframe>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-600 py-6 border-t border-orange-200">
        © 2025 TaalLink. Empowering youth through rhythm. <br />
        <a
          href="https://wa.me/918123456789"
          className="text-orange-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </footer>
    </main>
  );
}
