import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { config } from '@/config';

export const StickyCallBar: React.FC = () => {
    const phone = config.contact.phone;
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 sm:hidden grid grid-cols-2 h-20 bg-[#374151] border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
        >
            <a
                href={`tel:${phone}`}
                className="flex flex-col items-center justify-center gap-1 text-white border-r border-white/10 active:bg-white/5 transition-colors"
            >
                <Phone size={20} className="text-[#2563EB]" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Llamar</span>
            </a>
            <a
                href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 text-white active:bg-white/5 transition-colors"
            >
                <MessageSquare size={20} className="text-[#2563EB]" />
                <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
            </a>
        </motion.div>
    );
};
