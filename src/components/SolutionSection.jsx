import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Droplets, Smartphone, RotateCcw, Zap, Wheat, BarChart3, Award } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Air Temperature",
      description: "Memantau dan mengatur suhu udara secara real-time untuk proses pengeringan yang optimal."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Air Humidity",
      description: "Mengukur tingkat kelembaban udara dan menyesuaikannya untuk mencegah jamur dan kerusakan hasil panen."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Real-Time Monitoring",
      description: "Mengontrol dan memantau mesin pengering langsung dari aplikasi ponsel secara real-time."
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Automatic Drying",
      description: "AI secara otomatis menyesuaikan kipas, pemanas, dan durasi pengeringan berdasarkan data sensor."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Input Hasil Panen",
      description: "Masukkan jagung, padi, atau komoditas lain ke dalam chamber pengeringan Aigra.",
      icon: <Wheat className="w-8 h-8" />
    },
    {
      step: "02", 
      title: "Pengaturan Otomatis",
      description: "Sistem AI mengatur suhu, aliran udara, dan waktu pengeringan berdasarkan jenis komoditas.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Monitoring Real-time",
      description: "Sensor IoT memantau proses secara kontinyu dan mengirim data ke aplikasi mobile.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Hasil Berkualitas",
      description: "Dapatkan hasil dengan kadar air optimal dan kualitas premium siap jual atau ekspor.",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solusi Inovatif
            <span className="block gradient-text">Aigra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teknologi pengeringan pintar yang menggabungkan IoT, AI, dan energi terbarukan untuk mengoptimalkan proses pasca panen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img  
              alt="Sistem pengeringan Aigra dengan teknologi IoT"
              className="w-full h-auto rounded-2xl shadow-2xl"
              src="/src/img/AIGRA_PERTAMUDA 2025.jpg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Teknologi Terdepan untuk Hasil Optimal
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aigra menghadirkan revolusi dalam industri pasca panen dengan teknologi yang telah terbukti meningkatkan efisiensi dan kualitas hasil pertanian.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-green-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cara Kerja Aigra
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;