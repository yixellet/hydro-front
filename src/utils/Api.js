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
    /**
     * Запрос перечня гидропостов
     */
    return fetch(`${this.baseUrl}/gauges/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  getGaugeInfo(code) {
    /**
     * Запрос полной информации о гидропосте
     */
    return fetch(`${this.baseUrl}/gauges/${code}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  getFullYearObservations(code, year) {
    /**
     * Запрос ежедневных уровней за конкретный год
     */
    return fetch(`${this.baseUrl}/obs?code=${code}&year=${year}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  getSingleObservation(code, date) {
    /**
     * Запрос единичного уровня на конкретную дату
     */
    return fetch(`${this.baseUrl}/singleobs?code=${code}&date=${date}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.parseResponse)
  }

  async getObsCount(code) {
    /**
     * Запрос информации о полноте данных
     */
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
