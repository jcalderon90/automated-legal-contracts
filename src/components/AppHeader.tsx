import { Scale } from 'lucide-react';
import type { Lang } from '../i18n/translations';

interface AppHeaderProps {
    lang: Lang;
    setLang: (lang: Lang) => void;
    uiLanguageLabel: string;
}

export function AppHeader({ lang, setLang, uiLanguageLabel }: AppHeaderProps) {
    return (
        <header className="app-header">
            <div className="brand-section">
                <Scale className="text-[#D4AF37] w-8 h-8" size={32} strokeWidth={1.5} />
                <div>
                    <div className="brand-logo">Varela Law</div>
                    <div className="brand-subtitle">Automated Legal Systems</div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex gap-2">
                    <button
                        onClick={() => setLang('es')}
                        className={`px-3 py-1 rounded border text-sm transition-colors ${lang === 'es' ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
                    >
                        🇪🇸 ES
                    </button>
                    <button
                        onClick={() => setLang('en')}
                        className={`px-3 py-1 rounded border text-sm transition-colors ${lang === 'en' ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
                    >
                        🇺🇸 EN
                    </button>
                </div>
                <span className="live-badge">
                    <span className="live-badge-dot"></span>
                    Varela Engine v4.0 (Unified Form)
                </span>
            </div>
        </header>
    );
}
