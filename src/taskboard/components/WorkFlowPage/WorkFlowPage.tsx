/* eslint-disable no-console */
import { Backlink } from "@saleor/components/Backlink";
import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import { sectionNames } from "@saleor/intl";
import { makeStyles, PageTab, PageTabPanel, PageTabs } from "@saleor/macaw-ui";
import { taskListUrl } from "@saleor/taskboard/urls";
import { bridge } from "@saleor/utils/schema";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { AutoForm } from "uniforms-material";

const useStyles = makeStyles(
  theme => ({
    tabContainer: {
      background: theme.palette.background.default,
      borderRadius: 4,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    formWorkFlow: {
      "& .MuiOutlinedInput-inputMarginDense": {
        paddingTop: "25px!important",
        paddingBottom: "10px!important",
      },
    },
  }),
  { name: "WorkFlow" },
);

export interface WorkFlowPageProps {
  modal: any;
}

const pageTabs = [
  { value: "workflow", label: "Work Flow" },
  { value: "visual", label: "Visual" },
];

const WorkFlowPage: React.FC<WorkFlowPageProps> = ({ modal }) => {
  const classes = useStyles();
  const [tab, setTab] = useState("workflow");
  const intl = useIntl();
  return (
    <>
      <Container>
        <Backlink href={taskListUrl()}>
          {intl.formatMessage(sectionNames.tasks)}
        </Backlink>
        <PageHeader title={intl.formatMessage(sectionNames.workFlow)} />
        <div className={classes.tabContainer}>
          <PageTabs value={tab} onChange={setTab}>
            {pageTabs.map(item => {
              return (
                <PageTab
                  key={item.value}
                  value={item.value}
                  label={item.label}
                />
              );
            })}
          </PageTabs>
          <PageTabPanel show={tab === "workflow"}>
            <div className={classes.formWorkFlow}>
              <AutoForm schema={bridge} model={modal} onSubmit={console.log} />
            </div>
          </PageTabPanel>
          <PageTabPanel show={tab === "visual"}>
            <h1>visual</h1>
          </PageTabPanel>
        </div>
      </Container>
    </>
  );
};

export default WorkFlowPage;
