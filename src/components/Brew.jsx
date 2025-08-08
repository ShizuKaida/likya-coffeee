import coldBrewImg from "../assets/ColdBrew.jpeg"
import v60Img from "../assets/V60.jpeg"
import chemexImg from "../assets/Chemex.jpeg"
import { motion } from "framer-motion"

const methods = [
  {
    id: 1,
    title: "Cold Brew",
    image: coldBrewImg,
    description:
      "Cold Brew, kahve çekirdeklerinin 12 ila 24 saat boyunca soğuk suda demlenmesiyle elde edilen ferahlatıcı bir içecek yöntemidir. Bu uzun demleme süresi, kahvenin acılığını azaltırken doğal tatlılığını ön plana çıkarır. Özellikle yaz aylarında tercih edilen Cold Brew, buzla servis edildiğinde yumuşak içimiyle serinletici bir alternatif sunar.",
  },
  {
    id: 2,
    title: "V-60",
    image: v60Img,
    description:
      "V-60, pour-over (elle dökme) yöntemiyle demleme yapılan bir ekipmandır. Spiral yapısı ve konik formu sayesinde suyun kahveyle eşit temas etmesini sağlar. Bu da fincana berrak, temiz ve dengeli aromalar ulaşmasına yardımcı olur. Doğru öğütme, su sıcaklığı ve dökme tekniğiyle birlikte V-60, kahvenin karakterini net şekilde ortaya koyar.",
  },
  {
    id: 3,
    title: "Chemex",
    image: chemexImg,
    description:
      "Chemex, estetik tasarımı ve kalın filtresiyle bilinen bir pour-over yöntemidir. Kalın filtre sayesinde kahvede bulunan yağlar ve ince tortular tutulur; sonuç olarak daha temiz, hafif ve çay benzeri bir içim elde edilir. Özellikle hafif gövdeli ve floral tatlara sahip kahvelerle kullanıldığında Chemex, zarif bir kahve deneyimi sunar.",
  },
]
export default function Brew() {
  return (
    <section id="brew" className="bg-likya-dark py-16 text-white text-center">
  <motion.h2
    className="text-4xl font-bold mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <span className="text-likya-orange">Demleme</span> <span className="text-white">Teknikleri</span>
  </motion.h2>

  <div className="space-y-16 px-4 max-w-5xl mx-auto">
    {methods.map((method, i) => (
      <motion.div
        key={method.id}
        className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
          i % 2 === 1 ? "md:flex-row-reverse" : ""
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        viewport={{ once: true }}
      >
        {/* Görsel */}
        <img
          src={method.image}
          alt={method.title}
          className="w-full md:w-1/2 rounded-xl shadow-md object-cover h-100"
        />

        {/* Açıklama */}
        <div className="text-left md:w-1/2">
          <h3 className="text-2xl font-semibold text-likya-orange mb-3">
            {method.title}
          </h3>
          <p className="text-gray-300 text-base text-xl leading-relaxed">{method.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
  )
}