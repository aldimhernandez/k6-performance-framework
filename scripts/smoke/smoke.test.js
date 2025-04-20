/**
 * scenario: Smoke Test
 * goal: Verificar si los endpoints responden correctamente en condiciones normales, con una carga mínima.
 * conditions:
 ** - 1 usuario virtual.
 ** - Duración: 30 segundos.
 * - Validar código 200 en
 **  - /,
 * todo:  - /contacts.php,
 * todo:  - /login.
 * todo: - Asegurar que el login funciona y redirige a /my_messages.php.
 */

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('https://test.k6.io/');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'body is not empty': (r) => r.body.length > 0,
  });
  sleep(1);
}
