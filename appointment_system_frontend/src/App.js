import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import DoctorList from "./components/DoctorList";
import SlotSelection from "./components/SlotSelection";
import PatientInfoForm from "./components/PatientInfoForm";
import Confirmation from "./components/Confirmation";
import Success from "./components/Success";
import { applyCSSVariables } from "./theme";

/**
 * PUBLIC_INTERFACE
 * App is the main shell with sidebar navigation and step-based booking flow.
 */
function App() {
  const steps = ["Doctor Selection", "Slot Selection", "Patient Info", "Confirmation"];
  // step: 1..4; success screen beyond 4
  const [step, setStep] = useState(1);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [patientInfo, setPatientInfo] = useState(null);
  const [reference, setReference] = useState("");

  // Mock doctors
  const doctors = useMemo(
    () => [
      { id: "d1", name: "Dr. Amelia Zhang", specialty: "Cardiology", hospital: "Aurelia Heart Center", experience: 12 },
      { id: "d2", name: "Dr. Luis Ortega", specialty: "Dermatology", hospital: "Aurora Skin Clinic", experience: 9 },
      { id: "d3", name: "Dr. Priya Nair", specialty: "Pediatrics", hospital: "Haven Children's Hospital", experience: 14 },
      { id: "d4", name: "Dr. Noah Bennett", specialty: "Orthopedics", hospital: "Motion Care Institute", experience: 11 },
    ],
    []
  );

  // Mock slots derived from doctor
  const slots = useMemo(() => {
    const base = [
      { id: "s1", date: "2025-10-12", time: "09:00 AM" },
      { id: "s2", date: "2025-10-12", time: "09:30 AM" },
      { id: "s3", date: "2025-10-12", time: "10:00 AM" },
      { id: "s4", date: "2025-10-12", time: "10:30 AM" },
      { id: "s5", date: "2025-10-12", time: "11:00 AM" },
      { id: "s6", date: "2025-10-13", time: "09:00 AM" },
      { id: "s7", date: "2025-10-13", time: "09:30 AM" },
      { id: "s8", date: "2025-10-13", time: "10:30 AM" },
      { id: "s9", date: "2025-10-14", time: "01:00 PM" },
      { id: "s10", date: "2025-10-14", time: "01:30 PM" },
      { id: "s11", date: "2025-10-14", time: "02:00 PM" },
      { id: "s12", date: "2025-10-15", time: "11:30 AM" },
    ];
    // In a real app, time slots vary per doctor. Here we mimic some variation.
    if (!selectedDoctor) return base;
    const mod = selectedDoctor.id.charCodeAt(1) % 3;
    return base.filter((_, idx) => (idx + mod) % 2 === 0);
  }, [selectedDoctor]);

  useEffect(() => {
    // Apply theme variables to :root
    applyCSSVariables();
  }, []);

  const resetToStart = () => {
    setStep(1);
    setSelectedDoctor(null);
    setSelectedSlot(null);
    setPatientInfo(null);
    setReference("");
  };

  const onSelectDoctor = (doc) => {
    setSelectedDoctor(doc);
    setSelectedSlot(null);
    setStep(2);
  };

  const onSelectSlot = (slot) => setSelectedSlot(slot);

  const onNextFromSlots = () => {
    if (selectedSlot) setStep(3);
  };

  const onSubmitPatient = (data) => {
    setPatientInfo(data);
    setStep(4);
  };

  const onConfirm = () => {
    // Mock reference generation
    const ref = `APPT-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setReference(ref);
    setStep(5); // success screen
  };

  return (
    <div className="app-shell">
      <Sidebar currentStep={Math.min(step, 4)} steps={steps} />
      <main className="main">
        {step === 1 && (
          <DoctorList doctors={doctors} onSelect={onSelectDoctor} />
        )}

        {step === 2 && selectedDoctor && (
          <SlotSelection
            doctor={selectedDoctor}
            slots={slots}
            selectedSlot={selectedSlot}
            onSelectSlot={onSelectSlot}
            onBack={() => setStep(1)}
            onNext={onNextFromSlots}
          />
        )}

        {step === 3 && selectedDoctor && selectedSlot && (
          <PatientInfoForm
            initial={patientInfo || undefined}
            onBack={() => setStep(2)}
            onSubmit={onSubmitPatient}
          />
        )}

        {step === 4 && selectedDoctor && selectedSlot && patientInfo && (
          <Confirmation
            doctor={selectedDoctor}
            slot={selectedSlot}
            patient={patientInfo}
            onBack={() => setStep(3)}
            onConfirm={onConfirm}
          />
        )}

        {step === 5 && (
          <Success reference={reference} onNewBooking={resetToStart} />
        )}
      </main>
    </div>
  );
}

export default App;
