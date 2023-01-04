import useLocalStorage from "@saleor/hooks/useLocalStorage";
import { useSaleorConfig } from "@saleor/sdk";
import React from "react";

interface UseAppTaskType {
  availableTaskTypes: any;
  TaskType: any;
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

const isValidTaskType = (TypeId: string, _TypeList?: any) => {
  if (!TypeId) {
    return false;
  }

  return true;
};

export const AppTaskTypeProvider: React.FC = ({ children }) => {
  const { setChannel } = useSaleorConfig();
  const [selectedTaskType, setSelectedTaskType] = useLocalStorage(
    "TaskType",
    "",
  );
  const { data: TaskTypeData, refetch } = {
    data: { channels: [] },
    refetch: () => true,
  };

  const [isPickerActive, setPickerActive] = React.useState(false);
  React.useEffect(() => {
    if (
      !isValidTaskType(selectedTaskType, TaskTypeData?.channels) &&
      TaskTypeData?.channels?.length > 0
    ) {
      setSelectedTaskType(TaskTypeData.channels[0].id);
    }
  }, [TaskTypeData, selectedTaskType, setSelectedTaskType]);

  React.useEffect(() => {
    setChannel(selectedTaskType);
  }, [selectedTaskType, setChannel]);

  const availableTaskTypes = TaskTypeData?.channels || [];

  const TaskType = false;

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

// eslint-disable-next-line react-refresh/only-export-components
export default useAppTaskType;
