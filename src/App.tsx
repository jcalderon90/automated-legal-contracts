import { useState } from 'react';
import { t } from './i18n/translations';
import type { Lang } from './i18n/translations';
import type { FormValues } from './types';
import { AppHeader } from './components/AppHeader';
import { FormPanel } from './components/FormPanel';
import { DocumentPreview } from './components/DocumentPreview';
import { Toast } from './components/Toast';

export default function App() {
    const [lang, setLang] = useState<Lang>('es');

    const [formValues, setFormValues] = useState<FormValues>({
        clientName: '',
        clientAddress: '',
        clientPhone: '',
        clientEmail: '',
        hasPayor: 'false',
        payorName: '',
        payorAddress: '',
        payorPhone: '',
        payorEmail: '',
        payorRelation: '',
        purpose: '',
        flatFee: '',
        initialPayment: '',
        hasPaymentPlan: 'false',
        monthlyPayment: '',
        paymentStartDate: '',
        agreementDate: new Date().toISOString().split('T')[0],
        preparedBy: '',
    });

    const [activeField, setActiveField] = useState<string>('');
    const [signatureText, setSignatureText] = useState<string>('');
    const [payorSignatureText, setPayorSignatureText] = useState<string>('');
    const [sigColor, setSigColor] = useState<string>('#0F2A4A');
    const [showToast, setShowToast] = useState<boolean>(false);

    const ui = t[lang];

    const remainingBalance =
        formValues.flatFee && formValues.initialPayment
            ? Number(formValues.flatFee) - Number(formValues.initialPayment)
            : null;

    const handleInputChange = (field: string, value: string) => {
        setFormValues(prev => {
            const next = { ...prev, [field]: value };
            // initialPayment cannot exceed flatFee
            if (field === 'flatFee' && Number(next.initialPayment) > Number(value)) {
                next.initialPayment = value;
            }
            if (field === 'initialPayment') {
                const max = Number(next.flatFee);
                if (max > 0 && Number(value) > max) next.initialPayment = String(max);
            }
            return next;
        });
        setActiveField(field);
        if (field === 'clientName') setSignatureText(value);
        if (field === 'payorName') setPayorSignatureText(value);
        setTimeout(() => setActiveField(''), 600);
    };

    const handleExport = () => {
        window.print();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    return (
        <div className="app-container">
            <AppHeader
                lang={lang}
                setLang={setLang}
                uiLanguageLabel={ui.languageLabel}
            />

            <div className="dashboard-grid">
                <FormPanel
                    lang={lang}
                    ui={ui}
                    formValues={formValues}
                    signatureText={signatureText}
                    payorSignatureText={payorSignatureText}
                    sigColor={sigColor}
                    remainingBalance={remainingBalance}
                    onInputChange={handleInputChange}
                    onSignatureChange={setSignatureText}
                    onPayorSignatureChange={setPayorSignatureText}
                    onSigColorChange={setSigColor}
                    onExport={handleExport}
                    setLang={setLang}
                />

                <DocumentPreview
                    ui={ui}
                    formValues={formValues}
                    signatureText={signatureText}
                    payorSignatureText={payorSignatureText}
                    sigColor={sigColor}
                    activeField={activeField}
                />
            </div>

            {showToast && <Toast />}
        </div>
    );
}
