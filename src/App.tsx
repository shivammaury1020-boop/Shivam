import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Heart, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Quote
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Dumbbell className="text-white" size={24} />
          </div>
          <span className="text-2xl font-display font-extrabold tracking-tighter">
            FITNESS <span className="text-primary">HUB</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a href="#join" className="btn-primary py-2 px-6 text-sm">JOIN NOW</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-lighter border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#join" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full"
              >
                JOIN NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwep19mBRX3iW7WT7XU5znsKKh_SPZOE6qjU1-wZPtc8i00gZMDSS1GCH4qezl0Kk07u3xV80NGQqL8bbUwSwsUoZXW5Paaxi-jvbfcynnUTaUN6Lf-RAeBecynjmmBxDrM2JoSUDcL8atycu=w1200-h800-k-no" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-bold mb-6 border border-primary/30">
            <Star size={16} fill="currentColor" />
            <span>4.5 RATING (77+ REVIEWS)</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[0.9] mb-6 tracking-tighter">
            TRANSFORM YOUR <br />
            <span className="text-primary">BODY</span> AT FITNESS HUB
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            Best Gym in Khora Colony with Modern Equipment & Expert Trainers. Start your fitness journey today in a supportive, LGBTQ+ friendly environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#join" className="btn-primary text-lg group">
              JOIN NOW <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:09560700314" className="btn-secondary text-lg">
              <Phone size={20} /> CALL NOW
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

