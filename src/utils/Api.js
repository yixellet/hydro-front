class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.parseResponse = this.parseResponse.bind(this)
  }

  parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(res.status))
  }

  getGauges() {
    return fetch(`${this.baseUrl}/gauges/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  getGaugeInfo(id) {
    return fetch(`${this.baseUrl}/gauges/${id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  getFullYearObservations(code, year) {
    return fetch(`${this.baseUrl}/obs?code=${code}&year=${year}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  getSingleObservation(code, date) {
    return fetch(`${this.baseUrl}/singleobs?code=${code}&date=${date}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  async getObsCount(code) {
    const res = await fetch(`${this.baseUrl}/count?code=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return this.parseResponse(res);
  }
};

export default Api;
