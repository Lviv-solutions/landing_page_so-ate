"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { CheckCircle, Star, Heart, Mail, Share2 } from "lucide-react";
import Image from "next/image";

export default function ElectronicInvitationsSection() {
  const { t } = useTranslation();

  // const invitationFeatures = [
  //   {
  //     icon: Mail,
  //     titleKey: "electronicInvitations.features.send.title",
  //     descriptionKey: "electronicInvitations.features.send.description"
  //   },
  //   {
  //     icon: Share2,
  //     titleKey: "electronicInvitations.features.share.title",
  //     descriptionKey: "electronicInvitations.features.share.description"
  //   },
  //   {
  //     icon: Users,
  //     titleKey: "electronicInvitations.features.group.title",
  //     descriptionKey: "electronicInvitations.features.group.description"
  //   }
  // ];

  return (
    <section id="electronic-invitations" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Invitation Card Illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Invitation Card */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-80 h-96 relative">
                  <Image
                    src="/image/Invitations.png"
                    alt="Electronic Invitation Card"
                    width={320}
                    height={384}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Check Mark */}
              <motion.div
                className="absolute -top-4 -right-4 z-20"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-8 h-8 text-yellow-500"
                animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, delay: 0.5 }
                }}
              >
                <Star className="w-8 h-8 fill-current" />
              </motion.div>

              <motion.div
                className="absolute top-12 -right-12 w-6 h-6 text-orange-500"
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ 
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, delay: 1 }
                }}
              >
                <Star className="w-6 h-6 fill-current" />
              </motion.div>

              <motion.div
                className="absolute bottom-4 -left-6 w-5 h-5 text-red-500"
                animate={{ rotate: 360, scale: [1, 1.4, 1] }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2.5, repeat: Infinity, delay: 1.5 }
                }}
              >
                <Heart className="w-5 h-5 fill-current" />
              </motion.div>

              {/* Floating Social Icons */}
              <motion.div
                className="absolute -bottom-6 -left-8 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-8 right-16 w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Share2 className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center lg:text-start order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            dir="auto"
          >
            {/* Badge */}
            <motion.div
              className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-medium mb-6 font-clash"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("electronicInvitations.badge")}
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-clash"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("electronicInvitations.title")}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed font-clash max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("electronicInvitations.description")}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-10 w-full py-10 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-4xl font-semibold text-4xl shadow-lg hover:shadow-xl transition-all duration-300 font-clash"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                dir="auto"
              > 
                {t("electronicInvitations.cta")}
              </motion.button>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
