import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { RepositorysArea } from "./styles";

export function SkeletonLoading() {
  return (
    <RepositorysArea>
      <Skeleton baseColor="#0f172a" highlightColor="#1e293b" height={224} width={320} />
      <Skeleton baseColor="#0f172a" highlightColor="#1e293b" height={224} width={320} />
      <Skeleton baseColor="#0f172a" highlightColor="#1e293b" height={224} width={320} />
      <Skeleton baseColor="#0f172a" highlightColor="#1e293b" height={224} width={320} />
      <Skeleton baseColor="#0f172a" highlightColor="#1e293b" height={224} width={320} />
      <Skeleton baseColor="#0f172a" highlightColor="#1e293b" height={224} width={320} />
      <Skeleton baseColor="#0f172a" highlightColor="#1e293b" height={224} width={320} />
      <Skeleton baseColor="#0f172a" highlightColor="#1e293b" height={224} width={320} />
    </RepositorysArea>
  );
}
