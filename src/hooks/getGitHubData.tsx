import React, { createContext, useCallback, useContext, useState } from "react";
import axios from "axios";

interface RepositoriesSchema {
  id: number;
  html_url: string;
  name: string;
  description: string;
  language: string;
}

interface GetGitHubDataSchema {
  repositories: RepositoriesSchema[];
  getRepositoriesData: () => void
  loading: boolean
}

interface GitHubDataProviderProps {
  children: React.ReactNode;
}

const getGitHubData = createContext({} as GetGitHubDataSchema);

function GitHubDataProvider({ children }: GitHubDataProviderProps) {
  const [repositories, setRepositories] = useState<RepositoriesSchema[]>([]);
  const [loading, setLoaging] = useState(true)

  const getRepositoriesData = useCallback(() => {
    setLoaging(true)
    setTimeout(() => {
      axios
      .get("https://api.github.com/users/jhonesjhonatas/repos")
      .then(response => setRepositories(response.data))
      .finally(() => setLoaging(false));
    },2000)
  }, []);

  return (
    <getGitHubData.Provider value={{ repositories, getRepositoriesData, loading }}>
      {children}
    </getGitHubData.Provider>
  );
}

function useGetGitHubData (){
  const context = useContext(getGitHubData)

  return context
}

export { GitHubDataProvider, useGetGitHubData };
