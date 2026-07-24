"use client";

import { useState } from "react";

export function EnergyCalculator() {
  const [bill, setBill] = useState(180);
  const yearly = bill * 12;
  const saving = Math.round(yearly * 0.7);

  return (
    <div className="z-calculator">
      <div className="z-calculator-copy">
        <span>Tu factura mensual</span>
        <strong>{bill} €</strong>
      </div>
      <input
        aria-label="Factura eléctrica mensual"
        type="range"
        min="60"
        max="500"
        step="10"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />
      <div className="z-calculator-result">
        <span>Ahorro anual estimado*</span>
        <strong>hasta {saving.toLocaleString("es-ES")} €</strong>
      </div>
      <small>
        *Estimación orientativa aplicando hasta un 70 % de ahorro. El estudio
        técnico determina el resultado de cada instalación.
      </small>
    </div>
  );
}
