import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
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
export default function Resume() {
  const filterDataByPeriod = (data, year, month) => {
    month = month ? month - 1 : null
    const periodData = data.filter((item) => {
      return (
        dayjs(item.startDate).year() === year &&
        (month ? dayjs(item.startDate).month() === month : true)
      )
    })
    return periodData
  }

  console.log(filterDataByPeriod(resume_data.work, 2022, 4))

  return (
    <div className="flex h-screen w-screen flex-col">
      <Header sticky={true} />
      <div
        className="flex h-full w-screen items-end justify-start
         gap-1 overflow-y-scroll px-6 pb-20"
      >
        {years.map((year) => {
          return <YearChunk year={year} key={year} />
        })}
      </div>
    </div>
  )
}

const YearChunk = ({ year, data }) => {
  return (
    <div className="relative flex h-full w-48 cursor-pointer items-end justify-center border-b-[10px] border-secondary text-start text-6xl font-bold text-primary">
      <div className="absolute right-0 bottom-12 flex h-full w-full items-end justify-between">
        {months.map((month) => {
          return (
            <div
              className="flex items-end text-lg font-light text-primary"
              key={month}
            >
              <MonthChunk />
            </div>
          )
        })}
      </div>
      {year}
    </div>
  )
}

const MonthChunk = ({ month, data }) => {
  return <div className="">•</div>
}
