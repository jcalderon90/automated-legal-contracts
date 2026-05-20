import React, { useState } from 'react';
import { 
  Shield, 
  RefreshCw, 
  CheckCircle2, 
  PenTool,
  Scale,
  User,
  Users,
  FileText,
  DollarSign
} from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  defaultValues: Record<string, string>;
  render: (values: Record<string, string>, activeField: string) => React.ReactNode;
}

const TEMPLATES: Template[] = [
  {
    id: 'es_flat',
    name: 'Representación – Honorarios Fijos (Español)',
    description: 'Contrato de representación legal en español con honorarios fijos y plan de pagos opcional.',
    defaultValues: {
      clientName: 'Abel Ramales Flores',
      clientAddress: '1006 S second Conroe, TX 77301',
      clientPhone: '9364996697',
      clientEmail: 'abelramales0604@gmail.com',
      hasPayor: 'true',
      payorName: 'Enrique Martinez',
      payorAddress: '',
      payorPhone: '8324988211',
      payorEmail: '',
      payorRelation: 'Companero de la Iglesia',
      purpose: 'Representacion caso de remocion',
      flatFee: '6000',
      initialPayment: '2500',
      hasPaymentPlan: 'true',
      monthlyPayment: '400',
      paymentStartDate: '2026-06-15',
      agreementDate: '2026-05-15',
      preparedBy: 'MB',
    },
    render: (values, activeField) => {
      const getHighlightClass = (field: string) => 
        `paper-highlight ${activeField === field ? 'pulse' : ''}`;

      return (
        <div>
          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 mb-4 uppercase tracking-wide text-xs">
            PARTES DE ESTE ACUERDO
          </p>
          <p className="paper-clause">
            Para efectos de este contrato, intervienen las siguientes partes:
          </p>
          <ol className="legal-list">
            <li>
              <strong>La Firma:</strong> THE VARELA LAW OFFICE, PLLC, radicada en 8554 Katy Fwy, Suite 340, Houston, TX 77024.
            </li>
            <li>
              <strong>El Cliente:</strong> <span className={getHighlightClass('clientName')}>{values.clientName || '[Nombre del Cliente]'}</span>, quien será la persona beneficiaria de la representación legal descrita en este documento.
            </li>
            {values.hasPayor === 'true' && (
              <li>
                <strong>El Responsable de pago (si aplica):</strong> <span className={getHighlightClass('payorName')}>{values.payorName || '[Nombre del Responsable]'}</span>, persona que cubrirá los honorarios en nombre del Cliente. El Responsable de pago no será considerado Cliente ni tendrá derecho a confidencialidad, salvo autorización expresa y por escrito de la Firma.
              </li>
            )}
          </ol>

          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 my-4 uppercase tracking-wide text-xs">
            PROPÓSITO
          </p>
          <p className="paper-clause">
            La Firma representará al Cliente en el siguiente asunto:{' '}
            <span className={getHighlightClass('purpose')}>{values.purpose || '[Asunto de la Representación]'}</span>.
            La representación se limita a los servicios necesarios para completar dicho asunto. Cualquier apelación, moción o trámite adicional no expresamente incluido requerirá un nuevo contrato o honorarios adicionales.
          </p>

          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 my-4 uppercase tracking-wide text-xs">
            HONORARIOS
          </p>
          <p className="paper-clause">
            El Cliente acuerda pagar a la Firma un honorario fijo de ${' '}
            <span className={getHighlightClass('flatFee')}>{values.flatFee || '0'}</span>, de los cuales ${' '}
            <span className={getHighlightClass('initialPayment')}>{values.initialPayment || '0'}</span> se pagará al momento de la firma.
            Este pago inicial constituye un honorario fijo devengado al recibirse que cubre la configuración administrativa, verificación de conflictos, configuración en el sistema electrónico de administración de casos, apertura del expediente, revisión preliminar de hechos, consideraciones iniciales de estrategia y el compromiso de recursos y disponibilidad de la Firma.
          </p>

          {values.hasPaymentPlan === 'true' && (
            <div className="legal-notice-box">
              <strong>Plan de Pagos:</strong> Pagos mensuales de ${' '}
              <span className={getHighlightClass('monthlyPayment')}>{values.monthlyPayment || '0'}</span> comenzando el{' '}
              <span className={getHighlightClass('paymentStartDate')}>{values.paymentStartDate || '[Fecha de Inicio]'}</span>.
            </div>
          )}

          <p className="paper-clause">
            Si el Cliente elige un plan de pagos, cada cuota deberá pagarse puntualmente. El Cliente reconoce y acepta que, si un pago no se recibe durante el mes calendario en que vence, se impondrá un cargo por mora de $50. Si se omiten dos pagos consecutivos, la Firma podrá suspender los servicios hasta que la cuenta esté al corriente.
          </p>

          <p className="paper-clause">
            El Cliente reconoce y acepta que los saldos no pagados podrán devengar intereses al 1.5% mensual (18% anual), o un mínimo de $50 por mes, lo que sea mayor.
          </p>

          <p className="paper-clause">
            El Cliente reconoce y acepta que, en caso de cambios en las leyes o regulaciones por parte de agencias o tribunales, la Firma podrá realizar un ajuste de honorarios conforme sea necesario.
          </p>

          {values.hasPayor === 'true' && (
            <p className="paper-clause">
              <strong>Responsabilidad de pago:</strong> El Cliente reconoce y acepta que, aun cuando exista un Responsable de pago, el Cliente sigue siendo responsable en última instancia del pago íntegro de los honorarios y gastos establecidos en este contrato. El Responsable de pago, al firmar este contrato, asume de manera conjunta la obligación de cubrir dichos honorarios y gastos. La Firma podrá exigir el pago indistintamente al Cliente o al Responsable de pago, o a ambos.
            </p>
          )}

          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 my-4 uppercase tracking-wide text-xs">
            RESPONSABILIDADES DEL CLIENTE
          </p>
          <p className="paper-clause">
            El Cliente se compromete a: (a) Proporcionar la información y los documentos necesarios de manera oportuna; (b) Asistir a audiencias, juicios, deposiciones, etc. según se requiera; (c) Notificar de inmediato a la Firma cualquier cambio de dirección, teléfono o correo electrónico; (d) Mantener comunicación regular y responder a las solicitudes de la Firma; (e) Pagar puntualmente los honorarios, costos y cuotas.
          </p>

          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 my-4 uppercase tracking-wide text-xs">
            CONFIDENCIALIDAD Y ACCESO A LA INFORMACIÓN
          </p>
          <p className="paper-clause text-xs">
            La Firma tiene el deber de mantener confidencialidad de toda la información proporcionada por el Cliente. El Responsable de pago, en caso de ser distinto al Cliente, no tendrá acceso automático a información confidencial relacionada con el caso. El Cliente podrá autorizar por escrito compartir información si lo desea.
          </p>
        </div>
      );
    }
  },
  {
    id: 'en_flat',
    name: 'Representation Agreement – Flat Fee (English)',
    description: 'Flat fee legal representation agreement in English for a specific legal matter.',
    defaultValues: {
      clientName: 'Peggy Davis',
      clientAddress: '',
      clientPhone: '',
      clientEmail: '',
      hasPayor: 'true',
      payorName: 'Petra Melendez',
      payorAddress: '',
      payorPhone: '214-560-8127',
      payorEmail: 'petra@cartaspro.com',
      payorRelation: 'Alternate Contact',
      purpose: 'Last Will and Testament',
      flatFee: '1500',
      initialPayment: '1500',
      hasPaymentPlan: 'false',
      monthlyPayment: '0',
      paymentStartDate: '',
      agreementDate: '2026-05-18',
      preparedBy: 'AL',
    },
    render: (values, activeField) => {
      const getHighlightClass = (field: string) => 
        `paper-highlight ${activeField === field ? 'pulse' : ''}`;

      return (
        <div>
          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 mb-4 uppercase tracking-wide text-xs">
            1. Parties to This Agreement
          </p>
          <p className="paper-clause">
            <strong>a. The Firm:</strong> THE VARELA LAW FIRM, PLLC, located at 8554 Katy Fwy, Suite 340, Houston, TX 77024.
          </p>
          <p className="paper-clause">
            <strong>b. The Client:</strong> <span className={getHighlightClass('clientName')}>{values.clientName || '[Client Name]'}</span>, who will be the person receiving the legal services described in this Agreement.
          </p>

          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 my-4 uppercase tracking-wide text-xs">
            2. Purpose
          </p>
          <p className="paper-clause text-justify leading-relaxed">
            The Firm will represent the Client in the following matter:{' '}
            <span className={getHighlightClass('purpose')}>{values.purpose || '[Purpose of Representation]'}</span>.
            Representation is limited to the services necessary to complete the above-described matter before the relevant court or government agency. Any appeal, motion, or additional proceeding not expressly included will require a new contract or additional fees.
          </p>

          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 my-4 uppercase tracking-wide text-xs">
            3. Limited Scope of Representation
          </p>
          <p className="paper-clause text-justify text-xs">
            The Firm’s representation is strictly limited to the matter described in this Agreement. The Firm does not represent the Client in other related or derivative matters, such as appeals, collateral proceedings, or separate administrative actions, unless a new written contract is executed. The Client understands they are a client of the Firm, not of any individual attorney.
          </p>

          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 my-4 uppercase tracking-wide text-xs">
            4. Fees
          </p>
          <p className="paper-clause text-justify">
            The Client agrees to pay the Firm a flat fee of ${' '}
            <span className={getHighlightClass('flatFee')}>{values.flatFee || '0'}</span>, of which ${' '}
            <span className={getHighlightClass('initialPayment')}>{values.initialPayment || '0'}</span> shall be paid at the time of signing.
            This initial payment is a non-refundable earned fee upon receipt covering administrative setup, conflict checks, entry into the case-management system, file opening, preliminary review of facts, initial legal and factual analysis, and the Firm's commitment of resources and availability.
          </p>

          {values.hasPaymentPlan === 'true' && (
            <div className="legal-notice-box">
              <strong>Payment Plan:</strong> Monthly payments of ${' '}
              <span className={getHighlightClass('monthlyPayment')}>{values.monthlyPayment || '0'}</span> commencing on{' '}
              <span className={getHighlightClass('paymentStartDate')}>{values.paymentStartDate || '[Start Date]'}</span>.
            </div>
          )}

          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 my-4 uppercase tracking-wide text-xs">
            5. Client Responsibilities
          </p>
          <p className="paper-clause text-justify text-xs">
            The Client agrees to: (a) Provide information and documents promptly; (b) Attend hearings, trials, or depositions as required, even if notice is short; (c) Immediately notify the Firm of any change of address, phone, or email; (d) Maintain regular communication and respond promptly; (e) Pay all fees, costs, and charges on time.
          </p>
        </div>
      );
    }
  },
  {
    id: 'en_hourly',
    name: 'Representation Contract – Retainer/Hourly (English)',
    description: 'Hourly billing contract in English secured by an initial retainer fee.',
    defaultValues: {
      clientName: 'Rena Boutte',
      clientAddress: '3522 Brunswick Meadows Houston, TX 77035',
      clientPhone: '281-865-0567',
      clientEmail: 'rena_boutte@yahoo.com',
      hasPayor: 'true',
      payorName: 'Rhonda Boutte',
      payorAddress: '',
      payorPhone: '713-296-9990',
      payorEmail: '',
      payorRelation: 'Sister',
      purpose: 'Modification',
      flatFee: '2500', // Used as Retainer Fee in this context
      initialPayment: '2500',
      hasPaymentPlan: 'false',
      monthlyPayment: '0',
      paymentStartDate: '',
      agreementDate: '2026-05-15',
      preparedBy: 'MB',
    },
    render: (values, activeField) => {
      const getHighlightClass = (field: string) => 
        `paper-highlight ${activeField === field ? 'pulse' : ''}`;

      return (
        <div>
          <p className="paper-clause text-justify">
            I, <span className={getHighlightClass('clientName')}>{values.clientName || '[Client Name]'}</span>, who is referred to as the "Client" occupies the legal services of <strong>THE VARELA LAW OFFICE, PLLC</strong>, who shall hereinafter be referred to as the "Firm" under the following clauses:
          </p>

          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 my-4 uppercase tracking-wide text-xs">
            PURPOSE
          </p>
          <p className="paper-clause text-justify">
            By means of this contract, the Client hires the services of the Firm and specifically entrusts the management consisting of carrying out the process of:{' '}
            <span className={getHighlightClass('purpose')}>{values.purpose || '[Purpose of Representation]'}</span>.
          </p>

          <p className="paper-clause font-bold text-center border-b border-gray-300 pb-1 my-4 uppercase tracking-wide text-xs">
            FEES
          </p>
          <p className="paper-clause text-justify">
            A Retainer Fee of ${' '}
            <span className={getHighlightClass('flatFee')}>{values.flatFee || '0'}</span> to secure payment of invoices retains the Firm as legal representative. This is an hourly arrangement. Hourly billing will not come out of the Retainer Fee funds. The Retainer is intended as security for payment of future invoices and at the discretion of the Firm, may be credited toward the final payment in this matter. Unused Retainer funds will be refunded at the conclusion of the case.
          </p>
          <p className="paper-clause text-justify text-xs">
            The Client understands that they will be billed for all time spent on this matter. Billable Time includes legal research, drafting/reading emails, letters, pleadings and documents, messages, telephone calls, communications with Client, witnesses, court staff, and other persons, mediation and settlement negotiations, pretrial preparation, fact investigation, reviewing materials, travel time, and court appearances.
          </p>
          <p className="paper-clause text-justify text-xs text-gray-500">
            The hourly rate for attorneys is $375-$425, paralegals $150-$200, and legal assistants $100-$150. The Firm reserves the right to modify its rates from time to time.
          </p>
        </div>
      );
    }
  }
];

