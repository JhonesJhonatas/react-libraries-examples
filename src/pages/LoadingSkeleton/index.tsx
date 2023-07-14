import { Folder } from "@phosphor-icons/react";
import {
  Container,
  RepositoryBox,
  RepositoryLanguageColor,
  RepositorysArea,
} from "./styles";
import { useGetGitHubData } from "../../hooks/getGitHubData";
import { useEffect } from "react";
import { SkeletonLoading } from "./components/SkeletonLoading";
export function LoadingSkeleton() {
  const { getRepositoriesData, repositories, loading } = useGetGitHubData();

  useEffect(() => {
    getRepositoriesData();
  }, [getRepositoriesData]);

  return (
    <Container>
      <h1>Explore Seus Repositórios</h1>

      <RepositorysArea>
        {loading === true ? (
          <SkeletonLoading />
        ) : (
          repositories.map((repositorie) => {
            return (
              <RepositoryBox key={repositorie.id}>
                <header>
                  <Folder size={20} />
                  <span>{repositorie.name}</span>
                </header>
                
                <p>{repositorie.description}</p>
                <div>
                <RepositoryLanguageColor language={repositorie.language}></RepositoryLanguageColor>
                  <span >
                    {repositorie.language}
                  </span>
                </div>
              </RepositoryBox>
            );
          })
        )}
      </RepositorysArea>
    </Container>
  );
}
