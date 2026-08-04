import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemDetail from "../components/ItemDetail"

const data = {
    category: "audio",
    dimes_id: "M5UvSPeKYD3jffEzKoEmF9",
    url: "/01a67b6eff2543859918f50f07c721e3",
    title: "Mark Kac. Chance, Fluctuations and Order, 1973 September 28",
    notes: [
        {
            jsonmodel_type: "note_multipart",
            rights_restriction: {
                local_access_restriction_type: []
            },
            persistent_id: "18e4c8edad7269324d55804c4b66839f",
            subnotes: [
                {
                    jsonmodel_type: "note_text",
                    publish: true,
                    content: "Open for research. Digital access copy available."
                }
            ],
            type: "accessrestrict",
            publish: true
        },
        {
            jsonmodel_type: "note_multipart",
            rights_restriction: {
                local_access_restriction_type: []
            },
            persistent_id: "1f9fc8cac75e81f2545211cd096abd43",
            subnotes: [
                {
                    jsonmodel_type: "note_text",
                    publish: true,
                    content: "In order for a Tape to be used, permission must be obtained from the lecturer."
                }
            ],
            type: "userestrict",
            publish: true
        },
        {
            jsonmodel_type: "note_multipart",
            rights_restriction: {
                local_access_restriction_type: []
            },
            persistent_id: "1f9fc8cac75e81f2545211cd096abd43",
            subnotes: [
                {
                    jsonmodel_type: "note_text",
                    publish: true,
                    content: "Scope and content note"
                }
            ],
            type: "scopecontent",
            publish: true
        },
        {
            jsonmodel_type: "note_singlepart",
            type: "materialspec",
            content: [
                "1/4 inch audio tape"
            ],
            persistent_id: "3b79348061d7bcebf2752f886175fb05",
            publish: true
        },
        {
            jsonmodel_type: "note_singlepart",
            type: "physdesc",
            content: [
                "Sound, 62 minutes"
            ],
            persistent_id: "f302d0f6c33cb5bb4999c1232efddf58",
            publish: true
        },
        {
            jsonmodel_type: "note_singlepart",
            type: "phystech",
            content: [
                "phystech note"
            ],
            persistent_id: "f302d0f6c33cb5bb4999c1232efddf58",
            publish: true
        }
    ]
}

describe("ItemDetail Component", () => {
  it("renders the component", () => {
    render(<ItemDetail 
        data={data} 
        assetUrl={`${process.env.ASSETS_BASEURL}/audio/01a67b6eff2543859918f50f07c721e3/01a67b6eff2543859918f50f07c721e3.mp3`} />);

    expect(screen.getByText("Mark Kac. Chance, Fluctuations and Order, 1973 September 28")).toBeInTheDocument(); // title

    expect(screen.getByText("Scope and content note")).toBeInTheDocument(); // Scope and content note

    expect(screen.getAllByRole('link', { name: 'Download' })[0]).toHaveAttribute('href', `${process.env.ASSETS_BASEURL}/audio/01a67b6eff2543859918f50f07c721e3/01a67b6eff2543859918f50f07c721e3.mp3`) // Viewer
    expect(screen.getAllByRole('link', { name: 'Download' })[1]).toHaveAttribute('href', `${process.env.ASSETS_BASEURL}/audio/01a67b6eff2543859918f50f07c721e3/01a67b6eff2543859918f50f07c721e3.mp3`) // Download button
    expect(screen.getByRole('link', { name: 'View in DIMES' }).getAttribute('href')).toContain('/objects/M5UvSPeKYD3jffEzKoEmF9') // View in DIMES button
    
    expect(screen.getByText("Sound, 62 minutes")).toBeInTheDocument(); // materialspec
    expect(screen.getByText("1/4 inch audio tape")).toBeInTheDocument(); // physdesc
    expect(screen.getByText("phystech note")).toBeInTheDocument(); // phystech
  });
});