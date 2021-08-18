import httpClient from '../apiClient';

export function createUser(userData) {
  return httpClient.client
    .post('/users', JSON.stringify(userData))
    .then(res => res.data);
}

export function createOrUpdateUser(userData) {
  return httpClient.client
    .patch('/users', JSON.stringify(userData))
    .then(res => res.data);
}

export function getUser() {
  return httpClient.client.get('/users').then(res => res.data);
}
