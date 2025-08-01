export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow fixed w-full z-10">
      <div className="text-2xl font-bold text-orange-500">SkillOrbitx</div>
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="#about">About</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#impact">Impact</a></li>
      </ul>
    </nav>
  );
}
