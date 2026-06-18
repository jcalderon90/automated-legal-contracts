import { useState } from "react";
import { t } from "./i18n/translations";
import type { Lang } from "./i18n/translations";
import type { FormValues } from "./types";
import { AppHeader } from "./components/AppHeader";
import { FormPanel } from "./components/FormPanel";
import { DocumentPreview } from "./components/DocumentPreview";
import { ExportModal } from "./components/ExportModal";
import { Toast } from "./components/Toast";

export default function App() {
  const [lang, setLang] = useState<Lang>("es");

  const [formValues, setFormValues] = useState<FormValues>({
    clientName: "",
    clientAddress: "",
    clientPhone: "",
    clientEmail: "",
    hasPayor: "false",
    payorName: "",
    payorAddress: "",
    payorPhone: "",
    payorEmail: "",
    payorRelation: "",
    purpose: "",
    flatFee: "",
    initialPayment: "",
    hasPaymentPlan: "false",
    monthlyPayment: "",
    paymentStartDate: "",
    agreementDate: new Date().toISOString().split("T")[0],
    preparedBy: "",
  });

  const [activeField, setActiveField] = useState<string>("");
  const [signatureText, setSignatureText] = useState<string>("");
  const [payorSignatureText, setPayorSignatureText] = useState<string>("");
  const [sigColor, setSigColor] = useState<string>("#0F2A4A");
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportStep, setExportStep] = useState<number>(0);
  const [showToast, setShowToast] = useState<boolean>(false);

  const ui = t[lang];

  const handleInputChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setActiveField(field);

    if (field === "clientName") setSignatureText(value);
    if (field === "payorName") setPayorSignatureText(value);

    setTimeout(() => setActiveField(""), 600);
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
      <AppHeader
        lang={lang}
        setLang={setLang}
        uiLanguageLabel={ui.languageLabel}
      />

      <div
        className="dashboard-grid"
        style={{ gridTemplateColumns: "minmax(400px, 35%) 1fr" }}
      >
        <FormPanel
          ui={ui}
          formValues={formValues}
          signatureText={signatureText}
          payorSignatureText={payorSignatureText}
          sigColor={sigColor}
          isExporting={isExporting}
          onInputChange={handleInputChange}
          onSignatureChange={setSignatureText}
          onPayorSignatureChange={setPayorSignatureText}
          onSigColorChange={setSigColor}
          onExport={handleExport}
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

      {isExporting && <ExportModal exportStep={exportStep} />}
      {showToast && <Toast />}
    </div>
  );
}
