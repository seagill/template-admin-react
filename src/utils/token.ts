const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY;
export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || '';
}

export function setToken(jwt: string) {
  localStorage.setItem(TOKEN_KEY, jwt);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}
