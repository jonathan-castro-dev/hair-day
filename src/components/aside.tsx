import { useState, type ChangeEvent } from "react";
import { Text } from "./text";
import { Button } from "./button";
import { Container } from "./container";
import { DateInput } from "./date-input";
import { TextInput } from "./text-input";
import { TimeSelect } from "./time-select";
import type { NewSchedulingFormInput, Scheduling } from "../@types/schedulings";
import CalendarIcon from "../assets/icons/calendar.svg?react"
import CaretDownIcon from "../assets/icons/caret-down.svg?react"
import UserIcon from "../assets/icons/user.svg?react"

interface AsideProps {
  schedulings: Scheduling[]
  onAddScheduling: (data: NewSchedulingFormInput) => void
}

export function Aside({ onAddScheduling, schedulings }: AsideProps) {
  const [clientName, setClientName] = useState('')
  const [schedulingDate, setSchedulingDate] = useState('')
  const [schedulingHour, setSchedulingHour] = useState(0)

  function handleChangeHour(e: ChangeEvent<HTMLInputElement>) {
    setSchedulingHour(Number(e.target.value))
  }

  function handleAddScheduling(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = {
      clientName,
      schedulingDate,
      schedulingHour
    }

    onAddScheduling(data)

    setClientName('')
    setSchedulingDate('')
    setSchedulingHour(0)
  }

  function disableFormTime(hour: number) {
    return schedulings.some(scheduling => {
      return scheduling.schedulingDate === schedulingDate && scheduling.schedulingHour === hour
    }) || !schedulingDate
  }

  return (
    <Container as="aside" className="bg-gray-700 flex flex-col gap-6">
      <div className="space-y-1">
        <Text as="h2" variant="title-lg" className="text-gray-100">
          Agende um atendimento
        </Text>
        <Text variant="text-sm" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o 
          agendamento
        </Text>
      </div>
      <form
        onSubmit={handleAddScheduling}
        id="scheduling"
        className="flex flex-col gap-8"
      >
        <div className="space-y-2">
          <Text as="h3" variant="title-md" className="text-gray-200">Data</Text>
          <DateInput
            value={schedulingDate}
            onChange={(e) => setSchedulingDate(e.target.value)}
            leftIcon={CalendarIcon}
            rightIcon={CaretDownIcon}
            className="text-gray-200"
          />
        </div>
        <div>
          <div className="space-y-2 mb-3">
            <Text as="h3" variant="title-md" className="text-gray-200">Horários</Text>
            <Text variant="text-sm" className="text-gray-300">Manhã</Text>
            <div className="flex items-center gap-2 flex-wrap">
              <TimeSelect
                value={9}
                content="09:00"
                checked={schedulingHour === 9}
                onChange={handleChangeHour}
                disabled={disableFormTime(9)}
              />
              <TimeSelect
                value={10}
                content="10:00"
                checked={schedulingHour === 10}
                onChange={handleChangeHour}
                disabled={disableFormTime(10)}
              />
              <TimeSelect
                value={11}
                content="11:00"
                checked={schedulingHour === 11}
                onChange={handleChangeHour}
                disabled={disableFormTime(11)}
              />
              <TimeSelect
                value={12}
                content="12:00"
                checked={schedulingHour === 12}
                onChange={handleChangeHour}
                disabled={disableFormTime(12)}
              />
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <Text variant="text-sm" className="text-gray-300">Tarde</Text>
            <div className="flex items-center gap-2 flex-wrap">
              <TimeSelect
                value={13}
                content="13:00"
                checked={schedulingHour === 13}
                onChange={handleChangeHour}
                disabled={disableFormTime(13)}
              />
              <TimeSelect
                value={14}
                content="14:00"
                checked={schedulingHour === 14}
                onChange={handleChangeHour}
                disabled={disableFormTime(14)}
              />
              <TimeSelect
                value={15}
                content="15:00"
                checked={schedulingHour === 15}
                onChange={handleChangeHour}
                disabled={disableFormTime(15)}
              />
              <TimeSelect
                value={16}
                content="16:00"
                checked={schedulingHour === 16}
                onChange={handleChangeHour}
                disabled={disableFormTime(16)}
              />
              <TimeSelect
                value={17}
                content="17:00"
                checked={schedulingHour === 17}
                onChange={handleChangeHour}
                disabled={disableFormTime(17)}
              />
              <TimeSelect
                value={18}
                content="18:00"
                checked={schedulingHour === 18}
                onChange={handleChangeHour}
                disabled={disableFormTime(18)}
              />
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <Text variant="text-sm" className="text-gray-300">Noite</Text>
            <div className="flex items-center gap-2 flex-wrap">
              <TimeSelect
                value={19}
                content="19:00"
                checked={schedulingHour === 19}
                onChange={handleChangeHour}
                disabled={disableFormTime(19)}
              />
              <TimeSelect
                value={20}
                content="20:00"
                checked={schedulingHour === 20}
                onChange={handleChangeHour}
                disabled={disableFormTime(20)}
              />
              <TimeSelect
                value={21}
                content="21:00"
                checked={schedulingHour === 21}
                onChange={handleChangeHour}
                disabled={disableFormTime(21)}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Text as="h3" variant="title-md" className="text-gray-200">
            Cliente
          </Text>
          <TextInput
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            name="name"
            icon={UserIcon}
            placeholder="Nome do cliente"
          />
        </div>
      </form>
      <Button type="submit" form="scheduling" disabled={!clientName || !schedulingDate || !schedulingHour}>Agendar</Button>
    </Container>
  )
}