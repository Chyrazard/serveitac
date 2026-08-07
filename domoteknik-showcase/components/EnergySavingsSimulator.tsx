"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faHouseSignal,
  faLayerGroup,
  faRotateRight,
  faSolarPanel,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type SolutionId = "solar" | "aerotermia" | "loxone" | "integral";
type CoreSolutionId = Exclude<SolutionId, "integral">;

type Solution = {
  id: SolutionId;
  short: string;
  title: string;
  description: string;
  savingMin: number;
  savingMax: number;
  icon: typeof faSolarPanel;
  accent: string;
};

const solutions: Solution[] = [
  {
    id: "solar",
    short: "Energía solar",
    title: "Solo Fotovoltaica",
    description: "Convierte el sol en ahorro diario y reduce tu dependencia de la red.",
    savingMin: 0.5,
    savingMax: 0.6,
    icon: faSolarPanel,
    accent: "sun",
  },
  {
    id: "aerotermia",
    short: "Clima eficiente",
    title: "Solo Aerotermia",
    description: "Calefacción, refrigeración y agua caliente con mucha menos energía.",
    savingMin: 0.6,
    savingMax: 0.7,
    icon: faTemperatureHalf,
    accent: "air",
  },
  {
    id: "loxone",
    short: "Gestión inteligente",
    title: "Domótica Loxone",
    description: "Tu vivienda decide cuándo y cómo consumir para evitar desperdicios.",
    savingMin: 0.1,
    savingMax: 0.15,
    icon: faHouseSignal,
    accent: "smart",
  },
  {
    id: "integral",
    short: "Máximo potencial",
    title: "Pack Smart Home Integral",
    description: "Fotovoltaica, aerotermia y Loxone trabajando como un solo sistema.",
    savingMin: 0.75,
    savingMax: 0.85,
    icon: faLayerGroup,
    accent: "pack",
  },
];

const expensePresets = [100, 150, 200, 300, 450];
const coreSolutionIds: CoreSolutionId[] = ["solar", "aerotermia", "loxone"];

