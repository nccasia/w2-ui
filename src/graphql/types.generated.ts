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
  ActivityType: any;
  FileType: any;
  JWT: any;
  Role: any;
  TaskBoardType: any;
  TaskBoardViewType: any;
  TaskPriority: any;
  TriggerStatus: any;
  TriggerType: any;
  Visibility: any;
  json: any;
  jsonb: any;
  timestamp: any;
  timestamptz: any;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ActivityDefinition_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  initialValue?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "ActivityDefinition". All fields are combined with a logical 'AND'. */
export type ActivityDefinition_Bool_Exp = {
  TaskDefinitionActivityDefinitions?: InputMaybe<TaskDefinitionActivityDefinition_Bool_Exp>;
  TaskDefinitionActivityDefinitions_aggregate?: InputMaybe<TaskDefinitionActivityDefinition_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<ActivityDefinition_Bool_Exp>>;
  _not?: InputMaybe<ActivityDefinition_Bool_Exp>;
  _or?: InputMaybe<Array<ActivityDefinition_Bool_Exp>>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  initialValue?: InputMaybe<Jsonb_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  synchronous?: InputMaybe<Boolean_Comparison_Exp>;
  type?: InputMaybe<ActivityType_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "ActivityDefinition" */
export enum ActivityDefinition_Constraint {
  /** unique or primary key constraint on columns "key" */
  ACTIVITYDEFINITION_KEY_KEY = 'ActivityDefinition_key_key',
  /** unique or primary key constraint on columns "id" */
  ACTIVITYDEFINITION_PKEY = 'ActivityDefinition_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ActivityDefinition_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']>>;
  initialValue?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ActivityDefinition_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']>;
  initialValue?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ActivityDefinition_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']>;
  initialValue?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "ActivityDefinition" */
export type ActivityDefinition_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ActivityDefinition" */
export type ActivityDefinition_Insert_Input = {
  TaskDefinitionActivityDefinitions?: InputMaybe<TaskDefinitionActivityDefinition_Arr_Rel_Insert_Input>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  initialValue?: InputMaybe<Scalars['jsonb']>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  synchronous?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['ActivityType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** input type for inserting object relation for remote table "ActivityDefinition" */
export type ActivityDefinition_Obj_Rel_Insert_Input = {
  data: ActivityDefinition_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<ActivityDefinition_On_Conflict>;
};

/** on_conflict condition type for table "ActivityDefinition" */
export type ActivityDefinition_On_Conflict = {
  constraint: ActivityDefinition_Constraint;
  update_columns?: Array<ActivityDefinition_Update_Column>;
  where?: InputMaybe<ActivityDefinition_Bool_Exp>;
};

/** Ordering options when selecting data from "ActivityDefinition". */
export type ActivityDefinition_Order_By = {
  TaskDefinitionActivityDefinitions_aggregate?: InputMaybe<TaskDefinitionActivityDefinition_Aggregate_Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initialValue?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  synchronous?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ActivityDefinition */
export type ActivityDefinition_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ActivityDefinition_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  initialValue?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "ActivityDefinition" */
export enum ActivityDefinition_Select_Column {
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  INITIALVALUE = 'initialValue',
  /** column name */
  KEY = 'key',
  /** column name */
  NAME = 'name',
  /** column name */
  SYNCHRONOUS = 'synchronous',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "ActivityDefinition" */
export type ActivityDefinition_Set_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  initialValue?: InputMaybe<Scalars['jsonb']>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  synchronous?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['ActivityType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "ActivityDefinition" */
export enum ActivityDefinition_Update_Column {
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  INITIALVALUE = 'initialValue',
  /** column name */
  KEY = 'key',
  /** column name */
  NAME = 'name',
  /** column name */
  SYNCHRONOUS = 'synchronous',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type ActivityDefinition_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<ActivityDefinition_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<ActivityDefinition_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<ActivityDefinition_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<ActivityDefinition_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ActivityDefinition_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<ActivityDefinition_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ActivityDefinition_Set_Input>;
  /** filter the rows which have to be updated */
  where: ActivityDefinition_Bool_Exp;
};

/** Boolean expression to compare columns of type "ActivityType". All fields are combined with logical 'AND'. */
export type ActivityType_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['ActivityType']>;
  _gt?: InputMaybe<Scalars['ActivityType']>;
  _gte?: InputMaybe<Scalars['ActivityType']>;
  _in?: InputMaybe<Array<Scalars['ActivityType']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['ActivityType']>;
  _lte?: InputMaybe<Scalars['ActivityType']>;
  _neq?: InputMaybe<Scalars['ActivityType']>;
  _nin?: InputMaybe<Array<Scalars['ActivityType']>>;
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
  taskId?: InputMaybe<Order_By>;
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
  taskId?: InputMaybe<Int_Comparison_Exp>;
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
  taskId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Comment" */
export type Comment_Insert_Input = {
  Task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
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
  taskId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Comment" */
export type Comment_Stddev_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Comment" */
export type Comment_Stddev_Pop_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Comment" */
export type Comment_Stddev_Samp_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "Comment" */
export type Comment_Sum_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
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
  /** filter the rows which have to be updated */
  where: Comment_Bool_Exp;
};

/** order by var_pop() on columns of table "Comment" */
export type Comment_Var_Pop_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Comment" */
export type Comment_Var_Samp_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Comment" */
export type Comment_Variance_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type EventLog_Append_Input = {
  context?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "EventLog" */
export type EventLog_Arr_Rel_Insert_Input = {
  data: Array<EventLog_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<EventLog_On_Conflict>;
};

/** order by avg() on columns of table "EventLog" */
export type EventLog_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "EventLog". All fields are combined with a logical 'AND'. */
export type EventLog_Bool_Exp = {
  Organization?: InputMaybe<Organization_Bool_Exp>;
  Task?: InputMaybe<Task_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<EventLog_Bool_Exp>>;
  _not?: InputMaybe<EventLog_Bool_Exp>;
  _or?: InputMaybe<Array<EventLog_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  context?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  intent?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  taskId?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "EventLog" */
export enum EventLog_Constraint {
  /** unique or primary key constraint on columns "id" */
  EVENTLOG_PKEY = 'EventLog_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type EventLog_Delete_At_Path_Input = {
  context?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type EventLog_Delete_Elem_Input = {
  context?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type EventLog_Delete_Key_Input = {
  context?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "EventLog" */
export type EventLog_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "EventLog" */
export type EventLog_Insert_Input = {
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  action?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  context?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  intent?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by max() on columns of table "EventLog" */
export type EventLog_Max_Order_By = {
  action?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intent?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "EventLog" */
export type EventLog_Min_Order_By = {
  action?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intent?: InputMaybe<Order_By>;
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
  Organization?: InputMaybe<Organization_Order_By>;
  Task?: InputMaybe<Task_Order_By>;
  User?: InputMaybe<User_Order_By>;
  action?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  context?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intent?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: EventLog */
export type EventLog_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type EventLog_Prepend_Input = {
  context?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "EventLog" */
export enum EventLog_Select_Column {
  /** column name */
  ACTION = 'action',
  /** column name */
  CONTENT = 'content',
  /** column name */
  CONTEXT = 'context',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DOMAIN = 'domain',
  /** column name */
  ID = 'id',
  /** column name */
  INTENT = 'intent',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  TASKID = 'taskId',
  /** column name */
  USERID = 'userId'
}

/** input type for updating data in table "EventLog" */
export type EventLog_Set_Input = {
  action?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  context?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  intent?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "EventLog" */
export type EventLog_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "EventLog" */
export type EventLog_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "EventLog" */
export type EventLog_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "EventLog" */
export type EventLog_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "EventLog" */
export enum EventLog_Update_Column {
  /** column name */
  ACTION = 'action',
  /** column name */
  CONTENT = 'content',
  /** column name */
  CONTEXT = 'context',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DOMAIN = 'domain',
  /** column name */
  ID = 'id',
  /** column name */
  INTENT = 'intent',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  TASKID = 'taskId',
  /** column name */
  USERID = 'userId'
}

export type EventLog_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<EventLog_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<EventLog_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<EventLog_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<EventLog_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<EventLog_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<EventLog_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventLog_Set_Input>;
  /** filter the rows which have to be updated */
  where: EventLog_Bool_Exp;
};

/** order by var_pop() on columns of table "EventLog" */
export type EventLog_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "EventLog" */
export type EventLog_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "EventLog" */
export type EventLog_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
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
  Users?: InputMaybe<User_Bool_Exp>;
  Users_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
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
  Users?: InputMaybe<User_Arr_Rel_Insert_Input>;
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
  Users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
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
  /** filter the rows which have to be updated */
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

export type FormTriggerInput = {
  formId?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
  value: Scalars['json'];
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Form_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  displayConfig?: InputMaybe<Scalars['jsonb']>;
  schema?: InputMaybe<Scalars['jsonb']>;
  serializerConfig?: InputMaybe<Scalars['jsonb']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
  validationConfig?: InputMaybe<Scalars['jsonb']>;
  values?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "Form". All fields are combined with a logical 'AND'. */
export type Form_Bool_Exp = {
  TaskDefinitions?: InputMaybe<TaskDefinition_Bool_Exp>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Bool_Exp>;
  Tasks?: InputMaybe<Task_Bool_Exp>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Form_Bool_Exp>>;
  _not?: InputMaybe<Form_Bool_Exp>;
  _or?: InputMaybe<Array<Form_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  displayConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  displayTemplate?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  schema?: InputMaybe<Jsonb_Comparison_Exp>;
  serializerConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  triggerConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  validationConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  values?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "Form" */
export enum Form_Constraint {
  /** unique or primary key constraint on columns "id" */
  FORM_PKEY = 'Form_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Form_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']>>;
  displayConfig?: InputMaybe<Array<Scalars['String']>>;
  schema?: InputMaybe<Array<Scalars['String']>>;
  serializerConfig?: InputMaybe<Array<Scalars['String']>>;
  triggerConfig?: InputMaybe<Array<Scalars['String']>>;
  validationConfig?: InputMaybe<Array<Scalars['String']>>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Form_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']>;
  displayConfig?: InputMaybe<Scalars['Int']>;
  schema?: InputMaybe<Scalars['Int']>;
  serializerConfig?: InputMaybe<Scalars['Int']>;
  triggerConfig?: InputMaybe<Scalars['Int']>;
  validationConfig?: InputMaybe<Scalars['Int']>;
  values?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Form_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']>;
  displayConfig?: InputMaybe<Scalars['String']>;
  schema?: InputMaybe<Scalars['String']>;
  serializerConfig?: InputMaybe<Scalars['String']>;
  triggerConfig?: InputMaybe<Scalars['String']>;
  validationConfig?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "Form" */
export type Form_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Form" */
export type Form_Insert_Input = {
  TaskDefinitions?: InputMaybe<TaskDefinition_Arr_Rel_Insert_Input>;
  Tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  displayConfig?: InputMaybe<Scalars['jsonb']>;
  displayTemplate?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  schema?: InputMaybe<Scalars['jsonb']>;
  serializerConfig?: InputMaybe<Scalars['jsonb']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  validationConfig?: InputMaybe<Scalars['jsonb']>;
  values?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting object relation for remote table "Form" */
export type Form_Obj_Rel_Insert_Input = {
  data: Form_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Form_On_Conflict>;
};

/** on_conflict condition type for table "Form" */
export type Form_On_Conflict = {
  constraint: Form_Constraint;
  update_columns?: Array<Form_Update_Column>;
  where?: InputMaybe<Form_Bool_Exp>;
};

/** Ordering options when selecting data from "Form". */
export type Form_Order_By = {
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Order_By>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  code?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  displayConfig?: InputMaybe<Order_By>;
  displayTemplate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  schema?: InputMaybe<Order_By>;
  serializerConfig?: InputMaybe<Order_By>;
  triggerConfig?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  validationConfig?: InputMaybe<Order_By>;
  values?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Form */
export type Form_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Form_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  displayConfig?: InputMaybe<Scalars['jsonb']>;
  schema?: InputMaybe<Scalars['jsonb']>;
  serializerConfig?: InputMaybe<Scalars['jsonb']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
  validationConfig?: InputMaybe<Scalars['jsonb']>;
  values?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "Form" */
export enum Form_Select_Column {
  /** column name */
  CODE = 'code',
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  DISPLAYCONFIG = 'displayConfig',
  /** column name */
  DISPLAYTEMPLATE = 'displayTemplate',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  SCHEMA = 'schema',
  /** column name */
  SERIALIZERCONFIG = 'serializerConfig',
  /** column name */
  TRIGGERCONFIG = 'triggerConfig',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALIDATIONCONFIG = 'validationConfig',
  /** column name */
  VALUES = 'values'
}

/** input type for updating data in table "Form" */
export type Form_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  displayConfig?: InputMaybe<Scalars['jsonb']>;
  displayTemplate?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  schema?: InputMaybe<Scalars['jsonb']>;
  serializerConfig?: InputMaybe<Scalars['jsonb']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  validationConfig?: InputMaybe<Scalars['jsonb']>;
  values?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "Form" */
export enum Form_Update_Column {
  /** column name */
  CODE = 'code',
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  DISPLAYCONFIG = 'displayConfig',
  /** column name */
  DISPLAYTEMPLATE = 'displayTemplate',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  SCHEMA = 'schema',
  /** column name */
  SERIALIZERCONFIG = 'serializerConfig',
  /** column name */
  TRIGGERCONFIG = 'triggerConfig',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALIDATIONCONFIG = 'validationConfig',
  /** column name */
  VALUES = 'values'
}

export type Form_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Form_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Form_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Form_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Form_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Form_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Form_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Form_Set_Input>;
  /** filter the rows which have to be updated */
  where: Form_Bool_Exp;
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

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MemberOnProjects_Aggregate_Bool_Exp = {
  count?: InputMaybe<MemberOnProjects_Aggregate_Bool_Exp_Count>;
};

export type MemberOnProjects_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<MemberOnProjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<MemberOnProjects_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "MemberOnProjects" */
export type MemberOnProjects_Aggregate_Order_By = {
  avg?: InputMaybe<MemberOnProjects_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<MemberOnProjects_Max_Order_By>;
  min?: InputMaybe<MemberOnProjects_Min_Order_By>;
  stddev?: InputMaybe<MemberOnProjects_Stddev_Order_By>;
  stddev_pop?: InputMaybe<MemberOnProjects_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<MemberOnProjects_Stddev_Samp_Order_By>;
  sum?: InputMaybe<MemberOnProjects_Sum_Order_By>;
  var_pop?: InputMaybe<MemberOnProjects_Var_Pop_Order_By>;
  var_samp?: InputMaybe<MemberOnProjects_Var_Samp_Order_By>;
  variance?: InputMaybe<MemberOnProjects_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "MemberOnProjects" */
export type MemberOnProjects_Arr_Rel_Insert_Input = {
  data: Array<MemberOnProjects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<MemberOnProjects_On_Conflict>;
};

/** order by avg() on columns of table "MemberOnProjects" */
export type MemberOnProjects_Avg_Order_By = {
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "MemberOnProjects". All fields are combined with a logical 'AND'. */
export type MemberOnProjects_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<MemberOnProjects_Bool_Exp>>;
  _not?: InputMaybe<MemberOnProjects_Bool_Exp>;
  _or?: InputMaybe<Array<MemberOnProjects_Bool_Exp>>;
  assignedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  assignedBy?: InputMaybe<String_Comparison_Exp>;
  projectId?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "MemberOnProjects" */
export enum MemberOnProjects_Constraint {
  /** unique or primary key constraint on columns "projectId", "userId" */
  MEMBERONPROJECTS_PKEY = 'MemberOnProjects_pkey'
}

/** input type for incrementing numeric columns in table "MemberOnProjects" */
export type MemberOnProjects_Inc_Input = {
  projectId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "MemberOnProjects" */
export type MemberOnProjects_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  assignedAt?: InputMaybe<Scalars['timestamp']>;
  assignedBy?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by max() on columns of table "MemberOnProjects" */
export type MemberOnProjects_Max_Order_By = {
  assignedAt?: InputMaybe<Order_By>;
  assignedBy?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "MemberOnProjects" */
export type MemberOnProjects_Min_Order_By = {
  assignedAt?: InputMaybe<Order_By>;
  assignedBy?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "MemberOnProjects" */
export type MemberOnProjects_On_Conflict = {
  constraint: MemberOnProjects_Constraint;
  update_columns?: Array<MemberOnProjects_Update_Column>;
  where?: InputMaybe<MemberOnProjects_Bool_Exp>;
};

/** Ordering options when selecting data from "MemberOnProjects". */
export type MemberOnProjects_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  User?: InputMaybe<User_Order_By>;
  assignedAt?: InputMaybe<Order_By>;
  assignedBy?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: MemberOnProjects */
export type MemberOnProjects_Pk_Columns_Input = {
  projectId: Scalars['Int'];
  userId: Scalars['Int'];
};

/** select columns of table "MemberOnProjects" */
export enum MemberOnProjects_Select_Column {
  /** column name */
  ASSIGNEDAT = 'assignedAt',
  /** column name */
  ASSIGNEDBY = 'assignedBy',
  /** column name */
  PROJECTID = 'projectId',
  /** column name */
  USERID = 'userId'
}

/** input type for updating data in table "MemberOnProjects" */
export type MemberOnProjects_Set_Input = {
  assignedAt?: InputMaybe<Scalars['timestamp']>;
  assignedBy?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "MemberOnProjects" */
export type MemberOnProjects_Stddev_Order_By = {
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "MemberOnProjects" */
export type MemberOnProjects_Stddev_Pop_Order_By = {
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "MemberOnProjects" */
export type MemberOnProjects_Stddev_Samp_Order_By = {
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "MemberOnProjects" */
export type MemberOnProjects_Sum_Order_By = {
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "MemberOnProjects" */
export enum MemberOnProjects_Update_Column {
  /** column name */
  ASSIGNEDAT = 'assignedAt',
  /** column name */
  ASSIGNEDBY = 'assignedBy',
  /** column name */
  PROJECTID = 'projectId',
  /** column name */
  USERID = 'userId'
}

export type MemberOnProjects_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MemberOnProjects_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberOnProjects_Set_Input>;
  /** filter the rows which have to be updated */
  where: MemberOnProjects_Bool_Exp;
};

/** order by var_pop() on columns of table "MemberOnProjects" */
export type MemberOnProjects_Var_Pop_Order_By = {
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "MemberOnProjects" */
export type MemberOnProjects_Var_Samp_Order_By = {
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "MemberOnProjects" */
export type MemberOnProjects_Variance_Order_By = {
  projectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
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
  teamId?: InputMaybe<Order_By>;
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
  teamId?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "MemberOnTeams" */
export enum MemberOnTeams_Constraint {
  /** unique or primary key constraint on columns "teamId", "userId" */
  MEMBERONTEAMS_PKEY = 'MemberOnTeams_pkey'
}

/** input type for incrementing numeric columns in table "MemberOnTeams" */
export type MemberOnTeams_Inc_Input = {
  teamId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "MemberOnTeams" */
export type MemberOnTeams_Insert_Input = {
  Team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  assignedAt?: InputMaybe<Scalars['timestamp']>;
  assignedBy?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['Int']>;
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
  teamId: Scalars['Int'];
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
  teamId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** order by stddev() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Stddev_Order_By = {
  teamId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Stddev_Pop_Order_By = {
  teamId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Stddev_Samp_Order_By = {
  teamId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Sum_Order_By = {
  teamId?: InputMaybe<Order_By>;
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
  /** filter the rows which have to be updated */
  where: MemberOnTeams_Bool_Exp;
};

/** order by var_pop() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Var_Pop_Order_By = {
  teamId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Var_Samp_Order_By = {
  teamId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "MemberOnTeams" */
export type MemberOnTeams_Variance_Order_By = {
  teamId?: InputMaybe<Order_By>;
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
  Projects?: InputMaybe<Project_Bool_Exp>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Bool_Exp>;
  Resources?: InputMaybe<Resource_Bool_Exp>;
  Resources_aggregate?: InputMaybe<Resource_Aggregate_Bool_Exp>;
  Settings?: InputMaybe<Settings_Bool_Exp>;
  Settings_aggregate?: InputMaybe<Settings_Aggregate_Bool_Exp>;
  TaskBoards?: InputMaybe<TaskBoard_Bool_Exp>;
  TaskBoards_aggregate?: InputMaybe<TaskBoard_Aggregate_Bool_Exp>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Bool_Exp>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Bool_Exp>;
  Tasks?: InputMaybe<Task_Bool_Exp>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  Teams?: InputMaybe<Team_Bool_Exp>;
  Teams_aggregate?: InputMaybe<Team_Aggregate_Bool_Exp>;
  Users?: InputMaybe<User_Bool_Exp>;
  Users_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
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
  Projects?: InputMaybe<Project_Arr_Rel_Insert_Input>;
  Resources?: InputMaybe<Resource_Arr_Rel_Insert_Input>;
  Settings?: InputMaybe<Settings_Arr_Rel_Insert_Input>;
  TaskBoards?: InputMaybe<TaskBoard_Arr_Rel_Insert_Input>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Arr_Rel_Insert_Input>;
  Tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  Teams?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  Users?: InputMaybe<User_Arr_Rel_Insert_Input>;
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
  Projects_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  Resources_aggregate?: InputMaybe<Resource_Aggregate_Order_By>;
  Settings_aggregate?: InputMaybe<Settings_Aggregate_Order_By>;
  TaskBoards_aggregate?: InputMaybe<TaskBoard_Aggregate_Order_By>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Order_By>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  Teams_aggregate?: InputMaybe<Team_Aggregate_Order_By>;
  Users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
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
  /** filter the rows which have to be updated */
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
  /** filter the rows which have to be updated */
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
  /** filter the rows which have to be updated */
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
  /** filter the rows which have to be updated */
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

export type ProjectSettings_Aggregate_Bool_Exp = {
  count?: InputMaybe<ProjectSettings_Aggregate_Bool_Exp_Count>;
};

export type ProjectSettings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ProjectSettings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ProjectSettings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "ProjectSettings" */
export type ProjectSettings_Aggregate_Order_By = {
  avg?: InputMaybe<ProjectSettings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ProjectSettings_Max_Order_By>;
  min?: InputMaybe<ProjectSettings_Min_Order_By>;
  stddev?: InputMaybe<ProjectSettings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ProjectSettings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ProjectSettings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ProjectSettings_Sum_Order_By>;
  var_pop?: InputMaybe<ProjectSettings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ProjectSettings_Var_Samp_Order_By>;
  variance?: InputMaybe<ProjectSettings_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ProjectSettings_Append_Input = {
  value?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "ProjectSettings" */
export type ProjectSettings_Arr_Rel_Insert_Input = {
  data: Array<ProjectSettings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ProjectSettings_On_Conflict>;
};

/** order by avg() on columns of table "ProjectSettings" */
export type ProjectSettings_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ProjectSettings". All fields are combined with a logical 'AND'. */
export type ProjectSettings_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<ProjectSettings_Bool_Exp>>;
  _not?: InputMaybe<ProjectSettings_Bool_Exp>;
  _or?: InputMaybe<Array<ProjectSettings_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  projectId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "ProjectSettings" */
export enum ProjectSettings_Constraint {
  /** unique or primary key constraint on columns "id" */
  PROJECTSETTINGS_PKEY = 'ProjectSettings_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ProjectSettings_Delete_At_Path_Input = {
  value?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ProjectSettings_Delete_Elem_Input = {
  value?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ProjectSettings_Delete_Key_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "ProjectSettings" */
export type ProjectSettings_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ProjectSettings" */
export type ProjectSettings_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['jsonb']>;
};

/** order by max() on columns of table "ProjectSettings" */
export type ProjectSettings_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "ProjectSettings" */
export type ProjectSettings_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "ProjectSettings" */
export type ProjectSettings_On_Conflict = {
  constraint: ProjectSettings_Constraint;
  update_columns?: Array<ProjectSettings_Update_Column>;
  where?: InputMaybe<ProjectSettings_Bool_Exp>;
};

/** Ordering options when selecting data from "ProjectSettings". */
export type ProjectSettings_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ProjectSettings */
export type ProjectSettings_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ProjectSettings_Prepend_Input = {
  value?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "ProjectSettings" */
export enum ProjectSettings_Select_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  KEY = 'key',
  /** column name */
  PROJECTID = 'projectId',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "ProjectSettings" */
export type ProjectSettings_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['jsonb']>;
};

/** order by stddev() on columns of table "ProjectSettings" */
export type ProjectSettings_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "ProjectSettings" */
export type ProjectSettings_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "ProjectSettings" */
export type ProjectSettings_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "ProjectSettings" */
export type ProjectSettings_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** update columns of table "ProjectSettings" */
export enum ProjectSettings_Update_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  KEY = 'key',
  /** column name */
  PROJECTID = 'projectId',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALUE = 'value'
}

export type ProjectSettings_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<ProjectSettings_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<ProjectSettings_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<ProjectSettings_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<ProjectSettings_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ProjectSettings_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<ProjectSettings_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectSettings_Set_Input>;
  /** filter the rows which have to be updated */
  where: ProjectSettings_Bool_Exp;
};

/** order by var_pop() on columns of table "ProjectSettings" */
export type ProjectSettings_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "ProjectSettings" */
export type ProjectSettings_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "ProjectSettings" */
export type ProjectSettings_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

export type Project_Aggregate_Bool_Exp = {
  count?: InputMaybe<Project_Aggregate_Bool_Exp_Count>;
};

export type Project_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Project_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Project" */
export type Project_Aggregate_Order_By = {
  avg?: InputMaybe<Project_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_Max_Order_By>;
  min?: InputMaybe<Project_Min_Order_By>;
  stddev?: InputMaybe<Project_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Project_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Project_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Project_Sum_Order_By>;
  var_pop?: InputMaybe<Project_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Project_Var_Samp_Order_By>;
  variance?: InputMaybe<Project_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Project" */
export type Project_Arr_Rel_Insert_Input = {
  data: Array<Project_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** order by avg() on columns of table "Project" */
export type Project_Avg_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  MemberOnProjects?: InputMaybe<MemberOnProjects_Bool_Exp>;
  MemberOnProjects_aggregate?: InputMaybe<MemberOnProjects_Aggregate_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  ProjectSettings?: InputMaybe<ProjectSettings_Bool_Exp>;
  ProjectSettings_aggregate?: InputMaybe<ProjectSettings_Aggregate_Bool_Exp>;
  TaskBoards?: InputMaybe<TaskBoard_Bool_Exp>;
  TaskBoards_aggregate?: InputMaybe<TaskBoard_Aggregate_Bool_Exp>;
  TaskDefinition?: InputMaybe<TaskDefinition_Bool_Exp>;
  Tasks?: InputMaybe<Task_Bool_Exp>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Project_Bool_Exp>>;
  _not?: InputMaybe<Project_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  creatorId?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  managerId?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  reporterId?: InputMaybe<Int_Comparison_Exp>;
  taskDefinitionId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  userByManagerid?: InputMaybe<User_Bool_Exp>;
  userByReporterid?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "Project" */
export enum Project_Constraint {
  /** unique or primary key constraint on columns "id" */
  PROJECT_PKEY = 'Project_pkey'
}

/** input type for incrementing numeric columns in table "Project" */
export type Project_Inc_Input = {
  creatorId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  managerId?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  reporterId?: InputMaybe<Scalars['Int']>;
  taskDefinitionId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Project" */
export type Project_Insert_Input = {
  MemberOnProjects?: InputMaybe<MemberOnProjects_Arr_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  ProjectSettings?: InputMaybe<ProjectSettings_Arr_Rel_Insert_Input>;
  TaskBoards?: InputMaybe<TaskBoard_Arr_Rel_Insert_Input>;
  TaskDefinition?: InputMaybe<TaskDefinition_Obj_Rel_Insert_Input>;
  Tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  managerId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  reporterId?: InputMaybe<Scalars['Int']>;
  taskDefinitionId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userByManagerid?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userByReporterid?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** order by max() on columns of table "Project" */
export type Project_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Project" */
export type Project_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "Project" */
export type Project_Obj_Rel_Insert_Input = {
  data: Project_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** on_conflict condition type for table "Project" */
export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns?: Array<Project_Update_Column>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "Project". */
export type Project_Order_By = {
  MemberOnProjects_aggregate?: InputMaybe<MemberOnProjects_Aggregate_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  ProjectSettings_aggregate?: InputMaybe<ProjectSettings_Aggregate_Order_By>;
  TaskBoards_aggregate?: InputMaybe<TaskBoard_Aggregate_Order_By>;
  TaskDefinition?: InputMaybe<TaskDefinition_Order_By>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  User?: InputMaybe<User_Order_By>;
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userByManagerid?: InputMaybe<User_Order_By>;
  userByReporterid?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: Project */
export type Project_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Project" */
export enum Project_Select_Column {
  /** column name */
  CODE = 'code',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  MANAGERID = 'managerId',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  REPORTERID = 'reporterId',
  /** column name */
  TASKDEFINITIONID = 'taskDefinitionId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "Project" */
export type Project_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  managerId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  reporterId?: InputMaybe<Scalars['Int']>;
  taskDefinitionId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Project" */
export type Project_Stddev_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Project" */
export type Project_Stddev_Pop_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Project" */
export type Project_Stddev_Samp_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "Project" */
export type Project_Sum_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** update columns of table "Project" */
export enum Project_Update_Column {
  /** column name */
  CODE = 'code',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  MANAGERID = 'managerId',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  REPORTERID = 'reporterId',
  /** column name */
  TASKDEFINITIONID = 'taskDefinitionId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type Project_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Project_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Set_Input>;
  /** filter the rows which have to be updated */
  where: Project_Bool_Exp;
};

/** order by var_pop() on columns of table "Project" */
export type Project_Var_Pop_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Project" */
export type Project_Var_Samp_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Project" */
export type Project_Variance_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

export type ResourceItem_Aggregate_Bool_Exp = {
  count?: InputMaybe<ResourceItem_Aggregate_Bool_Exp_Count>;
};

export type ResourceItem_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ResourceItem_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ResourceItem_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "ResourceItem" */
export type ResourceItem_Aggregate_Order_By = {
  avg?: InputMaybe<ResourceItem_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ResourceItem_Max_Order_By>;
  min?: InputMaybe<ResourceItem_Min_Order_By>;
  stddev?: InputMaybe<ResourceItem_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ResourceItem_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ResourceItem_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ResourceItem_Sum_Order_By>;
  var_pop?: InputMaybe<ResourceItem_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ResourceItem_Var_Samp_Order_By>;
  variance?: InputMaybe<ResourceItem_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ResourceItem" */
export type ResourceItem_Arr_Rel_Insert_Input = {
  data: Array<ResourceItem_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ResourceItem_On_Conflict>;
};

/** order by avg() on columns of table "ResourceItem" */
export type ResourceItem_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ResourceItem". All fields are combined with a logical 'AND'. */
export type ResourceItem_Bool_Exp = {
  Resource?: InputMaybe<Resource_Bool_Exp>;
  _and?: InputMaybe<Array<ResourceItem_Bool_Exp>>;
  _not?: InputMaybe<ResourceItem_Bool_Exp>;
  _or?: InputMaybe<Array<ResourceItem_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  resourceId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "ResourceItem" */
export enum ResourceItem_Constraint {
  /** unique or primary key constraint on columns "id" */
  RESOURCEITEM_PKEY = 'ResourceItem_pkey'
}

/** input type for incrementing numeric columns in table "ResourceItem" */
export type ResourceItem_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  resourceId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ResourceItem" */
export type ResourceItem_Insert_Input = {
  Resource?: InputMaybe<Resource_Obj_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  resourceId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "ResourceItem" */
export type ResourceItem_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "ResourceItem" */
export type ResourceItem_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "ResourceItem" */
export type ResourceItem_On_Conflict = {
  constraint: ResourceItem_Constraint;
  update_columns?: Array<ResourceItem_Update_Column>;
  where?: InputMaybe<ResourceItem_Bool_Exp>;
};

/** Ordering options when selecting data from "ResourceItem". */
export type ResourceItem_Order_By = {
  Resource?: InputMaybe<Resource_Order_By>;
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ResourceItem */
export type ResourceItem_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "ResourceItem" */
export enum ResourceItem_Select_Column {
  /** column name */
  CODE = 'code',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  RESOURCEID = 'resourceId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "ResourceItem" */
export type ResourceItem_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  resourceId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "ResourceItem" */
export type ResourceItem_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "ResourceItem" */
export type ResourceItem_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "ResourceItem" */
export type ResourceItem_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "ResourceItem" */
export type ResourceItem_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
};

/** update columns of table "ResourceItem" */
export enum ResourceItem_Update_Column {
  /** column name */
  CODE = 'code',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  RESOURCEID = 'resourceId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type ResourceItem_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ResourceItem_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ResourceItem_Set_Input>;
  /** filter the rows which have to be updated */
  where: ResourceItem_Bool_Exp;
};

/** order by var_pop() on columns of table "ResourceItem" */
export type ResourceItem_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "ResourceItem" */
export type ResourceItem_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "ResourceItem" */
export type ResourceItem_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  resourceId?: InputMaybe<Order_By>;
};

export type Resource_Aggregate_Bool_Exp = {
  count?: InputMaybe<Resource_Aggregate_Bool_Exp_Count>;
};

export type Resource_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Resource_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Resource_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "Resource" */
export type Resource_Aggregate_Order_By = {
  avg?: InputMaybe<Resource_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Resource_Max_Order_By>;
  min?: InputMaybe<Resource_Min_Order_By>;
  stddev?: InputMaybe<Resource_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Resource_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Resource_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Resource_Sum_Order_By>;
  var_pop?: InputMaybe<Resource_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Resource_Var_Samp_Order_By>;
  variance?: InputMaybe<Resource_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Resource" */
export type Resource_Arr_Rel_Insert_Input = {
  data: Array<Resource_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Resource_On_Conflict>;
};

/** order by avg() on columns of table "Resource" */
export type Resource_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Resource". All fields are combined with a logical 'AND'. */
export type Resource_Bool_Exp = {
  Organization?: InputMaybe<Organization_Bool_Exp>;
  ResourceItems?: InputMaybe<ResourceItem_Bool_Exp>;
  ResourceItems_aggregate?: InputMaybe<ResourceItem_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Resource_Bool_Exp>>;
  _not?: InputMaybe<Resource_Bool_Exp>;
  _or?: InputMaybe<Array<Resource_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Resource" */
export enum Resource_Constraint {
  /** unique or primary key constraint on columns "id" */
  RESOURCE_PKEY = 'Resource_pkey'
}

/** input type for incrementing numeric columns in table "Resource" */
export type Resource_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Resource" */
export type Resource_Insert_Input = {
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  ResourceItems?: InputMaybe<ResourceItem_Arr_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Resource" */
export type Resource_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Resource" */
export type Resource_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "Resource" */
export type Resource_Obj_Rel_Insert_Input = {
  data: Resource_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Resource_On_Conflict>;
};

/** on_conflict condition type for table "Resource" */
export type Resource_On_Conflict = {
  constraint: Resource_Constraint;
  update_columns?: Array<Resource_Update_Column>;
  where?: InputMaybe<Resource_Bool_Exp>;
};

/** Ordering options when selecting data from "Resource". */
export type Resource_Order_By = {
  Organization?: InputMaybe<Organization_Order_By>;
  ResourceItems_aggregate?: InputMaybe<ResourceItem_Aggregate_Order_By>;
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Resource */
export type Resource_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Resource" */
export enum Resource_Select_Column {
  /** column name */
  CODE = 'code',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "Resource" */
export type Resource_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Resource" */
export type Resource_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Resource" */
export type Resource_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Resource" */
export type Resource_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "Resource" */
export type Resource_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** update columns of table "Resource" */
export enum Resource_Update_Column {
  /** column name */
  CODE = 'code',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type Resource_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Resource_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resource_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resource_Bool_Exp;
};

/** order by var_pop() on columns of table "Resource" */
export type Resource_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Resource" */
export type Resource_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Resource" */
export type Resource_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Settings_Append_Input = {
  value?: InputMaybe<Scalars['jsonb']>;
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
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "Settings" */
export enum Settings_Constraint {
  /** unique or primary key constraint on columns "id" */
  SETTINGS_PKEY = 'Settings_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Settings_Delete_At_Path_Input = {
  value?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Settings_Delete_Elem_Input = {
  value?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Settings_Delete_Key_Input = {
  value?: InputMaybe<Scalars['String']>;
};

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
  value?: InputMaybe<Scalars['jsonb']>;
};

/** order by max() on columns of table "Settings" */
export type Settings_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Settings" */
export type Settings_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
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

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Settings_Prepend_Input = {
  value?: InputMaybe<Scalars['jsonb']>;
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
  value?: InputMaybe<Scalars['jsonb']>;
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
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Settings_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Settings_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Settings_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Settings_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Settings_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Settings_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Settings_Set_Input>;
  /** filter the rows which have to be updated */
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

export type TaskBoardSettings_Aggregate_Bool_Exp = {
  count?: InputMaybe<TaskBoardSettings_Aggregate_Bool_Exp_Count>;
};

export type TaskBoardSettings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TaskBoardSettings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TaskBoardSettings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "TaskBoardSettings" */
export type TaskBoardSettings_Aggregate_Order_By = {
  avg?: InputMaybe<TaskBoardSettings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TaskBoardSettings_Max_Order_By>;
  min?: InputMaybe<TaskBoardSettings_Min_Order_By>;
  stddev?: InputMaybe<TaskBoardSettings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<TaskBoardSettings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<TaskBoardSettings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<TaskBoardSettings_Sum_Order_By>;
  var_pop?: InputMaybe<TaskBoardSettings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<TaskBoardSettings_Var_Samp_Order_By>;
  variance?: InputMaybe<TaskBoardSettings_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TaskBoardSettings_Append_Input = {
  value?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "TaskBoardSettings" */
export type TaskBoardSettings_Arr_Rel_Insert_Input = {
  data: Array<TaskBoardSettings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TaskBoardSettings_On_Conflict>;
};

/** order by avg() on columns of table "TaskBoardSettings" */
export type TaskBoardSettings_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "TaskBoardSettings". All fields are combined with a logical 'AND'. */
export type TaskBoardSettings_Bool_Exp = {
  TaskBoard?: InputMaybe<TaskBoard_Bool_Exp>;
  _and?: InputMaybe<Array<TaskBoardSettings_Bool_Exp>>;
  _not?: InputMaybe<TaskBoardSettings_Bool_Exp>;
  _or?: InputMaybe<Array<TaskBoardSettings_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  taskBoardId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "TaskBoardSettings" */
export enum TaskBoardSettings_Constraint {
  /** unique or primary key constraint on columns "id" */
  TASKBOARDSETTINGS_PKEY = 'TaskBoardSettings_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TaskBoardSettings_Delete_At_Path_Input = {
  value?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TaskBoardSettings_Delete_Elem_Input = {
  value?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TaskBoardSettings_Delete_Key_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "TaskBoardSettings" */
export type TaskBoardSettings_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  taskBoardId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "TaskBoardSettings" */
export type TaskBoardSettings_Insert_Input = {
  TaskBoard?: InputMaybe<TaskBoard_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  taskBoardId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['jsonb']>;
};

/** order by max() on columns of table "TaskBoardSettings" */
export type TaskBoardSettings_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "TaskBoardSettings" */
export type TaskBoardSettings_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "TaskBoardSettings" */
export type TaskBoardSettings_On_Conflict = {
  constraint: TaskBoardSettings_Constraint;
  update_columns?: Array<TaskBoardSettings_Update_Column>;
  where?: InputMaybe<TaskBoardSettings_Bool_Exp>;
};

/** Ordering options when selecting data from "TaskBoardSettings". */
export type TaskBoardSettings_Order_By = {
  TaskBoard?: InputMaybe<TaskBoard_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: TaskBoardSettings */
export type TaskBoardSettings_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TaskBoardSettings_Prepend_Input = {
  value?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "TaskBoardSettings" */
export enum TaskBoardSettings_Select_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  KEY = 'key',
  /** column name */
  TASKBOARDID = 'taskBoardId',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "TaskBoardSettings" */
export type TaskBoardSettings_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  taskBoardId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['jsonb']>;
};

/** order by stddev() on columns of table "TaskBoardSettings" */
export type TaskBoardSettings_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "TaskBoardSettings" */
export type TaskBoardSettings_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "TaskBoardSettings" */
export type TaskBoardSettings_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "TaskBoardSettings" */
export type TaskBoardSettings_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
};

/** update columns of table "TaskBoardSettings" */
export enum TaskBoardSettings_Update_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  KEY = 'key',
  /** column name */
  TASKBOARDID = 'taskBoardId',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALUE = 'value'
}

export type TaskBoardSettings_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<TaskBoardSettings_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<TaskBoardSettings_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<TaskBoardSettings_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<TaskBoardSettings_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TaskBoardSettings_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<TaskBoardSettings_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TaskBoardSettings_Set_Input>;
  /** filter the rows which have to be updated */
  where: TaskBoardSettings_Bool_Exp;
};

/** order by var_pop() on columns of table "TaskBoardSettings" */
export type TaskBoardSettings_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "TaskBoardSettings" */
export type TaskBoardSettings_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "TaskBoardSettings" */
export type TaskBoardSettings_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  taskBoardId?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "TaskBoardType". All fields are combined with logical 'AND'. */
export type TaskBoardType_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['TaskBoardType']>;
  _gt?: InputMaybe<Scalars['TaskBoardType']>;
  _gte?: InputMaybe<Scalars['TaskBoardType']>;
  _in?: InputMaybe<Array<Scalars['TaskBoardType']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['TaskBoardType']>;
  _lte?: InputMaybe<Scalars['TaskBoardType']>;
  _neq?: InputMaybe<Scalars['TaskBoardType']>;
  _nin?: InputMaybe<Array<Scalars['TaskBoardType']>>;
};

/** Boolean expression to compare columns of type "TaskBoardViewType". All fields are combined with logical 'AND'. */
export type TaskBoardViewType_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['TaskBoardViewType']>;
  _gt?: InputMaybe<Scalars['TaskBoardViewType']>;
  _gte?: InputMaybe<Scalars['TaskBoardViewType']>;
  _in?: InputMaybe<Array<Scalars['TaskBoardViewType']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['TaskBoardViewType']>;
  _lte?: InputMaybe<Scalars['TaskBoardViewType']>;
  _neq?: InputMaybe<Scalars['TaskBoardViewType']>;
  _nin?: InputMaybe<Array<Scalars['TaskBoardViewType']>>;
};

export type TaskBoard_Aggregate_Bool_Exp = {
  count?: InputMaybe<TaskBoard_Aggregate_Bool_Exp_Count>;
};

export type TaskBoard_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TaskBoard_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TaskBoard_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "TaskBoard" */
export type TaskBoard_Aggregate_Order_By = {
  avg?: InputMaybe<TaskBoard_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TaskBoard_Max_Order_By>;
  min?: InputMaybe<TaskBoard_Min_Order_By>;
  stddev?: InputMaybe<TaskBoard_Stddev_Order_By>;
  stddev_pop?: InputMaybe<TaskBoard_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<TaskBoard_Stddev_Samp_Order_By>;
  sum?: InputMaybe<TaskBoard_Sum_Order_By>;
  var_pop?: InputMaybe<TaskBoard_Var_Pop_Order_By>;
  var_samp?: InputMaybe<TaskBoard_Var_Samp_Order_By>;
  variance?: InputMaybe<TaskBoard_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TaskBoard_Append_Input = {
  viewConfig?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "TaskBoard" */
export type TaskBoard_Arr_Rel_Insert_Input = {
  data: Array<TaskBoard_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TaskBoard_On_Conflict>;
};

/** order by avg() on columns of table "TaskBoard" */
export type TaskBoard_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "TaskBoard". All fields are combined with a logical 'AND'. */
export type TaskBoard_Bool_Exp = {
  Organization?: InputMaybe<Organization_Bool_Exp>;
  Project?: InputMaybe<Project_Bool_Exp>;
  TaskBoardSettings?: InputMaybe<TaskBoardSettings_Bool_Exp>;
  TaskBoardSettings_aggregate?: InputMaybe<TaskBoardSettings_Aggregate_Bool_Exp>;
  TaskDefinition?: InputMaybe<TaskDefinition_Bool_Exp>;
  _and?: InputMaybe<Array<TaskBoard_Bool_Exp>>;
  _not?: InputMaybe<TaskBoard_Bool_Exp>;
  _or?: InputMaybe<Array<TaskBoard_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  projectId?: InputMaybe<Int_Comparison_Exp>;
  taskDefinitionId?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<TaskBoardType_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  viewConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  viewType?: InputMaybe<TaskBoardViewType_Comparison_Exp>;
  visibility?: InputMaybe<Visibility_Comparison_Exp>;
};

/** unique or primary key constraints on table "TaskBoard" */
export enum TaskBoard_Constraint {
  /** unique or primary key constraint on columns "id" */
  TASKBOARD_PKEY = 'TaskBoard_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TaskBoard_Delete_At_Path_Input = {
  viewConfig?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TaskBoard_Delete_Elem_Input = {
  viewConfig?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TaskBoard_Delete_Key_Input = {
  viewConfig?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "TaskBoard" */
export type TaskBoard_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['Int']>;
  taskDefinitionId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "TaskBoard" */
export type TaskBoard_Insert_Input = {
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  TaskBoardSettings?: InputMaybe<TaskBoardSettings_Arr_Rel_Insert_Input>;
  TaskDefinition?: InputMaybe<TaskDefinition_Obj_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['Int']>;
  taskDefinitionId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['TaskBoardType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  viewConfig?: InputMaybe<Scalars['jsonb']>;
  viewType?: InputMaybe<Scalars['TaskBoardViewType']>;
  visibility?: InputMaybe<Scalars['Visibility']>;
};

/** order by max() on columns of table "TaskBoard" */
export type TaskBoard_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  viewType?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "TaskBoard" */
export type TaskBoard_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  viewType?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "TaskBoard" */
export type TaskBoard_Obj_Rel_Insert_Input = {
  data: TaskBoard_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TaskBoard_On_Conflict>;
};

/** on_conflict condition type for table "TaskBoard" */
export type TaskBoard_On_Conflict = {
  constraint: TaskBoard_Constraint;
  update_columns?: Array<TaskBoard_Update_Column>;
  where?: InputMaybe<TaskBoard_Bool_Exp>;
};

/** Ordering options when selecting data from "TaskBoard". */
export type TaskBoard_Order_By = {
  Organization?: InputMaybe<Organization_Order_By>;
  Project?: InputMaybe<Project_Order_By>;
  TaskBoardSettings_aggregate?: InputMaybe<TaskBoardSettings_Aggregate_Order_By>;
  TaskDefinition?: InputMaybe<TaskDefinition_Order_By>;
  code?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  viewConfig?: InputMaybe<Order_By>;
  viewType?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** primary key columns input for table: TaskBoard */
export type TaskBoard_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TaskBoard_Prepend_Input = {
  viewConfig?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "TaskBoard" */
export enum TaskBoard_Select_Column {
  /** column name */
  CODE = 'code',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PROJECTID = 'projectId',
  /** column name */
  TASKDEFINITIONID = 'taskDefinitionId',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VIEWCONFIG = 'viewConfig',
  /** column name */
  VIEWTYPE = 'viewType',
  /** column name */
  VISIBILITY = 'visibility'
}

/** input type for updating data in table "TaskBoard" */
export type TaskBoard_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['Int']>;
  taskDefinitionId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['TaskBoardType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  viewConfig?: InputMaybe<Scalars['jsonb']>;
  viewType?: InputMaybe<Scalars['TaskBoardViewType']>;
  visibility?: InputMaybe<Scalars['Visibility']>;
};

/** order by stddev() on columns of table "TaskBoard" */
export type TaskBoard_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "TaskBoard" */
export type TaskBoard_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "TaskBoard" */
export type TaskBoard_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "TaskBoard" */
export type TaskBoard_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** update columns of table "TaskBoard" */
export enum TaskBoard_Update_Column {
  /** column name */
  CODE = 'code',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PROJECTID = 'projectId',
  /** column name */
  TASKDEFINITIONID = 'taskDefinitionId',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VIEWCONFIG = 'viewConfig',
  /** column name */
  VIEWTYPE = 'viewType',
  /** column name */
  VISIBILITY = 'visibility'
}

export type TaskBoard_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<TaskBoard_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<TaskBoard_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<TaskBoard_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<TaskBoard_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TaskBoard_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<TaskBoard_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TaskBoard_Set_Input>;
  /** filter the rows which have to be updated */
  where: TaskBoard_Bool_Exp;
};

/** order by var_pop() on columns of table "TaskBoard" */
export type TaskBoard_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "TaskBoard" */
export type TaskBoard_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "TaskBoard" */
export type TaskBoard_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

export type TaskDefinitionActivityDefinition_Aggregate_Bool_Exp = {
  count?: InputMaybe<TaskDefinitionActivityDefinition_Aggregate_Bool_Exp_Count>;
};

export type TaskDefinitionActivityDefinition_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TaskDefinitionActivityDefinition_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<TaskDefinitionActivityDefinition_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Aggregate_Order_By = {
  avg?: InputMaybe<TaskDefinitionActivityDefinition_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TaskDefinitionActivityDefinition_Max_Order_By>;
  min?: InputMaybe<TaskDefinitionActivityDefinition_Min_Order_By>;
  stddev?: InputMaybe<TaskDefinitionActivityDefinition_Stddev_Order_By>;
  stddev_pop?: InputMaybe<TaskDefinitionActivityDefinition_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<TaskDefinitionActivityDefinition_Stddev_Samp_Order_By>;
  sum?: InputMaybe<TaskDefinitionActivityDefinition_Sum_Order_By>;
  var_pop?: InputMaybe<TaskDefinitionActivityDefinition_Var_Pop_Order_By>;
  var_samp?: InputMaybe<TaskDefinitionActivityDefinition_Var_Samp_Order_By>;
  variance?: InputMaybe<TaskDefinitionActivityDefinition_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TaskDefinitionActivityDefinition_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  initialValue?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Arr_Rel_Insert_Input = {
  data: Array<TaskDefinitionActivityDefinition_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TaskDefinitionActivityDefinition_On_Conflict>;
};

/** order by avg() on columns of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Avg_Order_By = {
  activityDefinitionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "TaskDefinitionActivityDefinition". All fields are combined with a logical 'AND'. */
export type TaskDefinitionActivityDefinition_Bool_Exp = {
  ActivityDefinition?: InputMaybe<ActivityDefinition_Bool_Exp>;
  TaskDefinition?: InputMaybe<TaskDefinition_Bool_Exp>;
  _and?: InputMaybe<Array<TaskDefinitionActivityDefinition_Bool_Exp>>;
  _not?: InputMaybe<TaskDefinitionActivityDefinition_Bool_Exp>;
  _or?: InputMaybe<Array<TaskDefinitionActivityDefinition_Bool_Exp>>;
  activityDefinitionId?: InputMaybe<Int_Comparison_Exp>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  initialValue?: InputMaybe<Jsonb_Comparison_Exp>;
  taskDefinitionId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "TaskDefinitionActivityDefinition" */
export enum TaskDefinitionActivityDefinition_Constraint {
  /** unique or primary key constraint on columns "id" */
  TASKDEFINITIONACTIVITYDEFINITION_PKEY = 'TaskDefinitionActivityDefinition_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TaskDefinitionActivityDefinition_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']>>;
  initialValue?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TaskDefinitionActivityDefinition_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']>;
  initialValue?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TaskDefinitionActivityDefinition_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']>;
  initialValue?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Inc_Input = {
  activityDefinitionId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  taskDefinitionId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Insert_Input = {
  ActivityDefinition?: InputMaybe<ActivityDefinition_Obj_Rel_Insert_Input>;
  TaskDefinition?: InputMaybe<TaskDefinition_Obj_Rel_Insert_Input>;
  activityDefinitionId?: InputMaybe<Scalars['Int']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  initialValue?: InputMaybe<Scalars['jsonb']>;
  taskDefinitionId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Max_Order_By = {
  activityDefinitionId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Min_Order_By = {
  activityDefinitionId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_On_Conflict = {
  constraint: TaskDefinitionActivityDefinition_Constraint;
  update_columns?: Array<TaskDefinitionActivityDefinition_Update_Column>;
  where?: InputMaybe<TaskDefinitionActivityDefinition_Bool_Exp>;
};

/** Ordering options when selecting data from "TaskDefinitionActivityDefinition". */
export type TaskDefinitionActivityDefinition_Order_By = {
  ActivityDefinition?: InputMaybe<ActivityDefinition_Order_By>;
  TaskDefinition?: InputMaybe<TaskDefinition_Order_By>;
  activityDefinitionId?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initialValue?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: TaskDefinitionActivityDefinition */
export type TaskDefinitionActivityDefinition_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TaskDefinitionActivityDefinition_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  initialValue?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "TaskDefinitionActivityDefinition" */
export enum TaskDefinitionActivityDefinition_Select_Column {
  /** column name */
  ACTIVITYDEFINITIONID = 'activityDefinitionId',
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  INITIALVALUE = 'initialValue',
  /** column name */
  TASKDEFINITIONID = 'taskDefinitionId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Set_Input = {
  activityDefinitionId?: InputMaybe<Scalars['Int']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  initialValue?: InputMaybe<Scalars['jsonb']>;
  taskDefinitionId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Stddev_Order_By = {
  activityDefinitionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Stddev_Pop_Order_By = {
  activityDefinitionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Stddev_Samp_Order_By = {
  activityDefinitionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Sum_Order_By = {
  activityDefinitionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** update columns of table "TaskDefinitionActivityDefinition" */
export enum TaskDefinitionActivityDefinition_Update_Column {
  /** column name */
  ACTIVITYDEFINITIONID = 'activityDefinitionId',
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  INITIALVALUE = 'initialValue',
  /** column name */
  TASKDEFINITIONID = 'taskDefinitionId',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type TaskDefinitionActivityDefinition_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<TaskDefinitionActivityDefinition_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<TaskDefinitionActivityDefinition_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<TaskDefinitionActivityDefinition_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<TaskDefinitionActivityDefinition_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TaskDefinitionActivityDefinition_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<TaskDefinitionActivityDefinition_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TaskDefinitionActivityDefinition_Set_Input>;
  /** filter the rows which have to be updated */
  where: TaskDefinitionActivityDefinition_Bool_Exp;
};

/** order by var_pop() on columns of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Var_Pop_Order_By = {
  activityDefinitionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Var_Samp_Order_By = {
  activityDefinitionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "TaskDefinitionActivityDefinition" */
export type TaskDefinitionActivityDefinition_Variance_Order_By = {
  activityDefinitionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskDefinitionId?: InputMaybe<Order_By>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type TaskDefinition_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  ctaConfig?: InputMaybe<Scalars['jsonb']>;
  machineConfig?: InputMaybe<Scalars['jsonb']>;
  notificationConfig?: InputMaybe<Scalars['jsonb']>;
  processConfig?: InputMaybe<Scalars['jsonb']>;
  stateConfig?: InputMaybe<Scalars['jsonb']>;
  statusConfig?: InputMaybe<Scalars['jsonb']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "TaskDefinition" */
export type TaskDefinition_Arr_Rel_Insert_Input = {
  data: Array<TaskDefinition_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TaskDefinition_On_Conflict>;
};

/** order by avg() on columns of table "TaskDefinition" */
export type TaskDefinition_Avg_Order_By = {
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "TaskDefinition". All fields are combined with a logical 'AND'. */
export type TaskDefinition_Bool_Exp = {
  Form?: InputMaybe<Form_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  Projects?: InputMaybe<Project_Bool_Exp>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Bool_Exp>;
  TaskBoards?: InputMaybe<TaskBoard_Bool_Exp>;
  TaskBoards_aggregate?: InputMaybe<TaskBoard_Aggregate_Bool_Exp>;
  TaskDefinition?: InputMaybe<TaskDefinition_Bool_Exp>;
  TaskDefinitionActivityDefinitions?: InputMaybe<TaskDefinitionActivityDefinition_Bool_Exp>;
  TaskDefinitionActivityDefinitions_aggregate?: InputMaybe<TaskDefinitionActivityDefinition_Aggregate_Bool_Exp>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Bool_Exp>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Bool_Exp>;
  Tasks?: InputMaybe<Task_Bool_Exp>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<TaskDefinition_Bool_Exp>>;
  _not?: InputMaybe<TaskDefinition_Bool_Exp>;
  _or?: InputMaybe<Array<TaskDefinition_Bool_Exp>>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  ctaConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  ctaTemplate?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  descriptionTemplate?: InputMaybe<String_Comparison_Exp>;
  formId?: InputMaybe<Int_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  keyTemplate?: InputMaybe<String_Comparison_Exp>;
  machineConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  notificationConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  notificationTemplate?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  parentId?: InputMaybe<Int_Comparison_Exp>;
  processConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  stateConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  stateTemplate?: InputMaybe<String_Comparison_Exp>;
  statusConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  statusTemplate?: InputMaybe<String_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  titleTemplate?: InputMaybe<String_Comparison_Exp>;
  triggerConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "TaskDefinition" */
export enum TaskDefinition_Constraint {
  /** unique or primary key constraint on columns "id" */
  TASKDEFINITION_PKEY = 'TaskDefinition_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TaskDefinition_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']>>;
  ctaConfig?: InputMaybe<Array<Scalars['String']>>;
  machineConfig?: InputMaybe<Array<Scalars['String']>>;
  notificationConfig?: InputMaybe<Array<Scalars['String']>>;
  processConfig?: InputMaybe<Array<Scalars['String']>>;
  stateConfig?: InputMaybe<Array<Scalars['String']>>;
  statusConfig?: InputMaybe<Array<Scalars['String']>>;
  triggerConfig?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TaskDefinition_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']>;
  ctaConfig?: InputMaybe<Scalars['Int']>;
  machineConfig?: InputMaybe<Scalars['Int']>;
  notificationConfig?: InputMaybe<Scalars['Int']>;
  processConfig?: InputMaybe<Scalars['Int']>;
  stateConfig?: InputMaybe<Scalars['Int']>;
  statusConfig?: InputMaybe<Scalars['Int']>;
  triggerConfig?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TaskDefinition_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']>;
  ctaConfig?: InputMaybe<Scalars['String']>;
  machineConfig?: InputMaybe<Scalars['String']>;
  notificationConfig?: InputMaybe<Scalars['String']>;
  processConfig?: InputMaybe<Scalars['String']>;
  stateConfig?: InputMaybe<Scalars['String']>;
  statusConfig?: InputMaybe<Scalars['String']>;
  triggerConfig?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "TaskDefinition" */
export type TaskDefinition_Inc_Input = {
  formId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "TaskDefinition" */
export type TaskDefinition_Insert_Input = {
  Form?: InputMaybe<Form_Obj_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Projects?: InputMaybe<Project_Arr_Rel_Insert_Input>;
  TaskBoards?: InputMaybe<TaskBoard_Arr_Rel_Insert_Input>;
  TaskDefinition?: InputMaybe<TaskDefinition_Obj_Rel_Insert_Input>;
  TaskDefinitionActivityDefinitions?: InputMaybe<TaskDefinitionActivityDefinition_Arr_Rel_Insert_Input>;
  TaskDefinitions?: InputMaybe<TaskDefinition_Arr_Rel_Insert_Input>;
  Tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  ctaConfig?: InputMaybe<Scalars['jsonb']>;
  ctaTemplate?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionTemplate?: InputMaybe<Scalars['String']>;
  formId?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  keyTemplate?: InputMaybe<Scalars['String']>;
  machineConfig?: InputMaybe<Scalars['jsonb']>;
  notificationConfig?: InputMaybe<Scalars['jsonb']>;
  notificationTemplate?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  processConfig?: InputMaybe<Scalars['jsonb']>;
  stateConfig?: InputMaybe<Scalars['jsonb']>;
  stateTemplate?: InputMaybe<Scalars['String']>;
  statusConfig?: InputMaybe<Scalars['jsonb']>;
  statusTemplate?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  titleTemplate?: InputMaybe<Scalars['String']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "TaskDefinition" */
export type TaskDefinition_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  ctaTemplate?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  descriptionTemplate?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keyTemplate?: InputMaybe<Order_By>;
  notificationTemplate?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  stateTemplate?: InputMaybe<Order_By>;
  statusTemplate?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  titleTemplate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "TaskDefinition" */
export type TaskDefinition_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  ctaTemplate?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  descriptionTemplate?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keyTemplate?: InputMaybe<Order_By>;
  notificationTemplate?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  stateTemplate?: InputMaybe<Order_By>;
  statusTemplate?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  titleTemplate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
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
  Form?: InputMaybe<Form_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  TaskBoards_aggregate?: InputMaybe<TaskBoard_Aggregate_Order_By>;
  TaskDefinition?: InputMaybe<TaskDefinition_Order_By>;
  TaskDefinitionActivityDefinitions_aggregate?: InputMaybe<TaskDefinitionActivityDefinition_Aggregate_Order_By>;
  TaskDefinitions_aggregate?: InputMaybe<TaskDefinition_Aggregate_Order_By>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  ctaConfig?: InputMaybe<Order_By>;
  ctaTemplate?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  descriptionTemplate?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keyTemplate?: InputMaybe<Order_By>;
  machineConfig?: InputMaybe<Order_By>;
  notificationConfig?: InputMaybe<Order_By>;
  notificationTemplate?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  processConfig?: InputMaybe<Order_By>;
  stateConfig?: InputMaybe<Order_By>;
  stateTemplate?: InputMaybe<Order_By>;
  statusConfig?: InputMaybe<Order_By>;
  statusTemplate?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  titleTemplate?: InputMaybe<Order_By>;
  triggerConfig?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: TaskDefinition */
export type TaskDefinition_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TaskDefinition_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  ctaConfig?: InputMaybe<Scalars['jsonb']>;
  machineConfig?: InputMaybe<Scalars['jsonb']>;
  notificationConfig?: InputMaybe<Scalars['jsonb']>;
  processConfig?: InputMaybe<Scalars['jsonb']>;
  stateConfig?: InputMaybe<Scalars['jsonb']>;
  statusConfig?: InputMaybe<Scalars['jsonb']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "TaskDefinition" */
export enum TaskDefinition_Select_Column {
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CTACONFIG = 'ctaConfig',
  /** column name */
  CTATEMPLATE = 'ctaTemplate',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  DESCRIPTIONTEMPLATE = 'descriptionTemplate',
  /** column name */
  FORMID = 'formId',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  KEYTEMPLATE = 'keyTemplate',
  /** column name */
  MACHINECONFIG = 'machineConfig',
  /** column name */
  NOTIFICATIONCONFIG = 'notificationConfig',
  /** column name */
  NOTIFICATIONTEMPLATE = 'notificationTemplate',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PARENTID = 'parentId',
  /** column name */
  PROCESSCONFIG = 'processConfig',
  /** column name */
  STATECONFIG = 'stateConfig',
  /** column name */
  STATETEMPLATE = 'stateTemplate',
  /** column name */
  STATUSCONFIG = 'statusConfig',
  /** column name */
  STATUSTEMPLATE = 'statusTemplate',
  /** column name */
  THUMBNAIL = 'thumbnail',
  /** column name */
  TITLE = 'title',
  /** column name */
  TITLETEMPLATE = 'titleTemplate',
  /** column name */
  TRIGGERCONFIG = 'triggerConfig',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "TaskDefinition" */
export type TaskDefinition_Set_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  ctaConfig?: InputMaybe<Scalars['jsonb']>;
  ctaTemplate?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionTemplate?: InputMaybe<Scalars['String']>;
  formId?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  keyTemplate?: InputMaybe<Scalars['String']>;
  machineConfig?: InputMaybe<Scalars['jsonb']>;
  notificationConfig?: InputMaybe<Scalars['jsonb']>;
  notificationTemplate?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  processConfig?: InputMaybe<Scalars['jsonb']>;
  stateConfig?: InputMaybe<Scalars['jsonb']>;
  stateTemplate?: InputMaybe<Scalars['String']>;
  statusConfig?: InputMaybe<Scalars['jsonb']>;
  statusTemplate?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  titleTemplate?: InputMaybe<Scalars['String']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "TaskDefinition" */
export type TaskDefinition_Stddev_Order_By = {
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "TaskDefinition" */
export type TaskDefinition_Stddev_Pop_Order_By = {
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "TaskDefinition" */
export type TaskDefinition_Stddev_Samp_Order_By = {
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "TaskDefinition" */
export type TaskDefinition_Sum_Order_By = {
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** update columns of table "TaskDefinition" */
export enum TaskDefinition_Update_Column {
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CTACONFIG = 'ctaConfig',
  /** column name */
  CTATEMPLATE = 'ctaTemplate',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  DESCRIPTIONTEMPLATE = 'descriptionTemplate',
  /** column name */
  FORMID = 'formId',
  /** column name */
  ICON = 'icon',
  /** column name */
  ID = 'id',
  /** column name */
  KEYTEMPLATE = 'keyTemplate',
  /** column name */
  MACHINECONFIG = 'machineConfig',
  /** column name */
  NOTIFICATIONCONFIG = 'notificationConfig',
  /** column name */
  NOTIFICATIONTEMPLATE = 'notificationTemplate',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PARENTID = 'parentId',
  /** column name */
  PROCESSCONFIG = 'processConfig',
  /** column name */
  STATECONFIG = 'stateConfig',
  /** column name */
  STATETEMPLATE = 'stateTemplate',
  /** column name */
  STATUSCONFIG = 'statusConfig',
  /** column name */
  STATUSTEMPLATE = 'statusTemplate',
  /** column name */
  THUMBNAIL = 'thumbnail',
  /** column name */
  TITLE = 'title',
  /** column name */
  TITLETEMPLATE = 'titleTemplate',
  /** column name */
  TRIGGERCONFIG = 'triggerConfig',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type TaskDefinition_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<TaskDefinition_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<TaskDefinition_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<TaskDefinition_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<TaskDefinition_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TaskDefinition_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<TaskDefinition_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TaskDefinition_Set_Input>;
  /** filter the rows which have to be updated */
  where: TaskDefinition_Bool_Exp;
};

/** order by var_pop() on columns of table "TaskDefinition" */
export type TaskDefinition_Var_Pop_Order_By = {
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "TaskDefinition" */
export type TaskDefinition_Var_Samp_Order_By = {
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "TaskDefinition" */
export type TaskDefinition_Variance_Order_By = {
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
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

export type Task_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Task_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Task_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Task_Aggregate_Bool_Exp_Count>;
};

export type Task_Aggregate_Bool_Exp_Bool_And = {
  arguments: Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Task_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Task_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Task_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Task_Append_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  ctaConfig?: InputMaybe<Scalars['jsonb']>;
  formConfig?: InputMaybe<Scalars['jsonb']>;
  machineConfig?: InputMaybe<Scalars['jsonb']>;
  notificationConfig?: InputMaybe<Scalars['jsonb']>;
  processConfig?: InputMaybe<Scalars['jsonb']>;
  properties?: InputMaybe<Scalars['jsonb']>;
  stateConfig?: InputMaybe<Scalars['jsonb']>;
  statusConfig?: InputMaybe<Scalars['jsonb']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
  values?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "Task" */
export type Task_Arr_Rel_Insert_Input = {
  data: Array<Task_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** order by avg() on columns of table "Task" */
export type Task_Avg_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Task". All fields are combined with a logical 'AND'. */
export type Task_Bool_Exp = {
  Comments?: InputMaybe<Comment_Bool_Exp>;
  Comments_aggregate?: InputMaybe<Comment_Aggregate_Bool_Exp>;
  EventLogs?: InputMaybe<EventLog_Bool_Exp>;
  EventLogs_aggregate?: InputMaybe<EventLog_Aggregate_Bool_Exp>;
  Form?: InputMaybe<Form_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  Project?: InputMaybe<Project_Bool_Exp>;
  Task?: InputMaybe<Task_Bool_Exp>;
  TaskDefinition?: InputMaybe<TaskDefinition_Bool_Exp>;
  Tasks?: InputMaybe<Task_Bool_Exp>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  Team?: InputMaybe<Team_Bool_Exp>;
  Triggers?: InputMaybe<Trigger_Bool_Exp>;
  Triggers_aggregate?: InputMaybe<Trigger_Aggregate_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Task_Bool_Exp>>;
  _not?: InputMaybe<Task_Bool_Exp>;
  _or?: InputMaybe<Array<Task_Bool_Exp>>;
  assigneeId?: InputMaybe<Int_Comparison_Exp>;
  config?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  creatorId?: InputMaybe<Int_Comparison_Exp>;
  cta?: InputMaybe<String_Comparison_Exp>;
  ctaConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  ctaName?: InputMaybe<String_Comparison_Exp>;
  ctaTemplate?: InputMaybe<String_Comparison_Exp>;
  definitionId?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  descriptionTemplate?: InputMaybe<String_Comparison_Exp>;
  dueDate?: InputMaybe<Timestamp_Comparison_Exp>;
  formConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  formId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  machineConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  notificationConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  notificationTemplate?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  parentId?: InputMaybe<Int_Comparison_Exp>;
  priority?: InputMaybe<TaskPriority_Comparison_Exp>;
  processConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  projectId?: InputMaybe<Int_Comparison_Exp>;
  properties?: InputMaybe<Jsonb_Comparison_Exp>;
  reporterId?: InputMaybe<Int_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  stateConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  stateName?: InputMaybe<String_Comparison_Exp>;
  stateTemplate?: InputMaybe<String_Comparison_Exp>;
  stateValues?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  statusConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  statusName?: InputMaybe<String_Comparison_Exp>;
  statusTemplate?: InputMaybe<String_Comparison_Exp>;
  teamId?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  titleTemplate?: InputMaybe<String_Comparison_Exp>;
  triggerConfig?: InputMaybe<Jsonb_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  typeName?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  userByCreatorid?: InputMaybe<User_Bool_Exp>;
  userByReporterid?: InputMaybe<User_Bool_Exp>;
  values?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "Task" */
export enum Task_Constraint {
  /** unique or primary key constraint on columns "id" */
  TASK_PKEY = 'Task_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Task_Delete_At_Path_Input = {
  config?: InputMaybe<Array<Scalars['String']>>;
  ctaConfig?: InputMaybe<Array<Scalars['String']>>;
  formConfig?: InputMaybe<Array<Scalars['String']>>;
  machineConfig?: InputMaybe<Array<Scalars['String']>>;
  notificationConfig?: InputMaybe<Array<Scalars['String']>>;
  processConfig?: InputMaybe<Array<Scalars['String']>>;
  properties?: InputMaybe<Array<Scalars['String']>>;
  stateConfig?: InputMaybe<Array<Scalars['String']>>;
  statusConfig?: InputMaybe<Array<Scalars['String']>>;
  triggerConfig?: InputMaybe<Array<Scalars['String']>>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Task_Delete_Elem_Input = {
  config?: InputMaybe<Scalars['Int']>;
  ctaConfig?: InputMaybe<Scalars['Int']>;
  formConfig?: InputMaybe<Scalars['Int']>;
  machineConfig?: InputMaybe<Scalars['Int']>;
  notificationConfig?: InputMaybe<Scalars['Int']>;
  processConfig?: InputMaybe<Scalars['Int']>;
  properties?: InputMaybe<Scalars['Int']>;
  stateConfig?: InputMaybe<Scalars['Int']>;
  statusConfig?: InputMaybe<Scalars['Int']>;
  triggerConfig?: InputMaybe<Scalars['Int']>;
  values?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Task_Delete_Key_Input = {
  config?: InputMaybe<Scalars['String']>;
  ctaConfig?: InputMaybe<Scalars['String']>;
  formConfig?: InputMaybe<Scalars['String']>;
  machineConfig?: InputMaybe<Scalars['String']>;
  notificationConfig?: InputMaybe<Scalars['String']>;
  processConfig?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Scalars['String']>;
  stateConfig?: InputMaybe<Scalars['String']>;
  statusConfig?: InputMaybe<Scalars['String']>;
  triggerConfig?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "Task" */
export type Task_Inc_Input = {
  assigneeId?: InputMaybe<Scalars['Int']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  definitionId?: InputMaybe<Scalars['Int']>;
  formId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['Int']>;
  reporterId?: InputMaybe<Scalars['Int']>;
  teamId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Task" */
export type Task_Insert_Input = {
  Comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  EventLogs?: InputMaybe<EventLog_Arr_Rel_Insert_Input>;
  Form?: InputMaybe<Form_Obj_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  Task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  TaskDefinition?: InputMaybe<TaskDefinition_Obj_Rel_Insert_Input>;
  Tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  Team?: InputMaybe<Team_Obj_Rel_Insert_Input>;
  Triggers?: InputMaybe<Trigger_Arr_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  assigneeId?: InputMaybe<Scalars['Int']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  cta?: InputMaybe<Scalars['String']>;
  ctaConfig?: InputMaybe<Scalars['jsonb']>;
  ctaName?: InputMaybe<Scalars['String']>;
  ctaTemplate?: InputMaybe<Scalars['String']>;
  definitionId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionTemplate?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['timestamp']>;
  formConfig?: InputMaybe<Scalars['jsonb']>;
  formId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  machineConfig?: InputMaybe<Scalars['jsonb']>;
  notificationConfig?: InputMaybe<Scalars['jsonb']>;
  notificationTemplate?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<Scalars['TaskPriority']>;
  processConfig?: InputMaybe<Scalars['jsonb']>;
  projectId?: InputMaybe<Scalars['Int']>;
  properties?: InputMaybe<Scalars['jsonb']>;
  reporterId?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  stateConfig?: InputMaybe<Scalars['jsonb']>;
  stateName?: InputMaybe<Scalars['String']>;
  stateTemplate?: InputMaybe<Scalars['String']>;
  stateValues?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  statusConfig?: InputMaybe<Scalars['jsonb']>;
  statusName?: InputMaybe<Scalars['String']>;
  statusTemplate?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  titleTemplate?: InputMaybe<Scalars['String']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
  type?: InputMaybe<Scalars['String']>;
  typeName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userByCreatorid?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userByReporterid?: InputMaybe<User_Obj_Rel_Insert_Input>;
  values?: InputMaybe<Scalars['jsonb']>;
};

/** order by max() on columns of table "Task" */
export type Task_Max_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  cta?: InputMaybe<Order_By>;
  ctaName?: InputMaybe<Order_By>;
  ctaTemplate?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  descriptionTemplate?: InputMaybe<Order_By>;
  dueDate?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  notificationTemplate?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  stateName?: InputMaybe<Order_By>;
  stateTemplate?: InputMaybe<Order_By>;
  stateValues?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  statusName?: InputMaybe<Order_By>;
  statusTemplate?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  titleTemplate?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  typeName?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Task" */
export type Task_Min_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  cta?: InputMaybe<Order_By>;
  ctaName?: InputMaybe<Order_By>;
  ctaTemplate?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  descriptionTemplate?: InputMaybe<Order_By>;
  dueDate?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  notificationTemplate?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  stateName?: InputMaybe<Order_By>;
  stateTemplate?: InputMaybe<Order_By>;
  stateValues?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  statusName?: InputMaybe<Order_By>;
  statusTemplate?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  titleTemplate?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  typeName?: InputMaybe<Order_By>;
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
  Form?: InputMaybe<Form_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  Project?: InputMaybe<Project_Order_By>;
  Task?: InputMaybe<Task_Order_By>;
  TaskDefinition?: InputMaybe<TaskDefinition_Order_By>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  Team?: InputMaybe<Team_Order_By>;
  Triggers_aggregate?: InputMaybe<Trigger_Aggregate_Order_By>;
  User?: InputMaybe<User_Order_By>;
  assigneeId?: InputMaybe<Order_By>;
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  cta?: InputMaybe<Order_By>;
  ctaConfig?: InputMaybe<Order_By>;
  ctaName?: InputMaybe<Order_By>;
  ctaTemplate?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  descriptionTemplate?: InputMaybe<Order_By>;
  dueDate?: InputMaybe<Order_By>;
  formConfig?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  machineConfig?: InputMaybe<Order_By>;
  notificationConfig?: InputMaybe<Order_By>;
  notificationTemplate?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  processConfig?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  properties?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  stateConfig?: InputMaybe<Order_By>;
  stateName?: InputMaybe<Order_By>;
  stateTemplate?: InputMaybe<Order_By>;
  stateValues?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  statusConfig?: InputMaybe<Order_By>;
  statusName?: InputMaybe<Order_By>;
  statusTemplate?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  titleTemplate?: InputMaybe<Order_By>;
  triggerConfig?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  typeName?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userByCreatorid?: InputMaybe<User_Order_By>;
  userByReporterid?: InputMaybe<User_Order_By>;
  values?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Task */
export type Task_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Task_Prepend_Input = {
  config?: InputMaybe<Scalars['jsonb']>;
  ctaConfig?: InputMaybe<Scalars['jsonb']>;
  formConfig?: InputMaybe<Scalars['jsonb']>;
  machineConfig?: InputMaybe<Scalars['jsonb']>;
  notificationConfig?: InputMaybe<Scalars['jsonb']>;
  processConfig?: InputMaybe<Scalars['jsonb']>;
  properties?: InputMaybe<Scalars['jsonb']>;
  stateConfig?: InputMaybe<Scalars['jsonb']>;
  statusConfig?: InputMaybe<Scalars['jsonb']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
  values?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "Task" */
export enum Task_Select_Column {
  /** column name */
  ASSIGNEEID = 'assigneeId',
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  CTA = 'cta',
  /** column name */
  CTACONFIG = 'ctaConfig',
  /** column name */
  CTANAME = 'ctaName',
  /** column name */
  CTATEMPLATE = 'ctaTemplate',
  /** column name */
  DEFINITIONID = 'definitionId',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  DESCRIPTIONTEMPLATE = 'descriptionTemplate',
  /** column name */
  DUEDATE = 'dueDate',
  /** column name */
  FORMCONFIG = 'formConfig',
  /** column name */
  FORMID = 'formId',
  /** column name */
  ID = 'id',
  /** column name */
  ISACTIVE = 'isActive',
  /** column name */
  KEY = 'key',
  /** column name */
  MACHINECONFIG = 'machineConfig',
  /** column name */
  NOTIFICATIONCONFIG = 'notificationConfig',
  /** column name */
  NOTIFICATIONTEMPLATE = 'notificationTemplate',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PARENTID = 'parentId',
  /** column name */
  PRIORITY = 'priority',
  /** column name */
  PROCESSCONFIG = 'processConfig',
  /** column name */
  PROJECTID = 'projectId',
  /** column name */
  PROPERTIES = 'properties',
  /** column name */
  REPORTERID = 'reporterId',
  /** column name */
  STATE = 'state',
  /** column name */
  STATECONFIG = 'stateConfig',
  /** column name */
  STATENAME = 'stateName',
  /** column name */
  STATETEMPLATE = 'stateTemplate',
  /** column name */
  STATEVALUES = 'stateValues',
  /** column name */
  STATUS = 'status',
  /** column name */
  STATUSCONFIG = 'statusConfig',
  /** column name */
  STATUSNAME = 'statusName',
  /** column name */
  STATUSTEMPLATE = 'statusTemplate',
  /** column name */
  TEAMID = 'teamId',
  /** column name */
  TITLE = 'title',
  /** column name */
  TITLETEMPLATE = 'titleTemplate',
  /** column name */
  TRIGGERCONFIG = 'triggerConfig',
  /** column name */
  TYPE = 'type',
  /** column name */
  TYPENAME = 'typeName',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALUES = 'values'
}

/** select "Task_aggregate_bool_exp_bool_and_arguments_columns" columns of table "Task" */
export enum Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  ISACTIVE = 'isActive'
}

/** select "Task_aggregate_bool_exp_bool_or_arguments_columns" columns of table "Task" */
export enum Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  ISACTIVE = 'isActive'
}

/** input type for updating data in table "Task" */
export type Task_Set_Input = {
  assigneeId?: InputMaybe<Scalars['Int']>;
  config?: InputMaybe<Scalars['jsonb']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  cta?: InputMaybe<Scalars['String']>;
  ctaConfig?: InputMaybe<Scalars['jsonb']>;
  ctaName?: InputMaybe<Scalars['String']>;
  ctaTemplate?: InputMaybe<Scalars['String']>;
  definitionId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionTemplate?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['timestamp']>;
  formConfig?: InputMaybe<Scalars['jsonb']>;
  formId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  machineConfig?: InputMaybe<Scalars['jsonb']>;
  notificationConfig?: InputMaybe<Scalars['jsonb']>;
  notificationTemplate?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<Scalars['TaskPriority']>;
  processConfig?: InputMaybe<Scalars['jsonb']>;
  projectId?: InputMaybe<Scalars['Int']>;
  properties?: InputMaybe<Scalars['jsonb']>;
  reporterId?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  stateConfig?: InputMaybe<Scalars['jsonb']>;
  stateName?: InputMaybe<Scalars['String']>;
  stateTemplate?: InputMaybe<Scalars['String']>;
  stateValues?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  statusConfig?: InputMaybe<Scalars['jsonb']>;
  statusName?: InputMaybe<Scalars['String']>;
  statusTemplate?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  titleTemplate?: InputMaybe<Scalars['String']>;
  triggerConfig?: InputMaybe<Scalars['jsonb']>;
  type?: InputMaybe<Scalars['String']>;
  typeName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  values?: InputMaybe<Scalars['jsonb']>;
};

/** order by stddev() on columns of table "Task" */
export type Task_Stddev_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Task" */
export type Task_Stddev_Pop_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Task" */
export type Task_Stddev_Samp_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "Task" */
export type Task_Sum_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
};

/** update columns of table "Task" */
export enum Task_Update_Column {
  /** column name */
  ASSIGNEEID = 'assigneeId',
  /** column name */
  CONFIG = 'config',
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  CREATORID = 'creatorId',
  /** column name */
  CTA = 'cta',
  /** column name */
  CTACONFIG = 'ctaConfig',
  /** column name */
  CTANAME = 'ctaName',
  /** column name */
  CTATEMPLATE = 'ctaTemplate',
  /** column name */
  DEFINITIONID = 'definitionId',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  DESCRIPTIONTEMPLATE = 'descriptionTemplate',
  /** column name */
  DUEDATE = 'dueDate',
  /** column name */
  FORMCONFIG = 'formConfig',
  /** column name */
  FORMID = 'formId',
  /** column name */
  ID = 'id',
  /** column name */
  ISACTIVE = 'isActive',
  /** column name */
  KEY = 'key',
  /** column name */
  MACHINECONFIG = 'machineConfig',
  /** column name */
  NOTIFICATIONCONFIG = 'notificationConfig',
  /** column name */
  NOTIFICATIONTEMPLATE = 'notificationTemplate',
  /** column name */
  ORGANIZATIONID = 'organizationId',
  /** column name */
  PARENTID = 'parentId',
  /** column name */
  PRIORITY = 'priority',
  /** column name */
  PROCESSCONFIG = 'processConfig',
  /** column name */
  PROJECTID = 'projectId',
  /** column name */
  PROPERTIES = 'properties',
  /** column name */
  REPORTERID = 'reporterId',
  /** column name */
  STATE = 'state',
  /** column name */
  STATECONFIG = 'stateConfig',
  /** column name */
  STATENAME = 'stateName',
  /** column name */
  STATETEMPLATE = 'stateTemplate',
  /** column name */
  STATEVALUES = 'stateValues',
  /** column name */
  STATUS = 'status',
  /** column name */
  STATUSCONFIG = 'statusConfig',
  /** column name */
  STATUSNAME = 'statusName',
  /** column name */
  STATUSTEMPLATE = 'statusTemplate',
  /** column name */
  TEAMID = 'teamId',
  /** column name */
  TITLE = 'title',
  /** column name */
  TITLETEMPLATE = 'titleTemplate',
  /** column name */
  TRIGGERCONFIG = 'triggerConfig',
  /** column name */
  TYPE = 'type',
  /** column name */
  TYPENAME = 'typeName',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALUES = 'values'
}

export type Task_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Task_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Task_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Task_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Task_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Task_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Task_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Task_Set_Input>;
  /** filter the rows which have to be updated */
  where: Task_Bool_Exp;
};

/** order by var_pop() on columns of table "Task" */
export type Task_Var_Pop_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Task" */
export type Task_Var_Samp_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Task" */
export type Task_Variance_Order_By = {
  assigneeId?: InputMaybe<Order_By>;
  creatorId?: InputMaybe<Order_By>;
  definitionId?: InputMaybe<Order_By>;
  formId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  reporterId?: InputMaybe<Order_By>;
  teamId?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Order_By>;
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
  id?: InputMaybe<Int_Comparison_Exp>;
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
  id?: InputMaybe<Scalars['Int']>;
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
  id?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['Int'];
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
  id?: InputMaybe<Scalars['Int']>;
  managerId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by stddev() on columns of table "Team" */
export type Team_Stddev_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Team" */
export type Team_Stddev_Pop_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Team" */
export type Team_Stddev_Samp_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "Team" */
export type Team_Sum_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  /** filter the rows which have to be updated */
  where: Team_Bool_Exp;
};

/** order by var_pop() on columns of table "Team" */
export type Team_Var_Pop_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Team" */
export type Team_Var_Samp_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Team" */
export type Team_Variance_Order_By = {
  creatorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  managerId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "TriggerStatus". All fields are combined with logical 'AND'. */
export type TriggerStatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['TriggerStatus']>;
  _gt?: InputMaybe<Scalars['TriggerStatus']>;
  _gte?: InputMaybe<Scalars['TriggerStatus']>;
  _in?: InputMaybe<Array<Scalars['TriggerStatus']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['TriggerStatus']>;
  _lte?: InputMaybe<Scalars['TriggerStatus']>;
  _neq?: InputMaybe<Scalars['TriggerStatus']>;
  _nin?: InputMaybe<Array<Scalars['TriggerStatus']>>;
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
  value?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "Trigger" */
export type Trigger_Arr_Rel_Insert_Input = {
  data: Array<Trigger_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Trigger_On_Conflict>;
};

/** order by avg() on columns of table "Trigger" */
export type Trigger_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Trigger". All fields are combined with a logical 'AND'. */
export type Trigger_Bool_Exp = {
  Task?: InputMaybe<Task_Bool_Exp>;
  _and?: InputMaybe<Array<Trigger_Bool_Exp>>;
  _not?: InputMaybe<Trigger_Bool_Exp>;
  _or?: InputMaybe<Array<Trigger_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<TriggerStatus_Comparison_Exp>;
  taskId?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<TriggerType_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "Trigger" */
export enum Trigger_Constraint {
  /** unique or primary key constraint on columns "id" */
  TRIGGER_PKEY = 'Trigger_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Trigger_Delete_At_Path_Input = {
  value?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Trigger_Delete_Elem_Input = {
  value?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Trigger_Delete_Key_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "Trigger" */
export type Trigger_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  taskId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Trigger" */
export type Trigger_Insert_Input = {
  Task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['TriggerStatus']>;
  taskId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['TriggerType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['jsonb']>;
};

/** order by max() on columns of table "Trigger" */
export type Trigger_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Trigger" */
export type Trigger_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
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
  Task?: InputMaybe<Task_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Trigger */
export type Trigger_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Trigger_Prepend_Input = {
  value?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "Trigger" */
export enum Trigger_Select_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  KEY = 'key',
  /** column name */
  NAME = 'name',
  /** column name */
  STATUS = 'status',
  /** column name */
  TASKID = 'taskId',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "Trigger" */
export type Trigger_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['TriggerStatus']>;
  taskId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['TriggerType']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  value?: InputMaybe<Scalars['jsonb']>;
};

/** order by stddev() on columns of table "Trigger" */
export type Trigger_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Trigger" */
export type Trigger_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Trigger" */
export type Trigger_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "Trigger" */
export type Trigger_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** update columns of table "Trigger" */
export enum Trigger_Update_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  KEY = 'key',
  /** column name */
  NAME = 'name',
  /** column name */
  STATUS = 'status',
  /** column name */
  TASKID = 'taskId',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  VALUE = 'value'
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
  /** filter the rows which have to be updated */
  where: Trigger_Bool_Exp;
};

/** order by var_pop() on columns of table "Trigger" */
export type Trigger_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Trigger" */
export type Trigger_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Trigger" */
export type Trigger_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
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
  /** filter the rows which have to be updated */
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

export type UserSetting_Aggregate_Bool_Exp = {
  count?: InputMaybe<UserSetting_Aggregate_Bool_Exp_Count>;
};

export type UserSetting_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<UserSetting_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<UserSetting_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "UserSetting" */
export type UserSetting_Aggregate_Order_By = {
  avg?: InputMaybe<UserSetting_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserSetting_Max_Order_By>;
  min?: InputMaybe<UserSetting_Min_Order_By>;
  stddev?: InputMaybe<UserSetting_Stddev_Order_By>;
  stddev_pop?: InputMaybe<UserSetting_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<UserSetting_Stddev_Samp_Order_By>;
  sum?: InputMaybe<UserSetting_Sum_Order_By>;
  var_pop?: InputMaybe<UserSetting_Var_Pop_Order_By>;
  var_samp?: InputMaybe<UserSetting_Var_Samp_Order_By>;
  variance?: InputMaybe<UserSetting_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type UserSetting_Append_Input = {
  value?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "UserSetting" */
export type UserSetting_Arr_Rel_Insert_Input = {
  data: Array<UserSetting_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserSetting_On_Conflict>;
};

/** order by avg() on columns of table "UserSetting" */
export type UserSetting_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "UserSetting". All fields are combined with a logical 'AND'. */
export type UserSetting_Bool_Exp = {
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<UserSetting_Bool_Exp>>;
  _not?: InputMaybe<UserSetting_Bool_Exp>;
  _or?: InputMaybe<Array<UserSetting_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "UserSetting" */
export enum UserSetting_Constraint {
  /** unique or primary key constraint on columns "id" */
  USERSETTING_PKEY = 'UserSetting_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type UserSetting_Delete_At_Path_Input = {
  value?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type UserSetting_Delete_Elem_Input = {
  value?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type UserSetting_Delete_Key_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "UserSetting" */
export type UserSetting_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "UserSetting" */
export type UserSetting_Insert_Input = {
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['jsonb']>;
};

/** order by max() on columns of table "UserSetting" */
export type UserSetting_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "UserSetting" */
export type UserSetting_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** on_conflict condition type for table "UserSetting" */
export type UserSetting_On_Conflict = {
  constraint: UserSetting_Constraint;
  update_columns?: Array<UserSetting_Update_Column>;
  where?: InputMaybe<UserSetting_Bool_Exp>;
};

/** Ordering options when selecting data from "UserSetting". */
export type UserSetting_Order_By = {
  User?: InputMaybe<User_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: UserSetting */
export type UserSetting_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type UserSetting_Prepend_Input = {
  value?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "UserSetting" */
export enum UserSetting_Select_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  KEY = 'key',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  USERID = 'userId',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "UserSetting" */
export type UserSetting_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['jsonb']>;
};

/** order by stddev() on columns of table "UserSetting" */
export type UserSetting_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "UserSetting" */
export type UserSetting_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "UserSetting" */
export type UserSetting_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "UserSetting" */
export type UserSetting_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "UserSetting" */
export enum UserSetting_Update_Column {
  /** column name */
  CREATEDAT = 'createdAt',
  /** column name */
  ID = 'id',
  /** column name */
  KEY = 'key',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  USERID = 'userId',
  /** column name */
  VALUE = 'value'
}

export type UserSetting_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<UserSetting_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<UserSetting_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<UserSetting_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<UserSetting_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserSetting_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<UserSetting_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetting_Set_Input>;
  /** filter the rows which have to be updated */
  where: UserSetting_Bool_Exp;
};

/** order by var_pop() on columns of table "UserSetting" */
export type UserSetting_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "UserSetting" */
export type UserSetting_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "UserSetting" */
export type UserSetting_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
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
  avatarId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Comments?: InputMaybe<Comment_Bool_Exp>;
  Comments_aggregate?: InputMaybe<Comment_Aggregate_Bool_Exp>;
  EventLogs?: InputMaybe<EventLog_Bool_Exp>;
  EventLogs_aggregate?: InputMaybe<EventLog_Aggregate_Bool_Exp>;
  File?: InputMaybe<File_Bool_Exp>;
  MemberOnProjects?: InputMaybe<MemberOnProjects_Bool_Exp>;
  MemberOnProjects_aggregate?: InputMaybe<MemberOnProjects_Aggregate_Bool_Exp>;
  MemberOnTeams?: InputMaybe<MemberOnTeams_Bool_Exp>;
  MemberOnTeams_aggregate?: InputMaybe<MemberOnTeams_Aggregate_Bool_Exp>;
  Organization?: InputMaybe<Organization_Bool_Exp>;
  Posts?: InputMaybe<Post_Bool_Exp>;
  Posts_aggregate?: InputMaybe<Post_Aggregate_Bool_Exp>;
  Projects?: InputMaybe<Project_Bool_Exp>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Bool_Exp>;
  Tasks?: InputMaybe<Task_Bool_Exp>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  Teams?: InputMaybe<Team_Bool_Exp>;
  Teams_aggregate?: InputMaybe<Team_Aggregate_Bool_Exp>;
  UserPermissions?: InputMaybe<UserPermission_Bool_Exp>;
  UserPermissions_aggregate?: InputMaybe<UserPermission_Aggregate_Bool_Exp>;
  UserSettings?: InputMaybe<UserSetting_Bool_Exp>;
  UserSettings_aggregate?: InputMaybe<UserSetting_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  avatarId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Int_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  projectsByManagerid?: InputMaybe<Project_Bool_Exp>;
  projectsByManagerid_aggregate?: InputMaybe<Project_Aggregate_Bool_Exp>;
  projectsByReporterid?: InputMaybe<Project_Bool_Exp>;
  projectsByReporterid_aggregate?: InputMaybe<Project_Aggregate_Bool_Exp>;
  role?: InputMaybe<Role_Comparison_Exp>;
  tasksByCreatorid?: InputMaybe<Task_Bool_Exp>;
  tasksByCreatorid_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  tasksByReporterid?: InputMaybe<Task_Bool_Exp>;
  tasksByReporterid_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
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
  avatarId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  EventLogs?: InputMaybe<EventLog_Arr_Rel_Insert_Input>;
  File?: InputMaybe<File_Obj_Rel_Insert_Input>;
  MemberOnProjects?: InputMaybe<MemberOnProjects_Arr_Rel_Insert_Input>;
  MemberOnTeams?: InputMaybe<MemberOnTeams_Arr_Rel_Insert_Input>;
  Organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  Posts?: InputMaybe<Post_Arr_Rel_Insert_Input>;
  Projects?: InputMaybe<Project_Arr_Rel_Insert_Input>;
  Tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  Teams?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  UserPermissions?: InputMaybe<UserPermission_Arr_Rel_Insert_Input>;
  UserSettings?: InputMaybe<UserSetting_Arr_Rel_Insert_Input>;
  avatarId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastname?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  projectsByManagerid?: InputMaybe<Project_Arr_Rel_Insert_Input>;
  projectsByReporterid?: InputMaybe<Project_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['Role']>;
  tasksByCreatorid?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  tasksByReporterid?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  teamsByManagerid?: InputMaybe<Team_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  avatarId?: InputMaybe<Order_By>;
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
  avatarId?: InputMaybe<Order_By>;
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
  File?: InputMaybe<File_Order_By>;
  MemberOnProjects_aggregate?: InputMaybe<MemberOnProjects_Aggregate_Order_By>;
  MemberOnTeams_aggregate?: InputMaybe<MemberOnTeams_Aggregate_Order_By>;
  Organization?: InputMaybe<Organization_Order_By>;
  Posts_aggregate?: InputMaybe<Post_Aggregate_Order_By>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  Tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  Teams_aggregate?: InputMaybe<Team_Aggregate_Order_By>;
  UserPermissions_aggregate?: InputMaybe<UserPermission_Aggregate_Order_By>;
  UserSettings_aggregate?: InputMaybe<UserSetting_Aggregate_Order_By>;
  avatarId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  projectsByManagerid_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  projectsByReporterid_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  tasksByCreatorid_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  tasksByReporterid_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
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
  AVATARID = 'avatarId',
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
  avatarId?: InputMaybe<Scalars['Int']>;
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
  avatarId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "User" */
export type User_Stddev_Pop_Order_By = {
  avatarId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "User" */
export type User_Stddev_Samp_Order_By = {
  avatarId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "User" */
export type User_Sum_Order_By = {
  avatarId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  AVATARID = 'avatarId',
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
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** order by var_pop() on columns of table "User" */
export type User_Var_Pop_Order_By = {
  avatarId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "User" */
export type User_Var_Samp_Order_By = {
  avatarId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "User" */
export type User_Variance_Order_By = {
  avatarId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "Visibility". All fields are combined with logical 'AND'. */
export type Visibility_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Visibility']>;
  _gt?: InputMaybe<Scalars['Visibility']>;
  _gte?: InputMaybe<Scalars['Visibility']>;
  _in?: InputMaybe<Array<Scalars['Visibility']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Visibility']>;
  _lte?: InputMaybe<Scalars['Visibility']>;
  _neq?: InputMaybe<Scalars['Visibility']>;
  _nin?: InputMaybe<Array<Scalars['Visibility']>>;
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
  /** filter the rows which have to be updated */
  where: _Prisma_Migrations_Bool_Exp;
};

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

export type SigninMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type SigninMutation = { __typename: 'mutation_root', signin: { __typename: 'LoginAuth', accessToken: any, user: { __typename: 'LoginUser', id: string, email: string, firstname: string | null, lastname: string | null } } };

export type UpdateInformationUserMutationVariables = Exact<{
  id: Scalars['Int'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
}>;


export type UpdateInformationUserMutation = { __typename: 'mutation_root', update_User_by_pk: { __typename: 'User', lastname: string | null, firstname: string | null } | null };

export type UserByPkQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserByPkQuery = { __typename: 'query_root', node: { __typename: 'ActivityDefinition' } | { __typename: 'Comment' } | { __typename: 'EventLog' } | { __typename: 'File' } | { __typename: 'Form' } | { __typename: 'MemberOnProjects' } | { __typename: 'MemberOnTeams' } | { __typename: 'Organization' } | { __typename: 'Permission' } | { __typename: 'PermissionGroup' } | { __typename: 'Post' } | { __typename: 'Project' } | { __typename: 'ProjectSettings' } | { __typename: 'Resource' } | { __typename: 'ResourceItem' } | { __typename: 'Settings' } | { __typename: 'Task' } | { __typename: 'TaskBoard' } | { __typename: 'TaskBoardSettings' } | { __typename: 'TaskDefinition' } | { __typename: 'TaskDefinitionActivityDefinition' } | { __typename: 'Team' } | { __typename: 'Trigger' } | { __typename: 'User', id: string, email: string, role: any, lastname: string | null, firstname: string | null, organizationId: number, MemberOnTeams: Array<{ __typename: 'MemberOnTeams', teamId: number, userId: number, Team: { __typename: 'Team', id: string, name: string, description: string, organizationId: number }, User: { __typename: 'User', id: string } }>, Organization: { __typename: 'Organization', id: string, name: string, description: string }, UserPermissions: Array<{ __typename: 'UserPermission', id: string, permissionId: number, userId: number, Permission: { __typename: 'Permission', id: string, code: string, permissionGroupId: number } }> } | { __typename: 'UserPermission' } | { __typename: 'UserSetting' } | { __typename: '_prisma_migrations' } | null };

export type GetInformationUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetInformationUserQuery = { __typename: 'query_root', node: { __typename: 'ActivityDefinition' } | { __typename: 'Comment' } | { __typename: 'EventLog' } | { __typename: 'File' } | { __typename: 'Form' } | { __typename: 'MemberOnProjects' } | { __typename: 'MemberOnTeams' } | { __typename: 'Organization' } | { __typename: 'Permission' } | { __typename: 'PermissionGroup' } | { __typename: 'Post' } | { __typename: 'Project' } | { __typename: 'ProjectSettings' } | { __typename: 'Resource' } | { __typename: 'ResourceItem' } | { __typename: 'Settings' } | { __typename: 'Task' } | { __typename: 'TaskBoard' } | { __typename: 'TaskBoardSettings' } | { __typename: 'TaskDefinition' } | { __typename: 'TaskDefinitionActivityDefinition' } | { __typename: 'Team' } | { __typename: 'Trigger' } | { __typename: 'User', id: string, email: string, firstname: string | null, lastname: string | null } | { __typename: 'UserPermission' } | { __typename: 'UserSetting' } | { __typename: '_prisma_migrations' } | null };

export type GetEventLogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventLogsQuery = { __typename: 'query_root', EventLog_connection: { __typename: 'EventLogConnection', edges: Array<{ __typename: 'EventLogEdge', node: { __typename: 'EventLog', createdAt: any, id: string, organizationId: number, userId: number | null, taskId: number | null, content: string | null, intent: string | null, domain: string | null, action: string | null, User: { __typename: 'User', email: string } | null, Organization: { __typename: 'Organization', name: string } } }> } };

export type CreateTaskMutationVariables = Exact<{
  values?: InputMaybe<Scalars['jsonb']>;
  definitionId: Scalars['Int'];
  creatorId: Scalars['Int'];
  assigneeId: Scalars['Int'];
  organizationId: Scalars['Int'];
  teamId: Scalars['Int'];
  dueDate: Scalars['timestamp'];
  title: Scalars['String'];
}>;


export type CreateTaskMutation = { __typename: 'mutation_root', insert_Task: { __typename: 'Task_mutation_response', returning: Array<{ __typename: 'Task', id: string }> } | null };

export type InsertCommentMutationVariables = Exact<{
  content: Scalars['String'];
  taskId: Scalars['Int'];
  creatorId: Scalars['Int'];
}>;


export type InsertCommentMutation = { __typename: 'mutation_root', insert_Comment: { __typename: 'Comment_mutation_response', returning: Array<{ __typename: 'Comment', id: string, taskId: number, content: string, creatorId: number }> } | null };

export type SubmitTaskMutationVariables = Exact<{
  value: Scalars['json'];
  formId: Scalars['Int'];
  taskId: Scalars['Int'];
}>;


export type SubmitTaskMutation = { __typename: 'mutation_root', submitTask: { __typename: 'SubmitTaskOutput', submitTask: { __typename: 'SubmitTask', id: string | null, name: string | null, code: string | null, description: string | null } | null } };

export type UpdateAssigneeMutationVariables = Exact<{
  _eq: Scalars['Int'];
  assigneeId: Scalars['Int'];
}>;


export type UpdateAssigneeMutation = { __typename: 'mutation_root', update_Task: { __typename: 'Task_mutation_response', affected_rows: number, returning: Array<{ __typename: 'Task', assigneeId: number | null, id: string }> } | null };

export type TaskEventLogFragmentFragment = { __typename: 'EventLog', createdAt: any, id: string, organizationId: number, userId: number | null, taskId: number | null, content: string | null, intent: string | null, domain: string | null, action: string | null, User: { __typename: 'User', id: string, email: string, lastname: string | null, firstname: string | null, avatarId: number | null } | null };

export type GetTaskDefinitionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaskDefinitionQuery = { __typename: 'query_root', TaskDefinition_connection: { __typename: 'TaskDefinitionConnection', edges: Array<{ __typename: 'TaskDefinitionEdge', node: { __typename: 'TaskDefinition', id: string, organizationId: number, title: string, titleTemplate: string | null, description: string, createdAt: any, Form: { __typename: 'Form', id: string, code: string } | null } }> } };

export type FormFragmentFragment = { __typename: 'Form', id: string, name: string, schema: any, code: string };

export type GetFormSchemaQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetFormSchemaQuery = { __typename: 'query_root', node: { __typename: 'ActivityDefinition' } | { __typename: 'Comment' } | { __typename: 'EventLog' } | { __typename: 'File' } | { __typename: 'Form', id: string, name: string, schema: any, code: string } | { __typename: 'MemberOnProjects' } | { __typename: 'MemberOnTeams' } | { __typename: 'Organization' } | { __typename: 'Permission' } | { __typename: 'PermissionGroup' } | { __typename: 'Post' } | { __typename: 'Project' } | { __typename: 'ProjectSettings' } | { __typename: 'Resource' } | { __typename: 'ResourceItem' } | { __typename: 'Settings' } | { __typename: 'Task' } | { __typename: 'TaskBoard' } | { __typename: 'TaskBoardSettings' } | { __typename: 'TaskDefinition' } | { __typename: 'TaskDefinitionActivityDefinition' } | { __typename: 'Team' } | { __typename: 'Trigger' } | { __typename: 'User' } | { __typename: 'UserPermission' } | { __typename: 'UserSetting' } | { __typename: '_prisma_migrations' } | null };

export type GetResourceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetResourceQuery = { __typename: 'query_root', Resource_connection: { __typename: 'ResourceConnection', edges: Array<{ __typename: 'ResourceEdge', node: { __typename: 'Resource', id: string, name: string, organizationId: number, description: string, code: string } }> } };

export type GetResourceItemsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetResourceItemsQuery = { __typename: 'query_root', node: { __typename: 'ActivityDefinition' } | { __typename: 'Comment' } | { __typename: 'EventLog' } | { __typename: 'File' } | { __typename: 'Form' } | { __typename: 'MemberOnProjects' } | { __typename: 'MemberOnTeams' } | { __typename: 'Organization' } | { __typename: 'Permission' } | { __typename: 'PermissionGroup' } | { __typename: 'Post' } | { __typename: 'Project' } | { __typename: 'ProjectSettings' } | { __typename: 'Resource', id: string, name: string, organizationId: number, description: string, code: string, ResourceItems: Array<{ __typename: 'ResourceItem', id: string, name: string, description: string, code: string }> } | { __typename: 'ResourceItem' } | { __typename: 'Settings' } | { __typename: 'Task' } | { __typename: 'TaskBoard' } | { __typename: 'TaskBoardSettings' } | { __typename: 'TaskDefinition' } | { __typename: 'TaskDefinitionActivityDefinition' } | { __typename: 'Team' } | { __typename: 'Trigger' } | { __typename: 'User' } | { __typename: 'UserPermission' } | { __typename: 'UserSetting' } | { __typename: '_prisma_migrations' } | null };

export type ResourceItemFragmentFragment = { __typename: 'ResourceItem', id: string, name: string, description: string, code: string };

export type GetTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTasksQuery = { __typename: 'query_root', Task_connection: { __typename: 'TaskConnection', edges: Array<{ __typename: 'TaskEdge', node: { __typename: 'Task', id: string, dueDate: any | null, description: string, definitionId: number, creatorId: number, organizationId: number, parentId: number | null, priority: any, status: string, teamId: number | null, title: string, assigneeId: number | null, state: string, User: { __typename: 'User', id: string, firstname: string | null, lastname: string | null, email: string, organizationId: number, role: any } | null } }> } };

export type TaskDetailFragmemtFragment = { __typename: 'Task', id: string, assigneeId: number | null, creatorId: number, definitionId: number, description: string, dueDate: any | null, organizationId: number, status: string, teamId: number | null, title: string, values: any | null, parentId: number | null, priority: any, state: string, userByCreatorid: { __typename: 'User', id: string, email: string, firstname: string | null, lastname: string | null, organizationId: number, role: any }, Tasks: Array<{ __typename: 'Task', id: string, dueDate: any | null, assigneeId: number | null, description: string, definitionId: number, creatorId: number, organizationId: number, stateName: string, status: string, priority: any, values: any | null, teamId: number | null, state: string, formId: number | null, parentId: number | null, title: string, isActive: boolean, Task: { __typename: 'Task', id: string } | null, Form: { __typename: 'Form', id: string, values: any | null } | null, userByCreatorid: { __typename: 'User', id: string, email: string, firstname: string | null, lastname: string | null, organizationId: number, role: any }, userByReporterid: { __typename: 'User', id: string, email: string, firstname: string | null, lastname: string | null, organizationId: number, role: any } | null, User: { __typename: 'User', id: string, firstname: string | null, lastname: string | null, email: string, avatarId: number | null } | null }>, Form: { __typename: 'Form', id: string } | null, TaskDefinition: { __typename: 'TaskDefinition', id: string }, EventLogs: Array<{ __typename: 'EventLog', createdAt: any, id: string, organizationId: number, userId: number | null, taskId: number | null, content: string | null, intent: string | null, domain: string | null, action: string | null, User: { __typename: 'User', id: string, email: string, lastname: string | null, firstname: string | null, avatarId: number | null } | null }> };

export type TaskByPkQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TaskByPkQuery = { __typename: 'query_root', node: { __typename: 'ActivityDefinition' } | { __typename: 'Comment' } | { __typename: 'EventLog' } | { __typename: 'File' } | { __typename: 'Form' } | { __typename: 'MemberOnProjects' } | { __typename: 'MemberOnTeams' } | { __typename: 'Organization' } | { __typename: 'Permission' } | { __typename: 'PermissionGroup' } | { __typename: 'Post' } | { __typename: 'Project' } | { __typename: 'ProjectSettings' } | { __typename: 'Resource' } | { __typename: 'ResourceItem' } | { __typename: 'Settings' } | { __typename: 'Task', id: string, assigneeId: number | null, creatorId: number, definitionId: number, description: string, dueDate: any | null, organizationId: number, status: string, teamId: number | null, title: string, values: any | null, parentId: number | null, priority: any, state: string, userByCreatorid: { __typename: 'User', id: string, email: string, firstname: string | null, lastname: string | null, organizationId: number, role: any }, Tasks: Array<{ __typename: 'Task', id: string, dueDate: any | null, assigneeId: number | null, description: string, definitionId: number, creatorId: number, organizationId: number, stateName: string, status: string, priority: any, values: any | null, teamId: number | null, state: string, formId: number | null, parentId: number | null, title: string, isActive: boolean, Task: { __typename: 'Task', id: string } | null, Form: { __typename: 'Form', id: string, values: any | null } | null, userByCreatorid: { __typename: 'User', id: string, email: string, firstname: string | null, lastname: string | null, organizationId: number, role: any }, userByReporterid: { __typename: 'User', id: string, email: string, firstname: string | null, lastname: string | null, organizationId: number, role: any } | null, User: { __typename: 'User', id: string, firstname: string | null, lastname: string | null, email: string, avatarId: number | null } | null }>, Form: { __typename: 'Form', id: string } | null, TaskDefinition: { __typename: 'TaskDefinition', id: string }, EventLogs: Array<{ __typename: 'EventLog', createdAt: any, id: string, organizationId: number, userId: number | null, taskId: number | null, content: string | null, intent: string | null, domain: string | null, action: string | null, User: { __typename: 'User', id: string, email: string, lastname: string | null, firstname: string | null, avatarId: number | null } | null }> } | { __typename: 'TaskBoard' } | { __typename: 'TaskBoardSettings' } | { __typename: 'TaskDefinition' } | { __typename: 'TaskDefinitionActivityDefinition' } | { __typename: 'Team' } | { __typename: 'Trigger' } | { __typename: 'User' } | { __typename: 'UserPermission' } | { __typename: 'UserSetting' } | { __typename: '_prisma_migrations' } | null };

export type TaskFragmentFragment = { __typename: 'Task', id: string, dueDate: any | null, assigneeId: number | null, description: string, definitionId: number, creatorId: number, organizationId: number, stateName: string, status: string, priority: any, values: any | null, teamId: number | null, state: string, formId: number | null, parentId: number | null, title: string, isActive: boolean, Task: { __typename: 'Task', id: string } | null, Form: { __typename: 'Form', id: string, values: any | null } | null, userByCreatorid: { __typename: 'User', id: string, email: string, firstname: string | null, lastname: string | null, organizationId: number, role: any }, userByReporterid: { __typename: 'User', id: string, email: string, firstname: string | null, lastname: string | null, organizationId: number, role: any } | null, User: { __typename: 'User', id: string, firstname: string | null, lastname: string | null, email: string, avatarId: number | null } | null };

export type TaskBoardFragmentFragment = { __typename: 'TaskBoard', code: string, id: string, name: string, taskDefinitionId: number, viewConfig: any, viewType: any };

export type GetCommentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommentQuery = { __typename: 'query_root', Comment_connection: { __typename: 'CommentConnection', edges: Array<{ __typename: 'CommentEdge', node: { __typename: 'Comment', id: string, taskId: number, creatorId: number, content: string, createdAt: any, updatedAt: any, User: { __typename: 'User', id: string, email: string, lastname: string | null, firstname: string | null, avatarId: number | null }, Task: { __typename: 'Task', id: string } } }> } };

export type GetMyTasksQueryVariables = Exact<{
  _eq: Scalars['Int'];
}>;


export type GetMyTasksQuery = { __typename: 'query_root', Task_connection: { __typename: 'TaskConnection', edges: Array<{ __typename: 'TaskEdge', node: { __typename: 'Task', id: string, dueDate: any | null, description: string, definitionId: number, creatorId: number, organizationId: number, parentId: number | null, priority: any, status: string, teamId: number | null, title: string, state: string, User: { __typename: 'User', id: string, firstname: string | null, lastname: string | null, email: string, organizationId: number, role: any } | null } }> } };

export type GetViewConfigQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetViewConfigQuery = { __typename: 'query_root', TaskBoard_connection: { __typename: 'TaskBoardConnection', edges: Array<{ __typename: 'TaskBoardEdge', node: { __typename: 'TaskBoard', code: string, id: string, name: string, taskDefinitionId: number, viewConfig: any, viewType: any } }> } };

export type GetTaskByBoardQueryVariables = Exact<{
  definitionId: Scalars['Int'];
}>;


export type GetTaskByBoardQuery = { __typename: 'query_root', Task_connection: { __typename: 'TaskConnection', edges: Array<{ __typename: 'TaskEdge', node: { __typename: 'Task', id: string, dueDate: any | null, description: string, definitionId: number, creatorId: number, organizationId: number, parentId: number | null, priority: any, status: string, teamId: number | null, title: string, assigneeId: number | null, state: string, User: { __typename: 'User', id: string, firstname: string | null, lastname: string | null, email: string, organizationId: number, role: any } | null } }> } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename: 'query_root', User_connection: { __typename: 'UserConnection', edges: Array<{ __typename: 'UserEdge', node: { __typename: 'User', email: string, firstname: string | null, id: string, lastname: string | null, role: any } }> } };
