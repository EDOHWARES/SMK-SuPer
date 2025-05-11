

// School Stats Component
export const SchoolStats = () => {
    return (
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Excellence in Numbers</h2>
            <p className="text-blue-100 mt-2">Our commitment to academic excellence reflects in our achievements</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg bg-blue-800 shadow-lg">
              <div className="text-yellow-400 text-4xl font-bold mb-2">98%</div>
              <div className="text-lg font-medium">Graduation Rate</div>
            </div>
            <div className="p-6 rounded-lg bg-blue-800 shadow-lg">
              <div className="text-yellow-400 text-4xl font-bold mb-2">94%</div>
              <div className="text-lg font-medium">College Acceptance</div>
            </div>
            <div className="p-6 rounded-lg bg-blue-800 shadow-lg">
              <div className="text-yellow-400 text-4xl font-bold mb-2">125+</div>
              <div className="text-lg font-medium">Award-Winning Faculty</div>
            </div>
            <div className="p-6 rounded-lg bg-blue-800 shadow-lg">
              <div className="text-yellow-400 text-4xl font-bold mb-2">50+</div>
              <div className="text-lg font-medium">Extracurricular Programs</div>
            </div>
          </div>
        </div>
      </section>
    );
  };