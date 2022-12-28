import { DialogContentText } from "@material-ui/core";
import { useUser } from "@saleor/auth";
import ActionDialog from "@saleor/components/ActionDialog";
import NotFoundPage from "@saleor/components/NotFoundPage";
import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import {
  getStringOrPlaceholder,
} from "@saleor/misc";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import StaffDetailsPage from "../components/StaffDetailsPage/StaffDetailsPage";
import StaffPasswordResetDialog from "../components/StaffPasswordResetDialog";
import {
  staffListUrl,
  staffMemberDetailsUrl,
  StaffMemberDetailsUrlQueryParams,
} from "../urls";

interface OrderListProps {
  id: string;
  params: StaffMemberDetailsUrlQueryParams;
}

export const StaffDetails: React.FC<OrderListProps> = ({ id, params }) => {
  const navigate = useNavigator();
  const user = useUser();
  const intl = useIntl();

  const closeModal = () =>
    navigate(
      staffMemberDetailsUrl(id, {
        ...params,
        action: undefined,
      }),
    );


  const { data } = { data: null, loading: false, refetch: null };


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [changePassword, changePasswordOpts] = [{}, {}]


  const [
    updateStaffMember,
    updateStaffMemberOpts,
  ] = [{}, {}]

  const [deleteStaffMember, deleteResult] = [{}, {}]

  const [updateStaffAvatar] = [{}, {}]

  const [deleteStaffAvatar, deleteAvatarResult] = [{}, {}]

  if (false) {
    return <NotFoundPage backHref={staffListUrl()} />;
  }

  const handleUpdate = () => {}

  return (
    <>
      <WindowTitle title={getStringOrPlaceholder('staffMember?.email')} />
      <StaffDetailsPage
        errors={updateStaffMemberOpts?.data?.staffUpdate?.errors || []}
        canEditAvatar={true}
        canEditPreferences={true}
        canEditStatus={!false}
        canRemove={!true}
        disabled={true}
        initialSearch=""
        onChangePassword={() => {}}
        onDelete={() => {}}
        onSubmit={handleUpdate}
        onImageUpload={() => {}}
        onImageDelete={() => {}        }
        availablePermissionGroups={null}
        staffMember={null}
        saveButtonBarState={null}
        fetchMorePermissionGroups={{
          hasMore: false,
          loading: false,
          onFetchMore: () => {},
        }}
        onSearchChange={() => {}}
      />
      <ActionDialog
        open={false}
        title={' '}
        confirmButtonState={null}
        variant="delete"
        onClose={() => {}}
        onConfirm={() => {}}
      >
        <DialogContentText>
          <FormattedMessage
            id="gxPjIQ"
            defaultMessage="Are you sure you want to delete {email} from staff members?"
            values={{
              email: getStringOrPlaceholder(' '),
            }}
          />
        </DialogContentText>
      </ActionDialog>
      <ActionDialog
        open={params.action === "remove-avatar"}
        title={intl.formatMessage({
          id: "VKWPBf",
          defaultMessage: "Delete Staff User Avatar",
          description: "dialog header",
        })}
        confirmButtonState={deleteAvatarResult.status}
        variant="delete"
        onClose={closeModal}
        onConfirm={deleteStaffAvatar}
      >
        <DialogContentText>
          <FormattedMessage
            id="fzpXvv"
            defaultMessage="Are you sure you want to remove {email} avatar?"
            values={{
              email: (
                <strong>{getStringOrPlaceholder(data?.user?.email)}</strong>
              ),
            }}
          />
        </DialogContentText>
      </ActionDialog>
      <StaffPasswordResetDialog
        confirmButtonState={null}
        errors={[]}
        open={params.action === "change-password"}
        onClose={closeModal}
        onSubmit={() =>{}}
      />
    </>
  );
};

export default StaffDetails;
