"use client";

import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from '../navigator';
import Footer from '../footer';

export default function Menu() {
  type Category = "souvlakia" | "piates" | "merides" | "salates" | "anapsyktika" | "pies" | "drinks";

  const categories: { key: Category; label: string }[] = [
    { key: "souvlakia", label: "Souvlakia" },
    { key: "piates", label: "Piates" },
    { key: "merides", label: "Merides" },
    { key: "salates", label: "Salates" },
    { key: "anapsyktika", label: "Anapsyktika" },
    { key: "pies", label: "Pies" },
    { key: "drinks", label: "Drinks" },
  ];

  const [activeCategory, setActiveCategory] = useState<Category>("souvlakia");

  const [isScrolled, setIsScrolled] = useState(false);

  const menuData = {
    souvlakia: [
      { id: 1, name: 'Σουβλάκι Χοιρινό', description: 'Χοιρινό με άρωμα θυμάρι και λεμόνι', price: '€2.80' },
      { id: 2, name: 'Σουβλάκι Κοτόπουλο', description: 'Φιλέτο κοτόπουλο με μπαχαρικά', price: '€2.70' },
      { id: 3, name: 'Σουβλάκι Μοσχάρι', description: 'Μοσχάρι σε μαρινάδα σπέσιαλ', price: '€3.20' },
      { id: 4, name: 'Σουβλάκι Κρεατικό', description: 'Μείγμα χοιρινού και μοσχαριού', price: '€3.00' },
    ],
    piates: [
      { id: 1, name: 'Πίτα Γύρος Χοιρινό', description: 'Γύρος χοιρινό με πατάτες και σως', price: '€4.20' },
      { id: 2, name: 'Πίτα Γύρος Κοτόπουλο', description: 'Γύρος κοτόπουλο με γιαούρτι', price: '€4.00' },
      { id: 3, name: 'Πίτα Μικτή', description: 'Μείγμα χοιρινού και κοτόπουλου', price: '€4.50' },
      { id: 4, name: 'Πίτα Κρεατικό', description: 'Κρεατικό με ντοματοσαλάτα', price: '€4.30' },
    ],
    merides: [
      { id: 1, name: 'Πατάτες Τηγανιτές', description: 'Φρεσκοτηγανισμένες πατάτες', price: '€2.50' },
      { id: 2, name: 'Ρύζι', description: 'Αρωματικό ρύζι με λαδί', price: '€2.00' },
      { id: 3, name: 'Γαύρος', description: 'Τραγανός γαύρος με σκόρδο', price: '€3.50' },
      { id: 4, name: 'Τζατζίκι', description: 'Γιαούρτι με αγγούρι και σκόρδο', price: '€1.80' },
    ],
    salates: [
      { id: 1, name: 'Χωριάτικη Σαλάτα', description: 'Ντομάτα, αγγούρι, κρεμμύδι, ελιές, φέτα', price: '€5.00' },
      { id: 2, name: 'Μαρουλοσαλάτα', description: 'Φρέσκο μαρούλι με λάδι και ξύδι', price: '€3.00' },
      { id: 3, name: 'Ντοματοσαλάτα', description: 'Φρέσκια ντομάτα με κρεμμύδι και φέτα', price: '€4.00' },
    ],
    anapsyktika: [
      { id: 1, name: 'Τζατζίκι', description: 'Γιαούρτι με αγγούρι και σκόρδο', price: '€3.00' },
      { id: 2, name: 'Μελιτζανοσαλάτα', description: 'Πεπόνι μελιτζάνας', price: '€3.50' },
      { id: 3, name: 'Ταραμοσαλάτα', description: 'Ταραμάς με πατάτα', price: '€4.00' },
      { id: 4, name: 'Σκορδαλιά', description: 'Πατάτα με σκόρδο και ελαιόλαδο', price: '€3.20' },
    ],
    pies: [
      { id: 1, name: 'Τυρόπιτα', description: 'Φύλλο με φέτα και αυγό', price: '€2.50' },
      { id: 2, name: 'Σπανακόπιτα', description: 'Φύλλο με σπανάκι και φέτα', price: '€2.70' },
      { id: 3, name: 'Κρεατόπιτα', description: 'Φύλλο με κιμά και μπεσαμέλ', price: '€3.20' },
      { id: 4, name: 'Μπουγάτσα', description: 'Γλυκιά μπουγάτσα με κρέμα', price: '€2.80' },
    ],
    drinks: [
      { id: 1, name: 'Αναψυκτικό', description: 'Pepsi, Coca-Cola, Fanta, Sprite', price: '€1.80' },
      { id: 2, name: 'Νερό', description: 'Μπουκάλι 500ml', price: '€1.00' },
      { id: 3, name: 'Αλκοολούχα', description: 'Μπύρα, κρασί, ούζο', price: '€3.00-€5.00' },
      { id: 4, name: 'Χυμός', description: 'Φυσικός χυμός πορτοκάλι', price: '€2.50' },
    ]
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Μενού | Σουβλατζίδικο</title>
        <meta name="description" content="Μενού αυθεντικών ελληνικών σουβλακιών" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navbar scrolled={true}/>

      {/* Menu Categories */}
      <section
        className={`sticky top-[55px] z-30 py-4 border-b transition-all duration-300 ${
            isScrolled ? "bg-gray-50 shadow-md" : "bg-white"
        }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
             {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-3 font-bold transition-all ${
                  activeCategory === cat.key
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuData[activeCategory as keyof typeof menuData].map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{item.price}</span>
                </div>
                <button className="bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 px-4 py-2 font-bold transition-colors w-full">
                  Προσθήκη στην Παραγγελία
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section id="special-offers" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Ειδικές Προσφορές</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-8 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-yellow-500 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">-20%</span>
                </div>
                <h3 className="text-xl font-bold">Προσφορά Σαββάτου</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Κάθε Σάββατο απόγευμα, από 18:00 - 22:00, έκπτωση 20% σε όλα τα σουβλάκια.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-yellow-500 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2+1</span>
                </div>
                <h3 className="text-xl font-bold">Δώρο για Ομάδες</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Για παραγγελίες άνω των 10 σουβλακιών, το 11ο δώρο!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}