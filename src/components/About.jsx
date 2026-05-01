import { motion } from "framer-motion";
import aboutImage2 from "../assets/LikyaDeniz.jpg"

export default function About() {
  return (
    <section id="about" className="py-20 bg-likya-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image with animation */}
          <motion.div
            className="lg:order-first"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            
            <img 
              src={aboutImage2}
              alt="Likya Deniz"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image-2"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="about-title">
              <span className="text-likya-orange">Likya Coffee</span> Hakkında
            </h2>
             <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              “İnsan bazen bir yerin önünden geçerken önceden orada neler olduğunu düşünür ve hüzünlenir ya, bu içerik de biraz öyle.
              Ankara'da o kadar çok efsane mekan kapandı ki, bazılarını gerçekten çok özlüyoruz.
              Tunus Caddesi'nde bulunan, o zamanların tek kafe-barı desek yanlış olmaz.
              Daha çok üniversiteli öğrencilerin ve iş çıkışı yetişkinlerin gittiği, güzel müzik dinlenen, keyifli sohbet edilen bir mekandı.
              Şimdi onun yerinde yeni açılan üç tane mekan var. Ne kadar büyük bir yerdi siz düşünün!”
            </p>

            <div className="mb-6">
              <a
                href="https://onedio.com/haber/bir-zamanlar-ankara-da-firtinalar-kopartip-su-an-tarihe-karismis-14-efsane-mekan-793631"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-likya-orange hover:underline text-md font-medium"
              >
                ➤ Likya Coffee’nin geçmişini hatırlatan Onedio haberi
              </a>
            </div>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed" data-testid="about-description-1">
              Yukarıdaki kısa haber, Likya Coffee’nin sıcacık ruhunu, 
              yeri doldurulmaz sohbetlerini ve müdavimlerinin unutulmaz anılarını geçmişin sayfalarından bilenlere ne güzel hatırlatıyor.
              Ankara’nın soğuk kış günlerini kahve ve sıcak şaraplarıyla ısıtan, dans geceleriyle, fark yaratan müziğiyle, enerjik ve güler 
              yüzlü ekibiyle misafirleri ile dost olmuş Likyamız, 1993’te başlayan yolculuğuna 2001’de mola vermişti.<br /><br />
              2020 Kasım ayında kahve yolculuğuna bu defa İstanbul Kozyatağı’nda aynı heyecan ve tutkuyla devam etmeye başlayan Likya; yalnızca sayılı origin kahvelerin hem çekirdek hem de içecek olarak satışını yaparken, ev yapımı ürünleriyle de “Likya Coffee & Edibles” markası altında kaliteyi en üst seviyede sunmayı hedefliyor.
              <br />
              Tüm kahveseverlerle sıcak atmosferimizde buluşmayı heyecanla bekliyoruz.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "fas fa-coffee", text: "Bölgesel Çekirdeklerin Saf Lezzeti" },
                { icon: "fas fa-leaf", text: "Sürdürülebilir Kaynaklardan" },
                { icon: "fas fa-heart", text: "Sevgiyle Hazırlanmış" },
                { icon: "fas fa-users", text: "Burada Herkes Birbirini Tanır" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  data-testid={`feature-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <i className={`${feature.icon} text-likya-orange text-xl`}></i>
                  <span className="text-gray-200">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
