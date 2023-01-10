import {
  Card,
  CardContent,
  DialogContentText,
  Typography,
} from "@material-ui/core";
import { useUser } from "@saleor/auth";
import AccountPermissionGroups from "@saleor/components/AccountPermissionGroups";
import ActionDialog from "@saleor/components/ActionDialog";
import { Backlink } from "@saleor/components/Backlink";
import CardSpacer from "@saleor/components/CardSpacer";
import CardTitle from "@saleor/components/CardTitle";
import Container from "@saleor/components/Container";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import { MultiAutocompleteChoiceType } from "@saleor/components/MultiAutocompleteSelectField";
import PageHeader from "@saleor/components/PageHeader";
import Savebar from "@saleor/components/Savebar";
import { SubmitPromise } from "@saleor/hooks/useForm";
import useLocale from "@saleor/hooks/useLocale";
import useNavigator from "@saleor/hooks/useNavigator";
import useStateFromProps from "@saleor/hooks/useStateFromProps";
import { sectionNames } from "@saleor/intl";
import { ConfirmButtonTransitionState } from "@saleor/macaw-ui";
import { getUserName } from "@saleor/misc";
import UserStatus from "@saleor/staff/components/UserStatus";
import { staffListUrl } from "@saleor/staff/urls";
import { getMemberPermissionGroups, isMemberActive } from "@saleor/staff/utils";
import { FetchMoreProps, RelayToFlat, SearchPageProps } from "@saleor/types";
import createMultiAutocompleteSelectHandler from "@saleor/utils/handlers/multiAutocompleteSelectChangeHandler";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import StaffPassword from "../StaffPassword/StaffPassword";
import StaffPreferences from "../StaffPreferences";
import StaffProperties from "../StaffProperties/StaffProperties";
import { staffDetailsPageMessages as messages } from "./messages";
import useStyles from "./styles";

export interface StaffDetailsFormData {
  email: string;
  firstName: string;
  isActive: boolean;
  lastName: string;
  permissionGroups: string[];
}

export interface StaffDetailsPageProps extends SearchPageProps {
  availablePermissionGroups: RelayToFlat<any>;
  canEditAvatar: boolean;
  canEditPreferences: boolean;
  canEditStatus: boolean;
  canRemove: boolean;
  disabled: boolean;
  fetchMorePermissionGroups: FetchMoreProps;
  saveButtonBarState: ConfirmButtonTransitionState;
  staffMember: any;
  errors: any[];
  onChangePassword: () => void;
  onDelete: () => void;
  onImageDelete: () => void;
  onSubmit: (data: StaffDetailsFormData) => SubmitPromise;
  onImageUpload(file: File);
}

const StaffDetailsPage: React.FC<StaffDetailsPageProps> = ({
  availablePermissionGroups,
  canEditAvatar,
  canEditPreferences,
  canEditStatus,
  canRemove,
  disabled,
  errors,
  fetchMorePermissionGroups,
  initialSearch,
  onChangePassword,
  onDelete,
  onImageDelete,
  onImageUpload,
  onSearchChange,
  onSubmit,
  saveButtonBarState,
  staffMember,
}: StaffDetailsPageProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const intl = useIntl();
  const classes = useStyles();
  const navigate = useNavigator();

  const { locale, setLocale } = useLocale();

  const isActive = isMemberActive(staffMember);
  const permissionGroups = getMemberPermissionGroups(staffMember);

  const [
    permissionGroupsDisplayValues,
    setPermissionGroupsDisplayValues,
  ] = useStateFromProps<MultiAutocompleteChoiceType[]>(
    permissionGroups.map(group => ({
      disabled: !group.userCanManage,
      label: group.name,
      value: group.id,
    })) || [],
  );
  const { user } = useUser();
  const initialForm: StaffDetailsFormData = {
    email: user?.email || "",
    firstName: user?.firstname || "",
    isActive,
    lastName: user?.lastname || "",
    permissionGroups: permissionGroups.map(pg => pg.id),
  };

  return (
    <Form
      confirmLeave
      initial={initialForm}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {({ data: formData, change, submit, toggleValue }) => {
        const permissionGroupsChange = createMultiAutocompleteSelectHandler(
          toggleValue,
          setPermissionGroupsDisplayValues,
          permissionGroupsDisplayValues,
          availablePermissionGroups?.map(group => ({
            label: group.name,
            value: group.id,
          })) || [],
        );

        return (
          <Container>
            <Backlink href={staffListUrl()}>
              {intl.formatMessage(sectionNames.staff)}
            </Backlink>
            <PageHeader title={getUserName(staffMember)} />
            <Grid>
              <div>
                <StaffProperties
                  errors={errors}
                  data={formData}
                  canEditAvatar={canEditAvatar}
                  staffMember={staffMember}
                  onChange={change}
                  onImageUpload={onImageUpload}
                  onImageDelete={onImageDelete}
                  disabled={false}
                />

                {canEditPreferences && (
                  <>
                    <CardSpacer />
                    <StaffPassword onChangePassword={onChangePassword} />
                  </>
                )}
              </div>
              <div className={classes.noOverflow}>
                {canEditPreferences && (
                  <StaffPreferences
                    locale={locale}
                    onLocaleChange={setLocale}
                  />
                )}
                {canEditStatus && (
                  <>
                    <UserStatus
                      data={formData}
                      disabled={disabled}
                      label={intl.formatMessage(messages.userStatusActive)}
                      onChange={change}
                    />
                    <CardSpacer />
                    <Card>
                      <CardTitle
                        title={intl.formatMessage({
                          id: "Fbr4Vp",
                          defaultMessage: "Permissions",
                          description: "dialog header",
                        })}
                      />
                      <CardContent>
                        <Typography>
                          {intl.formatMessage({
                            id: "P+kVxW",
                            defaultMessage: "User is assigned to:",
                            description: "card description",
                          })}
                        </Typography>

                        <AccountPermissionGroups
                          formData={formData}
                          disabled={disabled}
                          errors={errors}
                          initialSearch={initialSearch}
                          availablePermissionGroups={availablePermissionGroups}
                          onChange={permissionGroupsChange}
                          onSearchChange={onSearchChange}
                          displayValues={permissionGroupsDisplayValues}
                          {...fetchMorePermissionGroups}
                        />
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>
            </Grid>
            <Savebar
              disabled={false}
              state={saveButtonBarState}
              onCancel={() => navigate(staffListUrl())}
              onSubmit={() => {
                setOpenDialog(true);
              }}
              onDelete={canRemove ? onDelete : undefined}
            />
            <ActionDialog
              open={openDialog}
              title="Confirm"
              confirmButtonState="default"
              confirmButtonLabel="Yes"
              onConfirm={() => {
                setOpenDialog(false);
                submit();
                // eslint-disable-next-line no-console
                console.log("Yes");
              }}
              onClose={() => {
                setOpenDialog(false);
                // eslint-disable-next-line no-console
                console.log("No", initialForm);
              }}
            >
              <DialogContentText>
                <Typography>
                  Are you sure you want to change your profile?
                </Typography>
              </DialogContentText>
            </ActionDialog>
          </Container>
        );
      }}
    </Form>
  );
};
StaffDetailsPage.displayName = "StaffDetailsPage";
export default StaffDetailsPage;
