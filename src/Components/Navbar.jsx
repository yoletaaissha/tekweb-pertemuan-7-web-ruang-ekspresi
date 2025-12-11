export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 border-b bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <img src="src/assets/Logonav.png" className="w-8" alt="Logo" />
        <img src="src/assets/nav.png" className="h-7" alt="Ruang Ekspresi" />
      </div>

      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#program" className="hover:text-blue-600">Program</a>
        <a href="#project" className="hover:text-blue-600">Project</a>
        <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}
