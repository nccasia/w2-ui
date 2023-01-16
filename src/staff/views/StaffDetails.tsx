import { DialogContentText } from "@material-ui/core";
import { useUser } from "@saleor/auth";
import ActionDialog from "@saleor/components/ActionDialog";
import NotFoundPage from "@saleor/components/NotFoundPage";
import { WindowTitle } from "@saleor/components/WindowTitle";
import { useUpdateInformationUserMutation } from "@saleor/graphql/hooks.generated";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { getStringOrPlaceholder } from "@saleor/misc";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import StaffDetailsPage, {
  StaffDetailsFormData,
} from "../components/StaffDetailsPage/StaffDetailsPage";
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
  const { user, refeshUser } = useUser();
  const navigate = useNavigator();
  const intl = useIntl();
  const notify = useNotifier();

  const closeModal = () =>
    navigate(
      staffMemberDetailsUrl(id, {
        ...params,
        action: undefined,
      }),
    );

  const { dataInfor } = { dataInfor: null };

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [changePassword, changePasswordOpts] = [{}, {}];

  const [
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateStaffMember,
    updateStaffMemberOpts,
  ] = [{}, {}];

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [deleteStaffMember, deleteResult] = [{}, {}];

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [updateStaffAvatar] = [{}, {}];

  const [deleteStaffAvatar, deleteAvatarResult] = [{}, {}];

  const [updateInformationUserMutation] = useUpdateInformationUserMutation({
    onCompleted(data) {
      if (!data.update_User_by_pk) {
        notify({
          status: "error",
          text: data.update_User_by_pk,
        });
      } else {
        refeshUser();
        notify({
          status: "success",
          text: "Change profile successfully",
        });
      }
    },
  });

  const handleUpdate = (formData: StaffDetailsFormData) => {
    updateInformationUserMutation({
      variables: {
        id: +user.userId,
        firstname: formData.firstName,
        lastname: formData.lastName,
      },
    });
  };
  if (!user) {
    return <NotFoundPage backHref={staffListUrl()} />;
  }

  return (
    <>
      <WindowTitle title={getStringOrPlaceholder("staffMember?.email")} />
      <StaffDetailsPage
        // @ts-ignore
        errors={updateStaffMemberOpts?.dataInfor?.staffUpdate?.errors || []}
        canEditAvatar={true}
        canEditPreferences={true}
        canEditStatus={!false}
        canRemove={!true}
        disabled={true}
        initialSearch=""
        onChangePassword={() => true}
        onDelete={() => true}
        // @ts-ignore
        onSubmit={handleUpdate}
        onImageUpload={() => true}
        onImageDelete={() => true}
        availablePermissionGroups={null}
        staffMember={null}
        saveButtonBarState={null}
        fetchMorePermissionGroups={{
          hasMore: false,
          loading: false,
          onFetchMore: () => true,
        }}
        onSearchChange={() => true}
      />
      <ActionDialog
        open={false}
        title={" "}
        confirmButtonState={null}
        variant="delete"
        onClose={() => true}
        onConfirm={() => true}
      >
        <DialogContentText>
          <FormattedMessage
            id="gxPjIQ"
            defaultMessage="Are you sure you want to delete {email} from staff members?"
            values={{
              email: getStringOrPlaceholder(" "),
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
        // @ts-ignore
        confirmButtonState={deleteAvatarResult.status}
        variant="delete"
        // @ts-ignore
        onClose={closeModal}
        // @ts-ignore
        onConfirm={deleteStaffAvatar}
      >
        <DialogContentText>
          <FormattedMessage
            id="fzpXvv"
            defaultMessage="Are you sure you want to remove {email} avatar?"
            values={{
              email: (
                <strong>
                  {getStringOrPlaceholder(dataInfor?.user?.email)}
                </strong>
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
        // @ts-ignore
        onSubmit={() => true}
      />
    </>
  );
};

export default StaffDetails;
