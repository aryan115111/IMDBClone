import NavbarItem from "./NavbarItem"
export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-[#242526] bg-amber-100 lg:text-lg p-3 sm:p-4">
      <NavbarItem title='Trending' pram="fetchTrending" />
      <NavbarItem title='Top Rated' pram="fetchTopRated" />

    </div>
  )
}