import React, { useState } from 'react';
import logo from './assets/logo.png';
import {
  Shield,
  CheckCircle2,
  PenTool,
  Scale,
  Globe
} from 'lucide-react';

const t = {
  es: {
    languageLabel: "Idioma del Contrato",
    parametersTitle: "Parámetros del Contrato",
    clientSection: "Información del Cliente",
    clientName: "Nombre del Cliente",
    clientNamePlaceholder: "ej. Abel Ramales Flores",
    clientAddress: "Dirección Físca",
    clientAddressPlaceholder: "ej. 1006 S second Conroe, TX 77301",
    clientPhone: "Teléfono",
    clientEmail: "Correo Electrónico",
    payorSection: "Contacto Alterno / Responsable de Pago",
    hasPayor: "¿Aplica Contacto Alterno / Responsable de Pago?",
    yes: "Sí",
    no: "No",
    payorName: "Nombre Completo",
    payorNamePlaceholder: "ej. Enrique Martinez",
    payorRelation: "Relación con el Cliente",
    payorRelationPlaceholder: "ej. Hermano, Companero de la Iglesia",
    payorAddress: "Dirección (Opcional)",
    payorPhone: "Teléfono",
    payorEmail: "Email (Opcional)",
    noPayorMsg: "El contrato no incluirá un contacto de respaldo o responsable financiero.",
    detailsSection: "Detalles del Caso",
    purpose: "Asunto de la Representación",
    purposePlaceholder: "ej. Representacion caso de remocion",
    agreementDate: "Fecha de Firma",
    preparedBy: "Preparado por (Iniciales)",
    feesSection: "Honorarios y Pagos",
    flatFee: "Honorario Fijo ($)",
    initialPayment: "Pago al Firmar ($)",
    hasPaymentPlan: "¿Requiere Plan de Pagos Mensuales?",
    monthlyPayment: "Cuota Mensual ($)",
    paymentStartDate: "Comenzando el",
    signatureSection: "Firma Digital",
    clientSignature: "FIRMA DEL CLIENTE",
    payorSignature: "FIRMA DEL RESPONSABLE",
    signaturePlaceholder: "Escribe tu nombre para firmar",
    exportBtn: "Firmar y Exportar PDF",
    exportingBtn: "Generando PDF...",
    documentTitle: "CONTRATO DE REPRESENTACIÓN LEGAL – HONORARIOS FIJOS",
    docParties: "PARTES DE ESTE ACUERDO",
    docPartiesText: "Para efectos de este contrato, intervienen las siguientes partes:",
    docFirm: "La Firma:",
    docFirmAddress: "THE VARELA LAW OFFICE, PLLC, radicada en 8554 Katy Fwy, Suite 340, Houston, TX 77024.",
    docClient: "El Cliente:",
    docClientText: ", quien será la persona beneficiaria de la representación legal descrita en este documento.",
    docPayorTitle: "El Responsable de pago (si aplica):",
    docPayorText: ", persona que cubrirá los honorarios en nombre del Cliente. El Responsable de pago no será considerado Cliente ni tendrá derecho a confidencialidad, salvo autorización expresa y por escrito de la Firma.",
    docPurposeTitle: "PROPÓSITO",
    docPurposeText1: "La Firma representará al Cliente en el siguiente asunto: ",
    docPurposeText2: ". La representación se limita a los servicios necesarios para completar dicho asunto. Cualquier apelación, moción o trámite adicional no expresamente incluido requerirá un nuevo contrato o honorarios adicionales.",
    docFeesTitle: "HONORARIOS",
    docFeesText1: "El Cliente acuerda pagar a la Firma un honorario fijo de $",
    docFeesText2: ", de los cuales $",
    docFeesText3: " se pagará al momento de la firma. Este pago inicial constituye un honorario fijo devengado al recibirse que cubre la configuración administrativa, verificación de conflictos, configuración en el sistema electrónico de administración de casos, apertura del expediente, revisión preliminar de hechos, consideraciones iniciales de estrategia y el compromiso de recursos y disponibilidad de la Firma.",
    docPaymentPlan: "Plan de Pagos: Pagos mensuales de $",
    docPaymentPlanStart: " comenzando el ",
    docFeesExtraText1: "A discreción exclusiva de la Firma, podrá autorizarse un reembolso parcial únicamente si el Cliente cancela este contrato dentro de las veinticuatro (24) horas posteriores a la firma. En cualquier caso, la Firma retendrá al menos el 10% del honorario fijo total, o $350, lo que sea mayor, como honorario mínimo devengado. El Cliente reconoce y acepta que, si no cumple con el plan de pagos, la Firma podrá retener cualquier documento hasta que la cuenta esté al corriente y/o suspender el trabajo en la siguiente etapa del proceso.",
    docFeesExtraText2: "Si el Cliente elige un plan de pagos, cada cuota deberá pagarse puntualmente. El Cliente reconoce y acepta que, si un pago no se recibe durante el mes calendario en que vence, se impondrá un cargo por mora de $50. Si se omiten dos pagos consecutivos, la Firma podrá suspender los servicios hasta que la cuenta esté al corriente.",
    docFeesExtraText3: "El Cliente reconoce y acepta que los saldos no pagados podrán devengar intereses al 1.5% mensual (18% anual), o un mínimo de $50 por mes, lo que sea mayor.",
    docFeesExtraText4: "El Cliente reconoce y acepta que, en caso de cambios en las leyes o regulaciones por parte de agencias o tribunales, la Firma podrá realizar un ajuste de honorarios conforme sea necesario.",
    docRespPayTitle: "Responsabilidad de pago:",
    docRespPayText: "El Cliente reconoce y acepta que, aun cuando exista un Responsable de pago, el Cliente sigue siendo responsable en última instancia del pago íntegro de los honorarios y gastos establecidos en este contrato. El Responsable de pago, al firmar este contrato, asume de manera conjunta la obligación de cubrir dichos honorarios y gastos. La Firma podrá exigir el pago indistintamente al Cliente o al Responsable de pago, o a ambos.",
    docHourlyTitle: "Cambio a Honorarios por Hora:",
    docHourlyText: "Aunque este acuerdo es de honorarios fijos, el Cliente reconoce y acepta que la Firma podrá cambiar a honorarios por hora si surgen requisitos imprevistos de agencias, tribunales o cambios legales o cambios en estrategia legal. En tal caso, se aplicarán las tarifas vigentes de la Firma y el Cliente podrá continuar o terminar la representación conforme a la sección de Rescisión.",
    docRespTitle: "RESPONSABILIDADES DEL CLIENTE",
    docRespIntro: "El Cliente se compromete a:",
    docRespList: [
      "(a) Proporcionar la información y los documentos necesarios de manera oportuna;",
      "(b) Asistir a audiencias, juicios, deposiciones, etc. según se requiera, aunque la citación o aviso se reciba con poca anticipación;",
      "(c) Notificar de inmediato a la Firma cualquier cambio de dirección, teléfono o correo electrónico;",
      "(d) Mantener comunicación regular y responder a las solicitudes de la Firma; y",
      "(e) Pagar puntualmente los honorarios, costos y cuotas."
    ],
    docRespOutro: "El incumplimiento de estas responsabilidades podrá dar lugar a la suspensión de los servicios o a la retirada de la representación por parte de la Firma.",
    docConfTitle: "CONFIDENCIALIDAD Y ACCESO A LA INFORMACIÓN",
    docConfText1: "La Firma tiene el deber de mantener en confidencialidad toda la información proporcionada por el Cliente. El Responsable de pago, en caso de ser distinto al Cliente, no tendrá acceso automático a información confidencial relacionada con el caso. El Cliente podrá autorizar por escrito qué información específica podrá compartirse con el Responsable de pago (por ejemplo, estado general del caso, confirmación de audiencias o recibos de pago). Sin dicha autorización, la Firma limitará la comunicación con el Responsable de pago a asuntos estrictamente administrativos de facturación y cobro.",
    docRescTitle: "RESCISIÓN",
    docRescText1: "La representación terminará al completar los servicios enunciados anteriormente. Igualmente, tanto el Cliente como la Firma podrán rescindir este contrato en cualquier momento, ya sea por causa o sin causa, previa notificación a la otra parte, aunque el derecho de rescisión de la Firma puede estar limitado por las Normas de Conducta Profesional del Estado de Texas.",
    docRescText2: "Si el Cliente rescinde, o si la Firma se retira conforme a la ley, el Cliente seguirá siendo responsable de todos los honorarios devengados y costos incurridos hasta la fecha de la rescisión. Se aplicará un cargo mínimo de cancelación de $350 para cubrir gastos administrativos iniciales.",
    docRescText3: "La Firma podrá suspender o retirarse si el Cliente no coopera, no proporciona la información necesaria, no asiste a las audiencias requeridas, no mantiene comunicación, o no está al corriente en sus pagos.",
    docCostsTitle: "GASTOS NO INCLUIDOS EN LOS HONORARIOS",
    docCostsText1: "En el curso de la prestación de servicios para el Cliente, es posible que sea necesario incurrir en gastos que no son propiamente honorarios, tales como pagos requeridos por agencias gubernamentales para la recepción y procesamiento de solicitudes (“filing fees”), gastos de viaje y hospedaje, servicios de traductores, mediadores, profesionistas o peritos (expertos), mensajería, traducciones adicionales, o asistencia administrativa especial. Algunos de estos gastos pueden ser opcionales o recomendados, y antes de incurrir en ellos, la Firma buscará la aprobación del Cliente. Dichos gastos serán facturados conforme se generen. A elección de la Firma, ciertos servicios pagaderos a terceros deberán ser cubiertos directamente por el Cliente al proveedor correspondiente, incluyendo, por ejemplo, pagos a traductores y mediadores.",
    docBarTitle: "NOTIFICACIÓN DE LA BARRA DE ABOGADOS DEL ESTADO DE TEXAS",
    docBarText: "El Código del Gobierno de Texas requiere que se notifique al Cliente que la Barra de Abogados del Estado de Texas investiga la mala conducta profesional cometida por abogados de Texas. Aunque no todas las quejas o disputas con un abogado involucran mala conducta profesional, la Barra de Abogados del Estado de Texas proporcionará información si llama al 800-932-1900.",
    docGuarTitle: "LO QUE LA FIRMA NO PUEDE GARANTIZAR",
    docGuarText: "El Cliente reconoce y acepta que la agencia gubernamental correspondiente tomará la decisión del caso y, por lo tanto, la Firma no puede garantizar resultados favorables. El Cliente reconoce y acepta que la Firma no puede controlar el tiempo que se demora la agencia gubernamental correspondiente en tramitar una solicitud, aplicación o trámite. El Cliente reconoce y acepta que cualquier demora por parte de la agencia gubernamental correspondiente no constituirá causa para suspender o dejar de pagar los honorarios debidos bajo este contrato. Todas las declaraciones de nuestro personal son solo opiniones.",
    docConflictTitle: "RESOLUCIÓN DE CONFLICTOS",
    docConflictText: "Cualquier disputa relacionada con honorarios deberá presentarse en primera instancia al Programa de Resolución de Disputas de Honorarios de la Barra de Abogados del Estado de Texas. La decisión emitida en dicho programa será obligatoria para ambas partes de acuerdo con sus reglas. Si la disputa no se resuelve a través de dicho programa, las partes acuerdan que cualquier litigio posterior se resolverá exclusivamente en el Condado de Harris, Texas. Las partes podrán acordar la mediación antes de iniciar el litigio.",
    docAttySig: "Firma del Abogado",
    docClientSig: "Firma del Cliente",
    docPayorSig: "Firma de Contacto / Pago",
    docElectronicallyAuth: "Autenticado Electrónicamente",
    docSigReq: "Firma Requerida",
    docClientInfo: "Información del Cliente",
    docPayorInfo: "Información Responsable de Pago (si es distinto al Cliente)",
    signedDate: "Firmado y aceptado con fecha de:",
    orContact: " o Contacto",
    labelName: "Nombre:",
    labelAddress: "Dirección:",
    labelPhone: "Teléfono:",
    labelEmail: "Email:",
    labelRelation: "Relación con el Cliente:"
  },
  en: {
    languageLabel: "Contract Language",
    parametersTitle: "Contract Parameters",
    clientSection: "Client Information",
    clientName: "Client Name",
    clientNamePlaceholder: "e.g. Peggy Davis",
    clientAddress: "Physical Address",
    clientAddressPlaceholder: "e.g. 3522 Brunswick Meadows, Houston TX 77035",
    clientPhone: "Phone Number",
    clientEmail: "Email Address",
    payorSection: "Alternate Contact / Payor",
    hasPayor: "Include Alternate Contact / Payor?",
    yes: "Yes",
    no: "No",
    payorName: "Full Name",
    payorNamePlaceholder: "e.g. Rhonda Boutte",
    payorRelation: "Relationship to Client",
    payorRelationPlaceholder: "e.g. Sister, Friend",
    payorAddress: "Address (Optional)",
    payorPhone: "Phone Number",
    payorEmail: "Email (Optional)",
    noPayorMsg: "The contract will not include a backup contact or financial guarantor.",
    detailsSection: "Case Details",
    purpose: "Purpose of Representation",
    purposePlaceholder: "e.g. Last Will and Testament",
    agreementDate: "Agreement Date",
    preparedBy: "Prepared By (Initials)",
    feesSection: "Fees and Payments",
    flatFee: "Flat Fee ($)",
    initialPayment: "Paid at Signing ($)",
    hasPaymentPlan: "Requires Monthly Payment Plan?",
    monthlyPayment: "Monthly Payment ($)",
    paymentStartDate: "Starting Date",
    signatureSection: "Digital Signature",
    clientSignature: "CLIENT SIGNATURE",
    payorSignature: "PAYOR SIGNATURE",
    signaturePlaceholder: "Type your name to sign",
    exportBtn: "Affix Signatures & Export PDF",
    exportingBtn: "Generating PDF...",
    documentTitle: "LEGAL REPRESENTATION AGREEMENT – FLAT FEE",
    docParties: "PARTIES TO THIS AGREEMENT",
    docPartiesText: "For the purposes of this contract, the following parties are involved:",
    docFirm: "The Firm:",
    docFirmAddress: "THE VARELA LAW OFFICE, PLLC, located at 8554 Katy Fwy, Suite 340, Houston, TX 77024.",
    docClient: "The Client:",
    docClientText: ", who will be the person receiving the legal services described in this Agreement.",
    docPayorTitle: "The Payor (if applicable):",
    docPayorText: ", person who will cover the fees on behalf of the Client. The Payor will not be considered a Client nor have the right to confidentiality, unless expressly authorized in writing by the Firm.",
    docPurposeTitle: "PURPOSE",
    docPurposeText1: "The Firm will represent the Client in the following matter: ",
    docPurposeText2: ". Representation is limited to the services necessary to complete this matter. Any appeal, motion, or additional proceeding not expressly included will require a new contract or additional fees.",
    docFeesTitle: "FEES",
    docFeesText1: "The Client agrees to pay the Firm a flat fee of $",
    docFeesText2: ", of which $",
    docFeesText3: " shall be paid at the time of signing. This initial payment is a non-refundable earned fee upon receipt that covers administrative setup, conflict verification, case management system entry, file opening, preliminary fact review, initial strategy considerations, and the Firm's resource commitment.",
    docPaymentPlan: "Payment Plan: Monthly payments of $",
    docPaymentPlanStart: " commencing on ",
    docFeesExtraText1: "At the Firm's sole discretion, a partial refund may be authorized only if the Client cancels this contract within twenty-four (24) hours of signing. In any case, the Firm will retain at least 10% of the total flat fee, or $350, whichever is greater, as a minimum earned fee. The Client acknowledges and agrees that failure to comply with the payment plan may result in the Firm withholding documents until the account is current and/or suspending work at the next stage of the process.",
    docFeesExtraText2: "If the Client chooses a payment plan, each installment must be paid promptly. The Client acknowledges and agrees that if a payment is not received during the calendar month it is due, a late fee of $50 will be imposed. If two consecutive payments are missed, the Firm may suspend services until the account is current.",
    docFeesExtraText3: "The Client acknowledges and agrees that unpaid balances may accrue interest at 1.5% per month (18% per year), or a minimum of $50 per month, whichever is greater.",
    docFeesExtraText4: "The Client acknowledges and agrees that in case of changes in laws or regulations by agencies or courts, the Firm may perform a fee adjustment as necessary.",
    docRespPayTitle: "Payment Responsibility:",
    docRespPayText: "The Client acknowledges and agrees that even when a Payor exists, the Client remains ultimately responsible for full payment of fees and costs. The Payor, by signing this contract, jointly assumes the obligation to cover such fees and costs. The Firm may demand payment from either the Client or the Payor, or both.",
    docHourlyTitle: "Change to Hourly Fees:",
    docHourlyText: "Although this is a flat fee agreement, the Client acknowledges and agrees that the Firm may switch to hourly fees if unforeseen requirements from agencies, courts, or legal changes arise, or if there's a change in legal strategy. In such case, current Firm rates will apply and the Client may continue or terminate representation according to the Termination section.",
    docRespTitle: "CLIENT RESPONSIBILITIES",
    docRespIntro: "The Client agrees to:",
    docRespList: [
      "(a) Provide necessary information and documents promptly;",
      "(b) Attend hearings, trials, depositions, etc., as required, even if notice is short;",
      "(c) Immediately notify the Firm of any change in address, phone, or email;",
      "(d) Maintain regular communication and respond to the Firm's requests; and",
      "(e) Pay all fees, costs, and charges promptly."
    ],
    docRespOutro: "Failure to comply with these responsibilities may result in suspension of services or withdrawal of representation by the Firm.",
    docConfTitle: "CONFIDENTIALITY AND ACCESS TO INFORMATION",
    docConfText1: "The Firm has a duty to maintain the confidentiality of all information provided by the Client. The Payor, if different from the Client, will not have automatic access to confidential information related to the case. The Client may authorize in writing what specific information may be shared with the Payor (e.g., general case status, hearing confirmation, or payment receipts). Without such authorization, the Firm will limit communication with the Payor to strictly administrative billing and collection matters.",
    docRescTitle: "TERMINATION",
    docRescText1: "Representation will terminate upon completion of the services stated above. Likewise, both the Client and the Firm may terminate this contract at any time, with or without cause, upon notice to the other party, although the Firm's right to terminate may be limited by the Texas Disciplinary Rules of Professional Conduct.",
    docRescText2: "If the Client terminates, or if the Firm withdraws according to law, the Client remains responsible for all earned fees and costs incurred up to the date of termination. A minimum cancellation fee of $350 will apply to cover initial administrative expenses.",
    docRescText3: "The Firm may suspend or withdraw if the Client fails to cooperate, provide necessary information, attend required hearings, maintain communication, or stay current on payments.",
    docCostsTitle: "COSTS NOT INCLUDED IN FEES",
    docCostsText1: "In the course of providing services, it may be necessary to incur expenses that are not fees, such as filing fees required by government agencies, travel and lodging, translation services, mediators, experts, courier services, additional translations, or special administrative assistance. Some expenses may be optional, and the Firm will seek Client approval before incurring them. Such expenses will be billed as they occur. At the Firm's choice, certain third-party services must be paid directly by the Client to the provider.",
    docBarTitle: "STATE BAR OF TEXAS NOTICE",
    docBarText: "The Texas Government Code requires that Clients be notified that the State Bar of Texas investigates professional misconduct by Texas attorneys. While not all disputes involve misconduct, the State Bar will provide information if you call 800-932-1900.",
    docGuarTitle: "WHAT THE FIRM CANNOT GUARANTEE",
    docGuarText: "The Client acknowledges and agrees that the corresponding government agency will make the case decision; therefore, the Firm cannot guarantee favorable results. The Client acknowledges and agrees that the Firm cannot control processing times by government agencies. Any such delay shall not constitute cause to suspend or cease payment of fees due under this contract. All statements by our staff are opinions only.",
    docConflictTitle: "DISPUTE RESOLUTION",
    docConflictText: "Any fee-related dispute must first be submitted to the State Bar of Texas Fee Dispute Resolution Program. The decision will be binding on both parties. If not resolved there, parties agree that any subsequent litigation will be resolved exclusively in Harris County, Texas. Parties may agree to mediation before litigation.",
    docAttySig: "Attorney Signature",
    docClientSig: "Client Signature",
    docPayorSig: "Payor / Co-Signer Signature",
    docElectronicallyAuth: "Electronically Authenticated",
    docSigReq: "Signature Required",
    docClientInfo: "Client Information",
    docPayorInfo: "Payor Information (if different from Client)",
    signedDate: "Signed and accepted on:",
    orContact: " or Contact",
    labelName: "Name:",
    labelAddress: "Address:",
    labelPhone: "Phone:",
    labelEmail: "Email:",
    labelRelation: "Relationship to Client:"
  }
};

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  
  const [formValues, setFormValues] = useState<Record<string, string>>({
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

  const remainingBalance = formValues.flatFee && formValues.initialPayment
    ? Number(formValues.flatFee) - Number(formValues.initialPayment)
    : null;

  const getHighlightClass = (field: string) =>
    `paper-highlight ${activeField === field ? 'pulse' : ''}`;

  const OptLabel = ({ children, optional }: { children: React.ReactNode; optional?: boolean }) => (
    <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {children}
      {optional && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '1px', fontWeight: 400, textTransform: 'uppercase' }}>
          {lang === 'es' ? 'opcional' : 'optional'}
        </span>
      )}
    </span>
  );

  const handleExport = () => {
    window.print();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="app-container">
      {/* Premium Header */}
      <header className="app-header">
        <div className="brand-section">
          <Scale className="text-[#D4AF37] w-8 h-8" size={32} strokeWidth={1.5} />
          <div>
            <div className="brand-logo">Varela Law</div>
            <div className="brand-subtitle">Automated Legal Systems</div>
          </div>
        </div>
        <div>
          <span className="live-badge">
            <span className="live-badge-dot"></span>
            Varela Engine v4.0 (Unified Form)
          </span>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <div className="dashboard-grid">
        
        {/* Left Side: Unified Form Panel */}
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

            {/* Client Section */}
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
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    className="form-input"
                    placeholder={ui.clientNamePlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label><OptLabel optional>{ui.clientAddress}</OptLabel></label>
                  <input
                    type="text"
                    value={formValues.clientAddress}
                    onChange={(e) => handleInputChange('clientAddress', e.target.value)}
                    className="form-input"
                    placeholder={ui.clientAddressPlaceholder}
                  />
                </div>
                <div className="grid-2-cols">
                  <div className="form-group">
                    <label><OptLabel optional>{ui.clientPhone}</OptLabel></label>
                    <input
                      type="text"
                      value={formValues.clientPhone}
                      onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label><OptLabel optional>{ui.clientEmail}</OptLabel></label>
                    <input
                      type="email"
                      value={formValues.clientEmail}
                      onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payor Section */}
            <div className="form-section">
              <div className="section-header">
                <span className="section-number">02</span>
                <span className="section-title">{ui.payorSection}</span>
              </div>
              <div className="payor-toggle-box mb-4">
                <label className="cursor-pointer">{ui.hasPayor}</label>
                <select
                  value={formValues.hasPayor}
                  onChange={(e) => handleInputChange('hasPayor', e.target.value)}
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
                      onChange={(e) => handleInputChange('payorName', e.target.value)}
                      className="form-input"
                      placeholder={ui.payorNamePlaceholder}
                    />
                  </div>
                  <div className="form-group">
                    <label>{ui.payorRelation}</label>
                    <input
                      type="text"
                      value={formValues.payorRelation}
                      onChange={(e) => handleInputChange('payorRelation', e.target.value)}
                      className="form-input"
                      placeholder={ui.payorRelationPlaceholder}
                    />
                  </div>
                  <div className="form-group">
                    <label><OptLabel optional>{ui.payorAddress}</OptLabel></label>
                    <input
                      type="text"
                      value={formValues.payorAddress}
                      onChange={(e) => handleInputChange('payorAddress', e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="grid-2-cols">
                    <div className="form-group">
                      <label>{ui.payorPhone}</label>
                      <input
                        type="text"
                        value={formValues.payorPhone}
                        onChange={(e) => handleInputChange('payorPhone', e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label><OptLabel optional>{ui.payorEmail}</OptLabel></label>
                      <input
                        type="email"
                        value={formValues.payorEmail}
                        onChange={(e) => handleInputChange('payorEmail', e.target.value)}
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

            {/* Case Details */}
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
                    onChange={(e) => handleInputChange('purpose', e.target.value)}
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
                      onChange={(e) => handleInputChange('agreementDate', e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>{ui.preparedBy}</label>
                    <input
                      type="text"
                      maxLength={3}
                      value={formValues.preparedBy}
                      onChange={(e) => handleInputChange('preparedBy', e.target.value.toUpperCase())}
                      className="form-input uppercase"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Section */}
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
                      onChange={(e) => handleInputChange('flatFee', e.target.value)}
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
                      onChange={(e) => handleInputChange('initialPayment', e.target.value)}
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
                    onChange={(e) => handleInputChange('hasPaymentPlan', e.target.value)}
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
                        onChange={(e) => handleInputChange('monthlyPayment', e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label>{ui.paymentStartDate}</label>
                      <input
                        type="date"
                        value={formValues.paymentStartDate}
                        onChange={(e) => handleInputChange('paymentStartDate', e.target.value)}
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
                    onClick={() => setSigColor('#0F2A4A')}
                    title="Ink: Navy"
                    style={{
                      width: 14, height: 14, borderRadius: '50%', background: '#0F2A4A',
                      border: sigColor === '#0F2A4A' ? '2px solid var(--gold)' : '2px solid transparent',
                      cursor: 'pointer', padding: 0
                    }}
                  />
                  <button
                    onClick={() => setSigColor('#111827')}
                    title="Ink: Black"
                    style={{
                      width: 14, height: 14, borderRadius: '50%', background: '#111827',
                      border: sigColor === '#111827' ? '2px solid var(--gold)' : '2px solid transparent',
                      cursor: 'pointer', padding: 0
                    }}
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
                    onChange={(e) => setSignatureText(e.target.value)}
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
                      onChange={(e) => setPayorSignatureText(e.target.value)}
                      className="form-input italic"
                      style={{ fontFamily: 'var(--font-cursive)', fontSize: '1.25rem', color: sigColor }}
                    />
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleExport}
              disabled={!signatureText}
              className="btn-primary w-full"
              style={{ marginTop: '1.5rem' }}
            >
              <PenTool size={14} />
              {ui.exportBtn}
            </button>
          </div>
        </div>

        {/* Right Side: Document Preview (Dynamic Translation) */}
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

            <div>
              <h3 className="paper-clause">{ui.docParties}</h3>
              <p className="paper-clause">{ui.docPartiesText}</p>
              <ol className="legal-list">
                <li>
                  <strong>1. {ui.docFirm}</strong> {ui.docFirmAddress}
                </li>
                <li>
                  <strong>2. {ui.docClient}</strong> <span className={getHighlightClass('clientName')} style={{ minWidth: '350px' }}>{formValues.clientName || ''}</span>{ui.docClientText}
                </li>
                {formValues.hasPayor === 'true' && (
                  <li>
                    <strong>3. {ui.docPayorTitle}</strong> <span className={getHighlightClass('payorName')} style={{ minWidth: '350px' }}>{formValues.payorName || ''}</span>{ui.docPayorText}
                  </li>
                )}
              </ol>

              <h3 className="paper-clause">{ui.docPurposeTitle}</h3>
              <p className="paper-clause">
                {ui.docPurposeText1}
                <span className={getHighlightClass('purpose')} style={{ minWidth: '400px' }}>{formValues.purpose || ''}</span>
                {ui.docPurposeText2}
              </p>

              <h3 className="paper-clause">{ui.docFeesTitle}</h3>
              <p className="paper-clause">
                {ui.docFeesText1}
                <span className={getHighlightClass('flatFee')} style={{ minWidth: '80px' }}>{formValues.flatFee || ''}</span>
                {ui.docFeesText2}
                <span className={getHighlightClass('initialPayment')} style={{ minWidth: '80px' }}>{formValues.initialPayment || ''}</span>
                {ui.docFeesText3}
              </p>

              {formValues.hasPaymentPlan === 'true' && (
                <p className="paper-clause">
                  <strong>{ui.docPaymentPlan}</strong> 
                  <span className={getHighlightClass('monthlyPayment')} style={{ minWidth: '80px' }}>{formValues.monthlyPayment || ''}</span> 
                  {ui.docPaymentPlanStart}
                  <span className={getHighlightClass('paymentStartDate')} style={{ minWidth: '150px' }}>{formValues.paymentStartDate || ''}</span>.
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

              <h3 className="paper-clause">{ui.docRespTitle}</h3>
              <p className="paper-clause"><strong>{ui.docRespIntro}</strong></p>
              <ul className="legal-list" style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
                {ui.docRespList.map((item, idx) => (
                  <li key={idx} className="mb-2">{item}</li>
                ))}
              </ul>
              <p className="paper-clause">{ui.docRespOutro}</p>

              <h3 className="paper-clause">{ui.docConfTitle}</h3>
              <p className="paper-clause">{ui.docConfText1}</p>

              <h3 className="paper-clause">{ui.docRescTitle}</h3>
              <p className="paper-clause">{ui.docRescText1}</p>
              <p className="paper-clause">{ui.docRescText2}</p>
              <p className="paper-clause">{ui.docRescText3}</p>

              <h3 className="paper-clause">{ui.docCostsTitle}</h3>
              <p className="paper-clause">{ui.docCostsText1}</p>

              <h3 className="paper-clause">{ui.docBarTitle}</h3>
              <p className="paper-clause">{ui.docBarText}</p>

              <h3 className="paper-clause">{ui.docGuarTitle}</h3>
              <p className="paper-clause">{ui.docGuarText}</p>

              <h3 className="paper-clause">{ui.docConflictTitle}</h3>
              <p className="paper-clause">{ui.docConflictText}</p>
            </div>

            <div style={{ marginTop: '3rem', fontSize: '10pt', textAlign: 'left', marginBottom: '2rem' }}>
              <span>{ui.signedDate} <span className={getHighlightClass('agreementDate')} style={{ minWidth: '200px' }}>{formValues.agreementDate || ''}</span></span>
            </div>

            <div className="paper-signature-line">
              <div className="sig-block">
                <div className="digital-signature" style={{ color: sigColor }}>
                  {signatureText || ''}
                </div>
                <div style={{ paddingTop: '4px' }}>{ui.docClientSig}{ui.orContact}</div>
              </div>

              <div className="sig-block">
                <div className="digital-signature" style={{ color: sigColor }}>
                  Mario Varela
                </div>
                <div style={{ paddingTop: '4px' }}>{ui.docAttySig}, Mario Varela</div>
              </div>

              {formValues.hasPayor === 'true' && formValues.payorName && (
                <div className="sig-block" style={{ gridColumn: 'span 2' }}>
                  <div className="digital-signature" style={{ color: sigColor }}>
                    {payorSignatureText || ''}
                  </div>
                  <div style={{ paddingTop: '4px' }}>{ui.docPayorSig}</div>
                </div>
              )}
            </div>

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
            
            <div style={{ marginTop: '3rem', textAlign: 'right', fontSize: '9pt', fontWeight: 'bold' }}>
              Internal Use Only - Contract Prepared By: <span className={getHighlightClass('preparedBy')} style={{ minWidth: '40px' }}>{formValues.preparedBy || ''}</span>
            </div>
            
            <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '8pt', fontWeight: 'bold', borderTop: '1px solid black', paddingTop: '1rem' }}>
              8554 KATY FWY STE 340, HOUSTON, TEXAS 77024 • MVARELA@VARELA.LAW • TEL: (713) 684-3550
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast">
          <CheckCircle2 size={16} style={{ color: '#34D399', flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Print Dialog Opened
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-secondary)', marginTop: '3px' }}>
              Save as PDF from the print dialog.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
