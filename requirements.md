## 🎯 Objetivo General

Queremos asegurar que la API https://test.k6.io/ pueda manejar distintos niveles de carga y uso, simulando distintos escenarios reales y extremos de uso, para verificar:

1. Disponibilidad ✅
2. Rendimiento ⏱️
3. Estabilidad 🛠️
4. Escalabilidad 📈
5. Resistencia ante fallos 💥

## 🔍 Endpoints principales a utilizar

Método Endpoint Descripción
GET / Página principal, útil para smoke testing.
GET /contacts.php Página con formulario de contacto.
GET /news.php Página con contenido simulado.
POST /login Endpoint que requiere login con username=admin, password=123.
GET /my_messages.php Requiere login previo.

## 📋 Escenarios de Pruebas

1. 🔥 Smoke Test

Objetivo: Verificar si los endpoints responden correctamente en condiciones normales, con una carga mínima.

Condiciones:

- 1 usuario virtual.
- Duración: 30 segundos.
- Validar código 200 en /, /contacts.php, /login.
- Asegurar que el login funciona y redirige a /my_messages.php.

2. ⚖️ Average Load Test

Objetivo: Medir el comportamiento de la API bajo carga típica estimada (uso normal diario).

Condiciones:

- 10 usuarios concurrentes.
- Duración: 5 minutos.
- Incluir navegación básica y login (GET /, /news.php, POST /login).

Validar:

- Tasa de errores < 1%.
- Tiempo de respuesta medio < 500ms.

3. 🧨 Stress Test

Objetivo: Evaluar el punto donde el sistema empieza a degradarse (umbral de tolerancia).

Condiciones:

- Ramp-up: de 1 a 100 usuarios en 2 minutos.
- Mantener 100 usuarios durante 2 minutos.
- Ramp-down: volver a 0 en 1 minuto.

Medir:

- Cuándo empiezan a aparecer errores.
- Máximo throughput alcanzado.
- Tiempo de respuesta 95th percentile < 1.5s deseable.

4. 💧 Soak Test (Prueba de resistencia prolongada)

Objetivo: Evaluar estabilidad a lo largo del tiempo bajo carga sostenida.

Condiciones:

- 10 usuarios constantes.
- Duración: 30 minutos (o 1 hora en ejecución final).

Verificar:

- No hay memory leaks o degradación progresiva.
- Latencia estable a lo largo del tiempo.
- Errores acumulados < 0.5%.

5. 💀 Breakpoint Test (Exploración del límite absoluto)

Objetivo: Identificar el máximo punto de carga que el sistema puede manejar antes de colapsar.

Condiciones:

- Ramp-up constante hasta que el sistema colapse (ej. desde 10 hasta 300+ usuarios, escalando cada 30s).

Monitorear:

- Tasa de fallos por encima del 5%.
- Latencias > 2s.
- Saturación del backend (si tenes logs o alertas, se integran).
- Cuándo empieza a devolver códigos 500 o timeout.

## 🛠️ Consideraciones técnicas

- Simulación se hará desde un entorno local o CI.
- Se usarán scripts separados por tipo de prueba.
- Todas las requests deben loguear su resultado (si fallan).
- Se definirá un threshold para cada tipo de prueba.
- Se incluirá un summary.json y logs por ejecución.
