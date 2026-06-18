import React from 'react';
import { Shield, Globe, PenTool } from 'lucide-react';
import type { Translations } from '../i18n/translations';
import type { FormValues } from '../types';
import type { Lang } from '../i18n/translations';

interface FormPanelProps {
    lang: Lang;
    ui: Translations;
    formValues: FormValues;
    signatureText: string;
    payorSignatureText: string;
    sigColor: string;
    remainingBalance: number | null;
    onInputChange: (field: string, value: string) => void;
    onSignatureChange: (value: string) => void;
    onPayorSignatureChange: (value: string) => void;
    onSigColorChange: (color: string) => void;
    onExport: () => void;
    setLang: (lang: Lang) => void;
}

const OptLabel = ({
    children,
    optional,
    lang,
}: {
    children: React.ReactNode;
    optional?: boolean;
    lang: Lang;
}) => (
    <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {children}
        {optional && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '1px', fontWeight: 400, textTransform: 'uppercase' }}>
                {lang === 'es' ? 'opcional' : 'optional'}
            </span>
        )}
    </span>
);

export function FormPanel({
    lang,
    ui,
    formValues,
    signatureText,
    payorSignatureText,
    sigColor,
    remainingBalance,
    onInputChange,
    onSignatureChange,
    onPayorSignatureChange,
    onSigColorChange,
    onExport,
    setLang,
}: FormPanelProps) {
    return (
        <div className="panel">

            <div className="panel-sticky-header flex-between">
                <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold-light)' }}>
                        {ui.parametersTitle}
                    </span>
                </div>
            </div>

            <div className="space-y-0 pb-8">

                {/* Language */}
                <div className="form-section">
                    <div className="section-header">
                        <Globe size={11} style={{ color: 'var(--gold)' }} />
                        <span className="section-title">{ui.languageLabel}</span>
                    </div>
                    <div className="lang-toggle">
                        <button onClick={() => setLang('es')} className={`lang-btn ${lang === 'es' ? 'active' : ''}`}>
                            🇪🇸 Español
                        </button>
                        <button onClick={() => setLang('en')} className={`lang-btn ${lang === 'en' ? 'active' : ''}`}>
                            🇺🇸 English
                        </button>
                    </div>
                </div>

                {/* 01 — Client Section */}
                <div className="form-section">
                    <div className="section-header">
                        <span className="section-number">01</span>
                        <span className="section-title">{ui.clientSection}</span>
                    </div>
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
                            <label><OptLabel optional lang={lang}>{ui.clientAddress}</OptLabel></label>
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
                                <label><OptLabel optional lang={lang}>{ui.clientPhone}</OptLabel></label>
                                <input
                                    type="text"
                                    value={formValues.clientPhone}
                                    onChange={(e) => onInputChange('clientPhone', e.target.value)}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label><OptLabel optional lang={lang}>{ui.clientEmail}</OptLabel></label>
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

                {/* 02 — Payor Section */}
                <div className="form-section">
                    <div className="section-header">
                        <span className="section-number">02</span>
                        <span className="section-title">{ui.payorSection}</span>
                    </div>
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
                                <label><OptLabel optional lang={lang}>{ui.payorAddress}</OptLabel></label>
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
                                    <label><OptLabel optional lang={lang}>{ui.payorEmail}</OptLabel></label>
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

                {/* 03 — Case Details */}
                <div className="form-section">
                    <div className="section-header">
                        <span className="section-number">03</span>
                        <span className="section-title">{ui.detailsSection}</span>
                    </div>
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

                {/* 04 — Fees Section */}
                <div className="form-section">
                    <div className="section-header">
                        <span className="section-number">04</span>
                        <span className="section-title">{ui.feesSection}</span>
                    </div>
                    <div className="space-y-4">
                        <div className="grid-2-cols">
                            <div className="form-group">
                                <label>{ui.flatFee}</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={formValues.flatFee}
                                    onChange={(e) => onInputChange('flatFee', e.target.value)}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label>{ui.initialPayment}</label>
                                <input
                                    type="number"
                                    min="0"
                                    max={formValues.flatFee || undefined}
                                    value={formValues.initialPayment}
                                    onChange={(e) => onInputChange('initialPayment', e.target.value)}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        {remainingBalance !== null && remainingBalance > 0 && (
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '1px', padding: '0.4rem 0.6rem', border: '1px solid var(--gold-border)', background: 'var(--gold-bg)' }}>
                                {lang === 'es' ? 'Saldo pendiente:' : 'Remaining balance:'} <strong>${remainingBalance.toLocaleString()}</strong>
                            </div>
                        )}
                        {remainingBalance === 0 && formValues.flatFee && (
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#34D399', letterSpacing: '1px', padding: '0.4rem 0.6rem', border: '1px solid rgba(52,211,153,0.2)', background: 'rgba(52,211,153,0.05)' }}>
                                {lang === 'es' ? 'Pago completo al firmar' : 'Full payment at signing'}
                            </div>
                        )}

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
                                        min="0"
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

                {/* Signatures Panel */}
                <div className="form-section">
                    <div className="flex-between mb-4">
                        <div className="section-header" style={{ marginBottom: 0 }}>
                            <PenTool size={11} style={{ color: 'var(--gold)' }} />
                            <span className="section-title">{ui.signatureSection}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button
                                onClick={() => onSigColorChange('#0F2A4A')}
                                title="Ink: Navy"
                                style={{ width: 14, height: 14, borderRadius: '50%', background: '#0F2A4A', border: sigColor === '#0F2A4A' ? '2px solid var(--gold)' : '2px solid transparent', cursor: 'pointer', padding: 0 }}
                            />
                            <button
                                onClick={() => onSigColorChange('#111827')}
                                title="Ink: Black"
                                style={{ width: 14, height: 14, borderRadius: '50%', background: '#111827', border: sigColor === '#111827' ? '2px solid var(--gold)' : '2px solid transparent', cursor: 'pointer', padding: 0 }}
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
                    disabled={!signatureText}
                    className="btn-primary w-full"
                    style={{ marginTop: '1.5rem' }}
                >
                    <PenTool size={14} />
                    {ui.exportBtn}
                </button>
            </div>
        </div>
    );
}
