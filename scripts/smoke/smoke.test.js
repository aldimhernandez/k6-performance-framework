/**
 * scenario: Smoke Test
 * goal: Verificar si los endpoints responden correctamente en condiciones normales, con una carga mínima.
 * conditions:
 ** - 1 usuario virtual.
 ** - Duración: 30 segundos.
 ** - Validar que el tiempo de respuesta de las peticiones no supere los 500ms en el 95% de los casos.
 ** - Validar que el porcentaje de errores sea menor al 0.3%.
 * QuickPizza Legacy:
 * - Validar código 200 en
 * - /,
 * - /contacts.php,
 * - /my_message,
 * - Asegurar que el login funciona y redirige a /admin.
 * QuickPizza New:
 * - Validar código 200 en
 * - /api/admin/login
 * - Asegurar que el login funciona y devuelve un token.
 */

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.3'],
  },
};

export default function () {
  // QuickPizza Legacy
  const k6Res = http.get('https://test.k6.io/');
  check(k6Res, {
    'https://test.k6.io/: status is 200': (r) => r.status === 200,
    'https://test.k6.io/: body is not empty': (r) => r.body.length > 0,
  });

  const contacteRes = http.get('https://test.k6.io/contacts.php');
  check(contacteRes, {
    '/contacts: status is 200': (r) => r.status === 200,
    '/contacts: body contains Contact': (r) => r.body.includes('Contact'),
  });

  const getHTMLloginRes = http.get('https://quickpizza.grafana.com/my_messages.php');
  check(getHTMLloginRes, {
    '/login: status is 200': (r) => r.status === 200,
    '/login: url includes /my_messages.php': (r) => r.url.includes('/my_messages.php'),
    '/my_message: body includes redirection action to /admin.php': (r) => r.body.includes('<form method="POST" action="/admin.php">'),
  });

  // QuickPizza New
  const postLoginRes = http.post('https://quickpizza.grafana.com/api/admin/login?user=admin&password=admin');
  console.log('postLoginRes', postLoginRes);
  check(postLoginRes, {
    '/login status is 200': (r) => r.status === 200,
    '/login response includes token': (r) => r.body.includes('token'),
  });

  sleep(1);
}
