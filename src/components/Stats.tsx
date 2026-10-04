import { useState } from 'preact/hooks'

import { State, useInterval } from '../lib/hooks'
import { formatTimestamp, random } from '../lib/utils'

interface Props {
  state: State
}

const Stats = (props: Props) => {
  const { startTimestamp, solvedFingerprints } = props.state
  const [elapsedTime, setElapsedTime] = useState(0)

  useInterval(() => {
    setElapsedTime(performance.now() - startTimestamp)
  }, random(40, 60))

  return (
    <div className="space-y-4 text-right">
      <div>
        <div className="mb-1">Score</div>
        {solvedFingerprints}
      </div>

      <div>
        <div className="mb-1">Zeit</div>
        {formatTimestamp(elapsedTime)}
      </div>
    </div>
  )
}

export default Stats
