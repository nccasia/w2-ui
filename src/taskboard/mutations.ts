import { gql } from "@apollo/client";

export const CreateTask = gql`
  mutation CreateTask($data: New_task!) {
    createTaskInput(newTask: $data) {
      id
    }
  }
`;

export const InsertComment = gql`
  mutation InsertComment($content: String!, $taskId: Int!, $creatorId: Int!) {
    insert_Comment(
      objects: { content: $content, taskId: $taskId, creatorId: $creatorId }
    ) {
      returning {
        id
        taskId
        content
        creatorId
      }
    }
  }
`;

export const SubmitTask = gql`
  mutation SubmitTask($value: json!, $formId: Int!, $taskId: Int!) {
    submitTask(input: { value: $value, taskId: $taskId, formId: $formId }) {
      submitTask {
        id
        name
        code
        description
      }
    }
  }
`;

export const SingleChoiceAssignee = gql`
  mutation UpdateAssignee($_eq: Int!, $assigneeId: Int!) {
    update_Task(
      where: { id: { _eq: $_eq } }
      _set: { assigneeId: $assigneeId }
    ) {
      affected_rows
      returning {
        assigneeId
        id
      }
    }
  }
`;
