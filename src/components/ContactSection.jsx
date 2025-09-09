import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = ({ handleCTAClick }) => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      info: "+62 21 5555 0123",
      description: "Senin - Jumat, 08:00 - 17:00 WIB"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "info@aigra.co.id",
      description: "Respon dalam 24 jam"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Kantor Pusat",
      info: "Jakarta Selatan",
      description: "Jl. Sudirman No. 123, Jakarta 12190"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Siap Memulai
            <span className="block gradient-text">Transformasi?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi tim ahli Aigra untuk konsultasi gratis dan temukan solusi terbaik untuk kebutuhan pengeringan pasca panen Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Konsultasi Gratis dengan Ahli
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-green-600">
                      {contact.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{contact.title}</h4>
                    <p className="text-green-600 font-medium mb-1">{contact.info}</p>
                    <p className="text-gray-600 text-sm">{contact.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Dapatkan Konsultasi Gratis
              </h4>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Analisis kebutuhan pengeringan
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Rekomendasi produk yang tepat
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Perhitungan ROI dan payback period
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Demo produk (jika memungkinkan)
                </li>
              </ul>
              <Button 
                onClick={() => handleCTAClick('consultation')}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Jadwalkan Konsultasi
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Kirim Pesan
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Masukkan alamat email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jenis Komoditas
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Pilih jenis komoditas</option>
                  <option>Jagung</option>
                  <option>Padi</option>
                  <option>Kacang-kacangan</option>
                  <option>Kopi</option>
                  <option>Kakao</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kapasitas per Bulan (ton)
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Pilih kapasitas</option>
                  <option>&lt; 5 ton</option>
                  <option>5 - 20 ton</option>
                  <option>20 - 50 ton</option>
                  <option>50 - 100 ton</option>
                  <option>&gt; 100 ton</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ceritakan kebutuhan dan tantangan yang Anda hadapi..."
                ></textarea>
              </div>

              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  handleCTAClick('form');
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
              >
                Kirim Pesan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;