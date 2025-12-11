import { useState } from "react";

export default function ProjectShowcase() {

  const [index, setIndex] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section id="project" className="max-w-6xl mx-auto mt-20">
      <h2 className="text-center text-2xl font-semibold">
        Showcase <span className="text-blue-600">Student Projects</span>
      </h2>
      <p className="text-center text-gray-500 text-sm mt-1">
        Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
      </p>

      <div className="relative mt-10 bg-white rounded-2xl p-10 shadow overflow-hidden">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10"
        >
          <span className="text-xl">←</span>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10"
        >
          <span className="text-xl">→</span>
        </button>

        {/* SLIDES */}
        <div
          className="flex transition-all duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >

        
          <div className="min-w-full" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-medium">
                  Web Development
                </span>

                <h3 className="font-bold text-2xl mt-4">
                  Creative Portfolio Platform
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-sm">
                  Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas
                </p>

                <div className="mt-5">
                  <p className="font-semibold text-sm mb-2">Tim Pembuat :</p>

                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div className="flex items-center gap-3" key={i}>
                        <img
                          src="src/assets/TimPembuat.png"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm">Budi Santoso</p>
                          <p className="text-gray-500 text-xs">Frontend Developer</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow">
                  <img src="src/assets/Vector.png" className="w-4" />
                  Live Demo
                </button>
              </div>

              <div>
                <img
                  src="src/assets/ShowCase.png"
                  className="rounded-2xl border-2"
                  style={{ borderColor: "#E5D9FF" }}
                />
              </div>
            </div>
          </div>

          
          <div className="min-w-full" style={{ backgroundColor: "#EAF4FF" }}>
            <div className="p-10 rounded-2xl grid md:grid-cols-2 gap-10 items-center">

              <div>
                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-medium">
                  Mobile Development
                </span>

                <h3 className="font-bold text-2xl mt-4">
                  Productivity Task Manager App
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-sm">
                  Aplikasi mobile untuk mengelola tugas harian dengan fitur reminder & analisis produktivitas.
                </p>

                <div className="mt-5">
                  <p className="font-semibold text-sm mb-2">Tim Pembuat :</p>

                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div className="flex items-center gap-3" key={i}>
                        <img
                          src="src/assets/TimPembuat.png"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm">Dewi Ramadhani</p>
                          <p className="text-gray-500 text-xs">Mobile Developer</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow">
                  <img src="src/assets/Vector.png" className="w-4" />
                  Live Demo
                </button>
              </div>

              <div>
                <img
                  src="src/assets/ShowCase.png"
                  className="rounded-2xl border-2"
                  style={{ borderColor: "#CFE8FF" }}
                />
              </div>
            </div>
          </div>

        
          <div className="min-w-full" style={{ backgroundColor: "#F5EEFF" }}>
            <div className="p-10 rounded-2xl grid md:grid-cols-2 gap-10 items-center">

              <div>
                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-medium">
                  UI/UX Design
                </span>

                <h3 className="font-bold text-2xl mt-4">
                  Modern Learning Dashboard
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-sm">
                  Dashboard interaktif untuk memonitor perkembangan belajar mahasiswa dengan desain modern.
                </p>

                <div className="mt-5">
                  <p className="font-semibold text-sm mb-2">Tim Pembuat :</p>

                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div className="flex items-center gap-3" key={i}>
                        <img
                          src="src/assets/TimPembuat.png"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm">Andi Pratama</p>
                          <p className="text-gray-500 text-xs">UI/UX Designer</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow">
                  <img src="src/assets/Vector.png" className="w-4" />
                  Live Demo
                </button>
              </div>

              <div>
                <img
                  src="src/assets/ShowCase.png"
                  className="rounded-2xl border-2"
                  style={{ borderColor: "#E5D9FF" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
