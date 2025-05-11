import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

// Testimonials Section
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      quote:
        "Excellence Academy provided my child with not just academic knowledge, but also valuable life skills. The teachers are dedicated and truly care about each student's success.",
      author: "Jane Cooper",
      role: "Parent of 10th Grader",
      image: "/api/placeholder/100/100",
    },
    {
      id: 2,
      quote:
        "The diverse curriculum and supportive environment at Excellence Academy helped me discover my passion for science and prepared me for university in ways I never expected.",
      author: "Michael Robinson",
      role: "Alumni, Class of 2023",
      image: "/api/placeholder/100/100",
    },
    {
      id: 3,
      quote:
        "As both a parent and a community member, I've seen firsthand how the school's values positively impact not just students but the entire community.",
      author: "Robert Johnson",
      role: "Parent & Community Leader",
      image: "/api/placeholder/100/100",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Community Says</h2>
          <p className="text-blue-100 mt-2">
            Hear from our parents, students, and alumni
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-48">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonial.author}
                      </h4>
                      <p className="text-yellow-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="italic text-blue-100">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? "bg-yellow-400"
                    : "bg-blue-700 hover:bg-blue-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Read More Testimonials
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