const About = () => {
  const reviews = [
    "Good service and good price",
    "Very good atmosphere, services, instruments, behaviour",
    "Very good experience trainer & good equipments"
  ];

  return (
    <section id="about" className="py-24 bg-dark-lighter">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwep19mBRX3iW7WT7XU5znsKKh_SPZOE6qjU1-wZPtc8i00gZMDSS1GCH4qezl0Kk07u3xV80NGQqL8bbUwSwsUoZXW5Paaxi-jvbfcynnUTaUN6Lf-RAeBecynjmmBxDrM2JoSUDcL8atycu=w1200-h800-k-no" 
                alt="Gym Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-primary p-3 rounded-full">
                  <Heart className="text-white" fill="white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">LGBTQ+</p>
                  <p className="text-sm text-gray-400">Friendly Environment</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 tracking-tight">
              WHY CHOOSE <span className="text-primary">FITNESS HUB?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our mission is to provide affordable fitness for everyone. We combine a positive atmosphere with expert guidance to help you reach your goals faster. Whether you're a beginner or a pro, we have the tools you need.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-2 rounded-lg h-fit">
                  <CheckCircle2 className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Modern Equipment</h4>
                  <p className="text-gray-500">Latest machines and free weights for all training styles.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 p-2 rounded-lg h-fit">
                  <CheckCircle2 className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Expert Trainers</h4>
                  <p className="text-gray-500">Supportive and experienced staff to guide your journey.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 italic text-gray-300">
              <Quote className="text-primary mb-4" size={32} />
              <p className="text-lg">"{reviews[1]}"</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-sm font-bold text-white">— Happy Member</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Weight Training', desc: 'Build muscle and strength with our extensive free weights and machines.', icon: Dumbbell },
    { title: 'Cardio Training', desc: 'Improve your stamina and heart health with modern cardio equipment.', icon: Heart },
    { title: 'Personal Training', desc: 'Get 1-on-1 guidance tailored to your specific fitness goals.', icon: Users },
    { title: 'Strength & Powerlifting', desc: 'Specialized area for heavy lifting and powerlifting enthusiasts.', icon: Dumbbell },
    { title: 'Fat Loss Programs', desc: 'Structured workout and diet plans to help you shed those extra pounds.', icon: CheckCircle2 },
    { title: 'Yoga & Flexibility', desc: 'Improve your range of motion and mental clarity.', icon: Heart },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 tracking-tight">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We offer a wide range of training programs designed to cater to all fitness levels and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-primary/5 transition-colors group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon size={32} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: 'Monthly', price: '₹999', features: ['Full Gym Access', 'Cardio Training', 'Locker Facility', 'Expert Guidance'], popular: false },
    { name: 'Quarterly', price: '₹2,499', features: ['Full Gym Access', 'Cardio Training', 'Locker Facility', 'Expert Guidance', 'Free Diet Plan'], popular: true },
    { name: 'Yearly', price: '₹7,999', features: ['Full Gym Access', 'Cardio Training', 'Locker Facility', 'Expert Guidance', 'Free Diet Plan', '2 Months Extra'], popular: false },
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
            LIMITED SEATS AVAILABLE
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 tracking-tight">
            AFFORDABLE <span className="text-primary">PLANS</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Low fees with best facilities. Choose a plan that fits your fitness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-3xl border ${plan.popular ? 'bg-primary/5 border-primary scale-105 z-10' : 'bg-dark border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-display font-extrabold">{plan.price}</span>
                <span className="text-gray-500">/plan</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#join" className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                GET STARTED
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep19mBRX3iW7WT7XU5znsKKh_SPZOE6qjU1-wZPtc8i00gZMDSS1GCH4qezl0Kk07u3xV80NGQqL8bbUwSwsUoZXW5Paaxi-jvbfcynnUTaUN6Lf-RAeBecynjmmBxDrM2JoSUDcL8atycu=w1200-h800-k-no",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-16 text-center tracking-tight">
          GYM <span className="text-primary">GALLERY</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Gym ${index}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const testimonials = [
    { name: "Rahul Sharma", text: "Very good atmosphere, services, instruments, behaviour. The trainers are really helpful.", rating: 5 },
    { name: "Amit Kumar", text: "Good service and good price. Best gym in Khora colony for serious lifters.", rating: 4 },
    { name: "Priya Singh", text: "Very good experience trainer & good equipments. Safe environment for women too.", rating: 5 },
    { name: "Deepak Verma", text: "Affordable fees with high quality machines. Highly recommended!", rating: 5 },
  ];

  return (
    <section className="py-24 bg-dark-lighter">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 tracking-tight">
              WHAT OUR <span className="text-primary">MEMBERS SAY</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We take pride in our community and the results our members achieve.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-primary">4.5</div>
              <div className="flex text-yellow-500 mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="font-bold">77+ REVIEWS</div>
              <div className="text-sm text-gray-500">Google Rating</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{t.text}"</p>
              </div>
              <div className="font-bold text-primary">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 tracking-tight">
              GET IN <span className="text-primary">TOUCH</span>
            </h2>
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl h-fit">
                  <MapPin className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Location</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Himalaya Enclave, Gali No. 4, near Khora Colony, Makanpur Colony, Sector 62A, Noida, UP 201010
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl h-fit">
                  <Phone className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Contact</h4>
                  <p className="text-gray-400">09560700314</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl h-fit">
                  <Clock className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Timings</h4>
                  <p className="text-gray-400">Open Daily: 5:00 AM – 11:30 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="tel:09560700314" className="btn-primary flex-1">
                <Phone size={20} /> CALL NOW
              </a>
              <a href="https://wa.me/919560700314" target="_blank" className="btn-secondary flex-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                <MessageCircle size={20} /> WHATSAPP
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden h-[450px] border border-white/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.269726265773!2d77.360155!3d28.621644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5639f77f55f%3A0x6d9f8f8f8f8f8f8f!2sFitness%20Hub!5e0!3m2!1sen!2sin!4v1712150000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const JoinForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Dumbbell className="absolute -top-10 -left-10 rotate-45" size={300} />
        <Dumbbell className="absolute -bottom-10 -right-10 -rotate-12" size={300} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-dark p-8 md:p-16 rounded-[40px] shadow-2xl border border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 tracking-tight">
              START YOUR <span className="text-primary">JOURNEY</span>
            </h2>
            <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Fitness Goal</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-primary outline-none transition-colors appearance-none">
                    <option className="bg-dark">Weight Loss</option>
                    <option className="bg-dark">Muscle Gain</option>
                    <option className="bg-dark">Strength Training</option>
                    <option className="bg-dark">General Fitness</option>
                  </select>
                </div>
                <button type="submit" className="md:col-span-2 btn-primary py-5 text-xl mt-4">
                  START YOUR FITNESS JOURNEY TODAY
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="bg-green-500/20 text-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Form Submitted!</h3>
                <p className="text-gray-400">Thank you for your interest. Our team will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Submit another response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Dumbbell className="text-white" size={24} />
              </div>
              <span className="text-2xl font-display font-extrabold tracking-tighter">
                FITNESS <span className="text-primary">HUB</span>
              </span>
            </a>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Premium fitness destination in Khora Colony. We provide the best equipment, expert trainers, and a supportive community to help you achieve your dream physique.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Sector 62A, Noida, UP 201010</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>09560700314</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary shrink-0" />
                <span>5:00 AM – 11:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Fitness Hub. All rights reserved. Designed for high conversion.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919560700314" 
        target="_blank"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={28} />
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:09560700314" 
        className="bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-colors"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-dark text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <Reviews />
        <Contact />
        <JoinForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
