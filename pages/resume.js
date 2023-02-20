import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MonthChunk } from '../components/MonthChunk'
// import { resume_data } from '../lib/data'
import dayjs from 'dayjs'

const resume_data = {
  work: [
    {
      name: 'CardSwapper',
      position: 'Co-Founder & CEO',
      startDate: '2013-02-28',
      endDate: '2016-06-30',
      highlights: [],
      summary:
        "The world's first peer-to-peer trading platform for unused and unwanted gift cards\n\n•Co-founded business as an undergraduate freshman at the University of Washington\n•Designed and wire-framed application \n•Hired and managed team to develop, and launch application on iOS app store\n•Raised seed funding from Jones + Foster Accelerator and from private investors\n•Wrote, submitted, and received patent from the \nUnited States Patent and Trademark Office for novel methods of digital gift card exchange \n•Partnered with nations largest gift card liquidation platform to launch cash-for-cards feature",
      url: 'https://www.linkedin.com/company/cardswapr/',
      location: 'Seattle, Washington, United States',
    },
    {
      name: 'University of Washington - School of Music',
      position: 'Student Visual and Audio Archiver',
      startDate: '2013-10-31',
      endDate: '2016-05-31',
      highlights: [],
      summary:
        '•Recorded, live-mixed, and produced live classical, jazz, choral, and orchestral performances in high-fidelity\n•Self-taught Logic Pro, Audacity, and Premiere Pro to increase quality of archived media \n•Hired independently by graduate students to produce thesis performances due to quality of work',
      url: 'https://www.linkedin.com/school/uw-school-of-music/',
      location: 'Seattle, Washington, United States',
    },
    {
      name: 'Tango Card, Inc.',
      position: 'Social Networking Intern',
      startDate: '2013-06-30',
      endDate: '2013-09-30',
      highlights: [],
      summary:
        '•Managed Facebook, Twitter, and Linkedin social profiles via Hootsuite \n•Deployed social marketing strategies focused on increasing relevance amongst key demographics\n•Nearly doubled Twitter following using unpaid-marketing strategies',
      url: 'https://www.linkedin.com/company/tango-card-inc/',
      location: 'Seattle, Washington, United States',
    },
  ],
}

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
        className="flex h-full w-screen items-end justify-start
         gap-1 overflow-y-scroll px-6 pb-20"
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
    <div className="relative flex h-full w-48 cursor-pointer items-end justify-center border-b-[10px] border-secondary text-start text-6xl font-bold text-primary">
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
      {year}
    </div>
  )
}
