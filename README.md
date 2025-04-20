# k6 Performance Testing Framework

Este repositorio contiene distintos tipos de pruebas de rendimiento realizadas con [k6](https://k6.io/), orientadas a validar la estabilidad y escalabilidad de la API pública https://test.k6.io/.

## 📂 Estructura del Proyecto

```
.
├── scripts
│   ├── average-load
│   ├── breakpoint
│   ├── smoke
│   ├── soak
│   ├── stress
|   └── k6-sample-script.js
|
├── results
├── thresholds
├── dashboards
├── .gitignore
├── package-lock.json
├── package.json
├── requirements.md
└── README.md
```

## 🧪 Tipos de pruebas

- `Smoke`: Verifica disponibilidad básica.
- `Average Load`: Simula carga promedio.
- `Stress`: Empuja la API hasta que empiece a fallar.
- `Soak`: Evalúa estabilidad a largo plazo.
- `Breakpoint`: Detecta el punto de colapso del sistema.

## 🚀 Cómo ejecutar un test

```bash
k6 run scripts/smoke/smoke.test.js
```
