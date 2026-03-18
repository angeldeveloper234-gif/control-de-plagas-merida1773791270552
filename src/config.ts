export const config = {
    branding: {
        name: "CONTROL DE PLAGAS MERIDA",
        slogan: "Fumigación Profesional y Control de Plagas",
        logo: "CPM",
        trade: "Sanidad Ambiental Certificada",
    },
    landingClientId: "bfb56ac6-6eaf-4464-b1f1-3613482fb6d2",
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL || "",
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    },
    contact: {
        phone: "+52 999 410 5896",
        address: "23 A 281 a, entre 26 Y 28, Miguel Alemán, 97148 Mérida, Yuc., México",
        mapLink: "https://www.google.com/maps/search/X9QW%2BWW+Mérida,+Yucatán,+México"
    },
    dynamicContent: {
        city: "Mérida",
        localAnchor: "Miguel Alemán y Zona Norte",
        stats: {
            projectsDone: 500,
            experienceYears: 10,
            happyClients: 100
        },
        specialization: {
            title: "CONTROL DE PLAGAS",
            pain: "Infestaciones Persistentes",
            ego: "Expertos Certificados",
            hook: "Recupera la tranquilidad de tu hogar"
        },
        roadmap: [
            {
                step: "01",
                title: "Diagnóstico",
                desc: "Inspección profunda para identificar focos de infección y tipo de plaga."
            },
            {
                step: "02",
                title: "Estrategia",
                desc: "Aplicación de químicos seguros y trampas industriales según normativa."
            },
            {
                step: "03",
                title: "Resolución",
                desc: "Monitoreo post-servicio y certificación de área libre de plagas."
            }
        ],
        pricing: {
            basic: "Desde $800 MXN",
            comprehensive: "Cotización a medida",
            retainer: "Pólizas Anuales"
        }
    },
    services: [
        {
            id: "01",
            icon: "🐜",
            title: "Fumigación Residencial",
            problem: "¿Insectos en tu cocina o habitaciones?",
            agitation: "Las plagas ponen en riesgo la salud de tu familia y mascotas.",
            solve: "Protocolos seguros y sin olor para hogares con niños y mascotas.",
            price: "pricing.basic"
        },
        {
            id: "02",
            icon: "🦂",
            title: "Control de Termitas",
            problem: "¿Daño estructural en madera?",
            agitation: "Las termitas pueden devaluar tu propiedad en meses.",
            solve: "Eliminación estructural profunda con barrera química.",
            price: "pricing.comprehensive"
        },
        {
            id: "03",
            icon: "🏢",
            title: "Sanitización Comercial",
            problem: "¿Requieres certificado de higiene?",
            agitation: "Cumple con la normativa de salubridad para evitar clausuras.",
            solve: "Certificaciones de higiene válidas para negocios.",
            price: "pricing.retainer"
        }
    ],
    testimonials: [
        {
            name: "Roberto Méndez",
            role: "Gerente de Restaurante",
            text: "Lograron eliminar una plaga de cucarachas que otros no pudieron. El certificado nos ayudó con Salubridad.",
            tags: ["Eficacia", "Comercial"]
        },
        {
            name: "Ana Sofía Correa",
            role: "Residente en Mérida",
            text: "Excelente servicio para termitas. Muy limpios y profesionales, explicaron todo el proceso.",
            tags: ["Termitas", "Hogar"]
        },
        {
            name: "Carlos Pech",
            role: "Administrador de Condominios",
            text: "Puntuales y con equipos modernos. Llevan el control de plagas de todo el edificio.",
            tags: ["Puntualidad", "Mantenimiento"]
        }
    ],
    features: {
        showGallery: true,
        showProducts: true,
        showTestimonials: true,
        showFAQ: true,
        showStats: true
    },
    demoUser: {
        whatsapp: "+529994105896",
    },
    gallery: [
        {
            image: "https://images.unsplash.com/photo-1587393821818-ee42781fb78d?q=80&w=2070&auto=format&fit=crop",
            title: "Control de Hormigas",
            category: "Residencial"
        },
        {
            image: "https://images.unsplash.com/photo-1590682847055-6603f0f01ba3?q=80&w=2070&auto=format&fit=crop",
            title: "Control de Roedores",
            category: "Comercial"
        },
        {
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop",
            title: "Fumigación Industrial",
            category: "Industrial"
        },
        {
            image: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=2070&auto=format&fit=crop",
            title: "Desinfección Certificada",
            category: "Salud"
        }
    ],
    products: [
        {
            id: "1",
            image: "https://images.unsplash.com/photo-1587393821818-ee42781fb78d?q=80&w=2070&auto=format&fit=crop",
            name: "Gel Profesional",
            desc: "Fórmula de alta atracción para el control total de colonias de hormigas.",
            price: "$350"
        },
        {
            id: "2",
            image: "https://images.unsplash.com/photo-1590682847055-6603f0f01ba3?q=80&w=2070&auto=format&fit=crop",
            name: "Estación de Cebo",
            desc: "Protección segura para exteriores contra roedores, ideal para comercios.",
            price: "$450"
        },
        {
            id: "3",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop",
            name: "Líquido Concentrado",
            desc: "Solución residual para el control preventivo de insectos rastreros.",
            price: "$580"
        }
    ]
};
