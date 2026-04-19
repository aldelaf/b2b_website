"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TOTAL_FRAMES = 61;
const FRAME_PATH = "/frames/frame-";
function getFrameSrc(index: number): string {
  const num = String(Math.min(Math.max(index, 1), TOTAL_FRAMES)).padStart(3, "0");
  return `${FRAME_PATH}${num}.jpg`;
}

const sections = [
  {
    label: "Ingest",
    heading: "We connect to every system you already use.",
    description:
      "Orders from Shopify, Amazon, EDI, email, PDF — our AI agents pull from every source, normalize the data, and push it into a single pipeline. No copy-paste, no CSV imports.",
  },
  {
    label: "Process",
    heading: "AI handles the decisions your team makes 200 times a day.",
    description:
      "Route orders by warehouse proximity. Apply tiered pricing. Flag anomalies. Generate invoices. The system runs your business rules faster and more consistently than any human could.",
  },
  {
    label: "Deliver",
    heading: "Your customers get faster, more accurate fulfillment.",
    description:
      "Real-time inventory sync prevents overselling. Automated shipping updates keep buyers informed. Your team focuses on exceptions, not routine — and your margins grow.",
  },
];

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const lastDrawnFrame = useRef(-1);
  const rafId = useRef<number>(0);
  const pendingFrame = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setLoaded(true);
        }
      };
      images.push(img);
    }
  }, []);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));
    if (clamped === lastDrawnFrame.current) return;
    lastDrawnFrame.current = clamped;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[clamped];
    if (!img) return;

    const rect = canvas.getBoundingClientRect();
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Draw first frame once loaded
  useEffect(() => {
    if (!loaded) return;
    drawFrame(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  // Scroll triggers a RAF-batched draw — snappy, no interpolation
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const frame = progress * (TOTAL_FRAMES - 1);
      pendingFrame.current = frame;

      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          if (pendingFrame.current !== null) {
            drawFrame(pendingFrame.current);
            pendingFrame.current = null;
          }
          rafId.current = 0;
        });
      }
    });
    return () => {
      unsubscribe();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, scrollYProgress]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      lastDrawnFrame.current = -1;
      drawFrame(scrollYProgress.get() * (TOTAL_FRAMES - 1));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  // Text transforms — evenly spaced, no Y movement to keep text crisp
  const text0Opacity = useTransform(scrollYProgress, [0.0, 0.05, 0.22, 0.28], [0, 1, 1, 0]);
  const text1Opacity = useTransform(scrollYProgress, [0.30, 0.35, 0.55, 0.60], [0, 1, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.62, 0.67, 0.90, 0.96], [0, 1, 1, 0]);

  const textSections = [
    { opacity: text0Opacity },
    { opacity: text1Opacity },
    { opacity: text2Opacity },
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-[100dvh] overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Radial mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, #09090b 80%)",
          }}
        />

        {/* Top/bottom fade */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b] opacity-70" />

        {/* Text overlay */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center justify-center min-h-[100dvh]">
            <div className="relative w-full max-w-2xl mx-auto text-center">
              {sections.map((section, i) => (
                <motion.div
                  key={section.label}
                  style={{
                    opacity: textSections[i].opacity,
                  }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-5 will-change-[opacity]"
                >
                  <span className="text-xs font-medium tracking-widest uppercase text-sky-300/80">
                    {section.label}
                  </span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight text-zinc-50">
                    {section.heading}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-[50ch]">
                    {section.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
