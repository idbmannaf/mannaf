import { motion } from "framer-motion";
import { Award, Calendar, GraduationCap } from "lucide-react";
import React from "react";

const educationData = [
  {
    title: "BA",
    institution: "Bhety Siddiquia Fazil Madrasha",
    period: "2012-2015",
    type: "education",
  },
  {
    title: "Professional Diploma (WDPF)",
    institution: "ISDB-Bisew",
    period: "2019-2022",
    type: "education",
  },
  {
    title: "Master NestJS",
    institution: "Udemy",
    period: "2024",
    type: "certification",
  },
  {
    title: "Programming with Google Go Specialization",
    institution: "Coursera",
    period: "2023",
    type: "certification",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Education & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {item.type === "education" ? (
                  <GraduationCap className="w-8 h-8 text-primary mr-4" />
                ) : (
                  <Award className="w-8 h-8 text-primary mr-4" />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.institution}</p>
                </div>
              </div>

              <div className="flex items-center text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
