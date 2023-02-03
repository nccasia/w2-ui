import WorkFlowPage from "@saleor/taskboard/components/WorkFlowPage";
import { TaskListUrlQueryParams } from "@saleor/taskboard/urls";
import React from "react";

interface WorkFlowProps {
  params: TaskListUrlQueryParams;
}

export const WorkFlow: React.FC<WorkFlowProps> = () => {
  const modal = {
    id: "[DEV#40] Device request",
    on: {
      SET_ACTIVE: { actions: "setActive" },
      CHANGE_STATUS: [
        { cond: "isTodo", target: "#TODO" },
        { cond: "isDiscarded", target: "#DISCARDED" },
      ],
    },
    type: "compound",
    states: {
      NEW: {
        meta: { MAIN: { state: "NEW" } },
        type: "atomic",
        invoke: { src: "setupTask", onDone: { target: "TODO" } },
      },
      DONE: {
        id: "DONE",
        type: "compound",
        states: {
          APPROVED: { meta: { MAIN: { state: "APPROVED" } }, type: "final" },
          REJECTED: { meta: { MAIN: { state: "REJECTED" } }, type: "final" },
        },
      },
      TODO: {
        id: "TODO",
        on: {
          changeStatus: [
            { cond: "isDoing", target: "DOING" },
            { cond: "isDiscarded", target: "#DISCARDED" },
          ],
        },
        meta: { MAIN: { state: "TODO" } },
        type: "atomic",
        invoke: { src: "checkTodo", onDone: { target: "DOING" } },
      },
      DOING: {
        id: "DOING",
        type: "compound",
        states: {
          IT_APPROVAL: {
            id: "IT_APPROVAL",
            meta: { MAIN: { state: "IT_APPROVAL" } },
            type: "compound",
            states: {
              SETUP: {
                invoke: {
                  src: "fetchIt",
                  onDone: { target: "WAIT_IT_APPROVAL", actions: "assignTask" },
                },
              },
              APPROVED: {
                on: { always: [{ cond: "pass", target: "#DONE.APPROVED" }] },
                meta: { IT_APPROVAL: { state: "APPROVED" } },
                type: "final",
              },
              REJECTED: {
                on: { always: [{ cond: "pass", target: "#DONE.REJECTED" }] },
                meta: { IT_APPROVAL: { state: "REJECTED" } },
                type: "final",
              },
              WAIT_IT_APPROVAL: {
                on: {
                  FORM_SUBMIT_IT_APPROVAL: [
                    { cond: "isApproved", target: "APPROVED" },
                    { cond: "isRejected", target: "REJECTED" },
                  ],
                },
                meta: { IT_APPROVAL: { state: "WAIT_IT_APPROVAL" } },
              },
            },
            initial: "SETUP",
          },
          PM_APPROVAL: {
            id: "PM_APPROVAL",
            meta: { MAIN: { state: "PM_APPROVAL" } },
            type: "compound",
            states: {
              SETUP: {
                invoke: {
                  src: "fetchPm",
                  onDone: { target: "WAIT_PM_APPROVAL", actions: "assignTask" },
                },
              },
              APPROVED: {
                on: { always: [{ cond: "pass", target: "#SALE_APPROVAL" }] },
                meta: { PM_APPROVAL: { state: "APPROVED" } },
                type: "final",
              },
              REJECTED: {
                on: { always: [{ cond: "pass", target: "#DONE.REJECTED" }] },
                meta: { PM_APPROVAL: { state: "REJECTED" } },
                type: "final",
              },
              FORWARDED: {
                on: { always: [{ cond: "pass", target: "#SALE_APPROVAL" }] },
                meta: { PM_APPROVAL: { state: "FORWARDED" } },
                type: "final",
              },
              WAIT_PM_APPROVAL: {
                on: {
                  FORM_SUBMIT_PM_APPROVAL: [
                    { cond: "isApproved", target: "APPROVED" },
                    { cond: "isRejected", target: "REJECTED" },
                  ],
                },
                meta: { PM_APPROVAL: { state: "WAIT_PM_APPROVAL" } },
              },
            },
            initial: "SETUP",
          },
          SALE_APPROVAL: {
            id: "SALE_APPROVAL",
            meta: { state: "SALE_APPROVAL" },
            type: "compound",
            states: {
              APPROVED: {
                on: { always: [{ cond: "pass", target: "#IT_APPROVAL" }] },
                meta: { SALE_APPROVAL: { state: "APPROVED" } },
                type: "final",
              },
              REJECTED: {
                on: { always: [{ cond: "pass", target: "#DONE.REJECTED" }] },
                meta: { SALE_APPROVAL: { state: "REJECTED" } },
                type: "final",
              },
              WAIT_SALE_APPROVAL: {
                on: {
                  FORM_SUBMIT_SALE_APPROVAL: [
                    { cond: "isApproved", target: "APPROVED" },
                    { cond: "isRejected", target: "REJECTED" },
                  ],
                },
                meta: { SALE_APPROVAL: { state: "WAIT_SALE_APPROVAL" } },
              },
            },
            initial: "WAIT_SALE_APPROVAL",
          },
          CUSTOMER_APPROVAL: {
            id: "CUSTOMER_APPROVAL",
            meta: { MAIN: { state: "CUSTOMER_APPROVAL" } },
            type: "compound",
            states: {
              APPROVED: {
                on: { always: "#IT_APPROVAL" },
                meta: { CUSTOMER_APPROVAL: { state: "APPROVED" } },
                type: "final",
              },
              REJECTED: {
                on: { always: [{ cond: "pass", target: "#DONE.REJECTED" }] },
                meta: { CUSTOMER_APPROVAL: { state: "REJECTED" } },
                type: "final",
              },
              WAIT_CUSTOMER_APPROVAL: {
                on: {
                  FORM_SUBMIT_CUSTOMER_APPROVAL: [
                    { cond: "isApproved", target: "APPROVED" },
                    { cond: "isRejected", target: "REJECTED" },
                  ],
                },
                meta: {
                  CUSTOMER_APPROVAL: { state: "WAIT_CUSTOMER_APPROVAL" },
                },
              },
            },
            initial: "WAIT_CUSTOMER_APPROVAL",
          },
        },
        initial: "PM_APPROVAL",
      },
      DISCARDED: { id: "DISCARDED", type: "final" },
    },
    context: {},
    initial: "NEW",
  };
  return (
    <>
      <WorkFlowPage modal={modal} />
    </>
  );
};

export default WorkFlow;
