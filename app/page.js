
import CategoryCrousel from "@/components/CategoryCarousel";
import MainCrousel from "@/components/MainCrousel";
export default function Home() {
 
  return (
    <main className="h-full w-full">
      <MainCrousel />
      <CategoryCrousel categoryName="Drama" />
      <CategoryCrousel categoryName="Horror" />
      <CategoryCrousel categoryName="Romance" />
      <CategoryCrousel categoryName="Action" />
      <CategoryCrousel categoryName="Thriller" />
    </main>
  );
}
