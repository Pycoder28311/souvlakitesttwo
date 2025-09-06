"use client";

import Head from 'next/head';
import Image from 'next/image';
import Navbar from './navigator';
import Footer from './footer';
import Link from "next/link";
import homepage from "../../public/homepage.jpg";

export default function Home() {

  const offers = [
    {
      id: 1,
      badge: "-20%",
      title: "Προσφορά Σαββάτου",
      description: "Κάθε Σάββατο απόγευμα, από 18:00 - 22:00, έκπτωση 20% σε όλα τα σουβλάκια.",
    },
    {
      id: 2,
      badge: "2+1",
      title: "Δώρο για Ομάδες",
      description: "Για παραγγελίες άνω των 10 σουβλακιών, το 11ο δώρο!",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Όνομα Σουβλατζίδικου | Αυθεντικά Ελληνικά Σουβλάκια</title>
        <meta name="description" content="Αυθεντικά ελληνικά σουβλάκια με παραδοσιακές γεύσεις" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Image */}
          <Image
            src={homepage}
            alt="Delicious Turkish kebabs"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Αυθεντικά Ελληνικά Σουβλάκια</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Γεύση που θυμίζει Ελλάδα. Φτιαγμένα με φρέσκα υλικά και παράδοση.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link  href="/menu" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Δες το Μενού
            </Link>
            <a
              href="https://www.e-food.gr/"
              target="_blank"
              rel="noopener noreferrer" className="bg-transparent hover:bg-white border-2 border-white text-white hover:text-gray-900 px-8 py-4 font-bold text-lg transition-all duration-300"
            >
              Παράγγειλε Online
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Το Μενού Μας</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white border border-gray-200 p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-600">Εικόνα Σουβλάκι</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Σουβλάκι Χοιρινό</h3>
              <p className="text-gray-600 mb-4">Χοιρινό με άρωμα θυμάρι και λεμόνι, σε παραδοσιακό πίτα</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">€2.80</span>
                <button className="bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 px-4 py-2 font-bold transition-colors">
                  Προσθήκη
                </button>
              </div>
            </div>
            
            {/* Menu Item 2 */}
            <div className="bg-white border border-gray-200 p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-600">Εικόνα Γύρο</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Γύρος Κοτόπουλο</h3>
              <p className="text-gray-600 mb-4">Γύρος κοτόπουλου με γιαούρτι και φρέσκια λαχανικά</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">€3.20</span>
                <button className="bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 px-4 py-2 font-bold transition-colors">
                  Προσθήκη
                </button>
              </div>
            </div>
            
            {/* Menu Item 3 */}
            <div className="bg-white border border-gray-200 p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-600">Εικόνα Πίτα</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Πίτα Γύρος Μικτή</h3>
              <p className="text-gray-600 mb-4">Μικτή πίτα με χοιρινό και κοτόπουλο, τζατζίκι και πατάτες</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">€4.50</span>
                <button className="bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 px-4 py-2 font-bold transition-colors">
                  Προσθήκη
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 font-bold transition-colors inline-block"
            >
              Πλήρες Μενού
            </Link>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section 
        id="offers" 
        className="py-16 bg-gray-100 bg-cover bg-center"
        style={{
          backgroundImage: "url('/souvlakiBG2.jpg')",
          backgroundAttachment: "fixed", // παραμένει σταθερή όταν σκρολάρεις
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Προσφορές</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white border border-gray-200 p-8 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-yellow-500 flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{offer.badge}</span>
                    </div>
                    <h3 className="text-xl font-bold">{offer.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <button className="text-yellow-600 hover:text-yellow-700 font-bold transition-colors">
                    Δες περισσότερα →
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Η Ιστορία Μας</h2>
              <p className="text-gray-600 mb-4">
                Από το 1995, φτιάχνουμε αυθεντικά ελληνικά σουβλάκια με αγάπη και προσοχή στη λεπτομέρεια. 
                Χρησιμοποιούμε φρέσκα υλικά και παραδοσιακές τεχνικές για να σας προσφέρουμε γνήσια γεύση.
              </p>
              <p className="text-gray-600 mb-6">
                Η συνταγή μας παραμένει αμετάβλητη για δεκαετίες, διατηρώντας ζωντανή την παράδοση του ελληνικού σουβλακιού.
              </p>
              <Link href="/about" className="bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 px-6 py-3 font-bold transition-colors">
                Διαβάστε Περισσότερα
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-600">Φωτογραφία 1</span>
              </div>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-600">Φωτογραφία 2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Επικοινωνία</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 text-center border border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Τοποθεσία</h3>
              <p className="text-gray-600">Οδός Παραδείσου 123, Αθήνα</p>
            </div>
            
            <div className="bg-white p-6 text-center border border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white">⏰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ωράριο</h3>
              <p className="text-gray-600">Δευ-Παρ: 12:00 - 24:00</p>
              <p className="text-gray-600">Σαβ-Κυρ: 12:00 - 02:00</p>
            </div>
            
            <div className="bg-white p-6 text-center border border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Τηλέφωνο</h3>
              <p className="text-gray-600">210 123 4567</p>
              <p className="text-gray-600">694 123 4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}