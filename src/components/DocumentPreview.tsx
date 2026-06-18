import logo from '../assets/logo.png';
import type { Translations } from '../i18n/translations';
import type { FormValues } from '../types';

interface DocumentPreviewProps {
    ui: Translations;
    formValues: FormValues;
    signatureText: string;
    payorSignatureText: string;
    sigColor: string;
    activeField: string;
}

export function DocumentPreview({
    ui,
    formValues,
    signatureText,
    payorSignatureText,
    sigColor,
    activeField,
}: DocumentPreviewProps) {
    const getHighlightClass = (field: string) =>
        `paper-highlight ${activeField === field ? 'pulse' : ''}`;

    return (
        <div className="document-container">
            <div className="paper">

                {/* Header / Membrete */}
                <div className="flex-between mb-6 pb-2" style={{ borderBottom: '2px solid black', alignItems: 'flex-end' }}>
                    <div className="brand-section">
                        <img src={logo} alt="Mario Varela Law Firm" style={{ height: '65px', objectFit: 'contain', display: 'block' }} />
                    </div>
                    <div style={{ fontFamily: 'Times New Roman, serif', fontSize: '10pt', textAlign: 'right', fontWeight: 'bold', lineHeight: '1.4' }}>
                        <div>8554 Katy Fwy, Ste 340</div>
                        <div>Houston TX 77024</div>
                        <div style={{ textDecoration: 'underline' }}>mvarela@varela.law</div>
                        <div>Ph. (713) 684-3550</div>
                    </div>
                </div>

                <h1 className="paper-title" style={{ fontSize: '11pt', marginTop: '2rem' }}>
                    {ui.documentTitle}
                </h1>

                {/* Contract body */}
                <div>
                    <h3 className="paper-clause h3">{ui.docParties}</h3>
                    <p className="paper-clause">{ui.docPartiesText}</p>
                    <ol className="legal-list">
                        <li>
                            <strong>1. {ui.docFirm}</strong> {ui.docFirmAddress}
                        </li>
                        <li>
                            <strong>2. {ui.docClient}</strong>{' '}
                            <span className={getHighlightClass('clientName')} style={{ minWidth: '350px' }}>
                                {formValues.clientName || ''}
                            </span>
                            {ui.docClientText}
                        </li>
                        {formValues.hasPayor === 'true' && (
                            <li>
                                <strong>3. {ui.docPayorTitle}</strong>{' '}
                                <span className={getHighlightClass('payorName')} style={{ minWidth: '350px' }}>
                                    {formValues.payorName || ''}
                                </span>
                                {ui.docPayorText}
                            </li>
                        )}
                    </ol>

                    <h3 className="paper-clause h3">{ui.docPurposeTitle}</h3>
                    <p className="paper-clause">
                        {ui.docPurposeText1}
                        <span className={getHighlightClass('purpose')} style={{ minWidth: '400px' }}>
                            {formValues.purpose || ''}
                        </span>
                        {ui.docPurposeText2}
                    </p>

                    <h3 className="paper-clause h3">{ui.docFeesTitle}</h3>
                    <p className="paper-clause">
                        {ui.docFeesText1}
                        <span className={getHighlightClass('flatFee')} style={{ minWidth: '80px' }}>
                            {formValues.flatFee || ''}
                        </span>
                        {ui.docFeesText2}
                        <span className={getHighlightClass('initialPayment')} style={{ minWidth: '80px' }}>
                            {formValues.initialPayment || ''}
                        </span>
                        {ui.docFeesText3}
                    </p>

                    {formValues.hasPaymentPlan === 'true' && (
                        <p className="paper-clause">
                            <strong>{ui.docPaymentPlan}</strong>
                            <span className={getHighlightClass('monthlyPayment')} style={{ minWidth: '80px' }}>
                                {formValues.monthlyPayment || ''}
                            </span>
                            {ui.docPaymentPlanStart}
                            <span className={getHighlightClass('paymentStartDate')} style={{ minWidth: '150px' }}>
                                {formValues.paymentStartDate || ''}
                            </span>.
                        </p>
                    )}

                    <p className="paper-clause">{ui.docFeesExtraText1}</p>
                    <p className="paper-clause">{ui.docFeesExtraText2}</p>
                    <p className="paper-clause">{ui.docFeesExtraText3}</p>
                    <p className="paper-clause">{ui.docFeesExtraText4}</p>

                    <p className="paper-clause">
                        <strong>{ui.docRespPayTitle}</strong> {ui.docRespPayText}
                    </p>

                    <p className="paper-clause">
                        <strong>{ui.docHourlyTitle}</strong> {ui.docHourlyText}
                    </p>

                    <h3 className="paper-clause h3">{ui.docRespTitle}</h3>
                    <p className="paper-clause"><strong>{ui.docRespIntro}</strong></p>
                    <ul className="legal-list" style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
                        {ui.docRespList.map((item, idx) => (
                            <li key={idx} className="mb-2">{item}</li>
                        ))}
                    </ul>
                    <p className="paper-clause">{ui.docRespOutro}</p>

                    <h3 className="paper-clause h3">{ui.docConfTitle}</h3>
                    <p className="paper-clause">{ui.docConfText1}</p>

                    <h3 className="paper-clause h3">{ui.docRescTitle}</h3>
                    <p className="paper-clause">{ui.docRescText1}</p>
                    <p className="paper-clause">{ui.docRescText2}</p>
                    <p className="paper-clause">{ui.docRescText3}</p>

                    <h3 className="paper-clause h3">{ui.docCostsTitle}</h3>
                    <p className="paper-clause">{ui.docCostsText1}</p>

                    <h3 className="paper-clause h3">{ui.docBarTitle}</h3>
                    <p className="paper-clause">{ui.docBarText}</p>

                    <h3 className="paper-clause h3">{ui.docGuarTitle}</h3>
                    <p className="paper-clause">{ui.docGuarText}</p>

                    <h3 className="paper-clause h3">{ui.docConflictTitle}</h3>
                    <p className="paper-clause">{ui.docConflictText}</p>
                </div>

                {/* Signing date */}
                <div style={{ marginTop: '3rem', fontSize: '10pt', textAlign: 'left', marginBottom: '2rem' }}>
                    <span>
                        {ui.signedDate}{' '}
                        <span className={getHighlightClass('agreementDate')} style={{ minWidth: '200px' }}>
                            {formValues.agreementDate || ''}
                        </span>
                    </span>
                </div>

                {/* Signature blocks */}
                <div className="paper-signature-line">
                    <div className="sig-block">
                        <div className="digital-signature" style={{ color: sigColor }}>
                            {signatureText || ''}
                        </div>
                        <div style={{ borderTop: '1px solid black', paddingTop: '4px' }}>
                            {ui.docClientSig}{ui.orContact}
                        </div>
                    </div>

                    <div className="sig-block">
                        <div className="digital-signature" style={{ color: sigColor }}>
                            Mario Varela
                        </div>
                        <div style={{ borderTop: '1px solid black', paddingTop: '4px' }}>
                            {ui.docAttySig}, Mario Varela
                        </div>
                    </div>

                    {formValues.hasPayor === 'true' && formValues.payorName && (
                        <div className="sig-block" style={{ gridColumn: 'span 2' }}>
                            <div className="digital-signature" style={{ color: sigColor }}>
                                {payorSignatureText || ''}
                            </div>
                            <div style={{ borderTop: '1px solid black', paddingTop: '4px' }}>
                                {ui.docPayorSig}
                            </div>
                        </div>
                    )}
                </div>

                {/* Client / Payor info card */}
                <div className="contract-details-card">
                    <div>
                        <div className="contract-details-header">{ui.docClientInfo}:</div>
                        <div>{ui.labelName} <span className={getHighlightClass('clientName')} style={{ minWidth: '250px' }}>{formValues.clientName || ''}</span></div>
                        <div>{ui.labelAddress} <span className={getHighlightClass('clientAddress')} style={{ minWidth: '250px' }}>{formValues.clientAddress || ''}</span></div>
                        <div>{ui.labelPhone} <span className={getHighlightClass('clientPhone')} style={{ minWidth: '250px' }}>{formValues.clientPhone || ''}</span></div>
                        <div>{ui.labelEmail} <span className={getHighlightClass('clientEmail')} style={{ minWidth: '250px' }}>{formValues.clientEmail || ''}</span></div>
                    </div>

                    {formValues.hasPayor === 'true' && formValues.payorName ? (
                        <div style={{ marginTop: '1.5rem' }}>
                            <div className="contract-details-header">{ui.docPayorInfo}:</div>
                            <div>{ui.labelName} <span className={getHighlightClass('payorName')} style={{ minWidth: '250px' }}>{formValues.payorName || ''}</span></div>
                            <div>{ui.labelAddress} <span className={getHighlightClass('payorAddress')} style={{ minWidth: '250px' }}>{formValues.payorAddress || ''}</span></div>
                            <div>{ui.labelPhone} <span className={getHighlightClass('payorPhone')} style={{ minWidth: '250px' }}>{formValues.payorPhone || ''}</span></div>
                            <div>{ui.labelEmail} <span className={getHighlightClass('payorEmail')} style={{ minWidth: '250px' }}>{formValues.payorEmail || ''}</span></div>
                            <div>{ui.labelRelation} <span className={getHighlightClass('payorRelation')} style={{ minWidth: '150px' }}>{formValues.payorRelation || ''}</span></div>
                        </div>
                    ) : null}
                </div>

                {/* Internal use footer */}
                <div style={{ marginTop: '3rem', textAlign: 'right', fontSize: '9pt', fontWeight: 'bold' }}>
                    Internal Use Only - Contract Prepared By:{' '}
                    <span className={getHighlightClass('preparedBy')} style={{ minWidth: '40px' }}>
                        {formValues.preparedBy || ''}
                    </span>
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '8pt', fontWeight: 'bold', borderTop: '1px solid black', paddingTop: '1rem' }}>
                    8554 KATY FWY STE 340, HOUSTON, TEXAS 77024 • MVARELA@VARELA.LAW • TEL: (713) 684-3550
                </div>
            </div>
        </div>
    );
}
