import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { resume_data } from '../lib/data'
import dayjs from 'dayjs'
import Image from 'next/image'

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
         gap-6 overflow-y-scroll px-20 "
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
    <div className="relative flex h-full w-48 cursor-pointer items-center justify-center text-start text-6xl font-bold text-primary">
      <div className="absolute flex h-fit w-fit flex-row-reverse items-center justify-between">
        {months.map((month, index) => {
          return (
            <div
              className=" flex items-center  text-lg font-light text-primary"
              key={month}
            >
              <MonthChunk
                year={year}
                month={month}
                data={filterDataByPeriod(data, year, index)}
                index={index}
              />
            </div>
          )
        })}
      </div>
      <p className="relative">{year}</p>
    </div>
  )
}

const MonthChunk = ({ year, month, data }) => {
  const positive = data[0]?.id % 2 === 0
  return (
    <div
      className={`flex h-full w-full flex-col ${
        positive ? 'justify-end' : 'justify-start'
      } text-center`}
      onClick={() => {
        console.log(year, month, data)
      }}
    >
      {!!data.length && (
        <div
          className={`flex ${
            positive ? 'flex-col' : 'flex-col-reverse'
          } h-[340px] flex-col items-center justify-start`}
        >
          <span className="relative z-10 flex h-10 w-10 flex-none rounded-full  border-[3px] border-primary">
            <Image
              src={data[0]?.logo}
              alt={data[0].name}
              fill
              className={`absolute z-0 scale-105 rounded-full`}
            />
          </span>
          <span className="h-20 flex-none border-l-2 border-primary" />
          <span className="h-2 w-2 flex-none rounded-full bg-primary" />
        </div>
      )}
    </div>
  )
}
