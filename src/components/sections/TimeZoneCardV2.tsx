import React, { useState, useEffect } from 'react'
import { formatInTimeZone } from 'date-fns-tz'

interface TimezoneProps {
  timezone: string
}

const Timezone = ({ timezone }: TimezoneProps) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const formatted = formatInTimeZone(
        now,
        timezone,
        'EEEE, dd MMMM yyyy \'a\' h:mm:ss a',
      )
      setDateTime(formatted)
    }

    // Update immediately
    updateDateTime()

    // Then update every second
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">🇨🇴 Bogotá D.C, Colombia 🇨🇴</p>
    </div>
  )
}

export default Timezone
