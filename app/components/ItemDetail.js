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
      <object className="viewer full-height" data={url} type="application/pdf">
        <p>
          Your browser doesn&apos;t support object embedding. <a href={url}>Download</a> the PDF instead.
        </p>
      </object>
    )
    case "audio":
      return (
        <audio className="viewer" data-type="audio" controls>
          <source src={url} type="audio/mp3" />
          <p>
            Your browser doesn&apos;t support HTML5 audio. <a href={url} download>Download</a> the audio instead.
          </p>
        </audio>
      )
    case "moving-image":
      return (
        <video className="viewer" data-type="video" controls>
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

const Metadata = ({notes}) => {
  return (
    <dl className="summary-list">
      {notes.map(n => (
        <div key={n.persistent_id.toString()} className="summary-list__row">
          <dt className="summary-list__key">{noteTitle(n.type)}</dt>
          <dd className="summary-list__value">{n.content}</dd>
        </div>
      ))}
    </dl>
  )
}

const DimesLink = ({dimesId}) => (
  <a className="btn btn--md btn--blue" href={`${process.env.DIMES_HOST}/objects/${dimesId}`}>
    View in DIMES
  </a>
)

export default function ItemDetail({ data, assetUrl }) {
  const scopeContent = data.notes.filter(n => n.type == 'scopecontent')
  const metadataNotes = data.notes.filter(n => ['physdesc', 'materialspec', 'phystech'].includes(n.type))

  return (
    <div className="grid">
      <div className="mb-20 item-page__header">
        <h1 className="mb-10">{data.title}</h1>
        <Note notes={scopeContent} />
      </div>
      <div className="item-page__viewer">
        <div className="item-page__viewer-wrapper">
          <Viewer category={data.category} url={assetUrl} />
        </div>
        <DownloadButton url={assetUrl} />
      </div>
      <div className="item-page__more-info">
        {data.category != 'catalogued-reports' && <Metadata notes={metadataNotes} />}
        <DimesLink dimesId={data.dimes_id}/>
      </div>
    </div>
  )
}