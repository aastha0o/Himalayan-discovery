import React from 'react';
import { motion } from 'motion/react';
import { 
  Mountain, 
  ArrowRight, 
  Footprints, 
  Landmark, 
  Trees, 
  Globe, 
  Share2, 
  Mail,
  Menu,
  X
} from 'lucide-react';

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbQ0m4LckiLlK4OWSN9680l1NAjoby2iJTPjJt5E2JJykze9crIw_n4N52uxWb3XJEY5aCaiiL-DXeXQzP8z6MYBZrX1DrymFC_cljXt2S2OSXscUBpWMZtDSuGu62Q6Q15a4APhsNnFdId3S7YgYbSnBQ5CGKQ86RZJnAXw5R-sLAznOXx5_7HrgjMBrfJgsQgYnCjzRdkWCwUXl5PfFYM--omaP9gVcqXc536mpShaGtmngQ3Zl5Ra093f3PwCb7V5EE69uDeCyp",
  everest: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFKUwh6y8xRdXGwezDiV4t-LaQDS-bWOYbPSsQwg_zNgdyiC6KFzIwI8CRF86tC1IGzkhY_DGa0Z4dQcPoZLEC9jALKHjaBr7-u5ziWcALcEz_uVcNrlwx4CFLZYj-awShg8YKaxDWyCR40Mjkl4Yc_8uH29bORgLCjcr2a-PJEdPoq0DiBt-Yq1E3rm3jjWshJxnl5S0KoaVizFTpYuKEkmjzDIr34KLiLIi3LVxrdLBbv8m3aLcUQzDzK7lXEBu_C4lciFmtjDpD",
  kathmandu: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRB78Eol30ohj8MXwV5HObd_OQXZ_VjadH5-8Q4xWhDU_oG6hoHc1Cw4rJPwiQUMQ0jDVd6qY5g-Lf1O6w8KdL4euceX9898OFeJh0KSVDwgEgJEnb4UbJj3hQWeG8JW0w1R_0QMNDOkxzItU4TGxz8Fx-zknw8ccPF8LwDv0uRKArdwuTyFaND38D7fR2roFVrltyEIhgfJzvMa7n7N-YQDMweXSIhfM2ifJpn4YmE2CPS2vYU08PV2snlTPYEQznQDOahLSH9BPn",
  pokhara: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJh3jEuDDYyNIGvtTxxcGJjWYCuzTfN78vQxZ8sP9xBrwwFFhKITIzjCbpMBjhKJCn83C2WPTAVE9J8mLuWGkN0iG9fxBSP27y0xe9UBz9TK50dhLj7VfySExOUsjYkJPu2hWllWgcsJEwYMh3i2CTNYP8rIa8OQ48R9zL9BdwUBjEy6jlJwcJGP_puJjdEzjKvbNpjzEIK2WkumKjnOMoeERtHAYkLQofScdaj_gLJjtFJjzkSF97WK3TRDLCPRiAsEGyml8gp2bT",
  footer: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXdCZfAnIO1kOxYg1VZTi_lRX1oejCA3OGmNHONKM_xqN2gLGhml4ulz8RjpHd8ayMDN8w1I-B8BCPEOgtAPWMX112AzlSFvvp9uaLwvJHS1qnKBX1R9aOZyMVnB_p8fgBSJtvQgMZAzWK0Og1_ybkAPCkGa3h4ER-2kMSQF2Lvn9746fVsQX8doIxogbGBvmHvySsbiWPPd98sxVH0ZCFXIaEBgGrD_ZX32O6qtDd5vYKWI0-rp_LoyHZtUmV1yTgvtpTnCvVOHSA"
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Mountain className="text-mountain-blue w-6 h-6" />
          <span className="font-serif text-xl font-bold tracking-widest text-mountain-blue uppercase">
            Himalayan Discovery
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="font-medium text-mountain-blue border-b-2 border-sunrise-orange pb-1 transition-all">Home</a>
          <a href="#" className="font-medium text-gray-500 hover:text-sunrise-orange transition-all">Destinations</a>
          <a href="#" className="font-medium text-gray-500 hover:text-sunrise-orange transition-all">Itineraries</a>
          <a href="#" className="font-medium text-gray-500 hover:text-sunrise-orange transition-all">Culture</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-sunrise-orange text-white px-6 py-2.5 rounded font-semibold text-sm hover:brightness-110 active:scale-95 transition-all">
            Start Planning
          </button>
          <button className="md:hidden text-mountain-blue" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 px-6 py-8 flex flex-col gap-6"
        >
          <a href="#" className="font-semibold text-mountain-blue text-lg">Home</a>
          <a href="#" className="font-semibold text-gray-500 text-lg">Destinations</a>
          <a href="#" className="font-semibold text-gray-500 text-lg">Itineraries</a>
          <a href="#" className="font-semibold text-gray-500 text-lg">Culture</a>
          <button className="bg-sunrise-orange text-white w-full py-3 rounded font-bold">
            Start Planning
          </button>
        </motion.div>
      )}
    </header>
  );
};

const DestinationCard = ({ title, desc, img, tag, size = "small" }: { title: string, desc: string, img: string, tag?: string, size?: "large" | "small" }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`relative group overflow-hidden rounded-2xl bg-gray-100 shadow-md ${size === "large" ? "md:col-span-8 h-[400px] md:h-full" : "md:col-span-4 h-[350px]"}`}
  >
    <img 
      src={img} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bento-overlay" />
    <div className="absolute bottom-0 p-6 md:p-8">
      {tag && (
        <span className="bg-sunrise-orange text-white px-3 py-1 text-xs rounded-full font-bold mb-3 inline-block uppercase tracking-wider">
          {tag}
        </span>
      )}
      <h3 className={`font-serif text-white mb-2 ${size === "large" ? "text-3xl md:text-4xl" : "text-2xl"}`}>
        {title}
      </h3>
      <p className="text-white/80 max-w-sm line-clamp-2 md:line-clamp-none text-sm md:text-base">
        {desc}
      </p>
    </div>
  </motion.div>
);

