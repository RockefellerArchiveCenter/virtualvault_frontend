import { fetchDocument } from "../../utils/fetchDocument";
import ItemDetail from "../components/ItemDetail";

const constructAssetUrl = (category, itemId) => {
  switch (category) {
    case "catalogued-reports":
      return`${process.env.ASSETS_BASEURL}/${category}/${itemId}/${itemId}.pdf`
    case "audio":
      return `${process.env.ASSETS_BASEURL}/${category}/${itemId}/${itemId}.mp3`
    case "moving-image":
      return `${process.env.ASSETS_BASEURL}/${category}/${itemId}/${itemId}.mp4`
  }
}

export default async function DetailPage({ params }) {
  const { identifier } = await params;
  const data = await fetchDocument(identifier)
  const assetUrl = constructAssetUrl(data.category, identifier)

  return (
    <ItemDetail 
      data={data}
      assetUrl={assetUrl} />
  )
}