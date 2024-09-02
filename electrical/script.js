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
  document.getElementById('conversionType').addEventListener('change', function() {
  const type = this.value;
  document.getElementById('starToDeltaInputs').style.display = type === 'starToDelta' ? 'block' : 'none';
  document.getElementById('deltaToStarInputs').style.display = type === 'deltaToStar' ? 'block' : 'none';
});

function calculateStarToDelta() {
  const R1 = parseFloat(document.getElementById('resistance1_star').value);
  const R2 = parseFloat(document.getElementById('resistance2_star').value);
  const R3 = parseFloat(document.getElementById('resistance3_star').value);

  const R12 = (R1 * R2 + R2 * R3 + R3 * R1) / R3;
  const R23 = (R1 * R2 + R2 * R3 + R3 * R1) / R1;
  const R31 = (R1 * R2 + R2 * R3 + R3 * R1) / R2;

  document.getElementById('star_delta_conversion_result').innerHTML = `R12: ${R12.toFixed(2)} Ω, R23: ${R23.toFixed(2)} Ω, R31: ${R31.toFixed(2)} Ω`;
}

function calculateDeltaToStar() {
  const R12 = parseFloat(document.getElementById('resistance12_delta').value);
  const R23 = parseFloat(document.getElementById('resistance23_delta').value);
  const R31 = parseFloat(document.getElementById('resistance31_delta').value);

  const R1 = (R12 * R31) / (R12 + R23 + R31);
  const R2 = (R12 * R23) / (R12 + R23 + R31);
  const R3 = (R23 * R31) / (R12 + R23 + R31);

  document.getElementById('delta_star_conversion_result').innerHTML = `R1: ${R1.toFixed(2)} Ω, R2: ${R2.toFixed(2)} Ω, R3: ${R3.toFixed(2)} Ω`;
}



function calculateStarToDelta() {
  const R1 = parseFloat(document.getElementById('resistance1_star').value);
  const R2 = parseFloat(document.getElementById('resistance2_star').value);
  const R3 = parseFloat(document.getElementById('resistance3_star').value);

  if (isNaN(R1) || isNaN(R2) || isNaN(R3)) {
    document.getElementById('star_delta_conversion_result').innerText = "Please enter valid resistances.";
    return;
  }
  const R12 = (R1 * R2 + R2 * R3 + R3 * R1) / R3;
  const R23 = (R1 * R2 + R2 * R3 + R3 * R1) / R1;
  const R31 = (R1 * R2 + R2 * R3 + R3 * R1) / R2;

  document.getElementById('star_delta_conversion_result').innerHTML = `R12: ${R12.toFixed(2)} Ω, R23: ${R23.toFixed(2)} Ω, R31: ${R31.toFixed(2)} Ω`;
}

function calculateDeltaToStar() {
  const R12 = parseFloat(document.getElementById('resistance12_delta').value);
  const R23 = parseFloat(document.getElementById('resistance23_delta').value);
  const R31 = parseFloat(document.getElementById('resistance31_delta').value);
  if (isNaN(R12) || isNaN(R23) || isNaN(R31)) {
    document.getElementById('delta_star_conversion_result').innerText = "Please enter valid resistances.";
    return;
  }
  const R1 = (R12 * R31) / (R12 + R23 + R31);
  const R2 = (R12 * R23) / (R12 + R23 + R31);
  const R3 = (R23 * R31) / (R12 + R23 + R31);

  document.getElementById('delta_star_conversion_result').innerHTML = `R12: ${R1.toFixed(2)} Ω, R23: ${R2.toFixed(2)} Ω, R31: ${R3.toFixed(2)} Ω`;
}

function calculateCurrentDivision() {
  const I = parseFloat(document.getElementById('total_current').value);
  const R1 = parseFloat(document.getElementById('resistance1_current').value);
  const R2 = parseFloat(document.getElementById('resistance2_current').value);

  const I2 = (I * R1) / (R1 + R2);
  const I1 = (I * R2) / (R1 + R2);

  document.getElementById('current_division_result').innerHTML = `I1: ${I1.toFixed(2)} A, I2: ${I2.toFixed(2)} A`;
}

function calculateVoltageDivision() {
  const V = parseFloat(document.getElementById('total_voltage').value);
  const R1 = parseFloat(document.getElementById('resistance1_voltage').value);
  const R2 = parseFloat(document.getElementById('resistance2_voltage').value);

  const V1 = (V * R1) / (R1 + R2);
  const V2 = (V * R2) / (R1 + R2);

  document.getElementById('voltage_division_result').innerHTML = `V1: ${V1.toFixed(2)} V, V2: ${V2.toFixed(2)} V`;
}


// Function to calculate MMF (Magnetomotive Force)
function calculateMMF() {
  const magneticFieldStrength = parseFloat(document.getElementById('magnetic_field_strength').value);
  const lengthOfMagneticPath = parseFloat(document.getElementById('length_of_magnetic_path').value);
  const mmf = magneticFieldStrength * lengthOfMagneticPath;
  document.getElementById('mmf_result').textContent = `MMF: ${mmf.toFixed(2)} A.m`;
}

// Function to calculate Reluctance
function calculateReluctance() {
  const lengthOfMagneticPath = parseFloat(document.getElementById('length_of_magnetic_path_reluctance').value);
  const magneticPermeability = parseFloat(document.getElementById('magnetic_permeability').value);
  const crossSectionalArea = parseFloat(document.getElementById('cross_sectional_area').value);
  if (magneticPermeability !== 0 && crossSectionalArea !== 0) {
    const reluctance = lengthOfMagneticPath / (magneticPermeability * crossSectionalArea);
    document.getElementById('reluctance_result').textContent = `Reluctance: ${reluctance.toFixed(2)} A/Wb`;
  } else {
    document.getElementById('reluctance_result').textContent = 'Magnetic Permeability and Cross-sectional Area must be non-zero.';
  }
}

