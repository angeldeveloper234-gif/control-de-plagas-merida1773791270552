import { motion } from 'framer-motion';
import { ClipboardList, ShieldCheck, Bug } from 'lucide-react';
import { config } from '@/config';

export function RoadmapBlock() {
    const { roadmap } = config.dynamicContent;

    const icons = [
        <Bug size={28} className="text-[#2563EB]" key="1" />,
        <ClipboardList size={28} className="text-[#2563EB]" key="2" />,
        <ShieldCheck size={28} className="text-[#2563EB]" key="3" />,
    ];

    return (
        <section id="process" className="py-24 bg-[#0f172a] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <p className="text-[#2563EB] font-mono text-xs tracking-[0.4em] uppercase font-black mb-4">
                        Metodología Certificada
                    </p>
                    <h2 className="text-4xl md:text-7xl font-display text-white tracking-widest">
                        PROCESO <span className="text-[#2563EB]">TÉCNICO</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                    {roadmap.map((item: { step: string; title: string; desc: string }, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="bg-[#1e293b] border border-white/10 p-10 hover:border-[#2563EB]/50 transition-all duration-500 h-full">
                                <div className="absolute -top-6 -right-4 text-[100px] font-display font-bold text-white/[0.03] pointer-events-none group-hover:text-[#2563EB]/[0.05] transition-colors leading-none select-none">
                                    {item.step}
                                </div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 border border-[#2563EB]/30 flex items-center justify-center mb-8 group-hover:bg-[#2563EB]/10 transition-all">
                                        {icons[index]}
                                    </div>

                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[#2563EB] font-mono text-xs font-black tracking-widest uppercase">FASE {item.step}</span>
                                        <div className="h-[1px] w-6 bg-[#2563EB]/40"></div>
                                    </div>

                                    <h3 className="text-2xl font-display text-white mb-4 group-hover:text-[#2563EB] transition-colors tracking-wider">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-400 font-sans font-light text-base leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
