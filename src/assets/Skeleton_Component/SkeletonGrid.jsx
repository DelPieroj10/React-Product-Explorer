import SkeletonCard from "./SkeletonCard";

export const SkeletonGrid = ({ count = 6 }) => {
  return (
    <>
    {Array.from({ length: count }).map ((_, i) => (
      <SkeletonCard key={i} />
    ))}
    </>
  );
}
