/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */

import { AxiosError } from 'axios';
import Router from 'next/router';
import { createContext, useState, useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';

import { api } from '../services/api';

const AuthContext = createContext<any | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [responseData, setResponseData] = useState<any>([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState<null | any>('');
  const [registerError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookie, setCookie, removeCookie] = useCookies(['access_code']);

  useEffect(() => {
    if (cookie.access_code) {
      api.defaults.headers.access_code = `${cookie.access_code}`;

      loadData(cookie.access_code);
    }
    setLoading(false);
  }, []);

  async function loadData(data: any) {
    const response = await api.get('/family', { headers: { data } });
    setResponseData(response.data);
  }

  async function signIn(data: any) {
    try {
      const response = await api.get('/family', { headers: data });

      setLoginError(null);

      api.defaults.headers.access_code = response.data.access_code;

      setCookie('access_code', response.data.access_code);

      setResponseData(response.data);
      if (responseData) {
        Router.push('/pool');
      }
    } catch (error: AxiosError) {
      setLoginError(error.response.data.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated,
        loginError,
        registerError,
        signIn,
        responseData,
        loadData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
