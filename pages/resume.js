import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MonthChunk } from '../components/MonthChunk'
import { resume_data } from '../lib/data'
import dayjs from 'dayjs'

const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013]
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const filterDataByPeriod = (data, year, month) => {
  let periodData = data.filter((item) => {
    return dayjs(item.startDate).year() === year
  })
  if (month || month === 0) {
    periodData = periodData.filter((item) => {
      return dayjs(item.startDate).month() === month
    })
  }

  return periodData
}

export default function Resume() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header sticky={true} />
      <div
        className="flex h-full w-screen
         gap-1 overflow-y-scroll px-20 pb-20"
      >
        {years.map((year) => {
          return (
            <YearChunk
              year={year}
              key={year}
              data={filterDataByPeriod(resume_data.work, year)}
            />
          )
        })}
      </div>
    </div>
  )
}

const YearChunk = ({ year, data }) => {
  return (
    <div className="relative flex h-full w-48 cursor-pointer items-end justify-center text-start text-6xl font-bold text-primary">
      <div className="absolute right-0 bottom-12 flex h-full w-full flex-row-reverse items-end justify-between">
        {months.map((month, index) => {
          return (
            <div
              className="flex items-end text-lg font-light text-primary"
              key={month}
            >
              <MonthChunk
                year={year}
                month={month}
                data={filterDataByPeriod(data, year, index)}
              />
            </div>
          )
        })}
      </div>
      <p>{year}</p>
    </div>
  )
}
