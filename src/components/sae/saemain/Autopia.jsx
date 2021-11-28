import React, { useState } from "react";
import Pdf from "@mikecousins/react-pdf";


const Autopia = () => {

    const [page, setPage] = useState(1);
    console.log(window.innerWidth);

    return (
        <>


            <section className="pdf text-center justify-content-center align-content-center" style={{ height: "120vh", width: "auto" }}>
                <Pdf file="http://www.pdf995.com/samples/pdf.pdf" page={page}>
                    {({ pdfDocument, pdfPage, canvas }) => (
                        <>
                            {!pdfDocument && <span>Loading...</span>}
                            {canvas}
                            {Boolean(pdfDocument && pdfDocument.numPages) && (
                                <nav className="text-center">
                                    <ul className="pager">
                                        <ol className="previous" style={{ textDecoration: "none" }}>
                                            <button className="mr-3 p-2 bg-danger text-white"
                                                disabled={page === 1}
                                                onClick={() => setPage(page - 1)}
                                            >
                                                Previous
                                            </button>
                                            <button className="mr-3 p-2 bg-danger text-white"
                                                disabled={page === pdfDocument.numPages}
                                                onClick={() => setPage(page + 1)}
                                            >
                                                Next
                                            </button>
                                        </ol>
                                        {/* <li className="next">
                                        <button
                                            disabled={page === pdfDocument.numPages}
                                            onClick={() => setPage(page + 1)}
                                        >
                                            Next
                                        </button>
                                    </li> */}
                                    </ul>
                                </nav>
                            )}
                        </>
                    )}
                </Pdf>
            </section>

        </>
    )
}

export default Autopia
