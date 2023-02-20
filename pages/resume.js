import { Header } from '../components/Header'
import { useState } from 'react'
import { resume_data } from '../lib/data'
import dayjs from 'dayjs'
import Image from 'next/image'
import { Modal } from '../components/Modal'
import { AnimatePresence } from 'framer-motion'
import { jsonToParagraphs } from '../lib/helpers'
import { FiGlobe } from 'react-icons/fi'

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
  const [modalData, setModalData] = useState(null)
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
              setModalData={setModalData}
            />
          )
        })}
      </div>
      <AnimatePresence>
        {modalData && (
          <Modal setModalData={setModalData}>
            <div className="flex w-full select-none flex-col gap-4 font-primary text-primary">
              <div className="flex flex-wrap items-center gap-4 text-4xl font-extrabold">
                {modalData.name}
                {modalData.url && (
                  <FiGlobe
                    className="h-6 w-6 flex-none cursor-pointer opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100"
                    onClick={() => window.open(modalData.url, '_blank')}
                  />
                )}
              </div>
              <div className="flex flex-wrap gap-x-3 text-secondary">
                {modalData.position} |{' '}
                {dayjs(modalData.startDate).format('MMM YYYY')} -{' '}
                {modalData.endDate
                  ? dayjs(modalData.endDate).format('MMM YYYY')
                  : 'Present'}
              </div>
              <p className="overflow-y-scroll">
                {jsonToParagraphs(modalData.summary)}
              </p>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}

const YearChunk = ({ year, data, setModalData }) => {
  return (
    <div className="relative flex h-full w-48 cursor-pointer items-center justify-center text-start text-6xl font-bold">
      <div className="absolute flex h-fit w-full flex-row-reverse items-center justify-between">
        {months.map((month, index) => {
          return (
            <div
              className=" flex w-full  items-center text-lg font-light"
              key={month}
            >
              <MonthChunk
                year={year}
                month={month}
                data={filterDataByPeriod(data, year, index)}
                setModalData={setModalData}
              />
            </div>
          )
        })}
      </div>
      <p className="relative text-secondary">{year}</p>
    </div>
  )
}

const MonthChunk = ({ data, setModalData }) => {
  const positive = data[0]?.id % 2 === 0
  return (
    <div
      className={`flex h-full w-full flex-col ${
        positive ? 'justify-end' : 'justify-start'
      } text-center`}
      onClick={() => {
        setModalData(data[0])
      }}
    >
      {!!data.length && (
        <div
          className={`relative flex ${
            positive ? 'mb-60 flex-col' : 'mt-60 flex-col-reverse'
          } h-60 flex-col items-center justify-center`}
        >
          <span className="relative z-10 flex h-10 w-10 flex-none rounded-full border-[3px]  border-primary drop-shadow-lg transition duration-300 ease-in-out hover:scale-110">
            <Image
              src={data[0]?.logo}
              alt={data[0]?.name}
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
