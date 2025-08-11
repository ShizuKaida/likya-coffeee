import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-likya-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="contact-title">
            Bize <span className="text-likya-orange">Ulaşın</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Sıcacık bir kahve ve samimi bir ortam için sizi bekliyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {[
              {
                icon: "fas fa-map-marker-alt",
                title: "Adres",
                content: (
                  <>
                    Kozyatağı Mahallesi, Kocayol Caddesi No:21A, 34742<br />
                    Kadıköy/İstanbul
                  </>
                ),
              },
              {
                icon: "fas fa-phone",
                title: "Telefon",
                content: (
                  <a
                    href="tel:+905333756939"
                    className="text-gray-300 hover:text-likya-orange focus:outline-none focus:ring-2 focus:ring-likya-orange/40 rounded"
                  >
                    +90 533 375 69 39
                  </a>
                ),
              },
              {
                icon: "fas fa-clock",
                title: "Çalışma Saatlerimiz",
                content: (
                  <>
                    <p>Pazartesi - Cuma: 08:00 - 00:00</p>
                    <p>Hafta Sonu: 09:00 - 00:00</p>
                  </>
                ),
              },
              {
                icon: "fas fa-envelope",
                title: "Email",
                content: <p>kerim.mamak@gmail.com</p>,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-likya-dark rounded-xl p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-likya-orange/20 p-3 rounded-full">
                    <i className={`${item.icon} text-likya-orange text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <div className="text-gray-300 text-sm">{item.content}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            className="bg-likya-dark rounded-xl p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="contact-map"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Konum</h3>
            <div className="rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1034.8762586469313!2d29.098220295020074!3d40.96304396642141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac78031425d37%3A0xac6631ce5b6068de!2sLikya%20Coffee!5e0!3m2!1str!2str!4v1754000190486!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Likya Coffee Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
