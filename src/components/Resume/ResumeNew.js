import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume_Hasibul-Islam.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Title from "../Title";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://doc-00-20-docs.googleusercontent.com/docs/securesc/eb9dvbd6e3lc68pa6ndh5qfjk1vefovb/5v3q6hjaf85vp4qp5di6qq89b3iqc94t/1655375250000/00611548174524166900/00611548174524166900/1Gdbax82oaBWz2_0-OYh44E7QvfB53wNS?e=download&ax=ACxEAsYAN7SV4xcWewZiVfqYUi_J2h9tedIVhkgCm5IC4-Pnch36jOB8eKchfemOIM2R48zrripiGtNeDuXMgeb6QdqN0NbtvIUjQTQ8i4nGi33aeOm5L16ODZr42cp6YRY6LonfqJFjJ4al86tIJMonz3nYeuIyBdXOJuOUEm_FBHLEMz6DqafYF_lcS6CxwQ9OhCe8gJsywfMUMGmhWpkGPo422uzEJWAFklvFXJGlQ6GlOQJbdV50z19kPoU6vwhqUfe-q7p6VwsEo6NRL1v1WWO7N1xmRxIb4XldWEOfKhvv9hVr8GWl_kuxPa5Ur5wC_GMRZF8ezX6J9rNDOOe1gpDz6XoGbN61XL3zt8-VtoSQ_1Qrg75CQNhd88JSI5Gu06LcwL4yzWTYk27CLUign0G23dOS6gYh9kFVpdMcxGAI4r3r3HjYCnyHO2dlLbjTiMqW22M7NMETII-loMiCkLgRge6RUz6rUW4rqzcmYqNi8vRGZc5IiY3Fo6omJFOjad85ozfk91zxvYj9DjfSL8EYbUnWGteWdC-pCaUeOpVeyA4_To28OpHGbJuOrftTuGlCQ7Z4lNb56JEGvuBNIZ230ee0TNQpPZiV2qOR93HyaAs7c3TrUng-XkBaugFCY35Rl_fWqD-wNupvtOU6bZy0AwY6xajxmO-cKApjH46oUu86e9pQhroRs2JwbdxlLFpU5JkgmHImug&authuser=0&nonce=816s3u45bpf2c&user=00611548174524166900&hash=9h098n1rr7s7fiac8cnfo44s8g4a9pin";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Title title={'Resume'} />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            // href={pdf}
            // target="_blank"
            href={resumeLink}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          {
            [1, 2]?.map((page, index) => <Document
              key={index + 1}
              file={pdf}
              className={`d-flex justify-content-center ${index === 0 && 'mb-3'}`}
              loading={`loading pdf page ${page}`}
            >
              <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6} loading={"please wait..."} />
            </Document>)
          }
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            // href={pdf}
            // target="_blank"
            href={resumeLink}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
