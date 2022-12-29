import { useUser } from "@saleor/auth";
import { ChannelFragment, useBaseChannelsQuery } from "@saleor/graphql";
import useLocalStorage from "@saleor/hooks/useLocalStorage";
import { getById } from "@saleor/orders/components/OrderReturnPage/utils";
import { useSaleorConfig } from "@saleor/sdk";
import React from "react";

interface UseAppTaskType {
  availableTaskTypes: ChannelFragment[];
  TaskType: ChannelFragment;
  isPickerActive: boolean;
  refreshTaskTypes: () => void;
  setTaskType: (id: string) => void;
}
export interface AppTaskTypeContextData extends UseAppTaskType {
  setPickerActive: (isActive: boolean) => void;
}

const AppTaskTypeContext = React.createContext<AppTaskTypeContextData>({
  availableTaskTypes: [],
  TaskType: undefined,
  isPickerActive: false,
  refreshTaskTypes: () => undefined,
  setTaskType: () => undefined,
  setPickerActive: () => undefined,
});

const isValidTaskType = (TypeId: string, TypeList?: ChannelFragment[]) => {
  if (!TypeId) {
    return false;
  }

  return TypeList?.some(getById(TypeId));
};

export const AppTaskTypeProvider: React.FC = ({ children }) => {
  const { setChannel } = useSaleorConfig();
  const { authenticated, user } = useUser();
  const [selectedTaskType, setSelectedTaskType] = useLocalStorage(
    "TaskType",
    "",
  );
  const { data: TaskTypeData, refetch } = useBaseChannelsQuery({
    skip: !authenticated || !user,
  });

  const [isPickerActive, setPickerActive] = React.useState(false);
  React.useEffect(() => {
    if (
      !isValidTaskType(selectedTaskType, TaskTypeData?.channels) &&
      TaskTypeData?.channels?.length > 0
    ) {
      setSelectedTaskType(TaskTypeData.channels[0].id);
    }
  }, [TaskTypeData]);

  React.useEffect(() => {
    setChannel(selectedTaskType);
  }, [selectedTaskType]);

  const availableTaskTypes = TaskTypeData?.channels || [];

  const TaskType =
    TaskTypeData &&
    (availableTaskTypes.find(getById(selectedTaskType)) || null);

  return (
    <AppTaskTypeContext.Provider
      value={{
        availableTaskTypes,
        TaskType,
        isPickerActive,
        refreshTaskTypes: refetch,
        setTaskType: setSelectedTaskType,
        setPickerActive,
      }}
    >
      {children}
    </AppTaskTypeContext.Provider>
  );
};

AppTaskTypeProvider.displayName = "AppTaskTypeProvider";

function useAppTaskType(enablePicker = true): UseAppTaskType {
  const { setPickerActive, ...data } = React.useContext(AppTaskTypeContext);
  React.useEffect(() => {
    if (enablePicker) {
      setPickerActive(true);
    }

    return () => setPickerActive(false);
  }, [enablePicker, setPickerActive]);

  return data;
}

export default useAppTaskType;
