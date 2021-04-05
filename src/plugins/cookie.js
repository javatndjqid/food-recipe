export default {
  getSession: () => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; sid=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  },
  clearSession: () => {
    document.cookie = "sid=;max-age=0;"
  }
}