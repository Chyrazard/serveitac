"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBatteryFull,
  faBuilding,
  faCheck,
  faHouse,
  faHouseSignal,
  faIndustry,
  faLayerGroup,
  faPlug,
  faRotateRight,
  faSolarPanel,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type SolutionId = "solar" | "battery" | "aerotermia" | "charger" | "loxone";
type PropertyType = "house" | "apartment" | "industrial";

type Solution = {
  id: SolutionId;
  short: string;
  title: string;
  description: string;
  savingMin: number;
  savingMax: number;
  icon: typeof faSolarPanel;
  accent: string;
  recommended?: boolean;
};

const solutions: Solution[] = [
  {
    id: "loxone",
    short: "Control total",
    title: "Domótica",
    description: "Tu vivienda decide cuándo y cómo consumir para evitar desperdicios.",
    savingMin: 0.1,
    savingMax: 0.1,
    icon: faHouseSignal,
    accent: "smart",
    recommended: true,
  },
  {
    id: "solar",
    short: "Generación fotovoltaica",
    title: "Solar",
    description: "Convierte el sol en ahorro diario y reduce tu dependencia de la red.",
    savingMin: 0.5,
    savingMax: 0.5,
    icon: faSolarPanel,
    accent: "sun",
  },
  {
    id: "battery",
    short: "Almacenamiento inteligente",
    title: "Baterías",
    description: "Guarda tus excedentes solares para utilizarlos cuando realmente los necesitas.",
    savingMin: 0.25,
    savingMax: 0.25,
    icon: faBatteryFull,
    accent: "battery",
  },
  {
    id: "aerotermia",
    short: "Clima invisible",
    title: "Aerotermia",
    description: "Calefacción, refrigeración y agua caliente con mucha menos energía.",
    savingMin: 0.15,
    savingMax: 0.15,
    icon: faTemperatureHalf,
    accent: "air",
  },
  {
    id: "charger",
    short: "Movilidad eléctrica",
    title: "Cargador",
    description: "Carga tu vehículo con energía propia y gestión dinámica de potencia.",
    savingMin: 0.05,
    savingMax: 0.05,
    icon: faPlug,
    accent: "charger",
  },
];

const propertyTypes = [
  { id: "house" as const, label: "Chalet", icon: faHouse },
  { id: "apartment" as const, label: "Piso", icon: faBuilding },
  { id: "industrial" as const, label: "Nave", icon: faIndustry },
];

