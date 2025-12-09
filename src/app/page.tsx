import { Flame, MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import SombreroGame from "@/components/SombreroGame";

// Menu data
const menuKilos = [
  { name: "Kilo de Asada", price: 225, serves: "3-4 personas" },
  { name: "Kilo de Sirloin", price: 290, serves: "3-4 personas" },
  { name: "Kilo Mixto (Sirloin y Asada)", price: 275, serves: "3-4 personas" },
  { name: "Kilo de Picaña", price: 340, serves: "3-4 personas" },
];

const menuMedioKilo = [
  { name: "1/2 Kg de Asada", price: 130, serves: "1-2 personas" },
  { name: "1/2 Kg de Sirloin", price: 170, serves: "1-2 personas" },
  { name: "1/2 Kg de Picaña", price: 195, serves: "1-2 personas" },
];

const menuCuartoKilo = [
  { name: "1/4 Kg de Asada", price: 70, serves: "1 persona" },
  { name: "1/4 Kg de Sirloin", price: 110, serves: "1 persona" },
  { name: "1/4 Kg de Picaña", price: 130, serves: "1 persona" },
];

const menuTacos = [
  { name: "Taco de Asada", price: 30 },
  { name: "Taco de Sirloin", price: 40 },
  { name: "Taco de Picaña", price: 45 },
  { name: "Quesadilla Sencilla", price: 40 },
  { name: "Quesadilla con Asada", price: 55 },
  { name: "Quesadilla con Sirloin o Picaña", price: 65 },
];

const menuExtras = [
  { name: "Tortilla a mano (pieza)", price: 2 },
  { name: "Docena de tortillas a mano", price: 20 },
  { name: "1/4 Lt de Frijoles Charros", price: 20 },
  { name: "1/2 Lt de Frijoles Charros", price: 30 },
  { name: "Guacamole", price: 35 },
  { name: "Salsa extra (bolsita)", price: 10 },
  { name: "Salchicha (pieza)", price: 20 },
  { name: "Chorizo (100gr)", price: 20 },
  { name: "Cebolla (pieza)", price: 10 },
];

const locations = [
  {
    name: "Sucursal Colosio",
    address: "Avenida Colosio esquina Circuito Interior",
    mapUrl: "https://maps.google.com/?q=Avenida+Colosio+Tepatitlan+Jalisco",
  },
  {
    name: "Sucursal Ricardo Alcalá",
    address: "Ricardo Alcalá #394 esquina Mariano Azuela",
    mapUrl: "https://maps.google.com/?q=Ricardo+Alcala+394+Tepatitlan+Jalisco",
  },
];

function GrillIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="28" width="48" height="8" rx="2" fill="currentColor" />
      <rect x="12" y="36" width="4" height="20" fill="currentColor" />
      <rect x="48" y="36" width="4" height="20" fill="currentColor" />
      <rect x="14" y="32" width="2" height="12" fill="#F59E0B" />
      <rect x="22" y="32" width="2" height="12" fill="#F59E0B" />
      <rect x="30" y="32" width="2" height="12" fill="#F59E0B" />
      <rect x="38" y="32" width="2" height="12" fill="#F59E0B" />
      <rect x="46" y="32" width="2" height="12" fill="#F59E0B" />
      <path
        d="M20 24C20 20 22 16 24 14C22 18 24 22 24 24"
        stroke="#F59E0B"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M32 20C32 16 34 12 36 10C34 14 36 18 36 20"
        stroke="#EF4444"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M44 24C44 20 46 16 48 14C46 18 48 22 48 24"
        stroke="#F59E0B"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function MenuSection({
  title,
  items,
  showServes = false,
}: {
  title: string;
  items: { name: string; price: number; serves?: string }[];
  showServes?: boolean;
}) {
  return (
    <div className="menu-card bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-amber-200">
      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-400 pb-2">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-start gap-2">
            <div className="flex-1">
              <span className="text-stone-800 font-medium">{item.name}</span>
              {showServes && item.serves && (
                <span className="block text-sm text-stone-500">
                  {item.serves}
                </span>
              )}
            </div>
            <span className="text-amber-700 font-bold whitespace-nowrap">
              ${item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen wood-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-amber-600">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="bg-red-700 rounded-full p-2">
              <GrillIcon className="w-6 h-6 text-amber-400" />
            </div>
            <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-amber-400">
              AsadasXKilo
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#menu"
              className="text-stone-300 hover:text-amber-400 transition-colors"
            >
              Menú
            </a>
            <a
              href="#ubicaciones"
              className="text-stone-300 hover:text-amber-400 transition-colors"
            >
              Ubicaciones
            </a>
            <a
              href="#contacto"
              className="text-stone-300 hover:text-amber-400 transition-colors"
            >
              Contacto
            </a>
            <a
              href="tel:3781397280"
              className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Llamar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-900 via-stone-800 to-amber-900 overflow-hidden">
        {/* Decorative fire elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-600/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-2 h-8 bg-gradient-to-t from-amber-500 to-transparent rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-2 h-6 bg-gradient-to-t from-red-500 to-transparent rounded-full opacity-50 animate-pulse animation-delay-150" />
          <div className="absolute top-1/2 left-1/3 w-2 h-10 bg-gradient-to-t from-amber-400 to-transparent rounded-full opacity-40 animate-pulse animation-delay-300" />
        </div>

        <div className="relative z-10 text-center px-4 pt-20">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="bg-red-700 rounded-full p-6 shadow-2xl shadow-red-900/50">
              <GrillIcon className="w-20 h-20 text-amber-400" />
            </div>
          </div>

          {/* Brand name */}
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black mb-2">
            <span className="text-amber-400 fire-glow">ASADAS</span>
            <span className="text-red-500 mx-2">X</span>
            <span className="text-amber-400 fire-glow">KILO</span>
          </h1>

          {/* Tagline */}
          <div className="bg-amber-500 text-stone-900 inline-block px-6 py-2 rounded-lg font-bold text-xl md:text-2xl mb-6 shadow-lg">
            AXK TEPA
          </div>

          <p className="text-amber-100 text-xl md:text-2xl mb-4 font-[family-name:var(--font-playfair)]">
            Carne Asada a la Leña
          </p>

          <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
            La mejor carne asada de Tepatitlán de Morelos, Jalisco. Preparada al
            momento con leña y servida con todo lo necesario.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#menu"
              className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              <Flame className="w-5 h-5" />
              Ver Menú
            </a>
            <a
              href="tel:3781397280"
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all"
            >
              <Phone className="w-5 h-5" />
              378 139 7280
            </a>
          </div>

          {/* Promo banner */}
          <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-800 border-2 border-amber-400 rounded-xl p-4 max-w-lg mx-auto shadow-xl">
            <p className="text-amber-400 font-bold text-lg">
              ¡PROMOCIÓN ESPECIAL!
            </p>
            <p className="text-white text-xl font-[family-name:var(--font-playfair)]">
              Compra <span className="text-amber-400 font-bold">6 KG</span> de
              Asada y obtén{" "}
              <span className="text-amber-400 font-bold">1/2 KG GRATIS</span>
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-amber-400 mx-auto" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-amber-900 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-stone-900 mb-6">
            Tradición y Sabor
          </h2>
          <div className="divider-rustic w-32 mx-auto mb-8" />
          <p className="text-stone-700 text-lg leading-relaxed mb-6">
            En <strong className="text-red-800">AsadasXKilo</strong> preparamos
            la carne asada como se debe: <em>a la leña</em>. Cada paquete
            incluye carne de la mejor calidad, salchicha, chorizo, cebolla,
            chile toreado y nuestras deliciosas salsas roja y verde.
          </p>
          <p className="text-stone-600 text-md italic">
            La carne se pesa en crudo (1kg = 630gr ya asado)
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: "🔥", text: "A la Leña" },
              { icon: "🥩", text: "Carne Fresca" },
              { icon: "🌶️", text: "Salsas Caseras" },
              { icon: "🚗", text: "Servicio a Domicilio" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 shadow-md border border-amber-200"
              >
                <span className="text-4xl mb-2 block">{item.icon}</span>
                <span className="text-stone-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-amber-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-stone-900 mb-4">
              Nuestro Menú
            </h2>
            <div className="divider-rustic w-32 mx-auto mb-4" />
            <p className="text-stone-600">
              Todos los paquetes incluyen carne, salchicha, chorizo, cebolla,
              chile toreado y salsas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MenuSection
              title="Kilos (3-4 Personas)"
              items={menuKilos}
              showServes
            />
            <MenuSection
              title="1/2 Kilo (1-2 Personas)"
              items={menuMedioKilo}
              showServes
            />
            <MenuSection
              title="1/4 Kilo (1 Persona)"
              items={menuCuartoKilo}
              showServes
            />
            <MenuSection title="Tacos y Quesadillas" items={menuTacos} />
            <MenuSection title="Extras" items={menuExtras} />

            {/* Special card */}
            <div className="menu-card bg-gradient-to-br from-red-800 to-red-900 rounded-lg p-6 shadow-lg text-white flex flex-col justify-center">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-amber-400 mb-4">
                ¡Promoción!
              </h3>
              <p className="text-xl mb-4">
                Compra{" "}
                <span className="text-amber-400 font-bold text-2xl">6 KG</span>{" "}
                de Asada
              </p>
              <p className="text-lg">
                y obtén{" "}
                <span className="text-amber-400 font-bold text-xl">
                  1/2 KG GRATIS
                </span>
              </p>
              <div className="mt-6">
                <a
                  href="tel:3781397280"
                  className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 px-6 py-3 rounded-full font-bold transition-colors"
                >
                  ¡Ordenar Ahora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section
        id="ubicaciones"
        className="py-16 bg-gradient-to-b from-stone-800 to-stone-900 scroll-mt-16"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-amber-400 mb-4">
              Nuestras Sucursales
            </h2>
            <p className="text-stone-400">
              Dos ubicaciones en Tepatitlán para servirte mejor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="bg-stone-800/50 backdrop-blur-sm border border-amber-600/30 rounded-xl p-6 hover:border-amber-500 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-red-700 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-amber-400 mb-2">
                      {loc.name}
                    </h3>
                    <p className="text-stone-300 mb-4">{loc.address}</p>
                    <p className="text-stone-400 text-sm">
                      Tepatitlán de Morelos, Jalisco
                    </p>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-amber-400 hover:text-amber-300 font-medium text-sm"
                    >
                      Ver en Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-amber-50 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-stone-900 mb-4">
              Contáctanos
            </h2>
            <div className="divider-rustic w-32 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <a
              href="tel:3781397280"
              className="bg-white rounded-xl p-6 shadow-lg border border-amber-200 text-center hover:shadow-xl transition-shadow group"
            >
              <div className="bg-red-700 group-hover:bg-red-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 transition-colors">
                <Phone className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-bold text-stone-900 mb-2">Teléfono</h3>
              <p className="text-red-700 font-bold text-xl">378 139 7280</p>
              <p className="text-stone-500 text-sm mt-2">
                Pedidos y servicio a domicilio
              </p>
            </a>

            {/* Hours */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200 text-center">
              <div className="bg-amber-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-stone-900 mb-2">Horario</h3>
              <p className="text-stone-700 font-medium">11:30 am - 5:30 pm</p>
              <p className="text-red-700 text-sm mt-2 font-medium">
                Descansamos los Miércoles
              </p>
            </div>

            {/* Social */}
            <a
              href="https://instagram.com/asadasxkilo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg border border-amber-200 text-center hover:shadow-xl transition-shadow group"
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 transition-colors">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-900 mb-2">Instagram</h3>
              <p className="text-purple-600 font-medium">@asadasxkilo</p>
              <p className="text-stone-500 text-sm mt-2">Síguenos</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-12 border-t border-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-red-700 rounded-full p-3">
              <GrillIcon className="w-10 h-10 text-amber-400" />
            </div>
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-amber-400 mb-2">
            AsadasXKilo
          </h3>
          <p className="text-stone-400 mb-6">
            Carne Asada a la Leña • Tepatitlán de Morelos, Jalisco
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="tel:3781397280"
              className="text-stone-400 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/asadasxkilo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          <p className="text-stone-600 text-sm">
            © {new Date().getFullYear()} AsadasXKilo. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>

      {/* Mobile floating CTA */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <a
          href="tel:3781397280"
          className="bg-red-700 hover:bg-red-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-colors"
          aria-label="Llamar"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Hidden Easter Egg: Catch the Sombrero Game */}
      <SombreroGame />
    </div>
  );
}
