import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import React from "react";

interface FileViewerProps {
  docs: [{ uri: string }];
}

const FileViewer: React.FC<FileViewerProps> = ({ docs }) => (
  <React.Fragment>
    <DocViewer
      theme={{ disableThemeScrollbar: false }}
      documents={docs}
      pluginRenderers={DocViewerRenderers}
    />
  </React.Fragment>
);

export default FileViewer;
