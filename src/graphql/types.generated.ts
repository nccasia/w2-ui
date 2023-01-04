/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ActionType: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTimebe: any;
  FileType: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWTbe: any;
  Role: any;
  TaskPriority: any;
  TaskStatus: any;
  TriggerType: any;
  jsonb: any;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "ActionType". All fields are combined with logical 'AND'. */
export type ActionType_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['ActionType']>;
  _gt?: InputMaybe<Scalars['ActionType']>;
  _gte?: InputMaybe<Scalars['ActionType']>;
  _in?: InputMaybe<Array<Scalars['ActionType']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['ActionType']>;
  _lte?: InputMaybe<Scalars['ActionType']>;
  _neq?: InputMaybe<Scalars['ActionType']>;
  _nin?: InputMaybe<Array<Scalars['ActionType']>>;
};

/** Boolean expression to filter rows from the table "Action". All fields are combined with a logical 'AND'. */
export type Action_Bool_Exp = {
  EventLogs?: InputMaybe<EventLog_Bool_Exp>;
  EventLogs_aggregate?: InputMaybe<EventLog_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Action_Bool_Exp>>;
  _not?: InputMaybe<Action_Bool_Exp>;
  _or?: InputMaybe<Array<Action_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  intent?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<ActionType_Comparison_Exp>;
};

/** unique or primary key constraints on table "Action" */
export enum Action_Constraint {
  /** unique or primary key constraint on columns "id" */
  ACTION_PKEY = 'Action_pkey'
}

/** input type for inserting data into table "Action" */
export type Action_Insert_Input = {
  EventLogs?: InputMaybe<EventLog_Arr_Rel_Insert_Input>;
  action?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  intent?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['ActionType']>;
};

/** input type for inserting object relation for remote table "Action" */
export type Action_Obj_Rel_Insert_Input = {
  data: Action_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Action_On_Conflict>;
};

/** on_conflict condition type for table "Action" */
export type Action_On_Conflict = {
  constraint: Action_Constraint;
  update_columns?: Array<Action_Update_Column>;
  where?: InputMaybe<Action_Bool_Exp>;
};

/** Ordering options when selecting data from "Action". */
export type Action_Order_By = {
  EventLogs_aggregate?: InputMaybe<EventLog_Aggregate_Order_By>;
  action?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intent?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Action */
export type Action_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Action" */
export enum Action_Select_Column {
  /** column name */
  ACTION = 'action',
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DOMAIN = 'domain',
  /** column name */
  ID = 'id',
  /** column name */
  INTENT = 'intent',
  /** column name */
  TYPE = 'type'
}

/** input type for updating data in table "Action" */
export type Action_Set_Input = {
  action?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  intent?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['ActionType']>;
};

/** Streaming cursor of the table "Action" */
export type Action_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Action_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Action_Stream_Cursor_Value_Input = {
  action?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  intent?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['ActionType']>;
};

/** update columns of table "Action" */
export enum Action_Update_Column {
  /** column name */
  ACTION = 'action',
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DOMAIN = 'domain',
  /** column name */
  ID = 'id',
  /** column name */
  INTENT = 'intent',
  /** column name */
  TYPE = 'type'
}

export type Action_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Action_Set_Input>;
  where: Action_Bool_Exp;
};

export type Activity_Aggregate_Bool_Exp = {
  count?: InputMaybe<Activity_Aggregate_Bool_Exp_Count>;
};

export type Activity_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Activity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Activity_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Activity" */
export type Activity_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Activity_Max_Order_By>;
  min?: InputMaybe<Activity_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Activity_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "Activity" */