function formatEuro(value: number) {
  return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function EnergySavingsSimulator() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [solutionIds, setSolutionIds] = useState<SolutionId[]>([]);
  const [propertyType, setPropertyType] = useState<PropertyType | null>(null);
  const [monthlyExpense, setMonthlyExpense] = useState(150);

  useEffect(() => {
    if (!window.matchMedia("(max-width: 900px)").matches) return;

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        document.scrollingElement?.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [step]);

  const selectedSolutions = solutions.filter((item) => solutionIds.includes(item.id));
  const hasIntegralCore = ["solar", "aerotermia", "loxone"].every((item) =>
    solutionIds.includes(item as SolutionId),
  );

  const savingRate = useMemo(() => {
    let rate = 0;
    if (solutionIds.includes("solar")) rate += 0.5;
    if (solutionIds.includes("battery")) rate += 0.25;
    if (solutionIds.includes("aerotermia")) rate += 0.15;
    if (solutionIds.includes("charger")) rate += 0.05;
    if (solutionIds.includes("loxone") && solutionIds.length > 1) rate *= 1.1;
    if (propertyType === "industrial" && solutionIds.includes("solar")) rate += 0.05;
    return Math.min(0.98, rate);
  }, [propertyType, solutionIds]);

  const extraSolutions = selectedSolutions.filter(
    (item) => item.id === "battery" || item.id === "charger",
  );
  const selectionTitle = hasIntegralCore
    ? ["Pack Smart Home Integral", ...extraSolutions.map((item) => item.title)].join(" + ")
    : selectedSolutions.map((item) => item.title).join(" + ");

  const selectionIcon = hasIntegralCore
    ? faLayerGroup
    : selectedSolutions[0]?.icon ?? faHouseSignal;

  const toggleSolution = (solutionId: SolutionId) => {
    setSolutionIds((current) =>
      current.includes(solutionId)
        ? current.filter((item) => item !== solutionId)
        : [...current, solutionId],
    );
  };

  const result = useMemo(() => {
    if (!solutionIds.length) return null;

    const annualExpense = monthlyExpense * 12;
    const annualSaving = annualExpense * savingRate;
    const futureExpense = annualExpense - annualSaving;

    return {
      annualExpense,
      annualSaving,
      futureExpense,
    };
  }, [monthlyExpense, savingRate, solutionIds.length]);

  const reset = () => {
    setSolutionIds([]);
    setPropertyType(null);
    setMonthlyExpense(150);
    setStep(1);
  };

  const selectedProperty = propertyTypes.find((item) => item.id === propertyType);
  const sliderMax = Math.max(3000, Math.ceil(monthlyExpense / 1000) * 1000);
  const whatsappMessage = result && selectedProperty
    ? `Hola, quiero recibir mi propuesta personalizada de Domoteknik.\n\n🏠 Propiedad: ${selectedProperty.label}\n⚡ Soluciones elegidas: ${selectionTitle}\n💶 Gasto mensual actual: ${formatEuro(monthlyExpense)} €\n📅 Gasto anual actual: ${formatEuro(result.annualExpense)} €\n📉 Ahorro anual estimado: ${formatEuro(result.annualSaving)} € (${Math.round(savingRate * 100)}%)\n✅ Gasto anual estimado después: ${formatEuro(result.futureExpense)} €\n\nQuiero solicitar mi estudio técnico gratuito.`
    : "Hola, quiero realizar un estudio energético gratuito con Domoteknik.";

  const whatsappHref = `https://wa.me/34623974748?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="energy-sim-shell" aria-labelledby="simulator-title">
      <div className="energy-sim-glow energy-sim-glow-one" />
      <div className="energy-sim-glow energy-sim-glow-two" />

      <div className="energy-sim-workspace">
        <div className="energy-sim-direct-head">
          <a className="energy-sim-back-home" href="/">
            <FontAwesomeIcon icon={faArrowLeft} /> Volver
          </a>
          <div>
            <span className="energy-sim-eyebrow">Simulador energético</span>
            <h1 id="simulator-title">Simula tu ahorro</h1>
          </div>
        </div>

        <div className="energy-sim-progress" aria-label={`Paso ${step} de 4`}>
          {[1, 2, 3, 4].map((item) => (
            <div className={item <= step ? "is-complete" : ""} key={item}>
              <span>{item < step ? <FontAwesomeIcon icon={faCheck} /> : item}</span>
              <small>{item === 1 ? "Soluciones" : item === 2 ? "Propiedad" : item === 3 ? "Consumo" : "Tu ahorro"}</small>
            </div>
          ))}
        </div>

        <div className="energy-sim-panel" key={step}>
          {step === 1 && (
            <div className="energy-sim-step energy-sim-step-solutions">
              <div className="energy-sim-step-heading">
                <h2>Elige una o varias soluciones</h2>
              </div>

              <div className="energy-sim-solutions" role="group" aria-label="Soluciones energéticas">
                {solutions.map((item) => {
                  const selected = solutionIds.includes(item.id);
                  return (
                    <button
                      className={`energy-sim-solution is-${item.accent} ${item.recommended ? "is-recommended" : ""} ${selected ? "is-selected" : ""}`}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleSolution(item.id)}
                      key={item.id}
                    >
                      {item.recommended && <span className="energy-sim-recommended">Recomendado</span>}
                      <span className="energy-sim-solution-icon"><FontAwesomeIcon icon={item.icon} /></span>
                      <span className="energy-sim-solution-copy">
                        <small>{item.short}</small>
                        <strong>{item.title}</strong>
                        <em>{item.description}</em>
                      </span>
                      <span className="energy-sim-solution-range">
                        {item.id === "loxone" ? "+" : ""}{Math.round(item.savingMin * 100)}%
                        <small>ahorro estimado</small>
                      </span>
                      <span className="energy-sim-solution-check"><FontAwesomeIcon icon={faCheck} /></span>
                    </button>
                  );
                })}
              </div>

              <button
                className="energy-sim-primary"
                type="button"
                disabled={!solutionIds.length}
                onClick={() => setStep(2)}
              >
                Siguiente: tipo de propiedad <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          )}

          {step === 2 && solutionIds.length > 0 && (
            <div className="energy-sim-step energy-sim-step-property">
              <button className="energy-sim-back" type="button" onClick={() => setStep(1)}>
                <FontAwesomeIcon icon={faArrowLeft} /> Cambiar solución
              </button>

              <div className="energy-sim-step-heading">
                <span>02 · Tu punto de partida</span>
                <h2>¿Qué tipo de propiedad tienes?</h2>
              </div>

              <div className="energy-sim-properties" role="radiogroup" aria-label="Tipo de propiedad">
                {propertyTypes.map((property) => (
                  <button
                    className={propertyType === property.id ? "is-selected" : ""}
                    type="button"
                    role="radio"
                    aria-checked={propertyType === property.id}
                    onClick={() => setPropertyType(property.id)}
                    key={property.id}
                  >
                    <FontAwesomeIcon icon={property.icon} />
                    <strong>{property.label}</strong>
                    <span><FontAwesomeIcon icon={faCheck} /></span>
                  </button>
                ))}
              </div>

              <div className="energy-sim-selected-chip">
                <span><FontAwesomeIcon icon={selectionIcon} /></span>
                <div><small>Has elegido</small><strong>{selectionTitle}</strong></div>
                <em>{Math.round(savingRate * 100)}%</em>
              </div>

              <button
                className="energy-sim-primary"
                type="button"
                disabled={!propertyType}
                onClick={() => setStep(3)}
              >
                Siguiente: indicar gasto <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          )}

          {step === 3 && selectedProperty && (
            <div className="energy-sim-step energy-sim-step-expense">
              <button className="energy-sim-back" type="button" onClick={() => setStep(2)}>
                <FontAwesomeIcon icon={faArrowLeft} /> Cambiar propiedad
              </button>

              <div className="energy-sim-step-heading">
                <span>03 · Tu consumo</span>
                <h2>¿Cuánto gastas al mes?</h2>
              </div>

              <div className="energy-sim-selected-chip">
                <span><FontAwesomeIcon icon={selectedProperty.icon} /></span>
                <div><small>{selectedProperty.label}</small><strong>{selectionTitle}</strong></div>
                <em>{Math.round(savingRate * 100)}%</em>
              </div>

              <div className="energy-sim-expense-card">
                <div className="energy-sim-expense-value">
                  <span>Gasto medio mensual</span>
                  <label>
                    <input
                      type="number"
                      min="0"
                      step="10"
                      inputMode="numeric"
                      value={monthlyExpense}
                      aria-label="Gasto medio mensual en euros sin límite máximo"
                      onChange={(event) => setMonthlyExpense(Math.max(0, Number(event.target.value) || 0))}
                    />
                    <small>€ / mes</small>
                  </label>
                </div>

                <p className="energy-sim-no-limit">Escribe cualquier importe · sin límite máximo</p>

                <input
                  className="energy-sim-range"
                  type="range"
                  min="0"
                  max={sliderMax}
                  step="10"
                  value={monthlyExpense}
                  aria-label="Ajustar gasto mensual"
                  style={{ "--range-progress": `${(monthlyExpense / sliderMax) * 100}%` } as CSSProperties}
                  onChange={(event) => setMonthlyExpense(Number(event.target.value))}
                />

                <div className="energy-sim-range-labels">
                  <span>0 €</span>
                  <span>{formatEuro(sliderMax)} €</span>
                </div>
              </div>

              <div className="energy-sim-current-year">
                <span>Tu gasto energético anual actual</span>
                <strong>{formatEuro(monthlyExpense * 12)} €</strong>
              </div>

              <button
                className="energy-sim-primary"
                type="button"
                disabled={monthlyExpense <= 0}
                onClick={() => setStep(4)}
              >
                Calcular mi ahorro <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          )}

          {step === 4 && result && selectedProperty && (
            <div className="energy-sim-step energy-sim-step-result">
              <div className="energy-sim-result-top">
                <button className="energy-sim-back" type="button" onClick={() => setStep(3)}>
                  <FontAwesomeIcon icon={faArrowLeft} /> Ajustar consumo
                </button>
                <span className="energy-sim-result-badge"><FontAwesomeIcon icon={faCheck} /> Simulación completada</span>
              </div>

              <div className="energy-sim-result-hero">
                <div>
                  <span>Tu ahorro anual estimado</span>
                  <h2>
                    {formatEuro(result.annualSaving)} €
                  </h2>
                  <p>al año con {selectionTitle}</p>
                </div>
                <strong>{Math.round(savingRate * 100)}<small>%</small></strong>
              </div>

              <div className="energy-sim-comparison">
                <div className="energy-sim-comparison-head">
                  <span>Así podría cambiar tu gasto anual</span>
                  <small>Comparativa estimada</small>
                </div>
                <div className="energy-sim-meter-row is-current">
                  <span>Ahora</span>
                  <div><i style={{ width: "100%" }} /></div>
                  <strong>{formatEuro(result.annualExpense)} €</strong>
                </div>
                <div className="energy-sim-meter-row is-future">
                  <span>Después</span>
                  <div><i style={{ width: `${Math.max(4, (1 - savingRate) * 100)}%` }} /></div>
                  <strong>{formatEuro(result.futureExpense)} €</strong>
                </div>
              </div>

              <div className="energy-sim-result-facts has-property">
                <div><span>Gasto indicado</span><strong>{monthlyExpense} € / mes</strong></div>
                <div><span>Tipo de propiedad</span><strong>{selectedProperty.label}</strong></div>
                <div><span>Soluciones elegidas</span><strong>{selectionTitle}</strong></div>
              </div>

              <p className="energy-sim-disclaimer">
                Estimación orientativa sujeta a estudio técnico gratuito.
              </p>

              <a className="energy-sim-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
                <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                <div><small>Recibe una recomendación personalizada</small><strong>Obtener propuesta detallada en WhatsApp</strong></div>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>

              <button className="energy-sim-reset" type="button" onClick={reset}>
                <FontAwesomeIcon icon={faRotateRight} /> Hacer otra simulación
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
