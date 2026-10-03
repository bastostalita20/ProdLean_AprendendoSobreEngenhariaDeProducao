/* Correções manuais da conversão de fórmulas para LaTeX (prioridade sobre scripts/formulas-tex.js).
   Chave = fórmula exatamente como está no conteúdo; valor = LaTeX, ou "" para mostrar como texto/código. */
window.FORMULAS_TEX_MANUAL = {
  "=$B$1*A2": "",
  "P(X = k) = e^(−λ)·λᵏ ÷ k!": "P(X = k) = \\dfrac{e^{-\\lambda} \\cdot \\lambda^{k}}{k!}",
  "P(X = k) = e^(−λ) · λᵏ ÷ k!": "P(X = k) = \\dfrac{e^{-\\lambda} \\cdot \\lambda^{k}}{k!}",
  "MAPE = (Σ |Aₜ − Fₜ| ÷ Aₜ) ÷ n × 100%": "\\mathrm{MAPE} = \\dfrac{1}{n} \\sum \\dfrac{\\left|A_t - F_t\\right|}{A_t} \\times 100\\%",
  "PE (R$) = custos fixos ÷ MC%": "\\mathrm{PE}\\ (\\text{R\\$}) = \\dfrac{\\text{custos fixos}}{\\mathrm{MC}\\%}",
  "Tₙ = T₁ · nᵇ, com b = log(taxa) ÷ log 2": "T_n = T_1 \\cdot n^{b},\\quad \\text{com } b = \\dfrac{\\log(\\text{taxa})}{\\log 2}",
  "b = log(taxa) ÷ log 2": "b = \\dfrac{\\log(\\text{taxa})}{\\log 2}",
  "1) EAC = AC + (BAC − EV):": "\\text{1) } \\mathrm{EAC} = \\mathrm{AC} + (\\mathrm{BAC} - \\mathrm{EV})",
  "2) EAC = BAC ÷ CPI:": "\\text{2) } \\mathrm{EAC} = \\dfrac{\\mathrm{BAC}}{\\mathrm{CPI}}",
  "3) EAC = AC + (BAC − EV) ÷ (CPI × SPI):": "\\text{3) } \\mathrm{EAC} = \\mathrm{AC} + \\dfrac{\\mathrm{BAC} - \\mathrm{EV}}{\\mathrm{CPI} \\times \\mathrm{SPI}}",
  "Σⱼ xᵢⱼ ≤ oferta ᵢ ;  Σᵢ xᵢⱼ ≥ demanda ⱼ": "\\textstyle\\sum_j x_{ij} \\le \\text{oferta}_i ;\\quad \\sum_i x_{ij} \\ge \\text{demanda}_j",
  "dy/dt = k·y ⇒ y(t) = y₀·e^(kt)": "\\dfrac{dy}{dt} = k \\cdot y \\Rightarrow y(t) = y_0 \\cdot e^{kt}",
  "T(t) = Tₐ + (T₀ − Tₐ)·e^(−kt)": "T(t) = T_a + (T_0 - T_a) \\cdot e^{-kt}",
  "P(t) = K ÷ (1 + A·e^(−rt))": "P(t) = \\dfrac{K}{1 + A \\cdot e^{-rt}}"
};
