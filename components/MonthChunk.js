export const MonthChunk = ({ year, month, data }) => {
  return (
    <div
      className=""
      onClick={() => {
        console.log(year, month, data)
      }}
    >
      •
    </div>
  )
}
