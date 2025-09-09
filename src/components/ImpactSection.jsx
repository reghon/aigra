import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImpactSection = ({ handleCTAClick }) => {
  const stats = [
  {
    number: "900+",
    label: "Kelompok Tani Siap Adopsi",
    description: "Kelompok tani di Jawa Timur yang siap mengadopsi teknologi Aigra.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    number: "300+",
    label: "Unit Potensial",
    description: "Potensi pemasangan Aigra di sentra produksi jagung Jawa Timur.",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    number: "Rp300rb/ton",
    label: "Biaya Efisien",
    description: "Layanan pengeringan terjangkau untuk kelompok tani dan pelaku UMKM.",
    icon: <DollarSign className="w-8 h-8" />,
  },
  {
    number: "700.000",
    label: "Target Pasar Nasional",
    description: "Kelompok tani di Indonesia yang dapat dijangkau oleh Aigra.",
    icon: <TrendingUp className="w-8 h-8" />,
  }
];

  const stories = [
    {
      name: "Pak Budi Santoso",
      location: "Lampung",
      crop: "Jagung",
      before: "Rp 4.500/kg",
      after: "Rp 6.800/kg", 
      increase: "51%",
      story: "Sebelum menggunakan Aigra, jagung saya sering rusak karena cuaca. Sekarang kualitasnya konsisten dan harga jual meningkat drastis. Investasi terbaik untuk usaha tani saya!",
      image: "Indonesian corn farmer Pak Budi with dried corn harvest and Aigra equipment in background"
    },
    {
      name: "Koperasi Tani Makmur",
      location: "Jawa Tengah", 
      crop: "Padi",
      before: "Rp 5.200/kg",
      after: "Rp 7.500/kg",
      increase: "44%",
      story: "Dengan Aigra, kami bisa melayani 200 petani anggota. Kualitas beras premium dan akses ke pasar ekspor membuat pendapatan koperasi meningkat signifikan.",
      image: "Rice cooperative members with Aigra industrial system and premium rice quality display"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dampak Positif
            <span className="block gradient-text">Aigra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lebih dari sekadar teknologi, Aigra menciptakan dampak positif yang berkelanjutan untuk petani dan industri pertanian Indonesia.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg card-hover"
            >
              <div className={`w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <div className={`text-green-600`}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Kisah Sukses Petani Mitra
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img  
                    alt={`${story.name} - Success story`}
                    className="w-16 h-16 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{story.name}</h4>
                    <p className="text-gray-600">{story.location} • {story.crop}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Sebelum</div>
                    <div className="text-lg font-bold text-red-600">{story.before}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Sesudah</div>
                    <div className="text-lg font-bold text-green-600">{story.after}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Peningkatan</div>
                    <div className="text-lg font-bold text-blue-600">+{story.increase}</div>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{story.story}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            Dampak untuk Industri Pertanian Indonesia
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">Rp 2.5T</div>
              <div className="text-green-100">Potensi peningkatan nilai tambah sektor pertanian</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000</div>
              <div className="text-green-100">Lapangan kerja baru yang dapat tercipta</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="text-green-100">Pengurangan food waste nasional</div>
            </div>
          </div>

          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Aigra tidak hanya menguntungkan petani individual, tetapi juga berkontribusi pada transformasi digital dan modernisasi sektor pertanian Indonesia menuju era Agriculture 4.0.
          </p>

          <Button 
            onClick={() => handleCTAClick('partnership')}
            className="bg-white text-green-600 hover:bg-green-50 px-8 py-3"
          >
            Bergabung dengan Misi Kami
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;