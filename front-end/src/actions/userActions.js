export const SCHEDULE_CLASS = "SCHEDULE_CLASS";
export const RESCHEDULE_CLASS = "RESCHEDULE_CLASS";
export const CANCEL_CLASS = "CANCEL_CLASS";

export const cancelClass = (id) => {
  return { type: CANCEL_CLASS, payload: id };
};

export const scheduleClass = (selectedClass) => {
  return { type: SCHEDULE_CLASS, payload: selectedClass };
};

export const rescheduleClass = (id) => {
  return { type: RESCHEDULE_CLASS, payload: id };
};
