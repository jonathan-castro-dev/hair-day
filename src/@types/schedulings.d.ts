export interface Scheduling {
  id: string,
  clientName: string
  schedulingHour: number
  schedulingDate: string
}

export type NewSchedulingFormInput = Omit<Scheduling, "id">