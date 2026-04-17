"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X, ArrowLeft, Images } from "lucide-react";

interface TrainingImage {
  src: string;
  caption: string;
}

interface TrainingGroup {
  title: string;
  description: string;
  cover: string;
  images: TrainingImage[];
}

const trainingGroups: TrainingGroup[] = [
  {
    title: "Primavera P6 Training",
    description: "Professional project planning and scheduling training using Oracle Primavera P6.",
    cover: "/assets/training/primavera-training/image1.webp",
    images: [
      { src: "/assets/training/primavera-training/image1.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image2.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image3.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image4.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image5.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image6.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image7.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image8.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image9.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image10.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image11.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image12.webp", caption: "Primavera P6 Training Session" },
      { src: "/assets/training/primavera-training/image13.webp", caption: "Primavera P6 Training Session" },
    ],
  },
  {
    title: "General Workshops",
    description: "Industry workshops, training sessions, and events across Nigeria.",
    cover: "/assets/training/image1.webp",
    images: [
      { src: "/assets/training/image1.webp", caption: "Construction Industry Workshop" },
      { src: "/assets/training/image2.webp", caption: "Innovation in Construction Technology Award" },
      { src: "/assets/training/image3.webp", caption: "Nigerian Air Force Training" },
      { src: "/assets/training/image4.webp", caption: "Hands-on Computer Training Session" },
      { src: "/assets/training/image5.webp", caption: "Channels TV Feature" },
      { src: "/assets/training/image6.webp", caption: "Large-Scale Training Workshop" },
      { src: "/assets/training/image7.webp", caption: "CORBON Pre-Induction Workshop" },
      { src: "/assets/training/image8.webp", caption: "Military Personnel Training" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function PastTrainings() {
  const [activeGroup, setActiveGroup] = useState<TrainingGroup | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeImages = activeGroup?.images ?? [];

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % activeImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + activeImages.length) % activeImages.length);
    }
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Past Trainings
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            A look at some of our workshops, training sessions, and industry events across Nigeria.
          </p>
        </motion.div>

        {!activeGroup ? (
          /* ── Training Group Cards ── */
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {trainingGroups.map((group, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100"
                onClick={() => setActiveGroup(group)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={group.cover}
                    alt={group.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full">
                    <Images className="w-4 h-4" />
                    {group.images.length}
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    {group.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {group.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* ── Gallery View for Selected Group ── */
          <div>
            {/* Back button & group title */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <button
                type="button"
                onClick={() => { setActiveGroup(null); setSelectedIndex(null); }}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>All Trainings</span>
              </button>
              <span className="text-gray-300">/</span>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {activeGroup.title}
              </h3>
            </div>

            {/* Image Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {activeImages.map((img, index) => (
                <motion.div
                  key={index}
                  variants={gridItemVariants}
                  className="group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <p className="text-white text-sm sm:text-base font-medium p-3 sm:p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {img.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Dialog.Root
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && closeLightbox()}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
          <Dialog.Content
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") goNext();
              if (e.key === "ArrowLeft") goPrev();
            }}
          >
            {selectedIndex !== null && activeImages[selectedIndex] && (
              <>
                {/* Close button */}
                <Dialog.Close asChild>
                  <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </Dialog.Close>

                {/* Counter */}
                <div className="absolute top-4 left-4 z-10 text-white/70 text-sm font-medium">
                  {selectedIndex + 1} / {activeImages.length}
                </div>

                {/* Prev button */}
                <button
                  onClick={goPrev}
                  className="absolute left-2 sm:left-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* Image */}
                <div className="relative w-full max-w-4xl max-h-[80vh] aspect-[4/3]">
                  <Image
                    src={activeImages[selectedIndex].src}
                    alt={activeImages[selectedIndex].caption}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 1024px) 90vw, 60vw"
                    priority
                  />
                </div>

                {/* Next button */}
                <button
                  onClick={goNext}
                  className="absolute right-2 sm:right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* Caption */}
                <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 text-center">
                  <p className="text-white text-base sm:text-lg font-medium bg-black/40 inline-block px-4 py-2 rounded-full">
                    {activeImages[selectedIndex].caption}
                  </p>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
