import { useEffect } from 'react';

interface LegalBotWidgetProps {
    botId: string;
    metadata: Record<string, any>;
    sessionId?: string;
    supabaseUrl?: string;
    supabaseKey?: string;
}

export const LegalBotWidget = ({ botId, metadata, sessionId, supabaseUrl, supabaseKey }: LegalBotWidgetProps) => {
    useEffect(() => {
        const SCRIPT_ID = 'lexflow-engine-script';
        const STYLE_ID = 'lexflow-engine-style';
        let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
        let style = document.getElementById(STYLE_ID) as HTMLLinkElement;

        const initBot = () => {
            if (window.LexFlow) {
                window.LexFlow.init({
                    id: botId,
                    metadata,
                    sessionId: sessionId || undefined,
                    supabaseUrl,
                    supabaseKey
                });
            } 
        };

        if (!style) {
            style = document.createElement('link');
            style.id = STYLE_ID;
            style.rel = 'stylesheet';
            style.href = `https://scripts-lexflow.netlify.app/lexflow.css`;
            document.head.appendChild(style);
        }

        if (!script) {
            script = document.createElement('script');
            script.id = SCRIPT_ID;
            script.src = `https://scripts-lexflow.netlify.app/lexflow.iife.js`;
            script.async = true;
            script.onload = initBot;
            document.body.appendChild(script);
        } else if (window.LexFlow) {
            initBot();
        }

    }, [botId, JSON.stringify(metadata), sessionId, supabaseUrl, supabaseKey]);

    return null;
};
