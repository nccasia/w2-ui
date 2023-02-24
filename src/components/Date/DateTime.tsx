import { Tooltip } from "@saleor/macaw-ui";
import moment from "moment-timezone";
import React from "react";
import ReactMoment from "react-moment";

import { LocaleConsumer } from "../Locale";
import { TimezoneConsumer } from "../Timezone";
import { Consumer } from "./DateContext";

interface DateTimeProps {
  date: string;
  plain?: boolean;
}

export const DateTime: React.FC<DateTimeProps> = ({ date, plain }) => {
  const getTime = (value: string, tz?: string) => {
    let date = moment.utc(value);

    if (tz !== undefined) {
      date = date.clone().tz(tz);
    } else {
      date = date.clone().local();
    }
    return date.toISOString();
  };

  const getTitle = (value: string, locale?: string, tz?: string) => {
    const date = moment(getTime(value, tz));
    return date.locale(locale).format("lll");
  };

  return (
    <TimezoneConsumer>
      {tz => (
        <LocaleConsumer>
          {({ locale }) => (
            <Consumer>
              {currentDate =>
                plain ? (
                  getTitle(date, locale, tz)
                ) : (
                  <Tooltip title={getTitle(date, locale, tz)}>
                    <ReactMoment from={currentDate} locale={locale} tz={tz}>
                      {getTime(date, tz)}
                    </ReactMoment>
                  </Tooltip>
                )
              }
            </Consumer>
          )}
        </LocaleConsumer>
      )}
    </TimezoneConsumer>
  );
};
DateTime.displayName = "DateTime";
export default DateTime;
