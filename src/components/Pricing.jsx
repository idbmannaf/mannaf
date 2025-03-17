import { motion } from "framer-motion";
import { Check, Code2, GitBranch, Server } from "lucide-react";
import React from "react";

const pricingPlans = [
  {
    title: "Hourly Development",
    price: "$15",
    period: "per hour",
    description: "Perfect for small features and quick fixes",
    features: [
      "Full-stack JavaScript/TypeScript",
      "React & Node.js Development",
      "REST API Integration",
      "Basic Unit Testing",
      "Code Documentation",
      "2 Week Support",
    ],
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    popular: false,
  },
  {
    title: "Monthly Retainer",
    price: "$3,555",
    period: "per month",
    description: "Dedicated development time for ongoing projects",
    features: [
      "5 day workweek, 5 hours per day",
      "Project Management",
      "Git Version Control",
      "Frontend & Backend Work",
      "Weekly Progress Reports",
      "Priority Support",
      "Flexible Hour Distribution",
    ],
    icon: <GitBranch className="w-6 h-6 text-blue-500" />,
    popular: true,
  },
  {
    title: "Project Based",
    price: "Custom",
    period: "per project",
    description: "Fixed-scope project development",
    features: [
      "Full Project Planning",
      "Modern Tech Stack",
      "Database Design",
      "Testing & QA",
      "Deployment Setup",
      "3 Months Support",
      "Source Code Handover",
    ],
    icon: <Server className="w-6 h-6 text-blue-500" />,
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Development Services
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative rounded-2xl backdrop-blur-xl ${
                plan.popular
                  ? "bg-gradient-to-b from-blue-600/10 to-blue-800/10 border border-blue-500/20"
                  : "bg-gray-800/50 border border-gray-700/50"
              } p-8 shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                </div>
              )}

              <div className="flex items-center justify-center mb-6">
                {plan.icon}
              </div>

              <h3 className="text-2xl font-bold text-center mb-2">
                {plan.title}
              </h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
                <p className="text-gray-400 mt-2 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
