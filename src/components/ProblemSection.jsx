import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Biohazard, BarChart, CloudRain, Import, Settings } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Pengeringan Tidak Merata",
      description: "Pengeringan yang tidak merata dan kontaminasi ruang terbuka menurunkan kualitas jagung.",
      impact: "Kerugian dari harga optimal",
    },
    {
      icon: <Biohazard  className="w-8 h-8" />,
      title: "Pencemaran Jamur Aflatoksin",
      description: "Produksi jagung tercemar jamur aflatoksin akibat penjemuran dibawah sinar matahari.",
      impact: "Hasil panen terkontaminasi",
    },
    {
      icon: <BarChart  className="w-8 h-8" />,
      title: "Permintaan Standar Tinggi",
      description: "Jagung yang dapat digunakan oleh industri pangan disebabkan permintaan standar yang tinggi.",
      impact: "<30% jagung layak konsumsi",
    },
    {
      icon: <CloudRain className="w-8 h-8" />,
      title: "Ketergantungan Cuaca",
      description: "Cuaca buruk menyebabkan kegagalan pengeringan pasca panen.",
      impact: "Hasil panen terbuang",
    },
    {
      icon: <Import className="w-8 h-8" />,
      title: "Kualitas Tidak Standar",
      description: "Impor jagung disebabkan kualitas jagung lokal yang tidak memenuhi standar.",
      impact: "Ketergantungan impor",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Keterbatasan Adopsi Teknologi",
      description: "Rendahnya adopsi teknologi pasca-panen oleh petani kecil karena kendala finansial.",
      impact: "Produktivitas rendah",
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Masalah yang Dihadapi
            <span className="block gradient-text">Petani Indonesia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setiap tahun, petani Indonesia kehilangan miliaran rupiah akibat masalah pasca panen yang tidak tertangani dengan baik.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className={`w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6`}>
                <div className={`text-red-600`}>
                  {problem.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{problem.description}</p>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700`}>
                <span className="w-2 h-2 bg-current rounded-full mr-2"></span>
                {problem.impact}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Total Kerugian Nasional
          </h3>
          <div className="text-6xl font-bold text-red-600 mb-4">
            Rp 15 Triliun
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Setiap tahunnya, Indonesia kehilangan potensi ekonomi sebesar Rp 15 triliun akibat masalah pasca panen yang tidak tertangani dengan baik.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;