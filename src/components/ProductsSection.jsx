import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Users, Shield, BarChart3, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductsSection = ({ handleCTAClick }) => {
  const products = [
    {
      name: "Aigra Compact",
      subtitle: "Sewa Pengeringan Skala Kecil",
      capacity: "500 kg/batch",
      features: [
        "Kapasitas 500 kg per batch",
        "Pengeringan 18-24 jam",
        "Hemat energi",
        "Monitoring via smartphone",
        "Dashboard analytics lengkap",
        "Cocok untuk jagung, padi, kacang",
      ],
      price: "Rp 150.000",
      popular: false,
      unit: "/sewa",
      image: "Compact agricultural dryer for small farmers with solar panels and digital display"
    },
    {
      name: "Aigra Professional",
      subtitle: "Sewa Pengeringan Skala Menengah",
      capacity: "1 ton/batch",
      features: [
        "Kapasitas 1 ton per batch",
        "Pengeringan 18-24 jam",
        "Hemat energi",
        "Monitoring via smartphone",
        "Dashboard analytics lengkap",
        "Multi-komoditas",
        "Maintenance support",
      ],
      price: "Rp300.000",
      unit: "/sewa",
      popular: true,
      image: "Professional agricultural drying system for cooperatives with multiple chambers and control panel"
    },
    {
      name: "Aigra Industrial",
      subtitle: "Beli Unit Pengeringan Skala Besar",
      capacity: "10 ton/batch",
      features: [
        "Kapasitas 10 ton per batch",
        "Pengeringan 18-24 jam",
        "Hemat energi",
        "Multi-komoditas",
        "Integrasi ERP system",
        "AI-powered optimization",
        "24/7 technical support",
        "Garansi 5 tahun"
      ],
      price: "Rp 450.000.000",
      unit: "/unit",
      popular: false,
      image: "Large industrial agricultural drying facility with automated conveyor systems and control room"
    }
  ];

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pelatihan & Sertifikasi",
      description: "Program pelatihan komprehensif untuk operator dan teknisi dengan sertifikat resmi."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Layanan maintenance berkala dan support 24/7 untuk memastikan performa optimal."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Dashboard analytics untuk monitoring performa dan optimasi proses pengeringan."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Skema Pembiayaan",
      description: "Berbagai pilihan pembiayaan dan leasing untuk memudahkan investasi Anda."
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Produk & Layanan
            <span className="block gradient-text">Aigra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap untuk berbagai kebutuhan pengeringan pasca panen dengan teknologi terdepan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover relative ${
                product.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Terpopuler
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img  
                  alt={`${product.name} - ${product.subtitle}`}
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{product.capacity}</div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-green-600 font-medium mb-4">{product.subtitle}</p>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <div className="text-3xl font-bold text-gray-900 mb-4">{product.price} <span className="text-xl font-medium text-green-600">{product.unit}</span></div>
                  <Button 
                    onClick={() => handleCTAClick('product')}
                    className={`w-full ${
                      product.popular 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Konsultasi Gratis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Layanan Pendukung
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;