function formatEuro(value: number) {
  return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function EnergySavingsSimulator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [solutionIds, setSolutionIds] = useState<CoreSolutionId[]>([]);
  const [monthlyExpense, setMonthlyExpense] = useState(200);

  const selectedSolutions = solutions.filter(
    (item): item is Solution & { id: CoreSolutionId } =>
      item.id !== "integral" && solutionIds.includes(item.id),
  );
  const isIntegral = solutionIds.length === coreSolutionIds.length;

  const savingRange = useMemo(() => {
    const hasSolar = solutionIds.includes("solar");
    const hasAerotermia = solutionIds.includes("aerotermia");
    const hasLoxone = solutionIds.includes("loxone");

    if (hasSolar && hasAerotermia && hasLoxone) return { min: 0.75, max: 0.85 };
    if (hasSolar && hasAerotermia) return { min: 0.7, max: 0.8 };
    if (hasSolar && hasLoxone) return { min: 0.6, max: 0.75 };
    if (hasAerotermia && hasLoxone) return { min: 0.7, max: 0.85 };
    if (hasSolar) return { min: 0.5, max: 0.6 };
    if (hasAerotermia) return { min: 0.6, max: 0.7 };
    if (hasLoxone) return { min: 0.1, max: 0.15 };
    return null;
  }, [solutionIds]);

  const selectionTitle = isIntegral
    ? "Pack Smart Home Integral"
    : selectedSolutions.map((item) => item.title.replace("Solo ", "")).join(" + ");

  const selectionIcon = isIntegral
    ? faLayerGroup
    : selectedSolutions[0]?.icon ?? faHouseSignal;

  const toggleSolution = (solutionId: SolutionId) => {
    if (solutionId === "integral") {
      setSolutionIds(isIntegral ? [] : [...coreSolutionIds]);
      return;
    }

    setSolutionIds((current) =>
      current.includes(solutionId)
        ? current.filter((item) => item !== solutionId)
        : [...current, solutionId],
    );
  };

  const result = useMemo(() => {
    if (!savingRange) return null;

    const annualExpense = monthlyExpense * 12;
    const savingMin = annualExpense * savingRange.min;
    const savingMax = annualExpense * savingRange.max;
    const futureExpenseMin = annualExpense - savingMax;
    const futureExpenseMax = annualExpense - savingMin;

    return {
      annualExpense,
      savingMin,
      savingMax,
      futureExpenseMin,
      futureExpenseMax,
    };
  }, [monthlyExpense, savingRange]);

  const reset = () => {
    setSolutionIds([]);
    setMonthlyExpense(200);
    setStep(1);
  };

  const whatsappMessage = savingRange && result
    ? `Hola, he simulado un gasto de ${monthlyExpense}€/mes con interés en ${selectionTitle} y quiero mi propuesta detallada. El ahorro estimado mostrado es de ${formatEuro(result.savingMin)}€ a ${formatEuro(result.savingMax)}€ al año.`
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

        <div className="energy-sim-progress" aria-label={`Paso ${step} de 3`}>
          {[1, 2, 3].map((item) => (
            <div className={item <= step ? "is-complete" : ""} key={item}>
              <span>{item < step ? <FontAwesomeIcon icon={faCheck} /> : item}</span>
              <small>{item === 1 ? "Solución" : item === 2 ? "Consumo" : "Tu ahorro"}</small>
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
                  const selected = item.id === "integral"
                    ? isIntegral
                    : solutionIds.includes(item.id);
                  return (
                    <button
                      className={`energy-sim-solution is-${item.accent} ${selected ? "is-selected" : ""}`}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleSolution(item.id)}
                      key={item.id}
                    >
                      <span className="energy-sim-solution-icon"><FontAwesomeIcon icon={item.icon} /></span>
                      <span className="energy-sim-solution-copy">
                        <small>{item.short}</small>
                        <strong>{item.title}</strong>
                        <em>{item.description}</em>
                      </span>
                      <span className="energy-sim-solution-range">
                        {Math.round(item.savingMin * 100)}–{Math.round(item.savingMax * 100)}%
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
                Continuar con mi consumo <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          )}

          {step === 2 && savingRange && (
            <div className="energy-sim-step energy-sim-step-expense">
              <button className="energy-sim-back" type="button" onClick={() => setStep(1)}>
                <FontAwesomeIcon icon={faArrowLeft} /> Cambiar solución
              </button>

              <div className="energy-sim-step-heading">
                <span>02 · Tu punto de partida</span>
                <h2>¿Cuánto gastas al mes?</h2>
                <p>Incluye tu consumo habitual de luz, energía o climatización.</p>
              </div>

              <div className="energy-sim-selected-chip">
                <span><FontAwesomeIcon icon={selectionIcon} /></span>
                <div><small>Has elegido</small><strong>{selectionTitle}</strong></div>
                <em>{Math.round(savingRange.min * 100)}–{Math.round(savingRange.max * 100)}%</em>
              </div>

              <div className="energy-sim-expense-card">
                <div className="energy-sim-expense-value">
                  <span>Gasto medio mensual</span>
                  <strong>{monthlyExpense}<small>€ / mes</small></strong>
                </div>

                <input
                  className="energy-sim-range"
                  type="range"
                  min="50"
                  max="600"
                  step="10"
                  value={monthlyExpense}
                  aria-label="Gasto medio mensual en euros"
                  style={{ "--range-progress": `${((monthlyExpense - 50) / 550) * 100}%` } as CSSProperties}
                  onChange={(event) => setMonthlyExpense(Number(event.target.value))}
                />

                <div className="energy-sim-range-labels"><span>50 €</span><span>600 € o más</span></div>

                <div className="energy-sim-presets" aria-label="Gastos frecuentes">
                  {expensePresets.map((value) => (
                    <button
                      className={monthlyExpense === value ? "is-active" : ""}
                      type="button"
                      onClick={() => setMonthlyExpense(value)}
                      key={value}
                    >
                      {value} €
                    </button>
                  ))}
                </div>
              </div>

              <div className="energy-sim-current-year">
                <span>Tu gasto energético anual actual</span>
                <strong>{formatEuro(monthlyExpense * 12)} €</strong>
              </div>

              <button className="energy-sim-primary" type="button" onClick={() => setStep(3)}>
                Calcular mi ahorro <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          )}

          {step === 3 && savingRange && result && (
            <div className="energy-sim-step energy-sim-step-result">
              <div className="energy-sim-result-top">
                <button className="energy-sim-back" type="button" onClick={() => setStep(2)}>
                  <FontAwesomeIcon icon={faArrowLeft} /> Ajustar consumo
                </button>
                <span className="energy-sim-result-badge"><FontAwesomeIcon icon={faCheck} /> Simulación completada</span>
              </div>

              <div className="energy-sim-result-hero">
                <div>
                  <span>Tu ahorro anual estimado</span>
                  <h2>
                    {formatEuro(result.savingMin)} €
                    <small>—</small>
                    {formatEuro(result.savingMax)} €
                  </h2>
                  <p>al año con {selectionTitle}</p>
                </div>
                <strong>{Math.round(savingRange.min * 100)}–{Math.round(savingRange.max * 100)}<small>%</small></strong>
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
                  <div><i style={{ width: `${Math.max(15, (1 - savingRange.max) * 100)}%` }} /></div>
                  <strong>{formatEuro(result.futureExpenseMin)}–{formatEuro(result.futureExpenseMax)} €</strong>
                </div>
              </div>

              <div className="energy-sim-result-facts">
                <div><span>Gasto indicado</span><strong>{monthlyExpense} € / mes</strong></div>
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
