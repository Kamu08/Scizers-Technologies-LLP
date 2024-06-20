import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="max-w-6xl mx-auto flex justify-between items-center py-8 bg-transparent">
          <Link href="/" className="relative">
            <Image src="/logo.png" alt="Damac" fill />
          </Link>
          <button className="uppercase">Enquire Now</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