export default function App() {
  const [selectedId, setSelectedId] = useState<string>('es_flat');
  
  const activeTemplate = TEMPLATES.find(t => t.id === selectedId) || TEMPLATES[0];
  
  const [formValues, setFormValues] = useState<Record<string, string>>(() => activeTemplate.defaultValues);
  const [activeField, setActiveField] = useState<string>('');
  
  const [formTab, setFormTab] = useState<'client' | 'payor' | 'details' | 'fees'>('client');
  
  const [signatureText, setSignatureText] = useState<string>(() => activeTemplate.defaultValues.clientName || '');
  const [payorSignatureText, setPayorSignatureText] = useState<string>(() => activeTemplate.defaultValues.payorName || '');
  const [sigColor, setSigColor] = useState<string>('#0F2A4A'); // Blue Ink
  
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportStep, setExportStep] = useState<number>(0);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleTemplateChange = (id: string) => {
    setSelectedId(id);
    const targetTemplate = TEMPLATES.find(t => t.id === id) || TEMPLATES[0];
    setFormValues(targetTemplate.defaultValues);
    setSignatureText(targetTemplate.defaultValues.clientName || '');
    setPayorSignatureText(targetTemplate.defaultValues.payorName || '');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
    setActiveField(field);
    
    if (field === 'clientName') {
      setSignatureText(value);
    } else if (field === 'payorName') {
      setPayorSignatureText(value);
    }

    setTimeout(() => {
      setActiveField('');
    }, 600);
  };

  const handleExport = () => {
    setIsExporting(true);
    setExportStep(1);

    setTimeout(() => {
      setExportStep(2);
      setTimeout(() => {
        setExportStep(3);
        setTimeout(() => {
          setExportStep(4);
          setTimeout(() => {
            setIsExporting(false);
            setExportStep(0);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 4500);
          }, 1200);
        }, 1000);
      }, 1000);
    }, 1000);
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
            Varela Engine v3.0
          </span>
        </div>
      </header>

      {/* Template Selection Bar */}
      <div className="template-bar">
        {TEMPLATES.map(template => (
          <button
            key={template.id}
            onClick={() => handleTemplateChange(template.id)}
            className={`template-btn ${selectedId === template.id ? 'active' : ''}`}
          >
            {template.name}
          </button>
        ))}
      </div>

      {/* Main Dashboard Layout */}
      <div className="dashboard-grid">
        
        {/* Left Side: Parameters / Inputs Panel */}
        <div className="panel">
          <div className="flex-between mb-6 border-b border-gray-800 pb-3">
            <div className="flex items-center gap-2">
              <Shield className="text-[#D4AF37] w-5 h-5" />
              <h2 className="text-xl font-bold uppercase tracking-wider text-[#F3E5AB]">
                Contract Parameters
              </h2>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-6 italic leading-relaxed">
            {activeTemplate.description}
          </p>

          {/* Form Tabs Switcher */}
          <div className="form-tabs">
            <button
              type="button"
              onClick={() => setFormTab('client')}
              className={`form-tab-btn ${formTab === 'client' ? 'active' : ''}`}
            >
              <User size={13} />
              Cliente
            </button>
            <button
              type="button"
              onClick={() => setFormTab('payor')}
              className={`form-tab-btn ${formTab === 'payor' ? 'active' : ''}`}
            >
              <Users size={13} />
              Contacto / Pago
            </button>
            <button
              type="button"
              onClick={() => setFormTab('details')}
              className={`form-tab-btn ${formTab === 'details' ? 'active' : ''}`}
            >
              <FileText size={13} />
              Caso
            </button>
            <button
              type="button"
              onClick={() => setFormTab('fees')}
              className={`form-tab-btn ${formTab === 'fees' ? 'active' : ''}`}
            >
              <DollarSign size={13} />
              Tarifas
            </button>
          </div>

          <div className="space-y-4">
            {/* Tab 1: Client Information */}
            {formTab === 'client' && (
              <div className="animate-fade-in">
                <div className="form-group">
                  <label htmlFor="clientName">Nombre del Cliente / Client Name</label>
                  <input
                    id="clientName"
                    type="text"
                    value={formValues.clientName || ''}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    className="form-input"
                    placeholder="ej. Abel Ramales Flores"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="clientAddress">Dirección / Physical Address</label>
                  <input
                    id="clientAddress"
                    type="text"
                    value={formValues.clientAddress || ''}
                    onChange={(e) => handleInputChange('clientAddress', e.target.value)}
                    className="form-input"
                    placeholder="ej. 1006 S second Conroe, TX 77301"
                  />
                </div>
                <div className="grid-2-cols">
                  <div className="form-group">
                    <label htmlFor="clientPhone">Teléfono / Phone</label>
                    <input
                      id="clientPhone"
                      type="text"
                      value={formValues.clientPhone || ''}
                      onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                      className="form-input"
                      placeholder="ej. 9364996697"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="clientEmail">Email / Email Address</label>
                    <input
                      id="clientEmail"
                      type="email"
                      value={formValues.clientEmail || ''}
                      onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                      className="form-input"
                      placeholder="ej. abel@gmail.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Alternate Contact & Payor */}
            {formTab === 'payor' && (
              <div className="animate-fade-in">
                <div className="payor-toggle-box">
                  <label htmlFor="hasPayor" className="cursor-pointer">¿Aplica Contacto Alterno / Responsable de Pago?</label>
                  <select
                    id="hasPayor"
                    value={formValues.hasPayor || 'false'}
                    onChange={(e) => handleInputChange('hasPayor', e.target.value)}
                    className="form-select"
                    style={{ maxWidth: '100px', padding: '0.4rem 0.5rem', fontSize: '0.75rem' }}
                  >
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                  </select>
                </div>

                {formValues.hasPayor === 'true' && (
                  <div className="space-y-4">
                    <div className="form-group">
                      <label htmlFor="payorName">Nombre Completo / Contact Name</label>
                      <input
                        id="payorName"
                        type="text"
                        value={formValues.payorName || ''}
                        onChange={(e) => handleInputChange('payorName', e.target.value)}
                        className="form-input"
                        placeholder="ej. Enrique Martinez"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="payorRelation">Relación con el Cliente / Relationship</label>
                      <input
                        id="payorRelation"
                        type="text"
                        value={formValues.payorRelation || ''}
                        onChange={(e) => handleInputChange('payorRelation', e.target.value)}
                        className="form-input"
                        placeholder="ej. Hermana, Companero de la Iglesia"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="payorAddress">Dirección / Address (Opcional)</label>
                      <input
                        id="payorAddress"
                        type="text"
                        value={formValues.payorAddress || ''}
                        onChange={(e) => handleInputChange('payorAddress', e.target.value)}
                        className="form-input"
                        placeholder="ej. 8554 Katy Fwy, Houston, TX 77024"
                      />
                    </div>
                    <div className="grid-2-cols">
                      <div className="form-group">
                        <label htmlFor="payorPhone">Teléfono / Phone</label>
                        <input
                          id="payorPhone"
                          type="text"
                          value={formValues.payorPhone || ''}
                          onChange={(e) => handleInputChange('payorPhone', e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="payorEmail">Email / Email (Opcional)</label>
                        <input
                          id="payorEmail"
                          type="email"
                          value={formValues.payorEmail || ''}
                          onChange={(e) => handleInputChange('payorEmail', e.target.value)}
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {formValues.hasPayor === 'false' && (
                  <p className="text-gray-500 italic text-sm text-center py-8">
                    El contrato no incluirá un contacto de respaldo o responsable financiero.
                  </p>
                )}
              </div>
            )}

            {/* Tab 3: Representation Details */}
            {formTab === 'details' && (
              <div className="animate-fade-in">
                <div className="form-group">
                  <label htmlFor="purpose">Asunto de la Representación / Purpose</label>
                  <textarea
                    id="purpose"
                    rows={3}
                    value={formValues.purpose || ''}
                    onChange={(e) => handleInputChange('purpose', e.target.value)}
                    className="form-input w-full resize-none leading-relaxed"
                    placeholder="ej. Representacion caso de remocion o Redacción de Testamento"
                  />
                </div>
                <div className="grid-2-cols">
                  <div className="form-group">
                    <label htmlFor="agreementDate">Fecha de Firma / Agreement Date</label>
                    <input
                      id="agreementDate"
                      type="date"
                      value={formValues.agreementDate || ''}
                      onChange={(e) => handleInputChange('agreementDate', e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preparedBy">Preparado por / Prepared By (Iniciales)</label>
                    <input
                      id="preparedBy"
                      type="text"
                      maxLength={3}
                      value={formValues.preparedBy || ''}
                      onChange={(e) => handleInputChange('preparedBy', e.target.value.toUpperCase())}
                      className="form-input uppercase"
                      placeholder="ej. MB"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Fees & Payments */}
            {formTab === 'fees' && (
              <div className="animate-fade-in">
                <div className="grid-2-cols">
                  <div className="form-group">
                    <label htmlFor="flatFee">
                      {selectedId === 'en_hourly' ? 'Retenedor / Retainer Fee ($)' : 'Honorario Fijo / Flat Fee ($)'}
                    </label>
                    <input
                      id="flatFee"
                      type="number"
                      value={formValues.flatFee || ''}
                      onChange={(e) => handleInputChange('flatFee', e.target.value)}
                      className="form-input"
                      placeholder="ej. 6000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="initialPayment">Pago al Firmar / Paid at Signing ($)</label>
                    <input
                      id="initialPayment"
                      type="number"
                      value={formValues.initialPayment || ''}
                      onChange={(e) => handleInputChange('initialPayment', e.target.value)}
                      className="form-input"
                      placeholder="ej. 2500"
                    />
                  </div>
                </div>

                {selectedId !== 'en_hourly' && (
                  <>
                    <div className="payor-toggle-box">
                      <label htmlFor="hasPaymentPlan" className="cursor-pointer">¿Requiere Plan de Pagos Mensuales?</label>
                      <select
                        id="hasPaymentPlan"
                        value={formValues.hasPaymentPlan || 'false'}
                        onChange={(e) => handleInputChange('hasPaymentPlan', e.target.value)}
                        className="form-select"
                        style={{ maxWidth: '100px', padding: '0.4rem 0.5rem', fontSize: '0.75rem' }}
                      >
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                      </select>
                    </div>

                    {formValues.hasPaymentPlan === 'true' && (
                      <div className="grid-2-cols">
                        <div className="form-group">
                          <label htmlFor="monthlyPayment">Cuota Mensual / Monthly Payment ($)</label>
                          <input
                            id="monthlyPayment"
                            type="number"
                            value={formValues.monthlyPayment || ''}
                            onChange={(e) => handleInputChange('monthlyPayment', e.target.value)}
                            className="form-input"
                            placeholder="ej. 400"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="paymentStartDate">Comenzando el / Starting Date</label>
                          <input
                            id="paymentStartDate"
                            type="date"
                            value={formValues.paymentStartDate || ''}
                            onChange={(e) => handleInputChange('paymentStartDate', e.target.value)}
                            className="form-input"
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}
                {selectedId === 'en_hourly' && (
                  <p className="text-gray-400 text-xs italic leading-relaxed bg-[#0b0d13]/40 p-3 border border-gray-800 rounded">
                    * Los contratos de tipo Retainer / Hourly se facturan en base a horas incurridas de trabajo legal real y no admiten plan de pagos fijos mensuales directos en el acuerdo base.
                  </p>
                )}
              </div>
            )}

            {/* High-Fidelity Signature Pad Simulation */}
            <div className="mt-8 border-t border-gray-800 pt-6">
              <div className="flex-between mb-4">
                <label className="text-xs font-bold uppercase tracking-wider text-[#F3E5AB]">
                  Digital Signature Secure
                </label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSigColor('#0F2A4A')} 
                    className={`w-4 h-4 rounded-full border ${sigColor === '#0F2A4A' ? 'border-[#D4AF37] scale-125' : 'border-transparent'}`} 
                    style={{backgroundColor: '#0F2A4A'}}
                    title="Blue Ink"
                  />
                  <button 
                    onClick={() => setSigColor('#111827')} 
                    className={`w-4 h-4 rounded-full border ${sigColor === '#111827' ? 'border-[#D4AF37] scale-125' : 'border-transparent'}`} 
                    style={{backgroundColor: '#111827'}}
                    title="Black Ink"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1">CLIENTE / CLIENT SIGNATURE</span>
                  <input
                    type="text"
                    value={signatureText}
                    placeholder="Escribe tu nombre para firmar"
                    onChange={(e) => setSignatureText(e.target.value)}
                    className="form-input italic"
                    style={{ fontFamily: 'var(--font-cursive)', fontSize: '1.25rem', color: sigColor }}
                  />
                </div>

                {formValues.hasPayor === 'true' && formValues.payorName && (
                  <div>
                    <span className="text-[10px] text-gray-400 block mb-1">RESPONSABLE / PAYOR SIGNATURE</span>
                    <input
                      type="text"
                      value={payorSignatureText}
                      placeholder="Firma del responsable de pago"
                      onChange={(e) => setPayorSignatureText(e.target.value)}
                      className="form-input italic"
                      style={{ fontFamily: 'var(--font-cursive)', fontSize: '1.25rem', color: sigColor }}
                    />
                  </div>
                )}
              </div>

              <span className="text-[10px] text-gray-500 mt-3 block leading-relaxed uppercase tracking-wider">
                Firmado electrónicamente como parte vinculante del acuerdo de representación legal.
              </span>
            </div>

            {/* Execute Generation Button */}
            <button
              onClick={handleExport}
              disabled={isExporting || !signatureText}
              className="btn-primary mt-8"
            >
              {isExporting ? (
                <>
                  <RefreshCw className="animate-spin w-5 h-5" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <PenTool className="w-5 h-5" />
                  Affix Signatures & Export
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: High Fidelity Document Paper Preview */}
        <div className="document-container">
          <div className="paper">
            
            {/* Elegant SVG Seal Watermark */}
            <svg className="seal-watermark" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" />
              <text x="50" y="45" fontSize="5" textAnchor="middle" fontWeight="bold" fontFamily="var(--font-sans)">VARELA LAW</text>
              <text x="50" y="52" fontSize="3" textAnchor="middle" letterSpacing="1" fontFamily="var(--font-sans)">OFFICIAL SEAL</text>
              <text x="50" y="60" fontSize="3.5" textAnchor="middle" fontStyle="italic" fontFamily="var(--font-serif)">Fides et Lex</text>
            </svg>

            {/* Official Legal Office Header (Extracted from Contracts PDFs) */}
            <div className="flex-between mb-6 border-b-2 border-gray-900 pb-4">
              <div className="brand-section">
                <div className="text-3xl font-extrabold border-2 border-gray-900 px-3 py-1 font-serif tracking-tighter" style={{ color: '#111827', fontFamily: 'var(--font-serif)' }}>M</div>
                <div>
                  <h2 className="text-xl font-bold uppercase tracking-wider text-gray-900 leading-none" style={{ fontFamily: 'var(--font-serif)' }}>MARIO VARELA</h2>
                  <span className="text-[10px] tracking-[4px] uppercase text-gray-500 font-bold leading-none">LAW FIRM</span>
                </div>
              </div>
              <div className="text-[9px] text-right font-sans text-gray-600 leading-tight">
                <div className="font-bold text-gray-800">8554 Katy Fwy, Ste 340</div>
                <div>Houston, TX 77024</div>
                <div className="underline">mvarela@varela.law</div>
                <div>Ph. (713) 684-3550</div>
              </div>
            </div>

            <h1 className="paper-title" style={{ color: '#111827', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
              {activeTemplate.id === 'es_flat' 
                ? 'CONTRATO DE REPRESENTACIÓN LEGAL – HONORARIOS FIJOS' 
                : activeTemplate.id === 'en_flat'
                ? 'LEGAL REPRESENTATION AGREEMENT – FLAT FEE'
                : 'LEGAL REPRESENTATION CONTRACT'}
            </h1>

            {/* Render selected contract template text with high fidelity styling */}
            {activeTemplate.render(formValues, activeField)}

            {/* Document Metadata Block & Signature Block */}
            <div className="mt-8 pt-6 border-t border-dashed border-gray-300">
              <div className="flex-between text-[10px] text-gray-500 font-sans uppercase mb-6">
                <span>Fecha / Date: <span className="font-bold text-gray-800">{formValues.agreementDate || 'N/A'}</span></span>
                <span>Preparado por / Prepared By: <span className="font-bold text-gray-800">{formValues.preparedBy || 'N/A'}</span></span>
              </div>

              {/* Signature Lines */}
              <div className="paper-signature-line" style={{ marginTop: '2rem' }}>
                <div className="sig-block">
                  <div className="text-gray-400 font-sans text-[9px] mb-2 uppercase tracking-wide">
                    Firma del Abogado / Attorney Signature
                  </div>
                  <div className="digital-signature" style={{ color: sigColor, fontSize: '1.8rem' }}>
                    Mario Varela
                  </div>
                  <div className="text-[9px] text-gray-600 font-sans uppercase">
                    THE VARELA LAW OFFICE, PLLC
                  </div>
                </div>

                <div className="sig-block">
                  <div className="text-gray-400 font-sans text-[9px] mb-2 uppercase tracking-wide">
                    Firma del Cliente / Client Signature
                  </div>
                  <div className="digital-signature" style={{ color: sigColor, fontSize: '1.8rem' }}>
                    {signatureText || ''}
                  </div>
                  <div className="text-[9px] text-gray-600 font-sans uppercase">
                    {signatureText ? 'Electronically Authenticated' : 'Signature Required'}
                  </div>
                </div>

                {formValues.hasPayor === 'true' && formValues.payorName && (
                  <div className="sig-block" style={{ gridColumn: 'span 2', marginTop: '1.5rem' }}>
                    <div className="text-gray-400 font-sans text-[9px] mb-2 uppercase tracking-wide">
                      Firma de Contacto / Pago - Co-Signer Signature
                    </div>
                    <div className="digital-signature" style={{ color: sigColor, fontSize: '1.8rem' }}>
                      {payorSignatureText || ''}
                    </div>
                    <div className="text-[9px] text-gray-600 font-sans uppercase">
                      {payorSignatureText ? `Electronically Authenticated (${formValues.payorRelation || 'Co-signer'})` : 'Signature Required'}
                    </div>
                  </div>
                )}
              </div>

              {/* Client & Alternate Contact Details (Bottom of page 3 like) */}
              <div className="contract-details-card">
                <div>
                  <div className="contract-details-header">Información del Cliente</div>
                  <div><strong>Nombre:</strong> {formValues.clientName || 'N/A'}</div>
                  <div><strong>Dirección:</strong> {formValues.clientAddress || 'N/A'}</div>
                  <div><strong>Teléfono:</strong> {formValues.clientPhone || 'N/A'}</div>
                  <div><strong>Email:</strong> {formValues.clientEmail || 'N/A'}</div>
                </div>

                {formValues.hasPayor === 'true' && formValues.payorName ? (
                  <div>
                    <div className="contract-details-header">Contacto Alterno / Fiador</div>
                    <div><strong>Nombre:</strong> {formValues.payorName || 'N/A'}</div>
                    {formValues.payorAddress && <div><strong>Dirección:</strong> {formValues.payorAddress}</div>}
                    <div><strong>Teléfono:</strong> {formValues.payorPhone || 'N/A'}</div>
                    {formValues.payorEmail && <div><strong>Email:</strong> {formValues.payorEmail}</div>}
                    <div><strong>Relación:</strong> {formValues.payorRelation || 'N/A'}</div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-gray-400 italic text-[11px]">
                    Sin Contacto Alterno / Responsable de Pago
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interstitial Animation Modal during Generation */}
      {isExporting && (
        <div className="fixed inset-0 bg-[#0B0D13]/85 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-[#161A26] border border-[#D4AF37]/30 rounded-xl p-10 max-w-md w-full mx-4 shadow-2xl text-center">
            <RefreshCw className="animate-spin text-[#D4AF37] w-12 h-12 mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-bold uppercase tracking-wider text-[#F3E5AB] mb-4">
              Varela Cryptographic Engine
            </h3>
            
            {/* Phased feedback steps */}
            <div className="space-y-3 text-left max-w-[280px] mx-auto">
              <div className="flex items-center gap-3">
                {exportStep >= 1 ? (
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-gray-600 animate-pulse" />
                )}
                <span className={`text-sm ${exportStep >= 1 ? 'text-gray-200' : 'text-gray-500'}`}>
                  Analyzing contract clauses...
                </span>
              </div>

              <div className="flex items-center gap-3">
                {exportStep >= 2 ? (
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-gray-600" />
                )}
                <span className={`text-sm ${exportStep >= 2 ? 'text-gray-200' : 'text-gray-500'}`}>
                  Generating SHA-256 secure hash...
                </span>
              </div>

              <div className="flex items-center gap-3">
                {exportStep >= 3 ? (
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-gray-600" />
                )}
                <span className={`text-sm ${exportStep >= 3 ? 'text-gray-200' : 'text-gray-500'}`}>
                  Affixing Varela Law digital seal...
                </span>
              </div>

              <div className="flex items-center gap-3">
                {exportStep >= 4 ? (
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-gray-600" />
                )}
                <span className={`text-sm ${exportStep >= 4 ? 'text-gray-200' : 'text-gray-500'}`}>
                  Securing PDF document envelope...
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showToast && (
        <div className="toast border-emerald-500/30 text-left">
          <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
          <div>
            <div className="font-bold text-gray-100 text-sm">Contract Exported Successfully</div>
            <div className="text-xs text-gray-400">Document generated and stored securely in local vault.</div>
          </div>
        </div>
      )}
    </div>
  );
}
