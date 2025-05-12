# k6 Performance Testing Framework

Este repositorio lo inicie para experimentar con distintos tipos de pruebas de rendimiento realizadas con [k6](https://k6.io/), orientadas a validar la estabilidad y escalabilidad de la API pública https://test.k6.io/.

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

- `Smoke`: Verifica disponibilidad básica. Done.
- `Average Load`: Simula carga promedio. To do.
- `Stress`: Empuja la API hasta que empiece a fallar. To do.
- `Soak`: Evalúa estabilidad a largo plazo. To do.
- `Breakpoint`: Detecta el punto de colapso del sistema. To do.

## 🚀 Cómo ejecutar un test

```bash
k6 run scripts/smoke/smoke.test.js
```