export type Activity_Arr_Rel_Insert_Input = {
  data: Array<Activity_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Activity_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Activity". All fields are combined with a logical 'AND'. */
export type Activity_Bool_Exp = {
  TaskDefinitions?: InputMaybe<TaskDefinition_Bool_Exp>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Bool_Exp>;
  Triggers?: InputMaybe<Trigger_Bool_Exp>;
  Triggers_aggregate?: InputMaybe<Trigger_Aggregate_Bool_Exp>;
  Workflow?: InputMaybe<Workflow_Bool_Exp>;
  _and?: InputMaybe<Array<Activity_Bool_Exp>>;
  _not?: InputMaybe<Activity_Bool_Exp>;
  _or?: InputMaybe<Array<Activity_Bool_Exp>>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  workflowId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Activity" */
export enum Activity_Constraint {
  /** unique or primary key constraint on columns "id" */
  ACTIVITY_PKEY = 'Activity_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Activity_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Activity_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Activity_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "Activity" */
export type Activity_Insert_Input = {
  TaskDefinitions?: InputMaybe<TaskDefinition_Arr_Rel_Insert_Input>;
  Triggers?: InputMaybe<Trigger_Arr_Rel_Insert_Input>;
  Workflow?: InputMaybe<Workflow_Obj_Rel_Insert_Input>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "Activity" */
export type Activity_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Activity" */
export type Activity_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "Activity" */
export type Activity_Obj_Rel_Insert_Input = {
  data: Activity_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Activity_On_Conflict>;
};

/** on_conflict condition type for table "Activity" */
export type Activity_On_Conflict = {
  constraint: Activity_Constraint;
  update_columns?: Array<Activity_Update_Column>;
  where?: InputMaybe<Activity_Bool_Exp>;
};

/** Ordering options when selecting data from "Activity". */
export type Activity_Order_By = {
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Order_By>;
  Triggers_aggregate?: InputMaybe<Trigger_Aggregate_Order_By>;
  Workflow?: InputMaybe<Workflow_Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Activity */
export type Activity_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Activity_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "Activity" */
export enum Activity_Select_Column {
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  WORKFLOWID = 'workflowId'
}

/** input type for updating data in table "Activity" */
export type Activity_Set_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Activity" */
export type Activity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Activity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Activity_Stream_Cursor_Value_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Activity" */
export enum Activity_Update_Column {
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  WORKFLOWID = 'workflowId'
}

export type Activity_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Activity_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Activity_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Activity_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Activity_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Activity_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activity_Set_Input>;
  where: Activity_Bool_Exp;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type ChangePasswordInputbe = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type Comment_Aggregate_Bool_Exp = {
  count?: InputMaybe<Comment_Aggregate_Bool_Exp_Count>;
};

export type Comment_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Comment_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Comment" */
export type Comment_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comment_Max_Order_By>;
  min?: InputMaybe<Comment_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Comment" */
export type Comment_Arr_Rel_Insert_Input = {
  data: Array<Comment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Comment". All fields are combined with a logical 'AND'. */
export type Comment_Bool_Exp = {
  Task?: InputMaybe<Task_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Comment_Bool_Exp>>;
  _not?: InputMaybe<Comment_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  creatorId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  taskId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint on columns "id" */
  COMMENT_PKEY = 'Comment_pkey'
}

/** input type for inserting data into table "Comment" */
export type Comment_Insert_Input = {
  Task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Comment" */
export type Comment_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Comment" */
export type Comment_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "Comment" */
export type Comment_On_Conflict = {
  constraint: Comment_Constraint;
  update_columns?: Array<Comment_Update_Column>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** Ordering options when selecting data from "Comment". */
export type Comment_Order_By = {
  Task?: InputMaybe<Task_Order_By>;
  User?: InputMaybe<User_Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Comment */
export type Comment_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Comment" */
export enum Comment_Select_Column {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  ID = 'id',
  /** column name */
  TASKID = 'taskId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "Comment" */
export type Comment_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Comment" */
export type Comment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comment_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Comment" */
export enum Comment_Update_Column {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  ID = 'id',
  /** column name */
  TASKID = 'taskId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type Comment_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};

export type CreatePostInputbe = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type EventLog_Aggregate_Bool_Exp = {
  count?: InputMaybe<EventLog_Aggregate_Bool_Exp_Count>;
};

export type EventLog_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<EventLog_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<EventLog_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "EventLog" */
export type EventLog_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<EventLog_Max_Order_By>;
  min?: InputMaybe<EventLog_Min_Order_By>;
};

/** input type for inserting array relation for remote table "EventLog" */
export type EventLog_Arr_Rel_Insert_Input = {
  data: Array<EventLog_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<EventLog_On_Conflict>;
};

/** Boolean expression to filter rows from the table "EventLog". All fields are combined with a logical 'AND'. */
export type EventLog_Bool_Exp = {
  Action?: InputMaybe<Action_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  Task?: InputMaybe<Task_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<EventLog_Bool_Exp>>;
  _not?: InputMaybe<EventLog_Bool_Exp>;
  _or?: InputMaybe<Array<EventLog_Bool_Exp>>;
  actionId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  taskId?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "EventLog" */
export enum EventLog_Constraint {
  /** unique or primary key constraint on columns "id" */
  EVENTLOG_PKEY = 'EventLog_pkey'
}

/** input type for inserting data into table "EventLog" */
export type EventLog_Insert_Input = {
  Action?: InputMaybe<Action_Obj_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  actionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "EventLog" */
export type EventLog_Max_Order_By = {
  actionId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "EventLog" */
export type EventLog_Min_Order_By = {
  actionId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "EventLog" */
export type EventLog_On_Conflict = {
  constraint: EventLog_Constraint;
  update_columns?: Array<EventLog_Update_Column>;
  where?: InputMaybe<EventLog_Bool_Exp>;
};

/** Ordering options when selecting data from "EventLog". */
export type EventLog_Order_By = {
  Action?: InputMaybe<Action_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  Task?: InputMaybe<Task_Order_By>;
  User?: InputMaybe<User_Order_By>;
  actionId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: EventLog */
export type EventLog_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "EventLog" */
export enum EventLog_Select_Column {
  /** column name */
  ACTIONID = 'actionId',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  TASKID = 'taskId',
  /** column name */
  USERID = 'userId'
}

/** input type for updating data in table "EventLog" */
export type EventLog_Set_Input = {
  actionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "EventLog" */
export type EventLog_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: EventLog_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type EventLog_Stream_Cursor_Value_Input = {
  actionId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "EventLog" */
export enum EventLog_Update_Column {
  /** column name */
  ACTIONID = 'actionId',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  TASKID = 'taskId',
  /** column name */
  USERID = 'userId'
}

export type EventLog_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventLog_Set_Input>;
  where: EventLog_Bool_Exp;
};

/** Boolean expression to compare columns of type "FileType". All fields are combined with logical 'AND'. */
export type FileType_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['FileType']>;
  _gt?: InputMaybe<Scalars['FileType']>;
  _gte?: InputMaybe<Scalars['FileType']>;
  _in?: InputMaybe<Array<Scalars['FileType']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['FileType']>;
  _lte?: InputMaybe<Scalars['FileType']>;
  _neq?: InputMaybe<Scalars['FileType']>;
  _nin?: InputMaybe<Array<Scalars['FileType']>>;
};

export type File_Aggregate_Bool_Exp = {
  count?: InputMaybe<File_Aggregate_Bool_Exp_Count>;
};

export type File_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<File_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "File" */
export type File_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<File_Max_Order_By>;
  min?: InputMaybe<File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "File" */
export type File_Arr_Rel_Insert_Input = {
  data: Array<File_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<File_On_Conflict>;
};

/** Boolean expression to filter rows from the table "File". All fields are combined with a logical 'AND'. */
export type File_Bool_Exp = {
  File?: InputMaybe<File_Bool_Exp>;
  Files?: InputMaybe<File_Bool_Exp>;
  Files_aggregate?: InputMaybe<File_Aggregate_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  _and?: InputMaybe<Array<File_Bool_Exp>>;
  _not?: InputMaybe<File_Bool_Exp>;
  _or?: InputMaybe<Array<File_Bool_Exp>>;
  cdnUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  data?: InputMaybe<String_Comparison_Exp>;
  encoding?: InputMaybe<String_Comparison_Exp>;
  fileType?: InputMaybe<FileType_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  mimetype?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  varantName?: InputMaybe<String_Comparison_Exp>;
  variantKey?: InputMaybe<String_Comparison_Exp>;
  variantOfId?: InputMaybe<String_Comparison_Exp>;
  variantValue?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "File" */
export enum File_Constraint {
  /** unique or primary key constraint on columns "id" */
  FILE_PKEY = 'File_pkey'
}

/** input type for inserting data into table "File" */
export type File_Insert_Input = {
  File?: InputMaybe<File_Obj_Rel_Insert_Input>;
  Files?: InputMaybe<File_Arr_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  cdnUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  data?: InputMaybe<Scalars['String']>;
  encoding?: InputMaybe<Scalars['String']>;
  fileType?: InputMaybe<Scalars['FileType']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mimetype?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  varantName?: InputMaybe<Scalars['String']>;
  variantKey?: InputMaybe<Scalars['String']>;
  variantOfId?: InputMaybe<Scalars['String']>;
  variantValue?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "File" */
export type File_Max_Order_By = {
  cdnUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  encoding?: InputMaybe<Order_By>;
  fileType?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimetype?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  varantName?: InputMaybe<Order_By>;
  variantKey?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
  variantValue?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "File" */
export type File_Min_Order_By = {
  cdnUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  encoding?: InputMaybe<Order_By>;
  fileType?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimetype?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  varantName?: InputMaybe<Order_By>;
  variantKey?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
  variantValue?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "File" */
export type File_Obj_Rel_Insert_Input = {
  data: File_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<File_On_Conflict>;
};

/** on_conflict condition type for table "File" */
export type File_On_Conflict = {
  constraint: File_Constraint;
  update_columns?: Array<File_Update_Column>;
  where?: InputMaybe<File_Bool_Exp>;
};

/** Ordering options when selecting data from "File". */
export type File_Order_By = {
  File?: InputMaybe<File_Order_By>;
  Files_aggregate?: InputMaybe<File_Aggregate_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  cdnUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  encoding?: InputMaybe<Order_By>;
  fileType?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimetype?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  varantName?: InputMaybe<Order_By>;
  variantKey?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
  variantValue?: InputMaybe<Order_By>;
};

/** primary key columns input for table: File */
export type File_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "File" */
export enum File_Select_Column {
  /** column name */
  CDNURL = 'cdnUrl',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DATA = 'data',
  /** column name */
  ENCODING = 'encoding',
  /** column name */
  FILETYPE = 'fileType',
  /** column name */
  FILENAME = 'filename',
  /** column name */
  ID = 'id',
  /** column name */
  MIMETYPE = 'mimetype',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VARANTNAME = 'varantName',
  /** column name */
  VARIANTKEY = 'variantKey',
  /** column name */
  VARIANTOFID = 'variantOfId',
  /** column name */
  VARIANTVALUE = 'variantValue'
}

/** input type for updating data in table "File" */
export type File_Set_Input = {
  cdnUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  data?: InputMaybe<Scalars['String']>;
  encoding?: InputMaybe<Scalars['String']>;
  fileType?: InputMaybe<Scalars['FileType']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mimetype?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  varantName?: InputMaybe<Scalars['String']>;
  variantKey?: InputMaybe<Scalars['String']>;
  variantOfId?: InputMaybe<Scalars['String']>;
  variantValue?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "File" */
export type File_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: File_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type File_Stream_Cursor_Value_Input = {
  cdnUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  data?: InputMaybe<Scalars['String']>;
  encoding?: InputMaybe<Scalars['String']>;
  fileType?: InputMaybe<Scalars['FileType']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mimetype?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  varantName?: InputMaybe<Scalars['String']>;
  variantKey?: InputMaybe<Scalars['String']>;
  variantOfId?: InputMaybe<Scalars['String']>;
  variantValue?: InputMaybe<Scalars['String']>;
};

/** update columns of table "File" */
export enum File_Update_Column {
  /** column name */
  CDNURL = 'cdnUrl',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DATA = 'data',
  /** column name */
  ENCODING = 'encoding',
  /** column name */
  FILETYPE = 'fileType',
  /** column name */
  FILENAME = 'filename',
  /** column name */
  ID = 'id',
  /** column name */
  MIMETYPE = 'mimetype',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VARANTNAME = 'varantName',
  /** column name */
  VARIANTKEY = 'variantKey',
  /** column name */
  VARIANTOFID = 'variantOfId',
  /** column name */
  VARIANTVALUE = 'variantValue'
}

export type File_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<File_Set_Input>;
  where: File_Bool_Exp;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginInputbe = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MemberOnTeams_Aggregate_Bool_Exp = {
  count?: InputMaybe<MemberOnTeams_Aggregate_Bool_Exp_Count>;
};

export type MemberOnTeams_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<MemberOnTeams_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<MemberOnTeams_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "MemberOnTeams" */
export type MemberOnTeams_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MemberOnTeams_Max_Order_By>;
  min?: InputMaybe<MemberOnTeams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "MemberOnTeams" */
export type MemberOnTeams_Arr_Rel_Insert_Input = {
  data: Array<MemberOnTeams_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<MemberOnTeams_On_Conflict>;
};

/** Boolean expression to filter rows from the table "MemberOnTeams". All fields are combined with a logical 'AND'. */
export type MemberOnTeams_Bool_Exp = {
  Team?: InputMaybe<Team_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<MemberOnTeams_Bool_Exp>>;
  _not?: InputMaybe<MemberOnTeams_Bool_Exp>;
  _or?: InputMaybe<Array<MemberOnTeams_Bool_Exp>>;
  assignedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  assignedBy?: InputMaybe<String_Comparison_Exp>;
  teamId?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "MemberOnTeams" */
export enum MemberOnTeams_Constraint {
  /** unique or primary key constraint on columns "teamId", "userId" */
  MEMBERONTEAMS_PKEY = 'MemberOnTeams_pkey'
}

/** input type for inserting data into table "MemberOnTeams" */
export type MemberOnTeams_Insert_Input = {
  Team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  assignedAt?: InputMaybe<Scalars['timestamp']>;
  assignedBy?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Max_Order_By = {
  assignedAt?: InputMaybe<Order_By>;
  assignedBy?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Min_Order_By = {
  assignedAt?: InputMaybe<Order_By>;
  assignedBy?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "MemberOnTeams" */
export type MemberOnTeams_On_Conflict = {
  constraint: MemberOnTeams_Constraint;
  update_columns?: Array<MemberOnTeams_Update_Column>;
  where?: InputMaybe<MemberOnTeams_Bool_Exp>;
};

/** Ordering options when selecting data from "MemberOnTeams". */
export type MemberOnTeams_Order_By = {
  Team?: InputMaybe<Team_Order_By>;
  User?: InputMaybe<User_Order_By>;
  assignedAt?: InputMaybe<Order_By>;
  assignedBy?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: MemberOnTeams */
export type MemberOnTeams_Pk_Columns_Input = {
  teamId: Scalars['String'];
  userId: Scalars['String'];
};

/** select columns of table "MemberOnTeams" */
export enum MemberOnTeams_Select_Column {
  /** column name */
  ASSIGNEDAT = 'assignedAt',
  /** column name */
  ASSIGNEDBY = 'assignedBy',
  /** column name */
  TEAMID = 'teamId',
  /** column name */
  USERID = 'userId'
}

/** input type for updating data in table "MemberOnTeams" */
export type MemberOnTeams_Set_Input = {
  assignedAt?: InputMaybe<Scalars['timestamp']>;
  assignedBy?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "MemberOnTeams" */
export type MemberOnTeams_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MemberOnTeams_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MemberOnTeams_Stream_Cursor_Value_Input = {
  assignedAt?: InputMaybe<Scalars['timestamp']>;
  assignedBy?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "MemberOnTeams" */
export enum MemberOnTeams_Update_Column {
  /** column name */
  ASSIGNEDAT = 'assignedAt',
  /** column name */
  ASSIGNEDBY = 'assignedBy',
  /** column name */
  TEAMID = 'teamId',
  /** column name */
  USERID = 'userId'
}

export type MemberOnTeams_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberOnTeams_Set_Input>;
  where: MemberOnTeams_Bool_Exp;
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirectionbe {
  ASC = 'asc',
  DESC = 'desc'
}

/** Boolean expression to filter rows from the table "Organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  EventLogs?: InputMaybe<EventLog_Bool_Exp>;
  EventLogs_aggregate?: InputMaybe<EventLog_Aggregate_Bool_Exp>;
  Files?: InputMaybe<File_Bool_Exp>;
  Files_aggregate?: InputMaybe<File_Aggregate_Bool_Exp>;
  PermissionGroups?: InputMaybe<PermissionGroup_Bool_Exp>;
  PermissionGroups_aggregate?: InputMaybe<PermissionGroup_Aggregate_Bool_Exp>;
  Permissions?: InputMaybe<Permission_Bool_Exp>;
  Permissions_aggregate?: InputMaybe<Permission_Aggregate_Bool_Exp>;
  Settings?: InputMaybe<Settings_Bool_Exp>;
  Settings_aggregate?: InputMaybe<Settings_Aggregate_Bool_Exp>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Bool_Exp>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Bool_Exp>;
  Tasks?: InputMaybe<Task_Bool_Exp>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  Teams?: InputMaybe<Team_Bool_Exp>;
  Teams_aggregate?: InputMaybe<Team_Aggregate_Bool_Exp>;
  Users?: InputMaybe<User_Bool_Exp>;
  Users_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
  Workflows?: InputMaybe<Workflow_Bool_Exp>;
  Workflows_aggregate?: InputMaybe<Workflow_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint on columns "id" */
  ORGANIZATION_PKEY = 'Organization_pkey'
}

/** input type for inserting data into table "Organization" */
export type Organization_Insert_Input = {
  EventLogs?: InputMaybe<EventLog_Arr_Rel_Insert_Input>;
  Files?: InputMaybe<File_Arr_Rel_Insert_Input>;
  PermissionGroups?: InputMaybe<PermissionGroup_Arr_Rel_Insert_Input>;
  Permissions?: InputMaybe<Permission_Arr_Rel_Insert_Input>;
  Settings?: InputMaybe<Settings_Arr_Rel_Insert_Input>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Arr_Rel_Insert_Input>;
  Tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  Teams?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  Users?: InputMaybe<User_Arr_Rel_Insert_Input>;
  Workflows?: InputMaybe<Workflow_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** input type for inserting object relation for remote table "Organization" */
export type Organization_Obj_Rel_Insert_Input = {
  data: Organization_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** on_conflict condition type for table "Organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "Organization". */
export type Organization_Order_By = {
  EventLogs_aggregate?: InputMaybe<EventLog_Aggregate_Order_By>;
  Files_aggregate?: InputMaybe<File_Aggregate_Order_By>;
  PermissionGroups_aggregate?: InputMaybe<PermissionGroup_Aggregate_Order_By>;
  Permissions_aggregate?: InputMaybe<Permission_Aggregate_Order_By>;
  Settings_aggregate?: InputMaybe<Settings_Aggregate_Order_By>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Order_By>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  Teams_aggregate?: InputMaybe<Team_Aggregate_Order_By>;
  Users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
  Workflows_aggregate?: InputMaybe<Workflow_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Organization */
export type Organization_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Organization" */
export enum Organization_Select_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "Organization" */
export type Organization_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Organization" */
export enum Organization_Update_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type Organization_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};

export type PermissionGroup_Aggregate_Bool_Exp = {
  count?: InputMaybe<PermissionGroup_Aggregate_Bool_Exp_Count>;
};

export type PermissionGroup_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PermissionGroup_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PermissionGroup_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "PermissionGroup" */
export type PermissionGroup_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<PermissionGroup_Max_Order_By>;
  min?: InputMaybe<PermissionGroup_Min_Order_By>;
};

/** input type for inserting array relation for remote table "PermissionGroup" */
export type PermissionGroup_Arr_Rel_Insert_Input = {
  data: Array<PermissionGroup_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<PermissionGroup_On_Conflict>;
};

/** Boolean expression to filter rows from the table "PermissionGroup". All fields are combined with a logical 'AND'. */
export type PermissionGroup_Bool_Exp = {
  Organization?: InputMaybe<Organization_Bool_Exp>;
  Permissions?: InputMaybe<Permission_Bool_Exp>;
  Permissions_aggregate?: InputMaybe<Permission_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<PermissionGroup_Bool_Exp>>;
  _not?: InputMaybe<PermissionGroup_Bool_Exp>;
  _or?: InputMaybe<Array<PermissionGroup_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "PermissionGroup" */
export enum PermissionGroup_Constraint {
  /** unique or primary key constraint on columns "id" */
  PERMISSIONGROUP_PKEY = 'PermissionGroup_pkey'
}

/** input type for inserting data into table "PermissionGroup" */
export type PermissionGroup_Insert_Input = {
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Permissions?: InputMaybe<Permission_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "PermissionGroup" */
export type PermissionGroup_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "PermissionGroup" */
export type PermissionGroup_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "PermissionGroup" */
export type PermissionGroup_Obj_Rel_Insert_Input = {
  data: PermissionGroup_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<PermissionGroup_On_Conflict>;
};

/** on_conflict condition type for table "PermissionGroup" */
export type PermissionGroup_On_Conflict = {
  constraint: PermissionGroup_Constraint;
  update_columns?: Array<PermissionGroup_Update_Column>;
  where?: InputMaybe<PermissionGroup_Bool_Exp>;
};

/** Ordering options when selecting data from "PermissionGroup". */
export type PermissionGroup_Order_By = {
  Organization?: InputMaybe<Organization_Order_By>;
  Permissions_aggregate?: InputMaybe<Permission_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: PermissionGroup */
export type PermissionGroup_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "PermissionGroup" */
export enum PermissionGroup_Select_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "PermissionGroup" */
export type PermissionGroup_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "PermissionGroup" */
export type PermissionGroup_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PermissionGroup_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PermissionGroup_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "PermissionGroup" */
export enum PermissionGroup_Update_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type PermissionGroup_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PermissionGroup_Set_Input>;
  where: PermissionGroup_Bool_Exp;
};

export type Permission_Aggregate_Bool_Exp = {
  count?: InputMaybe<Permission_Aggregate_Bool_Exp_Count>;
};

export type Permission_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Permission_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Permission" */
export type Permission_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Permission_Max_Order_By>;
  min?: InputMaybe<Permission_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Permission" */
export type Permission_Arr_Rel_Insert_Input = {
  data: Array<Permission_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Permission". All fields are combined with a logical 'AND'. */
export type Permission_Bool_Exp = {
  Organization?: InputMaybe<Organization_Bool_Exp>;
  PermissionGroup?: InputMaybe<PermissionGroup_Bool_Exp>;
  _and?: InputMaybe<Array<Permission_Bool_Exp>>;
  _not?: InputMaybe<Permission_Bool_Exp>;
  _or?: InputMaybe<Array<Permission_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  permissionGroupId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Permission" */
export enum Permission_Constraint {
  /** unique or primary key constraint on columns "id" */
  PERMISSION_PKEY = 'Permission_pkey'
}

/** input type for inserting data into table "Permission" */
export type Permission_Insert_Input = {
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  PermissionGroup?: InputMaybe<PermissionGroup_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  permissionGroupId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Permission" */
export type Permission_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Permission" */
export type Permission_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "Permission" */
export type Permission_On_Conflict = {
  constraint: Permission_Constraint;
  update_columns?: Array<Permission_Update_Column>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

/** Ordering options when selecting data from "Permission". */
export type Permission_Order_By = {
  Organization?: InputMaybe<Organization_Order_By>;
  PermissionGroup?: InputMaybe<PermissionGroup_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Permission */
export type Permission_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Permission" */
export enum Permission_Select_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PERMISSIONGROUPID = 'permissionGroupId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "Permission" */
export type Permission_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  permissionGroupId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Permission" */
export type Permission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Permission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Permission_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  permissionGroupId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Permission" */
export enum Permission_Update_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PERMISSIONGROUPID = 'permissionGroupId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type Permission_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Permission_Set_Input>;
  where: Permission_Bool_Exp;
};

/** Properties by which post connections can be ordered. */
export enum PostOrderFieldbe {
  CONTENT = 'content',
  CREATEDAT = 'createdAt',
  ID = 'id',
  PUBLISHED = 'published',
  TITLE = 'title',
  UPDATEDAT = 'updatedAt'
}

export type PostOrderbe = {
  direction: OrderDirectionbe;
  field: PostOrderFieldbe;
};

export type Post_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Post_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Post_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Post_Aggregate_Bool_Exp_Count>;
};

export type Post_Aggregate_Bool_Exp_Bool_And = {
  arguments: Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Post_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Post_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Post_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Post_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Post_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Post" */
export type Post_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Max_Order_By>;
  min?: InputMaybe<Post_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Post_Bool_Exp>>;
  _not?: InputMaybe<Post_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Bool_Exp>>;
  authorId?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  published?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Post" */
export enum Post_Constraint {
  /** unique or primary key constraint on columns "id" */
  POST_PKEY = 'Post_pkey'
}

/** input type for inserting data into table "Post" */
export type Post_Insert_Input = {
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  authorId?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Post" */
export type Post_Max_Order_By = {
  authorId?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Post" */
export type Post_Min_Order_By = {
  authorId?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "Post" */
export type Post_On_Conflict = {
  constraint: Post_Constraint;
  update_columns?: Array<Post_Update_Column>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** Ordering options when selecting data from "Post". */
export type Post_Order_By = {
  User?: InputMaybe<User_Order_By>;
  authorId?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  published?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Post */
export type Post_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Post" */
export enum Post_Select_Column {
  /** column name */
  AUTHORID = 'authorId',
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  PUBLISHED = 'published',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** select "Post_aggregate_bool_exp_bool_and_arguments_columns" columns of table "Post" */
export enum Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  PUBLISHED = 'published'
}

/** select "Post_aggregate_bool_exp_bool_or_arguments_columns" columns of table "Post" */
export enum Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  PUBLISHED = 'published'
}

/** input type for updating data in table "Post" */
export type Post_Set_Input = {
  authorId?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Post" */
export type Post_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Stream_Cursor_Value_Input = {
  authorId?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Post" */
export enum Post_Update_Column {
  /** column name */
  AUTHORID = 'authorId',
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  PUBLISHED = 'published',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type Post_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};

/** Boolean expression to compare columns of type "Role". All fields are combined with logical 'AND'. */
export type Role_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Role']>;
  _gt?: InputMaybe<Scalars['Role']>;
  _gte?: InputMaybe<Scalars['Role']>;
  _in?: InputMaybe<Array<Scalars['Role']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Role']>;
  _lte?: InputMaybe<Scalars['Role']>;
  _neq?: InputMaybe<Scalars['Role']>;
  _nin?: InputMaybe<Array<Scalars['Role']>>;
};

/** User role */
export enum Rolebe {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export type Settings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Settings_Aggregate_Bool_Exp_Count>;
};

export type Settings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Settings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Settings" */
export type Settings_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Settings_Max_Order_By>;
  min?: InputMaybe<Settings_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Settings" */
export type Settings_Arr_Rel_Insert_Input = {
  data: Array<Settings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Settings_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Settings". All fields are combined with a logical 'AND'. */
export type Settings_Bool_Exp = {
  Organization?: InputMaybe<Organization_Bool_Exp>;
  _and?: InputMaybe<Array<Settings_Bool_Exp>>;
  _not?: InputMaybe<Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Settings_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Settings" */
export enum Settings_Constraint {
  /** unique or primary key constraint on columns "id" */
  SETTINGS_PKEY = 'Settings_pkey'
}

/** input type for inserting data into table "Settings" */
export type Settings_Insert_Input = {
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "Settings" */
export type Settings_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Settings" */
export type Settings_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "Settings" */
export type Settings_On_Conflict = {
  constraint: Settings_Constraint;
  update_columns?: Array<Settings_Update_Column>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "Settings". */
export type Settings_Order_By = {
  Organization?: InputMaybe<Organization_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Settings */
export type Settings_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Settings" */
export enum Settings_Select_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  KEY = 'key',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "Settings" */
export type Settings_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Settings" */
export type Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Settings_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Settings" */
export enum Settings_Update_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  KEY = 'key',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALUE = 'value'
}

export type Settings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Settings_Set_Input>;
  where: Settings_Bool_Exp;
};

export type SignupInputbe = {
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['String'];
  password: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type TaskDefinition_Aggregate_Bool_Exp = {
  count?: InputMaybe<TaskDefinition_Aggregate_Bool_Exp_Count>;
};

export type TaskDefinition_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TaskDefinition_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TaskDefinition_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "TaskDefinition" */
export type TaskDefinition_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TaskDefinition_Max_Order_By>;
  min?: InputMaybe<TaskDefinition_Min_Order_By>;
};

/** input type for inserting array relation for remote table "TaskDefinition" */
export type TaskDefinition_Arr_Rel_Insert_Input = {
  data: Array<TaskDefinition_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TaskDefinition_On_Conflict>;
};

/** Boolean expression to filter rows from the table "TaskDefinition". All fields are combined with a logical 'AND'. */
export type TaskDefinition_Bool_Exp = {
  Activity?: InputMaybe<Activity_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  TaskDefinition?: InputMaybe<TaskDefinition_Bool_Exp>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Bool_Exp>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Bool_Exp>;
  Workflow?: InputMaybe<Workflow_Bool_Exp>;
  _and?: InputMaybe<Array<TaskDefinition_Bool_Exp>>;
  _not?: InputMaybe<TaskDefinition_Bool_Exp>;
  _or?: InputMaybe<Array<TaskDefinition_Bool_Exp>>;
  actvityId?: InputMaybe<String_Comparison_Exp>;
  config?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  parentId?: InputMaybe<String_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  workflowId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "TaskDefinition" */
export enum TaskDefinition_Constraint {
  /** unique or primary key constraint on columns "id" */
  TASKDEFINITION_PKEY = 'TaskDefinition_pkey'
}

/** input type for inserting data into table "TaskDefinition" */
export type TaskDefinition_Insert_Input = {
  Activity?: InputMaybe<Activity_Obj_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  TaskDefinition?: InputMaybe<TaskDefinition_Obj_Rel_Insert_Input>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Arr_Rel_Insert_Input>;
  Workflow?: InputMaybe<Workflow_Obj_Rel_Insert_Input>;
  actvityId?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "TaskDefinition" */
export type TaskDefinition_Max_Order_By = {
  actvityId?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "TaskDefinition" */
export type TaskDefinition_Min_Order_By = {
  actvityId?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "TaskDefinition" */
export type TaskDefinition_Obj_Rel_Insert_Input = {
  data: TaskDefinition_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TaskDefinition_On_Conflict>;
};

/** on_conflict condition type for table "TaskDefinition" */
export type TaskDefinition_On_Conflict = {
  constraint: TaskDefinition_Constraint;
  update_columns?: Array<TaskDefinition_Update_Column>;
  where?: InputMaybe<TaskDefinition_Bool_Exp>;
};

/** Ordering options when selecting data from "TaskDefinition". */
export type TaskDefinition_Order_By = {
  Activity?: InputMaybe<Activity_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  TaskDefinition?: InputMaybe<TaskDefinition_Order_By>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Order_By>;
  Workflow?: InputMaybe<Workflow_Order_By>;
  actvityId?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: TaskDefinition */
export type TaskDefinition_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "TaskDefinition" */
export enum TaskDefinition_Select_Column {
  /** column name */
  ACTVITYID = 'actvityId',
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PARENTID = 'parentId',
  /** column name */
  THUMBNAIL = 'thumbnail',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  WORKFLOWID = 'workflowId'
}

/** input type for updating data in table "TaskDefinition" */
export type TaskDefinition_Set_Input = {
  actvityId?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "TaskDefinition" */
export type TaskDefinition_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TaskDefinition_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TaskDefinition_Stream_Cursor_Value_Input = {
  actvityId?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "TaskDefinition" */
export enum TaskDefinition_Update_Column {
  /** column name */
  ACTVITYID = 'actvityId',
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PARENTID = 'parentId',
  /** column name */
  THUMBNAIL = 'thumbnail',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  WORKFLOWID = 'workflowId'
}

export type TaskDefinition_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TaskDefinition_Set_Input>;
  where: TaskDefinition_Bool_Exp;
};

/** Boolean expression to compare columns of type "TaskPriority". All fields are combined with logical 'AND'. */
export type TaskPriority_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['TaskPriority']>;
  _gt?: InputMaybe<Scalars['TaskPriority']>;
  _gte?: InputMaybe<Scalars['TaskPriority']>;
  _in?: InputMaybe<Array<Scalars['TaskPriority']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['TaskPriority']>;
  _lte?: InputMaybe<Scalars['TaskPriority']>;
  _neq?: InputMaybe<Scalars['TaskPriority']>;
  _nin?: InputMaybe<Array<Scalars['TaskPriority']>>;
};

/** Boolean expression to compare columns of type "TaskStatus". All fields are combined with logical 'AND'. */
export type TaskStatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['TaskStatus']>;
  _gt?: InputMaybe<Scalars['TaskStatus']>;
  _gte?: InputMaybe<Scalars['TaskStatus']>;
  _in?: InputMaybe<Array<Scalars['TaskStatus']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['TaskStatus']>;
  _lte?: InputMaybe<Scalars['TaskStatus']>;
  _neq?: InputMaybe<Scalars['TaskStatus']>;
  _nin?: InputMaybe<Array<Scalars['TaskStatus']>>;
};

export type Task_Aggregate_Bool_Exp = {
  count?: InputMaybe<Task_Aggregate_Bool_Exp_Count>;
};

export type Task_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Task_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Task_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Task" */
export type Task_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Task_Max_Order_By>;
  min?: InputMaybe<Task_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Task" */
export type Task_Arr_Rel_Insert_Input = {
  data: Array<Task_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Task". All fields are combined with a logical 'AND'. */
export type Task_Bool_Exp = {
  Comments?: InputMaybe<Comment_Bool_Exp>;
  Comments_aggregate?: InputMaybe<Comment_Aggregate_Bool_Exp>;
  EventLogs?: InputMaybe<EventLog_Bool_Exp>;
  EventLogs_aggregate?: InputMaybe<EventLog_Aggregate_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  Task?: InputMaybe<Task_Bool_Exp>;
  Tasks?: InputMaybe<Task_Bool_Exp>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  Team?: InputMaybe<Team_Bool_Exp>;
  _and?: InputMaybe<Array<Task_Bool_Exp>>;
  _not?: InputMaybe<Task_Bool_Exp>;
  _or?: InputMaybe<Array<Task_Bool_Exp>>;
  assigneeId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  creatorId?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  dueDate?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  parentId?: InputMaybe<String_Comparison_Exp>;
  priority?: InputMaybe<TaskPriority_Comparison_Exp>;
  projectId?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<TaskStatus_Comparison_Exp>;
  teamId?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Task" */
export enum Task_Constraint {
  /** unique or primary key constraint on columns "id" */
  TASK_PKEY = 'Task_pkey'
}

/** input type for inserting data into table "Task" */
export type Task_Insert_Input = {
  Comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  EventLogs?: InputMaybe<EventLog_Arr_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  Tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  Team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  assigneeId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['TaskPriority']>;
  projectId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['TaskStatus']>;
  teamId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Task" */
export type Task_Max_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dueDate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Task" */
export type Task_Min_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dueDate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "Task" */
export type Task_Obj_Rel_Insert_Input = {
  data: Task_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** on_conflict condition type for table "Task" */
export type Task_On_Conflict = {
  constraint: Task_Constraint;
  update_columns?: Array<Task_Update_Column>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** Ordering options when selecting data from "Task". */
export type Task_Order_By = {
  Comments_aggregate?: InputMaybe<Comment_Aggregate_Order_By>;
  EventLogs_aggregate?: InputMaybe<EventLog_Aggregate_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  Task?: InputMaybe<Task_Order_By>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  Team?: InputMaybe<Team_Order_By>;
  assigneeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dueDate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Task */
export type Task_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Task" */
export enum Task_Select_Column {
  /** column name */
  ASSIGNEEID = 'assigneeId',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  DUEDATE = 'dueDate',
  /** column name */
  ID = 'id',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PARENTID = 'parentId',
  /** column name */
  PRIORITY = 'priority',
  /** column name */
  PROJECTID = 'projectId',
  /** column name */
  STATUS = 'status',
  /** column name */
  TEAMID = 'teamId',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "Task" */
export type Task_Set_Input = {
  assigneeId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['TaskPriority']>;
  projectId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['TaskStatus']>;
  teamId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Task" */
export type Task_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Task_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Task_Stream_Cursor_Value_Input = {
  assigneeId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['TaskPriority']>;
  projectId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['TaskStatus']>;
  teamId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Task" */
export enum Task_Update_Column {
  /** column name */
  ASSIGNEEID = 'assigneeId',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  DUEDATE = 'dueDate',
  /** column name */
  ID = 'id',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PARENTID = 'parentId',
  /** column name */
  PRIORITY = 'priority',
  /** column name */
  PROJECTID = 'projectId',
  /** column name */
  STATUS = 'status',
  /** column name */
  TEAMID = 'teamId',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type Task_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Task_Set_Input>;
  where: Task_Bool_Exp;
};

export type Team_Aggregate_Bool_Exp = {
  count?: InputMaybe<Team_Aggregate_Bool_Exp_Count>;
};

export type Team_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Team_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Team_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Team" */
export type Team_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Max_Order_By>;
  min?: InputMaybe<Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Team" */
export type Team_Arr_Rel_Insert_Input = {
  data: Array<Team_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Team". All fields are combined with a logical 'AND'. */
export type Team_Bool_Exp = {
  MemberOnTeams?: InputMaybe<MemberOnTeams_Bool_Exp>;
  MemberOnTeams_aggregate?: InputMaybe<MemberOnTeams_Aggregate_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  Tasks?: InputMaybe<Task_Bool_Exp>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Team_Bool_Exp>>;
  _not?: InputMaybe<Team_Bool_Exp>;
  _or?: InputMaybe<Array<Team_Bool_Exp>>;
  bio?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  creatorId?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  managerId?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  userByManagerid?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "Team" */
export enum Team_Constraint {
  /** unique or primary key constraint on columns "id" */
  TEAM_PKEY = 'Team_pkey'
}

/** input type for inserting data into table "Team" */
export type Team_Insert_Input = {
  MemberOnTeams?: InputMaybe<MemberOnTeams_Arr_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  managerId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userByManagerid?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** order by max() on columns of table "Team" */
export type Team_Max_Order_By = {
  bio?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Team" */
export type Team_Min_Order_By = {
  bio?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "Team" */
export type Team_Obj_Rel_Insert_Input = {
  data: Team_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_On_Conflict>;
};

/** on_conflict condition type for table "Team" */
export type Team_On_Conflict = {
  constraint: Team_Constraint;
  update_columns?: Array<Team_Update_Column>;
  where?: InputMaybe<Team_Bool_Exp>;
};

/** Ordering options when selecting data from "Team". */
export type Team_Order_By = {
  MemberOnTeams_aggregate?: InputMaybe<MemberOnTeams_Aggregate_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  User?: InputMaybe<User_Order_By>;
  bio?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userByManagerid?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: Team */
export type Team_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Team" */
export enum Team_Select_Column {
  /** column name */
  BIO = 'bio',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  MANAGERID = 'managerId',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "Team" */
export type Team_Set_Input = {
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  managerId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Team" */
export type Team_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Team_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Team_Stream_Cursor_Value_Input = {
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  managerId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Team" */
export enum Team_Update_Column {
  /** column name */
  BIO = 'bio',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  MANAGERID = 'managerId',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type Team_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};

/** Boolean expression to compare columns of type "TriggerType". All fields are combined with logical 'AND'. */
export type TriggerType_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['TriggerType']>;
  _gt?: InputMaybe<Scalars['TriggerType']>;
  _gte?: InputMaybe<Scalars['TriggerType']>;
  _in?: InputMaybe<Array<Scalars['TriggerType']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['TriggerType']>;
  _lte?: InputMaybe<Scalars['TriggerType']>;
  _neq?: InputMaybe<Scalars['TriggerType']>;
  _nin?: InputMaybe<Array<Scalars['TriggerType']>>;
};

export type Trigger_Aggregate_Bool_Exp = {
  count?: InputMaybe<Trigger_Aggregate_Bool_Exp_Count>;
};

export type Trigger_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Trigger_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Trigger_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Trigger" */
export type Trigger_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trigger_Max_Order_By>;
  min?: InputMaybe<Trigger_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Trigger_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "Trigger" */
export type Trigger_Arr_Rel_Insert_Input = {
  data: Array<Trigger_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Trigger_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Trigger". All fields are combined with a logical 'AND'. */
export type Trigger_Bool_Exp = {
  Activity?: InputMaybe<Activity_Bool_Exp>;
  _and?: InputMaybe<Array<Trigger_Bool_Exp>>;
  _not?: InputMaybe<Trigger_Bool_Exp>;
  _or?: InputMaybe<Array<Trigger_Bool_Exp>>;
  activityId?: InputMaybe<String_Comparison_Exp>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<TriggerType_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Trigger" */
export enum Trigger_Constraint {
  /** unique or primary key constraint on columns "id" */
  TRIGGER_PKEY = 'Trigger_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Trigger_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Trigger_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Trigger_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "Trigger" */
export type Trigger_Insert_Input = {
  Activity?: InputMaybe<Activity_Obj_Rel_Insert_Input>;
  activityId?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['TriggerType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Trigger" */
export type Trigger_Max_Order_By = {
  activityId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Trigger" */
export type Trigger_Min_Order_By = {
  activityId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "Trigger" */
export type Trigger_On_Conflict = {
  constraint: Trigger_Constraint;
  update_columns?: Array<Trigger_Update_Column>;
  where?: InputMaybe<Trigger_Bool_Exp>;
};

/** Ordering options when selecting data from "Trigger". */
export type Trigger_Order_By = {
  Activity?: InputMaybe<Activity_Order_By>;
  activityId?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Trigger */
export type Trigger_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Trigger_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "Trigger" */
export enum Trigger_Select_Column {
  /** column name */
  ACTIVITYID = 'activityId',
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "Trigger" */
export type Trigger_Set_Input = {
  activityId?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['TriggerType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Trigger" */
export type Trigger_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Trigger_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Trigger_Stream_Cursor_Value_Input = {
  activityId?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['TriggerType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Trigger" */
export enum Trigger_Update_Column {
  /** column name */
  ACTIVITYID = 'activityId',
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type Trigger_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Trigger_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Trigger_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Trigger_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Trigger_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Trigger_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Trigger_Set_Input>;
  where: Trigger_Bool_Exp;
};

export type UpdateUserInputbe = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type User_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Aggregate_Bool_Exp_Count>;
};

export type User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "User" */
export type User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Comments?: InputMaybe<Comment_Bool_Exp>;
  Comments_aggregate?: InputMaybe<Comment_Aggregate_Bool_Exp>;
  EventLogs?: InputMaybe<EventLog_Bool_Exp>;
  EventLogs_aggregate?: InputMaybe<EventLog_Aggregate_Bool_Exp>;
  MemberOnTeams?: InputMaybe<MemberOnTeams_Bool_Exp>;
  MemberOnTeams_aggregate?: InputMaybe<MemberOnTeams_Aggregate_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  Posts?: InputMaybe<Post_Bool_Exp>;
  Posts_aggregate?: InputMaybe<Post_Aggregate_Bool_Exp>;
  Teams?: InputMaybe<Team_Bool_Exp>;
  Teams_aggregate?: InputMaybe<Team_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Role_Comparison_Exp>;
  teamsByManagerid?: InputMaybe<Team_Bool_Exp>;
  teamsByManagerid_aggregate?: InputMaybe<Team_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  USER_EMAIL_KEY = 'User_email_key',
  /** unique or primary key constraint on columns "id" */
  USER_PKEY = 'User_pkey'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  EventLogs?: InputMaybe<EventLog_Arr_Rel_Insert_Input>;
  MemberOnTeams?: InputMaybe<MemberOnTeams_Arr_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Posts?: InputMaybe<Post_Arr_Rel_Insert_Input>;
  Teams?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  teamsByManagerid?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "User" */
export type User_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  Comments_aggregate?: InputMaybe<Comment_Aggregate_Order_By>;
  EventLogs_aggregate?: InputMaybe<EventLog_Aggregate_Order_By>;
  MemberOnTeams_aggregate?: InputMaybe<MemberOnTeams_Aggregate_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  Posts_aggregate?: InputMaybe<Post_Aggregate_Order_By>;
  Teams_aggregate?: InputMaybe<Team_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  teamsByManagerid_aggregate?: InputMaybe<Team_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  EMAIL = 'email',
  /** column name */
  FIRSTNAME = 'firstname',
  /** column name */
  ID = 'id',
  /** column name */
  LASTNAME = 'lastname',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PASSWORD = 'password',
  /** column name */
  ROLE = 'role',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  EMAIL = 'email',
  /** column name */
  FIRSTNAME = 'firstname',
  /** column name */
  ID = 'id',
  /** column name */
  LASTNAME = 'lastname',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PASSWORD = 'password',
  /** column name */
  ROLE = 'role',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

export type Workflow_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workflow_Aggregate_Bool_Exp_Count>;
};

export type Workflow_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workflow_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Workflow_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Workflow" */
export type Workflow_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workflow_Max_Order_By>;
  min?: InputMaybe<Workflow_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "Workflow" */
export type Workflow_Arr_Rel_Insert_Input = {
  data: Array<Workflow_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Workflow". All fields are combined with a logical 'AND'. */
export type Workflow_Bool_Exp = {
  Activities?: InputMaybe<Activity_Bool_Exp>;
  Activities_aggregate?: InputMaybe<Activity_Aggregate_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Bool_Exp>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Workflow_Bool_Exp>>;
  _not?: InputMaybe<Workflow_Bool_Exp>;
  _or?: InputMaybe<Array<Workflow_Bool_Exp>>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Workflow" */
export enum Workflow_Constraint {
  /** unique or primary key constraint on columns "id" */
  WORKFLOW_PKEY = 'Workflow_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Workflow_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Workflow_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Workflow_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']>;
};

export type GiftCardUpdateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addTags?: InputMaybe<Array<Scalars['String']>>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  expiryDate?: InputMaybe<Scalars['Date']>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: InputMaybe<Scalars['Date']>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: InputMaybe<Scalars['Date']>;
  /**
   * The gift card tags to remove.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  removeTags?: InputMaybe<Array<Scalars['String']>>;
  /**
   * The gift card balance amount.
   *
   * Added in Saleor 3.1.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  balanceAmount?: InputMaybe<Scalars['PositiveDecimal']>;
};

export type IntRangeInput = {
  /** Value greater than or equal to. */
  gte?: InputMaybe<Scalars['Int']>;
  /** Value less than or equal to. */
  lte?: InputMaybe<Scalars['Int']>;
};

export type InvoiceCreateInput = {
  /** Invoice number. */
  number: Scalars['String'];
  /** URL of an invoice to download. */
  url: Scalars['String'];
};

/** An enumeration. */
export enum InvoiceErrorCode {
  REQUIRED = 'REQUIRED',
  NOT_READY = 'NOT_READY',
  URL_NOT_SET = 'URL_NOT_SET',
  EMAIL_NOT_SET = 'EMAIL_NOT_SET',
  NUMBER_NOT_SET = 'NUMBER_NOT_SET',
  NOT_FOUND = 'NOT_FOUND',
  INVALID_STATUS = 'INVALID_STATUS',
  NO_INVOICE_PLUGIN = 'NO_INVOICE_PLUGIN'
}

/** An enumeration. */
export enum JobStatusEnum {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  DELETED = 'DELETED'
}

/** An enumeration. */
export enum LanguageCodeEnum {
  AF = 'AF',
  AF_NA = 'AF_NA',
  AF_ZA = 'AF_ZA',
  AGQ = 'AGQ',
  AGQ_CM = 'AGQ_CM',
  AK = 'AK',
  AK_GH = 'AK_GH',
  AM = 'AM',
  AM_ET = 'AM_ET',
  AR = 'AR',
  AR_AE = 'AR_AE',
  AR_BH = 'AR_BH',
  AR_DJ = 'AR_DJ',
  AR_DZ = 'AR_DZ',
  AR_EG = 'AR_EG',
  AR_EH = 'AR_EH',
  AR_ER = 'AR_ER',
  AR_IL = 'AR_IL',
  AR_IQ = 'AR_IQ',
  AR_JO = 'AR_JO',
  AR_KM = 'AR_KM',
  AR_KW = 'AR_KW',
  AR_LB = 'AR_LB',
  AR_LY = 'AR_LY',
  AR_MA = 'AR_MA',
  AR_MR = 'AR_MR',
  AR_OM = 'AR_OM',
  AR_PS = 'AR_PS',
  AR_QA = 'AR_QA',
  AR_SA = 'AR_SA',
  AR_SD = 'AR_SD',
  AR_SO = 'AR_SO',
  AR_SS = 'AR_SS',
  AR_SY = 'AR_SY',
  AR_TD = 'AR_TD',
  AR_TN = 'AR_TN',
  AR_YE = 'AR_YE',
  AS = 'AS',
  AS_IN = 'AS_IN',
  ASA = 'ASA',
  ASA_TZ = 'ASA_TZ',
  AST = 'AST',
  AST_ES = 'AST_ES',
  AZ = 'AZ',
  AZ_CYRL = 'AZ_CYRL',
  AZ_CYRL_AZ = 'AZ_CYRL_AZ',
  AZ_LATN = 'AZ_LATN',
  AZ_LATN_AZ = 'AZ_LATN_AZ',
  BAS = 'BAS',
  BAS_CM = 'BAS_CM',
  BE = 'BE',
  BE_BY = 'BE_BY',
  BEM = 'BEM',
  BEM_ZM = 'BEM_ZM',
  BEZ = 'BEZ',
  BEZ_TZ = 'BEZ_TZ',
  BG = 'BG',
  BG_BG = 'BG_BG',
  BM = 'BM',
  BM_ML = 'BM_ML',
  BN = 'BN',
  BN_BD = 'BN_BD',
  BN_IN = 'BN_IN',
  BO = 'BO',
  BO_CN = 'BO_CN',
  BO_IN = 'BO_IN',
  BR = 'BR',
  BR_FR = 'BR_FR',
  BRX = 'BRX',
  BRX_IN = 'BRX_IN',
  BS = 'BS',
  BS_CYRL = 'BS_CYRL',
  BS_CYRL_BA = 'BS_CYRL_BA',
  BS_LATN = 'BS_LATN',
  BS_LATN_BA = 'BS_LATN_BA',
  CA = 'CA',
  CA_AD = 'CA_AD',
  CA_ES = 'CA_ES',
  CA_ES_VALENCIA = 'CA_ES_VALENCIA',
  CA_FR = 'CA_FR',
  CA_IT = 'CA_IT',
  CCP = 'CCP',
  CCP_BD = 'CCP_BD',
  CCP_IN = 'CCP_IN',
  CE = 'CE',
  CE_RU = 'CE_RU',
  CEB = 'CEB',
  CEB_PH = 'CEB_PH',
  CGG = 'CGG',
  CGG_UG = 'CGG_UG',
  CHR = 'CHR',
  CHR_US = 'CHR_US',
  CKB = 'CKB',
  CKB_IQ = 'CKB_IQ',
  CKB_IR = 'CKB_IR',
  CS = 'CS',
  CS_CZ = 'CS_CZ',
  CU = 'CU',
  CU_RU = 'CU_RU',
  CY = 'CY',
  CY_GB = 'CY_GB',
  DA = 'DA',
  DA_DK = 'DA_DK',
  DA_GL = 'DA_GL',
  DAV = 'DAV',
  DAV_KE = 'DAV_KE',
  DE = 'DE',
  DE_AT = 'DE_AT',
  DE_BE = 'DE_BE',
  DE_CH = 'DE_CH',
  DE_DE = 'DE_DE',
  DE_IT = 'DE_IT',
  DE_LI = 'DE_LI',
  DE_LU = 'DE_LU',
  DJE = 'DJE',
  DJE_NE = 'DJE_NE',
  DSB = 'DSB',
  DSB_DE = 'DSB_DE',
  DUA = 'DUA',
  DUA_CM = 'DUA_CM',
  DYO = 'DYO',
  DYO_SN = 'DYO_SN',
  DZ = 'DZ',
  DZ_BT = 'DZ_BT',
  EBU = 'EBU',
  EBU_KE = 'EBU_KE',
  EE = 'EE',
  EE_GH = 'EE_GH',
  EE_TG = 'EE_TG',
  EL = 'EL',
  EL_CY = 'EL_CY',
  EL_GR = 'EL_GR',
  EN = 'EN',
  EN_AE = 'EN_AE',
  EN_AG = 'EN_AG',
  EN_AI = 'EN_AI',
  EN_AS = 'EN_AS',
  EN_AT = 'EN_AT',
  EN_AU = 'EN_AU',
  EN_BB = 'EN_BB',
  EN_BE = 'EN_BE',
  EN_BI = 'EN_BI',
  EN_BM = 'EN_BM',
  EN_BS = 'EN_BS',
  EN_BW = 'EN_BW',
  EN_BZ = 'EN_BZ',
  EN_CA = 'EN_CA',
  EN_CC = 'EN_CC',
  EN_CH = 'EN_CH',
  EN_CK = 'EN_CK',
  EN_CM = 'EN_CM',
  EN_CX = 'EN_CX',
  EN_CY = 'EN_CY',
  EN_DE = 'EN_DE',
  EN_DG = 'EN_DG',
  EN_DK = 'EN_DK',
  EN_DM = 'EN_DM',
  EN_ER = 'EN_ER',
  EN_FI = 'EN_FI',
  EN_FJ = 'EN_FJ',
  EN_FK = 'EN_FK',
  EN_FM = 'EN_FM',
  EN_GB = 'EN_GB',
  EN_GD = 'EN_GD',
  EN_GG = 'EN_GG',
  EN_GH = 'EN_GH',
  EN_GI = 'EN_GI',
  EN_GM = 'EN_GM',
  EN_GU = 'EN_GU',
  EN_GY = 'EN_GY',
  EN_HK = 'EN_HK',
  EN_IE = 'EN_IE',
  EN_IL = 'EN_IL',
  EN_IM = 'EN_IM',
  EN_IN = 'EN_IN',
  EN_IO = 'EN_IO',
  EN_JE = 'EN_JE',
  EN_JM = 'EN_JM',
  EN_KE = 'EN_KE',
  EN_KI = 'EN_KI',
  EN_KN = 'EN_KN',
  EN_KY = 'EN_KY',
  EN_LC = 'EN_LC',
  EN_LR = 'EN_LR',
  EN_LS = 'EN_LS',
  EN_MG = 'EN_MG',
  EN_MH = 'EN_MH',
  EN_MO = 'EN_MO',
  EN_MP = 'EN_MP',
  EN_MS = 'EN_MS',
  EN_MT = 'EN_MT',
  EN_MU = 'EN_MU',
  EN_MW = 'EN_MW',
  EN_MY = 'EN_MY',
  EN_NA = 'EN_NA',
  EN_NF = 'EN_NF',
  EN_NG = 'EN_NG',
  EN_NL = 'EN_NL',
  EN_NR = 'EN_NR',
  EN_NU = 'EN_NU',
  EN_NZ = 'EN_NZ',
  EN_PG = 'EN_PG',
  EN_PH = 'EN_PH',
  EN_PK = 'EN_PK',
  EN_PN = 'EN_PN',
  EN_PR = 'EN_PR',
  EN_PW = 'EN_PW',
  EN_RW = 'EN_RW',
  EN_SB = 'EN_SB',
  EN_SC = 'EN_SC',
  EN_SD = 'EN_SD',
  EN_SE = 'EN_SE',
  EN_SG = 'EN_SG',
  EN_SH = 'EN_SH',
  EN_SI = 'EN_SI',
  EN_SL = 'EN_SL',
  EN_SS = 'EN_SS',
  EN_SX = 'EN_SX',
  EN_SZ = 'EN_SZ',
  EN_TC = 'EN_TC',
  EN_TK = 'EN_TK',
  EN_TO = 'EN_TO',
  EN_TT = 'EN_TT',
  EN_TV = 'EN_TV',
  EN_TZ = 'EN_TZ',
  EN_UG = 'EN_UG',
  EN_UM = 'EN_UM',
  EN_US = 'EN_US',
  EN_VC = 'EN_VC',
  EN_VG = 'EN_VG',
  EN_VI = 'EN_VI',
  EN_VU = 'EN_VU',
  EN_WS = 'EN_WS',
  EN_ZA = 'EN_ZA',
  EN_ZM = 'EN_ZM',
  EN_ZW = 'EN_ZW',
  EO = 'EO',
  ES = 'ES',
  ES_AR = 'ES_AR',
  ES_BO = 'ES_BO',
  ES_BR = 'ES_BR',
  ES_BZ = 'ES_BZ',
  ES_CL = 'ES_CL',
  ES_CO = 'ES_CO',
  ES_CR = 'ES_CR',
  ES_CU = 'ES_CU',
  ES_DO = 'ES_DO',
  ES_EA = 'ES_EA',
  ES_EC = 'ES_EC',
  ES_ES = 'ES_ES',
  ES_GQ = 'ES_GQ',
  ES_GT = 'ES_GT',
  ES_HN = 'ES_HN',
  ES_IC = 'ES_IC',
  ES_MX = 'ES_MX',
  ES_NI = 'ES_NI',
  ES_PA = 'ES_PA',
  ES_PE = 'ES_PE',
  ES_PH = 'ES_PH',
  ES_PR = 'ES_PR',
  ES_PY = 'ES_PY',
  ES_SV = 'ES_SV',
  ES_US = 'ES_US',
  ES_UY = 'ES_UY',
  ES_VE = 'ES_VE',
  ET = 'ET',
  ET_EE = 'ET_EE',
  EU = 'EU',
  EU_ES = 'EU_ES',
  EWO = 'EWO',
  EWO_CM = 'EWO_CM',
  FA = 'FA',
  FA_AF = 'FA_AF',
  FA_IR = 'FA_IR',
  FF = 'FF',
  FF_ADLM = 'FF_ADLM',
  FF_ADLM_BF = 'FF_ADLM_BF',
  FF_ADLM_CM = 'FF_ADLM_CM',
  FF_ADLM_GH = 'FF_ADLM_GH',
  FF_ADLM_GM = 'FF_ADLM_GM',
  FF_ADLM_GN = 'FF_ADLM_GN',
  FF_ADLM_GW = 'FF_ADLM_GW',
  FF_ADLM_LR = 'FF_ADLM_LR',
  FF_ADLM_MR = 'FF_ADLM_MR',
  FF_ADLM_NE = 'FF_ADLM_NE',
  FF_ADLM_NG = 'FF_ADLM_NG',
  FF_ADLM_SL = 'FF_ADLM_SL',
  FF_ADLM_SN = 'FF_ADLM_SN',
  FF_LATN = 'FF_LATN',
  FF_LATN_BF = 'FF_LATN_BF',
  FF_LATN_CM = 'FF_LATN_CM',
  FF_LATN_GH = 'FF_LATN_GH',
  FF_LATN_GM = 'FF_LATN_GM',
  FF_LATN_GN = 'FF_LATN_GN',
  FF_LATN_GW = 'FF_LATN_GW',
  FF_LATN_LR = 'FF_LATN_LR',
  FF_LATN_MR = 'FF_LATN_MR',
  FF_LATN_NE = 'FF_LATN_NE',
  FF_LATN_NG = 'FF_LATN_NG',
  FF_LATN_SL = 'FF_LATN_SL',
  FF_LATN_SN = 'FF_LATN_SN',
  FI = 'FI',
  FI_FI = 'FI_FI',
  FIL = 'FIL',
  FIL_PH = 'FIL_PH',
  FO = 'FO',
  FO_DK = 'FO_DK',
  FO_FO = 'FO_FO',
  FR = 'FR',
  FR_BE = 'FR_BE',
  FR_BF = 'FR_BF',
  FR_BI = 'FR_BI',
  FR_BJ = 'FR_BJ',
  FR_BL = 'FR_BL',
  FR_CA = 'FR_CA',
  FR_CD = 'FR_CD',
  FR_CF = 'FR_CF',
  FR_CG = 'FR_CG',
  FR_CH = 'FR_CH',
  FR_CI = 'FR_CI',
  FR_CM = 'FR_CM',
  FR_DJ = 'FR_DJ',
  FR_DZ = 'FR_DZ',
  FR_FR = 'FR_FR',
  FR_GA = 'FR_GA',
  FR_GF = 'FR_GF',
  FR_GN = 'FR_GN',
  FR_GP = 'FR_GP',
  FR_GQ = 'FR_GQ',
  FR_HT = 'FR_HT',
  FR_KM = 'FR_KM',
  FR_LU = 'FR_LU',
  FR_MA = 'FR_MA',
  FR_MC = 'FR_MC',
  FR_MF = 'FR_MF',
  FR_MG = 'FR_MG',
  FR_ML = 'FR_ML',
  FR_MQ = 'FR_MQ',
  FR_MR = 'FR_MR',
  FR_MU = 'FR_MU',
  FR_NC = 'FR_NC',
  FR_NE = 'FR_NE',
  FR_PF = 'FR_PF',
  FR_PM = 'FR_PM',
  FR_RE = 'FR_RE',
  FR_RW = 'FR_RW',
  FR_SC = 'FR_SC',
  FR_SN = 'FR_SN',
  FR_SY = 'FR_SY',
  FR_TD = 'FR_TD',
  FR_TG = 'FR_TG',
  FR_TN = 'FR_TN',
  FR_VU = 'FR_VU',
  FR_WF = 'FR_WF',
  FR_YT = 'FR_YT',
  FUR = 'FUR',
  FUR_IT = 'FUR_IT',
  FY = 'FY',
  FY_NL = 'FY_NL',
  GA = 'GA',
  GA_GB = 'GA_GB',
  GA_IE = 'GA_IE',
  GD = 'GD',
  GD_GB = 'GD_GB',
  GL = 'GL',
  GL_ES = 'GL_ES',
  GSW = 'GSW',
  GSW_CH = 'GSW_CH',
  GSW_FR = 'GSW_FR',
  GSW_LI = 'GSW_LI',
  GU = 'GU',
  GU_IN = 'GU_IN',
  GUZ = 'GUZ',
  GUZ_KE = 'GUZ_KE',
  GV = 'GV',
  GV_IM = 'GV_IM',
  HA = 'HA',
  HA_GH = 'HA_GH',
  HA_NE = 'HA_NE',
  HA_NG = 'HA_NG',
  HAW = 'HAW',
  HAW_US = 'HAW_US',
  HE = 'HE',
  HE_IL = 'HE_IL',
  HI = 'HI',
  HI_IN = 'HI_IN',
  HR = 'HR',
  HR_BA = 'HR_BA',
  HR_HR = 'HR_HR',
  HSB = 'HSB',
  HSB_DE = 'HSB_DE',
  HU = 'HU',
  HU_HU = 'HU_HU',
  HY = 'HY',
  HY_AM = 'HY_AM',
  IA = 'IA',
  ID = 'ID',
  ID_ID = 'ID_ID',
  IG = 'IG',
  IG_NG = 'IG_NG',
  II = 'II',
  II_CN = 'II_CN',
  IS = 'IS',
  IS_IS = 'IS_IS',
  IT = 'IT',
  IT_CH = 'IT_CH',
  IT_IT = 'IT_IT',
  IT_SM = 'IT_SM',
  IT_VA = 'IT_VA',
  JA = 'JA',
  JA_JP = 'JA_JP',
  JGO = 'JGO',
  JGO_CM = 'JGO_CM',
  JMC = 'JMC',
  JMC_TZ = 'JMC_TZ',
  JV = 'JV',
  JV_ID = 'JV_ID',
  KA = 'KA',
  KA_GE = 'KA_GE',
  KAB = 'KAB',
  KAB_DZ = 'KAB_DZ',
  KAM = 'KAM',
  KAM_KE = 'KAM_KE',
  KDE = 'KDE',
  KDE_TZ = 'KDE_TZ',
  KEA = 'KEA',
  KEA_CV = 'KEA_CV',
  KHQ = 'KHQ',
  KHQ_ML = 'KHQ_ML',
  KI = 'KI',
  KI_KE = 'KI_KE',
  KK = 'KK',
  KK_KZ = 'KK_KZ',
  KKJ = 'KKJ',
  KKJ_CM = 'KKJ_CM',
  KL = 'KL',
  KL_GL = 'KL_GL',
  KLN = 'KLN',
  KLN_KE = 'KLN_KE',
  KM = 'KM',
  KM_KH = 'KM_KH',
  KN = 'KN',
  KN_IN = 'KN_IN',
  KO = 'KO',
  KO_KP = 'KO_KP',
  KO_KR = 'KO_KR',
  KOK = 'KOK',
  KOK_IN = 'KOK_IN',
  KS = 'KS',
  KS_ARAB = 'KS_ARAB',
  KS_ARAB_IN = 'KS_ARAB_IN',
  KSB = 'KSB',
  KSB_TZ = 'KSB_TZ',
  KSF = 'KSF',
  KSF_CM = 'KSF_CM',
  KSH = 'KSH',
  KSH_DE = 'KSH_DE',
  KU = 'KU',
  KU_TR = 'KU_TR',
  KW = 'KW',
  KW_GB = 'KW_GB',
  KY = 'KY',
  KY_KG = 'KY_KG',
  LAG = 'LAG',
  LAG_TZ = 'LAG_TZ',
  LB = 'LB',
  LB_LU = 'LB_LU',
  LG = 'LG',
  LG_UG = 'LG_UG',
  LKT = 'LKT',
  LKT_US = 'LKT_US',
  LN = 'LN',
  LN_AO = 'LN_AO',
  LN_CD = 'LN_CD',
  LN_CF = 'LN_CF',
  LN_CG = 'LN_CG',
  LO = 'LO',
  LO_LA = 'LO_LA',
  LRC = 'LRC',
  LRC_IQ = 'LRC_IQ',
  LRC_IR = 'LRC_IR',
  LT = 'LT',
  LT_LT = 'LT_LT',
  LU = 'LU',
  LU_CD = 'LU_CD',
  LUO = 'LUO',
  LUO_KE = 'LUO_KE',
  LUY = 'LUY',
  LUY_KE = 'LUY_KE',
  LV = 'LV',
  LV_LV = 'LV_LV',
  MAI = 'MAI',
  MAI_IN = 'MAI_IN',
  MAS = 'MAS',
  MAS_KE = 'MAS_KE',
  MAS_TZ = 'MAS_TZ',
  MER = 'MER',
  MER_KE = 'MER_KE',
  MFE = 'MFE',
  MFE_MU = 'MFE_MU',
  MG = 'MG',
  MG_MG = 'MG_MG',
  MGH = 'MGH',
  MGH_MZ = 'MGH_MZ',
  MGO = 'MGO',
  MGO_CM = 'MGO_CM',
  MI = 'MI',
  MI_NZ = 'MI_NZ',
  MK = 'MK',
  MK_MK = 'MK_MK',
  ML = 'ML',
  ML_IN = 'ML_IN',
  MN = 'MN',
  MN_MN = 'MN_MN',
  MNI = 'MNI',
  MNI_BENG = 'MNI_BENG',
  MNI_BENG_IN = 'MNI_BENG_IN',
  MR = 'MR',
  MR_IN = 'MR_IN',
  MS = 'MS',
  MS_BN = 'MS_BN',
  MS_ID = 'MS_ID',
  MS_MY = 'MS_MY',
  MS_SG = 'MS_SG',
  MT = 'MT',
  MT_MT = 'MT_MT',
  MUA = 'MUA',
  MUA_CM = 'MUA_CM',
  MY = 'MY',
  MY_MM = 'MY_MM',
  MZN = 'MZN',
  MZN_IR = 'MZN_IR',
  NAQ = 'NAQ',
  NAQ_NA = 'NAQ_NA',
  NB = 'NB',
  NB_NO = 'NB_NO',
  NB_SJ = 'NB_SJ',
  ND = 'ND',
  ND_ZW = 'ND_ZW',
  NDS = 'NDS',
  NDS_DE = 'NDS_DE',
  NDS_NL = 'NDS_NL',
  NE = 'NE',
  NE_IN = 'NE_IN',
  NE_NP = 'NE_NP',
  NL = 'NL',
  NL_AW = 'NL_AW',
  NL_BE = 'NL_BE',
  NL_BQ = 'NL_BQ',
  NL_CW = 'NL_CW',
  NL_NL = 'NL_NL',
  NL_SR = 'NL_SR',
  NL_SX = 'NL_SX',
  NMG = 'NMG',
  NMG_CM = 'NMG_CM',
  NN = 'NN',
  NN_NO = 'NN_NO',
  NNH = 'NNH',
  NNH_CM = 'NNH_CM',
  NUS = 'NUS',
  NUS_SS = 'NUS_SS',
  NYN = 'NYN',
  NYN_UG = 'NYN_UG',
  OM = 'OM',
  OM_ET = 'OM_ET',
  OM_KE = 'OM_KE',
  OR = 'OR',
  OR_IN = 'OR_IN',
  OS = 'OS',
  OS_GE = 'OS_GE',
  OS_RU = 'OS_RU',
  PA = 'PA',
  PA_ARAB = 'PA_ARAB',
  PA_ARAB_PK = 'PA_ARAB_PK',
  PA_GURU = 'PA_GURU',
  PA_GURU_IN = 'PA_GURU_IN',
  PCM = 'PCM',
  PCM_NG = 'PCM_NG',
  PL = 'PL',
  PL_PL = 'PL_PL',
  PRG = 'PRG',
  PS = 'PS',
  PS_AF = 'PS_AF',
  PS_PK = 'PS_PK',
  PT = 'PT',
  PT_AO = 'PT_AO',
  PT_BR = 'PT_BR',
  PT_CH = 'PT_CH',
  PT_CV = 'PT_CV',
  PT_GQ = 'PT_GQ',
  PT_GW = 'PT_GW',
  PT_LU = 'PT_LU',
  PT_MO = 'PT_MO',
  PT_MZ = 'PT_MZ',
  PT_PT = 'PT_PT',
  PT_ST = 'PT_ST',
  PT_TL = 'PT_TL',
  QU = 'QU',
  QU_BO = 'QU_BO',
  QU_EC = 'QU_EC',
  QU_PE = 'QU_PE',
  RM = 'RM',
  RM_CH = 'RM_CH',
  RN = 'RN',
  RN_BI = 'RN_BI',
  RO = 'RO',
  RO_MD = 'RO_MD',
  RO_RO = 'RO_RO',
  ROF = 'ROF',
  ROF_TZ = 'ROF_TZ',
  RU = 'RU',
  RU_BY = 'RU_BY',
  RU_KG = 'RU_KG',
  RU_KZ = 'RU_KZ',
  RU_MD = 'RU_MD',
  RU_RU = 'RU_RU',
  RU_UA = 'RU_UA',
  RW = 'RW',
  RW_RW = 'RW_RW',
  RWK = 'RWK',
  RWK_TZ = 'RWK_TZ',
  SAH = 'SAH',
  SAH_RU = 'SAH_RU',
  SAQ = 'SAQ',
  SAQ_KE = 'SAQ_KE',
  SAT = 'SAT',
  SAT_OLCK = 'SAT_OLCK',
  SAT_OLCK_IN = 'SAT_OLCK_IN',
  SBP = 'SBP',
  SBP_TZ = 'SBP_TZ',
  SD = 'SD',
  SD_ARAB = 'SD_ARAB',
  SD_ARAB_PK = 'SD_ARAB_PK',
  SD_DEVA = 'SD_DEVA',
  SD_DEVA_IN = 'SD_DEVA_IN',
  SE = 'SE',
  SE_FI = 'SE_FI',
  SE_NO = 'SE_NO',
  SE_SE = 'SE_SE',
  SEH = 'SEH',
  SEH_MZ = 'SEH_MZ',
  SES = 'SES',
  SES_ML = 'SES_ML',
  SG = 'SG',
  SG_CF = 'SG_CF',
  SHI = 'SHI',
  SHI_LATN = 'SHI_LATN',
  SHI_LATN_MA = 'SHI_LATN_MA',
  SHI_TFNG = 'SHI_TFNG',
  SHI_TFNG_MA = 'SHI_TFNG_MA',
  SI = 'SI',
  SI_LK = 'SI_LK',
  SK = 'SK',
  SK_SK = 'SK_SK',
  SL = 'SL',
  SL_SI = 'SL_SI',
  SMN = 'SMN',
  SMN_FI = 'SMN_FI',
  SN = 'SN',
  SN_ZW = 'SN_ZW',
  SO = 'SO',
  SO_DJ = 'SO_DJ',
  SO_ET = 'SO_ET',
  SO_KE = 'SO_KE',
  SO_SO = 'SO_SO',
  SQ = 'SQ',
  SQ_AL = 'SQ_AL',
  SQ_MK = 'SQ_MK',
  SQ_XK = 'SQ_XK',
  SR = 'SR',
  SR_CYRL = 'SR_CYRL',
  SR_CYRL_BA = 'SR_CYRL_BA',
  SR_CYRL_ME = 'SR_CYRL_ME',
  SR_CYRL_RS = 'SR_CYRL_RS',
  SR_CYRL_XK = 'SR_CYRL_XK',
  SR_LATN = 'SR_LATN',
  SR_LATN_BA = 'SR_LATN_BA',
  SR_LATN_ME = 'SR_LATN_ME',
  SR_LATN_RS = 'SR_LATN_RS',
  SR_LATN_XK = 'SR_LATN_XK',
  SU = 'SU',
  SU_LATN = 'SU_LATN',
  SU_LATN_ID = 'SU_LATN_ID',
  SV = 'SV',
  SV_AX = 'SV_AX',
  SV_FI = 'SV_FI',
  SV_SE = 'SV_SE',
  SW = 'SW',
  SW_CD = 'SW_CD',
  SW_KE = 'SW_KE',
  SW_TZ = 'SW_TZ',
  SW_UG = 'SW_UG',
  TA = 'TA',
  TA_IN = 'TA_IN',
  TA_LK = 'TA_LK',
  TA_MY = 'TA_MY',
  TA_SG = 'TA_SG',
  TE = 'TE',
  TE_IN = 'TE_IN',
  TEO = 'TEO',
  TEO_KE = 'TEO_KE',
  TEO_UG = 'TEO_UG',
  TG = 'TG',
  TG_TJ = 'TG_TJ',
  TH = 'TH',
  TH_TH = 'TH_TH',
  TI = 'TI',
  TI_ER = 'TI_ER',
  TI_ET = 'TI_ET',
  TK = 'TK',
  TK_TM = 'TK_TM',
  TO = 'TO',
  TO_TO = 'TO_TO',
  TR = 'TR',
  TR_CY = 'TR_CY',
  TR_TR = 'TR_TR',
  TT = 'TT',
  TT_RU = 'TT_RU',
  TWQ = 'TWQ',
  TWQ_NE = 'TWQ_NE',
  TZM = 'TZM',
  TZM_MA = 'TZM_MA',
  UG = 'UG',
  UG_CN = 'UG_CN',
  UK = 'UK',
  UK_UA = 'UK_UA',
  UR = 'UR',
  UR_IN = 'UR_IN',
  UR_PK = 'UR_PK',
  UZ = 'UZ',
  UZ_ARAB = 'UZ_ARAB',
  UZ_ARAB_AF = 'UZ_ARAB_AF',
  UZ_CYRL = 'UZ_CYRL',
  UZ_CYRL_UZ = 'UZ_CYRL_UZ',
  UZ_LATN = 'UZ_LATN',
  UZ_LATN_UZ = 'UZ_LATN_UZ',
  VAI = 'VAI',
  VAI_LATN = 'VAI_LATN',
  VAI_LATN_LR = 'VAI_LATN_LR',
  VAI_VAII = 'VAI_VAII',
  VAI_VAII_LR = 'VAI_VAII_LR',
  VI = 'VI',
  VI_VN = 'VI_VN',
  VO = 'VO',
  VUN = 'VUN',
  VUN_TZ = 'VUN_TZ',
  WAE = 'WAE',
  WAE_CH = 'WAE_CH',
  WO = 'WO',
  WO_SN = 'WO_SN',
  XH = 'XH',
  XH_ZA = 'XH_ZA',
  XOG = 'XOG',
  XOG_UG = 'XOG_UG',
  YAV = 'YAV',
  YAV_CM = 'YAV_CM',
  YI = 'YI',
  YO = 'YO',
  YO_BJ = 'YO_BJ',
  YO_NG = 'YO_NG',
  YUE = 'YUE',
  YUE_HANS = 'YUE_HANS',
  YUE_HANS_CN = 'YUE_HANS_CN',
  YUE_HANT = 'YUE_HANT',
  YUE_HANT_HK = 'YUE_HANT_HK',
  ZGH = 'ZGH',
  ZGH_MA = 'ZGH_MA',
  ZH = 'ZH',
  ZH_HANS = 'ZH_HANS',
  ZH_HANS_CN = 'ZH_HANS_CN',
  ZH_HANS_HK = 'ZH_HANS_HK',
  ZH_HANS_MO = 'ZH_HANS_MO',
  ZH_HANS_SG = 'ZH_HANS_SG',
  ZH_HANT = 'ZH_HANT',
  ZH_HANT_HK = 'ZH_HANT_HK',
  ZH_HANT_MO = 'ZH_HANT_MO',
  ZH_HANT_TW = 'ZH_HANT_TW',
  ZU = 'ZU',
  ZU_ZA = 'ZU_ZA'
}

/** An enumeration. */
export enum MeasurementUnitsEnum {
  CM = 'CM',
  M = 'M',
  KM = 'KM',
  FT = 'FT',
  YD = 'YD',
  INCH = 'INCH',
  SQ_CM = 'SQ_CM',
  SQ_M = 'SQ_M',
  SQ_KM = 'SQ_KM',
  SQ_FT = 'SQ_FT',
  SQ_YD = 'SQ_YD',
  SQ_INCH = 'SQ_INCH',
  CUBIC_MILLIMETER = 'CUBIC_MILLIMETER',
  CUBIC_CENTIMETER = 'CUBIC_CENTIMETER',
  CUBIC_DECIMETER = 'CUBIC_DECIMETER',
  CUBIC_METER = 'CUBIC_METER',
  LITER = 'LITER',
  CUBIC_FOOT = 'CUBIC_FOOT',
  CUBIC_INCH = 'CUBIC_INCH',
  CUBIC_YARD = 'CUBIC_YARD',
  QT = 'QT',
  PINT = 'PINT',
  FL_OZ = 'FL_OZ',
  ACRE_IN = 'ACRE_IN',
  ACRE_FT = 'ACRE_FT',
  G = 'G',
  LB = 'LB',
  OZ = 'OZ',
  KG = 'KG',
  TONNE = 'TONNE'
}

export enum MediaChoicesSortField {
  /** Sort media by ID. */
  ID = 'ID'
}

export type MediaSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort media by the selected field. */
  field: MediaChoicesSortField;
};

export type MenuCreateInput = {
  /** Name of the menu. */
  name: Scalars['String'];
  /** Slug of the menu. Will be generated if not provided. */
  slug?: InputMaybe<Scalars['String']>;
  /** List of menu items. */
  items?: InputMaybe<Array<MenuItemInput>>;
};

/** An enumeration. */
export enum MenuErrorCode {
  CANNOT_ASSIGN_NODE = 'CANNOT_ASSIGN_NODE',
  GRAPHQL_ERROR = 'GRAPHQL_ERROR',
  INVALID = 'INVALID',
  INVALID_MENU_ITEM = 'INVALID_MENU_ITEM',
  NO_MENU_ITEM_PROVIDED = 'NO_MENU_ITEM_PROVIDED',
  NOT_FOUND = 'NOT_FOUND',
  REQUIRED = 'REQUIRED',
  TOO_MANY_MENU_ITEMS = 'TOO_MANY_MENU_ITEMS',
  UNIQUE = 'UNIQUE'
}

export type MenuFilterInput = {
  search?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Array<Scalars['String']>>;
  metadata?: InputMaybe<Array<MetadataFilter>>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
};

export type MenuInput = {
  /** Name of the menu. */
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Workflow" */
export type Workflow_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Workflow" */
export type Workflow_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "Workflow" */
export type Workflow_Obj_Rel_Insert_Input = {
  data: Workflow_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_On_Conflict>;
};

/** on_conflict condition type for table "Workflow" */
export type Workflow_On_Conflict = {
  constraint: Workflow_Constraint;
  update_columns?: Array<Workflow_Update_Column>;
  where?: InputMaybe<Workflow_Bool_Exp>;
};

/** Ordering options when selecting data from "Workflow". */
export type Workflow_Order_By = {
  Activities_aggregate?: InputMaybe<Activity_Aggregate_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Workflow */
export type Workflow_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "Workflow" */
export enum Workflow_Select_Column {
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "Workflow" */
export type Workflow_Set_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Workflow" */
export type Workflow_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workflow_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workflow_Stream_Cursor_Value_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Workflow" */
export enum Workflow_Update_Column {
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type Workflow_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Workflow_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Workflow_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Workflow_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Workflow_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Workflow_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workflow_Set_Input>;
  where: Workflow_Bool_Exp;
};

/** Boolean expression to filter rows from the table "_prisma_migrations". All fields are combined with a logical 'AND'. */
export type _Prisma_Migrations_Bool_Exp = {
  _and?: InputMaybe<Array<_Prisma_Migrations_Bool_Exp>>;
  _not?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
  _or?: InputMaybe<Array<_Prisma_Migrations_Bool_Exp>>;
  applied_steps_count?: InputMaybe<Int_Comparison_Exp>;
  checksum?: InputMaybe<String_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  logs?: InputMaybe<String_Comparison_Exp>;
  migration_name?: InputMaybe<String_Comparison_Exp>;
  rolled_back_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_prisma_migrations" */
export enum _Prisma_Migrations_Constraint {
  /** unique or primary key constraint on columns "id" */
  _PRISMA_MIGRATIONS_PKEY = '_prisma_migrations_pkey'
}

/** input type for incrementing numeric columns in table "_prisma_migrations" */
export type _Prisma_Migrations_Inc_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_prisma_migrations" */
export type _Prisma_Migrations_Insert_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
};

/** on_conflict condition type for table "_prisma_migrations" */
export type _Prisma_Migrations_On_Conflict = {
  constraint: _Prisma_Migrations_Constraint;
  update_columns?: Array<_Prisma_Migrations_Update_Column>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "_prisma_migrations". */
export type _Prisma_Migrations_Order_By = {
  applied_steps_count?: InputMaybe<Order_By>;
  checksum?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  migration_name?: InputMaybe<Order_By>;
  rolled_back_at?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _prisma_migrations */
export type _Prisma_Migrations_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Select_Column {
  /** column name */
  APPLIED_STEPS_COUNT = 'applied_steps_count',
  /** column name */
  CHECKSUM = 'checksum',
  /** column name */
  FINISHED_AT = 'finished_at',
  /** column name */
  ID = 'id',
  /** column name */
  LOGS = 'logs',
  /** column name */
  MIGRATION_NAME = 'migration_name',
  /** column name */
  ROLLED_BACK_AT = 'rolled_back_at',
  /** column name */
  STARTED_AT = 'started_at'
}

/** input type for updating data in table "_prisma_migrations" */
export type _Prisma_Migrations_Set_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "_prisma_migrations" */
export type _Prisma_Migrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Prisma_Migrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Prisma_Migrations_Stream_Cursor_Value_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Update_Column {
  /** column name */
  APPLIED_STEPS_COUNT = 'applied_steps_count',
  /** column name */
  CHECKSUM = 'checksum',
  /** column name */
  FINISHED_AT = 'finished_at',
  /** column name */
  ID = 'id',
  /** column name */
  LOGS = 'logs',
  /** column name */
  MIGRATION_NAME = 'migration_name',
  /** column name */
  ROLLED_BACK_AT = 'rolled_back_at',
  /** column name */
  STARTED_AT = 'started_at'
}

export type _Prisma_Migrations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  where: _Prisma_Migrations_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename: 'query_root', hello: string };

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename: 'query_root', hello: string };
