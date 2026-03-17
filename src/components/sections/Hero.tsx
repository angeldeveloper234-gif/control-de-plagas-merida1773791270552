import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Hero() {
    const { dynamicContent, branding } = config;
    const { specialization, city, localAnchor, stats } = dynamicContent;

    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0f172a]">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
                    alt="Control de Plagas"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                <div className="texture-overlay" />
            </div>

            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex items-center gap-4 mb-8 overflow-hidden">
                        <div className="h-[1px] w-8 bg-[#2563EB]"></div>
                        <p className="text-[#2563EB] font-mono text-xs tracking-[0.4em] uppercase font-black active-badge whitespace-nowrap">
                            {branding.slogan}
                        </p>
                    </div>

                    <div className="font-display leading-none mb-10">
                        <h1 className="flex flex-col gap-0">
                            <span className="block text-slate-400 text-xl md:text-3xl tracking-[0.15em] uppercase mb-2 font-sans font-light">
                                {specialization.ego} en {city}
                            </span>
                            <span className="block text-white text-[60px] md:text-[120px] tracking-widest uppercase leading-[0.9]">
                                {branding.name}
                            </span>
                            <span className="block text-[#2563EB] text-[40px] md:text-[80px] tracking-widest uppercase leading-[0.9] md:ml-2">
                                {specialization.hook}
                            </span>
                        </h1>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-xl mb-12"
                >
                    <p className="text-lg md:text-xl text-slate-400 font-sans font-light leading-relaxed border-l-4 border-[#2563EB]/50 pl-6">
                        Eliminamos <span className="text-white font-medium">{specialization.pain}</span> con métodos industriales seguros.
                        Servicio certificado en <span className="text-white font-medium">{city}</span>.
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-slate-500 font-sans text-sm">
                        <MapPin size={14} className="text-[#2563EB] flex-shrink-0" />
                        <span>{localAnchor}, {city}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                >
                    <Button
                        size="lg"
                        className="bg-[#2563EB] text-white hover:bg-[#1d4ed8] rounded-none px-10 py-7 text-sm tracking-widest uppercase font-black shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] group transition-all duration-500"
                        onClick={() => window.location.href = '#contact'}
                    >
                        SOLICITAR INSPECCIÓN
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Button>

                    <div className="flex items-center gap-2 text-[10px] text-[#2563EB] uppercase tracking-widest font-black ml-1">
                        <ShieldCheck size={12} />
                        <span>Certificado de Fumigación Incluido</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 flex flex-wrap gap-10"
                >
                    {[
                        { val: `${stats.projectsDone}+`, label: "Hogares Protegidos" },
                        { val: "100%", label: "Plagas Controladas" },
                        { val: "Certificada", label: "Garantía" },
                    ].map((s, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-4xl md:text-5xl font-display text-white tracking-tight">{s.val}</span>
                            <span className="text-xs text-slate-500 uppercase tracking-widest font-bold max-w-[80px] leading-tight">{s.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
