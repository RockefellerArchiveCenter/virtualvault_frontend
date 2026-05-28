import { fetchDocument } from "../../utils/fetchDocument";

const Note = ({ notes }) => (
  notes.map(noteData => {
    if (noteData.jsonmodel_type == 'note_multipart') {
      return noteData.subnotes.map(s => (<p key={s.content.toString()}>{s.content}</p>))
    } else if (noteData.jsonmodel_type == 'note_singlepart') {
      return <p key={noteData.content.toString()}>{noteData.content}</p>
    }
  })
)

const Viewer = ({ category, url }) => {
  switch (category) {
    case "catalogued-reports":
      return (
      <object data={url} type="application/pdf" style={{width: "90%", height: "100vh"}}>
        <p>
          Your browser doesn&apos;t support object embedding. <a href={url}>Download</a> the PDF instead.
        </p>
      </object>
    )
    case "audio":
      return (
        <audio data-type="audio" controls style={{width: "90%"}}>
          <source src={url} type="audio/mp3" />
          <p>
            Your browser doesn&apos;t support HTML5 audio. <a href={url} download>Download</a> the audio instead.
          </p>
        </audio>
      )
    case "moving-image":
      return (
        <video data-type="video" controls style={{width: "90%"}}>
          <source type="video/mp4" src={url} />
          <p>
            Your browser doesn&apos;t support HTML5 video. <a href={url} download>Download</a> the video instead.
          </p>
        </video>
      )
  }
  
}

const DownloadButton = ({ url }) => (
  <a className="btn btn--md btn--blue" href={url}>Download</a>
)

const noteTitle = (noteType) => {
  switch(noteType) {
    case 'physdesc':
      return "Physical Description"
    case 'materialspec':
      return "Material Specific Information"
    case 'phystech':
      return "Physical and Technical Information"
  }
}

const constructItemUrl = (category, itemId) => {
  switch (category) {
    case "catalogued-reports":
      return`${process.env.ASSETS_BASEURL}/${category}/${itemId}/${itemId}.pdf`
    case "audio":
      return `${process.env.ASSETS_BASEURL}/${category}/${itemId}/${itemId}.mp3`
    case "moving-image":
      return `${process.env.ASSETS_BASEURL}/${category}/${itemId}/${itemId}.mp4`
  }
}

const Metadata = ({notes}) => {
  return (
    <dl className="summary-list">
      {notes.map(n => (
        <div key={n.content.toString()} className="summary-list__row">
          <dt className="summary-list__key">{noteTitle(n.type)}</dt>
          <dd className="summary-list__value">{n.content}</dd>
        </div>
      ))}
    </dl>
  )
}

const DimesLink = ({dimesId}) => (
  <a className="btn btn--md btn--blue" href={`https://dimes.rockarch.org/objects/${dimesId}`}>
    View in DIMES
  </a>
)

export default async function ItemDetail({ params }) {
  const { identifier } = await params;
  const data = await fetchDocument(identifier)
  const scopeContent = data.notes.filter(n => n.type == 'scopecontent')
  const metadataNotes = data.notes.filter(n => ['physdesc', 'materialspec', 'phystech'].includes(n.type))
  const itemUrl = constructItemUrl(data.category, identifier)

  return (
    <div className="grid">
      <div className="mb-20" style={{gridColumnStart: 1, gridColumnEnd: `span 12`}}>
        <h1 className="mb-10">{data.title}</h1>
        <Note notes={scopeContent} />
      </div>
      <div style={{gridColumnStart: 1, gridColumnEnd: `span 9`}}>
        <Viewer category={data.category} url={itemUrl} />
        <DownloadButton url={itemUrl} />
      </div>
      <div style={{gridColumnStart: 10, gridColumnEnd: `span 3`}}>
        {data.category != 'catalogued-reports' && <Metadata notes={metadataNotes} />}
        <DimesLink dimesId={data.dimes_id}/>
      </div>
    </div>
  )
}