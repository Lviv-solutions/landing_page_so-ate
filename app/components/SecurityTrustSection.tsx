"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Lock, Star, CheckCircle, Eye, Server } from "lucide-react";
import Image from "next/image";

export default function SecurityTrustSection() {
  const { t } = useTranslation();

  // const securityFeatures = [
  //   {
  //     icon: Shield,
  //     title: "حماية البيانات المتقدمة",
  //     description: "تشفير عالي المستوى لحماية جميع بيانات مطعمك وعملائك"
  //   },
  //   {
  //     icon: Lock,
  //     title: "أمان الدفع",
  //     description: "نظام دفع آمن ومعتمد مع أعلى معايير الحماية المصرفية"
  //   },
  //   {
  //     icon: Server,
  //     title: "خوادم محمية",
  //     description: "خوادم سحابية محمية بأحدث تقنيات الأمان والحماية"
  //   }
  // ];

  return (
    <section className=" mx-20 rounded-3xl border py-10 bg-gradient-to-br from-[#502746] via-[#401736] to-[#200016] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 relative z-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Security Illustration */}
          <motion.div
              className="relative flex justify-center lg:order-last"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
            <div className="sticky">
              {/* Main Security Shield */}

                 {/*Shield Background*/}
                <motion.div
                    className="absolute inset-0 w-80 h-80 flex items-center justify-center"
                    transition={{ duration: 3, repeat: Infinity }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                  <Image
                    src="/image/shield2.png"
                    alt="Security Shield"
                    width={320}
                    height={320}
                    className="absolute drop-shadow-2xl"
                  />
                </motion.div>

                {/* Lock Icon */}
                <motion.div
                    className="relative z-10 w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                  <Lock className="text-white" size={32} />
                </motion.div>

                {/* Floating Security Elements */}
                <motion.div
                    className="absolute -top-8 -right-8 w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center"
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <Star className="text-yellow-300" size={24} />
                </motion.div>

                <motion.div
                    className="absolute -bottom-6 -left-8 w-14 h-14 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <CheckCircle className="text-green-300" size={20} />
                </motion.div>

                {/* Gear Elements */}
                <motion.div
                    className="absolute top-4 left-4 w-12 h-12 bg-orange-400/80 rounded-lg flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-6 h-6 border-2 border-white rounded-full relative">
                    <div className="absolute inset-1 border border-white rounded-full" />
                  </div>
                </motion.div>

                <motion.div
                    className="absolute bottom-8 right-8 w-10 h-10 bg-yellow-300/80 rounded-full flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-4 h-4 border border-white rounded-sm" />
                </motion.div>

                {/* Rating Card */}
                <motion.div
                    className="absolute -right-16 top-16 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      opacity: { duration: 0.8, delay: 0.5 },
                      x: { duration: 0.8, delay: 0.5 },
                      y: { duration: 3, repeat: Infinity, delay: 2 }
                    }}
                >
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} size={12} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-700 font-medium">{t("securityTrust.trusted")}</div>
                </motion.div>

              {/* Sparkles */}
              {[
                { top: 20, left: 15 },
                { top: 65, left: 85 },
                { top: 85, left: 25 },
                { top: 10, left: 75 },
                { top: 45, left: 10 },
                { top: 75, left: 90 }
              ].map((position, index) => (
                  <motion.div
                      key={index}
                      className="absolute text-yellow-300"
                      style={{
                        top: `${position.top}%`,
                        left: `${position.left}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        repeatDelay: 1
                      }}
                  >
                    <Star size={16} fill="currentColor" />
                  </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Content */}
          <motion.div
              className="lg:order-first p-12 rounded-2xl flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ 
                backgroundImage: 'url(/image/14.png)',
                backgroundSize: '120% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
          >
            {/*<motion.div*/}
            {/*    className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"*/}
            {/*    initial={{ opacity: 0, scale: 0.8 }}*/}
            {/*    whileInView={{ opacity: 1, scale: 1 }}*/}
            {/*    transition={{ duration: 0.6 }}*/}
            {/*    viewport={{ once: true }}*/}
            {/*>*/}
            {/*  {t("securityTrust.badge")}*/}
            {/*</motion.div>*/}

            <motion.h2
                className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
              {t("securityTrust.title")}
            </motion.h2>

            <motion.p
                className="text-2xl  text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
              {t("securityTrust.description")}
            </motion.p>

            {/* Features List */}
            {/*<div className="space-y-6 mb-8">*/}
            {/*  {securityFeatures.map((feature, index) => (*/}
            {/*      <motion.div*/}
            {/*          key={index}*/}
            {/*          className="flex items-start space-x-4"*/}
            {/*          initial={{ opacity: 0, x: -30 }}*/}
            {/*          whileInView={{ opacity: 1, x: 0 }}*/}
            {/*          transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}*/}
            {/*          viewport={{ once: true }}*/}
            {/*      >*/}
            {/*        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">*/}
            {/*          <feature.icon className="text-yellow-300" size={24} />*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>*/}
            {/*          <p className="text-white/70 leading-relaxed">{feature.description}</p>*/}
            {/*        </div>*/}
            {/*      </motion.div>*/}
            {/*  ))}*/}
            {/*</div>*/}

            {/* Trust Indicators */}
            {/*<motion.div*/}
            {/*    className="grid grid-cols-3 gap-6 mb-8"*/}
            {/*    initial={{ opacity: 0, y: 30 }}*/}
            {/*    whileInView={{ opacity: 1, y: 0 }}*/}
            {/*    transition={{ duration: 0.8, delay: 1.2 }}*/}
            {/*    viewport={{ once: true }}*/}
            {/*>*/}
            {/*  {[*/}
            {/*    { number: "256-bit", label: "تشفير SSL", icon: Lock },*/}
            {/*    { number: "99.9%", label: "وقت التشغيل", icon: Server },*/}
            {/*    { number: "24/7", label: "مراقبة أمنية", icon: Eye }*/}
            {/*  ].map((stat, index) => (*/}
            {/*      <motion.div*/}
            {/*          key={index}*/}
            {/*          className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"*/}
            {/*          whileHover={{ scale: 1.05, y: -2 }}*/}
            {/*      >*/}
            {/*        <div className="flex items-center justify-center mb-2">*/}
            {/*          <stat.icon className="text-yellow-300" size={20} />*/}
            {/*        </div>*/}
            {/*        <motion.div*/}
            {/*            className="text-2xl font-bold text-white mb-1"*/}
            {/*            animate={{ scale: [1, 1.05, 1] }}*/}
            {/*            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}*/}
            {/*        >*/}
            {/*          {stat.number}*/}
            {/*        </motion.div>*/}
            {/*        <div className="text-white/70 text-sm font-medium">{stat.label}</div>*/}
            {/*      </motion.div>*/}
            {/*  ))}*/}
            {/*</motion.div>*/}

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
            >
              {/*<motion.button*/}
              {/*    className="px-8 py-4 rounded-full text-lg font-semibold text-purple-900 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"*/}
              {/*    whileHover={{ scale: 1.05, y: -2 }}*/}
              {/*    whileTap={{ scale: 0.95 }}*/}
              {/*>*/}
              {/*  {t("securityTrust.cta")}*/}
              {/*</motion.button>*/}
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 text-white/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16 border-2 border-current rounded-full" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-white/15"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Star size={24} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-20 text-white/20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-8 h-8 border border-current rounded" />
        </motion.div>
      </div>

    </section>
  );
}
