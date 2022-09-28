export default {
  projectLink: 'https://github.com/apibara/starknet-react',
  docsRepositoryBase: 'https://github.com/apibara/starknet-react/blob/main/website/pages',
  titleSuffix: ' – StarkNet React',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © GNC Labs Limited.`,
  footerEditLink: `Edit this page on GitHub`,
  floatTOC: true,
  logo: (
    <>
      <span className="hidden font-extrabold md:inline mr-2">StarkNet React</span>
      <span className="text-gray-600 font-normal hidden md:inline">React hooks for StarkNet</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="StarkNet React: react hooks for StarkNet" />
      <meta name="og:title" content="StarkNet React: react hooks for StarkNet" />
    </>
  ),
}