var api = class {
  static get baseUrl() {
    return 'http://192.168.0.191:8080/api';
  }

  static get timeout() {
    return 60 * 1000;
  }

  static fetch(url, init) {
    return new Promise((resolve, reject) => {
      let controller = new AbortController();
      let signal = controller.signal;

      setTimeout(() => controller.abort(), api.timeout);

      init.signal = signal

      fetch(url, init)
      .then(response => {
        if (!response.ok)
          reject(new Error(response.statusText));

        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  static get(url) {
    return api.fetch(url, {})
  }

  static post(url, data) {
    return api.fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });
  }

  static put(url, data) {
    return api.fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });
  }

  static delete(url) {
    return api.fetch(url, {
      method: 'DELETE',
    });
  }
}

api.routine = class {
  static get url() {
    return `${api.baseUrl}/routines`;
  }

  static add(routine) {
   return api.post(api.routine.url, routine);
  }

  static modify(routine, id) {
    return api.put(`${api.routine.url}/${id}`, routine);
  }

  static delete(id) {
    return api.delete(`${api.routine.url}/${id}`);
  }

  static get(id) {
    return api.get(`${api.routine.url}/${id}`);
  }

  static getAll() {
    return api.get(api.routine.url);
  }

  static execute(id) {
    return api.put(`${api.routine.url}/${id}/execute`, {});
  }
}

api.room = class {
  static get url() {
    return `${api.baseUrl}/rooms`;
  }

  static add(room) {
   return api.post(api.room.url, room);
  }

  static modify(room,id) {
    return api.put(`${api.room.url}/${id}`, room);
  }

  static delete(id) {
    return api.delete(`${api.room.url}/${id}`);
  }

  static get(id) {
    return api.get(`${api.room.url}/${id}`);
  }

  static getAll() {
    return api.get(api.room.url);
  }

  static getDevicesInRoom(id) {
    return api.get(`${api.room.url}/${id}/devices`);
  }

  static addDeviceToRoom(roomId, deviceId){
    return api.post(`${api.room.url}/${roomId}/devices/${deviceId}`, {});
  }
}

api.device = class { 
  static get url() {
    return `${api.baseUrl}/devices`;
  }

  static add(device){
    return api.post(api.device.url, device);
  }

  static modify(device) {
    return api.put(`${api.device.url}/${device.id}`, device);
  }

  static delete(id) {
    return api.delete(`${api.device.url}/${id}`);
  }

  static get(id) {
    return api.get(`${api.device.url}/${id}`);
  }

  static getAll() {
    return api.get(api.device.url);
  }

  static getState(id) {
    return api.get(`${api.device.url}/${id}/state`);
  }

  static executeAction(id, actionName, params){
    return api.put(`${api.device.url}/${id}/${actionName}`, params);
  }

}