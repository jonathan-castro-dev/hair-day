import { useState } from "react";
import type { Scheduling, NewSchedulingFormInput } from "../@types/schedulings";
import { SchedulingList } from "../components/scheduling-list";
import { Aside } from "../components/aside";
import { Icon } from "../components/icon";
import LogoIcon from "../assets/images/logo.svg?react"

export function Home() {
  const [schedulings, setSchedulings] = useState<Scheduling[]>([])

  function addScheduling(data: NewSchedulingFormInput) {
    const id = Math.random().toString(36).substring(0, 6)

    const newScheduling = {
      id,
      clientName: data.clientName,
      schedulingDate: data.schedulingDate,
      schedulingHour: data.schedulingHour
    }

    setSchedulings((prevState) => [ ...prevState, newScheduling ])
  }

  function deleteScheduling(id: string) {
    const schedulingsWithoutDeleted = schedulings
      .filter(scheduling => scheduling.id !== id)

    setSchedulings(schedulingsWithoutDeleted)
  }

  return (
    <div className="flex sm:flex-col lg:flex-row gap-3 justify-center mx-auto p-3 max-w-350 relative">
      <Aside onAddScheduling={addScheduling} />
      <SchedulingList
        schedulings={schedulings}
        onDeleteScheduling={deleteScheduling}
      />
      <div className="absolute top-0 left-0 bg-gray-600 px-5 py-3 rounded-br-xl">
        <Icon svg={LogoIcon} />
      </div>
    </div>
  )
}