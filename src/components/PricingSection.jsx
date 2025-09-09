import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = ({ handleCTAClick }) => {
  const financingOptions = [
    {
      title: "Pembelian Cash",
      subtitle: "Pembayaran Tunai",
      discount: "Diskon 5%",
      benefits: [
        "Diskon 5% dari harga normal",
        "Garansi extended +1 tahun",
        "Free training untuk 5 operator",
        "Priority support"
      ],
      cta: "Beli Sekarang"
    },
    {
      title: "Leasing 24 Bulan",
      subtitle: "Cicilan Ringan",
      discount: "Bunga 0%",
      benefits: [
        "Bunga 0% untuk 6 bulan pertama",
        "Down payment mulai 20%",
        "Cicilan tetap 24 bulan",
        "Asuransi equipment included"
      ],
      cta: "Simulasi Cicilan",
      popular: true
    },
    {
      title: "Sewa Operasional",
      subtitle: "Tanpa Investasi Besar",
      discount: "Mulai 5 juta/bulan",
      benefits: [
        "Tanpa down payment",
        "Maintenance included",
        "Upgrade equipment berkala",
        "Flexible contract"
      ],
      cta: "Konsultasi Sewa"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Investasi yang
            <span className="block gradient-text">Menguntungkan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan skala usaha Anda. ROI terjamin dalam 12-18 bulan.
          </p>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12 mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Kalkulator ROI Aigra
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">12-18</div>
              <div className="text-gray-600">Bulan ROI</div>
              <div className="text-sm text-gray-500 mt-2">Payback period rata-rata</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Peningkatan Profit</div>
              <div className="text-sm text-gray-500 mt-2">Dibanding metode konvensional</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-600">Penghematan Biaya</div>
              <div className="text-sm text-gray-500 mt-2">Operasional dan energi</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button 
              onClick={() => handleCTAClick('calculator')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Hitung ROI Anda
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Financing Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {financingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl p-8 shadow-lg card-hover relative ${
                option.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Terpopuler
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.subtitle}</p>
                <div className="text-2xl font-bold text-green-600">{option.discount}</div>
              </div>

              <div className="space-y-3 mb-8">
                {option.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => handleCTAClick('financing')}
                className={`w-full ${
                  option.popular 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {option.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;