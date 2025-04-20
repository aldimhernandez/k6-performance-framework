# k6 Performance Testing Framework

Este repositorio contiene distintos tipos de pruebas de rendimiento realizadas con [k6](https://k6.io/), orientadas a validar la estabilidad y escalabilidad de la API pública https://test.k6.io/.

## 📂 Estructura del Proyecto

```
.
├── scripts
│   ├── smoke
│   ├── average-load
│   ├── stress
│   ├── soak
│   └── breakpoint
├── results
├── thresholds
├── dashboards
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
