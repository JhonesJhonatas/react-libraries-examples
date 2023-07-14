import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { RepositorysArea } from "./styles";

export function SkeletonLoading() {
  return (
    <RepositorysArea>
      <Skeleton height={224} width={288} />
      <Skeleton height={224} width={288} />
      <Skeleton height={224} width={288} />
      <Skeleton height={224} width={288} />
      <Skeleton height={224} width={288} />
      <Skeleton height={224} width={288} />
      <Skeleton height={224} width={288} />
      <Skeleton height={224} width={288} />
    </RepositorysArea>
  );
}
