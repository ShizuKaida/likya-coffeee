import { motion } from "framer-motion";
import  qrCode  from "../assets/MenuQR.png";

export default function Menu() {
  const reviews = [
    {
      author: "Hatice Ç.Ç",
      rating: 5,
      text:
        "Bu bölgede bulunanların müdavimi olacağı kahve dükkanı... Kahvelerin yanı sıra, atıştırmalık menüsündeki ev yapımı ürünleri de oldukça iddialı.  Sunumlar çok özenli. Hindili peynirli kiş denedim, tam kıvamindaydı. Cikolatalı kurabiyenin içindeki Belçika çikolatası ve baskın tereyağı tadı harikaydı... Kesinlikle denenmeli...",
      link: "https://maps.app.goo.gl/BjQkFJHEppxtgAm67"
    },
    {
      author: "Duygu Sevilmiş I.",
      rating: 5,
      text:
        "Likya her zaman gittiğimiz bir kafe. Servisi güzel, kahveleri lezzetli, çalışanlar çok güleryüzlü. Evinizdeki rahatlığı burada bulabilirsiniz. Biz çok severek gidiyoruz, herkese de tavsiye ederim. Bostancı'da daha güzel bir kafe yok :)",
      link: "https://maps.app.goo.gl/GiFXrEC1z3XH9jqy7"
    },
    {
      author: "Barkan S.",
      rating: 5,
      text:
        "Üçüncü nesil demleme kahveleri olan güzel bir yer. Çekirdek ve kahve seçeneği bol, işini bilen ve sizi doğru tat için yönlendirebilen baristaları da var. Lezzetli bir chemex deneyimi oldu.",
      link: "https://maps.app.goo.gl/ctFmQ5HMuMiiEVkG6"
    }
  ];

  const Stars = ({ rating = 5 }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${
            i <= rating ? "text-likya-orange" : "text-gray-600"
          }`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 15.27l-5.18 3.05 1.58-5.77L1 7.97l5.9-.5L10 2l3.1 5.47 5.9.5-5.4 4.58 1.58 5.77L10 15.27z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section id="menu" className="py-20 bg-likya-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
             Menü
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-white">
              Kahvelerimizi sadece içmek değil, hissetmek için buradasınız.
            </strong>
            <br />
            Her fincan kahvemiz, dünyanın dört bir yanından özenle seçilen
            çekirdeklerle, baristalarımızın elinden çıkar.
            <br />
            Misafirlerimizin deneyimi bizim için çok değerli—aşağıda bazı yorumları
            görebilirsiniz. Detaylı menümüz için QR kodu tarayın veya linke
            tıklayın.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* QR Code Section - Mobilde önce, büyük ekranda sağda */}
          <motion.div
            className="order-1 lg:order-2 lg:col-span-1 bg-likya-dark rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">QR Menü</h3>
            <p className="text-gray-400 mb-6">
              Menüyü görmek için kodu taratın veya{" "}
              <a
                href="/LikyaMenu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-likya-orange hover:text-likya-orange/80 transition"
              >
                buraya tıklayın
              </a>
            </p>
            <div className="bg-white p-4 rounded-xl mx-auto w-48 h-48 flex items-center justify-center mb-6">
              <img
                src={qrCode}
                alt="Likya Coffee QR Menü"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Reviews - Mobilde sonra, büyük ekranda solda */}
          <motion.div
            className="order-2 lg:order-1 lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div
              className="bg-likya-dark rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-likya-orange mb-6">
                Sizden Gelenler
              </h3>
              <div className="space-y-5">
                {reviews.map((r, idx) => (
                  <a
                    key={idx}
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-gray-800/60 rounded-lg p-4 bg-black/20 hover:bg-black/30 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out"

                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="text-white font-semibold">{r.author}</p>
                      <Stars rating={r.rating} />
                    </div>
                    <p className="text-gray-300 italic leading-relaxed">
                      “{r.text}”
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
