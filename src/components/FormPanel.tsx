import { Shield, Globe, PenTool, RefreshCw } from 'lucide-react';
import type { Translations } from '../i18n/translations';
import type { FormValues } from '../types';

interface FormPanelProps {
    ui: Translations;
    formValues: FormValues;
    signatureText: string;
    payorSignatureText: string;
    sigColor: string;
    isExporting: boolean;
    onInputChange: (field: string, value: string) => void;
    onSignatureChange: (value: string) => void;
    onPayorSignatureChange: (value: string) => void;
    onSigColorChange: (color: string) => void;
    onExport: () => void;
}

export function FormPanel({
    ui,
    formValues,
    signatureText,
    payorSignatureText,
    sigColor,
    isExporting,
    onInputChange,
    onSignatureChange,
    onPayorSignatureChange,
    onSigColorChange,
    onExport,
}: FormPanelProps) {
    return (
        <div className="panel" style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>

            <div className="flex-between mb-6 border-b border-gray-800 pb-4 sticky top-0 bg-[#161A26] z-10 pt-2">
                <div className="flex items-center gap-2">
                    <Shield className="text-[#D4AF37] w-5 h-5" />
                    <h2 className="text-xl font-bold uppercase tracking-wider text-[#F3E5AB]">
                        {ui.parametersTitle}
                    </h2>
                </div>
            </div>

            <div className="space-y-8 pb-8">
                {/* 1. Language Selection */}
                <div className="bg-[#0b0d13]/60 p-5 rounded-lg border border-[#D4AF37]/30">
                    <label className="flex items-center gap-2 text-[#F3E5AB] font-bold mb-3 uppercase tracking-wider text-sm">
                        <Globe size={16} />
                        {ui.languageLabel}
                    </label>
                    <p className="text-gray-500 text-xs italic">
                        Use the language buttons in the header to switch contract language.
                    </p>
                </div>

                {/* 2. Client Section */}
                <div>
                    <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
                        1. {ui.clientSection}
                    </h3>
                    <div className="space-y-4">
                        <div className="form-group">
                            <label>{ui.clientName}</label>
                            <input
                                type="text"
                                value={formValues.clientName}
                                onChange={(e) => onInputChange('clientName', e.target.value)}
                                className="form-input"
                                placeholder={ui.clientNamePlaceholder}
                            />
                        </div>
                        <div className="form-group">
                            <label>{ui.clientAddress}</label>
                            <input
                                type="text"
                                value={formValues.clientAddress}
                                onChange={(e) => onInputChange('clientAddress', e.target.value)}
                                className="form-input"
                                placeholder={ui.clientAddressPlaceholder}
                            />
                        </div>
                        <div className="grid-2-cols">
                            <div className="form-group">
                                <label>{ui.clientPhone}</label>
                                <input
                                    type="text"
                                    value={formValues.clientPhone}
                                    onChange={(e) => onInputChange('clientPhone', e.target.value)}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label>{ui.clientEmail}</label>
                                <input
                                    type="email"
                                    value={formValues.clientEmail}
                                    onChange={(e) => onInputChange('clientEmail', e.target.value)}
                                    className="form-input"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Payor Section */}
                <div>
                    <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
                        2. {ui.payorSection}
                    </h3>
                    <div className="payor-toggle-box mb-4">
                        <label className="cursor-pointer">{ui.hasPayor}</label>
                        <select
                            value={formValues.hasPayor}
                            onChange={(e) => onInputChange('hasPayor', e.target.value)}
                            className="form-select"
                            style={{ maxWidth: '100px', padding: '0.4rem 0.5rem', fontSize: '0.75rem' }}
                        >
                            <option value="true">{ui.yes}</option>
                            <option value="false">{ui.no}</option>
                        </select>
                    </div>

                    {formValues.hasPayor === 'true' ? (
                        <div className="space-y-4 animate-fade-in">
                            <div className="form-group">
                                <label>{ui.payorName}</label>
                                <input
                                    type="text"
                                    value={formValues.payorName}
                                    onChange={(e) => onInputChange('payorName', e.target.value)}
                                    className="form-input"
                                    placeholder={ui.payorNamePlaceholder}
                                />
                            </div>
                            <div className="form-group">
                                <label>{ui.payorRelation}</label>
                                <input
                                    type="text"
                                    value={formValues.payorRelation}
                                    onChange={(e) => onInputChange('payorRelation', e.target.value)}
                                    className="form-input"
                                    placeholder={ui.payorRelationPlaceholder}
                                />
                            </div>
                            <div className="form-group">
                                <label>{ui.payorAddress}</label>
                                <input
                                    type="text"
                                    value={formValues.payorAddress}
                                    onChange={(e) => onInputChange('payorAddress', e.target.value)}
                                    className="form-input"
                                />
                            </div>
                            <div className="grid-2-cols">
                                <div className="form-group">
                                    <label>{ui.payorPhone}</label>
                                    <input
                                        type="text"
                                        value={formValues.payorPhone}
                                        onChange={(e) => onInputChange('payorPhone', e.target.value)}
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{ui.payorEmail}</label>
                                    <input
                                        type="email"
                                        value={formValues.payorEmail}
                                        onChange={(e) => onInputChange('payorEmail', e.target.value)}
                                        className="form-input"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500 italic text-sm py-2">
                            {ui.noPayorMsg}
                        </p>
                    )}
                </div>

                {/* 4. Case Details */}
                <div>
                    <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
                        3. {ui.detailsSection}
                    </h3>
                    <div className="space-y-4">
                        <div className="form-group">
                            <label>{ui.purpose}</label>
                            <textarea
                                rows={3}
                                value={formValues.purpose}
                                onChange={(e) => onInputChange('purpose', e.target.value)}
                                className="form-input w-full resize-none leading-relaxed"
                                placeholder={ui.purposePlaceholder}
                            />
                        </div>
                        <div className="grid-2-cols">
                            <div className="form-group">
                                <label>{ui.agreementDate}</label>
                                <input
                                    type="date"
                                    value={formValues.agreementDate}
                                    onChange={(e) => onInputChange('agreementDate', e.target.value)}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label>{ui.preparedBy}</label>
                                <input
                                    type="text"
                                    maxLength={3}
                                    value={formValues.preparedBy}
                                    onChange={(e) => onInputChange('preparedBy', e.target.value.toUpperCase())}
                                    className="form-input uppercase"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Fees Section */}
                <div>
                    <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
                        4. {ui.feesSection}
                    </h3>
                    <div className="space-y-4">
                        <div className="grid-2-cols">
                            <div className="form-group">
                                <label>{ui.flatFee}</label>
                                <input
                                    type="number"
                                    value={formValues.flatFee}
                                    onChange={(e) => onInputChange('flatFee', e.target.value)}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label>{ui.initialPayment}</label>
                                <input
                                    type="number"
                                    value={formValues.initialPayment}
                                    onChange={(e) => onInputChange('initialPayment', e.target.value)}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div className="payor-toggle-box mb-4">
                            <label className="cursor-pointer">{ui.hasPaymentPlan}</label>
                            <select
                                value={formValues.hasPaymentPlan}
                                onChange={(e) => onInputChange('hasPaymentPlan', e.target.value)}
                                className="form-select"
                                style={{ maxWidth: '100px', padding: '0.4rem 0.5rem', fontSize: '0.75rem' }}
                            >
                                <option value="true">{ui.yes}</option>
                                <option value="false">{ui.no}</option>
                            </select>
                        </div>

                        {formValues.hasPaymentPlan === 'true' && (
                            <div className="grid-2-cols animate-fade-in">
                                <div className="form-group">
                                    <label>{ui.monthlyPayment}</label>
                                    <input
                                        type="number"
                                        value={formValues.monthlyPayment}
                                        onChange={(e) => onInputChange('monthlyPayment', e.target.value)}
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{ui.paymentStartDate}</label>
                                    <input
                                        type="date"
                                        value={formValues.paymentStartDate}
                                        onChange={(e) => onInputChange('paymentStartDate', e.target.value)}
                                        className="form-input"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* 6. Signatures Panel */}
                <div className="bg-[#0b0d13] p-5 rounded-lg border border-gray-800">
                    <div className="flex-between mb-4">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#F3E5AB]">
                            {ui.signatureSection}
                        </label>
                        <div className="flex gap-2">
                            <button
                                onClick={() => onSigColorChange('#0F2A4A')}
                                className={`w-4 h-4 rounded-full border ${sigColor === '#0F2A4A' ? 'border-[#D4AF37] scale-125' : 'border-transparent'}`}
                                style={{ backgroundColor: '#0F2A4A' }}
                            />
                            <button
                                onClick={() => onSigColorChange('#111827')}
                                className={`w-4 h-4 rounded-full border ${sigColor === '#111827' ? 'border-[#D4AF37] scale-125' : 'border-transparent'}`}
                                style={{ backgroundColor: '#111827' }}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <span className="text-[10px] text-gray-400 block mb-1">{ui.clientSignature}</span>
                            <input
                                type="text"
                                value={signatureText}
                                placeholder={ui.signaturePlaceholder}
                                onChange={(e) => onSignatureChange(e.target.value)}
                                className="form-input italic"
                                style={{ fontFamily: 'var(--font-cursive)', fontSize: '1.25rem', color: sigColor }}
                            />
                        </div>

                        {formValues.hasPayor === 'true' && formValues.payorName && (
                            <div className="animate-fade-in">
                                <span className="text-[10px] text-gray-400 block mb-1">{ui.payorSignature}</span>
                                <input
                                    type="text"
                                    value={payorSignatureText}
                                    placeholder={ui.signaturePlaceholder}
                                    onChange={(e) => onPayorSignatureChange(e.target.value)}
                                    className="form-input italic"
                                    style={{ fontFamily: 'var(--font-cursive)', fontSize: '1.25rem', color: sigColor }}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <button
                    onClick={onExport}
                    disabled={isExporting || !signatureText}
                    className="btn-primary w-full"
                >
                    {isExporting ? (
                        <>
                            <RefreshCw className="animate-spin w-5 h-5" />
                            {ui.exportingBtn}
                        </>
                    ) : (
                        <>
                            <PenTool className="w-5 h-5" />
                            {ui.exportBtn}
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
