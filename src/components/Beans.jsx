import { useState } from 'react'
import { motion } from 'framer-motion'
import GrainModal from './GrainModal'
import guatemalaImg from '../assets/Guatemala.jpg'
import ethiopiaImg from '../assets/Ethiopia.jpg'
import colombiaImg from '../assets/Colombia.jpg'
import indonesia from '../assets/Indonesia.jpg'
import turkKahveImg from '../assets/LikyaTurkKahvesi.jpg'
import { FaHeart, FaBrain, FaDumbbell, FaSun, FaSmile, FaMagic } from 'react-icons/fa';
import { FiActivity } from "react-icons/fi";



const beans = [
 {
  id: 1,
  name: "Guatemala Huehuetenango",
  fullName: "Guatemala Huehuetenango SHB EP Grainpro",
  image: guatemalaImg,
  description: "Guatemala'nın yüksek dağlarından gelen tatlımsı aromalı single origin çekirdekler.",
  details: {
   region: "Huehuetenango, Guatemala",
   altitude: "1350 m",
   process: "EP / Yıkanmış",
   aroma: "Tatlımsı",
   botanic: "Arabica",
   body: "Dengeli",
   acidity: "Orta",
   notes: "Çikolatamsı, karamel, hafif narenciye",
   extra: "Kahve yüksek rakımda yetiştiği için yavaş olgunlaşır ve aromasını yoğunlaştırır. EP standardı sayesinde defolu taneler elle ayıklanır.",
  },
 },
 {
  id: 2,
  name: "Ethiopia Yirgacheffe",
  fullName: "Ethiopia Yirgacheffe GR1 Adado Shara",
  image: ethiopiaImg,
  description: "Floral ve narenciye notalarıyla öne çıkan Etiyopya'nın en özel kahvesi.",
  details: {
   region: "Shara, Guanga, Yirgacheffe, Etiyopya",
   altitude: "1780 - 1860 m",
   process: "Yıkanmış ve kurutulmuş",
   aroma: "Çiçeksi, kayısı, limon",
   botanic: "Arabica",
   body: "Dengeli",
   acidity: "Yüksek",
   notes: "Beyaz çiçekler, narenciye, tatlı kayısı",
   extra: "Etiyopya'nın en özel bölgelerinden gelen bu çekirdek floral karakteriyle dikkat çeker.",
  },
 },
 {
  id: 3,
  name: "Colombia Supremo",
  fullName: "Colombia Medellin Supremo 17/18",
  image: colombiaImg,
  description: "Tatlı meyvemsi tonlara sahip, dengeli ve kadifemsi gövdeli Kolombiya çekirdeği.",
  details: {
   region: "Medellin, Kolombiya",
   altitude: "1100 - 1500 m",
   process: "Yıkanmış, güneşte kurutulmuş",
   aroma: "Kakao",
   botanic: "Arabica",
   body: "Orta",
   acidity: "Orta",
   notes: "Tatlı meyve, kakao, hafif karamel",
   extra: "Kolombiya'nın klasik ve güvenilir kahvesi, yumuşak içimiyle öne çıkar.",
  },
 },
 {
  id: 4,
  name: "Endonezya AWP-1 Sulawesi",
  fullName: "Indonesia AWP-1 Sulawesi 'Sultoco' Estate org/utz",
  image: indonesia,
  description: "Yüksek asiditeli, canlandırıcı siyah üzüm ve greyfurt notaları taşıyan kahve.",
  details: {
   region: "Sulawesi, Endonezya",
   altitude: "1100 m",
   process: "Yıkanmış",
   aroma: "Baharatımsı",
   botanic: "Arabica",
   body: "Orta - Yüksek",
   acidity: "Orta",
   notes: "Baharat, bitter çikolata, üzüm",
   extra: "Endonezya'nın volkanik topraklarında yetişen bu çekirdek güçlü ve baharatlı karakteriyle tanınır.",
  },
 },
 {
  id: 5,
  name: "Türk Kahvesi Likya Harmanı",
  fullName: "Brazil & Kenya Harman Türk Kahvesi",
  image: turkKahveImg,
  description: "Brezilya'nın yumuşak içimi ile Kenya'nın meyvemsi asiditesini harmanlayan özel bir tat.",
  details: {
   region: "Brezilya & Kenya",
   altitude: "1200 - 1800 m",
   process: "Doğal & Yıkanmış",
   aroma: "Kuruyemiş ve meyve",
   botanic: "Arabica",
   body: "Düşük - Orta",
   acidity: "Düşük - Orta",
   notes: "Fındık, kakao, siyah üzüm",
   extra: "Brezilya'nın dengeli tat profili ile Kenya'nın canlı meyvemsi tonlarının birleşimi, geleneksel Türk kahvesi keyfini modern bir dokunuşla sunar.",
  },
 }
]

