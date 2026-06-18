import { RefreshCw, CheckCircle2 } from 'lucide-react';

interface ExportModalProps {
    exportStep: number;
}

const STEPS = [
    'Analyzing contract clauses...',
    'Generating SHA-256 secure hash...',
    'Affixing Varela Law digital seal...',
    'Securing PDF document envelope...',
];

export function ExportModal({ exportStep }: ExportModalProps) {
    return (
        <div className="fixed inset-0 bg-[#0B0D13]/85 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-[#161A26] border border-[#D4AF37]/30 rounded-xl p-10 max-w-md w-full mx-4 shadow-2xl text-center">
                <RefreshCw className="animate-spin text-[#D4AF37] w-12 h-12 mx-auto mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#F3E5AB] mb-4">
                    Varela Cryptographic Engine
                </h3>
                <div className="space-y-3 text-left max-w-[280px] mx-auto">
                    {STEPS.map((label, idx) => {
                        const step = idx + 1;
                        return (
                            <div key={step} className="flex items-center gap-3">
                                {exportStep >= step ? (
                                    <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <div className="w-5 h-5 rounded-full border border-gray-600" />
                                )}
                                <span className={`text-sm ${exportStep >= step ? 'text-gray-200' : 'text-gray-500'}`}>
                                    {label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
