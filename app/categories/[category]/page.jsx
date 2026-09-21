'use client";'
import ShowCategory from "@/components/ShowCategories";
import { CategoryName } from "@/lib/showingData";


export default async function CategoryPage({ params }) {
 
 
  const { category } = await params;
  const shows = CategoryName(category);
  
  return <ShowCategory category={shows} />;

}