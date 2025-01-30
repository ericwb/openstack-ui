import { AuthProvider, HttpError } from "react-admin";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {

  async login({ username, password }) {

    const osUserDomainName = "Default"
    const osProjDomainName = "Default" 
    const osProjName = "admin"

    const apiUrl = import.meta.env.VITE_SIMPLE_REST_URL + "identity/v3/auth/tokens?nocatalog";

    const body = { 
      auth: {
        identity: {
          methods: ["password"],
          password: {
            user: {
              domain: { name: osUserDomainName },
              name: username,
              password: password
            }
          }
        },
        scope: {
          project: {
            domain: { name: osProjDomainName },
            name: osProjName
          }
        }
      }
    };

    const request = new Request(apiUrl, {
    	method: 'POST',
    	body: JSON.stringify(body),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    let response;
    try {
        response = await fetch(request);
    } catch (_error) {
        throw new Error('Network error: ' + _error);
    }
    if (response.status < 200 || response.status >= 300) {
	     //throw new Error(response.statusText);

      return Promise.reject(
        new HttpError("Unauthorized", 401, {
          message: "Invalid username or password",
          }
        ),
      );
    }

    const subjectToken = response.headers.get("X-Subject-Token");
    console.log("X-Subject-Token:", subjectToken);
    localStorage.setItem("authToken", subjectToken);

    const auth = await response.json();
    console.log(JSON.stringify(auth));
    localStorage.setItem("token", JSON.stringify(auth));

    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },

  checkError: () => Promise.resolve(),

  checkAuth: () =>
    localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),

  getPermissions: () => {
    return Promise.resolve(undefined);
  },

  getIdentity: () => {
    const persistedUser = localStorage.getItem("token");
    const token = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(token);
  },
};

export default authProvider;
