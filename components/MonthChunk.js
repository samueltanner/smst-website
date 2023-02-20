export const MonthChunk = ({ year, month, data }) => {
  return (
    <div
      className="flex flex-col  text-center"
      onClick={() => {
        console.log(year, month, data)
      }}
    >
      {!!data.length && (
        <div className="mb-20 flex h-20 flex-col items-center">
          <span className="h-10 w-10 flex-none rounded-full border-2 border-primary" />
          <span className="h-full flex-none border-l-2 border-primary" />
          <span className="h-2 w-2 flex-none rounded-full bg-primary" />
        </div>
      )}
      {/* <p>•</p> */}
    </div>
  )
}
