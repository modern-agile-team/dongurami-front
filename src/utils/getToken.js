function getToken() {
  if (typeof window !== 'undefined') return window.localStorage.getItem('jwt');
  return undefined;
}

export default getToken;
