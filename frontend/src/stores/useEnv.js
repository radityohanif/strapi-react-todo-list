const backendUrl = (path) => {
  const baseUrl = process.env.REACT_APP_BACKEND;
  
  console.log({REACT_APP_BACKEND: baseUrl})
  console.log(process.env)
  
  return process.env.REACT_APP_BACKEND + path
}

export const useEnv = {
  backendUrl
}