import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Consulting() {
  return (
    <section id="consulting" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        {/* Üst başlık */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">
            Spectra Eğitim Danışmanlık Ve Gıda Tic. Ltd. Şti
          </h2>
          <p className="mt-4 text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Spectra, perakende gıda sektöründe bireylerin ve kurumların
            gelişimini desteklemek amacıyla yenilikçi, sürdürülebilir ve sonuç
            odaklı eğitim çözümleri sunan bir eğitim ve danışmanlık firmasıdır.
            Perakende ve İnsan kaynakları sektöründe 35 yılı geçen tecrübemiz ile
            kurumların ihtiyaçlarına özel programlar tasarlıyor, çalışanların
            bilgi, beceri ve motivasyonlarını artıracak uygulamalı eğitimler
            gerçekleştiriyoruz.
          </p>
          <p className="mt-3 text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Misyonumuz; bilgi ve deneyim paylaşımı yoluyla iş dünyasında fark
            yaratan, verimliliği artıran ve sürdürülebilir başarıyı destekleyen
            çözümler geliştirmektir.
          </p>
        </motion.div>

        {/* Kartlar */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Kurumsal Eğitimler */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <h3 className="text-xl font-semibold">Kurumsal Eğitimler</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
              {[
                "Liderlik",
                "İletişim",
                "Ekip çalışması",
                "Satış",
                "Müşteri ilişkileri",
                "Hizmet modeli geliştirme",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-4 w-4 flex-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kişisel Gelişim Eğitimleri */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <h3 className="text-xl font-semibold">Kişisel Gelişim Eğitimleri</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
              {[
                "Zaman yönetimi",
                "Stres yönetimi",
                "Etkili sunum teknikleri",
                "Problem çözme teknikleri",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-4 w-4 flex-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Danışmanlık Hizmetleri */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <h3 className="text-xl font-semibold">Danışmanlık Hizmetleri</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
              {[
                "Start up",
                "İnsan kaynakları yönetimi",
                "Stratejik planlama",
                "Organizasyonel yapılanma",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-4 w-4 flex-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-neutral-300 text-center">
            İşletmenize özel eğitim ve danışmanlık için bizimle iletişime geçin.
          </p>
          <div className="mt-4 w-full max-w-md mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-3">
            {/* Telefon */}
            <a
              href="tel:+905333756939"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-center hover:bg-white/10 transition"
            >
              <FaPhone className="text-likya-orange text-xl" /> {/* 👈 ikon */}
              Telefonla Ulaş
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/905333756939?text=Merhaba%2C%20Dan%C4%B1%C5%9Fmanl%C4%B1k%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-center hover:bg-white/10 transition"
            >
              <FaWhatsapp className="text-likya-orange text-xl" /> {/* 👈 ikon */}
              WhatsApp
            </a>
            {/* Mail */}
            <a
              href="mailto:kerim@likyacoffee.com?subject=Dan%C4%B1%C5%9Fmanl%C4%B1k%20Talebi"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-center hover:bg-white/10 transition"
            >
              <FaEnvelope className="text-likya-orange text-xl " /> {/* 👈 ikon */}
              E-posta
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
