import { motion } from "framer-motion";
import bananaParsley from "../assets/Banana Parsley_page-0001.jpg";
import fresco from "../assets/Fresco_page-0001.jpg";
import hibiskus from "../assets/Hibiskus_page-0001.jpg";

const drinks = [
  {
    id: 1,
    name: "Banana Parsley Lemonade",
    image: bananaParsley,
    description:
      "Muz ve maydanozun taze buluşması, limonun ferahlığıyla dengelenen yepyeni bir tat.",
  },
  {
    id: 2,
    name: "Likya Fresco",
    image: fresco,
    description:
      "Nar ve hibiskusun canlandırıcı uyumu, üzerine akıtılan çikolata sosuyla taçlandırılmış imza serinletici.",
  },
  {
    id: 3,
    name: "Greyfurtlu Hibiskus",
    image: hibiskus,
    description:
      "Greyfurt, şeftali ve hibiskusun buz gibi buluşması; nane yapraklarıyla tazelenmiş ferahlatıcı bir yudum.",
  },
];

export default function Signatures() {
  return (
    <section id="signatures" className="bg-likya-dark-secondary py-16 text-white text-center">
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-likya-orange">Serinleten</span> İmzalarımız
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {drinks.map((drink, i) => (
          <motion.div
            key={drink.id}
            className="w-[calc(50%-1rem)] sm:w-72 md:w-80 rounded-xl overflow-hidden shadow-lg bg-likya-dark text-gray-100"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02, boxShadow: "0px 8px 20px rgba(0,0,0,0.4)" }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={drink.image} alt={drink.name} className="w-full h-95 object-cover" />
            <div className="p-4">
              <h4 className="text-base sm:text-lg font-semibold text-likya-orange">
                {drink.name}
              </h4>
              <p className="text-sm mt-2 text-gray-300">{drink.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
