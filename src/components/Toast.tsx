import { CheckCircle2 } from 'lucide-react';

export function Toast() {
    return (
        <div className="toast border-emerald-500/30 text-left">
            <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
            <div>
                <div className="font-bold text-gray-100 text-sm">Contract Exported Successfully</div>
                <div className="text-xs text-gray-400">Document generated and stored securely in local vault.</div>
            </div>
        </div>
    );
}
