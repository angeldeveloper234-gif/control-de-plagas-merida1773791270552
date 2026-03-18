import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { config } from "@/config";

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section id="testimonials" className="py-32 bg-[#0D0C0C] relative overflow-hidden border-t border-white/5">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <p className="text-[#2563EB] font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                        Lo Que Dicen Nuestros Clientes
                    </p>
                    <h2 className="text-4xl md:text-6xl font-display text-white tracking-widest">
                        TRABAJOS QUE <span className="text-[#2563EB]">HABLAN</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {testimonials.map((item: { name: string; role: string; text: string; tags: string[] }, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#111010] border border-white/5 p-8 md:p-10 hover:border-[#2563EB]/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Quote watermark */}
                            <Quote
                                size={80}
                                className="absolute -top-2 -right-2 text-[#2563EB]/5 group-hover:text-[#2563EB]/10 transition-colors"
                                fill="currentColor"
                            />

                            <div className="flex flex-col h-full relative z-10">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} size={16} className="fill-[#2563EB] text-[#2563EB]" />
                                    ))}
                                </div>

                                <p className="text-lg md:text-xl font-sans font-light text-zinc-300 leading-relaxed mb-8 flex-1 group-hover:text-white transition-colors">
                                    "{item.text}"
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {item.tags.map((tag: string, idx: number) => (
                                        <span key={idx} className="bg-[#2563EB]/10 text-[#2563EB] text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-[#2563EB]/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <div className="w-11 h-11 bg-[#2563EB]/20 flex items-center justify-center text-[#2563EB] font-display font-bold text-xl flex-shrink-0">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-white font-sans text-sm font-bold tracking-wider uppercase">
                                            {item.name}
                                        </p>
                                        <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-0.5">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