const ExperienceCard = ({ icon: Icon, title, desc, linkText, accentColor }: { icon: any, title: string, desc: string, linkText: string, accentColor: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group"
  >
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${accentColor} group-hover:bg-opacity-100 group-hover:text-white`}>
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="font-serif text-2xl mb-4">{title}</h3>
    <p className="text-gray-600 mb-6 leading-relaxed">{desc}</p>
    <a href="#" className="inline-flex items-center gap-2 text-mountain-blue font-bold group/link hover:gap-3 transition-all">
      {linkText} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
    </a>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <img 
            src={IMAGES.hero} 
            alt="Himalayan Panorama" 
            className="absolute inset-0 w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-white text-4xl md:text-7xl mb-6 drop-shadow-2xl leading-tight"
            >
              Elevated Journeys to the Roof of the World
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-lg"
            >
              Discover authentic Nepalese culture and awe-inspiring landscapes with curated travel experiences designed for the discerning explorer.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-sunrise-orange text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:brightness-110 active:scale-95 transition-all">
                Plan Your Journey
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 active:scale-95 transition-all">
                Explore Destinations
              </button>
            </motion.div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-sunrise-orange font-bold uppercase tracking-[0.2em] mb-4 block text-sm">
              Our Collection
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-mountain-blue">Legendary Destinations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[700px]">
            <DestinationCard 
              size="large"
              tag="High Adventure"
              title="Everest Base Camp"
              desc="The ultimate pilgrimage for trekkers, offering unparalleled views of the world's highest peaks."
              img={IMAGES.everest}
            />
            <div className="md:col-span-4 grid grid-cols-1 gap-6">
              <DestinationCard 
                title="Kathmandu"
                desc="Where ancient tradition meets vibrant modern life."
                img={IMAGES.kathmandu}
              />
              <DestinationCard 
                title="Pokhara"
                desc="A serene gateway to the Annapurna mountain range."
                img={IMAGES.pokhara}
              />
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl text-mountain-blue mb-4">Discover Your Passion</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                From the heights of the peaks to the depths of the jungle, we curate experiences that connect you with the soul of Nepal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ExperienceCard 
                icon={Footprints}
                title="World-Class Trekking"
                desc="Expertly guided treks through the Annapurna, Langtang, and Everest regions, tailored to your fitness and experience level."
                linkText="View Itineraries"
                accentColor="bg-blue-50 text-mountain-blue"
              />
              <ExperienceCard 
                icon={Landmark}
                title="Cultural Heritage"
                desc="Immerse yourself in the sacred rituals, ancient architecture, and diverse traditions of the Kathmandu Valley's ethnic groups."
                linkText="Explore Traditions"
                accentColor="bg-orange-50 text-sunrise-orange"
              />
              <ExperienceCard 
                icon={Trees}
                title="Wildlife & Safari"
                desc="Journey to the subtropical jungles of Chitwan or Bardia to spot rare rhinos, Bengal tigers, and exotic bird species."
                linkText="Wild Encounters"
                accentColor="bg-green-50 text-emerald-700"
              />
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-mountain-blue">
            <img 
              src={IMAGES.footer} 
              alt="" 
              className="w-full h-full object-cover opacity-20" 
              aria-hidden="true"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl mb-6"
            >
              The Mountains are Calling
            </motion.h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              Sign up for our curated seasonal guides and exclusive early access to boutique trekking experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-sunrise-orange transition-all"
              />
              <button className="bg-sunrise-orange text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap shadow-lg hover:brightness-110 active:scale-95 transition-all">
                Stay Inspired
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Mountain className="text-mountain-blue w-6 h-6" />
                <span className="font-serif text-xl font-bold tracking-widest text-mountain-blue uppercase">
                  Himalayan Discovery
                </span>
              </div>
              <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
                Dedicated to sustainable, high-end travel across the Nepalese Himalayas. Join us in preserving the heritage while exploring the highlands.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-sunrise-orange hover:bg-orange-50 transition-all">
                  <Globe size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-sunrise-orange hover:bg-orange-50 transition-all">
                  <Share2 size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-sunrise-orange hover:bg-orange-50 transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-6 text-mountain-blue">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-sunrise-orange transition-all">Destinations</a></li>
                <li><a href="#" className="text-gray-500 hover:text-sunrise-orange transition-all">Itineraries</a></li>
                <li><a href="#" className="text-gray-500 hover:text-sunrise-orange transition-all">Culture</a></li>
                <li><a href="#" className="text-gray-500 hover:text-sunrise-orange transition-all">Safety</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6 text-mountain-blue">Contact</h4>
              <ul className="space-y-4">
                <li className="text-gray-500">Kathmandu, Nepal</li>
                <li className="text-gray-500">+977 1 XXXXXXX</li>
                <li className="text-gray-500">expeditions@himalayan.com</li>
                <li><a href="#" className="text-sunrise-orange font-bold">Start Planning</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Himalayan Discovery. Elevated Travel Planning for the Discerning Explorer.
            </p>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-mountain-blue transition-all">Privacy Policy</a>
              <a href="#" className="hover:text-mountain-blue transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
