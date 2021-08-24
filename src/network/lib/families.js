import httpClient from '../apiClient';

export function createFamily(userData) {
  return httpClient.client
    .post('/families', JSON.stringify(userData))
    .then(res => res.data);
}

export function getFamilies(userId) {
  return httpClient.client.get(`/families/${userId}`).then(res => res.data);
}
