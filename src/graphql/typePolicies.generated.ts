/* eslint-disable */
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ActionKeySpecifier = ('EventLogs' | 'EventLogs_aggregate' | 'EventLogs_connection' | 'action' | 'content' | 'createdAt' | 'domain' | 'id' | 'intent' | 'type' | ActionKeySpecifier)[];
export type ActionFieldPolicy = {
	EventLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLogs_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLogs_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	intent?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActionConnectionKeySpecifier = ('edges' | 'pageInfo' | ActionConnectionKeySpecifier)[];
export type ActionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActionEdgeKeySpecifier = ('cursor' | 'node' | ActionEdgeKeySpecifier)[];
export type ActionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Action_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Action_mutation_responseKeySpecifier)[];
export type Action_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityKeySpecifier = ('TaskDefinitions' | 'TaskDefinitions_aggregate' | 'TaskDefinitions_connection' | 'Triggers' | 'Triggers_aggregate' | 'Triggers_connection' | 'Workflow' | 'config' | 'createdAt' | 'description' | 'id' | 'name' | 'updatedAt' | 'workflowId' | ActivityKeySpecifier)[];
export type ActivityFieldPolicy = {
	TaskDefinitions?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Triggers?: FieldPolicy<any> | FieldReadFunction<any>,
	Triggers_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Triggers_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Workflow?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityConnectionKeySpecifier = ('edges' | 'pageInfo' | ActivityConnectionKeySpecifier)[];
export type ActivityConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityEdgeKeySpecifier = ('cursor' | 'node' | ActivityEdgeKeySpecifier)[];
export type ActivityEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_aggregateKeySpecifier = ('aggregate' | 'nodes' | Activity_aggregateKeySpecifier)[];
export type Activity_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Activity_aggregate_fieldsKeySpecifier)[];
export type Activity_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_avg_fieldsKeySpecifier = ('id' | 'workflowId' | Activity_avg_fieldsKeySpecifier)[];
export type Activity_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_max_fieldsKeySpecifier = ('createdAt' | 'description' | 'id' | 'name' | 'updatedAt' | 'workflowId' | Activity_max_fieldsKeySpecifier)[];
export type Activity_max_fieldsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_min_fieldsKeySpecifier = ('createdAt' | 'description' | 'id' | 'name' | 'updatedAt' | 'workflowId' | Activity_min_fieldsKeySpecifier)[];
export type Activity_min_fieldsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Activity_mutation_responseKeySpecifier)[];
export type Activity_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_stddev_fieldsKeySpecifier = ('id' | 'workflowId' | Activity_stddev_fieldsKeySpecifier)[];
export type Activity_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_stddev_pop_fieldsKeySpecifier = ('id' | 'workflowId' | Activity_stddev_pop_fieldsKeySpecifier)[];
export type Activity_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_stddev_samp_fieldsKeySpecifier = ('id' | 'workflowId' | Activity_stddev_samp_fieldsKeySpecifier)[];
export type Activity_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_sum_fieldsKeySpecifier = ('id' | 'workflowId' | Activity_sum_fieldsKeySpecifier)[];
export type Activity_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_var_pop_fieldsKeySpecifier = ('id' | 'workflowId' | Activity_var_pop_fieldsKeySpecifier)[];
export type Activity_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_var_samp_fieldsKeySpecifier = ('id' | 'workflowId' | Activity_var_samp_fieldsKeySpecifier)[];
export type Activity_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Activity_variance_fieldsKeySpecifier = ('id' | 'workflowId' | Activity_variance_fieldsKeySpecifier)[];
export type Activity_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('Task' | 'User' | 'content' | 'createdAt' | 'creatorId' | 'id' | 'taskId' | 'updatedAt' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentConnectionKeySpecifier = ('edges' | 'pageInfo' | CommentConnectionKeySpecifier)[];
export type CommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentEdgeKeySpecifier = ('cursor' | 'node' | CommentEdgeKeySpecifier)[];
export type CommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_aggregateKeySpecifier = ('aggregate' | 'nodes' | Comment_aggregateKeySpecifier)[];
export type Comment_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Comment_aggregate_fieldsKeySpecifier)[];
export type Comment_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_avg_fieldsKeySpecifier = ('creatorId' | 'id' | 'taskId' | Comment_avg_fieldsKeySpecifier)[];
export type Comment_avg_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_max_fieldsKeySpecifier = ('content' | 'createdAt' | 'creatorId' | 'id' | 'taskId' | 'updatedAt' | Comment_max_fieldsKeySpecifier)[];
export type Comment_max_fieldsFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_min_fieldsKeySpecifier = ('content' | 'createdAt' | 'creatorId' | 'id' | 'taskId' | 'updatedAt' | Comment_min_fieldsKeySpecifier)[];
export type Comment_min_fieldsFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Comment_mutation_responseKeySpecifier)[];
export type Comment_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_stddev_fieldsKeySpecifier = ('creatorId' | 'id' | 'taskId' | Comment_stddev_fieldsKeySpecifier)[];
export type Comment_stddev_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_stddev_pop_fieldsKeySpecifier = ('creatorId' | 'id' | 'taskId' | Comment_stddev_pop_fieldsKeySpecifier)[];
export type Comment_stddev_pop_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_stddev_samp_fieldsKeySpecifier = ('creatorId' | 'id' | 'taskId' | Comment_stddev_samp_fieldsKeySpecifier)[];
export type Comment_stddev_samp_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_sum_fieldsKeySpecifier = ('creatorId' | 'id' | 'taskId' | Comment_sum_fieldsKeySpecifier)[];
export type Comment_sum_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_var_pop_fieldsKeySpecifier = ('creatorId' | 'id' | 'taskId' | Comment_var_pop_fieldsKeySpecifier)[];
export type Comment_var_pop_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_var_samp_fieldsKeySpecifier = ('creatorId' | 'id' | 'taskId' | Comment_var_samp_fieldsKeySpecifier)[];
export type Comment_var_samp_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Comment_variance_fieldsKeySpecifier = ('creatorId' | 'id' | 'taskId' | Comment_variance_fieldsKeySpecifier)[];
export type Comment_variance_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLogKeySpecifier = ('Action' | 'Organization' | 'Task' | 'User' | 'actionId' | 'createdAt' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLogKeySpecifier)[];
export type EventLogFieldPolicy = {
	Action?: FieldPolicy<any> | FieldReadFunction<any>,
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLogConnectionKeySpecifier = ('edges' | 'pageInfo' | EventLogConnectionKeySpecifier)[];
export type EventLogConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLogEdgeKeySpecifier = ('cursor' | 'node' | EventLogEdgeKeySpecifier)[];
export type EventLogEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_aggregateKeySpecifier = ('aggregate' | 'nodes' | EventLog_aggregateKeySpecifier)[];
export type EventLog_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | EventLog_aggregate_fieldsKeySpecifier)[];
export type EventLog_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_avg_fieldsKeySpecifier = ('actionId' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLog_avg_fieldsKeySpecifier)[];
export type EventLog_avg_fieldsFieldPolicy = {
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_max_fieldsKeySpecifier = ('actionId' | 'createdAt' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLog_max_fieldsKeySpecifier)[];
export type EventLog_max_fieldsFieldPolicy = {
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_min_fieldsKeySpecifier = ('actionId' | 'createdAt' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLog_min_fieldsKeySpecifier)[];
export type EventLog_min_fieldsFieldPolicy = {
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | EventLog_mutation_responseKeySpecifier)[];
export type EventLog_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_stddev_fieldsKeySpecifier = ('actionId' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLog_stddev_fieldsKeySpecifier)[];
export type EventLog_stddev_fieldsFieldPolicy = {
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_stddev_pop_fieldsKeySpecifier = ('actionId' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLog_stddev_pop_fieldsKeySpecifier)[];
export type EventLog_stddev_pop_fieldsFieldPolicy = {
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_stddev_samp_fieldsKeySpecifier = ('actionId' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLog_stddev_samp_fieldsKeySpecifier)[];
export type EventLog_stddev_samp_fieldsFieldPolicy = {
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_sum_fieldsKeySpecifier = ('actionId' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLog_sum_fieldsKeySpecifier)[];
export type EventLog_sum_fieldsFieldPolicy = {
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_var_pop_fieldsKeySpecifier = ('actionId' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLog_var_pop_fieldsKeySpecifier)[];
export type EventLog_var_pop_fieldsFieldPolicy = {
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_var_samp_fieldsKeySpecifier = ('actionId' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLog_var_samp_fieldsKeySpecifier)[];
export type EventLog_var_samp_fieldsFieldPolicy = {
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventLog_variance_fieldsKeySpecifier = ('actionId' | 'id' | 'organizationId' | 'taskId' | 'userId' | EventLog_variance_fieldsKeySpecifier)[];
export type EventLog_variance_fieldsFieldPolicy = {
	actionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	taskId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileKeySpecifier = ('File' | 'Files' | 'Files_aggregate' | 'Files_connection' | 'Organization' | 'Users' | 'Users_aggregate' | 'Users_connection' | 'cdnUrl' | 'createdAt' | 'data' | 'encoding' | 'fileType' | 'filename' | 'id' | 'mimetype' | 'organizationId' | 'updatedAt' | 'varantName' | 'variantKey' | 'variantOfId' | 'variantValue' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	File?: FieldPolicy<any> | FieldReadFunction<any>,
	Files?: FieldPolicy<any> | FieldReadFunction<any>,
	Files_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Files_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>,
	Users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Users_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	cdnUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	fileType?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	varantName?: FieldPolicy<any> | FieldReadFunction<any>,
	variantKey?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileConnectionKeySpecifier = ('edges' | 'pageInfo' | FileConnectionKeySpecifier)[];
export type FileConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileEdgeKeySpecifier = ('cursor' | 'node' | FileEdgeKeySpecifier)[];
export type FileEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_aggregateKeySpecifier = ('aggregate' | 'nodes' | File_aggregateKeySpecifier)[];
export type File_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | File_aggregate_fieldsKeySpecifier)[];
export type File_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_avg_fieldsKeySpecifier = ('id' | 'organizationId' | 'variantOfId' | File_avg_fieldsKeySpecifier)[];
export type File_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_max_fieldsKeySpecifier = ('cdnUrl' | 'createdAt' | 'data' | 'encoding' | 'fileType' | 'filename' | 'id' | 'mimetype' | 'organizationId' | 'updatedAt' | 'varantName' | 'variantKey' | 'variantOfId' | 'variantValue' | File_max_fieldsKeySpecifier)[];
export type File_max_fieldsFieldPolicy = {
	cdnUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	fileType?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	varantName?: FieldPolicy<any> | FieldReadFunction<any>,
	variantKey?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_min_fieldsKeySpecifier = ('cdnUrl' | 'createdAt' | 'data' | 'encoding' | 'fileType' | 'filename' | 'id' | 'mimetype' | 'organizationId' | 'updatedAt' | 'varantName' | 'variantKey' | 'variantOfId' | 'variantValue' | File_min_fieldsKeySpecifier)[];
export type File_min_fieldsFieldPolicy = {
	cdnUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	fileType?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	varantName?: FieldPolicy<any> | FieldReadFunction<any>,
	variantKey?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | File_mutation_responseKeySpecifier)[];
export type File_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_stddev_fieldsKeySpecifier = ('id' | 'organizationId' | 'variantOfId' | File_stddev_fieldsKeySpecifier)[];
export type File_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_stddev_pop_fieldsKeySpecifier = ('id' | 'organizationId' | 'variantOfId' | File_stddev_pop_fieldsKeySpecifier)[];
export type File_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_stddev_samp_fieldsKeySpecifier = ('id' | 'organizationId' | 'variantOfId' | File_stddev_samp_fieldsKeySpecifier)[];
export type File_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_sum_fieldsKeySpecifier = ('id' | 'organizationId' | 'variantOfId' | File_sum_fieldsKeySpecifier)[];
export type File_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_var_pop_fieldsKeySpecifier = ('id' | 'organizationId' | 'variantOfId' | File_var_pop_fieldsKeySpecifier)[];
export type File_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_var_samp_fieldsKeySpecifier = ('id' | 'organizationId' | 'variantOfId' | File_var_samp_fieldsKeySpecifier)[];
export type File_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type File_variance_fieldsKeySpecifier = ('id' | 'organizationId' | 'variantOfId' | File_variance_fieldsKeySpecifier)[];
export type File_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOfId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FormKeySpecifier = ('TaskDefinitions' | 'TaskDefinitions_aggregate' | 'TaskDefinitions_connection' | 'code' | 'config' | 'createdAt' | 'description' | 'displayConfig' | 'displayTemplate' | 'id' | 'name' | 'schema' | 'serializerConfig' | 'triggerConfig' | 'updatedAt' | 'validationConfig' | FormKeySpecifier)[];
export type FormFieldPolicy = {
	TaskDefinitions?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	displayTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	schema?: FieldPolicy<any> | FieldReadFunction<any>,
	serializerConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	validationConfig?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FormConnectionKeySpecifier = ('edges' | 'pageInfo' | FormConnectionKeySpecifier)[];
export type FormConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FormEdgeKeySpecifier = ('cursor' | 'node' | FormEdgeKeySpecifier)[];
export type FormEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Form_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Form_mutation_responseKeySpecifier)[];
export type Form_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginAuthKeySpecifier = ('accessToken' | 'refreshToken' | 'user' | LoginAuthKeySpecifier)[];
export type LoginAuthFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginUserKeySpecifier = ('email' | 'firstname' | 'id' | 'lastname' | LoginUserKeySpecifier)[];
export type LoginUserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeamsKeySpecifier = ('Team' | 'User' | 'assignedAt' | 'assignedBy' | 'id' | 'teamId' | 'userId' | MemberOnTeamsKeySpecifier)[];
export type MemberOnTeamsFieldPolicy = {
	Team?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeamsConnectionKeySpecifier = ('edges' | 'pageInfo' | MemberOnTeamsConnectionKeySpecifier)[];
export type MemberOnTeamsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeamsEdgeKeySpecifier = ('cursor' | 'node' | MemberOnTeamsEdgeKeySpecifier)[];
export type MemberOnTeamsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_aggregateKeySpecifier = ('aggregate' | 'nodes' | MemberOnTeams_aggregateKeySpecifier)[];
export type MemberOnTeams_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | MemberOnTeams_aggregate_fieldsKeySpecifier)[];
export type MemberOnTeams_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_avg_fieldsKeySpecifier = ('teamId' | 'userId' | MemberOnTeams_avg_fieldsKeySpecifier)[];
export type MemberOnTeams_avg_fieldsFieldPolicy = {
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_max_fieldsKeySpecifier = ('assignedAt' | 'assignedBy' | 'teamId' | 'userId' | MemberOnTeams_max_fieldsKeySpecifier)[];
export type MemberOnTeams_max_fieldsFieldPolicy = {
	assignedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_min_fieldsKeySpecifier = ('assignedAt' | 'assignedBy' | 'teamId' | 'userId' | MemberOnTeams_min_fieldsKeySpecifier)[];
export type MemberOnTeams_min_fieldsFieldPolicy = {
	assignedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | MemberOnTeams_mutation_responseKeySpecifier)[];
export type MemberOnTeams_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_stddev_fieldsKeySpecifier = ('teamId' | 'userId' | MemberOnTeams_stddev_fieldsKeySpecifier)[];
export type MemberOnTeams_stddev_fieldsFieldPolicy = {
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_stddev_pop_fieldsKeySpecifier = ('teamId' | 'userId' | MemberOnTeams_stddev_pop_fieldsKeySpecifier)[];
export type MemberOnTeams_stddev_pop_fieldsFieldPolicy = {
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_stddev_samp_fieldsKeySpecifier = ('teamId' | 'userId' | MemberOnTeams_stddev_samp_fieldsKeySpecifier)[];
export type MemberOnTeams_stddev_samp_fieldsFieldPolicy = {
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_sum_fieldsKeySpecifier = ('teamId' | 'userId' | MemberOnTeams_sum_fieldsKeySpecifier)[];
export type MemberOnTeams_sum_fieldsFieldPolicy = {
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_var_pop_fieldsKeySpecifier = ('teamId' | 'userId' | MemberOnTeams_var_pop_fieldsKeySpecifier)[];
export type MemberOnTeams_var_pop_fieldsFieldPolicy = {
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_var_samp_fieldsKeySpecifier = ('teamId' | 'userId' | MemberOnTeams_var_samp_fieldsKeySpecifier)[];
export type MemberOnTeams_var_samp_fieldsFieldPolicy = {
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberOnTeams_variance_fieldsKeySpecifier = ('teamId' | 'userId' | MemberOnTeams_variance_fieldsKeySpecifier)[];
export type MemberOnTeams_variance_fieldsFieldPolicy = {
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationKeySpecifier = ('EventLogs' | 'EventLogs_aggregate' | 'EventLogs_connection' | 'Files' | 'Files_aggregate' | 'Files_connection' | 'PermissionGroups' | 'PermissionGroups_aggregate' | 'PermissionGroups_connection' | 'Permissions' | 'Permissions_aggregate' | 'Permissions_connection' | 'Resources' | 'Resources_aggregate' | 'Resources_connection' | 'Settings' | 'Settings_aggregate' | 'Settings_connection' | 'TaskDefinitions' | 'TaskDefinitions_aggregate' | 'TaskDefinitions_connection' | 'Tasks' | 'Tasks_aggregate' | 'Tasks_connection' | 'Teams' | 'Teams_aggregate' | 'Teams_connection' | 'Users' | 'Users_aggregate' | 'Users_connection' | 'Workflows' | 'Workflows_aggregate' | 'Workflows_connection' | 'createdAt' | 'description' | 'id' | 'name' | 'updatedAt' | OrganizationKeySpecifier)[];
export type OrganizationFieldPolicy = {
	EventLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLogs_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLogs_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Files?: FieldPolicy<any> | FieldReadFunction<any>,
	Files_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Files_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	PermissionGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	PermissionGroups_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	PermissionGroups_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	Permissions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Permissions_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Resources?: FieldPolicy<any> | FieldReadFunction<any>,
	Resources_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Resources_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Settings?: FieldPolicy<any> | FieldReadFunction<any>,
	Settings_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Settings_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Teams?: FieldPolicy<any> | FieldReadFunction<any>,
	Teams_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Teams_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>,
	Users_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Users_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Workflows?: FieldPolicy<any> | FieldReadFunction<any>,
	Workflows_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Workflows_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationConnectionKeySpecifier = ('edges' | 'pageInfo' | OrganizationConnectionKeySpecifier)[];
export type OrganizationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationEdgeKeySpecifier = ('cursor' | 'node' | OrganizationEdgeKeySpecifier)[];
export type OrganizationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Organization_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Organization_mutation_responseKeySpecifier)[];
export type Organization_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionKeySpecifier = ('Organization' | 'PermissionGroup' | 'UserPermissions' | 'UserPermissions_aggregate' | 'UserPermissions_connection' | 'code' | 'createdAt' | 'description' | 'id' | 'name' | 'organizationId' | 'permissionGroupId' | 'updatedAt' | PermissionKeySpecifier)[];
export type PermissionFieldPolicy = {
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	PermissionGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	UserPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	UserPermissions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	UserPermissions_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionConnectionKeySpecifier = ('edges' | 'pageInfo' | PermissionConnectionKeySpecifier)[];
export type PermissionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionEdgeKeySpecifier = ('cursor' | 'node' | PermissionEdgeKeySpecifier)[];
export type PermissionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupKeySpecifier = ('Organization' | 'Permissions' | 'Permissions_aggregate' | 'Permissions_connection' | 'createdAt' | 'description' | 'id' | 'name' | 'organizationId' | 'updatedAt' | PermissionGroupKeySpecifier)[];
export type PermissionGroupFieldPolicy = {
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	Permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	Permissions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Permissions_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupConnectionKeySpecifier = ('edges' | 'pageInfo' | PermissionGroupConnectionKeySpecifier)[];
export type PermissionGroupConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupEdgeKeySpecifier = ('cursor' | 'node' | PermissionGroupEdgeKeySpecifier)[];
export type PermissionGroupEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_aggregateKeySpecifier = ('aggregate' | 'nodes' | PermissionGroup_aggregateKeySpecifier)[];
export type PermissionGroup_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | PermissionGroup_aggregate_fieldsKeySpecifier)[];
export type PermissionGroup_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_avg_fieldsKeySpecifier = ('id' | 'organizationId' | PermissionGroup_avg_fieldsKeySpecifier)[];
export type PermissionGroup_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_max_fieldsKeySpecifier = ('createdAt' | 'description' | 'id' | 'name' | 'organizationId' | 'updatedAt' | PermissionGroup_max_fieldsKeySpecifier)[];
export type PermissionGroup_max_fieldsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_min_fieldsKeySpecifier = ('createdAt' | 'description' | 'id' | 'name' | 'organizationId' | 'updatedAt' | PermissionGroup_min_fieldsKeySpecifier)[];
export type PermissionGroup_min_fieldsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | PermissionGroup_mutation_responseKeySpecifier)[];
export type PermissionGroup_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_stddev_fieldsKeySpecifier = ('id' | 'organizationId' | PermissionGroup_stddev_fieldsKeySpecifier)[];
export type PermissionGroup_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_stddev_pop_fieldsKeySpecifier = ('id' | 'organizationId' | PermissionGroup_stddev_pop_fieldsKeySpecifier)[];
export type PermissionGroup_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_stddev_samp_fieldsKeySpecifier = ('id' | 'organizationId' | PermissionGroup_stddev_samp_fieldsKeySpecifier)[];
export type PermissionGroup_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_sum_fieldsKeySpecifier = ('id' | 'organizationId' | PermissionGroup_sum_fieldsKeySpecifier)[];
export type PermissionGroup_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_var_pop_fieldsKeySpecifier = ('id' | 'organizationId' | PermissionGroup_var_pop_fieldsKeySpecifier)[];
export type PermissionGroup_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_var_samp_fieldsKeySpecifier = ('id' | 'organizationId' | PermissionGroup_var_samp_fieldsKeySpecifier)[];
export type PermissionGroup_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroup_variance_fieldsKeySpecifier = ('id' | 'organizationId' | PermissionGroup_variance_fieldsKeySpecifier)[];
export type PermissionGroup_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_aggregateKeySpecifier = ('aggregate' | 'nodes' | Permission_aggregateKeySpecifier)[];
export type Permission_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Permission_aggregate_fieldsKeySpecifier)[];
export type Permission_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_avg_fieldsKeySpecifier = ('id' | 'organizationId' | 'permissionGroupId' | Permission_avg_fieldsKeySpecifier)[];
export type Permission_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_max_fieldsKeySpecifier = ('code' | 'createdAt' | 'description' | 'id' | 'name' | 'organizationId' | 'permissionGroupId' | 'updatedAt' | Permission_max_fieldsKeySpecifier)[];
export type Permission_max_fieldsFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_min_fieldsKeySpecifier = ('code' | 'createdAt' | 'description' | 'id' | 'name' | 'organizationId' | 'permissionGroupId' | 'updatedAt' | Permission_min_fieldsKeySpecifier)[];
export type Permission_min_fieldsFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Permission_mutation_responseKeySpecifier)[];
export type Permission_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_stddev_fieldsKeySpecifier = ('id' | 'organizationId' | 'permissionGroupId' | Permission_stddev_fieldsKeySpecifier)[];
export type Permission_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_stddev_pop_fieldsKeySpecifier = ('id' | 'organizationId' | 'permissionGroupId' | Permission_stddev_pop_fieldsKeySpecifier)[];
export type Permission_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_stddev_samp_fieldsKeySpecifier = ('id' | 'organizationId' | 'permissionGroupId' | Permission_stddev_samp_fieldsKeySpecifier)[];
export type Permission_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_sum_fieldsKeySpecifier = ('id' | 'organizationId' | 'permissionGroupId' | Permission_sum_fieldsKeySpecifier)[];
export type Permission_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_var_pop_fieldsKeySpecifier = ('id' | 'organizationId' | 'permissionGroupId' | Permission_var_pop_fieldsKeySpecifier)[];
export type Permission_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_var_samp_fieldsKeySpecifier = ('id' | 'organizationId' | 'permissionGroupId' | Permission_var_samp_fieldsKeySpecifier)[];
export type Permission_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Permission_variance_fieldsKeySpecifier = ('id' | 'organizationId' | 'permissionGroupId' | Permission_variance_fieldsKeySpecifier)[];
export type Permission_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionGroupId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('User' | 'authorId' | 'content' | 'createdAt' | 'id' | 'published' | 'title' | 'updatedAt' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostConnectionKeySpecifier = ('edges' | 'pageInfo' | PostConnectionKeySpecifier)[];
export type PostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostEdgeKeySpecifier = ('cursor' | 'node' | PostEdgeKeySpecifier)[];
export type PostEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_aggregateKeySpecifier = ('aggregate' | 'nodes' | Post_aggregateKeySpecifier)[];
export type Post_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Post_aggregate_fieldsKeySpecifier)[];
export type Post_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_avg_fieldsKeySpecifier = ('authorId' | 'id' | Post_avg_fieldsKeySpecifier)[];
export type Post_avg_fieldsFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_max_fieldsKeySpecifier = ('authorId' | 'content' | 'createdAt' | 'id' | 'title' | 'updatedAt' | Post_max_fieldsKeySpecifier)[];
export type Post_max_fieldsFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_min_fieldsKeySpecifier = ('authorId' | 'content' | 'createdAt' | 'id' | 'title' | 'updatedAt' | Post_min_fieldsKeySpecifier)[];
export type Post_min_fieldsFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Post_mutation_responseKeySpecifier)[];
export type Post_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_stddev_fieldsKeySpecifier = ('authorId' | 'id' | Post_stddev_fieldsKeySpecifier)[];
export type Post_stddev_fieldsFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_stddev_pop_fieldsKeySpecifier = ('authorId' | 'id' | Post_stddev_pop_fieldsKeySpecifier)[];
export type Post_stddev_pop_fieldsFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_stddev_samp_fieldsKeySpecifier = ('authorId' | 'id' | Post_stddev_samp_fieldsKeySpecifier)[];
export type Post_stddev_samp_fieldsFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_sum_fieldsKeySpecifier = ('authorId' | 'id' | Post_sum_fieldsKeySpecifier)[];
export type Post_sum_fieldsFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_var_pop_fieldsKeySpecifier = ('authorId' | 'id' | Post_var_pop_fieldsKeySpecifier)[];
export type Post_var_pop_fieldsFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_var_samp_fieldsKeySpecifier = ('authorId' | 'id' | Post_var_samp_fieldsKeySpecifier)[];
export type Post_var_samp_fieldsFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Post_variance_fieldsKeySpecifier = ('authorId' | 'id' | Post_variance_fieldsKeySpecifier)[];
export type Post_variance_fieldsFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceKeySpecifier = ('Organization' | 'ResourceItems' | 'ResourceItems_aggregate' | 'ResourceItems_connection' | 'code' | 'createdAt' | 'description' | 'icon' | 'id' | 'name' | 'organizationId' | 'updatedAt' | ResourceKeySpecifier)[];
export type ResourceFieldPolicy = {
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	ResourceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	ResourceItems_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	ResourceItems_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceConnectionKeySpecifier = ('edges' | 'pageInfo' | ResourceConnectionKeySpecifier)[];
export type ResourceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceEdgeKeySpecifier = ('cursor' | 'node' | ResourceEdgeKeySpecifier)[];
export type ResourceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItemKeySpecifier = ('Resource' | 'code' | 'createdAt' | 'description' | 'icon' | 'id' | 'name' | 'resourceId' | 'updatedAt' | ResourceItemKeySpecifier)[];
export type ResourceItemFieldPolicy = {
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItemConnectionKeySpecifier = ('edges' | 'pageInfo' | ResourceItemConnectionKeySpecifier)[];
export type ResourceItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItemEdgeKeySpecifier = ('cursor' | 'node' | ResourceItemEdgeKeySpecifier)[];
export type ResourceItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_aggregateKeySpecifier = ('aggregate' | 'nodes' | ResourceItem_aggregateKeySpecifier)[];
export type ResourceItem_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | ResourceItem_aggregate_fieldsKeySpecifier)[];
export type ResourceItem_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_avg_fieldsKeySpecifier = ('id' | 'resourceId' | ResourceItem_avg_fieldsKeySpecifier)[];
export type ResourceItem_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_max_fieldsKeySpecifier = ('code' | 'createdAt' | 'description' | 'icon' | 'id' | 'name' | 'resourceId' | 'updatedAt' | ResourceItem_max_fieldsKeySpecifier)[];
export type ResourceItem_max_fieldsFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_min_fieldsKeySpecifier = ('code' | 'createdAt' | 'description' | 'icon' | 'id' | 'name' | 'resourceId' | 'updatedAt' | ResourceItem_min_fieldsKeySpecifier)[];
export type ResourceItem_min_fieldsFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | ResourceItem_mutation_responseKeySpecifier)[];
export type ResourceItem_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_stddev_fieldsKeySpecifier = ('id' | 'resourceId' | ResourceItem_stddev_fieldsKeySpecifier)[];
export type ResourceItem_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_stddev_pop_fieldsKeySpecifier = ('id' | 'resourceId' | ResourceItem_stddev_pop_fieldsKeySpecifier)[];
export type ResourceItem_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_stddev_samp_fieldsKeySpecifier = ('id' | 'resourceId' | ResourceItem_stddev_samp_fieldsKeySpecifier)[];
export type ResourceItem_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_sum_fieldsKeySpecifier = ('id' | 'resourceId' | ResourceItem_sum_fieldsKeySpecifier)[];
export type ResourceItem_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_var_pop_fieldsKeySpecifier = ('id' | 'resourceId' | ResourceItem_var_pop_fieldsKeySpecifier)[];
export type ResourceItem_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_var_samp_fieldsKeySpecifier = ('id' | 'resourceId' | ResourceItem_var_samp_fieldsKeySpecifier)[];
export type ResourceItem_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceItem_variance_fieldsKeySpecifier = ('id' | 'resourceId' | ResourceItem_variance_fieldsKeySpecifier)[];
export type ResourceItem_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_aggregateKeySpecifier = ('aggregate' | 'nodes' | Resource_aggregateKeySpecifier)[];
export type Resource_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Resource_aggregate_fieldsKeySpecifier)[];
export type Resource_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_avg_fieldsKeySpecifier = ('id' | 'organizationId' | Resource_avg_fieldsKeySpecifier)[];
export type Resource_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_max_fieldsKeySpecifier = ('code' | 'createdAt' | 'description' | 'icon' | 'id' | 'name' | 'organizationId' | 'updatedAt' | Resource_max_fieldsKeySpecifier)[];
export type Resource_max_fieldsFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_min_fieldsKeySpecifier = ('code' | 'createdAt' | 'description' | 'icon' | 'id' | 'name' | 'organizationId' | 'updatedAt' | Resource_min_fieldsKeySpecifier)[];
export type Resource_min_fieldsFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Resource_mutation_responseKeySpecifier)[];
export type Resource_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_stddev_fieldsKeySpecifier = ('id' | 'organizationId' | Resource_stddev_fieldsKeySpecifier)[];
export type Resource_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_stddev_pop_fieldsKeySpecifier = ('id' | 'organizationId' | Resource_stddev_pop_fieldsKeySpecifier)[];
export type Resource_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_stddev_samp_fieldsKeySpecifier = ('id' | 'organizationId' | Resource_stddev_samp_fieldsKeySpecifier)[];
export type Resource_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_sum_fieldsKeySpecifier = ('id' | 'organizationId' | Resource_sum_fieldsKeySpecifier)[];
export type Resource_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_var_pop_fieldsKeySpecifier = ('id' | 'organizationId' | Resource_var_pop_fieldsKeySpecifier)[];
export type Resource_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_var_samp_fieldsKeySpecifier = ('id' | 'organizationId' | Resource_var_samp_fieldsKeySpecifier)[];
export type Resource_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Resource_variance_fieldsKeySpecifier = ('id' | 'organizationId' | Resource_variance_fieldsKeySpecifier)[];
export type Resource_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsKeySpecifier = ('Organization' | 'createdAt' | 'id' | 'key' | 'organizationId' | 'updatedAt' | 'value' | SettingsKeySpecifier)[];
export type SettingsFieldPolicy = {
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsConnectionKeySpecifier = ('edges' | 'pageInfo' | SettingsConnectionKeySpecifier)[];
export type SettingsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsEdgeKeySpecifier = ('cursor' | 'node' | SettingsEdgeKeySpecifier)[];
export type SettingsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_aggregateKeySpecifier = ('aggregate' | 'nodes' | Settings_aggregateKeySpecifier)[];
export type Settings_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Settings_aggregate_fieldsKeySpecifier)[];
export type Settings_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_avg_fieldsKeySpecifier = ('id' | 'organizationId' | Settings_avg_fieldsKeySpecifier)[];
export type Settings_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_max_fieldsKeySpecifier = ('createdAt' | 'id' | 'key' | 'organizationId' | 'updatedAt' | Settings_max_fieldsKeySpecifier)[];
export type Settings_max_fieldsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_min_fieldsKeySpecifier = ('createdAt' | 'id' | 'key' | 'organizationId' | 'updatedAt' | Settings_min_fieldsKeySpecifier)[];
export type Settings_min_fieldsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Settings_mutation_responseKeySpecifier)[];
export type Settings_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_stddev_fieldsKeySpecifier = ('id' | 'organizationId' | Settings_stddev_fieldsKeySpecifier)[];
export type Settings_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_stddev_pop_fieldsKeySpecifier = ('id' | 'organizationId' | Settings_stddev_pop_fieldsKeySpecifier)[];
export type Settings_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_stddev_samp_fieldsKeySpecifier = ('id' | 'organizationId' | Settings_stddev_samp_fieldsKeySpecifier)[];
export type Settings_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_sum_fieldsKeySpecifier = ('id' | 'organizationId' | Settings_sum_fieldsKeySpecifier)[];
export type Settings_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_var_pop_fieldsKeySpecifier = ('id' | 'organizationId' | Settings_var_pop_fieldsKeySpecifier)[];
export type Settings_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_var_samp_fieldsKeySpecifier = ('id' | 'organizationId' | Settings_var_samp_fieldsKeySpecifier)[];
export type Settings_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Settings_variance_fieldsKeySpecifier = ('id' | 'organizationId' | Settings_variance_fieldsKeySpecifier)[];
export type Settings_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskKeySpecifier = ('Comments' | 'Comments_aggregate' | 'Comments_connection' | 'EventLogs' | 'EventLogs_aggregate' | 'EventLogs_connection' | 'Organization' | 'Task' | 'TaskDefinition' | 'Tasks' | 'Tasks_aggregate' | 'Tasks_connection' | 'Team' | 'User' | 'assigneeId' | 'config' | 'createdAt' | 'creatorId' | 'cta' | 'ctaConfig' | 'ctaName' | 'ctaTemplate' | 'definitionId' | 'description' | 'descriptionTemplate' | 'dueDate' | 'id' | 'isActve' | 'notificationConfig' | 'notificationTemplate' | 'organizationId' | 'parentId' | 'priority' | 'processConfig' | 'properties' | 'state' | 'stateConfig' | 'stateName' | 'stateTemplate' | 'stateValues' | 'status' | 'statusConfig' | 'statusName' | 'statusTemplate' | 'teamId' | 'title' | 'titleTemplate' | 'triggerConfig' | 'type' | 'typeName' | 'updatedAt' | 'userByCreatorid' | 'values' | TaskKeySpecifier)[];
export type TaskFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLogs_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLogs_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinition?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Team?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	cta?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaName?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	dueDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActve?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	processConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	stateConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	stateName?: FieldPolicy<any> | FieldReadFunction<any>,
	stateTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	stateValues?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	statusConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	statusName?: FieldPolicy<any> | FieldReadFunction<any>,
	statusTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	typeName?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userByCreatorid?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskConnectionKeySpecifier = ('edges' | 'pageInfo' | TaskConnectionKeySpecifier)[];
export type TaskConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinitionKeySpecifier = ('Activity' | 'Form' | 'Organization' | 'TaskDefinition' | 'TaskDefinitions' | 'TaskDefinitions_aggregate' | 'TaskDefinitions_connection' | 'Tasks' | 'Tasks_aggregate' | 'Tasks_connection' | 'Workflow' | 'actvityId' | 'config' | 'createdAt' | 'ctaConfig' | 'ctaTemplate' | 'description' | 'descriptionTemplate' | 'formId' | 'icon' | 'id' | 'notificationConfig' | 'notificationTemplate' | 'organizationId' | 'parentId' | 'processConfig' | 'stateConfig' | 'stateTemplate' | 'statusConfig' | 'statusTemplate' | 'thumbnail' | 'title' | 'titleTemplate' | 'triggerConfig' | 'updatedAt' | 'workflowId' | TaskDefinitionKeySpecifier)[];
export type TaskDefinitionFieldPolicy = {
	Activity?: FieldPolicy<any> | FieldReadFunction<any>,
	Form?: FieldPolicy<any> | FieldReadFunction<any>,
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinition?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Workflow?: FieldPolicy<any> | FieldReadFunction<any>,
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	processConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	stateConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	stateTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	statusConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	statusTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	triggerConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinitionConnectionKeySpecifier = ('edges' | 'pageInfo' | TaskDefinitionConnectionKeySpecifier)[];
export type TaskDefinitionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinitionEdgeKeySpecifier = ('cursor' | 'node' | TaskDefinitionEdgeKeySpecifier)[];
export type TaskDefinitionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_aggregateKeySpecifier = ('aggregate' | 'nodes' | TaskDefinition_aggregateKeySpecifier)[];
export type TaskDefinition_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | TaskDefinition_aggregate_fieldsKeySpecifier)[];
export type TaskDefinition_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_avg_fieldsKeySpecifier = ('actvityId' | 'formId' | 'id' | 'organizationId' | 'parentId' | 'workflowId' | TaskDefinition_avg_fieldsKeySpecifier)[];
export type TaskDefinition_avg_fieldsFieldPolicy = {
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_max_fieldsKeySpecifier = ('actvityId' | 'createdAt' | 'ctaTemplate' | 'description' | 'descriptionTemplate' | 'formId' | 'icon' | 'id' | 'notificationTemplate' | 'organizationId' | 'parentId' | 'stateTemplate' | 'statusTemplate' | 'thumbnail' | 'title' | 'titleTemplate' | 'updatedAt' | 'workflowId' | TaskDefinition_max_fieldsKeySpecifier)[];
export type TaskDefinition_max_fieldsFieldPolicy = {
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	stateTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	statusTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_min_fieldsKeySpecifier = ('actvityId' | 'createdAt' | 'ctaTemplate' | 'description' | 'descriptionTemplate' | 'formId' | 'icon' | 'id' | 'notificationTemplate' | 'organizationId' | 'parentId' | 'stateTemplate' | 'statusTemplate' | 'thumbnail' | 'title' | 'titleTemplate' | 'updatedAt' | 'workflowId' | TaskDefinition_min_fieldsKeySpecifier)[];
export type TaskDefinition_min_fieldsFieldPolicy = {
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	stateTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	statusTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | TaskDefinition_mutation_responseKeySpecifier)[];
export type TaskDefinition_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_stddev_fieldsKeySpecifier = ('actvityId' | 'formId' | 'id' | 'organizationId' | 'parentId' | 'workflowId' | TaskDefinition_stddev_fieldsKeySpecifier)[];
export type TaskDefinition_stddev_fieldsFieldPolicy = {
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_stddev_pop_fieldsKeySpecifier = ('actvityId' | 'formId' | 'id' | 'organizationId' | 'parentId' | 'workflowId' | TaskDefinition_stddev_pop_fieldsKeySpecifier)[];
export type TaskDefinition_stddev_pop_fieldsFieldPolicy = {
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_stddev_samp_fieldsKeySpecifier = ('actvityId' | 'formId' | 'id' | 'organizationId' | 'parentId' | 'workflowId' | TaskDefinition_stddev_samp_fieldsKeySpecifier)[];
export type TaskDefinition_stddev_samp_fieldsFieldPolicy = {
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_sum_fieldsKeySpecifier = ('actvityId' | 'formId' | 'id' | 'organizationId' | 'parentId' | 'workflowId' | TaskDefinition_sum_fieldsKeySpecifier)[];
export type TaskDefinition_sum_fieldsFieldPolicy = {
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_var_pop_fieldsKeySpecifier = ('actvityId' | 'formId' | 'id' | 'organizationId' | 'parentId' | 'workflowId' | TaskDefinition_var_pop_fieldsKeySpecifier)[];
export type TaskDefinition_var_pop_fieldsFieldPolicy = {
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_var_samp_fieldsKeySpecifier = ('actvityId' | 'formId' | 'id' | 'organizationId' | 'parentId' | 'workflowId' | TaskDefinition_var_samp_fieldsKeySpecifier)[];
export type TaskDefinition_var_samp_fieldsFieldPolicy = {
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskDefinition_variance_fieldsKeySpecifier = ('actvityId' | 'formId' | 'id' | 'organizationId' | 'parentId' | 'workflowId' | TaskDefinition_variance_fieldsKeySpecifier)[];
export type TaskDefinition_variance_fieldsFieldPolicy = {
	actvityId?: FieldPolicy<any> | FieldReadFunction<any>,
	formId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	workflowId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskEdgeKeySpecifier = ('cursor' | 'node' | TaskEdgeKeySpecifier)[];
export type TaskEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_aggregateKeySpecifier = ('aggregate' | 'nodes' | Task_aggregateKeySpecifier)[];
export type Task_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Task_aggregate_fieldsKeySpecifier)[];
export type Task_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_avg_fieldsKeySpecifier = ('assigneeId' | 'creatorId' | 'definitionId' | 'id' | 'organizationId' | 'parentId' | 'teamId' | Task_avg_fieldsKeySpecifier)[];
export type Task_avg_fieldsFieldPolicy = {
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_max_fieldsKeySpecifier = ('assigneeId' | 'createdAt' | 'creatorId' | 'cta' | 'ctaName' | 'ctaTemplate' | 'definitionId' | 'description' | 'descriptionTemplate' | 'dueDate' | 'id' | 'notificationTemplate' | 'organizationId' | 'parentId' | 'priority' | 'state' | 'stateName' | 'stateTemplate' | 'stateValues' | 'status' | 'statusName' | 'statusTemplate' | 'teamId' | 'title' | 'titleTemplate' | 'type' | 'typeName' | 'updatedAt' | Task_max_fieldsKeySpecifier)[];
export type Task_max_fieldsFieldPolicy = {
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	cta?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaName?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	dueDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	stateName?: FieldPolicy<any> | FieldReadFunction<any>,
	stateTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	stateValues?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	statusName?: FieldPolicy<any> | FieldReadFunction<any>,
	statusTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	typeName?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_min_fieldsKeySpecifier = ('assigneeId' | 'createdAt' | 'creatorId' | 'cta' | 'ctaName' | 'ctaTemplate' | 'definitionId' | 'description' | 'descriptionTemplate' | 'dueDate' | 'id' | 'notificationTemplate' | 'organizationId' | 'parentId' | 'priority' | 'state' | 'stateName' | 'stateTemplate' | 'stateValues' | 'status' | 'statusName' | 'statusTemplate' | 'teamId' | 'title' | 'titleTemplate' | 'type' | 'typeName' | 'updatedAt' | Task_min_fieldsKeySpecifier)[];
export type Task_min_fieldsFieldPolicy = {
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	cta?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaName?: FieldPolicy<any> | FieldReadFunction<any>,
	ctaTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptionTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	dueDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	stateName?: FieldPolicy<any> | FieldReadFunction<any>,
	stateTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	stateValues?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	statusName?: FieldPolicy<any> | FieldReadFunction<any>,
	statusTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	titleTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	typeName?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Task_mutation_responseKeySpecifier)[];
export type Task_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_stddev_fieldsKeySpecifier = ('assigneeId' | 'creatorId' | 'definitionId' | 'id' | 'organizationId' | 'parentId' | 'teamId' | Task_stddev_fieldsKeySpecifier)[];
export type Task_stddev_fieldsFieldPolicy = {
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_stddev_pop_fieldsKeySpecifier = ('assigneeId' | 'creatorId' | 'definitionId' | 'id' | 'organizationId' | 'parentId' | 'teamId' | Task_stddev_pop_fieldsKeySpecifier)[];
export type Task_stddev_pop_fieldsFieldPolicy = {
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_stddev_samp_fieldsKeySpecifier = ('assigneeId' | 'creatorId' | 'definitionId' | 'id' | 'organizationId' | 'parentId' | 'teamId' | Task_stddev_samp_fieldsKeySpecifier)[];
export type Task_stddev_samp_fieldsFieldPolicy = {
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_sum_fieldsKeySpecifier = ('assigneeId' | 'creatorId' | 'definitionId' | 'id' | 'organizationId' | 'parentId' | 'teamId' | Task_sum_fieldsKeySpecifier)[];
export type Task_sum_fieldsFieldPolicy = {
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_var_pop_fieldsKeySpecifier = ('assigneeId' | 'creatorId' | 'definitionId' | 'id' | 'organizationId' | 'parentId' | 'teamId' | Task_var_pop_fieldsKeySpecifier)[];
export type Task_var_pop_fieldsFieldPolicy = {
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_var_samp_fieldsKeySpecifier = ('assigneeId' | 'creatorId' | 'definitionId' | 'id' | 'organizationId' | 'parentId' | 'teamId' | Task_var_samp_fieldsKeySpecifier)[];
export type Task_var_samp_fieldsFieldPolicy = {
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Task_variance_fieldsKeySpecifier = ('assigneeId' | 'creatorId' | 'definitionId' | 'id' | 'organizationId' | 'parentId' | 'teamId' | Task_variance_fieldsKeySpecifier)[];
export type Task_variance_fieldsFieldPolicy = {
	assigneeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	definitionId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamKeySpecifier = ('MemberOnTeams' | 'MemberOnTeams_aggregate' | 'MemberOnTeams_connection' | 'Organization' | 'Tasks' | 'Tasks_aggregate' | 'Tasks_connection' | 'User' | 'bio' | 'createdAt' | 'creatorId' | 'description' | 'id' | 'managerId' | 'name' | 'organizationId' | 'updatedAt' | 'userByManagerid' | TeamKeySpecifier)[];
export type TeamFieldPolicy = {
	MemberOnTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	MemberOnTeams_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	MemberOnTeams_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userByManagerid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamConnectionKeySpecifier = ('edges' | 'pageInfo' | TeamConnectionKeySpecifier)[];
export type TeamConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamEdgeKeySpecifier = ('cursor' | 'node' | TeamEdgeKeySpecifier)[];
export type TeamEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_aggregateKeySpecifier = ('aggregate' | 'nodes' | Team_aggregateKeySpecifier)[];
export type Team_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Team_aggregate_fieldsKeySpecifier)[];
export type Team_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_avg_fieldsKeySpecifier = ('creatorId' | 'id' | 'managerId' | 'organizationId' | Team_avg_fieldsKeySpecifier)[];
export type Team_avg_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_max_fieldsKeySpecifier = ('bio' | 'createdAt' | 'creatorId' | 'description' | 'id' | 'managerId' | 'name' | 'organizationId' | 'updatedAt' | Team_max_fieldsKeySpecifier)[];
export type Team_max_fieldsFieldPolicy = {
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_min_fieldsKeySpecifier = ('bio' | 'createdAt' | 'creatorId' | 'description' | 'id' | 'managerId' | 'name' | 'organizationId' | 'updatedAt' | Team_min_fieldsKeySpecifier)[];
export type Team_min_fieldsFieldPolicy = {
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Team_mutation_responseKeySpecifier)[];
export type Team_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_stddev_fieldsKeySpecifier = ('creatorId' | 'id' | 'managerId' | 'organizationId' | Team_stddev_fieldsKeySpecifier)[];
export type Team_stddev_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_stddev_pop_fieldsKeySpecifier = ('creatorId' | 'id' | 'managerId' | 'organizationId' | Team_stddev_pop_fieldsKeySpecifier)[];
export type Team_stddev_pop_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_stddev_samp_fieldsKeySpecifier = ('creatorId' | 'id' | 'managerId' | 'organizationId' | Team_stddev_samp_fieldsKeySpecifier)[];
export type Team_stddev_samp_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_sum_fieldsKeySpecifier = ('creatorId' | 'id' | 'managerId' | 'organizationId' | Team_sum_fieldsKeySpecifier)[];
export type Team_sum_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_var_pop_fieldsKeySpecifier = ('creatorId' | 'id' | 'managerId' | 'organizationId' | Team_var_pop_fieldsKeySpecifier)[];
export type Team_var_pop_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_var_samp_fieldsKeySpecifier = ('creatorId' | 'id' | 'managerId' | 'organizationId' | Team_var_samp_fieldsKeySpecifier)[];
export type Team_var_samp_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Team_variance_fieldsKeySpecifier = ('creatorId' | 'id' | 'managerId' | 'organizationId' | Team_variance_fieldsKeySpecifier)[];
export type Team_variance_fieldsFieldPolicy = {
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	managerId?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TriggerKeySpecifier = ('Activity' | 'activityId' | 'createdAt' | 'description' | 'id' | 'name' | 'type' | 'updatedAt' | TriggerKeySpecifier)[];
export type TriggerFieldPolicy = {
	Activity?: FieldPolicy<any> | FieldReadFunction<any>,
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TriggerConnectionKeySpecifier = ('edges' | 'pageInfo' | TriggerConnectionKeySpecifier)[];
export type TriggerConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TriggerEdgeKeySpecifier = ('cursor' | 'node' | TriggerEdgeKeySpecifier)[];
export type TriggerEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_aggregateKeySpecifier = ('aggregate' | 'nodes' | Trigger_aggregateKeySpecifier)[];
export type Trigger_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Trigger_aggregate_fieldsKeySpecifier)[];
export type Trigger_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_avg_fieldsKeySpecifier = ('activityId' | 'id' | Trigger_avg_fieldsKeySpecifier)[];
export type Trigger_avg_fieldsFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_max_fieldsKeySpecifier = ('activityId' | 'createdAt' | 'description' | 'id' | 'name' | 'type' | 'updatedAt' | Trigger_max_fieldsKeySpecifier)[];
export type Trigger_max_fieldsFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_min_fieldsKeySpecifier = ('activityId' | 'createdAt' | 'description' | 'id' | 'name' | 'type' | 'updatedAt' | Trigger_min_fieldsKeySpecifier)[];
export type Trigger_min_fieldsFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Trigger_mutation_responseKeySpecifier)[];
export type Trigger_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_stddev_fieldsKeySpecifier = ('activityId' | 'id' | Trigger_stddev_fieldsKeySpecifier)[];
export type Trigger_stddev_fieldsFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_stddev_pop_fieldsKeySpecifier = ('activityId' | 'id' | Trigger_stddev_pop_fieldsKeySpecifier)[];
export type Trigger_stddev_pop_fieldsFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_stddev_samp_fieldsKeySpecifier = ('activityId' | 'id' | Trigger_stddev_samp_fieldsKeySpecifier)[];
export type Trigger_stddev_samp_fieldsFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_sum_fieldsKeySpecifier = ('activityId' | 'id' | Trigger_sum_fieldsKeySpecifier)[];
export type Trigger_sum_fieldsFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_var_pop_fieldsKeySpecifier = ('activityId' | 'id' | Trigger_var_pop_fieldsKeySpecifier)[];
export type Trigger_var_pop_fieldsFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_var_samp_fieldsKeySpecifier = ('activityId' | 'id' | Trigger_var_samp_fieldsKeySpecifier)[];
export type Trigger_var_samp_fieldsFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Trigger_variance_fieldsKeySpecifier = ('activityId' | 'id' | Trigger_variance_fieldsKeySpecifier)[];
export type Trigger_variance_fieldsFieldPolicy = {
	activityId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('Comments' | 'Comments_aggregate' | 'Comments_connection' | 'EventLogs' | 'EventLogs_aggregate' | 'EventLogs_connection' | 'File' | 'MemberOnTeams' | 'MemberOnTeams_aggregate' | 'MemberOnTeams_connection' | 'Organization' | 'Posts' | 'Posts_aggregate' | 'Posts_connection' | 'Tasks' | 'Tasks_aggregate' | 'Tasks_connection' | 'Teams' | 'Teams_aggregate' | 'Teams_connection' | 'UserPermissions' | 'UserPermissions_aggregate' | 'UserPermissions_connection' | 'avatarId' | 'createdAt' | 'email' | 'firstname' | 'id' | 'lastname' | 'organizationId' | 'password' | 'role' | 'tasksByCreatorid' | 'tasksByCreatorid_aggregate' | 'tasksByCreatorid_connection' | 'teamsByManagerid' | 'teamsByManagerid_aggregate' | 'teamsByManagerid_connection' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLogs_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLogs_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	File?: FieldPolicy<any> | FieldReadFunction<any>,
	MemberOnTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	MemberOnTeams_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	MemberOnTeams_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	Posts?: FieldPolicy<any> | FieldReadFunction<any>,
	Posts_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Posts_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Teams?: FieldPolicy<any> | FieldReadFunction<any>,
	Teams_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Teams_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	UserPermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	UserPermissions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	UserPermissions_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	tasksByCreatorid?: FieldPolicy<any> | FieldReadFunction<any>,
	tasksByCreatorid_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	tasksByCreatorid_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsByManagerid?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsByManagerid_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsByManagerid_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('edges' | 'pageInfo' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('cursor' | 'node' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermissionKeySpecifier = ('Permission' | 'User' | 'createdAt' | 'id' | 'permissionId' | 'userId' | UserPermissionKeySpecifier)[];
export type UserPermissionFieldPolicy = {
	Permission?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermissionConnectionKeySpecifier = ('edges' | 'pageInfo' | UserPermissionConnectionKeySpecifier)[];
export type UserPermissionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermissionEdgeKeySpecifier = ('cursor' | 'node' | UserPermissionEdgeKeySpecifier)[];
export type UserPermissionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_aggregateKeySpecifier = ('aggregate' | 'nodes' | UserPermission_aggregateKeySpecifier)[];
export type UserPermission_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | UserPermission_aggregate_fieldsKeySpecifier)[];
export type UserPermission_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_avg_fieldsKeySpecifier = ('id' | 'permissionId' | 'userId' | UserPermission_avg_fieldsKeySpecifier)[];
export type UserPermission_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_max_fieldsKeySpecifier = ('createdAt' | 'id' | 'permissionId' | 'userId' | UserPermission_max_fieldsKeySpecifier)[];
export type UserPermission_max_fieldsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_min_fieldsKeySpecifier = ('createdAt' | 'id' | 'permissionId' | 'userId' | UserPermission_min_fieldsKeySpecifier)[];
export type UserPermission_min_fieldsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | UserPermission_mutation_responseKeySpecifier)[];
export type UserPermission_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_stddev_fieldsKeySpecifier = ('id' | 'permissionId' | 'userId' | UserPermission_stddev_fieldsKeySpecifier)[];
export type UserPermission_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_stddev_pop_fieldsKeySpecifier = ('id' | 'permissionId' | 'userId' | UserPermission_stddev_pop_fieldsKeySpecifier)[];
export type UserPermission_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_stddev_samp_fieldsKeySpecifier = ('id' | 'permissionId' | 'userId' | UserPermission_stddev_samp_fieldsKeySpecifier)[];
export type UserPermission_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_sum_fieldsKeySpecifier = ('id' | 'permissionId' | 'userId' | UserPermission_sum_fieldsKeySpecifier)[];
export type UserPermission_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_var_pop_fieldsKeySpecifier = ('id' | 'permissionId' | 'userId' | UserPermission_var_pop_fieldsKeySpecifier)[];
export type UserPermission_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_var_samp_fieldsKeySpecifier = ('id' | 'permissionId' | 'userId' | UserPermission_var_samp_fieldsKeySpecifier)[];
export type UserPermission_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPermission_variance_fieldsKeySpecifier = ('id' | 'permissionId' | 'userId' | UserPermission_variance_fieldsKeySpecifier)[];
export type UserPermission_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_aggregateKeySpecifier = ('aggregate' | 'nodes' | User_aggregateKeySpecifier)[];
export type User_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | User_aggregate_fieldsKeySpecifier)[];
export type User_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_avg_fieldsKeySpecifier = ('avatarId' | 'id' | 'organizationId' | User_avg_fieldsKeySpecifier)[];
export type User_avg_fieldsFieldPolicy = {
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_max_fieldsKeySpecifier = ('avatarId' | 'createdAt' | 'email' | 'firstname' | 'id' | 'lastname' | 'organizationId' | 'password' | 'role' | 'updatedAt' | User_max_fieldsKeySpecifier)[];
export type User_max_fieldsFieldPolicy = {
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_min_fieldsKeySpecifier = ('avatarId' | 'createdAt' | 'email' | 'firstname' | 'id' | 'lastname' | 'organizationId' | 'password' | 'role' | 'updatedAt' | User_min_fieldsKeySpecifier)[];
export type User_min_fieldsFieldPolicy = {
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastname?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | User_mutation_responseKeySpecifier)[];
export type User_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_stddev_fieldsKeySpecifier = ('avatarId' | 'id' | 'organizationId' | User_stddev_fieldsKeySpecifier)[];
export type User_stddev_fieldsFieldPolicy = {
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_stddev_pop_fieldsKeySpecifier = ('avatarId' | 'id' | 'organizationId' | User_stddev_pop_fieldsKeySpecifier)[];
export type User_stddev_pop_fieldsFieldPolicy = {
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_stddev_samp_fieldsKeySpecifier = ('avatarId' | 'id' | 'organizationId' | User_stddev_samp_fieldsKeySpecifier)[];
export type User_stddev_samp_fieldsFieldPolicy = {
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_sum_fieldsKeySpecifier = ('avatarId' | 'id' | 'organizationId' | User_sum_fieldsKeySpecifier)[];
export type User_sum_fieldsFieldPolicy = {
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_var_pop_fieldsKeySpecifier = ('avatarId' | 'id' | 'organizationId' | User_var_pop_fieldsKeySpecifier)[];
export type User_var_pop_fieldsFieldPolicy = {
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_var_samp_fieldsKeySpecifier = ('avatarId' | 'id' | 'organizationId' | User_var_samp_fieldsKeySpecifier)[];
export type User_var_samp_fieldsFieldPolicy = {
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_variance_fieldsKeySpecifier = ('avatarId' | 'id' | 'organizationId' | User_variance_fieldsKeySpecifier)[];
export type User_variance_fieldsFieldPolicy = {
	avatarId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorkflowKeySpecifier = ('Activities' | 'Activities_aggregate' | 'Activities_connection' | 'Organization' | 'TaskDefinitions' | 'TaskDefinitions_aggregate' | 'TaskDefinitions_connection' | 'config' | 'createdAt' | 'description' | 'id' | 'name' | 'organizationId' | 'updatedAt' | WorkflowKeySpecifier)[];
export type WorkflowFieldPolicy = {
	Activities?: FieldPolicy<any> | FieldReadFunction<any>,
	Activities_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Activities_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinitions_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorkflowConnectionKeySpecifier = ('edges' | 'pageInfo' | WorkflowConnectionKeySpecifier)[];
export type WorkflowConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorkflowEdgeKeySpecifier = ('cursor' | 'node' | WorkflowEdgeKeySpecifier)[];
export type WorkflowEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_aggregateKeySpecifier = ('aggregate' | 'nodes' | Workflow_aggregateKeySpecifier)[];
export type Workflow_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Workflow_aggregate_fieldsKeySpecifier)[];
export type Workflow_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_avg_fieldsKeySpecifier = ('id' | 'organizationId' | Workflow_avg_fieldsKeySpecifier)[];
export type Workflow_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_max_fieldsKeySpecifier = ('createdAt' | 'description' | 'id' | 'name' | 'organizationId' | 'updatedAt' | Workflow_max_fieldsKeySpecifier)[];
export type Workflow_max_fieldsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_min_fieldsKeySpecifier = ('createdAt' | 'description' | 'id' | 'name' | 'organizationId' | 'updatedAt' | Workflow_min_fieldsKeySpecifier)[];
export type Workflow_min_fieldsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Workflow_mutation_responseKeySpecifier)[];
export type Workflow_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_stddev_fieldsKeySpecifier = ('id' | 'organizationId' | Workflow_stddev_fieldsKeySpecifier)[];
export type Workflow_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_stddev_pop_fieldsKeySpecifier = ('id' | 'organizationId' | Workflow_stddev_pop_fieldsKeySpecifier)[];
export type Workflow_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_stddev_samp_fieldsKeySpecifier = ('id' | 'organizationId' | Workflow_stddev_samp_fieldsKeySpecifier)[];
export type Workflow_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_sum_fieldsKeySpecifier = ('id' | 'organizationId' | Workflow_sum_fieldsKeySpecifier)[];
export type Workflow_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_var_pop_fieldsKeySpecifier = ('id' | 'organizationId' | Workflow_var_pop_fieldsKeySpecifier)[];
export type Workflow_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_var_samp_fieldsKeySpecifier = ('id' | 'organizationId' | Workflow_var_samp_fieldsKeySpecifier)[];
export type Workflow_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Workflow_variance_fieldsKeySpecifier = ('id' | 'organizationId' | Workflow_variance_fieldsKeySpecifier)[];
export type Workflow_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _prisma_migrationsKeySpecifier = ('applied_steps_count' | 'checksum' | 'finished_at' | 'id' | 'logs' | 'migration_name' | 'rolled_back_at' | 'started_at' | _prisma_migrationsKeySpecifier)[];
export type _prisma_migrationsFieldPolicy = {
	applied_steps_count?: FieldPolicy<any> | FieldReadFunction<any>,
	checksum?: FieldPolicy<any> | FieldReadFunction<any>,
	finished_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	logs?: FieldPolicy<any> | FieldReadFunction<any>,
	migration_name?: FieldPolicy<any> | FieldReadFunction<any>,
	rolled_back_at?: FieldPolicy<any> | FieldReadFunction<any>,
	started_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _prisma_migrationsConnectionKeySpecifier = ('edges' | 'pageInfo' | _prisma_migrationsConnectionKeySpecifier)[];
export type _prisma_migrationsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _prisma_migrationsEdgeKeySpecifier = ('cursor' | 'node' | _prisma_migrationsEdgeKeySpecifier)[];
export type _prisma_migrationsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _prisma_migrations_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | _prisma_migrations_mutation_responseKeySpecifier)[];
export type _prisma_migrations_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_Action' | 'delete_Action_by_pk' | 'delete_Activity' | 'delete_Activity_by_pk' | 'delete_Comment' | 'delete_Comment_by_pk' | 'delete_EventLog' | 'delete_EventLog_by_pk' | 'delete_File' | 'delete_File_by_pk' | 'delete_Form' | 'delete_Form_by_pk' | 'delete_MemberOnTeams' | 'delete_MemberOnTeams_by_pk' | 'delete_Organization' | 'delete_Organization_by_pk' | 'delete_Permission' | 'delete_PermissionGroup' | 'delete_PermissionGroup_by_pk' | 'delete_Permission_by_pk' | 'delete_Post' | 'delete_Post_by_pk' | 'delete_Resource' | 'delete_ResourceItem' | 'delete_ResourceItem_by_pk' | 'delete_Resource_by_pk' | 'delete_Settings' | 'delete_Settings_by_pk' | 'delete_Task' | 'delete_TaskDefinition' | 'delete_TaskDefinition_by_pk' | 'delete_Task_by_pk' | 'delete_Team' | 'delete_Team_by_pk' | 'delete_Trigger' | 'delete_Trigger_by_pk' | 'delete_User' | 'delete_UserPermission' | 'delete_UserPermission_by_pk' | 'delete_User_by_pk' | 'delete_Workflow' | 'delete_Workflow_by_pk' | 'delete__prisma_migrations' | 'delete__prisma_migrations_by_pk' | 'insert_Action' | 'insert_Action_one' | 'insert_Activity' | 'insert_Activity_one' | 'insert_Comment' | 'insert_Comment_one' | 'insert_EventLog' | 'insert_EventLog_one' | 'insert_File' | 'insert_File_one' | 'insert_Form' | 'insert_Form_one' | 'insert_MemberOnTeams' | 'insert_MemberOnTeams_one' | 'insert_Organization' | 'insert_Organization_one' | 'insert_Permission' | 'insert_PermissionGroup' | 'insert_PermissionGroup_one' | 'insert_Permission_one' | 'insert_Post' | 'insert_Post_one' | 'insert_Resource' | 'insert_ResourceItem' | 'insert_ResourceItem_one' | 'insert_Resource_one' | 'insert_Settings' | 'insert_Settings_one' | 'insert_Task' | 'insert_TaskDefinition' | 'insert_TaskDefinition_one' | 'insert_Task_one' | 'insert_Team' | 'insert_Team_one' | 'insert_Trigger' | 'insert_Trigger_one' | 'insert_User' | 'insert_UserPermission' | 'insert_UserPermission_one' | 'insert_User_one' | 'insert_Workflow' | 'insert_Workflow_one' | 'insert__prisma_migrations' | 'insert__prisma_migrations_one' | 'signin' | 'update_Action' | 'update_Action_by_pk' | 'update_Action_many' | 'update_Activity' | 'update_Activity_by_pk' | 'update_Activity_many' | 'update_Comment' | 'update_Comment_by_pk' | 'update_Comment_many' | 'update_EventLog' | 'update_EventLog_by_pk' | 'update_EventLog_many' | 'update_File' | 'update_File_by_pk' | 'update_File_many' | 'update_Form' | 'update_Form_by_pk' | 'update_Form_many' | 'update_MemberOnTeams' | 'update_MemberOnTeams_by_pk' | 'update_MemberOnTeams_many' | 'update_Organization' | 'update_Organization_by_pk' | 'update_Organization_many' | 'update_Permission' | 'update_PermissionGroup' | 'update_PermissionGroup_by_pk' | 'update_PermissionGroup_many' | 'update_Permission_by_pk' | 'update_Permission_many' | 'update_Post' | 'update_Post_by_pk' | 'update_Post_many' | 'update_Resource' | 'update_ResourceItem' | 'update_ResourceItem_by_pk' | 'update_ResourceItem_many' | 'update_Resource_by_pk' | 'update_Resource_many' | 'update_Settings' | 'update_Settings_by_pk' | 'update_Settings_many' | 'update_Task' | 'update_TaskDefinition' | 'update_TaskDefinition_by_pk' | 'update_TaskDefinition_many' | 'update_Task_by_pk' | 'update_Task_many' | 'update_Team' | 'update_Team_by_pk' | 'update_Team_many' | 'update_Trigger' | 'update_Trigger_by_pk' | 'update_Trigger_many' | 'update_User' | 'update_UserPermission' | 'update_UserPermission_by_pk' | 'update_UserPermission_many' | 'update_User_by_pk' | 'update_User_many' | 'update_Workflow' | 'update_Workflow_by_pk' | 'update_Workflow_many' | 'update__prisma_migrations' | 'update__prisma_migrations_by_pk' | 'update__prisma_migrations_many' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_Action?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Action_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Activity?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Activity_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Comment?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Comment_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_EventLog?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_EventLog_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_File?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_File_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Form?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Form_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_MemberOnTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_MemberOnTeams_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Organization_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Permission?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_PermissionGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_PermissionGroup_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Permission_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Post?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Post_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_ResourceItem?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_ResourceItem_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Resource_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Settings?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Settings_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Task?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_TaskDefinition?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_TaskDefinition_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Task_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Team?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Team_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Trigger?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Trigger_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_User?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_UserPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_UserPermission_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_User_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Workflow?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Workflow_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete__prisma_migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	delete__prisma_migrations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Action?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Action_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Activity?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Activity_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Comment?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Comment_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_EventLog?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_EventLog_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_File?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_File_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Form?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Form_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_MemberOnTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_MemberOnTeams_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Organization_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Permission?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_PermissionGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_PermissionGroup_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Permission_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Post?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Post_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_ResourceItem?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_ResourceItem_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Resource_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Settings?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Settings_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Task?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_TaskDefinition?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_TaskDefinition_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Task_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Team?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Team_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Trigger?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Trigger_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_User?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_UserPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_UserPermission_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_User_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Workflow?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Workflow_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert__prisma_migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	insert__prisma_migrations_one?: FieldPolicy<any> | FieldReadFunction<any>,
	signin?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Action?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Action_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Action_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Activity?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Activity_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Activity_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Comment?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Comment_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Comment_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_EventLog?: FieldPolicy<any> | FieldReadFunction<any>,
	update_EventLog_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_EventLog_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_File?: FieldPolicy<any> | FieldReadFunction<any>,
	update_File_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_File_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Form?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Form_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Form_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_MemberOnTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	update_MemberOnTeams_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_MemberOnTeams_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Organization?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Organization_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Organization_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Permission?: FieldPolicy<any> | FieldReadFunction<any>,
	update_PermissionGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	update_PermissionGroup_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_PermissionGroup_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Permission_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Permission_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Post?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Post_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Post_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ResourceItem?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ResourceItem_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ResourceItem_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Resource_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Resource_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Settings?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Settings_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Settings_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Task?: FieldPolicy<any> | FieldReadFunction<any>,
	update_TaskDefinition?: FieldPolicy<any> | FieldReadFunction<any>,
	update_TaskDefinition_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_TaskDefinition_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Task_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Task_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Team?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Team_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Team_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Trigger?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Trigger_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Trigger_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_User?: FieldPolicy<any> | FieldReadFunction<any>,
	update_UserPermission?: FieldPolicy<any> | FieldReadFunction<any>,
	update_UserPermission_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_UserPermission_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_User_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_User_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Workflow?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Workflow_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Workflow_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update__prisma_migrations?: FieldPolicy<any> | FieldReadFunction<any>,
	update__prisma_migrations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update__prisma_migrations_many?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('Action_connection' | 'Activity_connection' | 'Comment_connection' | 'EventLog_connection' | 'File_connection' | 'Form_connection' | 'MemberOnTeams_connection' | 'Organization_connection' | 'PermissionGroup_connection' | 'Permission_connection' | 'Post_connection' | 'ResourceItem_connection' | 'Resource_connection' | 'Settings_connection' | 'TaskDefinition_connection' | 'Task_connection' | 'Team_connection' | 'Trigger_connection' | 'UserPermission_connection' | 'User_connection' | 'Workflow_connection' | '_prisma_migrations_connection' | 'node' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	Action_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Activity_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Comment_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLog_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	File_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Form_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	MemberOnTeams_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Organization_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	PermissionGroup_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Permission_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Post_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	ResourceItem_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Settings_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinition_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Task_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Team_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Trigger_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	UserPermission_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	User_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Workflow_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	_prisma_migrations_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('Action_connection' | 'Activity_connection' | 'Comment_connection' | 'EventLog_connection' | 'File_connection' | 'Form_connection' | 'MemberOnTeams_connection' | 'Organization_connection' | 'PermissionGroup_connection' | 'Permission_connection' | 'Post_connection' | 'ResourceItem_connection' | 'Resource_connection' | 'Settings_connection' | 'TaskDefinition_connection' | 'Task_connection' | 'Team_connection' | 'Trigger_connection' | 'UserPermission_connection' | 'User_connection' | 'Workflow_connection' | '_prisma_migrations_connection' | 'node' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	Action_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Activity_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Comment_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	EventLog_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	File_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Form_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	MemberOnTeams_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Organization_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	PermissionGroup_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Permission_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Post_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	ResourceItem_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Settings_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskDefinition_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Task_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Team_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Trigger_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	UserPermission_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	User_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	Workflow_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	_prisma_migrations_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Action?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActionKeySpecifier | (() => undefined | ActionKeySpecifier),
		fields?: ActionFieldPolicy,
	},
	ActionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActionConnectionKeySpecifier | (() => undefined | ActionConnectionKeySpecifier),
		fields?: ActionConnectionFieldPolicy,
	},
	ActionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActionEdgeKeySpecifier | (() => undefined | ActionEdgeKeySpecifier),
		fields?: ActionEdgeFieldPolicy,
	},
	Action_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Action_mutation_responseKeySpecifier | (() => undefined | Action_mutation_responseKeySpecifier),
		fields?: Action_mutation_responseFieldPolicy,
	},
	Activity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityKeySpecifier | (() => undefined | ActivityKeySpecifier),
		fields?: ActivityFieldPolicy,
	},
	ActivityConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityConnectionKeySpecifier | (() => undefined | ActivityConnectionKeySpecifier),
		fields?: ActivityConnectionFieldPolicy,
	},
	ActivityEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityEdgeKeySpecifier | (() => undefined | ActivityEdgeKeySpecifier),
		fields?: ActivityEdgeFieldPolicy,
	},
	Activity_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_aggregateKeySpecifier | (() => undefined | Activity_aggregateKeySpecifier),
		fields?: Activity_aggregateFieldPolicy,
	},
	Activity_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_aggregate_fieldsKeySpecifier | (() => undefined | Activity_aggregate_fieldsKeySpecifier),
		fields?: Activity_aggregate_fieldsFieldPolicy,
	},
	Activity_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_avg_fieldsKeySpecifier | (() => undefined | Activity_avg_fieldsKeySpecifier),
		fields?: Activity_avg_fieldsFieldPolicy,
	},
	Activity_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_max_fieldsKeySpecifier | (() => undefined | Activity_max_fieldsKeySpecifier),
		fields?: Activity_max_fieldsFieldPolicy,
	},
	Activity_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_min_fieldsKeySpecifier | (() => undefined | Activity_min_fieldsKeySpecifier),
		fields?: Activity_min_fieldsFieldPolicy,
	},
	Activity_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_mutation_responseKeySpecifier | (() => undefined | Activity_mutation_responseKeySpecifier),
		fields?: Activity_mutation_responseFieldPolicy,
	},
	Activity_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_stddev_fieldsKeySpecifier | (() => undefined | Activity_stddev_fieldsKeySpecifier),
		fields?: Activity_stddev_fieldsFieldPolicy,
	},
	Activity_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_stddev_pop_fieldsKeySpecifier | (() => undefined | Activity_stddev_pop_fieldsKeySpecifier),
		fields?: Activity_stddev_pop_fieldsFieldPolicy,
	},
	Activity_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_stddev_samp_fieldsKeySpecifier | (() => undefined | Activity_stddev_samp_fieldsKeySpecifier),
		fields?: Activity_stddev_samp_fieldsFieldPolicy,
	},
	Activity_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_sum_fieldsKeySpecifier | (() => undefined | Activity_sum_fieldsKeySpecifier),
		fields?: Activity_sum_fieldsFieldPolicy,
	},
	Activity_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_var_pop_fieldsKeySpecifier | (() => undefined | Activity_var_pop_fieldsKeySpecifier),
		fields?: Activity_var_pop_fieldsFieldPolicy,
	},
	Activity_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_var_samp_fieldsKeySpecifier | (() => undefined | Activity_var_samp_fieldsKeySpecifier),
		fields?: Activity_var_samp_fieldsFieldPolicy,
	},
	Activity_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Activity_variance_fieldsKeySpecifier | (() => undefined | Activity_variance_fieldsKeySpecifier),
		fields?: Activity_variance_fieldsFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentConnectionKeySpecifier | (() => undefined | CommentConnectionKeySpecifier),
		fields?: CommentConnectionFieldPolicy,
	},
	CommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentEdgeKeySpecifier | (() => undefined | CommentEdgeKeySpecifier),
		fields?: CommentEdgeFieldPolicy,
	},
	Comment_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_aggregateKeySpecifier | (() => undefined | Comment_aggregateKeySpecifier),
		fields?: Comment_aggregateFieldPolicy,
	},
	Comment_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_aggregate_fieldsKeySpecifier | (() => undefined | Comment_aggregate_fieldsKeySpecifier),
		fields?: Comment_aggregate_fieldsFieldPolicy,
	},
	Comment_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_avg_fieldsKeySpecifier | (() => undefined | Comment_avg_fieldsKeySpecifier),
		fields?: Comment_avg_fieldsFieldPolicy,
	},
	Comment_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_max_fieldsKeySpecifier | (() => undefined | Comment_max_fieldsKeySpecifier),
		fields?: Comment_max_fieldsFieldPolicy,
	},
	Comment_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_min_fieldsKeySpecifier | (() => undefined | Comment_min_fieldsKeySpecifier),
		fields?: Comment_min_fieldsFieldPolicy,
	},
	Comment_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_mutation_responseKeySpecifier | (() => undefined | Comment_mutation_responseKeySpecifier),
		fields?: Comment_mutation_responseFieldPolicy,
	},
	Comment_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_stddev_fieldsKeySpecifier | (() => undefined | Comment_stddev_fieldsKeySpecifier),
		fields?: Comment_stddev_fieldsFieldPolicy,
	},
	Comment_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_stddev_pop_fieldsKeySpecifier | (() => undefined | Comment_stddev_pop_fieldsKeySpecifier),
		fields?: Comment_stddev_pop_fieldsFieldPolicy,
	},
	Comment_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_stddev_samp_fieldsKeySpecifier | (() => undefined | Comment_stddev_samp_fieldsKeySpecifier),
		fields?: Comment_stddev_samp_fieldsFieldPolicy,
	},
	Comment_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_sum_fieldsKeySpecifier | (() => undefined | Comment_sum_fieldsKeySpecifier),
		fields?: Comment_sum_fieldsFieldPolicy,
	},
	Comment_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_var_pop_fieldsKeySpecifier | (() => undefined | Comment_var_pop_fieldsKeySpecifier),
		fields?: Comment_var_pop_fieldsFieldPolicy,
	},
	Comment_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_var_samp_fieldsKeySpecifier | (() => undefined | Comment_var_samp_fieldsKeySpecifier),
		fields?: Comment_var_samp_fieldsFieldPolicy,
	},
	Comment_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Comment_variance_fieldsKeySpecifier | (() => undefined | Comment_variance_fieldsKeySpecifier),
		fields?: Comment_variance_fieldsFieldPolicy,
	},
	EventLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLogKeySpecifier | (() => undefined | EventLogKeySpecifier),
		fields?: EventLogFieldPolicy,
	},
	EventLogConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLogConnectionKeySpecifier | (() => undefined | EventLogConnectionKeySpecifier),
		fields?: EventLogConnectionFieldPolicy,
	},
	EventLogEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLogEdgeKeySpecifier | (() => undefined | EventLogEdgeKeySpecifier),
		fields?: EventLogEdgeFieldPolicy,
	},
	EventLog_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_aggregateKeySpecifier | (() => undefined | EventLog_aggregateKeySpecifier),
		fields?: EventLog_aggregateFieldPolicy,
	},
	EventLog_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_aggregate_fieldsKeySpecifier | (() => undefined | EventLog_aggregate_fieldsKeySpecifier),
		fields?: EventLog_aggregate_fieldsFieldPolicy,
	},
	EventLog_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_avg_fieldsKeySpecifier | (() => undefined | EventLog_avg_fieldsKeySpecifier),
		fields?: EventLog_avg_fieldsFieldPolicy,
	},
	EventLog_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_max_fieldsKeySpecifier | (() => undefined | EventLog_max_fieldsKeySpecifier),
		fields?: EventLog_max_fieldsFieldPolicy,
	},
	EventLog_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_min_fieldsKeySpecifier | (() => undefined | EventLog_min_fieldsKeySpecifier),
		fields?: EventLog_min_fieldsFieldPolicy,
	},
	EventLog_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_mutation_responseKeySpecifier | (() => undefined | EventLog_mutation_responseKeySpecifier),
		fields?: EventLog_mutation_responseFieldPolicy,
	},
	EventLog_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_stddev_fieldsKeySpecifier | (() => undefined | EventLog_stddev_fieldsKeySpecifier),
		fields?: EventLog_stddev_fieldsFieldPolicy,
	},
	EventLog_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_stddev_pop_fieldsKeySpecifier | (() => undefined | EventLog_stddev_pop_fieldsKeySpecifier),
		fields?: EventLog_stddev_pop_fieldsFieldPolicy,
	},
	EventLog_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_stddev_samp_fieldsKeySpecifier | (() => undefined | EventLog_stddev_samp_fieldsKeySpecifier),
		fields?: EventLog_stddev_samp_fieldsFieldPolicy,
	},
	EventLog_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_sum_fieldsKeySpecifier | (() => undefined | EventLog_sum_fieldsKeySpecifier),
		fields?: EventLog_sum_fieldsFieldPolicy,
	},
	EventLog_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_var_pop_fieldsKeySpecifier | (() => undefined | EventLog_var_pop_fieldsKeySpecifier),
		fields?: EventLog_var_pop_fieldsFieldPolicy,
	},
	EventLog_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_var_samp_fieldsKeySpecifier | (() => undefined | EventLog_var_samp_fieldsKeySpecifier),
		fields?: EventLog_var_samp_fieldsFieldPolicy,
	},
	EventLog_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventLog_variance_fieldsKeySpecifier | (() => undefined | EventLog_variance_fieldsKeySpecifier),
		fields?: EventLog_variance_fieldsFieldPolicy,
	},
	File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		fields?: FileFieldPolicy,
	},
	FileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileConnectionKeySpecifier | (() => undefined | FileConnectionKeySpecifier),
		fields?: FileConnectionFieldPolicy,
	},
	FileEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileEdgeKeySpecifier | (() => undefined | FileEdgeKeySpecifier),
		fields?: FileEdgeFieldPolicy,
	},
	File_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_aggregateKeySpecifier | (() => undefined | File_aggregateKeySpecifier),
		fields?: File_aggregateFieldPolicy,
	},
	File_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_aggregate_fieldsKeySpecifier | (() => undefined | File_aggregate_fieldsKeySpecifier),
		fields?: File_aggregate_fieldsFieldPolicy,
	},
	File_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_avg_fieldsKeySpecifier | (() => undefined | File_avg_fieldsKeySpecifier),
		fields?: File_avg_fieldsFieldPolicy,
	},
	File_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_max_fieldsKeySpecifier | (() => undefined | File_max_fieldsKeySpecifier),
		fields?: File_max_fieldsFieldPolicy,
	},
	File_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_min_fieldsKeySpecifier | (() => undefined | File_min_fieldsKeySpecifier),
		fields?: File_min_fieldsFieldPolicy,
	},
	File_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_mutation_responseKeySpecifier | (() => undefined | File_mutation_responseKeySpecifier),
		fields?: File_mutation_responseFieldPolicy,
	},
	File_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_stddev_fieldsKeySpecifier | (() => undefined | File_stddev_fieldsKeySpecifier),
		fields?: File_stddev_fieldsFieldPolicy,
	},
	File_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_stddev_pop_fieldsKeySpecifier | (() => undefined | File_stddev_pop_fieldsKeySpecifier),
		fields?: File_stddev_pop_fieldsFieldPolicy,
	},
	File_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_stddev_samp_fieldsKeySpecifier | (() => undefined | File_stddev_samp_fieldsKeySpecifier),
		fields?: File_stddev_samp_fieldsFieldPolicy,
	},
	File_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_sum_fieldsKeySpecifier | (() => undefined | File_sum_fieldsKeySpecifier),
		fields?: File_sum_fieldsFieldPolicy,
	},
	File_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_var_pop_fieldsKeySpecifier | (() => undefined | File_var_pop_fieldsKeySpecifier),
		fields?: File_var_pop_fieldsFieldPolicy,
	},
	File_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_var_samp_fieldsKeySpecifier | (() => undefined | File_var_samp_fieldsKeySpecifier),
		fields?: File_var_samp_fieldsFieldPolicy,
	},
	File_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | File_variance_fieldsKeySpecifier | (() => undefined | File_variance_fieldsKeySpecifier),
		fields?: File_variance_fieldsFieldPolicy,
	},
	Form?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FormKeySpecifier | (() => undefined | FormKeySpecifier),
		fields?: FormFieldPolicy,
	},
	FormConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FormConnectionKeySpecifier | (() => undefined | FormConnectionKeySpecifier),
		fields?: FormConnectionFieldPolicy,
	},
	FormEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FormEdgeKeySpecifier | (() => undefined | FormEdgeKeySpecifier),
		fields?: FormEdgeFieldPolicy,
	},
	Form_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Form_mutation_responseKeySpecifier | (() => undefined | Form_mutation_responseKeySpecifier),
		fields?: Form_mutation_responseFieldPolicy,
	},
	LoginAuth?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginAuthKeySpecifier | (() => undefined | LoginAuthKeySpecifier),
		fields?: LoginAuthFieldPolicy,
	},
	LoginUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginUserKeySpecifier | (() => undefined | LoginUserKeySpecifier),
		fields?: LoginUserFieldPolicy,
	},
	MemberOnTeams?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeamsKeySpecifier | (() => undefined | MemberOnTeamsKeySpecifier),
		fields?: MemberOnTeamsFieldPolicy,
	},
	MemberOnTeamsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeamsConnectionKeySpecifier | (() => undefined | MemberOnTeamsConnectionKeySpecifier),
		fields?: MemberOnTeamsConnectionFieldPolicy,
	},
	MemberOnTeamsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeamsEdgeKeySpecifier | (() => undefined | MemberOnTeamsEdgeKeySpecifier),
		fields?: MemberOnTeamsEdgeFieldPolicy,
	},
	MemberOnTeams_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_aggregateKeySpecifier | (() => undefined | MemberOnTeams_aggregateKeySpecifier),
		fields?: MemberOnTeams_aggregateFieldPolicy,
	},
	MemberOnTeams_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_aggregate_fieldsKeySpecifier | (() => undefined | MemberOnTeams_aggregate_fieldsKeySpecifier),
		fields?: MemberOnTeams_aggregate_fieldsFieldPolicy,
	},
	MemberOnTeams_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_avg_fieldsKeySpecifier | (() => undefined | MemberOnTeams_avg_fieldsKeySpecifier),
		fields?: MemberOnTeams_avg_fieldsFieldPolicy,
	},
	MemberOnTeams_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_max_fieldsKeySpecifier | (() => undefined | MemberOnTeams_max_fieldsKeySpecifier),
		fields?: MemberOnTeams_max_fieldsFieldPolicy,
	},
	MemberOnTeams_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_min_fieldsKeySpecifier | (() => undefined | MemberOnTeams_min_fieldsKeySpecifier),
		fields?: MemberOnTeams_min_fieldsFieldPolicy,
	},
	MemberOnTeams_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_mutation_responseKeySpecifier | (() => undefined | MemberOnTeams_mutation_responseKeySpecifier),
		fields?: MemberOnTeams_mutation_responseFieldPolicy,
	},
	MemberOnTeams_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_stddev_fieldsKeySpecifier | (() => undefined | MemberOnTeams_stddev_fieldsKeySpecifier),
		fields?: MemberOnTeams_stddev_fieldsFieldPolicy,
	},
	MemberOnTeams_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_stddev_pop_fieldsKeySpecifier | (() => undefined | MemberOnTeams_stddev_pop_fieldsKeySpecifier),
		fields?: MemberOnTeams_stddev_pop_fieldsFieldPolicy,
	},
	MemberOnTeams_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_stddev_samp_fieldsKeySpecifier | (() => undefined | MemberOnTeams_stddev_samp_fieldsKeySpecifier),
		fields?: MemberOnTeams_stddev_samp_fieldsFieldPolicy,
	},
	MemberOnTeams_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_sum_fieldsKeySpecifier | (() => undefined | MemberOnTeams_sum_fieldsKeySpecifier),
		fields?: MemberOnTeams_sum_fieldsFieldPolicy,
	},
	MemberOnTeams_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_var_pop_fieldsKeySpecifier | (() => undefined | MemberOnTeams_var_pop_fieldsKeySpecifier),
		fields?: MemberOnTeams_var_pop_fieldsFieldPolicy,
	},
	MemberOnTeams_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_var_samp_fieldsKeySpecifier | (() => undefined | MemberOnTeams_var_samp_fieldsKeySpecifier),
		fields?: MemberOnTeams_var_samp_fieldsFieldPolicy,
	},
	MemberOnTeams_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberOnTeams_variance_fieldsKeySpecifier | (() => undefined | MemberOnTeams_variance_fieldsKeySpecifier),
		fields?: MemberOnTeams_variance_fieldsFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	Organization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationKeySpecifier | (() => undefined | OrganizationKeySpecifier),
		fields?: OrganizationFieldPolicy,
	},
	OrganizationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationConnectionKeySpecifier | (() => undefined | OrganizationConnectionKeySpecifier),
		fields?: OrganizationConnectionFieldPolicy,
	},
	OrganizationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationEdgeKeySpecifier | (() => undefined | OrganizationEdgeKeySpecifier),
		fields?: OrganizationEdgeFieldPolicy,
	},
	Organization_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Organization_mutation_responseKeySpecifier | (() => undefined | Organization_mutation_responseKeySpecifier),
		fields?: Organization_mutation_responseFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Permission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionKeySpecifier | (() => undefined | PermissionKeySpecifier),
		fields?: PermissionFieldPolicy,
	},
	PermissionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionConnectionKeySpecifier | (() => undefined | PermissionConnectionKeySpecifier),
		fields?: PermissionConnectionFieldPolicy,
	},
	PermissionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionEdgeKeySpecifier | (() => undefined | PermissionEdgeKeySpecifier),
		fields?: PermissionEdgeFieldPolicy,
	},
	PermissionGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupKeySpecifier | (() => undefined | PermissionGroupKeySpecifier),
		fields?: PermissionGroupFieldPolicy,
	},
	PermissionGroupConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupConnectionKeySpecifier | (() => undefined | PermissionGroupConnectionKeySpecifier),
		fields?: PermissionGroupConnectionFieldPolicy,
	},
	PermissionGroupEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupEdgeKeySpecifier | (() => undefined | PermissionGroupEdgeKeySpecifier),
		fields?: PermissionGroupEdgeFieldPolicy,
	},
	PermissionGroup_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_aggregateKeySpecifier | (() => undefined | PermissionGroup_aggregateKeySpecifier),
		fields?: PermissionGroup_aggregateFieldPolicy,
	},
	PermissionGroup_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_aggregate_fieldsKeySpecifier | (() => undefined | PermissionGroup_aggregate_fieldsKeySpecifier),
		fields?: PermissionGroup_aggregate_fieldsFieldPolicy,
	},
	PermissionGroup_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_avg_fieldsKeySpecifier | (() => undefined | PermissionGroup_avg_fieldsKeySpecifier),
		fields?: PermissionGroup_avg_fieldsFieldPolicy,
	},
	PermissionGroup_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_max_fieldsKeySpecifier | (() => undefined | PermissionGroup_max_fieldsKeySpecifier),
		fields?: PermissionGroup_max_fieldsFieldPolicy,
	},
	PermissionGroup_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_min_fieldsKeySpecifier | (() => undefined | PermissionGroup_min_fieldsKeySpecifier),
		fields?: PermissionGroup_min_fieldsFieldPolicy,
	},
	PermissionGroup_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_mutation_responseKeySpecifier | (() => undefined | PermissionGroup_mutation_responseKeySpecifier),
		fields?: PermissionGroup_mutation_responseFieldPolicy,
	},
	PermissionGroup_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_stddev_fieldsKeySpecifier | (() => undefined | PermissionGroup_stddev_fieldsKeySpecifier),
		fields?: PermissionGroup_stddev_fieldsFieldPolicy,
	},
	PermissionGroup_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_stddev_pop_fieldsKeySpecifier | (() => undefined | PermissionGroup_stddev_pop_fieldsKeySpecifier),
		fields?: PermissionGroup_stddev_pop_fieldsFieldPolicy,
	},
	PermissionGroup_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_stddev_samp_fieldsKeySpecifier | (() => undefined | PermissionGroup_stddev_samp_fieldsKeySpecifier),
		fields?: PermissionGroup_stddev_samp_fieldsFieldPolicy,
	},
	PermissionGroup_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_sum_fieldsKeySpecifier | (() => undefined | PermissionGroup_sum_fieldsKeySpecifier),
		fields?: PermissionGroup_sum_fieldsFieldPolicy,
	},
	PermissionGroup_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_var_pop_fieldsKeySpecifier | (() => undefined | PermissionGroup_var_pop_fieldsKeySpecifier),
		fields?: PermissionGroup_var_pop_fieldsFieldPolicy,
	},
	PermissionGroup_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_var_samp_fieldsKeySpecifier | (() => undefined | PermissionGroup_var_samp_fieldsKeySpecifier),
		fields?: PermissionGroup_var_samp_fieldsFieldPolicy,
	},
	PermissionGroup_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroup_variance_fieldsKeySpecifier | (() => undefined | PermissionGroup_variance_fieldsKeySpecifier),
		fields?: PermissionGroup_variance_fieldsFieldPolicy,
	},
	Permission_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_aggregateKeySpecifier | (() => undefined | Permission_aggregateKeySpecifier),
		fields?: Permission_aggregateFieldPolicy,
	},
	Permission_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_aggregate_fieldsKeySpecifier | (() => undefined | Permission_aggregate_fieldsKeySpecifier),
		fields?: Permission_aggregate_fieldsFieldPolicy,
	},
	Permission_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_avg_fieldsKeySpecifier | (() => undefined | Permission_avg_fieldsKeySpecifier),
		fields?: Permission_avg_fieldsFieldPolicy,
	},
	Permission_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_max_fieldsKeySpecifier | (() => undefined | Permission_max_fieldsKeySpecifier),
		fields?: Permission_max_fieldsFieldPolicy,
	},
	Permission_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_min_fieldsKeySpecifier | (() => undefined | Permission_min_fieldsKeySpecifier),
		fields?: Permission_min_fieldsFieldPolicy,
	},
	Permission_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_mutation_responseKeySpecifier | (() => undefined | Permission_mutation_responseKeySpecifier),
		fields?: Permission_mutation_responseFieldPolicy,
	},
	Permission_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_stddev_fieldsKeySpecifier | (() => undefined | Permission_stddev_fieldsKeySpecifier),
		fields?: Permission_stddev_fieldsFieldPolicy,
	},
	Permission_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_stddev_pop_fieldsKeySpecifier | (() => undefined | Permission_stddev_pop_fieldsKeySpecifier),
		fields?: Permission_stddev_pop_fieldsFieldPolicy,
	},
	Permission_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_stddev_samp_fieldsKeySpecifier | (() => undefined | Permission_stddev_samp_fieldsKeySpecifier),
		fields?: Permission_stddev_samp_fieldsFieldPolicy,
	},
	Permission_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_sum_fieldsKeySpecifier | (() => undefined | Permission_sum_fieldsKeySpecifier),
		fields?: Permission_sum_fieldsFieldPolicy,
	},
	Permission_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_var_pop_fieldsKeySpecifier | (() => undefined | Permission_var_pop_fieldsKeySpecifier),
		fields?: Permission_var_pop_fieldsFieldPolicy,
	},
	Permission_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_var_samp_fieldsKeySpecifier | (() => undefined | Permission_var_samp_fieldsKeySpecifier),
		fields?: Permission_var_samp_fieldsFieldPolicy,
	},
	Permission_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Permission_variance_fieldsKeySpecifier | (() => undefined | Permission_variance_fieldsKeySpecifier),
		fields?: Permission_variance_fieldsFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	PostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostConnectionKeySpecifier | (() => undefined | PostConnectionKeySpecifier),
		fields?: PostConnectionFieldPolicy,
	},
	PostEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostEdgeKeySpecifier | (() => undefined | PostEdgeKeySpecifier),
		fields?: PostEdgeFieldPolicy,
	},
	Post_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_aggregateKeySpecifier | (() => undefined | Post_aggregateKeySpecifier),
		fields?: Post_aggregateFieldPolicy,
	},
	Post_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_aggregate_fieldsKeySpecifier | (() => undefined | Post_aggregate_fieldsKeySpecifier),
		fields?: Post_aggregate_fieldsFieldPolicy,
	},
	Post_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_avg_fieldsKeySpecifier | (() => undefined | Post_avg_fieldsKeySpecifier),
		fields?: Post_avg_fieldsFieldPolicy,
	},
	Post_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_max_fieldsKeySpecifier | (() => undefined | Post_max_fieldsKeySpecifier),
		fields?: Post_max_fieldsFieldPolicy,
	},
	Post_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_min_fieldsKeySpecifier | (() => undefined | Post_min_fieldsKeySpecifier),
		fields?: Post_min_fieldsFieldPolicy,
	},
	Post_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_mutation_responseKeySpecifier | (() => undefined | Post_mutation_responseKeySpecifier),
		fields?: Post_mutation_responseFieldPolicy,
	},
	Post_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_stddev_fieldsKeySpecifier | (() => undefined | Post_stddev_fieldsKeySpecifier),
		fields?: Post_stddev_fieldsFieldPolicy,
	},
	Post_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_stddev_pop_fieldsKeySpecifier | (() => undefined | Post_stddev_pop_fieldsKeySpecifier),
		fields?: Post_stddev_pop_fieldsFieldPolicy,
	},
	Post_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_stddev_samp_fieldsKeySpecifier | (() => undefined | Post_stddev_samp_fieldsKeySpecifier),
		fields?: Post_stddev_samp_fieldsFieldPolicy,
	},
	Post_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_sum_fieldsKeySpecifier | (() => undefined | Post_sum_fieldsKeySpecifier),
		fields?: Post_sum_fieldsFieldPolicy,
	},
	Post_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_var_pop_fieldsKeySpecifier | (() => undefined | Post_var_pop_fieldsKeySpecifier),
		fields?: Post_var_pop_fieldsFieldPolicy,
	},
	Post_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_var_samp_fieldsKeySpecifier | (() => undefined | Post_var_samp_fieldsKeySpecifier),
		fields?: Post_var_samp_fieldsFieldPolicy,
	},
	Post_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Post_variance_fieldsKeySpecifier | (() => undefined | Post_variance_fieldsKeySpecifier),
		fields?: Post_variance_fieldsFieldPolicy,
	},
	Resource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceKeySpecifier | (() => undefined | ResourceKeySpecifier),
		fields?: ResourceFieldPolicy,
	},
	ResourceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceConnectionKeySpecifier | (() => undefined | ResourceConnectionKeySpecifier),
		fields?: ResourceConnectionFieldPolicy,
	},
	ResourceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceEdgeKeySpecifier | (() => undefined | ResourceEdgeKeySpecifier),
		fields?: ResourceEdgeFieldPolicy,
	},
	ResourceItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItemKeySpecifier | (() => undefined | ResourceItemKeySpecifier),
		fields?: ResourceItemFieldPolicy,
	},
	ResourceItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItemConnectionKeySpecifier | (() => undefined | ResourceItemConnectionKeySpecifier),
		fields?: ResourceItemConnectionFieldPolicy,
	},
	ResourceItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItemEdgeKeySpecifier | (() => undefined | ResourceItemEdgeKeySpecifier),
		fields?: ResourceItemEdgeFieldPolicy,
	},
	ResourceItem_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_aggregateKeySpecifier | (() => undefined | ResourceItem_aggregateKeySpecifier),
		fields?: ResourceItem_aggregateFieldPolicy,
	},
	ResourceItem_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_aggregate_fieldsKeySpecifier | (() => undefined | ResourceItem_aggregate_fieldsKeySpecifier),
		fields?: ResourceItem_aggregate_fieldsFieldPolicy,
	},
	ResourceItem_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_avg_fieldsKeySpecifier | (() => undefined | ResourceItem_avg_fieldsKeySpecifier),
		fields?: ResourceItem_avg_fieldsFieldPolicy,
	},
	ResourceItem_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_max_fieldsKeySpecifier | (() => undefined | ResourceItem_max_fieldsKeySpecifier),
		fields?: ResourceItem_max_fieldsFieldPolicy,
	},
	ResourceItem_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_min_fieldsKeySpecifier | (() => undefined | ResourceItem_min_fieldsKeySpecifier),
		fields?: ResourceItem_min_fieldsFieldPolicy,
	},
	ResourceItem_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_mutation_responseKeySpecifier | (() => undefined | ResourceItem_mutation_responseKeySpecifier),
		fields?: ResourceItem_mutation_responseFieldPolicy,
	},
	ResourceItem_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_stddev_fieldsKeySpecifier | (() => undefined | ResourceItem_stddev_fieldsKeySpecifier),
		fields?: ResourceItem_stddev_fieldsFieldPolicy,
	},
	ResourceItem_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_stddev_pop_fieldsKeySpecifier | (() => undefined | ResourceItem_stddev_pop_fieldsKeySpecifier),
		fields?: ResourceItem_stddev_pop_fieldsFieldPolicy,
	},
	ResourceItem_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_stddev_samp_fieldsKeySpecifier | (() => undefined | ResourceItem_stddev_samp_fieldsKeySpecifier),
		fields?: ResourceItem_stddev_samp_fieldsFieldPolicy,
	},
	ResourceItem_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_sum_fieldsKeySpecifier | (() => undefined | ResourceItem_sum_fieldsKeySpecifier),
		fields?: ResourceItem_sum_fieldsFieldPolicy,
	},
	ResourceItem_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_var_pop_fieldsKeySpecifier | (() => undefined | ResourceItem_var_pop_fieldsKeySpecifier),
		fields?: ResourceItem_var_pop_fieldsFieldPolicy,
	},
	ResourceItem_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_var_samp_fieldsKeySpecifier | (() => undefined | ResourceItem_var_samp_fieldsKeySpecifier),
		fields?: ResourceItem_var_samp_fieldsFieldPolicy,
	},
	ResourceItem_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceItem_variance_fieldsKeySpecifier | (() => undefined | ResourceItem_variance_fieldsKeySpecifier),
		fields?: ResourceItem_variance_fieldsFieldPolicy,
	},
	Resource_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_aggregateKeySpecifier | (() => undefined | Resource_aggregateKeySpecifier),
		fields?: Resource_aggregateFieldPolicy,
	},
	Resource_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_aggregate_fieldsKeySpecifier | (() => undefined | Resource_aggregate_fieldsKeySpecifier),
		fields?: Resource_aggregate_fieldsFieldPolicy,
	},
	Resource_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_avg_fieldsKeySpecifier | (() => undefined | Resource_avg_fieldsKeySpecifier),
		fields?: Resource_avg_fieldsFieldPolicy,
	},
	Resource_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_max_fieldsKeySpecifier | (() => undefined | Resource_max_fieldsKeySpecifier),
		fields?: Resource_max_fieldsFieldPolicy,
	},
	Resource_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_min_fieldsKeySpecifier | (() => undefined | Resource_min_fieldsKeySpecifier),
		fields?: Resource_min_fieldsFieldPolicy,
	},
	Resource_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_mutation_responseKeySpecifier | (() => undefined | Resource_mutation_responseKeySpecifier),
		fields?: Resource_mutation_responseFieldPolicy,
	},
	Resource_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_stddev_fieldsKeySpecifier | (() => undefined | Resource_stddev_fieldsKeySpecifier),
		fields?: Resource_stddev_fieldsFieldPolicy,
	},
	Resource_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_stddev_pop_fieldsKeySpecifier | (() => undefined | Resource_stddev_pop_fieldsKeySpecifier),
		fields?: Resource_stddev_pop_fieldsFieldPolicy,
	},
	Resource_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_stddev_samp_fieldsKeySpecifier | (() => undefined | Resource_stddev_samp_fieldsKeySpecifier),
		fields?: Resource_stddev_samp_fieldsFieldPolicy,
	},
	Resource_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_sum_fieldsKeySpecifier | (() => undefined | Resource_sum_fieldsKeySpecifier),
		fields?: Resource_sum_fieldsFieldPolicy,
	},
	Resource_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_var_pop_fieldsKeySpecifier | (() => undefined | Resource_var_pop_fieldsKeySpecifier),
		fields?: Resource_var_pop_fieldsFieldPolicy,
	},
	Resource_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_var_samp_fieldsKeySpecifier | (() => undefined | Resource_var_samp_fieldsKeySpecifier),
		fields?: Resource_var_samp_fieldsFieldPolicy,
	},
	Resource_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Resource_variance_fieldsKeySpecifier | (() => undefined | Resource_variance_fieldsKeySpecifier),
		fields?: Resource_variance_fieldsFieldPolicy,
	},
	Settings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsKeySpecifier | (() => undefined | SettingsKeySpecifier),
		fields?: SettingsFieldPolicy,
	},
	SettingsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsConnectionKeySpecifier | (() => undefined | SettingsConnectionKeySpecifier),
		fields?: SettingsConnectionFieldPolicy,
	},
	SettingsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsEdgeKeySpecifier | (() => undefined | SettingsEdgeKeySpecifier),
		fields?: SettingsEdgeFieldPolicy,
	},
	Settings_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_aggregateKeySpecifier | (() => undefined | Settings_aggregateKeySpecifier),
		fields?: Settings_aggregateFieldPolicy,
	},
	Settings_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_aggregate_fieldsKeySpecifier | (() => undefined | Settings_aggregate_fieldsKeySpecifier),
		fields?: Settings_aggregate_fieldsFieldPolicy,
	},
	Settings_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_avg_fieldsKeySpecifier | (() => undefined | Settings_avg_fieldsKeySpecifier),
		fields?: Settings_avg_fieldsFieldPolicy,
	},
	Settings_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_max_fieldsKeySpecifier | (() => undefined | Settings_max_fieldsKeySpecifier),
		fields?: Settings_max_fieldsFieldPolicy,
	},
	Settings_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_min_fieldsKeySpecifier | (() => undefined | Settings_min_fieldsKeySpecifier),
		fields?: Settings_min_fieldsFieldPolicy,
	},
	Settings_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_mutation_responseKeySpecifier | (() => undefined | Settings_mutation_responseKeySpecifier),
		fields?: Settings_mutation_responseFieldPolicy,
	},
	Settings_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_stddev_fieldsKeySpecifier | (() => undefined | Settings_stddev_fieldsKeySpecifier),
		fields?: Settings_stddev_fieldsFieldPolicy,
	},
	Settings_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_stddev_pop_fieldsKeySpecifier | (() => undefined | Settings_stddev_pop_fieldsKeySpecifier),
		fields?: Settings_stddev_pop_fieldsFieldPolicy,
	},
	Settings_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_stddev_samp_fieldsKeySpecifier | (() => undefined | Settings_stddev_samp_fieldsKeySpecifier),
		fields?: Settings_stddev_samp_fieldsFieldPolicy,
	},
	Settings_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_sum_fieldsKeySpecifier | (() => undefined | Settings_sum_fieldsKeySpecifier),
		fields?: Settings_sum_fieldsFieldPolicy,
	},
	Settings_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_var_pop_fieldsKeySpecifier | (() => undefined | Settings_var_pop_fieldsKeySpecifier),
		fields?: Settings_var_pop_fieldsFieldPolicy,
	},
	Settings_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_var_samp_fieldsKeySpecifier | (() => undefined | Settings_var_samp_fieldsKeySpecifier),
		fields?: Settings_var_samp_fieldsFieldPolicy,
	},
	Settings_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Settings_variance_fieldsKeySpecifier | (() => undefined | Settings_variance_fieldsKeySpecifier),
		fields?: Settings_variance_fieldsFieldPolicy,
	},
	Task?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskKeySpecifier | (() => undefined | TaskKeySpecifier),
		fields?: TaskFieldPolicy,
	},
	TaskConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskConnectionKeySpecifier | (() => undefined | TaskConnectionKeySpecifier),
		fields?: TaskConnectionFieldPolicy,
	},
	TaskDefinition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinitionKeySpecifier | (() => undefined | TaskDefinitionKeySpecifier),
		fields?: TaskDefinitionFieldPolicy,
	},
	TaskDefinitionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinitionConnectionKeySpecifier | (() => undefined | TaskDefinitionConnectionKeySpecifier),
		fields?: TaskDefinitionConnectionFieldPolicy,
	},
	TaskDefinitionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinitionEdgeKeySpecifier | (() => undefined | TaskDefinitionEdgeKeySpecifier),
		fields?: TaskDefinitionEdgeFieldPolicy,
	},
	TaskDefinition_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_aggregateKeySpecifier | (() => undefined | TaskDefinition_aggregateKeySpecifier),
		fields?: TaskDefinition_aggregateFieldPolicy,
	},
	TaskDefinition_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_aggregate_fieldsKeySpecifier | (() => undefined | TaskDefinition_aggregate_fieldsKeySpecifier),
		fields?: TaskDefinition_aggregate_fieldsFieldPolicy,
	},
	TaskDefinition_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_avg_fieldsKeySpecifier | (() => undefined | TaskDefinition_avg_fieldsKeySpecifier),
		fields?: TaskDefinition_avg_fieldsFieldPolicy,
	},
	TaskDefinition_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_max_fieldsKeySpecifier | (() => undefined | TaskDefinition_max_fieldsKeySpecifier),
		fields?: TaskDefinition_max_fieldsFieldPolicy,
	},
	TaskDefinition_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_min_fieldsKeySpecifier | (() => undefined | TaskDefinition_min_fieldsKeySpecifier),
		fields?: TaskDefinition_min_fieldsFieldPolicy,
	},
	TaskDefinition_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_mutation_responseKeySpecifier | (() => undefined | TaskDefinition_mutation_responseKeySpecifier),
		fields?: TaskDefinition_mutation_responseFieldPolicy,
	},
	TaskDefinition_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_stddev_fieldsKeySpecifier | (() => undefined | TaskDefinition_stddev_fieldsKeySpecifier),
		fields?: TaskDefinition_stddev_fieldsFieldPolicy,
	},
	TaskDefinition_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_stddev_pop_fieldsKeySpecifier | (() => undefined | TaskDefinition_stddev_pop_fieldsKeySpecifier),
		fields?: TaskDefinition_stddev_pop_fieldsFieldPolicy,
	},
	TaskDefinition_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_stddev_samp_fieldsKeySpecifier | (() => undefined | TaskDefinition_stddev_samp_fieldsKeySpecifier),
		fields?: TaskDefinition_stddev_samp_fieldsFieldPolicy,
	},
	TaskDefinition_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_sum_fieldsKeySpecifier | (() => undefined | TaskDefinition_sum_fieldsKeySpecifier),
		fields?: TaskDefinition_sum_fieldsFieldPolicy,
	},
	TaskDefinition_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_var_pop_fieldsKeySpecifier | (() => undefined | TaskDefinition_var_pop_fieldsKeySpecifier),
		fields?: TaskDefinition_var_pop_fieldsFieldPolicy,
	},
	TaskDefinition_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_var_samp_fieldsKeySpecifier | (() => undefined | TaskDefinition_var_samp_fieldsKeySpecifier),
		fields?: TaskDefinition_var_samp_fieldsFieldPolicy,
	},
	TaskDefinition_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskDefinition_variance_fieldsKeySpecifier | (() => undefined | TaskDefinition_variance_fieldsKeySpecifier),
		fields?: TaskDefinition_variance_fieldsFieldPolicy,
	},
	TaskEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskEdgeKeySpecifier | (() => undefined | TaskEdgeKeySpecifier),
		fields?: TaskEdgeFieldPolicy,
	},
	Task_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_aggregateKeySpecifier | (() => undefined | Task_aggregateKeySpecifier),
		fields?: Task_aggregateFieldPolicy,
	},
	Task_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_aggregate_fieldsKeySpecifier | (() => undefined | Task_aggregate_fieldsKeySpecifier),
		fields?: Task_aggregate_fieldsFieldPolicy,
	},
	Task_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_avg_fieldsKeySpecifier | (() => undefined | Task_avg_fieldsKeySpecifier),
		fields?: Task_avg_fieldsFieldPolicy,
	},
	Task_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_max_fieldsKeySpecifier | (() => undefined | Task_max_fieldsKeySpecifier),
		fields?: Task_max_fieldsFieldPolicy,
	},
	Task_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_min_fieldsKeySpecifier | (() => undefined | Task_min_fieldsKeySpecifier),
		fields?: Task_min_fieldsFieldPolicy,
	},
	Task_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_mutation_responseKeySpecifier | (() => undefined | Task_mutation_responseKeySpecifier),
		fields?: Task_mutation_responseFieldPolicy,
	},
	Task_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_stddev_fieldsKeySpecifier | (() => undefined | Task_stddev_fieldsKeySpecifier),
		fields?: Task_stddev_fieldsFieldPolicy,
	},
	Task_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_stddev_pop_fieldsKeySpecifier | (() => undefined | Task_stddev_pop_fieldsKeySpecifier),
		fields?: Task_stddev_pop_fieldsFieldPolicy,
	},
	Task_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_stddev_samp_fieldsKeySpecifier | (() => undefined | Task_stddev_samp_fieldsKeySpecifier),
		fields?: Task_stddev_samp_fieldsFieldPolicy,
	},
	Task_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_sum_fieldsKeySpecifier | (() => undefined | Task_sum_fieldsKeySpecifier),
		fields?: Task_sum_fieldsFieldPolicy,
	},
	Task_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_var_pop_fieldsKeySpecifier | (() => undefined | Task_var_pop_fieldsKeySpecifier),
		fields?: Task_var_pop_fieldsFieldPolicy,
	},
	Task_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_var_samp_fieldsKeySpecifier | (() => undefined | Task_var_samp_fieldsKeySpecifier),
		fields?: Task_var_samp_fieldsFieldPolicy,
	},
	Task_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Task_variance_fieldsKeySpecifier | (() => undefined | Task_variance_fieldsKeySpecifier),
		fields?: Task_variance_fieldsFieldPolicy,
	},
	Team?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamKeySpecifier | (() => undefined | TeamKeySpecifier),
		fields?: TeamFieldPolicy,
	},
	TeamConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamConnectionKeySpecifier | (() => undefined | TeamConnectionKeySpecifier),
		fields?: TeamConnectionFieldPolicy,
	},
	TeamEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamEdgeKeySpecifier | (() => undefined | TeamEdgeKeySpecifier),
		fields?: TeamEdgeFieldPolicy,
	},
	Team_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_aggregateKeySpecifier | (() => undefined | Team_aggregateKeySpecifier),
		fields?: Team_aggregateFieldPolicy,
	},
	Team_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_aggregate_fieldsKeySpecifier | (() => undefined | Team_aggregate_fieldsKeySpecifier),
		fields?: Team_aggregate_fieldsFieldPolicy,
	},
	Team_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_avg_fieldsKeySpecifier | (() => undefined | Team_avg_fieldsKeySpecifier),
		fields?: Team_avg_fieldsFieldPolicy,
	},
	Team_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_max_fieldsKeySpecifier | (() => undefined | Team_max_fieldsKeySpecifier),
		fields?: Team_max_fieldsFieldPolicy,
	},
	Team_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_min_fieldsKeySpecifier | (() => undefined | Team_min_fieldsKeySpecifier),
		fields?: Team_min_fieldsFieldPolicy,
	},
	Team_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_mutation_responseKeySpecifier | (() => undefined | Team_mutation_responseKeySpecifier),
		fields?: Team_mutation_responseFieldPolicy,
	},
	Team_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_stddev_fieldsKeySpecifier | (() => undefined | Team_stddev_fieldsKeySpecifier),
		fields?: Team_stddev_fieldsFieldPolicy,
	},
	Team_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_stddev_pop_fieldsKeySpecifier | (() => undefined | Team_stddev_pop_fieldsKeySpecifier),
		fields?: Team_stddev_pop_fieldsFieldPolicy,
	},
	Team_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_stddev_samp_fieldsKeySpecifier | (() => undefined | Team_stddev_samp_fieldsKeySpecifier),
		fields?: Team_stddev_samp_fieldsFieldPolicy,
	},
	Team_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_sum_fieldsKeySpecifier | (() => undefined | Team_sum_fieldsKeySpecifier),
		fields?: Team_sum_fieldsFieldPolicy,
	},
	Team_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_var_pop_fieldsKeySpecifier | (() => undefined | Team_var_pop_fieldsKeySpecifier),
		fields?: Team_var_pop_fieldsFieldPolicy,
	},
	Team_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_var_samp_fieldsKeySpecifier | (() => undefined | Team_var_samp_fieldsKeySpecifier),
		fields?: Team_var_samp_fieldsFieldPolicy,
	},
	Team_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Team_variance_fieldsKeySpecifier | (() => undefined | Team_variance_fieldsKeySpecifier),
		fields?: Team_variance_fieldsFieldPolicy,
	},
	Trigger?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TriggerKeySpecifier | (() => undefined | TriggerKeySpecifier),
		fields?: TriggerFieldPolicy,
	},
	TriggerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TriggerConnectionKeySpecifier | (() => undefined | TriggerConnectionKeySpecifier),
		fields?: TriggerConnectionFieldPolicy,
	},
	TriggerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TriggerEdgeKeySpecifier | (() => undefined | TriggerEdgeKeySpecifier),
		fields?: TriggerEdgeFieldPolicy,
	},
	Trigger_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_aggregateKeySpecifier | (() => undefined | Trigger_aggregateKeySpecifier),
		fields?: Trigger_aggregateFieldPolicy,
	},
	Trigger_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_aggregate_fieldsKeySpecifier | (() => undefined | Trigger_aggregate_fieldsKeySpecifier),
		fields?: Trigger_aggregate_fieldsFieldPolicy,
	},
	Trigger_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_avg_fieldsKeySpecifier | (() => undefined | Trigger_avg_fieldsKeySpecifier),
		fields?: Trigger_avg_fieldsFieldPolicy,
	},
	Trigger_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_max_fieldsKeySpecifier | (() => undefined | Trigger_max_fieldsKeySpecifier),
		fields?: Trigger_max_fieldsFieldPolicy,
	},
	Trigger_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_min_fieldsKeySpecifier | (() => undefined | Trigger_min_fieldsKeySpecifier),
		fields?: Trigger_min_fieldsFieldPolicy,
	},
	Trigger_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_mutation_responseKeySpecifier | (() => undefined | Trigger_mutation_responseKeySpecifier),
		fields?: Trigger_mutation_responseFieldPolicy,
	},
	Trigger_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_stddev_fieldsKeySpecifier | (() => undefined | Trigger_stddev_fieldsKeySpecifier),
		fields?: Trigger_stddev_fieldsFieldPolicy,
	},
	Trigger_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_stddev_pop_fieldsKeySpecifier | (() => undefined | Trigger_stddev_pop_fieldsKeySpecifier),
		fields?: Trigger_stddev_pop_fieldsFieldPolicy,
	},
	Trigger_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_stddev_samp_fieldsKeySpecifier | (() => undefined | Trigger_stddev_samp_fieldsKeySpecifier),
		fields?: Trigger_stddev_samp_fieldsFieldPolicy,
	},
	Trigger_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_sum_fieldsKeySpecifier | (() => undefined | Trigger_sum_fieldsKeySpecifier),
		fields?: Trigger_sum_fieldsFieldPolicy,
	},
	Trigger_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_var_pop_fieldsKeySpecifier | (() => undefined | Trigger_var_pop_fieldsKeySpecifier),
		fields?: Trigger_var_pop_fieldsFieldPolicy,
	},
	Trigger_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_var_samp_fieldsKeySpecifier | (() => undefined | Trigger_var_samp_fieldsKeySpecifier),
		fields?: Trigger_var_samp_fieldsFieldPolicy,
	},
	Trigger_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Trigger_variance_fieldsKeySpecifier | (() => undefined | Trigger_variance_fieldsKeySpecifier),
		fields?: Trigger_variance_fieldsFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	},
	UserPermission?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermissionKeySpecifier | (() => undefined | UserPermissionKeySpecifier),
		fields?: UserPermissionFieldPolicy,
	},
	UserPermissionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermissionConnectionKeySpecifier | (() => undefined | UserPermissionConnectionKeySpecifier),
		fields?: UserPermissionConnectionFieldPolicy,
	},
	UserPermissionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermissionEdgeKeySpecifier | (() => undefined | UserPermissionEdgeKeySpecifier),
		fields?: UserPermissionEdgeFieldPolicy,
	},
	UserPermission_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_aggregateKeySpecifier | (() => undefined | UserPermission_aggregateKeySpecifier),
		fields?: UserPermission_aggregateFieldPolicy,
	},
	UserPermission_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_aggregate_fieldsKeySpecifier | (() => undefined | UserPermission_aggregate_fieldsKeySpecifier),
		fields?: UserPermission_aggregate_fieldsFieldPolicy,
	},
	UserPermission_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_avg_fieldsKeySpecifier | (() => undefined | UserPermission_avg_fieldsKeySpecifier),
		fields?: UserPermission_avg_fieldsFieldPolicy,
	},
	UserPermission_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_max_fieldsKeySpecifier | (() => undefined | UserPermission_max_fieldsKeySpecifier),
		fields?: UserPermission_max_fieldsFieldPolicy,
	},
	UserPermission_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_min_fieldsKeySpecifier | (() => undefined | UserPermission_min_fieldsKeySpecifier),
		fields?: UserPermission_min_fieldsFieldPolicy,
	},
	UserPermission_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_mutation_responseKeySpecifier | (() => undefined | UserPermission_mutation_responseKeySpecifier),
		fields?: UserPermission_mutation_responseFieldPolicy,
	},
	UserPermission_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_stddev_fieldsKeySpecifier | (() => undefined | UserPermission_stddev_fieldsKeySpecifier),
		fields?: UserPermission_stddev_fieldsFieldPolicy,
	},
	UserPermission_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_stddev_pop_fieldsKeySpecifier | (() => undefined | UserPermission_stddev_pop_fieldsKeySpecifier),
		fields?: UserPermission_stddev_pop_fieldsFieldPolicy,
	},
	UserPermission_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_stddev_samp_fieldsKeySpecifier | (() => undefined | UserPermission_stddev_samp_fieldsKeySpecifier),
		fields?: UserPermission_stddev_samp_fieldsFieldPolicy,
	},
	UserPermission_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_sum_fieldsKeySpecifier | (() => undefined | UserPermission_sum_fieldsKeySpecifier),
		fields?: UserPermission_sum_fieldsFieldPolicy,
	},
	UserPermission_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_var_pop_fieldsKeySpecifier | (() => undefined | UserPermission_var_pop_fieldsKeySpecifier),
		fields?: UserPermission_var_pop_fieldsFieldPolicy,
	},
	UserPermission_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_var_samp_fieldsKeySpecifier | (() => undefined | UserPermission_var_samp_fieldsKeySpecifier),
		fields?: UserPermission_var_samp_fieldsFieldPolicy,
	},
	UserPermission_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPermission_variance_fieldsKeySpecifier | (() => undefined | UserPermission_variance_fieldsKeySpecifier),
		fields?: UserPermission_variance_fieldsFieldPolicy,
	},
	User_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_aggregateKeySpecifier | (() => undefined | User_aggregateKeySpecifier),
		fields?: User_aggregateFieldPolicy,
	},
	User_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_aggregate_fieldsKeySpecifier | (() => undefined | User_aggregate_fieldsKeySpecifier),
		fields?: User_aggregate_fieldsFieldPolicy,
	},
	User_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_avg_fieldsKeySpecifier | (() => undefined | User_avg_fieldsKeySpecifier),
		fields?: User_avg_fieldsFieldPolicy,
	},
	User_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_max_fieldsKeySpecifier | (() => undefined | User_max_fieldsKeySpecifier),
		fields?: User_max_fieldsFieldPolicy,
	},
	User_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_min_fieldsKeySpecifier | (() => undefined | User_min_fieldsKeySpecifier),
		fields?: User_min_fieldsFieldPolicy,
	},
	User_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_mutation_responseKeySpecifier | (() => undefined | User_mutation_responseKeySpecifier),
		fields?: User_mutation_responseFieldPolicy,
	},
	User_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_stddev_fieldsKeySpecifier | (() => undefined | User_stddev_fieldsKeySpecifier),
		fields?: User_stddev_fieldsFieldPolicy,
	},
	User_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_stddev_pop_fieldsKeySpecifier | (() => undefined | User_stddev_pop_fieldsKeySpecifier),
		fields?: User_stddev_pop_fieldsFieldPolicy,
	},
	User_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_stddev_samp_fieldsKeySpecifier | (() => undefined | User_stddev_samp_fieldsKeySpecifier),
		fields?: User_stddev_samp_fieldsFieldPolicy,
	},
	User_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_sum_fieldsKeySpecifier | (() => undefined | User_sum_fieldsKeySpecifier),
		fields?: User_sum_fieldsFieldPolicy,
	},
	User_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_var_pop_fieldsKeySpecifier | (() => undefined | User_var_pop_fieldsKeySpecifier),
		fields?: User_var_pop_fieldsFieldPolicy,
	},
	User_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_var_samp_fieldsKeySpecifier | (() => undefined | User_var_samp_fieldsKeySpecifier),
		fields?: User_var_samp_fieldsFieldPolicy,
	},
	User_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_variance_fieldsKeySpecifier | (() => undefined | User_variance_fieldsKeySpecifier),
		fields?: User_variance_fieldsFieldPolicy,
	},
	Workflow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorkflowKeySpecifier | (() => undefined | WorkflowKeySpecifier),
		fields?: WorkflowFieldPolicy,
	},
	WorkflowConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorkflowConnectionKeySpecifier | (() => undefined | WorkflowConnectionKeySpecifier),
		fields?: WorkflowConnectionFieldPolicy,
	},
	WorkflowEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorkflowEdgeKeySpecifier | (() => undefined | WorkflowEdgeKeySpecifier),
		fields?: WorkflowEdgeFieldPolicy,
	},
	Workflow_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_aggregateKeySpecifier | (() => undefined | Workflow_aggregateKeySpecifier),
		fields?: Workflow_aggregateFieldPolicy,
	},
	Workflow_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_aggregate_fieldsKeySpecifier | (() => undefined | Workflow_aggregate_fieldsKeySpecifier),
		fields?: Workflow_aggregate_fieldsFieldPolicy,
	},
	Workflow_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_avg_fieldsKeySpecifier | (() => undefined | Workflow_avg_fieldsKeySpecifier),
		fields?: Workflow_avg_fieldsFieldPolicy,
	},
	Workflow_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_max_fieldsKeySpecifier | (() => undefined | Workflow_max_fieldsKeySpecifier),
		fields?: Workflow_max_fieldsFieldPolicy,
	},
	Workflow_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_min_fieldsKeySpecifier | (() => undefined | Workflow_min_fieldsKeySpecifier),
		fields?: Workflow_min_fieldsFieldPolicy,
	},
	Workflow_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_mutation_responseKeySpecifier | (() => undefined | Workflow_mutation_responseKeySpecifier),
		fields?: Workflow_mutation_responseFieldPolicy,
	},
	Workflow_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_stddev_fieldsKeySpecifier | (() => undefined | Workflow_stddev_fieldsKeySpecifier),
		fields?: Workflow_stddev_fieldsFieldPolicy,
	},
	Workflow_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_stddev_pop_fieldsKeySpecifier | (() => undefined | Workflow_stddev_pop_fieldsKeySpecifier),
		fields?: Workflow_stddev_pop_fieldsFieldPolicy,
	},
	Workflow_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_stddev_samp_fieldsKeySpecifier | (() => undefined | Workflow_stddev_samp_fieldsKeySpecifier),
		fields?: Workflow_stddev_samp_fieldsFieldPolicy,
	},
	Workflow_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_sum_fieldsKeySpecifier | (() => undefined | Workflow_sum_fieldsKeySpecifier),
		fields?: Workflow_sum_fieldsFieldPolicy,
	},
	Workflow_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_var_pop_fieldsKeySpecifier | (() => undefined | Workflow_var_pop_fieldsKeySpecifier),
		fields?: Workflow_var_pop_fieldsFieldPolicy,
	},
	Workflow_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_var_samp_fieldsKeySpecifier | (() => undefined | Workflow_var_samp_fieldsKeySpecifier),
		fields?: Workflow_var_samp_fieldsFieldPolicy,
	},
	Workflow_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Workflow_variance_fieldsKeySpecifier | (() => undefined | Workflow_variance_fieldsKeySpecifier),
		fields?: Workflow_variance_fieldsFieldPolicy,
	},
	_prisma_migrations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _prisma_migrationsKeySpecifier | (() => undefined | _prisma_migrationsKeySpecifier),
		fields?: _prisma_migrationsFieldPolicy,
	},
	_prisma_migrationsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _prisma_migrationsConnectionKeySpecifier | (() => undefined | _prisma_migrationsConnectionKeySpecifier),
		fields?: _prisma_migrationsConnectionFieldPolicy,
	},
	_prisma_migrationsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _prisma_migrationsEdgeKeySpecifier | (() => undefined | _prisma_migrationsEdgeKeySpecifier),
		fields?: _prisma_migrationsEdgeFieldPolicy,
	},
	_prisma_migrations_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _prisma_migrations_mutation_responseKeySpecifier | (() => undefined | _prisma_migrations_mutation_responseKeySpecifier),
		fields?: _prisma_migrations_mutation_responseFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;