const coffeeReasons = [
  { text: "Alzheimer’a karşı koruma sağlar.", icon: <FaBrain /> },
  { text: "Sütle birlikte içildiğinde uzun süre tok tutar.", icon: <FaSmile /> },
  { text: "İnsülin direncini azaltarak tatlı krizlerini bastırır.", icon: <FaDumbbell /> },
  { text: "Zihinsel zindelik ve odaklanma sağlar.", icon: <FaSun /> },
  { text: "Yağ yakımını hızlandırarak spor öncesi destek olur.", icon: <FaDumbbell /> },
  { text: "Doğru miktarda tüketildiğinde çarpıntı yapmaz.", icon: <FaHeart /> },
  { text: "Kalp sağlığını destekler, damar tıkanıklığını önler.", icon: <FaHeart /> },
  { text: "Kadınlarda kalp krizi riskini azaltır.", icon: <FiActivity /> },
  { text: "Düzenli kahve tüketimi depresyon riskini düşürür.", icon: <FaSmile /> },
  { text: "Peeling etkisiyle cilt temizliğinde de kullanılır.", icon: <FaMagic /> },
];

export default function Beans() {
 const [openId, setOpenId] = useState(null)

 return (
    
  <section id="beans" className="bg-likya-dark py-16 text-white text-center">
  
 <motion.h2
  className="text-4xl font-bold mb-12"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
 >
  Çekirdeklerimiz
 </motion.h2>

 <div className="space-y-10 px-4">
  <div className="flex flex-wrap justify-center gap-8">
  {beans.map((bean, i) => (
   <motion.div
  key={bean.id}
  className="w-[calc(50%-1rem)] sm:w-72 md:w-80 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-likya-dark-secondary text-likya-dark"
  onClick={() => setOpenId(bean.id)}
  initial={{ opacity: 0, y: 30, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  whileHover={{ scale: 1.02, boxShadow: "0px 8px 20px rgba(0,0,0,0.4)" }}
  transition={{ duration: 0.3 }}
  viewport={{ once: true }}
>
  <img src={bean.image} alt={bean.name} className="w-full h-95 object-cover" />
  <div className="p-4 bg-likya-dark-secondary text-gray-100">
    <h4 className="text-base sm:text-lg font-semibold text-likya-orange">
      <span className="sm:hidden text-sm">Detayları Gör</span>
      <span className="hidden sm:inline">{bean.name}</span>
    </h4>
    <p className="text-sm mt-2 hidden sm:block">{bean.description}</p>
  </div>
</motion.div>
   
   
  ))}
  </div>
  
 <motion.div
   className="mt-16 px-4"
   initial={{ opacity: 0, y: 30 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.6 }}
   viewport={{ once: true }}
 >
 <h3 className="text-2xl font-semibold text-likya-orange mb-6">Kahve İçmeniz İçin 10 Neden</h3>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-4xl mx-auto">
  {coffeeReasons.map((item, index) => (
   <motion.div
    key={index}
    className="flex items-center gap-4 bg-likya-dark-secondary p-5 rounded-xl shadow hover:shadow-lg transition hover:scale-[1.02] text-left"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
   >
    <span className="text-likya-orange text-2xl">
           {item.icon}
        </span>
    <p className="text-sm sm:text-base text-gray-200">{item.text}</p>
   </motion.div>
  ))}
 </div>
</motion.div>
  
 </div>

 {beans.map(bean => (
  <GrainModal
  key={bean.id}
  isOpen={openId === bean.id}
  onClose={() => setOpenId(null)}
  bean={bean}
  />
 ))}
 </section>
 )
}