// Function to calculate Ampere's Law
function calculateAmperesLaw() {
  const magneticFluxDensity = parseFloat(document.getElementById('magnetic_flux_density').value);
  const lengthOfLoop = parseFloat(document.getElementById('length_of_loop').value);
  const current = parseFloat(document.getElementById('current').value);
  const ampereLaw = magneticFluxDensity * lengthOfLoop;
  const expectedCurrent = ampereLaw / 1.256637061 * (4 * Math.PI * 1e-7) * lengthOfLoop;
  document.getElementById('amperes_law_result').textContent = `Current: ${expectedCurrent.toFixed(2)} A`;
}

// Function to calculate Biot-Savart Law
function calculateBiotSavartLaw() {
  const current = parseFloat(document.getElementById('current_biot_savart').value);
  const lengthOfConductor = parseFloat(document.getElementById('length_of_conductor').value);
  const distance = parseFloat(document.getElementById('distance').value);
  const angle = parseFloat(document.getElementById('angle').value) * (Math.PI / 180); // Convert to radians
  const magneticPermeability = 4 * Math.PI * 1e-7; // Permeability of free space
  const dB = (magneticPermeability * current * lengthOfConductor * Math.sin(angle)) / (2 * Math.PI * Math.pow(distance, 2));
  document.getElementById('biot_savart_law_result').textContent = `Magnetic Field (dB): ${dB.toFixed(6)} T`;
}

// Function to calculate Magnetic Permeability
function calculateMagneticPermeability() {
  const magneticFluxDensity = parseFloat(document.getElementById('magnetic_flux_density_permeability').value);
  const magneticFieldStrength = parseFloat(document.getElementById('magnetic_field_strength_permeability').value);
  if (magneticFieldStrength !== 0) {
    const permeability = magneticFluxDensity / magneticFieldStrength;
    document.getElementById('magnetic_permeability_result').textContent = `Magnetic Permeability: ${permeability.toFixed(6)} H/m`;
  } else {
    document.getElementById('magnetic_permeability_result').textContent = 'Magnetic Field Strength must be non-zero.';
  }
}

// Function to calculate Magnetic Susceptibility
function calculateMagneticSusceptibility() {
  const permeability = parseFloat(document.getElementById('permeability').value);
  const permeabilityOfFreeSpace = parseFloat(document.getElementById('permeability_of_free_space').value);
  if (permeabilityOfFreeSpace !== 0) {
    const susceptibility = (permeability - permeabilityOfFreeSpace) / permeabilityOfFreeSpace;
    document.getElementById('magnetic_susceptibility_result').textContent = `Magnetic Susceptibility: ${susceptibility.toFixed(4)}`;
  } else {
    document.getElementById('magnetic_susceptibility_result').textContent = 'Permeability of Free Space must be non-zero.';
  }
}

// Function to calculate Form Factor
function calculateFormFactor() {
  const rmsCurrent = parseFloat(document.getElementById('rms_current').value);
  const averageCurrent = parseFloat(document.getElementById('average_current').value);
  if (averageCurrent !== 0) {
    const formFactor = rmsCurrent / averageCurrent;
    document.getElementById('form_factor_result').textContent = `Form Factor: ${formFactor.toFixed(2)}`;
  } else {
    document.getElementById('form_factor_result').textContent = 'Average Current must be non-zero.';
  }
}

// Function to calculate Peak Factor
function calculatePeakFactor() {
  const peakCurrent = parseFloat(document.getElementById('peak_current').value);
  const rmsCurrent = parseFloat(document.getElementById('rms_current_peak').value);
  if (rmsCurrent !== 0) {
    const peakFactor = peakCurrent / rmsCurrent;
    document.getElementById('peak_factor_result').textContent = `Peak Factor: ${peakFactor.toFixed(2)}`;
  } else {
    document.getElementById('peak_factor_result').textContent = 'RMS Current must be non-zero.';
  }
}

// Function to calculate Crest Factor
function calculateCrestFactor() {
  const peakCurrent = parseFloat(document.getElementById('peak_current_crest').value);
  const rmsCurrent = parseFloat(document.getElementById('rms_current_crest').value);
  if (rmsCurrent !== 0) {
    const crestFactor = peakCurrent / rmsCurrent;
    document.getElementById('crest_factor_result').textContent = `Crest Factor: ${crestFactor.toFixed(2)}`;
  } else {
    document.getElementById('crest_factor_result').textContent = 'RMS Current must be non-zero.';
  }
}

// Function to calculate EMF using Faraday's Law
function calculateFaradaysLaw() {
  // Retrieve values from the input fields
  const numTurns = parseFloat(document.getElementById('num_turns').value);
  const fluxChange = parseFloat(document.getElementById('flux_change').value);
  const timeInterval = parseFloat(document.getElementById('time_interval').value);
  
  // Check if the time interval is non-zero to avoid division by zero
  if (timeInterval !== 0) {
    // Calculate EMF using Faraday's Law
    const emf = -numTurns * (fluxChange / timeInterval);
    // Display the result
    document.getElementById('faradays_law_result').textContent = `EMF: ${emf.toFixed(2)} V`;
  } else {
    // Handle division by zero error
    document.getElementById('faradays_law_result').textContent = 'Time Interval must be non-zero.';
  }
}



  
