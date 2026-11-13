interface CardDataProps {
  dataKey: string,
  dataValue: string
}

function CardMetadata({ dataKey, dataValue }: CardDataProps) {
  return (
    <div className="flex flex-col w-full text-xs">
      <span className="font-secondary">{dataKey}</span>
      <span className="font-secondary font-bold">{dataValue}</span>
    </div>
  )
}

function CardData({ dataKey, dataValue }: CardDataProps) {
  return (
    <div className="flex flex-col w-full text-sm">
      <span className="font-head font-bold">{dataKey}</span>
      <span className="font-secondary opacity-70">{dataValue}</span>
    </div>
  )
}

export { CardMetadata, CardData };