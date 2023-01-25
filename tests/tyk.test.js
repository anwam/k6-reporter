// k6 simple get load test with reporter

import http from 'k6/http'
import { check } from 'k6'

import { htmlReport } from '../dist/bundle.js'

export function handleSummary(data) {
  return {
    'summary.html': htmlReport(data, { debug: false }),
  }
}

export const options = {
  vus: 1,
  duration: '90s',
  summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(90)', 'p(95)', 'p(99)'],
}

export default function () {
  const response = http.get('')
  check(response, {
    'Status is ok': (r) => r.status === 200,
  })
}
