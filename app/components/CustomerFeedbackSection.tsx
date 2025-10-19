"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { MessageCircle, Star, Users, ThumbsUp, BarChart3 } from "lucide-react";
import Image from "next/image";

interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export default function CustomerFeedbackSection() {
  const { t, locale } = useTranslation();

  const feedbackFeatures = [
    {
      icon: MessageCircle,
      title: t("customerFeedback.features.negativeAlerts"),
      description: t("customerFeedback.features.negativeAlertsDesc")
    },
    {
      icon: BarChart3,
      title: t("customerFeedback.features.satisfactionReports"),
      description: t("customerFeedback.features.satisfactionReportsDesc")
    },
    {
      icon: Users,
      title: t("customerFeedback.features.reviewDisplay"),
      description: t("customerFeedback.features.reviewDisplayDesc")
    }
  ];

  // Dynamic reviews data based on current language
  const getCustomerReviews = (): Review[] => {
    if (locale === 'en') {
      return [
        {
          name: "Ahmed Mohammed",
          rating: 5,
          comment: "Excellent service and delicious food, I recommend visiting the restaurant",
          avatar: "/image/usre.png"
        },
        {
          name: "Fatima Ali",
          rating: 4,
          comment: "Great experience, professional staff and comfortable atmosphere",
          avatar: "/image/usre.png"
        },
        {
          name: "Mohammed Salem",
          rating: 5,
          comment: "Best restaurant in the area, high quality and reasonable prices",
          avatar: "/image/usre.png"
        }
      ];
    } else {
      // Arabic reviews
      return [
        {
          name: "أحمد محمد",
          rating: 5,
          comment: "خدمة ممتازة وطعام لذيذ، أنصح بزيارة المطعم",
          avatar: "/image/usre.png"
        },
        {
          name: "فاطمة علي",
          rating: 4,
          comment: "تجربة رائعة، الطاقم محترف والأجواء مريحة",
          avatar: "/image/usre.png"
        },
        {
          name: "محمد سالم",
          rating: 5,
          comment: "أفضل مطعم في المنطقة، جودة عالية وأسعار مناسبة",
          avatar: "/image/usre.png"
        }
      ];
    }
  };

  const customerReviews = getCustomerReviews();

  return (
    <section id="feedback" className="py-20 relative overflow-hidden">
               {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"  />
      </div>

        {/* Right Gradient Blur */}
      <div 
        className="absolute w-[864px] h-[80%] rounded-full"
        style={{
          right: '-538.83px',
          bottom: 'auto',
          background: 'linear-gradient(250deg, rgba(230, 97, 74, 0.50) 33.68%, rgba(255, 192, 66, 0.30) 78.63%)',
          filter: 'blur(213.05px)'
        }}
      />

      {/* Left Gradient Blur */}
      <div 
        className="absolute w-[864px] h-[80%] rounded-full"
        style={{
          left: '-574px',
          bottom: 'auto',
          background: 'linear-gradient(142deg, rgba(5, 218, 155, 0.30) 33.68%, rgba(255, 192, 66, 0.30) 78.63%)',

          filter: 'blur(213.05px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Customer Illustration */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Customer Character */}
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md"
                whileHover={{ y: -5, rotateY: 2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Customer Avatar */}
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center overflow-hidden"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ borderRadius: '110.4px' }}
                  >
                    <Image
                      src="/image/usre.png"
                      alt="Customer Manager"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>

                {/* Customer Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t("customerFeedback.dashboard.managerName")}</h3>
                  <div className="flex items-center justify-center space-x-1 mb-3">
                    {[...Array(5)].map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Star size={16} className="text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    &ldquo;{t("customerFeedback.dashboard.testimonial")}&rdquo;
                  </p>
                </div>

                {/* Laptop */}
                <div className="bg-gray-800 rounded-lg p-2 mb-4">
                  <div className="bg-white rounded h-20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">4.8</div>
                      <div className="text-xs text-gray-600">{t("customerFeedback.dashboard.averageRating")}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Review Cards */}
              {customerReviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="absolute bg-white rounded-lg shadow-lg p-3 max-w-xs"
                  style={{
                    top: `${20 + index * 60}px`,
                    right: index % 2 === 0 ? '-120px' : 'auto',
                    left: index % 2 === 1 ? '-120px' : 'auto',
                  }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.5 + index * 0.2 },
                    x: { duration: 0.8, delay: 0.5 + index * 0.2 },
                    y: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="object-cover"
                        style={{ borderRadius: '110.4px' }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-sm text-gray-800">{review.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(review.rating)].map((_, starIndex) => (
                            <Star key={starIndex} size={10} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-5 -left-5 text-yellow-400"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Star size={24} fill="currentColor" />
              </motion.div>
              <motion.div
                className="absolute -bottom-5 -right-5 text-orange-400"
                animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <ThumbsUp size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-[#ED614A]/12 text-[#ED614A] px-6 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t("customerFeedback.badge")}
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#31241A] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("customerFeedback.title")}
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("customerFeedback.description")}
            </motion.p>

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {feedbackFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Statistics */}
            {/*<motion.div*/}
            {/*  className="grid grid-cols-3 gap-6 mb-8"*/}
            {/*  initial={{ opacity: 0, y: 30 }}*/}
            {/*  whileInView={{ opacity: 1, y: 0 }}*/}
            {/*  transition={{ duration: 0.8, delay: 1.2 }}*/}
            {/*  viewport={{ once: true }}*/}
            {/*>*/}
            {/*  {[*/}
            {/*    { number: "4.8/5", label: "متوسط التقييم", icon: Star },*/}
            {/*    { number: "95%", label: "رضا العملاء", icon: ThumbsUp },*/}
            {/*    { number: "2.5k", label: "مراجعة شهرية", icon: MessageCircle }*/}
            {/*  ].map((stat, index) => (*/}
            {/*    <motion.div*/}
            {/*      key={index}*/}
            {/*      className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-white/20"*/}
            {/*      whileHover={{ scale: 1.05, y: -2 }}*/}
            {/*    >*/}
            {/*      <div className="flex items-center justify-center mb-2">*/}
            {/*        <stat.icon className="text-amber-600" size={20} />*/}
            {/*      </div>*/}
            {/*      <motion.div*/}
            {/*        className="text-2xl font-bold text-[#ED614A] mb-1"*/}
            {/*        animate={{ scale: [1, 1.05, 1] }}*/}
            {/*        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}*/}
            {/*      >*/}
            {/*        {stat.number}*/}
            {/*      </motion.div>*/}
            {/*      <div className="text-gray-600 text-sm font-medium">{stat.label}</div>*/}
            {/*    </motion.div>*/}
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
              {/*  className="px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg"*/}
              {/*  style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}*/}
              {/*  whileHover={{ scale: 1.05, y: -2 }}*/}
              {/*  whileTap={{ scale: 0.95 }}*/}
              {/*>*/}
              {/*  {t("customerFeedback.cta")}*/}
              {/*</motion.button>*/}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
