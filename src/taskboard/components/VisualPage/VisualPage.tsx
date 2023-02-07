import "@n8n_io/n8n-demo-component";

import React from "react";

interface Props {
  visual: any;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "n8n-demo":
        | React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
          >
        | { workflow: string; frame: boolean };
    }
  }
}

const VisualPage: React.FC<Props> = ({ visual }) => {
  return (
    <div>
      <n8n-demo
        workflow={`${encodeURIComponent(JSON.stringify(visual)).replaceAll(
          "'",
          "%37",
        )}`}
        frame={true}
      ></n8n-demo>
    </div>
  );
};

export default VisualPage;
