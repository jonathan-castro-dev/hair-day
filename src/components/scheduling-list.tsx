import { useState } from "react";
import { ButtonIcon } from "./button-icon";
import { Card } from "./card";
import { Container } from "./container";
import { DateInput } from "./date-input";
import { Icon } from "./icon";
import { Text } from "./text";
import { getCurrentDate } from "../utils/get-current-date";
import type { Scheduling } from "../@types/schedulings";
import CalendarIcon from "../assets/icons/calendar.svg?react"
import CaretDownIcon from "../assets/icons/caret-down.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"

interface SchedulingListProps {
  schedulings: Scheduling[]
  onDeleteScheduling: (id: string) => void
}

const formattedCurrentDate = getCurrentDate()

export function SchedulingList({
  schedulings,
  onDeleteScheduling
}: SchedulingListProps) {
  const [dateFilter, setDateFilter] = useState(formattedCurrentDate)

  const dailySchedules = schedulings.filter((scheduling) => {
    return scheduling.schedulingDate === dateFilter
  })

  const morningSchedules = dailySchedules.filter((scheduling => {
    return scheduling.schedulingHour >= 9 && scheduling.schedulingHour <= 12
  }))

  const afternoonSchedules = dailySchedules.filter((scheduling => {
    return scheduling.schedulingHour >= 13 && scheduling.schedulingHour <= 18
  }))

  const nightSchedules = dailySchedules.filter((scheduling => {
    return scheduling.schedulingHour >= 19 && scheduling.schedulingHour <= 21
  }))

  return (
    <Container as="main" size="lg" className="flex flex-col gap-8 flex-1">
      <div className="flex sm:flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="space-y-1">
          <Text as="h2" variant="title-lg" className="text-gray-100">
            Sua agenda
          </Text>
          <Text variant="text-sm" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>
        <DateInput
          leftIcon={CalendarIcon}
          rightIcon={CaretDownIcon}
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="text-gray-200"
        />
      </div>
      <div>
        <Card>
          <Icon svg={SunIcon} className="w-5 h-5 fill-yellow-dark" />
          <Text variant="text-sm" className="text-gray-300">
            Manhã
          </Text>
          <Text variant="text-sm" className="text-gray-400 ml-auto">
            09h-12h
          </Text>
        </Card>
        <Card variant="secondary" size="md">
          <div className="space-y-0.5 w-full">
            {morningSchedules.length > 0 ? (
              morningSchedules.map(scheduling => (
              <Card key={scheduling.id} variant="terciary" size="none">
                <Text variant="title-md" className="text-gray-200">
                  {String(scheduling.schedulingHour).padStart(2, '0') + ':00'}
                </Text>
                <Text as="p" className="text-gray-200">
                  {scheduling.clientName}
                </Text>
                <ButtonIcon
                  icon={TrashIcon}
                  onClick={() => onDeleteScheduling(scheduling.id)}
                  className="ml-auto"
                />
              </Card>
            ))
            ) : (
              <Text variant="text-sm" className="text-gray-300">
                Você ainda não tem agendamentos cadastrados nesse período.
              </Text>
            )}
          </div>
        </Card>

        <Card>
          <Icon svg={CloudSunIcon} className="w-5 h-5 fill-yellow-dark" />
          <Text variant="text-sm" className="text-gray-300">
            Tarde
          </Text>
          <Text variant="text-sm" className="text-gray-400 ml-auto">
            13h-18h
          </Text>
        </Card>
        <Card variant="secondary" size="md">
          <div className="space-y-0.5 w-full">
            {afternoonSchedules.length > 0 ? (
              afternoonSchedules.map(scheduling => (
              <Card key={scheduling.id} variant="terciary" size="none">
                <Text variant="title-md" className="text-gray-200">
                  {String(scheduling.schedulingHour) + ':00'}
                </Text>
                <Text as="p" className="text-gray-200">
                  {scheduling.clientName}
                </Text>
                <ButtonIcon
                  icon={TrashIcon}
                  onClick={() => onDeleteScheduling(scheduling.id)}
                  className="ml-auto"
                />
              </Card>
            ))
            ) : (
              <Text variant="text-sm" className="text-gray-300">
                Você ainda não tem agendamentos cadastrados nesse período.
              </Text>
            )}
          </div>
        </Card>

        <Card>
          <Icon svg={MoonIcon} className="w-5 h-5 fill-yellow-dark" />
          <Text variant="text-sm" className="text-gray-300">
            Noite
          </Text>
          <Text variant="text-sm" className="text-gray-400 ml-auto">
            19h-21h
          </Text>
        </Card>
        <Card variant="secondary" size="md">
          <div className="space-y-0.5 w-full">
            {nightSchedules.length > 0 ? (
              nightSchedules.map(scheduling => (
              <Card key={scheduling.id} variant="terciary" size="none">
                <Text variant="title-md" className="text-gray-200">
                  {String(scheduling.schedulingHour) + ':00'}
                </Text>
                <Text as="p" className="text-gray-200">
                  {scheduling.clientName}
                </Text>
                <ButtonIcon
                  icon={TrashIcon}
                  onClick={() => onDeleteScheduling(scheduling.id)}
                  className="ml-auto"
                />
              </Card>
            ))
            ) : (
              <Text variant="text-sm" className="text-gray-300">
                Você ainda não tem agendamentos cadastrados nesse período.
              </Text>
            )}
          </div>
        </Card>
      </div>
    </Container>
  )
}