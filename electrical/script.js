function calculateOhmsLaw() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);

    let result;

    if (!isNaN(voltage) && !isNaN(current)) {
        result = `R = ${voltage / current} Ω`;
    } else if (!isNaN(voltage) && !isNaN(resistance)) {
        result = `I = ${voltage / resistance} A`;
    } else if (!isNaN(current) && !isNaN(resistance)) {
        result = `V = ${current * resistance} V`;
    } else {
        result = 'Please enter any two values.';
    }

    document.getElementById('result1').innerText = result;
}

function calculateResistance() {
    const band1 = parseInt(document.getElementById('band1').value);
    const band2 = parseInt(document.getElementById('band2').value);
    const multiplier = parseFloat(document.getElementById('multiplier').value);

    const resistanceValue = ((band1 * 10) + band2) * multiplier;

    document.getElementById('result2').innerText = `Resistance: ${resistanceValue} Ω`;
}
// Inductor Voltage Calculation
function calculateInductorVoltage() {
  const L = parseFloat(document.getElementById('inductance').value);
  const dI_dt = parseFloat(document.getElementById('current_change').value);

  const voltage = L * dI_dt;
  document.getElementById('inductor_result').innerText = `Voltage (V) = ${voltage.toFixed(2)} Volts`;
}

// Capacitor Charge Calculation
function calculateCapacitorCharge() {
  const C = parseFloat(document.getElementById('capacitance').value);
  const V = parseFloat(document.getElementById('voltage_cap').value);

  const charge = C * V;
  document.getElementById('capacitor_result').innerText = `Charge (Q) = ${charge.toFixed(2)} Coulombs`;
}

// Joule's Law Calculation
function calculateJoulesLaw() {
  const I = parseFloat(document.getElementById('current_joule').value);
  const R = parseFloat(document.getElementById('resistance_joule').value);

  const power = I * I * R;
  document.getElementById('joule_result').innerText = `Power (P) = ${power.toFixed(2)} Watts`;
}

// Power Factor Calculation
function calculatePowerFactor() {
  const P = parseFloat(document.getElementById('real_power').value);
  const S = parseFloat(document.getElementById('apparent_power').value);

  const powerFactor = P / S;
  document.getElementById('power_factor_result').innerText = `Power Factor = ${powerFactor.toFixed(2)}`;
}
// DC Motor Simulation
let motorSpeed = 0;

function increaseSpeed() {
  motorSpeed += 100;
  updateMotorSpeed();
}

function decreaseSpeed() {
  motorSpeed -= 100;
  if (motorSpeed < 0) motorSpeed = 0;
  updateMotorSpeed();
}

function updateMotorSpeed() {
  document.getElementById('speed-value').textContent = motorSpeed;
}

// Transformer Simulation
function calculateSecondaryVoltage() {
  const primaryVoltage = parseFloat(document.getElementById('primary-voltage').value);
  const primaryTurns = parseInt(document.getElementById('primary-turns').value);
  const secondaryTurns = parseInt(document.getElementById('secondary-turns').value);

  if (!isNaN(primaryVoltage) && !isNaN(primaryTurns) && !isNaN(secondaryTurns)) {
    const secondaryVoltage = (primaryVoltage * secondaryTurns) / primaryTurns;
    document.getElementById('secondary-voltage').value = secondaryVoltage.toFixed(2);
  } else {
    alert('Please enter valid numbers for all fields.');
  }
}
let magnetPosition = 0; // Initial position of magnet
const coilWidth = document.querySelector('.coil').offsetWidth;
const magnet = document.querySelector('.magnet');

function moveMagnet() {
  magnetPosition += coilWidth / 10; // Move magnet by 10% of coil width
  magnet.style.transition = 'transform 0.5s ease'; // Smooth animation
  magnet.style.transform = `translateX(${magnetPosition}px)`;
  updateEMF();
}

function updateEMF() {
  const maxEMF = 5; // Max induced EMF (can adjust this value)
  let inducedEMF = (magnetPosition / coilWidth) * maxEMF;

  if (inducedEMF > maxEMF) {
    inducedEMF = maxEMF;
  }

  document.getElementById('emf-output').textContent = inducedEMF.toFixed(2);
}
