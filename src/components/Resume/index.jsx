import { ScreenContainer, ResumeWrap, PDFView } from './ResumeElements';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import JayJhangianiResume from '../../assets/pdfs/JayJhangianiResume.pdf';

const ResumeSection = () => {
  const newplugin = defaultLayoutPlugin();

  return (
    <ScreenContainer>
      <ResumeWrap>
        <Icon to="/">Jay Jhangiani</Icon>
        <PDFView>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <>
              <Viewer
                fileUrl={JayJhangianiResume}
                plugins={[newplugin]}
              />
            </>
          </Worker>
        </PDFView>
      </ResumeWrap>
    </ScreenContainer>
  );
};

export default ResumeSection;
