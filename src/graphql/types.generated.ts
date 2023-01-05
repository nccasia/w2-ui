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
  id?: InputMaybe<Int_Comparison_Exp>;
  intent?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<ActionType_Comparison_Exp>;
};

/** unique or primary key constraints on table "Action" */
export enum Action_Constraint {
  /** unique or primary key constraint on columns "id" */
  ACTION_PKEY = 'Action_pkey'
}

/** input type for incrementing numeric columns in table "Action" */
export type Action_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Action" */
export type Action_Insert_Input = {
  EventLogs?: InputMaybe<EventLog_Arr_Rel_Insert_Input>;
  action?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  id?: InputMaybe<Scalars['Int']>;
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
  id?: InputMaybe<Scalars['Int']>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Action_Inc_Input>;
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
  avg?: InputMaybe<Activity_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Activity_Max_Order_By>;
  min?: InputMaybe<Activity_Min_Order_By>;
  stddev?: InputMaybe<Activity_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Activity_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Activity_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Activity_Sum_Order_By>;
  var_pop?: InputMaybe<Activity_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Activity_Var_Samp_Order_By>;
  variance?: InputMaybe<Activity_Variance_Order_By>;
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

/** order by avg() on columns of table "Activity" */
export type Activity_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  workflowId?: InputMaybe<Int_Comparison_Exp>;
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

/** input type for incrementing numeric columns in table "Activity" */
export type Activity_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  workflowId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Activity" */
export type Activity_Insert_Input = {
  TaskDefinitions?: InputMaybe<TaskDefinition_Arr_Rel_Insert_Input>;
  Triggers?: InputMaybe<Trigger_Arr_Rel_Insert_Input>;
  Workflow?: InputMaybe<Workflow_Obj_Rel_Insert_Input>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "Activity" */
export type Activity_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Activity" */
export type Activity_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Activity" */
export type Activity_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Activity" */
export type Activity_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Activity_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Activity_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activity_Set_Input>;
  where: Activity_Bool_Exp;
};

/** order by var_pop() on columns of table "Activity" */
export type Activity_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Activity" */
export type Activity_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Activity" */
export type Activity_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<Comment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comment_Max_Order_By>;
  min?: InputMaybe<Comment_Min_Order_By>;
  stddev?: InputMaybe<Comment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comment_Sum_Order_By>;
  var_pop?: InputMaybe<Comment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comment_Var_Samp_Order_By>;
  variance?: InputMaybe<Comment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Comment" */
export type Comment_Arr_Rel_Insert_Input = {
  data: Array<Comment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** order by avg() on columns of table "Comment" */
export type Comment_Avg_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  creatorId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  taskId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint on columns "id" */
  COMMENT_PKEY = 'Comment_pkey'
}

/** input type for incrementing numeric columns in table "Comment" */
export type Comment_Inc_Input = {
  creatorId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Comment" */
export type Comment_Insert_Input = {
  Task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  creatorId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Comment" */
export type Comment_Stddev_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Comment" */
export type Comment_Stddev_Pop_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Comment" */
export type Comment_Stddev_Samp_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  creatorId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by sum() on columns of table "Comment" */
export type Comment_Sum_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Comment_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};

/** order by var_pop() on columns of table "Comment" */
export type Comment_Var_Pop_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Comment" */
export type Comment_Var_Samp_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Comment" */
export type Comment_Variance_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<EventLog_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<EventLog_Max_Order_By>;
  min?: InputMaybe<EventLog_Min_Order_By>;
  stddev?: InputMaybe<EventLog_Stddev_Order_By>;
  stddev_pop?: InputMaybe<EventLog_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<EventLog_Stddev_Samp_Order_By>;
  sum?: InputMaybe<EventLog_Sum_Order_By>;
  var_pop?: InputMaybe<EventLog_Var_Pop_Order_By>;
  var_samp?: InputMaybe<EventLog_Var_Samp_Order_By>;
  variance?: InputMaybe<EventLog_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "EventLog" */
export type EventLog_Arr_Rel_Insert_Input = {
  data: Array<EventLog_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<EventLog_On_Conflict>;
};

/** order by avg() on columns of table "EventLog" */
export type EventLog_Avg_Order_By = {
  actionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
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
  actionId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  taskId?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "EventLog" */
export enum EventLog_Constraint {
  /** unique or primary key constraint on columns "id" */
  EVENTLOG_PKEY = 'EventLog_pkey'
}

/** input type for incrementing numeric columns in table "EventLog" */
export type EventLog_Inc_Input = {
  actionId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "EventLog" */
export type EventLog_Insert_Input = {
  Action?: InputMaybe<Action_Obj_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  actionId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  actionId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "EventLog" */
export type EventLog_Stddev_Order_By = {
  actionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "EventLog" */
export type EventLog_Stddev_Pop_Order_By = {
  actionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "EventLog" */
export type EventLog_Stddev_Samp_Order_By = {
  actionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
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
  actionId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "EventLog" */
export type EventLog_Sum_Order_By = {
  actionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<EventLog_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventLog_Set_Input>;
  where: EventLog_Bool_Exp;
};

/** order by var_pop() on columns of table "EventLog" */
export type EventLog_Var_Pop_Order_By = {
  actionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "EventLog" */
export type EventLog_Var_Samp_Order_By = {
  actionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "EventLog" */
export type EventLog_Variance_Order_By = {
  actionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<File_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<File_Max_Order_By>;
  min?: InputMaybe<File_Min_Order_By>;
  stddev?: InputMaybe<File_Stddev_Order_By>;
  stddev_pop?: InputMaybe<File_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<File_Stddev_Samp_Order_By>;
  sum?: InputMaybe<File_Sum_Order_By>;
  var_pop?: InputMaybe<File_Var_Pop_Order_By>;
  var_samp?: InputMaybe<File_Var_Samp_Order_By>;
  variance?: InputMaybe<File_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "File" */
export type File_Arr_Rel_Insert_Input = {
  data: Array<File_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<File_On_Conflict>;
};

/** order by avg() on columns of table "File" */
export type File_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Int_Comparison_Exp>;
  mimetype?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  varantName?: InputMaybe<String_Comparison_Exp>;
  variantKey?: InputMaybe<String_Comparison_Exp>;
  variantOfId?: InputMaybe<Int_Comparison_Exp>;
  variantValue?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "File" */
export enum File_Constraint {
  /** unique or primary key constraint on columns "id" */
  FILE_PKEY = 'File_pkey'
}

/** input type for incrementing numeric columns in table "File" */
export type File_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  variantOfId?: InputMaybe<Scalars['Int']>;
};

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
  id?: InputMaybe<Scalars['Int']>;
  mimetype?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  varantName?: InputMaybe<Scalars['String']>;
  variantKey?: InputMaybe<Scalars['String']>;
  variantOfId?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  id?: InputMaybe<Scalars['Int']>;
  mimetype?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  varantName?: InputMaybe<Scalars['String']>;
  variantKey?: InputMaybe<Scalars['String']>;
  variantOfId?: InputMaybe<Scalars['Int']>;
  variantValue?: InputMaybe<Scalars['String']>;
};

/** order by stddev() on columns of table "File" */
export type File_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "File" */
export type File_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "File" */
export type File_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Scalars['Int']>;
  mimetype?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  varantName?: InputMaybe<Scalars['String']>;
  variantKey?: InputMaybe<Scalars['String']>;
  variantOfId?: InputMaybe<Scalars['Int']>;
  variantValue?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "File" */
export type File_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<File_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<File_Set_Input>;
  where: File_Bool_Exp;
};

/** order by var_pop() on columns of table "File" */
export type File_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "File" */
export type File_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "File" */
export type File_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  variantOfId?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<MemberOnTeams_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MemberOnTeams_Max_Order_By>;
  min?: InputMaybe<MemberOnTeams_Min_Order_By>;
  stddev?: InputMaybe<MemberOnTeams_Stddev_Order_By>;
  stddev_pop?: InputMaybe<MemberOnTeams_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<MemberOnTeams_Stddev_Samp_Order_By>;
  sum?: InputMaybe<MemberOnTeams_Sum_Order_By>;
  var_pop?: InputMaybe<MemberOnTeams_Var_Pop_Order_By>;
  var_samp?: InputMaybe<MemberOnTeams_Var_Samp_Order_By>;
  variance?: InputMaybe<MemberOnTeams_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "MemberOnTeams" */
export type MemberOnTeams_Arr_Rel_Insert_Input = {
  data: Array<MemberOnTeams_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<MemberOnTeams_On_Conflict>;
};

/** order by avg() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Avg_Order_By = {
  userId?: InputMaybe<Order_By>;
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
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "MemberOnTeams" */
export enum MemberOnTeams_Constraint {
  /** unique or primary key constraint on columns "teamId", "userId" */
  MEMBERONTEAMS_PKEY = 'MemberOnTeams_pkey'
}

/** input type for incrementing numeric columns in table "MemberOnTeams" */
export type MemberOnTeams_Inc_Input = {
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "MemberOnTeams" */
export type MemberOnTeams_Insert_Input = {
  Team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  assignedAt?: InputMaybe<Scalars['timestamp']>;
  assignedBy?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
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
  userId: Scalars['Int'];
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
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Stddev_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Stddev_Pop_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Stddev_Samp_Order_By = {
  userId?: InputMaybe<Order_By>;
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
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Sum_Order_By = {
  userId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MemberOnTeams_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberOnTeams_Set_Input>;
  where: MemberOnTeams_Bool_Exp;
};

/** order by var_pop() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Var_Pop_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Var_Samp_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Variance_Order_By = {
  userId?: InputMaybe<Order_By>;
};

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
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint on columns "id" */
  ORGANIZATION_PKEY = 'Organization_pkey'
}

/** input type for incrementing numeric columns in table "Organization" */
export type Organization_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

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
  id?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  id?: InputMaybe<Scalars['Int']>;
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
  id?: InputMaybe<Scalars['Int']>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organization_Inc_Input>;
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
  avg?: InputMaybe<PermissionGroup_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<PermissionGroup_Max_Order_By>;
  min?: InputMaybe<PermissionGroup_Min_Order_By>;
  stddev?: InputMaybe<PermissionGroup_Stddev_Order_By>;
  stddev_pop?: InputMaybe<PermissionGroup_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<PermissionGroup_Stddev_Samp_Order_By>;
  sum?: InputMaybe<PermissionGroup_Sum_Order_By>;
  var_pop?: InputMaybe<PermissionGroup_Var_Pop_Order_By>;
  var_samp?: InputMaybe<PermissionGroup_Var_Samp_Order_By>;
  variance?: InputMaybe<PermissionGroup_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "PermissionGroup" */
export type PermissionGroup_Arr_Rel_Insert_Input = {
  data: Array<PermissionGroup_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<PermissionGroup_On_Conflict>;
};

/** order by avg() on columns of table "PermissionGroup" */
export type PermissionGroup_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "PermissionGroup" */
export enum PermissionGroup_Constraint {
  /** unique or primary key constraint on columns "id" */
  PERMISSIONGROUP_PKEY = 'PermissionGroup_pkey'
}

/** input type for incrementing numeric columns in table "PermissionGroup" */
export type PermissionGroup_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "PermissionGroup" */
export type PermissionGroup_Insert_Input = {
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Permissions?: InputMaybe<Permission_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "PermissionGroup" */
export type PermissionGroup_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "PermissionGroup" */
export type PermissionGroup_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "PermissionGroup" */
export type PermissionGroup_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by sum() on columns of table "PermissionGroup" */
export type PermissionGroup_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PermissionGroup_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PermissionGroup_Set_Input>;
  where: PermissionGroup_Bool_Exp;
};

/** order by var_pop() on columns of table "PermissionGroup" */
export type PermissionGroup_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "PermissionGroup" */
export type PermissionGroup_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "PermissionGroup" */
export type PermissionGroup_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<Permission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Permission_Max_Order_By>;
  min?: InputMaybe<Permission_Min_Order_By>;
  stddev?: InputMaybe<Permission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Permission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Permission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Permission_Sum_Order_By>;
  var_pop?: InputMaybe<Permission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Permission_Var_Samp_Order_By>;
  variance?: InputMaybe<Permission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Permission" */
export type Permission_Arr_Rel_Insert_Input = {
  data: Array<Permission_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};

/** order by avg() on columns of table "Permission" */
export type Permission_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Permission". All fields are combined with a logical 'AND'. */
export type Permission_Bool_Exp = {
  Organization?: InputMaybe<Organization_Bool_Exp>;
  PermissionGroup?: InputMaybe<PermissionGroup_Bool_Exp>;
  UserPermissions?: InputMaybe<UserPermission_Bool_Exp>;
  UserPermissions_aggregate?: InputMaybe<UserPermission_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Permission_Bool_Exp>>;
  _not?: InputMaybe<Permission_Bool_Exp>;
  _or?: InputMaybe<Array<Permission_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  permissionGroupId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Permission" */
export enum Permission_Constraint {
  /** unique or primary key constraint on columns "id" */
  PERMISSION_PKEY = 'Permission_pkey'
}

/** input type for incrementing numeric columns in table "Permission" */
export type Permission_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  permissionGroupId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Permission" */
export type Permission_Insert_Input = {
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  PermissionGroup?: InputMaybe<PermissionGroup_Obj_Rel_Insert_Input>;
  UserPermissions?: InputMaybe<UserPermission_Arr_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  permissionGroupId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Permission" */
export type Permission_Max_Order_By = {
  code?: InputMaybe<Order_By>;
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
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "Permission" */
export type Permission_Obj_Rel_Insert_Input = {
  data: Permission_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Permission_On_Conflict>;
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
  UserPermissions_aggregate?: InputMaybe<UserPermission_Aggregate_Order_By>;
  code?: InputMaybe<Order_By>;
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
  id: Scalars['Int'];
};

/** select columns of table "Permission" */
export enum Permission_Select_Column {
  /** column name */
  CODE = 'code',
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
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  permissionGroupId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Permission" */
export type Permission_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Permission" */
export type Permission_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Permission" */
export type Permission_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
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
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  permissionGroupId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by sum() on columns of table "Permission" */
export type Permission_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
};

/** update columns of table "Permission" */
export enum Permission_Update_Column {
  /** column name */
  CODE = 'code',
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Permission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Permission_Set_Input>;
  where: Permission_Bool_Exp;
};

/** order by var_pop() on columns of table "Permission" */
export type Permission_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Permission" */
export type Permission_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Permission" */
export type Permission_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  permissionGroupId?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<Post_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Max_Order_By>;
  min?: InputMaybe<Post_Min_Order_By>;
  stddev?: InputMaybe<Post_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** order by avg() on columns of table "Post" */
export type Post_Avg_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Post_Bool_Exp>>;
  _not?: InputMaybe<Post_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Bool_Exp>>;
  authorId?: InputMaybe<Int_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  published?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Post" */
export enum Post_Constraint {
  /** unique or primary key constraint on columns "id" */
  POST_PKEY = 'Post_pkey'
}

/** input type for incrementing numeric columns in table "Post" */
export type Post_Inc_Input = {
  authorId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Post" */
export type Post_Insert_Input = {
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  authorId?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  authorId?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Post" */
export type Post_Stddev_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Post" */
export type Post_Stddev_Pop_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Post" */
export type Post_Stddev_Samp_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  authorId?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by sum() on columns of table "Post" */
export type Post_Sum_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};

/** order by var_pop() on columns of table "Post" */
export type Post_Var_Pop_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Post" */
export type Post_Var_Samp_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Post" */
export type Post_Variance_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<Settings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Settings_Max_Order_By>;
  min?: InputMaybe<Settings_Min_Order_By>;
  stddev?: InputMaybe<Settings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Settings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Settings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Settings_Sum_Order_By>;
  var_pop?: InputMaybe<Settings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Settings_Var_Samp_Order_By>;
  variance?: InputMaybe<Settings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Settings" */
export type Settings_Arr_Rel_Insert_Input = {
  data: Array<Settings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Settings_On_Conflict>;
};

/** order by avg() on columns of table "Settings" */
export type Settings_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Settings". All fields are combined with a logical 'AND'. */
export type Settings_Bool_Exp = {
  Organization?: InputMaybe<Organization_Bool_Exp>;
  _and?: InputMaybe<Array<Settings_Bool_Exp>>;
  _not?: InputMaybe<Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Settings_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Settings" */
export enum Settings_Constraint {
  /** unique or primary key constraint on columns "id" */
  SETTINGS_PKEY = 'Settings_pkey'
}

/** input type for incrementing numeric columns in table "Settings" */
export type Settings_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Settings" */
export type Settings_Insert_Input = {
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['String']>;
};

/** order by stddev() on columns of table "Settings" */
export type Settings_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Settings" */
export type Settings_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Settings" */
export type Settings_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "Settings" */
export type Settings_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Settings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Settings_Set_Input>;
  where: Settings_Bool_Exp;
};

/** order by var_pop() on columns of table "Settings" */
export type Settings_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Settings" */
export type Settings_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Settings" */
export type Settings_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

export type SignupInputbe = {
  email: Scalars['String'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['Int'];
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
  avg?: InputMaybe<TaskDefinition_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TaskDefinition_Max_Order_By>;
  min?: InputMaybe<TaskDefinition_Min_Order_By>;
  stddev?: InputMaybe<TaskDefinition_Stddev_Order_By>;
  stddev_pop?: InputMaybe<TaskDefinition_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<TaskDefinition_Stddev_Samp_Order_By>;
  sum?: InputMaybe<TaskDefinition_Sum_Order_By>;
  var_pop?: InputMaybe<TaskDefinition_Var_Pop_Order_By>;
  var_samp?: InputMaybe<TaskDefinition_Var_Samp_Order_By>;
  variance?: InputMaybe<TaskDefinition_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "TaskDefinition" */
export type TaskDefinition_Arr_Rel_Insert_Input = {
  data: Array<TaskDefinition_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TaskDefinition_On_Conflict>;
};

/** order by avg() on columns of table "TaskDefinition" */
export type TaskDefinition_Avg_Order_By = {
  actvityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
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
  actvityId?: InputMaybe<Int_Comparison_Exp>;
  config?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  parentId?: InputMaybe<Int_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  workflowId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "TaskDefinition" */
export enum TaskDefinition_Constraint {
  /** unique or primary key constraint on columns "id" */
  TASKDEFINITION_PKEY = 'TaskDefinition_pkey'
}

/** input type for incrementing numeric columns in table "TaskDefinition" */
export type TaskDefinition_Inc_Input = {
  actvityId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  workflowId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "TaskDefinition" */
export type TaskDefinition_Insert_Input = {
  Activity?: InputMaybe<Activity_Obj_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  TaskDefinition?: InputMaybe<TaskDefinition_Obj_Rel_Insert_Input>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Arr_Rel_Insert_Input>;
  Workflow?: InputMaybe<Workflow_Obj_Rel_Insert_Input>;
  actvityId?: InputMaybe<Scalars['Int']>;
  config?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  actvityId?: InputMaybe<Scalars['Int']>;
  config?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "TaskDefinition" */
export type TaskDefinition_Stddev_Order_By = {
  actvityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "TaskDefinition" */
export type TaskDefinition_Stddev_Pop_Order_By = {
  actvityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "TaskDefinition" */
export type TaskDefinition_Stddev_Samp_Order_By = {
  actvityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
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
  actvityId?: InputMaybe<Scalars['Int']>;
  config?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  workflowId?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "TaskDefinition" */
export type TaskDefinition_Sum_Order_By = {
  actvityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TaskDefinition_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TaskDefinition_Set_Input>;
  where: TaskDefinition_Bool_Exp;
};

/** order by var_pop() on columns of table "TaskDefinition" */
export type TaskDefinition_Var_Pop_Order_By = {
  actvityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "TaskDefinition" */
export type TaskDefinition_Var_Samp_Order_By = {
  actvityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "TaskDefinition" */
export type TaskDefinition_Variance_Order_By = {
  actvityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  workflowId?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<Task_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Task_Max_Order_By>;
  min?: InputMaybe<Task_Min_Order_By>;
  stddev?: InputMaybe<Task_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Task_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Task_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Task_Sum_Order_By>;
  var_pop?: InputMaybe<Task_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Task_Var_Samp_Order_By>;
  variance?: InputMaybe<Task_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Task" */
export type Task_Arr_Rel_Insert_Input = {
  data: Array<Task_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** order by avg() on columns of table "Task" */
export type Task_Avg_Order_By = {
  organizationId?: InputMaybe<Order_By>;
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
  organizationId?: InputMaybe<Int_Comparison_Exp>;
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

/** input type for incrementing numeric columns in table "Task" */
export type Task_Inc_Input = {
  organizationId?: InputMaybe<Scalars['Int']>;
};

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
  organizationId?: InputMaybe<Scalars['Int']>;
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
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['TaskPriority']>;
  projectId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['TaskStatus']>;
  teamId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Task" */
export type Task_Stddev_Order_By = {
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Task" */
export type Task_Stddev_Pop_Order_By = {
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Task" */
export type Task_Stddev_Samp_Order_By = {
  organizationId?: InputMaybe<Order_By>;
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
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['TaskPriority']>;
  projectId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['TaskStatus']>;
  teamId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by sum() on columns of table "Task" */
export type Task_Sum_Order_By = {
  organizationId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Task_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Task_Set_Input>;
  where: Task_Bool_Exp;
};

/** order by var_pop() on columns of table "Task" */
export type Task_Var_Pop_Order_By = {
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Task" */
export type Task_Var_Samp_Order_By = {
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Task" */
export type Task_Variance_Order_By = {
  organizationId?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<Team_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Team_Max_Order_By>;
  min?: InputMaybe<Team_Min_Order_By>;
  stddev?: InputMaybe<Team_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Team_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Team_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Team_Sum_Order_By>;
  var_pop?: InputMaybe<Team_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Team_Var_Samp_Order_By>;
  variance?: InputMaybe<Team_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Team" */
export type Team_Arr_Rel_Insert_Input = {
  data: Array<Team_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Team_On_Conflict>;
};

/** order by avg() on columns of table "Team" */
export type Team_Avg_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  creatorId?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  managerId?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  userByManagerid?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "Team" */
export enum Team_Constraint {
  /** unique or primary key constraint on columns "id" */
  TEAM_PKEY = 'Team_pkey'
}

/** input type for incrementing numeric columns in table "Team" */
export type Team_Inc_Input = {
  creatorId?: InputMaybe<Scalars['Int']>;
  managerId?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Team" */
export type Team_Insert_Input = {
  MemberOnTeams?: InputMaybe<MemberOnTeams_Arr_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  managerId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
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
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  managerId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Team" */
export type Team_Stddev_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Team" */
export type Team_Stddev_Pop_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Team" */
export type Team_Stddev_Samp_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  managerId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by sum() on columns of table "Team" */
export type Team_Sum_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Team_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};

/** order by var_pop() on columns of table "Team" */
export type Team_Var_Pop_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Team" */
export type Team_Var_Samp_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Team" */
export type Team_Variance_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<Trigger_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trigger_Max_Order_By>;
  min?: InputMaybe<Trigger_Min_Order_By>;
  stddev?: InputMaybe<Trigger_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Trigger_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Trigger_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Trigger_Sum_Order_By>;
  var_pop?: InputMaybe<Trigger_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Trigger_Var_Samp_Order_By>;
  variance?: InputMaybe<Trigger_Variance_Order_By>;
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

/** order by avg() on columns of table "Trigger" */
export type Trigger_Avg_Order_By = {
  activityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Trigger". All fields are combined with a logical 'AND'. */
export type Trigger_Bool_Exp = {
  Activity?: InputMaybe<Activity_Bool_Exp>;
  _and?: InputMaybe<Array<Trigger_Bool_Exp>>;
  _not?: InputMaybe<Trigger_Bool_Exp>;
  _or?: InputMaybe<Array<Trigger_Bool_Exp>>;
  activityId?: InputMaybe<Int_Comparison_Exp>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
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

/** input type for incrementing numeric columns in table "Trigger" */
export type Trigger_Inc_Input = {
  activityId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Trigger" */
export type Trigger_Insert_Input = {
  Activity?: InputMaybe<Activity_Obj_Rel_Insert_Input>;
  activityId?: InputMaybe<Scalars['Int']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  activityId?: InputMaybe<Scalars['Int']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['TriggerType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Trigger" */
export type Trigger_Stddev_Order_By = {
  activityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Trigger" */
export type Trigger_Stddev_Pop_Order_By = {
  activityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Trigger" */
export type Trigger_Stddev_Samp_Order_By = {
  activityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  activityId?: InputMaybe<Scalars['Int']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['TriggerType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by sum() on columns of table "Trigger" */
export type Trigger_Sum_Order_By = {
  activityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Trigger_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Trigger_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Trigger_Set_Input>;
  where: Trigger_Bool_Exp;
};

/** order by var_pop() on columns of table "Trigger" */
export type Trigger_Var_Pop_Order_By = {
  activityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Trigger" */
export type Trigger_Var_Samp_Order_By = {
  activityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Trigger" */
export type Trigger_Variance_Order_By = {
  activityId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type UpdateUserInputbe = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type UserPermission_Aggregate_Bool_Exp = {
  count?: InputMaybe<UserPermission_Aggregate_Bool_Exp_Count>;
};

export type UserPermission_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<UserPermission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<UserPermission_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "UserPermission" */
export type UserPermission_Aggregate_Order_By = {
  avg?: InputMaybe<UserPermission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserPermission_Max_Order_By>;
  min?: InputMaybe<UserPermission_Min_Order_By>;
  stddev?: InputMaybe<UserPermission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<UserPermission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<UserPermission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<UserPermission_Sum_Order_By>;
  var_pop?: InputMaybe<UserPermission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<UserPermission_Var_Samp_Order_By>;
  variance?: InputMaybe<UserPermission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "UserPermission" */
export type UserPermission_Arr_Rel_Insert_Input = {
  data: Array<UserPermission_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserPermission_On_Conflict>;
};

/** order by avg() on columns of table "UserPermission" */
export type UserPermission_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "UserPermission". All fields are combined with a logical 'AND'. */
export type UserPermission_Bool_Exp = {
  Permission?: InputMaybe<Permission_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<UserPermission_Bool_Exp>>;
  _not?: InputMaybe<UserPermission_Bool_Exp>;
  _or?: InputMaybe<Array<UserPermission_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  permissionId?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "UserPermission" */
export enum UserPermission_Constraint {
  /** unique or primary key constraint on columns "id" */
  USERPERMISSION_PKEY = 'UserPermission_pkey'
}

/** input type for incrementing numeric columns in table "UserPermission" */
export type UserPermission_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  permissionId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "UserPermission" */
export type UserPermission_Insert_Input = {
  Permission?: InputMaybe<Permission_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  permissionId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by max() on columns of table "UserPermission" */
export type UserPermission_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "UserPermission" */
export type UserPermission_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "UserPermission" */
export type UserPermission_On_Conflict = {
  constraint: UserPermission_Constraint;
  update_columns?: Array<UserPermission_Update_Column>;
  where?: InputMaybe<UserPermission_Bool_Exp>;
};

/** Ordering options when selecting data from "UserPermission". */
export type UserPermission_Order_By = {
  Permission?: InputMaybe<Permission_Order_By>;
  User?: InputMaybe<User_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: UserPermission */
export type UserPermission_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "UserPermission" */
export enum UserPermission_Select_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  PERMISSIONID = 'permissionId',
  /** column name */
  USERID = 'userId'
}

/** input type for updating data in table "UserPermission" */
export type UserPermission_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  permissionId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "UserPermission" */
export type UserPermission_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "UserPermission" */
export type UserPermission_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "UserPermission" */
export type UserPermission_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "UserPermission" */
export type UserPermission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserPermission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserPermission_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  permissionId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "UserPermission" */
export type UserPermission_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "UserPermission" */
export enum UserPermission_Update_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  PERMISSIONID = 'permissionId',
  /** column name */
  USERID = 'userId'
}

export type UserPermission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserPermission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserPermission_Set_Input>;
  where: UserPermission_Bool_Exp;
};

/** order by var_pop() on columns of table "UserPermission" */
export type UserPermission_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "UserPermission" */
export type UserPermission_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "UserPermission" */
export type UserPermission_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  permissionId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
  stddev?: InputMaybe<User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Sum_Order_By>;
  var_pop?: InputMaybe<User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** order by avg() on columns of table "User" */
export type User_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  UserPermissions?: InputMaybe<UserPermission_Bool_Exp>;
  UserPermissions_aggregate?: InputMaybe<UserPermission_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
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

/** input type for incrementing numeric columns in table "User" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  EventLogs?: InputMaybe<EventLog_Arr_Rel_Insert_Input>;
  MemberOnTeams?: InputMaybe<MemberOnTeams_Arr_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Posts?: InputMaybe<Post_Arr_Rel_Insert_Input>;
  Teams?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  UserPermissions?: InputMaybe<UserPermission_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastname?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
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
  UserPermissions_aggregate?: InputMaybe<UserPermission_Aggregate_Order_By>;
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
  id: Scalars['Int'];
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
  id?: InputMaybe<Scalars['Int']>;
  lastname?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "User" */
export type User_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "User" */
export type User_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "User" */
export type User_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Scalars['Int']>;
  lastname?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by sum() on columns of table "User" */
export type User_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** order by var_pop() on columns of table "User" */
export type User_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "User" */
export type User_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "User" */
export type User_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  avg?: InputMaybe<Workflow_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workflow_Max_Order_By>;
  min?: InputMaybe<Workflow_Min_Order_By>;
  stddev?: InputMaybe<Workflow_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Workflow_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Workflow_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Workflow_Sum_Order_By>;
  var_pop?: InputMaybe<Workflow_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Workflow_Var_Samp_Order_By>;
  variance?: InputMaybe<Workflow_Variance_Order_By>;
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

/** order by avg() on columns of table "Workflow" */
export type Workflow_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
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

/** input type for incrementing numeric columns in table "Workflow" */
export type Workflow_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Workflow" */
export type Workflow_Insert_Input = {
  Activities?: InputMaybe<Activity_Arr_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Arr_Rel_Insert_Input>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Workflow" */
export type Workflow_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Workflow" */
export type Workflow_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Workflow" */
export type Workflow_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by sum() on columns of table "Workflow" */
export type Workflow_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workflow_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Workflow_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workflow_Set_Input>;
  where: Workflow_Bool_Exp;
};

/** order by var_pop() on columns of table "Workflow" */
export type Workflow_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Workflow" */
export type Workflow_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Workflow" */
export type Workflow_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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

export type LoginMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type LoginMutation = { __typename: 'mutation_root', login: { __typename: 'Authbe', accessToken: any, user: { __typename: 'Userbe', email: string, firstname: string | null, role: Rolebe, permissions: Array<{ __typename: 'Permissionbe', code: string }> | null } } };

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename: 'query_root', hello: string };
