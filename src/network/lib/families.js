import httpClient from '../apiClient';

export function createFamily(userData) {
  return httpClient.client
    .post('/families', JSON.stringify(userData))
    .then(res => res.data);
}
