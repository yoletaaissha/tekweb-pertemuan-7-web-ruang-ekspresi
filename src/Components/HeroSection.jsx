export default function HeroSection() {
  return (
    <section id="home" className="pt-24"> 
      {/* Kode asli kamu — tidak diubah sama sekali */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-blue-600">Ruang Ekspresi</span> :
            <br />
            Wadah kreatif & Kompetitif Mahasiswa
          </h1>
        </div>

        <div className="flex justify-center">
          <img
            src="src/assets/HeroSection.png"
            className="w-64 md:w-80 lg:w-[22rem] rounded-xl object-cover shadow-md"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
}
