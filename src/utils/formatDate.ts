import dayjs, { Dayjs } from "dayjs";

export const formatDate = (
  date: string | number | Date | Dayjs,
  template: string
) => {
  return dayjs(date).format(template);
};
